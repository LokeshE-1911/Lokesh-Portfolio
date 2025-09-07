import React, { useState, useRef, useEffect } from "react";

const seedSystemPrompt = `You are Lokesh's portfolio assistant. 
Be concise, friendly, and recruiter-focused. 
Answer questions about skills, projects, internships, and availability. 
If asked for the resume, point to the Resume button on the site. 
If asked about contact, guide them to the Contact section. 
Avoid making up facts; if unsure, ask a short clarifying question.`;

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "system", content: seedSystemPrompt },
    { role: "assistant", content: "Hi! I'm Lokesh's portfolio assistant. Ask me about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const next = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
          model: "llama-3.1-8b-instant",
          temperature: 0.4
        })
      });
      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't get a response right now.";
      setMessages(m => [...m, { role: "assistant", content: text }]);
    } catch (e) {
      setMessages(m => [...m, { role: "assistant", content: "Network error. Please try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Ask Lokesh's Assistant</h2>
      <p className="text-gray-300 mb-6">Have a question about experience, skills, or projects? Ask below.</p>

      <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-4 h-[480px] overflow-y-auto">
        {messages.filter(m => m.role !== "system").map((m, idx) => (
          <div
            key={idx}
            className={`my-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-indigo-500/90" : "bg-gray-700/80"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="my-2 flex justify-start">
            <div className="max-w-[80%] rounded-xl px-4 py-2 text-sm bg-gray-700/80 animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <textarea
          className="flex-1 bg-gray-900 border border-gray-700 rounded-xl p-3 outline-none focus:border-indigo-400"
          rows={2}
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          onClick={sendMessage}
          className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </section>
  );
}
