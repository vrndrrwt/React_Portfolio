import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Virendra Singh",
  lastName: "Rawat",
  initials: "VSR",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "💻",
      text: "Full Stack Developer passionate about web technologies",
    },
    {
      emoji: "🎓",
      text: "Pursuing B.Tech in IT from Bikaner Technical University",
    },
    {
      emoji: "🚀",
      text: "Open to work on cool new projects & collaborations",
    },
    {
      emoji: "🌍",
      text: "Based in Ajmer, Rajasthan",
    },
  ],

  socials: [
    {
      link: "https://github.com/vrndrrwt",
      icon: "fa fa-github",
      label: "GitHub",
    },
    {
      link: "https://linkedin.com/in/vrndrrwt",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    }
  ],

  bio: `Hello! I'm Virendra Singh Rawat, a self-driven and curious software engineer who loves building full-stack web applications. With experience in React, Node.js, Django, and MongoDB, I'm passionate about creating meaningful digital experiences.`,

  skills: {
    proficientWith: [
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Django"
    ],
    exposedTo: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "TypeScript"
    ],
  },

  hobbies: [
    {
      label: "Reading",
      emoji: "📖"
    },
    {
      label: "Movies",
      emoji: "🎥"
    },
    {
      label: "Cooking",
      emoji: "🌶"
    },
    {
      label: "Gaming",
      emoji: "🎮"
    },
  ],

  portfolio: [
    {
      title: "React Portfolio",
      live: "https://reactportfolio-hazel.vercel.app/",
      source: "https://github.com/vrndrrwt/React_Portfolio",
      image: mock1,
      description: "A modern portfolio site built with React and styled-components.",
      tags: ["Portfolio", "React"],
      techStack: ["React", "CSS3", "JSX"]
    },
    {
      title: "Digital Clock",
      live: "",
      source: "https://github.com/vrndrrwt/Clock",
      image: mock2,
      description: "A simple digital clock built using JavaScript and DOM manipulation.",
      tags: ["Utility", "JavaScript"],
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "WeatherSense App",
      live: "",
      source: "https://github.com/vrndrrwt/WeatherSense",
      image: mock3,
      description: "A weather forecasting web app using OpenWeather API.",
      tags: ["Weather", "API"],
      techStack: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
      title: "GitHub Showcase",
      live: "",
      source: "https://github.com/vrndrrwt",
      image: mock4,
      description: "Collection of useful and experimental projects.",
      tags: ["GitHub", "Open Source"],
      techStack: ["Various"]
    },
    {
      title: "Netflix Clone",
      live: "",
      source: "https://github.com/vrndrrwt/Netflix_Home_Page.git",
      image: mock5,
      description: "A static Netflix home page clone using HTML and CSS.",
      tags: ["Clone", "HTML/CSS"],
      techStack: ["HTML", "CSS"]
    }
  ]
};
