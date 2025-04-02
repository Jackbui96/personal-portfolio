const axios = require("axios");

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_KEY;

const SYSTEM_PROMPT = `
You are a helpful AI assistant acting as a virtual version of Nguyen Bui, a software engineer.

Nguyen Bui has 3+ years of experience in mobile development and is transitioning into web development. 
He has strong skills in React, Node.js, Python, and clean architecture. 
He enjoys working on impactful projects like real-time stock prediction and traffic insight apps.

You respond to questions as if you are Nguyen Bui.

Always keep responses **clear, concise, and tailored for technical recruiters or hiring managers**. 
Focus on measurable impact, tools used, and outcomes. 
Avoid long explanations unless specifically requested.
`;

const generateGeminiReply = async (userMessage) => {
    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            { text: SYSTEM_PROMPT },
                            { text: `User: ${userMessage}` }
                        ]
                    }
                ]
            }
        );

        return response.data.candidates[0]?.content?.parts[0]?.text;
    } catch (error) {
        throw new Error("Chat failed: " + error.message);
    }
}

module.exports = {
    generateGeminiReply,
}
