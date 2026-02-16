import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        // Only enable on desktop/non-touch to save performance
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsDesktop(true);
        }

        const moveCursor = (e) => {
            // Simple state update for now, performance will be lower but safe
            // In production we'd use requestAnimationFrame
            setPosition({ x: e.clientX - 100, y: e.clientY - 100 });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    if (!isDesktop) return null;

    return (
        <div
            className="fixed top-0 left-0 w-[200px] h-[200px] bg-steel/10 rounded-full blur-3xl pointer-events-none z-0 mix-blend-multiply transition-transform duration-75 ease-out"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        />
    );
};

export default CursorGlow;
