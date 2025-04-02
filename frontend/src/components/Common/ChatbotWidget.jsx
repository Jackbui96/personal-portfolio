import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { sendChatMessage } from "../../api-clients/chatbotClient.jsx";

const introduction = `
Hi, I'm Virtual Nguyen Bui, powered by Gemini. I can help answer basic questions
about me — such as my skills, experience, or background. How may I help you today?
`;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "Nguyen Bui", text: introduction, time: new Date()  }
    ])
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input, time: new Date() };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        await delay(3000); // ⏳ simulate typing for 3 seconds

        const res = await sendChatMessage(input);

        if (res?.reply) {
            const botMessage = {
                from: "Nguyen Bui",
                text: res.reply,
                time: new Date()
            };
            setMessages((prev) => [...prev, botMessage]);
        }

        setIsTyping(false);
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            { isOpen ? (
                <div className="relative w-90 h-120">
                    {/*Close Button*/ }
                    <button
                        onClick={ () => setIsOpen(false) }
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-1 rounded-full shadow-md z-10"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4"/>
                    </button>

                    {/*Chat Container*/ }
                    <div
                        className="flex flex-col w-full h-full bg-gray-700 shadow-xl rounded-2xl overflow-hidden items-center px-4 py-3">
                        {/*Header*/ }
                        <div className="text-white text-center py-2">
                            <h4 className="text-lg font-semibold">Get to know me</h4>
                        </div>

                        {/*Messages*/ }
                        <div className="flex-1 flex-col overflow-y-auto p-3 space-y-2 text-sm">
                            { messages.map((msg, index) => {
                                const isUser = msg.from === "user";
                                const timestamp = new Date(msg.time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                });

                                return (
                                    <div
                                        key={ index }
                                        className={ `flex flex-col p-2 rounded-lg max-w-[80%] ${
                                            isUser
                                                ? "self-end items-end ml-auto text-right"
                                                : "self-start items-start mr-auto text-left"
                                        }` }
                                    >
                                        <div className={ `p-2 rounded-lg ${
                                            isUser
                                                ? "bg-sky-500"
                                                : "bg-indigo-400"
                                        }` }>
                                            { msg.text }
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1 px-2 py-1">
                                            <span>{isUser ? "You" : "Nguyen Bui"}</span>
                                            <span>  </span>
                                            <span>{timestamp}</span>
                                        </div>

                                    </div>
                                )
                            }) }
                            {/* Typing animation */}
                            {isTyping && (
                                <div className="self-start inline-flex items-center gap-1 px-2 py-1 bg-indigo-400 text-white rounded-full text-sm font-mono">
                                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
                                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            )}
                        </div>

                        {/*Input*/ }
                        <div className="p-3 border-t flex gap-2">
                            <input
                                type="text"
                                value={ input }
                                onChange={ (e) => setInput(e.target.value) }
                                onKeyDown={ (e) => e.key === "Enter" && handleSend() }
                                className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none"
                                placeholder="Ask me anything..."
                            />
                            <button
                                onClick={ handleSend }
                                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={ () => setIsOpen(true) }
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
                >
                    <MessageCircle className="w-6 h-6"/>
                </button>
            ) }
        </div>
    )
}
