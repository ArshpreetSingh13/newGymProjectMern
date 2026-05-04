const { GoogleGenAI } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const main = async (req, res) => {
    try {
        const  prompt  = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required"
            });
        }

        // ✅ FITNESS DOMAIN RESTRICTION PROMPT
        const fitnessPrompt = `
You are a professional fitness trainer chatbot for a gym named FITLAB.

Rules:
- ONLY answer fitness related questions (gym, workout, diet, muscle gain, fat loss)
- If question is NOT related to fitness, reply:
  "I can only help with fitness, gym, diet, and workout related queries 💪"
- Keep answers simple and practical
- No long paragraphs

User Question:
${prompt}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: fitnessPrompt,
        });

        const text =
            response?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response";

        return res.status(200).json({
            success: true,
            data: text
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { main };