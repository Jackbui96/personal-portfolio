import { useState } from "react";
import { listOfProjects } from "./ProjectData";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter projects by category
    const filteredProjects = selectedCategory === "all"
        ? listOfProjects
        : listOfProjects.filter(project => project.category === selectedCategory);

    // Get unique categories from projects
    const categories = ["all", ...new Set(listOfProjects.flatMap(project => project.tags || "other"))];

    return (
        <section
            id="projects"
            className="min-h-screen snap-start bg-gradient-to-b from-gray-800/70 to-gray-900/70 flex flex-col items-center px-6 py-12 relative overflow-hidden"
        >
            {/* Background accent elements - Matching About page */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-6xl transition-all duration-1000 ease-out opacity-100 transform translate-y-0">
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
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white/10 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                                        >
                                            <Github size={18} />
                                            GitHub
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
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
        </section>
    );
}
