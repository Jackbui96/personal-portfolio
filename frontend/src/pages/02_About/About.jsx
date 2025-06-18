import {
    Code, Database, Server, Laptop, Smartphone, Hammer, Loader
} from "lucide-react";
import { downloadResume } from "../../api-clients/client.jsx";
import { useState } from "react";

const journeyContent = [
    {
        year: '2019',
        content:
            'Joined OmniPreSense as a Software Engineer and developed mobile applications and backend systems, building scalable solutions for traffic monitoring and radar applications.',
        icon: <Smartphone size={24} className="text-blue-500" />,
    },
    {
        year: '2020',
        content:
            'Earned a B.S. in Software Engineering from San Jose State University, gaining a strong foundation in software design and systems thinking.',
        icon: <Laptop size={24} className="text-blue-500" />,
    },
    {
        year: '2021',
        content:
            'Transitioned to Atlas Lift Tech as a Software Engineer, developing SensorSuite healthcare monitoring application and building HIPAA-compliant RESTful APIs for clinical settings.',
        icon: <Server size={24} className="text-blue-500" />,
    },
    {
        year: '2022',
        content:
            'Enhanced healthcare systems at Atlas Lift Tech by implementing data synchronization using MQTT and Bluetooth protocols, delivering 5+ key features for patient safety monitoring.',
        icon: <Server size={24} className="text-blue-500" />,
    },
    {
        year: '2023',
        content:
            'Completed work at Atlas Lift Tech and began pursuing an M.S. in Software Engineering at San Jose State University full-time, focusing on AI/ML and distributed systems.',
        icon: <Laptop size={24} className="text-blue-500" />,
    },
    {
        year: '2024',
        content:
            'Developed AI-powered customer support systems using LLMs and RAG for graduate capstone project. Returned to OmniPreSense in December to rebuild traffic monitoring infrastructure.',
        icon: <Code size={24} className="text-blue-500" />,
    },
    {
        year: '2025',
        content:
            'Completed M.S. in Software Engineering and currently leading technical initiatives at OmniPreSense, improving system performance by 40% and supporting 10,000+ concurrent users.',
        icon: <Laptop size={24} className="text-blue-500" />,
    },
];

// Tech stack data
const techStack = [
    {category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Material UI", "JavaScript", "TypeScript"]},
    {category: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "Python", "GraphQL", "REST APIs"]},
    {category: "Database", skills: ["MongoDB", "PostgreSQL", "BigQuery", "InfluxDB"]},
    {category: "Mobile", skills: ["iOS (Swift)", "Android (Java/Kotlin)"]},
    {category: "Cloud/DevOps", skills: ["AWS (EC2, S3, ECR/ECS)", "Docker", "CI/CD", "Git"]},
    {category: "AI/ML", skills: ["TensorFlow", "HuggingFace", "RAG Systems", "Python"]},
];

export default function About() {
    const [isDownloading, setIsDownloading] = useState(false);

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
            }
        } catch (err) {
            console.error("Resume download failed:", err.message);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <section
            id="about"
            className="
                min-h-screen snap-start bg-gradient-to-b from-gray-800/70 to-gray-900/70 flex flex-col
                items-center px-6 py-12 relative overflow-hidden
            "
        >
            {/* Background accent elements */ }
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl font-bold mb-8 relative">
                About Me
                <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl mb-14">
                <div className="text-lg leading-relaxed text-gray-200 space-y-4">
                    <p className="text-justify">
                        I'm a <span className="text-blue-400">software engineer</span> with
                        <span className="text-blue-400"> 4+ years of professional experience</span> building
                        <span className="text-blue-400"> scalable web applications</span>,
                        <span className="text-blue-400"> mobile solutions</span>, and
                        <span className="text-blue-400"> AI/ML systems</span>. Recent
                        <span className="text-blue-400"> M.S. graduate</span> with expertise in
                        <span className="text-blue-400"> full-stack development</span>,
                        <span className="text-blue-400"> cloud infrastructure</span>, and
                        <span className="text-blue-400"> machine learning</span>. I build
                        <span className="text-blue-400"> scalable, user-centric applications</span> using
                        <span className="text-blue-400"> React</span>,
                        <span className="text-blue-400"> Node.js</span>,
                        <span className="text-blue-400"> Python</span>, and
                        <span className="text-blue-400"> AWS</span> &mdash; with a proven track record of delivering
                        <span className="text-blue-400"> production systems</span> serving
                        <span className="text-blue-400"> thousands of users</span> across
                        <span className="text-blue-400"> healthcare and technology sectors</span>.
                    </p>

                    <p className="text-justify">
                        Recently, I integrated <span className="text-blue-400">AWS S3</span> with
                        <span className="text-blue-400"> signed URL downloads</span> and built
                        <span className="text-blue-400"> resume analytics</span> using
                        <span className="text-blue-400"> GraphQL</span> and
                        <span className="text-blue-400"> MongoDB</span>. I'm also modernizing a
                        <span className="text-blue-400"> traffic monitoring dashboard</span> using
                        <span className="text-blue-400"> React</span> and
                        <span className="text-blue-400"> Tailwind</span>, preparing it to display
                        <span className="text-blue-400"> live metrics</span> from
                        <span className="text-blue-400"> InfluxDB</span>.
                    </p>

                    <div className="text-justify">
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className={`
                            inline-flex items-center gap-2 text-blue-400 transition-colors
                            ${isDownloading ? 
                                'opacity-50 cursor-not-allowed pointer-events-none' :
                                'hover:text-blue-300 cursor-pointer'}
                            `}
                        >
                            <span>Download my resume</span>
                            {isDownloading ? (
                                <Loader className="animate-spin" size={16} />
                                ) : null}
                        </button>
                    </div>
                </div>

                {/* Tech Stack Section */ }
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10 text-left">
                    <h3 className="text-xl font-semibold mb-4 text-center text-white">Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-4">
                        { techStack.map((tech, index) => (
                            <div key={ index } className="mb-4">
                                <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                                    { tech.category === "Frontend" && <Code size={ 16 }/> }
                                    { tech.category === "Backend" && <Server size={ 16 }/> }
                                    { tech.category === "Database" && <Database size={ 16 }/> }
                                    { tech.category === "Mobile" && <Smartphone size={ 16 }/> }
                                    { tech.category === "Cloud" && <Server size={ 16 }/> }
                                    { tech.category === "Tools" && <Hammer size={ 16 }/> }
                                    { tech.category }
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    { tech.skills.map((skill, skillIndex) => (
                                        <span
                                            key={ skillIndex }
                                            className="text-xs bg-white/10 rounded-full px-3 py-1 text-gray-200 hover:bg-blue-500/30 transition-colors"
                                        >
                                            { skill }
                                        </span>
                                    )) }
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl mb-12">
                <h3 className="text-2xl font-semibold mb-8 text-center text-white relative">
                    My Journey
                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
                </h3>

                <div className="relative">
                    <div className="max-w-3xl mx-auto text-left">
                        <div className="relative">
                            <div className="max-h-[40vh] overflow-y-auto pr-2 rounded-lg scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800/40">
                                <div className="space-y-4 pb-6">
                                    { journeyContent.map((item, index) => (
                                        <div
                                            key={ index }
                                            className="bg-white/10 border border-white/10 rounded-lg p-5 shadow-lg"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-gray-800/50 rounded-full">
                                                    { item.icon || <Laptop size={ 24 } className="text-blue-500"/> }
                                                </div>
                                                <h4 className="text-lg font-semibold text-blue-400 flex-grow">{ item.year }</h4>
                                            </div>

                                            <div className={ `overflow-hidden transition-all duration-300 max-h-16` }>
                                                <p className="text-gray-200 text-sm">{ item.content }</p>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
