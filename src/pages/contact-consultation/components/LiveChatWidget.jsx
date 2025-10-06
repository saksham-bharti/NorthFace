import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      name: 'Sarah from NorthStep',
      message: 'Hi! I\'m here to help you with any questions about our recruitment services. How can I assist you today?',
      timestamp: new Date(Date.now() - 300000),
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    'Tell me about your services',
    'I need help with hiring',
    'I\'m looking for a new job',
    'What are your rates?',
    'Schedule a consultation'
  ];

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = (messageText = newMessage) => {
    if (!messageText?.trim()) return;

    const userMessage = {
      id: messages?.length + 1,
      sender: 'user',
      name: 'You',
      message: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse = {
        id: messages?.length + 2,
        sender: 'agent',
        name: 'Sarah from NorthStep',
        message: getAgentResponse(messageText),
        timestamp: new Date(),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      };
      setMessages(prev => [...prev, agentResponse]);
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, 1500);
  };

  const getAgentResponse = (userMessage) => {
    const message = userMessage?.toLowerCase();
    
    if (message?.includes('service') || message?.includes('what do you do')) {
      return 'We offer comprehensive recruitment services including executive search, career consulting, and strategic hiring solutions. Would you like me to schedule a consultation to discuss your specific needs?';
    } else if (message?.includes('hiring') || message?.includes('recruit')) {
      return 'Great! We specialize in helping companies find top talent. What type of positions are you looking to fill? I can connect you with one of our specialized recruiters.';
    } else if (message?.includes('job') || message?.includes('career')) {
      return 'Excellent! We help professionals advance their careers. What industry are you in, and what type of role are you seeking? I can set up a career strategy session for you.';
    } else if (message?.includes('rate') || message?.includes('cost') || message?.includes('price')) {
      return 'Our pricing varies based on the specific services and scope of work. I\'d be happy to have one of our consultants provide you with a customized quote. Shall I schedule a consultation call?';
    } else if (message?.includes('consultation') || message?.includes('schedule')) {
      return 'Perfect! I can help you schedule a free 30-minute consultation. Would you prefer to speak with someone today, or would you like me to send you our online scheduling link?';
    } else {
      return 'Thank you for your message! I\'d be happy to help you with that. For more detailed assistance, would you like me to connect you with one of our recruitment specialists?';
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full shadow-lg transition-all duration-300 elevation-hover ${
            isOnline ? 'bg-gradient-elevation' : 'bg-gray-500'
          }`}
        >
          {isOpen ? (
            <Icon name="X" size={24} color="white" />
          ) : (
            <Icon name="MessageCircle" size={24} color="white" />
          )}
          
          {/* Online Status */}
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`} />
          
          {/* Unread Count */}
          {unreadCount > 0 && !isOpen && (
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </button>
      </div>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-background rounded-2xl shadow-2xl border border-border z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-elevation text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={20} color="white" />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-white ${
                  isOnline ? 'bg-green-400' : 'bg-gray-400'
                }`} />
              </div>
              <div>
                <h3 className="font-semibold">Live Support</h3>
                <p className="text-xs text-orange-100">
                  {isOnline ? 'Online now' : 'Offline - We\'ll respond soon'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Icon name="Minimize2" size={18} color="white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages?.map((message) => (
              <div
                key={message?.id}
                className={`flex ${message?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 max-w-[80%] ${
                  message?.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {message?.sender === 'agent' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={message?.avatar}
                        alt={message?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className={`rounded-2xl px-4 py-2 ${
                    message?.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground'
                  }`}>
                    <p className="text-sm">{message?.message}</p>
                    <p className={`text-xs mt-1 ${
                      message?.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {formatTime(message?.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages?.length === 1 && (
            <div className="px-4 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies?.slice(0, 3)?.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs px-3 py-1 bg-muted hover:bg-muted/80 rounded-full text-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e?.target?.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!newMessage?.trim()}
                size="icon"
              >
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;