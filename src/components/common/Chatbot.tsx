import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string };

// 🔥 Abhyudaya FAQ DATA
const faq = [
  {
    keywords: ["coffee", "brew", "caffeine", "arabica"],
    answer: "Our artisan-roasted Arabica coffee beans are ethically sourced and perfect for a clean, rich caffeine boost. Would you like to see our Premium Coffee collection?",
  },
  {
    keywords: ["organic", "food", "produce", "farm", "meal"],
    answer: "We offer farm-fresh organic food and gourmet meal kits delivered right to your door with zero preservatives. It's pure nutrition!",
  },
  {
    keywords: ["cosmetic", "skin", "glow", "beauty", "oil"],
    answer: "Our luxury cosmetics feature rare botanicals and cruelty-free formulas. Perfect for unveiling your natural glow. Want to check out our skincare routines?",
  },
  {
    keywords: ["water", "hydration", "mineral", "ph"],
    answer: "Our crystal-pure mountain spring water is naturally pH balanced and packed with essential minerals for optimal hydration.",
  },
  {
    keywords: ["delivery", "shipping", "track", "time"],
    answer: "We provide eco-friendly express delivery. Cold-chain shipping ensures your food arrives perfectly fresh. Standard delivery takes 2-4 business days.",
  },
  {
    keywords: ["payment", "buy", "order", "cost", "price"],
    answer: "You can securely order our premium products via credit/debit card, UPI, or net banking directly through our checkout page.",
  },
  {
    keywords: ["return", "refund", "cancel"],
    answer: "We have a hassle-free 7-day return policy for unopened items. For organic food and perishables, please contact support within 24 hours of delivery.",
  },
  {
    keywords: ["hi", "hello", "hey", "namaste"],
    answer: "Hello! Welcome to Abhyudaya. How can I assist you with your premium lifestyle needs today?",
  }
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);

  // Initialize greeting
  useEffect(() => {
    const saved = localStorage.getItem("abhyudaya_chat");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([{ from: "bot", text: "Welcome to Abhyudaya ✨ How can I elevate your experience today?" }]);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("abhyudaya_chat", JSON.stringify(messages));
    }
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getReply = (msg: string) => {
    const text = msg.toLowerCase();
    for (const item of faq) {
      if (item.keywords.some((k) => text.includes(k))) {
        return item.answer;
      }
    }
    const fallback = [
      "Could you please elaborate? I'm here to help with our premium coffee, organic foods, luxury cosmetics, and pure hydration products.",
      "I'm not completely sure I understand. Would you like to know more about our latest collections or delivery options?",
      "Can you rephrase that? I can assist you with orders, product details, or premium services."
    ];
    return fallback[Math.floor(Math.random() * fallback.length)];
  };

  const simulateTyping = (replyText: string) => {
    setIsTyping(true);
    // Simulate network/thought delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
    }, 1500 + Math.random() * 1000); // 1.5s to 2.5s delay
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    simulateTyping(getReply(userText));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const quickQuestions = [
    "Premium Coffee",
    "Organic Food",
    "Luxury Cosmetics",
    "Pure Hydration",
    "Delivery times"
  ];

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-[100]"
          >
            <button
              onClick={() => setOpen(true)}
              className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
            >
              <div className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-ping" />
              <MessageCircle size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[999] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Abhyudaya Concierge</h3>
                  <p className="text-xs text-green-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.from === "user" ? "bg-gray-800 text-white" : "bg-green-100 text-green-700"}`}>
                    {msg.from === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`text-sm px-4 py-3 shadow-sm max-w-[75%] ${
                      msg.from === "user"
                        ? "bg-gray-800 text-white rounded-2xl rounded-tr-sm"
                        : "bg-white border border-gray-100 text-gray-700 rounded-2xl rounded-tl-sm leading-relaxed"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1 shadow-sm w-fit">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-4 pb-2 pt-2 bg-white flex gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar border-t border-gray-50">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    // handleSend() uses the current state of input which might be delayed, so pass the text directly.
                    const userText = q;
                    setMessages((prev) => [...prev, { from: "user", text: userText }]);
                    setInput("");
                    simulateTyping(getReply(userText));
                  }}
                  className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full hover:bg-green-600 hover:text-white transition-colors flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  placeholder="Type your message..."
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors flex-shrink-0"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;