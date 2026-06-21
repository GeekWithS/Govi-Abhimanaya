const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AQ.Ab8RN6IbYpS3EreSfXWqFNgRk_j6PwnhXIPBejyVtbSGflVfbwY"); 

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You are Govi Abhimanaya AI, a Sri Lankan agricultural expert. Answer this farmer's question simply and practically in under 4 sentences: ${message}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "I am experiencing network issues. Please contact the 1920 hotline." });
  }
});