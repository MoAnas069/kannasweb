import BicycleSequence from "../components/BicycleSequence";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <BicycleSequence />

            {/* Optional: Add a footer or other sections here if needed later 
          For now, the requested scope is the flagship landing experience which is fully contained 
          in the sequence.
      */}
            <div className="h-screen flex items-center justify-center bg-[#050505] text-white/20">
                <p className="text-xs tracking-widest uppercase">
                    Engineering Excellence &copy; 2024
                </p>
            </div>
        </main>
    );
}
