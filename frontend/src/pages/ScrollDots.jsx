import { scrollToSection } from "../utils/ScrollToSection.jsx";

const sections = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
]

export default function ScrollDots() {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {sections.map(({id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                    }}
                    className="group flex items-center gap-2 text-gray-400 hover:text-blue-500 transition"
                >
                    <span className="text-sm hidden sm:inline group-hover:font-semibold">{label}</span>
                    <div className="w-3 h-3 rounded-full bg-current"/>
                </a>
            ))}
        </div>
    );
}
