import { Logos3 } from "@/components/ui/logos3";

const LogosSection = () => {
  const techLogos = [

    {
      id: "html5",
      description: "HTML5",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "css3",
      description: "CSS3",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "react",
      description: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "typescript",
      description: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "javascript",
      description: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "tailwind",
      description: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "nodejs",
      description: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "firebase",
      description: "Firebase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      className: "h-8 w-auto",
    },
    {
      id: "git",
      description: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "framer",
      description: "Framer",
      image: "https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512",
      className: "h-8 w-auto",
    },
    
    
    {
      id: "vscode",
      description: "VS Code",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      className: "h-8 w-auto",
    },
    
    {
      id: "github-copilot",
      description: "GitHub Copilot",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJedbIq_sak5t6NzY9sVyvYUDV8haKtqd3g&s",
      className: "h-8 w-auto",
    },
    {
      id: "chatgpt",
      description: "ChatGPT",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "perplexity",
      description: "Perplexity",
      image: "https://perplexity.ai/favicon.ico",
      className: "h-8 w-auto",
    },
    {
      id: "cursor",
      description: "Cursor",
      image: "https://cursor.sh/favicon.ico",
      className: "h-8 w-auto",
    },
    {
      id: "lovable",
      description: "Lovable",
      image: "https://lovable.dev/favicon.ico",
      className: "h-8 w-auto",
    },

    {
      id: "figma",
      description: "Figma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "illustrator",
      description: "Illustrator",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      className: "h-8 w-auto",
    },
    {
      id: "photoshop",
      description: "Photoshop",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      className: "h-8 w-auto",
    },

    {
      id: "premiere-pro",
      description: "Premiere Pro",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
      className: "h-8 w-auto",
    },
    {
      id: "lightroom",
      description: "Lightroom",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1200px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
      className: "h-8 w-auto",
    },
    {
      id: "canva",
      description: "Canva",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      className: "h-8 w-auto",
    },
  ];

  return (
    <Logos3 
      heading="" 
      logos={techLogos}
    />
  );
};

export default LogosSection; 