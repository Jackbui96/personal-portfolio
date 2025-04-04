import { useState, useEffect } from "react";
import goldenGateImg from "../../assets/golden_gate.jpg";
import { downloadResume } from "../../api-clients/client.jsx";
import { Download, Code, User } from "lucide-react";

export default function LandingPage() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Create animation effect on page load
        setFadeIn(true);
    }, []);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const res = await downloadResume();

            if (res?.url) {
                const link = document.createElement("a");
                link.href = res.url;
                link.setAttribute("download", "Nguyen_Bui_Resume.pdf");
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                console.error("Download URL not found.");
                // Consider adding user feedback here with a toast notification
            }
        } catch (err) {
            console.error("Resume download failed:", err.message);
            // Add visual feedback for the user when error occurs
        } finally {
            setIsDownloading(false);
        }
    };

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
                    "Get it done right."
                </p>

                <p className="text-xl md:text-2xl mb-10 max-w-2xl drop-shadow leading-relaxed">
                    A <span className="text-blue-400 font-medium">frontend developer</span> passionate about building beautiful, accessible, and performant web applications.
                </p>

                {/* Buttons with improved hover effects and icons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 rounded-xl text-lg shadow-lg group"
                    >
                        <Code size={18} className="group-hover:animate-pulse" />
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black transition-all hover:scale-105 rounded-xl text-lg shadow-lg group"
                    >
                        <User size={18} className="group-hover:animate-pulse" />
                        Contact Me
                    </a>

                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg group"
                    >
                        <Download size={18} className={isDownloading ? "animate-bounce" : "group-hover:animate-pulse"} />
                        {isDownloading ? "Downloading..." : "Download Resume"}
                    </button>
                </div>
            </div>
        </section>
    );
}
