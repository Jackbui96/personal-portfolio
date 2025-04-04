import { useState } from "react";
import { listOfProjects } from "./ProjectData";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [displayedProjects, setDisplayedProjects] = useState(listOfProjects);
    const [isFading, setIsFading] = useState(false);

    // All unique categories
    const categories = ["all", ...new Set(listOfProjects.map(project => project.category))];

    // Capitalize helper
    const capitalizeWords = (str) =>
        str
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

    // Handle category change with fade
    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;
        setIsFading(true);

        setTimeout(() => {
            setSelectedCategory(category);

            const filtered = category === "all"
                ? listOfProjects
                : listOfProjects.filter((project) => project.category === category);

            setDisplayedProjects(filtered);
            setIsFading(false);
        }, 250); // 250ms fade-out before swap
    };

    return (
        <section
            id="projects"
            className="min-h-screen snap-start bg-gradient-to-b from-gray-800/70 to-gray-900/70 flex flex-col items-center px-6 py-12 relative overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-2 relative">
                    My Projects
                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
                </h2>
                <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                    A showcase of my recent work in full-stack development, from real-time analytics
                    to data visualization applications.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                            }`}
                        >
                            {capitalizeWords(category)}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div
                    className={`transition-opacity duration-500 ease-in-out ${
                        isFading ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {displayedProjects.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {displayedProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white/10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-blue-500/20 text-blue-100 px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg">
                            <p className="text-gray-300">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
