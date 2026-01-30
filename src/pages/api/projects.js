// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { id = null } = req.query;
    if (id) {
        const project = projectsArr.find(
            (project) => project.id === id
        );
        res.status(200).json(project);
    } else {
        res.status(200).json(projectsArr);
    }
}

const projectsArr = [
    {
        id: "siapsez",
        name: "SIAPSEZ",
        skills: "React - Bootstrap - Vite",
        img: "img/siapsez.jpg",
        type: "about",
        visibility: "private",
        url: "/projects/siapsez",
        align: "right",
        content: [
            {
                img: "img/siapsez-1.jpg",
                description:
                    "SIAPSEZ is a web application for the SIAPSEZ company. It is a system for managing the company's projects and tasks.",
            },
            {
                img: "img/siapsez-2.jpg",
                description:
                    "SIAPSEZ is a web application for the SIAPSEZ company. It is a system for managing the company's projects and tasks.",
            },
            {
                img: "img/siapsez-3.jpg",
                description:
                    "SIAPSEZ is a web application for the SIAPSEZ company. It is a system for managing the company's projects and tasks.",
            },
            {
                img: "img/siapsez-4.jpg",
                description:
                    "SIAPSEZ is a web application for the SIAPSEZ company. It is a system for managing the company's projects and tasks.",
            },
        ],
    },
    {
        id: "hadassa",
        name: "Hadassa Lash Studio",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/hadassa",
        visibility: "private",
        // code: "https://github.com/EduardoMeza97/hadassa-lash-studio",
        content: []
    },
    {
        id: "grupo-sol",
        name: "Grupo SOL - Android App",
        skills: "React Native - Bootstrap",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/grupo-sol",
        code: "https://github.com/EduardoMeza97/grupo-sol-advertising",
        content: []
    },
    {
        id: "planets",
        name: "Planets",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-1-large.webp",
        type: "demo",
        url: "/projects/planets",
        code: "https://github.com/EduardoMeza97/planets",
        content: []
    },
    {
        id: "real-time-chatbot",
        name: "Real Time Chatbot",
        skills: "React - Next.js - Websockets",
        img: "thumbnail-project-2-large.webp",
        type: "demo",
        url: "/projects/real-time-chatbot",
        code: "https://github.com/EduardoMeza97/real-time-chatbot",
        content: []
    },
    {
        id: "lattice-design",
        name: "Lattice Design",
        skills: "NPM package - Javascript",
        img: "thumbnail-project-4-large.webp",
        type: "demo",
        url: "/projects/lattice-design",
        code: "https://github.com/EduardoMeza97/lattice-design",
        content: []
    },
];
