import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, Bot } from '../icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axiosInstance from '../api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Namaste! 🙏 I am Darshan, your virtual temple assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const chatMutation = useMutation({
    mutationFn: async (message) => {
      const { data } = await axiosInstance.post('/chat', { message });
      return data;
    },
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { id: Date.now(), role: 'bot', text: data.data.reply }]);
    },
    onError: (error) => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'bot', text: 'I am sorry, but I am having trouble connecting to my spiritual servers right now. Please try again later.' }
      ]);
    }
  });

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: userMessage }]);
    
    chatMutation.mutate(userMessage);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-full shadow-2xl hover:shadow-saffron-500/50 flex items-center justify-center transition-shadow"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 p-5 text-white flex justify-between items-center shrink-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={20} className="text-ivory-100" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-tight">Darshan AI</h3>
                  <p className="text-xs text-saffron-100 font-medium">Temple Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-ivory-100/50 space-y-4">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center shrink-0 mb-1 border border-saffron-200">
                      <Bot size={16} className="text-saffron-600" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-darkbrown-800 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="prose prose-sm prose-p:leading-snug prose-a:text-saffron-600 max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {chatMutation.isPending && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center shrink-0 mb-1 border border-saffron-200">
                    <Bot size={16} className="text-saffron-600" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <div className="flex space-x-1.5">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              {messages.length < 3 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Tirumala slots?', 'Donate to Kedarnath', 'Dress code?'].map((suggestion) => (
                    <button 
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-saffron-50 hover:text-saffron-700 hover:border-saffron-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron-500/50 focus:border-saffron-500 transition-all"
                  disabled={chatMutation.isPending}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || chatMutation.isPending}
                  className="absolute right-2 w-10 h-10 bg-saffron-500 text-white rounded-full flex items-center justify-center hover:bg-saffron-600 disabled:opacity-50 disabled:hover:bg-saffron-500 transition-colors shadow-sm"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
