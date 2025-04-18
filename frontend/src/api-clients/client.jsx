import axios from "axios";

const API_BASE = "https://api.a-pani.com";

export const downloadResume = async () => {
    try {
        const res = await axios.get(`${API_BASE}/v1/resume`);
        return res.data;
    } catch (err) {
        console.error("Download failed: ", err);
    }
};

export const trackVisit = async () => {
    try {
        const res = await axios.post(`${API_BASE}/web-tracking/graphql`, {
            query: `
            mutation {
                trackVisit(
                    path: "${window.location.pathname}",
                    userAgent: "${navigator.userAgent}"
                )
            }
            `
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        console.log("📦 GraphQL response:", res.data);
        if (res.data.errors) {
            console.error("❌ trackVisit error:", res.data.errors);
        }
    } catch (error) {
        console.error("❌ trackVisit failed:", error);
    }
};
