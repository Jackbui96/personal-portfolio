import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ items }) {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Carousel Slide */}
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${index * 100}%)`, width: `${items.length * 100}%` }}>
                {items.map((project, i) => (
                    <div key={i} className="w-full flex-shrink-0 p-4">
                        <img src={project.image} alt={project.title} className="w-100% h-48 rounded-lg" />
                        <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full shadow hover:bg-gray-700"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full shadow hover:bg-gray-700"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
