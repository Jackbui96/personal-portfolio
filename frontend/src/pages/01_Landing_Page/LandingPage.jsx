import goldenGateImg from "../../assets/golden_gate.jpg";
import { downloadResume } from "../../api-clients/client.jsx";
import { useState } from "react";

export default function LandingPage() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const res = await downloadResume();

            if (res?.url) {
                console.log(res.url);
                const link = document.createElement("a");
                link.href = res.url;
                link.setAttribute("download", "Nguyen_Bui_Resume.pdf");
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                console.error("Download URL not found.");
            }
        } catch (err) {
            console.error("Resume download failed:", err.message);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <section id="landing" className="relative h-screen snap-start">
            <img
                className="absolute h-screen object-cover blur-md"
                src={ goldenGateImg }
                alt="Golden Gate"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/70 to-gray-900/70"></div>
            {/* Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center bg-opacity-40">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
                    Hi, I'm Nguyen Bui
                </h1>
                <p className="text-lg italic text-gray-300 mb-4">"Get it done right."</p>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow">
                    A frontend developer passionate about building beautiful, accessible, and performant web applications.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg shadow-md"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-xl text-lg shadow-md"
                    >
                        Contact Me
                    </a>
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDownloading ? "Downloading..." : "Download Resume"}
                    </button>
                </div>
            </div>
        </section>
    )
}
