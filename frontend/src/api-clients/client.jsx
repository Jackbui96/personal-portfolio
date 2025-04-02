import axios from "axios";

export const downloadResume = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/v1/download/resume");
        return res.data;
    } catch (err) {
        console.error("Download failed: ", err);
    }
};
