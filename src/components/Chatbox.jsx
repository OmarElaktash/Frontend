// components/Chatbox.jsx
import { useState, useEffect, useRef } from "react";
import { sendMessageToChatbot } from "../utils/chatBotApi";
import { supabase } from "../utils/supabaseClient";
import { FiSend, FiSmile, FiImage, FiPaperclip, FiMic, FiAlertCircle } from "react-icons/fi";

export default function Chatbox({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);


// add differnet quick replies positive and negative ones for better usx

  const quickReplies = [
    "I'm feeling anxious",
    "Tell me about meditation",
    "Feeling down",
    "I'm having an amazing day",
  ];

  useEffect(() => {
    async function fetchChatHistory() {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching chat history:', error);
      } else {
        const formatted = data.flatMap(row => ([
          { sender: "user", text: row.message },
          { sender: "bot", text: row.reply }
        ]));
        setMessages(formatted);
      }
    }
    if (user) {
      fetchChatHistory();
    }
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend() {
    if (!input.trim() || isTyping) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const botReply = await sendMessageToChatbot(currentInput);
      const botMessage = { sender: "bot", text: botReply };
      setMessages((prev) => [...prev, botMessage]);

      await supabase.from('chat_messages').insert([
        {
          user_id: user.id,
          message: currentInput,
          reply: botReply
        }
      ]);
    } catch (error) {
      setMessages((prev) => [...prev, {
        sender: "bot",
        text: "I apologise, but I'm having trouble responding right now. Please try again.",
        error: true
      }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A3C1E5]/5 via-white to-[#A9D4A7]/5 p-6">
      <div className="max-w-[800px] mx-auto relative">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#A3C1E5]/10 to-[#A9D4A7]/10 p-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SN</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Spera-Nova</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isTyping ? 'bg-[#A9D4A7]' : 'bg-gray-300'}`}></div>
                  <p className="text-sm text-gray-500">
                    {isTyping ? 'Listening to you...' : 'Ready to help'}
                  </p>
                </div>
              </div>
              <a 
                href="tel:111"
                className="group ml-auto flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-red-600">
                  <FiAlertCircle className="text-lg animate-pulse" />
                  <span className="font-medium">Emergency: Call 111</span>
                </div>
                <div className="hidden group-hover:block text-xs text-red-500">
                  Click to call
                </div>
              </a>
            </div>
          </div>
          <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-br from-[#A3C1E5]/5 to-[#A9D4A7]/5">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`
                    ${msg.sender === "user" 
                      ? "ml-auto bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white"
                      : msg.error 
                        ? "bg-red-50 text-red-600"
                        : "bg-white shadow-sm"
                    }
                    rounded-2xl p-4 max-w-[80%] animate-fade-in-up
                  `}
                >
                  <p className={msg.sender === "user" ? "text-white" : "text-gray-700"}>
                    {msg.text}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="bg-white rounded-2xl p-4 max-w-[80%] shadow-sm animate-fade-in-up">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#A3C1E5] rounded-full animate-bounce-slow"></div>
                    <div className="w-2 h-2 bg-[#A9D4A7] rounded-full animate-bounce-slow delay-150"></div>
                    <div className="w-2 h-2 bg-[#A3C1E5] rounded-full animate-bounce-slow delay-300"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="border-t border-gray-100 p-3 bg-white">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(reply)}
                  className="flex-shrink-0 bg-gradient-to-r from-[#A3C1E5]/10 to-[#A9D4A7]/10 hover:from-[#A3C1E5]/20 hover:to-[#A9D4A7]/20 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors duration-300"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

{/* TODO: Add input area aniamtions and add a smiley face button to the input area  */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isTyping ? "Listening..." : "Share your thoughts..."}
                disabled={isTyping}
                className={`
                  flex-1 px-4 py-2 rounded-xl border border-gray-200
                  focus:outline-none focus:border-[#A3C1E5] transition-all duration-300
                  ${isTyping ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
                `}
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className={`
                  p-3 rounded-xl transition-all duration-300 flex items-center justify-center
                  ${isTyping || !input.trim()
                    ? 'bg-gray-100 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white hover:shadow-lg hover:shadow-[#A3C1E5]/20'
                  }
                `}
              >
                <FiSend className={`text-xl ${isTyping ? 'opacity-50' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
