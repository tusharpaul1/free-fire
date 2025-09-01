
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is available.
  console.warn("API_KEY is not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getGameTips = async (topic: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Provide some pro-level tips for a Free Fire player about the following topic: "${topic}". Format the response in clear, concise bullet points using markdown.`,
        config: {
            systemInstruction: "You are a professional Free Fire esports coach. You give expert advice that is easy to understand for all players.",
            temperature: 0.7,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I couldn't get any tips right now. Please try again later.";
  }
};
