import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Database, Server, Laptop, Smartphone, Hammer } from "lucide-react";

const timelineContent = [
    {
        year: '2019',
        content:
            'Joined OmniPreSense and developed an iOS WiFi radar app using VIPER and RxSwift. Released a high-performance Android version with 1,000+ downloads and significant performance improvements.',
        icon: <Smartphone size={24} className="text-blue-500" />
    },
    {
        year: '2020',
        content:
            'Earned a B.S. in Software Engineering from San Jose State University, building a strong foundation in software design and systems thinking.',
        icon: <Laptop size={24} className="text-blue-500" />
    },
    {
        year: '2021',
        content:
            'Led the development of an Apple Watch-based healthcare tracking app at Atlas Lift Tech, improving patient safety through real-time system insights.',
        icon: <Smartphone size={24} className="text-blue-500" />
    },
    {
        year: '2022',
        content:
            'Designed and shipped RESTful APIs and optimized Bluetooth/MQTT connectivity for reliable, secure device communication across healthcare platforms.',
        icon: <Server size={24} className="text-blue-500" />
    },
    {
        year: '2023',
        content:
            'Concluded tenure at Atlas Lift Tech to pursue an M.S. in Software Engineering at San Jose State University, focusing on distributed systems and clean architecture.',
        icon: <Laptop size={24} className="text-blue-500" />
    },
    {
        year: '2024',
        content:
            'Transitioned into full-stack web development; rebuilt a traffic monitoring dashboard using the MERN stack, integrated AWS S3 with signed URL downloads, and implemented resume analytics with GraphQL + MongoDB.',
        icon: <Code size={24} className="text-blue-500" />
    },
    {
        year: '2025',
        content:
            'Completed M.S. in Software Engineering and actively seeking opportunities to drive impact through scalable, user-focused engineering.',
    },
];

// Tech stack data
const techStack = [
    { category: "Frontend", skills: ["React", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", skills: ["Node.js", "Express", "GraphQL"] },
    { category: "Database", skills: ["MongoDB", "InfluxDB"] },
    { category: "Mobile", skills: ["iOS (Swift)", "Android (Java/Kotlin)"] },
    { category: "Cloud", skills: ["AWS S3", "AWS Lambda"] },
    { category: "Tools", skills: ["Git", "Docker", "CI/CD"] }
];

export default function About() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeTab, setActiveTab] = useState("condense");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Handle scroll button visibility
    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
        }
    };

    useEffect(() => {
        if (activeTab === "timeline" && scrollRef.current) {
            checkScrollButtons();
            scrollRef.current.addEventListener('scroll', checkScrollButtons);
            window.addEventListener('resize', checkScrollButtons);

            return () => {
                if (scrollRef.current) {
                    scrollRef.current.removeEventListener('scroll', checkScrollButtons);
                }
                window.removeEventListener('resize', checkScrollButtons);
            };
        }
    }, [activeTab]);

    // Scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => setIsDragging(false);

    // Scroll buttons handlers
    const scrollLeftHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRightHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="about"
            className="min-h-screen snap-start bg-gradient-to-b from-gray-800/70 to-gray-900/70 flex flex-col items-center px-6 py-12 relative overflow-hidden"
        >
            {/* Background accent elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl font-bold mb-8 relative">
                About Me
                <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl mb-14">
                <div className="text-lg leading-relaxed text-gray-200">
                    <p className="text-justify mb-4">
                        I'm a <span className="text-blue-400">software engineer</span> with
                        <span className="text-blue-400"> 3+ years</span> in
                        <span className="text-blue-400"> mobile development</span>, now focused on
                        <span className="text-blue-400"> full-stack web development</span>. I build
                        <span className="text-blue-400"> scalable, user-first applications</span> using
                        <span className="text-blue-400"> React</span>,
                        <span className="text-blue-400"> Node.js</span>,
                        <span className="text-blue-400"> GraphQL</span>, and
                        <span className="text-blue-400"> MongoDB</span>, with a strong emphasis on
                        <span className="text-blue-400"> clean architecture</span> and
                        <span className="text-blue-400"> performance</span>.
                    </p>

                    <p className="text-justify">
                        Recently, I integrated <span className="text-blue-400">AWS S3</span> with
                        <span className="text-blue-400"> signed URL downloads</span> and built
                        <span className="text-blue-400"> resume analytics</span> via
                        <span className="text-blue-400"> GraphQL</span> +
                        <span className="text-blue-400"> MongoDB</span>. I'm also modernizing a
                        <span className="text-blue-400"> traffic monitoring dashboard</span> using
                        <span className="text-blue-400"> React</span> +
                        <span className="text-blue-400"> Tailwind</span>, preparing it to render
                        <span className="text-blue-400"> live metrics</span> from
                        <span className="text-blue-400"> InfluxDB</span>.
                    </p>
                </div>

                {/* Tech Stack Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10 text-left">
                    <h3 className="text-xl font-semibold mb-4 text-center text-white">Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                                    {tech.category === "Frontend" && <Code size={16} />}
                                    {tech.category === "Backend" && <Server size={16} />}
                                    {tech.category === "Database" && <Database size={16} />}
                                    {tech.category === "Mobile" && <Smartphone size={16} />}
                                    {tech.category === "Cloud" && <Server size={16} />}
                                    {tech.category === "Tools" && <Hammer size={16} />}
                                    {tech.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {tech.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-xs bg-white/10 rounded-full px-3 py-1 text-gray-200 hover:bg-blue-500/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold mb-8 text-center text-white relative">
                    My Journey
                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
                </h3>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mb-8">
                    {["condense", "timeline"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                                activeTab === tab
                                    ? "bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                            aria-pressed={activeTab === tab}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Condensed View */}
                {activeTab === "condense" && (
                    <div className="space-y-4 max-w-3xl mx-auto text-left">
                        {timelineContent.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-5 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-gray-800/50 rounded-full">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-blue-400">{item.year}</h4>
                                </div>
                                <p className="text-gray-200 text-sm">{item.content}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Timeline View with Navigation Buttons */}
                {activeTab === "timeline" && (
                    <div className="relative max-w-6xl mx-auto">
                        {/* Left scroll button */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollLeftHandler}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition-colors"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        )}

                        <div
                            ref={scrollRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            className={`flex gap-6 overflow-x-auto pb-4 px-8 scrollbar-none cursor-grab ${
                                isDragging ? "cursor-grabbing select-none" : ""
                            }`}
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {timelineContent.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-[280px] flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 bg-gray-800/50 rounded-full mb-4">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.year}</h4>
                                        <p className="text-gray-200 text-sm">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right scroll button */}
                        {canScrollRight && (
                            <button
                                onClick={scrollRightHandler}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition-colors"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
