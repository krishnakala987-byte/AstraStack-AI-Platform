const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    service: "AI Ops Service Running",
  });
});

app.post("/analyze", async (req, res) => {
  try {
    const { logs } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are an AI DevOps assistant analyzing infrastructure logs.",
        },
        {
          role: "user",
          content: `Analyze these logs and explain the issue:\n${logs}`,
        },
      ],
    });

    res.json({
      logs,
      analysis: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI analysis failed",
      details: error.message,
    });
  }
});

app.listen(4000, () => {
  console.log("ai-ops-service running on port 4000");
});