import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { sendChatMessage } from "../../api-clients/chatbotClient.jsx";

const introduction = `
Hi, I'm Virtual Nguyen Bui, powered by Gemini. I can help answer basic questions
about me — such as my skills, experience, or background. How may I help you today?
`;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "Nguyen Bui", text: introduction, time: new Date() }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const messagesEndRef = useRef(null);
    const messageContainerRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-open chat after 20 seconds
    useEffect(() => {
        if (!hasAutoOpened) {
            const timer = setTimeout(() => {
                openChat();
                setHasAutoOpened(true);
            }, 20000)

            return () => clearTimeout(timer);
        }
    }, [hasAutoOpened]);

    // Auto-scroll to bottom when messages change
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 300); // Wait for animation to complete
        }
    }, [isOpen]);

    // Handle sending messages
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input, time: new Date() };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            await delay(Math.random() * 1000 + 1000); // Randomize typing time for realism
            const res = await sendChatMessage(input);

            if (res?.reply) {
                const botMessage = {
                    from: "Nguyen Bui",
                    text: res.reply,
                    time: new Date()
                };
                setMessages((prev) => [...prev, botMessage]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, {
                from: "Nguyen Bui",
                text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                time: new Date()
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // Handle open/close animation
    const [animationClass, setAnimationClass] = useState("");

    const openChat = () => {
        setIsOpen(true);
        setAnimationClass("animate-slide-in");
    };

    const closeChat = () => {
        setAnimationClass("animate-slide-out");
        setTimeout(() => {
            setIsOpen(false);
            setAnimationClass("");
        }, 300);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className={`relative w-80 sm:w-96 h-[500px] shadow-2xl ${animationClass}`}>
                    {/* Chat Container */}
                    <div
                        className="flex flex-col w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
                        {/* Header */}
                        <div className="bg-gray-800 text-white p-4 flex justify-between items-center border-b border-gray-700">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <h4 className="text-lg font-semibold">Nguyen Bui (Virtual)</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={closeChat}
                                    className="bg-gray-700 hover:bg-gray-600 text-white p-1.5 rounded-full transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4"/>
                                </button>
                            </div>
                        </div>

                        {/* Messages Container */}
                        <div
                            ref={messageContainerRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                        >
                            {messages.map((msg, index) => {
                                const isUser = msg.from === "user";
                                const timestamp = new Date(msg.time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                });

                                return (
                                    <div
                                        key={index}
                                        className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                                    >
                                        <div className={`flex max-w-[85%] ${isUser ? "flex-row-reverse" : ""} gap-2`}>
                                            {/* Avatar */}
                                            <div className={`flex-shrink-0 flex items-start pt-1`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                    isUser ? "bg-blue-600" : "bg-indigo-500"
                                                }`}>
                                                    {isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                                                </div>
                                            </div>

                                            {/* Message bubble */}
                                            <div className="flex flex-col">
                                                <div className={`p-3 rounded-2xl ${
                                                    isUser
                                                        ? "bg-blue-600 text-white rounded-tr-none"
                                                        : "bg-gray-700 text-white rounded-tl-none"
                                                } shadow-sm`}>
                                                    {msg.text}
                                                </div>
                                                <span className="text-xs text-gray-500 mt-1 self-start px-1">
                                                    {timestamp}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Typing indicator */}
                            {isTyping && (
                                <div className="flex justify-start animate-fade-in">
                                    <div className="flex gap-2">
                                        <div className="flex-shrink-0 flex items-start pt-1">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                                <Bot className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 bg-gray-700 text-white rounded-2xl rounded-tl-none shadow-sm">
                                            <div className="flex items-center gap-1">
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-700 bg-gray-800">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                    placeholder="Ask me anything..."
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className={`p-2 rounded-full transition-colors ${
                                        input.trim()
                                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                                            : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={openChat}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                    aria-label="Open chat"
                >
                    <MessageCircle className="w-5 h-5"/>
                    <span className="font-medium">Chat with me</span>
                </button>
            )}

            {/* Add these keyframe animations to your CSS or create a style tag */}
            <style jsx>{`
                @keyframes slide-in {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes slide-out {
                    from { transform: translateY(0); opacity: 1; }
                    to { transform: translateY(20px); opacity: 0; }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
