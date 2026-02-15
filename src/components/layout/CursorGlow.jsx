import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only enable on desktop/non-touch to save performance
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsDesktop(true);
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 100); // Center the 200px glow
            cursorY.set(e.clientY - 100);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!isDesktop) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[200px] h-[200px] bg-steel/10 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    );
};

export default CursorGlow;
