
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Zap, Send, Copy, Check } from 'lucide-react';
import ChatNavbar from '@/components/ChatNavbar';
import { useIsMobile } from '@/hooks/use-mobile';

// Types for our chat messages
type MessageRole = 'ai' | 'user';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  isTyping?: boolean;
  timestamp: Date;
}

// Chat message component
const ChatMessage = ({ message }: { message: Message }) => {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Function to check if content is a landing page copy
  const isLandingPageCopy = (content: string) => {
    return content.includes("HEADLINE:") && content.includes("SUBHEADLINE:") && content.includes("BENEFITS:");
  };
  
  // Function to format landing page copy
  const formatLandingPageCopy = (content: string) => {
    if (!isLandingPageCopy(content)) return content;
    
    return (
      <div className="landing-page-copy bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {content.split('\n').map((line, index) => {
          if (line.startsWith("HEADLINE:")) {
            return <h3 key={index} className="text-lg md:text-xl font-bold mb-2 text-primary">{line.replace("HEADLINE:", "").trim()}</h3>;
          } else if (line.startsWith("SUBHEADLINE:")) {
            return <p key={index} className="text-base md:text-lg mb-4 text-primary">{line.replace("SUBHEADLINE:", "").trim()}</p>;
          } else if (line.startsWith("BENEFITS:")) {
            return <h4 key={index} className="font-semibold mt-2 mb-1 text-primary">{line}</h4>;
          } else if (line.startsWith("- ")) {
            return <p key={index} className="pl-2 mb-1 text-blynk-grey">• {line.replace("- ", "")}</p>;
          } else if (line.startsWith("CTA:")) {
            return <p key={index} className="font-bold mt-3 text-accent">{line.replace("CTA:", "").trim()}</p>;
          } else {
            return <p key={index} className="text-blynk-grey">{line}</p>;
          }
        })}
        
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => copyToClipboard(content)}
            className="flex items-center gap-1 border-blynk-blue text-blynk-blue hover:bg-blynk-blue/10"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        </div>
      </div>
    );
  };
  
  // Function to check if content is a product idea
  const isProductIdea = (content: string) => {
    return content.includes("[Product Idea") && content.includes("Title:") && content.includes("Description:");
  };
  
  // Function to format product idea
  const formatProductIdea = (content: string) => {
    if (!isProductIdea(content)) return content;
    
    const productMatches = content.match(/\[Product Idea \d+\]([\s\S]*?)(?=\[Product Idea \d+\]|$)/g);
    
    if (!productMatches) return content;
    
    return (
      <div className="space-y-4">
        {productMatches.map((product, idx) => {
          const title = product.match(/Title: (.*?)(?:\n|$)/)?.[1] || "";
          const description = product.match(/Description: (.*?)(?:\n|$)/)?.[1] || "";
          const price = product.match(/Price: (.*?)(?:\n|$)/)?.[1] || "";
          
          return (
            <div key={idx} className="product-idea bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-bold text-accent">{title}</h3>
              <p className="my-2 text-blynk-grey">{description}</p>
              <p className="font-semibold text-primary">{price}</p>
              <div className="mt-3">
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => generateLandingPage(title, description)}
                >
                  Get Landing Page Copy
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  // Function to generate landing page - this would normally interact with the AI
  const generateLandingPage = (title: string, description: string) => {
    // This is a placeholder - in a real app, you'd send this to the AI
    console.log(`Generate landing page for: ${title}`);
    // This would trigger an action to add a new AI message with landing page copy
  };
  
  return (
    <div className={`mb-4 ${message.role === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'}`}>
      {message.role === 'ai' && (
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-blynk-blue flex items-center justify-center text-white mr-2 shadow-sm">
            <Zap size={16} />
          </div>
          <span className="font-medium text-primary">Blynk</span>
        </div>
      )}
      
      <div className="message-content">
        {message.isTyping ? (
          <div className="typing-indicator flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-blynk-grey animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blynk-grey animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-blynk-grey animate-pulse delay-300"></div>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {isLandingPageCopy(message.content) 
              ? formatLandingPageCopy(message.content)
              : isProductIdea(message.content)
                ? formatProductIdea(message.content)
                : message.content.split('\n').map((line, i) => <p key={i} className="text-blynk-grey">{line}</p>)
            }
          </div>
        )}
      </div>
    </div>
  );
};

// Main ChatPage component
const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [freeCounter, setFreeCounter] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Questions for the onboarding flow
  const questions = [
    "Hey there! 👋 I'm Blynk, your AI product launch assistant. What's your niche or the main topic you create content about?",
    "Which platform do you mostly post on? (TikTok, Instagram, YouTube, X, etc.)",
    "Roughly how big is your audience?",
    "How would you describe your content vibe? (Educational, Funny, Aesthetic, etc.)",
    "Any special skills, knowledge, or experiences you'd love to package into a product?"
  ];
  
  // Encouraging responses for each question
  const encouragingResponses = [
    (input: string) => `${input}? Nice! That's a hot market with plenty of monetization opportunities. 🔥`,
    (input: string) => `${input} is perfect for visual products! Let's create something that pops on those feeds.`,
    (input: string) => `With ${input} followers, you've got a solid foundation. Even small audiences convert well with the right offer!`,
    (input: string) => `Love that ${input} vibe! We'll make sure your product matches that energy.`,
    (input: string) => `${input} is exactly the kind of expertise people will pay for! Let's package this up.`
  ];
  
  // Product ideas response - would normally come from GPT-4
  const productIdeasResponse = `Based on what you've shared, here are 3 digital products that would resonate with your audience:

[Product Idea 1]
Title: "15-Minute Desk Workouts Bundle"
Description: A collection of 30 quick workout routines that busy professionals can do right at their desk or in a small office space.
Price: $27

[Product Idea 2]
Title: "Corporate Warrior Meal Prep Guide"
Description: A time-saving meal prep system designed specifically for busy professionals with 50+ quick recipes and a 4-week planning calendar.
Price: $39

[Product Idea 3]
Title: "The Executive Reset Challenge"
Description: A 14-day fitness reset program with minimal equipment, designed for business travelers and professionals with unpredictable schedules.
Price: $49

Want landing page copy for any of these? Just click "Get Landing Page Copy" below the idea you like!`;

  // Landing page copy response - would normally come from GPT-4
  const landingPageResponse = `Here's your launch-ready landing page copy:

HEADLINE: 15-Minute Desk Workouts That Actually Work

SUBHEADLINE: Transform Your Office Space Into A Fat-Burning Zone (Without Looking Crazy or Getting Sweaty)

BENEFITS:
- Burn 200+ calories daily without ever leaving your desk or disrupting your workflow
- Master 30 discreet exercises that strengthen your core and improve posture while you work
- End workday fatigue with energizing micro-workouts scientifically proven to boost productivity

CTA: GRAB YOUR DESK WORKOUT BUNDLE NOW`;

  // Upgrade message - would appear after using free session
  const upgradeMessage = `Out of free ideas? Unlock Blynk Pro for unlimited plays and custom product visuals 🚀.

Upgrade now to continue generating viral product ideas and launch-ready copy without limits.`;

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    // Add initial AI greeting
    setTimeout(() => {
      setMessages([
        {
          id: '1',
          role: 'ai',
          content: questions[0],
          timestamp: new Date()
        }
      ]);
    }, 500);
  }, []);

  // Function to simulate AI thinking and typing
  const simulateAIResponse = (response: string) => {
    setIsAITyping(true);
    
    // Add a typing indicator message
    const typingMessageId = Date.now().toString();
    setMessages(prev => [...prev, {
      id: typingMessageId,
      role: 'ai',
      content: '',
      isTyping: true,
      timestamp: new Date()
    }]);
    
    // Simulate thinking and typing delay
    setTimeout(() => {
      // Remove typing indicator and add actual response
      setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'ai',
        content: response,
        timestamp: new Date()
      }]);
      setIsAITyping(false);
    }, 1500); // Adjust timing as needed
  };

  // Handle user input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }]);
    
    // Clear input field
    setInput('');
    
    // If we're in the onboarding flow
    if (currentQuestion < questions.length) {
      // Simulate AI encouraging response
      setTimeout(() => {
        simulateAIResponse(encouragingResponses[currentQuestion](input));
        
        // If more questions, ask the next one
        if (currentQuestion < questions.length - 1) {
          setTimeout(() => {
            simulateAIResponse(questions[currentQuestion + 1]);
            setCurrentQuestion(prev => prev + 1);
          }, 2000);
        } else {
          // If it was the last question, generate product ideas
          setTimeout(() => {
            simulateAIResponse(productIdeasResponse);
            // Decrement free counter
            setFreeCounter(prev => prev - 1);
          }, 2000);
        }
      }, 1000);
    } else if (input.toLowerCase().includes("landing") || input.toLowerCase().includes("copy")) {
      // If user asks for landing page copy directly
      if (freeCounter > 0) {
        setTimeout(() => {
          simulateAIResponse(landingPageResponse);
          setFreeCounter(prev => prev - 1);
        }, 1000);
      } else {
        // Show upgrade message
        setTimeout(() => {
          simulateAIResponse(upgradeMessage);
        }, 1000);
      }
    } else if (input.toLowerCase().includes("yes")) {
      // If user says yes to something (like generating landing page)
      if (freeCounter > 0) {
        setTimeout(() => {
          simulateAIResponse(landingPageResponse);
          setFreeCounter(prev => prev - 1);
        }, 1000);
      } else {
        // Show upgrade message
        setTimeout(() => {
          simulateAIResponse(upgradeMessage);
        }, 1000);
      }
    } else {
      // Handle general chat
      setTimeout(() => {
        simulateAIResponse("I'm here to help you create viral digital products! Let me know what you're looking for.");
      }, 1000);
    }
  };

  // Function that would be called by the "Get Landing Page Copy" button
  const handleGetLandingPage = () => {
    if (freeCounter > 0) {
      simulateAIResponse(landingPageResponse);
      setFreeCounter(prev => prev - 1);
    } else {
      simulateAIResponse(upgradeMessage);
      toast({
        title: "Free limit reached",
        description: "Upgrade to Blynk Pro for unlimited generations.",
        variant: "destructive"
      });
    }
  };

  // Function to handle pro upgrade click
  const handleUpgradeClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <ChatNavbar onUpgradeClick={handleUpgradeClick} />
      
      <main className="flex-1 overflow-y-auto p-3 md:p-4 mobile-safe-area">
        <div className="mx-auto max-w-4xl">
          <div className="chat-messages space-y-3 md:space-y-4 pb-20 md:pb-24">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 p-3 md:p-4 backdrop-blur-md">
        <div className="mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full bg-gray-100 dark:bg-gray-700 border-gray-200 focus-visible:ring-blynk-blue"
              disabled={isAITyping}
            />
            <Button 
              type="submit" 
              disabled={isAITyping} 
              className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-sm"
              size={isMobile ? "icon" : "default"}
            >
              <Send size={isMobile ? 16 : 18} />
              {!isMobile && <span className="ml-1">Send</span>}
            </Button>
          </form>
          {freeCounter === 0 && (
            <div className="mt-2 text-center">
              <Button 
                variant="link" 
                onClick={handleUpgradeClick}
                className="text-accent text-sm"
              >
                Upgrade to Blynk Pro for unlimited generations
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
