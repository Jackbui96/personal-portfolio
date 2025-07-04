import axios from  "axios";

const API_BASE = "https://api.a-pani.com/v1/gemini";

export const sendChatMessage = async (message) => {
    try {
        const res = await axios.post(`${API_BASE}/chat`, { message });
        return res.data;
    } catch (err) {
        console.error("Chat API error:", err);
        return { reply: "Sorry, something went wrong." };
    }
};
