import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

if (!GROQ_API_KEY) {
  console.warn("[WARN] GROQ_API_KEY is not set. Set it in your environment before starting the server.");
}

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, model = "llama-3.1-8b-instant", temperature = 0.6 } = req.body || {};
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages array is required" });
    }
    const resp = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        temperature,
        messages
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return res.status(resp.status).json({ error: "Groq API error", details: errText });
    }

    const data = await resp.json();
    return res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "server_error", details: String(err) });
  }
});

app.get("/api/health", (_, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
