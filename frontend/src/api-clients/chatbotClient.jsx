import axios from  "axios";

const API_BASE = "http://localhost:5000/api/v1/chat";

export const sendChatMessage = async (message) => {
    try {
        const res = await axios.post(`${API_BASE}/chatRequest`, { message });
        return res.data;
    } catch (err) {
        console.error("Chat API error:", err);
        return { reply: "Sorry, something went wrong." };
    }
};
