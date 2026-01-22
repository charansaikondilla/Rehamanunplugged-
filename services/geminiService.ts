
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY || "";

export const sendMessageToMentor = async (userMessage: string) => {
  if (!API_KEY) {
    return "API Key is not configured. Please check your environment.";
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are the AI Mentor for Rehaman Mohammed's community. Your goal is to inspire and provide high-level mentorship and coaching advice. Be professional, strategic, and encouraging. Rehaman is a world-class mentor and coach focusing on leadership, personal growth, and digital empires. Refer to the 'Elite Mentorship Program' and 'Strategy Vault' when relevant."
    });

    const result = await model.generateContent(userMessage);
    const response = result.response;
    const text = response.text();

    return text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the mentor AI. Please try again later.";
  }
};
