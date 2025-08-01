import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaFire, 
  FaGitAlt, 
  FaJava,
  FaFigma,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiOpenai, 
  SiClaude, 
  SiGooglegemini,
  SiAdobeillustrator,
  SiAdobe
} from 'react-icons/si';
import { Code, Palette, Search } from 'lucide-react';

const skills = {
  development: [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3/Sass", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Firebase", icon: <FaFire className="text-orange-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> }
  ],
  design: [
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
    { name: "Product Design", icon: <Palette className="text-pink-500" /> },
    { name: "Graphic Design", icon: <Palette className="text-green-500" /> },
    { name: "UI/UX", icon: <Code className="text-blue-500" /> }
  ],
  aiTools: [
    { name: "GitHub Copilot", icon: <FaGithub className="text-gray-700" /> },
    { name: "Cursor", icon: <Code className="text-blue-500" /> },
    { name: "Lovable", icon: <Code className="text-red-500" /> },
    { name: "ChatGPT", icon: <SiOpenai className="text-green-600" /> },
    { name: "Claude", icon: <SiClaude className="text-orange-500" /> },
    { name: "Perplexity", icon: <Search className="text-blue-600" /> },
    { name: "Gemini", icon: <SiGooglegemini className="text-blue-500" /> },
    { name: "Firefly", icon: <SiAdobe className="text-purple-600" /> }
  ]
};

const SkillCard = ({ name, icon, category }: { name: string; icon: React.ReactNode; category: string }) => {
  let bgColor = "";
  
  switch(category) {
    case "development":
      bgColor = "from-blue-500/20 to-blue-600/20 border-blue-500/30";
      break;
    case "design":
      bgColor = "from-purple-500/20 to-purple-600/20 border-purple-500/30";
      break;
    case "aiTools":
      bgColor = "from-pink-500/20 to-pink-600/20 border-pink-500/30";
      break;
    default:
      bgColor = "from-gray-500/20 to-gray-600/20";
  }
  
  return (
    <div className={`aspect-square p-4 rounded-lg bg-gradient-to-br ${bgColor} glassmorphism card-hover flex flex-col items-center justify-center text-center`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-medium text-sm">{name}</h4>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">A combination of technical and creative abilities</p>
        </div>
        
        <div className="grid gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              </span>
              Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
              {skills.development.map((skill, index) => (
                <SkillCard 
                  key={`dev-${index}`} 
                  name={skill.name} 
                  icon={skill.icon}
                  category="development" 
                />
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-purple-500"></span>
              </span>
              Design
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.design.map((skill, index) => (
                <SkillCard 
                  key={`design-${index}`} 
                  name={skill.name} 
                  icon={skill.icon}
                  category="design" 
                />
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              </span>
              AI Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {skills.aiTools.map((skill, index) => (
                <SkillCard 
                  key={`ai-${index}`} 
                  name={skill.name} 
                  icon={skill.icon}
                  category="aiTools" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
