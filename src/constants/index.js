import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eldan,
    fedex,
    flying,
    airbxb,
    netflix,
    spotify,
    apsus,
    threejs,
    angular,
    vue,
    next,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Vue Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "Next js",
        icon: next,
    },
];

const experiences = [
    {
        title: "System Specialist",
        company_name: "Eldan Cargo",
        icon: eldan,
        iconBg: "#383E56",
        date: "Sep 2019 - Sep 2022",
        points: [
            "Full control on Maslul and Focus system and other related technologies.",
            "Management and tracing of requests in the system",
            "Working with government ministries, improving processes and streamlining.",
        ],
    },
    {
        title: "Customs brokerage",
        company_name: "FedEx",
        icon: fedex,
        iconBg: "#E6DEDD",
        date: "Jan 2018 - sep 2019",
        points: [
            "Handling international shipping process.",
            "Full control of SOFTLOG -NEXT systems",
            "Representation of business owners Opposite the customs authorities.",
        ],
    },
    {
        title: "Customs brokerage",
        company_name: "Flying Cargo",
        icon: flying,
        iconBg: "#e6dedd",
        date: "Jan 2017 - Jan 2018",
        points: [
            "Managing the customs clearance process",
            "Organization and management of meeting business goals",
            "Dealing with the customs and VAT systems and the port authorities and cargo terminals.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Airbxb",
        description:
            "Web-based platform that allows users to search, book, and manage property & houses rentals from various providers, providing a convenient and efficient solution for houses rentals needs.",
        tags: [
            {
                name: "Vue.js",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "SCSS",
                color: "pink-text-gradient",
            },
        ],
        image: airbxb,
        source_code_link: "https://github.com/ShonChassel/Airbxb",
        web_link: "https://air-bxb.onrender.com/",
    },
    {
        name: "Netflix",
        description:
            "Web application that enables users to search for TV shows & movies, watch the trailer , users can add to WishList and genre, Top Rated, Trending Now, Thrillers.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: netflix,
        source_code_link: "https://github.com/ShonChassel/Netflix2.0",
        web_link: "https://netflix2-0-eosin.vercel.app/",
    },
    {
        name: "Spotify",
        description:
            "A comprehensive Music platform that allows users to search Songs using the search bar, and offers curated recommendations for popular music.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "NextAuth",
                color: "green-text-gradient",
            },
            {
                name: "Spotify API",
                color: "yellow-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: spotify,
        source_code_link: "https://github.com/ShonChassel/Spotify",
        web_link: "https://spotify-il.vercel.app/",
    },
    {
        name: "Appsus",
        description:
            "A comprehensive Mail & Notes App that allows users search Mail & Notes using the search bar, and users can add or delete Mail & Notes from their personal app..",
        tags: [
            {
                name: "Vue",
                color: "blue-text-gradient",
            },
            {
                name: "VueX",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: apsus,
        source_code_link: "https://github.com/ShonChassel/Appsus",
        web_link: "https://shonchassel.github.io/Appsus/#/",
    },
];

export { services, technologies, experiences, testimonials, projects };