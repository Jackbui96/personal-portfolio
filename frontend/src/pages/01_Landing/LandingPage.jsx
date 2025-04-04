import { useState, useEffect } from "react";
import goldenGateImg from "../../assets/golden_gate.jpg";

export default function LandingPage() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Create animation effect on page load
        setFadeIn(true);
    }, []);

    return (
        <section id="landing" className="relative h-screen snap-start overflow-hidden">
            {/* Background image with better performance */}
            <img
                className="absolute h-screen w-full object-cover blur-sm transform scale-105"
                src={ goldenGateImg }
                alt="Golden Gate Bridge"
                loading="eager"
            />

            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>

            {/* Content container with animation */}
            <div
                className={`relative z-10 flex flex-col items-center justify-center h-full px-4 text-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    Hi, I'm <span className="text-blue-400">Nguyen Bui</span>
                </h1>

                <p className="text-lg md:text-xl italic text-gray-300 mb-6 font-light tracking-wide">
                    "Get things done right."
                </p>

                <p className="text-xl md:text-2xl mb-10 max-w-2xl drop-shadow leading-relaxed">
                    A <span className="text-blue-400 font-medium">full-stack developer</span> with a passion for building beautiful, accessible, and high-performance web applications.
                </p>
            </div>
        </section>
    );
}
