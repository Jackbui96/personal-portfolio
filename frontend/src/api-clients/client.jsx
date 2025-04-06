import axios from "axios";

const API_BASE = "https://api.a-pani.com/v1/download";

export const downloadResume = async () => {
    try {
        const res = await axios.get(`${API_BASE}/resume`);
        return res.data;
    } catch (err) {
        console.error("Download failed: ", err);
    }
};
