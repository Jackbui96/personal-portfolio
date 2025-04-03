import { useState, useEffect } from "react";
import { scrollToSection } from "../utils/ScrollToSection.jsx";

const sections = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function ScrollDots() {
    const [activeSection, setActiveSection] = useState("landing");

    useEffect(() => {
        const observerOptions = {
            root: document.querySelector(".overflow-y-scroll"), // custom scroll container
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">
            <div className="absolute inset-0 -m-2 rounded-full bg-gray-900/20 backdrop-blur-sm -z-10 p-4"></div>

            {sections.map(({ id, label }) => (
                <div key={id} className="relative group">
                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform -translate-x-2 group-hover:translate-x-0">
                        {label}
                    </div>

                    <a
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(id);
                            setActiveSection(id);
                        }}
                        aria-label={`Scroll to ${label} section`}
                        className="block relative"
                    >
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                                activeSection === id
                                    ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/30"
                                    : "bg-white/50 hover:bg-white/70"
                            }`}
                        >
                            {activeSection === id && (
                                <div className="absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"></div>
                            )}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
