"use client";

import { useScroll, useSpring, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Configuration ---
const FRAME_COUNT = 120;
const SCROLL_HEIGHT = "500vh"; // Longer scroll for luxury feel
const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 0.3 };

// --- Text Beat Component ---
const TextBeat = ({
    children,
    opacity,
    y,
    className = ""
}: {
    children: React.ReactNode;
    opacity: MotionValue<number>;
    y: MotionValue<number>;
    className?: string;
}) => (
    <motion.div
        style={{ opacity, y }}
        className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${className}`}
    >
        {children}
    </motion.div>
);

export default function BicycleSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
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
        let isCancelled = false;
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const filename = `/sequence/frame_${i.toString().padStart(4, "0")}.webp`;
                promises.push(
                    new Promise<HTMLImageElement>((resolve) => {
                        const img = new Image();
                        img.src = filename;
                        img.onload = () => {
                            if (!isCancelled) setLoadedCount((prev) => prev + 1);
                            resolve(img);
                        };
                        img.onerror = () => resolve(new Image());
                    })
                );
            }
            const results = await Promise.all(promises);
            if (!isCancelled) {
                setImages(results);
                setIsLoading(false);
            }
        };
        loadImages();
        return () => { isCancelled = true; };
    }, []);

    // --- Canvas Logic (Render + Resize) ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        // Drawing Logic
        const render = (index: number) => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // Ensure canvas internal dim matches physical pixels
            // This check prevents unnecessary internal resizing on every frame if not needed,
            // but resizeObserver handles the trigger.
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
                dh = ch;
                dw = ch * ir;
                ox = (cw - dw) / 2;
                oy = 0;
            } else {
                dw = cw;
                dh = cw / ir;
                ox = 0;
                oy = (ch - dh) / 2;
            }

            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, cw, ch);
            ctx.drawImage(img, ox, oy, dw, dh);
        };

        // 1. Reactive Rendering (Only draw when frameIndex changes) - Performance
        const unsubscribeScroll = frameIndex.on("change", (latest) => {
            // Use requestAnimationFrame to sync with screen refresh
            requestAnimationFrame(() => render(latest));
        });

        // 2. Resize Handling - Robustness
        const resizeObserver = new ResizeObserver(() => {
            // Re-render current frame on resize
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
        <div ref={containerRef} className="relative w-full" style={{ height: SCROLL_HEIGHT }}>
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">

                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                {/* Loading UI - Minimal */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-50 transition-opacity duration-500">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-[1px] w-32 bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-white/80"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                />
                            </div>
                            <div className="text-white/40 font-mono text-[10px] tracking-[0.2em]">
                                SYSTEM INITIALIZING {percent}%
                            </div>
                        </div>
                    </div>
                )}

                {/* Text Container */}
                <div className="absolute inset-0 container mx-auto px-6 md:px-12 pointer-events-none mix-blend-difference">
                    {/* Note: mix-blend-difference can look cool on dark/light, but standard white text is safer for 'Luxury'. 
              The prompt asked for "Heading: text-white/90". I'll stick to that. 
              Removing mix-blend-difference to be safe unless requested.
          */}
                </div>
                <div className="absolute inset-0 container mx-auto px-6 md:px-12 pointer-events-none">

                    {/* Beat A */}
                    <TextBeat opacity={opacityA} y={yA} className="items-center text-center">
                        <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white/90">
                            Precision<br />Redefined.
                        </h1>
                        <p className="mt-8 text-xs md:text-sm text-white/40 uppercase tracking-[0.2em]">
                            Scroll to explore
                        </p>
                    </TextBeat>

                    {/* Beat B */}
                    <TextBeat opacity={opacityB} y={yB} className="items-start text-left pl-4 md:pl-20">
                        <div className="max-w-md border-l border-white/10 pl-6">
                            <h2 className="text-2xl md:text-4xl text-white/80 mb-4 font-light">Intelligent Separation</h2>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                                Every component is isolated in a frictionless void.
                                <br />
                                We remove the noise to reveal the engineering.
                            </p>
                        </div>
                    </TextBeat>

                    {/* Beat C */}
                    <TextBeat opacity={opacityC} y={yC} className="items-end text-right pr-4 md:pr-20">
                        <div className="max-w-md border-r border-white/10 pr-6">
                            <h2 className="text-2xl md:text-4xl text-white/80 mb-4 font-light">System Architecture</h2>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                                Advanced composite materials meet aerospace-grade tolerance.
                                <br />
                                Designed for absolute performance.
                            </p>
                        </div>
                    </TextBeat>

                    {/* Beat D */}
                    <TextBeat opacity={opacityD} y={yD} className="items-center text-center">
                        <h2 className="text-3xl md:text-6xl text-white/90 mb-8 font-medium">
                            Order Complexity.
                        </h2>
                        <button className="pointer-events-auto group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden hover:border-white/30 transition-all">
                            <span className="relative z-10 text-xs text-white/90 uppercase tracking-[0.2em] group-hover:text-white">Configure Build</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                    </TextBeat>

                </div>
            </div>
        </div>
    );
}
