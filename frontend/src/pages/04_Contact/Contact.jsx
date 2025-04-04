import { Mail, Linkedin, Github, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen snap-start bg-gradient-to-b from-gray-900/70 to-gray-800/70 flex flex-col items-center px-6 py-12 relative overflow-hidden"
        >
            {/* Background accent elements - Matching About page */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-2 relative">
                    Get In Touch
                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 mx-auto"></div>
                </h2>
                <p className="text-lg text-gray-300 text-center mb-10 max-w-xl mx-auto">
                    Whether it's for work, collaboration, or just a chat, feel free to reach out!
                </p>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="md:col-span-2 flex flex-col">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h3>

                            <div className="space-y-4">
                                <a
                                    href="tel:7272765984"
                                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="p-2 bg-blue-500/20 rounded-full">
                                        <Phone size={18} className="text-blue-400" />
                                    </div>
                                    <span>(727) 276-5984</span>
                                </a>

                                <a
                                    href="mailto:nguyenbui1996@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="p-2 bg-blue-500/20 rounded-full">
                                        <Mail size={18} className="text-blue-400" />
                                    </div>
                                    <span>nguyenbui1996@gmail.com</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/nguyen-hk-bui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="p-2 bg-blue-500/20 rounded-full">
                                        <Linkedin size={18} className="text-blue-400" />
                                    </div>
                                    <span>linkedin.com/in/nguyen-hk-bui</span>
                                </a>

                                <a
                                    href="https://github.com/Jackbui96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="p-2 bg-blue-500/20 rounded-full">
                                        <Github size={18} className="text-blue-400" />
                                    </div>
                                    <span>github.com/Jackbui96</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Current Status</h3>
                            <p className="text-gray-300 mb-4">
                                Currently available for full-stack development opportunities in the San Francisco Bay Area or remote positions.
                            </p>
                            <a
                                href="/#landing"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <span>Download my resume</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Project Inquiries Section - Replacing Contact Form */}
                    <div className="md:col-span-3">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">What I'm Looking For</h3>

                            <div className="space-y-6">
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <h4 className="text-lg font-medium text-blue-300 mb-2">Preferred Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Node.js", "GraphQL", "MongoDB", "AWS", "Tailwind CSS", "JavaScript", "Java", "Spring Boot"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <h4 className="text-lg font-medium text-blue-300 mb-2">Ideal Opportunities</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <div className="text-blue-400 mr-2">•</div>
                                            <p>Full-stack developer positions utilizing modern JavaScript frameworks</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="text-blue-400 mr-2">•</div>
                                            <p>Roles focusing on building scalable applications with clean architecture</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="text-blue-400 mr-2">•</div>
                                            <p>Teams that value code quality, testing, and continuous improvement</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <h4 className="text-lg font-medium text-blue-300 mb-2">Thank You for Visiting</h4>
                                    <p className="text-gray-300 mb-4">
                                        I appreciate you taking the time to explore my portfolio and learn about my work. Your interest means a lot to me, and I'm grateful for the opportunity to share my journey and projects with you.
                                    </p>
                                    <p className="text-gray-300 mb-4">
                                        Feel free to reach out through any of the contact methods listed if you'd like to connect or discuss potential collaborations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
