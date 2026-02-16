import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Configuration ---
const FRAME_COUNT = 240; // 240 frames found in public/sequence
const SCROLL_HEIGHT = "800vh"; // Increased scroll height for more frames
const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 0.3 };

// --- Text Beat Component ---
const TextBeat = ({ children, opacity, y, className = "" }) => (
    <motion.div
        style={{ opacity, y }}
        className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${className}`}
    >
        {children}
    </motion.div>
);

export default function BicycleSequence() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // --- Scroll Logic ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // --- Animation Beats ---
    // Adjusted for 240 frames / longer scroll
    // Beat A: 0-20%
    const opacityA = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const yA = useTransform(smoothProgress, [0, 0.2], [24, -24]);

    // Beat B: 25-45%
    const opacityB = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const yB = useTransform(smoothProgress, [0.25, 0.45], [24, -24]);

    // Beat C: 50-70%
    const opacityC = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
    const yC = useTransform(smoothProgress, [0.5, 0.7], [24, -24]);

    // Beat D: 75-95%
    const opacityD = useTransform(smoothProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
    const yD = useTransform(smoothProgress, [0.75, 0.95], [24, -24]);


    // --- Image Preloading ---
    useEffect(() => {
        console.log('🎬 BicycleSequence: Starting image preload...');
        let isCancelled = false;
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                // Updated to matching filename format and .jpg extension
                const filename = `/sequence/frame_${i.toString().padStart(4, "0")}.jpg`;
                promises.push(
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = filename;
                        img.onload = () => {
                            if (!isCancelled) setLoadedCount((prev) => prev + 1);
                            resolve(img);
                        };
                        img.onerror = () => {
                            console.error(`Failed to load: ${filename}`);
                            resolve(new Image());
                        };
                    })
                );
            }
            const results = await Promise.all(promises);
            if (!isCancelled) {
                console.log(`✅ BicycleSequence: Loaded ${results.length} images`);
                setImages(results);
                setIsLoading(false);
            }
        };
        loadImages();
        return () => {
            console.log('🛑 BicycleSequence: Cleanup');
            isCancelled = true;
        };
    }, []);

    // --- Canvas Logic (Render + Resize) ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        // Drawing Logic
        const render = (index) => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
            }

            const rawIndex = Math.floor(index);
            const safeIndex = Math.min(Math.max(rawIndex, 0), images.length - 1);
            const img = images[safeIndex];

            if (!img || !img.complete || !img.naturalWidth) return;

            const cw = rect.width;
            const ch = rect.height;
            const ir = img.naturalWidth / img.naturalHeight;
            const cr = cw / ch;

            let dw, dh, ox, oy;
            if (ir > cr) {
                // Image wider than canvas (crop sides)
                dh = ch;
                dw = ch * ir;
                ox = (cw - dw) / 2;
                oy = 0;
            } else {
                // Image taller/equal (crop top/bottom)
                dw = cw;
                dh = cw / ir;
                ox = 0;
                oy = (ch - dh) / 2;
            }

            ctx.fillStyle = "#FAFAF8";
            ctx.fillRect(0, 0, cw, ch);
            ctx.drawImage(img, ox, oy, dw, dh);
        };

        // 1. Reactive Rendering
        const unsubscribeScroll = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        // 2. Resize Handling
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => render(frameIndex.get()));
        });
        resizeObserver.observe(canvas);

        // Initial Draw
        render(frameIndex.get());

        return () => {
            unsubscribeScroll();
            resizeObserver.disconnect();
        };
    }, [images, frameIndex]);

    const percent = Math.floor((loadedCount / FRAME_COUNT) * 100);

    return (
        <div ref={containerRef} className="relative w-full bg-executive" style={{ height: SCROLL_HEIGHT }}>
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-executive">

                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                {/* Loading UI */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-executive z-50 transition-opacity duration-500">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-[1px] w-32 bg-graphite/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-graphite/80"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                />
                            </div>
                            <div className="text-graphite/40 font-display text-[10px] tracking-[0.2em]">
                                SYSTEM INITIALIZING {percent}%
                            </div>
                        </div>
                    </div>
                )}

                {/* Story Beats */}
                <div className="absolute inset-0 container mx-auto px-6 md:px-12 pointer-events-none">

                    {/* Beat A */}
                    <TextBeat opacity={opacityA} y={yA} className="items-center text-center">
                        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight text-graphite">
                            Precision<br />Redefined.
                        </h1>
                        <p className="mt-8 text-xs md:text-sm text-graphite/40 uppercase tracking-[0.2em] font-medium">
                            Scroll to explore
                        </p>
                    </TextBeat>

                    {/* Beat B */}
                    <TextBeat opacity={opacityB} y={yB} className="items-start text-left pl-4 md:pl-20">
                        <div className="max-w-md border-l border-graphite/10 pl-6">
                            <h2 className="text-2xl md:text-4xl text-graphite mb-4 font-display font-medium">Intelligent Separation</h2>
                            <p className="text-base md:text-lg text-graphite/60 leading-relaxed font-light">
                                Every component is isolated in a frictionless void.
                                <br />
                                We remove the noise to reveal the engineering.
                            </p>
                        </div>
                    </TextBeat>

                    {/* Beat C */}
                    <TextBeat opacity={opacityC} y={yC} className="items-end text-right pr-4 md:pr-20">
                        <div className="max-w-md border-r border-graphite/10 pr-6">
                            <h2 className="text-2xl md:text-4xl text-graphite mb-4 font-display font-medium">System Architecture</h2>
                            <p className="text-base md:text-lg text-graphite/60 leading-relaxed font-light">
                                Advanced composite materials meet aerospace-grade tolerance.
                                <br />
                                Designed for absolute performance.
                            </p>
                        </div>
                    </TextBeat>

                    {/* Beat D */}
                    <TextBeat opacity={opacityD} y={yD} className="items-center text-center">
                        <h2 className="text-3xl md:text-6xl text-graphite mb-8 font-display font-medium">
                            Order Complexity.
                        </h2>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => window.location.href = '/contact'}
                            className="shadow-xl shadow-graphite/20"
                        >
                            Configure Build
                        </Button>
                    </TextBeat>

                </div>
            </div>
        </div>
    );
}
