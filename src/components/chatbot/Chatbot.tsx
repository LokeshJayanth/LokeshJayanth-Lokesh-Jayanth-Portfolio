import { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Detailed knowledge base about Lokesh Jayanth
const KNOWLEDGE_BASE = {
  "introduction": "I'm Lokesh Jayanth, an M.Sc. Data Science student at Coimbatore Institute of Technology with a strong passion for AI, Machine Learning, and Data Science. I specialize in building intelligent systems that solve real-world problems through innovative technology.",
  
  "skills": {
    "programming_frameworks": "Python, Flask, Bootstrap",
    "libraries": "NumPy, Pandas, Scikit-learn, OpenCV, YOLOv8, TensorFlow, Keras",
    "tools_platforms": "Git, Power BI, MS Excel, Jupyter Notebook, VS Code",
    "databases": "MySQL, MongoDB, Firebase",
    "web_tech": "HTML5, CSS3, JavaScript, React.js, FastAPI, RESTful APIs",
    "areas_of_interest": "Machine Learning, Data Analysis & Visualization, Artificial Intelligence, Computer Vision"
  },

  "experience": [
    {
      "role": "Executive Director",
      "company": "Photo Club",
      "duration": "2025 - Present",
      "achievements": [
        "Directed strategic planning, operational oversight, and event coordination",
        "Achieved a 30% increase in member engagement",
        "Successfully executed more than 10 high-profile photography events"
      ]
    },
    {
      "role": "Event Management",
      "company": "Rotaract Club of CIT",
      "duration": "2024 - 2025",
      "achievements": [
        "Coordinated and executed events with effective planning and teamwork",
        "Developed strong organizational and leadership skills",
        "Collaborated with team members to ensure successful event execution"
      ]
    }
  ],

  "projects": [
    {
      "name": "EyeGuardian AI",
      "description": "AI-Enabled Emergency Detection and Assistance System",
      "tech_stack": "Python, Flask, YOLOv8n, OpenCV, Firebase, Telegram Bot API, Geolocation API",
      "features": [
        "Built a real-time detection system that analyzes live video and audio streams to identify fire, smoke, and emergency sounds using a fine-tuned YOLOv8n model and audio feature extraction",
        "Designed a dual-server setup where a Flask app manages the UI while a dedicated detection API handles frame processing and computes an emergency score",
        "Integrated automatic alerting through email/Telegram with instant location sharing, notifying nearby emergency contacts"
      ]
    },
    {
      "name": "GlowGuard",
      "description": "AI-Based Skincare Analysis & Recommendation System",
      "tech_stack": "Python, Streamlit, Machine Learning, FastAPI, OpenCV, API Integration",
      "features": [
        "Developed a skincare analysis that processes uploaded selfies to identify skin type and visible skin characteristics",
        "Combined image insights with real-time environmental data (UV index, humidity, air quality) and lifestyle inputs",
        "Created a responsive multi-screen interface for users to upload images, provide details, and view results"
      ]
    },
    {
      "name": "Tri-Biometrix",
      "description": "Intelligent Multimodal Biometric Security System",
      "tech_stack": "Python, Flask, TensorFlow/Keras, OpenCV, MediaPipe, MFCC, CNN, Streamlit",
      "features": [
        "Integrated three biometric inputs — face embeddings, voice features, and gesture landmarks — for stronger authentication",
        "Designed a sequential verification pipeline where each biometric is validated independently",
        "Built a web interface that collects data and provides real-time authentication feedback"
      ]
    }
  ],

  "education": [
    {
      "degree": "M.Sc. Data Science (5-year Integrated)",
      "institution": "Coimbatore Institute of Technology, Coimbatore",
      "duration": "2023 - Present",
      "details": "CGPA: 7.15 (up to 5th Semester)",
      "courses": [
        "Advanced Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Data Structures and Algorithms",
        "Database Management Systems"
      ]
    },
    {
      "degree": "Higher Secondary Certificate",
      "institution": "CK School Of Practical Knowledge, Cuddalore",
      "duration": "2022 - 2023",
      "details": "Percentage: 75%"
    }
  ],

  "certifications": [
    "Certificate of Merit – CIT Spark Grant 2025 Finalist, Coimbatore Institute of Technology, 2025",
    "Python & Django Framework + HTML5 Stack Complete Course – Udemy, June 2025",
    "Certificate of Merit – KRISHNECS 2K24, Vishwa Focus (1st Place), Sri Krishna College of Engineering and Technology",
    "Certificate For AXIOS 2024, PSG College of Technology, Department of Applied Mathematics and Computational Sciences",
    "Certificate of Completion for Fundamental AI Concepts, Microsoft, August 2024"
  ],

  "contact": {
    "email": "lokeshjayanth1403@gmail.com",
    "phone": "+91 9080113107",
    "location": "Coimbatore, Tamil Nadu, India",
    "linkedin": "linkedin.com/in/lokesh-jayanth",
    "github": "github.com/LokeshJayanth"
  },

  "default": "I'm not sure how to answer that. Here are some things you can ask about:\n- What are Lokesh's technical skills?\n- Can you tell me about his projects?\n- What is his work experience?\n- Where did he study?\n- How can I contact him?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Lokesh's AI assistant. Ask me anything about his resume, skills, or experience!", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Generate response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 800);
  };

  const generateResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    // Greeting
    if (/\b(hi|hello|hey|greetings|hola)\b/.test(lowerInput)) {
      return "Hello! I'm here to help you learn about Lokesh Jayanth. You can ask about his skills, projects, experience, or education. What would you like to know?";
    }
    
    // Skills
    if (/\b(skill|tech|technology|programming|language|framework|tool|stack)\b/.test(lowerInput)) {
      const { programming_frameworks, libraries, tools_platforms, databases, web_tech, areas_of_interest } = KNOWLEDGE_BASE.skills;
      return `Lokesh's technical skills include:

💻 Programming & Frameworks:
${programming_frameworks}

📚 Libraries:
${libraries}

🛠️ Tools & Platforms:
${tools_platforms}

🗄️ Databases:
${databases}

🌐 Web Technologies:
${web_tech}

🎯 Areas of Interest:
${areas_of_interest}`;
    }
    
    // Experience
    if (/\b(experience|work|job|internship|employment|career)\b/.test(lowerInput)) {
      return KNOWLEDGE_BASE.experience.map(exp => 
        `🏢 ${exp.role} at ${exp.company} (${exp.duration}):
${exp.achievements.map(a => `• ${a}`).join('\n')}`
      ).join('\n\n');
    }
    
    // Projects
    if (/\b(project|work on|built|create|developed|portfolio|eye|glow|biometrix)\b/.test(lowerInput)) {
      return `Here are some of Lokesh's key projects:\n\n` + 
      KNOWLEDGE_BASE.projects.map(proj => 
        `🌟 ${proj.name}\n${'='.repeat(proj.name.length + 2)}\n${proj.description}\n\n` +
        `🛠️ Tech Stack: ${proj.tech_stack}\n\n` +
        `🔍 Key Features:\n${proj.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}`
      ).join('\n\n---\n\n');
    }
    
    // Education
    if (/\b(education|study|school|college|university|degree|courses?|qualification)\b/.test(lowerInput)) {
      return KNOWLEDGE_BASE.education.map(edu => {
        let eduText = `🎓 ${edu.degree}\n🏫 ${edu.institution} (${edu.duration})\n${edu.details ? `• ${edu.details}\n` : ''}`;
        
        if (edu.courses && edu.courses.length > 0) {
          eduText += `\n📚 Relevant Coursework:\n${edu.courses.map(c => `• ${c}`).join('\n')}`;
        }
        
        return eduText;
      }).join('\n\n') + 
      `\n\n🎖️ Certifications:\n${KNOWLEDGE_BASE.certifications.map(c => `• ${c}`).join('\n')}`;
    }
    
    // Contact
    if (/\b(contact|email|phone|number|reach|linkedin|github|location|address)\b/.test(lowerInput)) {
      const { email, phone, location, linkedin, github } = KNOWLEDGE_BASE.contact;
      return `📧 Email: ${email}
📱 Phone: ${phone}
📍 Location: ${location}
💼 LinkedIn: ${linkedin}
💻 GitHub: ${github}`;
    }
    
    // About the bot
    if (/\b(who are you|your name|what are you|bot|assistant|help)\b/.test(lowerInput)) {
      return "I'm an AI assistant here to provide information about Lokesh Jayanth's professional background. You can ask me about his skills, projects, work experience, education, or how to contact him.";
    }
    
    // Gratitude
    if (/\b(thank|thanks|appreciate|helpful)\b/.test(lowerInput)) {
      return "You're welcome! I'm glad I could help. Feel free to ask if you have any more questions about Lokesh's background or work.";
    }
    
    // Default fallback
    return KNOWLEDGE_BASE.default;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-[500px] bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-accent/10 p-4 border-b border-border flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-semibold">Ask About Lokesh</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-8 h-8 hover:bg-accent/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={cn(
                  'max-w-[90%] p-3 rounded-lg text-sm',
                  message.isUser 
                    ? 'ml-auto bg-accent text-accent-foreground rounded-br-none' 
                    : 'bg-muted rounded-bl-none'
                )}
              >
                {message.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>
                    {line || <br />}
                  </p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-1 p-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Lokesh..."
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="w-10 h-10 flex-shrink-0"
                disabled={!input.trim() || isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg relative group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
            AI
          </span>
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
