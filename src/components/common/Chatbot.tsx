import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { from: "user" | "bot"; text: string };

// 🔥 FAQ DATA (easy to expand)
const faq = [
  {
    keywords: ["piles", "bawasir", "bleeding", "pain"],
    answer:
      "Piles (bawasir) can be treated effectively with Ayurveda without surgery. We focus on root-cause healing.",
  },
  {
    keywords: ["fissure", "cut", "pain while passing stool"],
    answer:
      "Fissure causes sharp pain and can be treated with Ayurvedic medicines and diet correction.",
  },
  {
    keywords: ["fistula", "infection"],
    answer:
      "Fistula is a chronic condition but can be managed with specialized Ayurvedic therapy.",
  },
  {
    keywords: ["appointment", "book", "consult"],
    answer:
      "You can book an appointment from our website or call us directly.",
  },
  {
    keywords: ["fees", "cost", "price"],
    answer:
      "Consultation fees depend on your condition. Please contact us for exact details.",
  },
  {
    keywords: ["location", "address", "where"],
    answer:
      "Our clinic is located in Pune. We can guide you with directions.",
  },
  {
    keywords: ["time", "timing", "open"],
    answer:
      "We are open from 10 AM to 7 PM, Monday to Saturday.",
  },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Namaste 🙏 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);

  // ✅ Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Load memory
  useEffect(() => {
    const saved = localStorage.getItem("chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // ✅ Save memory
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  // 🔥 Smart reply logic
  const getReply = (msg: string) => {
    const text = msg.toLowerCase();

    for (const item of faq) {
      if (item.keywords.some((k) => text.includes(k))) {
        return item.answer;
      }
    }

    const fallback = [
      "Can you please explain a bit more?",
      "I can help with treatment, fees, or appointments.",
      "Please ask about piles, fissure, or clinic details.",
    ];

    return fallback[Math.floor(Math.random() * fallback.length)];
  };

  // 🔥 Typing effect
  const typeReply = (text: string) => {
    let i = 0;
    let current = "";

    const interval = setInterval(() => {
      current += text[i];
      i++;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          from: "bot" as const,
          text: current,
        };
        return updated;
      });

      if (i >= text.length) clearInterval(interval);
    }, 15);
  };

  // 🔥 Send message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Msg = { from: "user", text: input };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(input);

      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: "" },
      ]);

      setTyping(false);
      typeReply(reply);
    }, 700);
  };

  const quickQuestions = [
    "Piles treatment",
    "Fees",
    "Book appointment",
    "Clinic timing",
    "Location",
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[999]">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[var(--color-primary)] text-white p-4 rounded-full shadow-xl hover:scale-110 transition animate-pulse"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999]"
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white p-4 font-semibold flex justify-between">
              Ayurveda Assistant
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-80">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 rounded-lg max-w-[75%] ${
                    msg.from === "user"
                      ? "bg-green-100 ml-auto"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {typing && (
                <div className="bg-gray-100 px-3 py-2 rounded-lg w-fit text-sm">
                  typing...
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            <div className="flex gap-2 px-3 pb-2 flex-wrap">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
                placeholder="Ask your question..."
              />
              <button
                onClick={handleSend}
                className="bg-[var(--color-primary)] text-white px-4 rounded-lg"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;