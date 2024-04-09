import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Virendra Singh Rawat",
    lastName: "",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Student at BTU"
        },
        {
            emoji: "📧",
            text: "vrndrrwtofficial@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/virendrasinghrawatonline",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/vrndrrwt",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/vrndrrwt",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/vrndrrwt",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Virendra Singh Rawat. I'm a aspiring a Software Engineer. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Django'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/vrndrrwt", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "",
            source: "https://github.com/vrndrrwt",
            image: mock2
        },
        {
            title: "Project 3",
            live: "",
            source: "https://github.com/vrndrrwt",
            image: mock3
        },
        {
            title: "Project 4",
            live: "",
            source: "https://github.com/vrndrrwt",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "https://github.com/vrndrrwt",
            image: mock5
        }
    ]
}