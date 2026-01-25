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
    },
    {
        id: "hadassa",
        name: "Hadassa Lash Studio",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/hadassa-lash-studio",
        code: "https://github.com/EduardoMeza97/hadassa-lash-studio",
    },
    {
        id: "grupo-sol",
        name: "Grupo SOL Advertising",
        skills: "React Native - Bootstrap",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/grupo-sol-advertising",
        code: "https://github.com/EduardoMeza97/grupo-sol-advertising",
    },
    {
        id: "planets",
        name: "Planets",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-1-large.webp",
        type: "demo",
        url: "/projects/planets",
        code: "https://github.com/EduardoMeza97/planets",
    },
    {
        id: "real-time-chatbot",
        name: "Real Time Chatbot",
        skills: "React - Next.js - Websockets",
        img: "thumbnail-project-2-large.webp",
        type: "demo",
        url: "/projects/real-time-chatbot",
        code: "https://github.com/EduardoMeza97/real-time-chatbot",
    },
    {
        id: "lattice-design",
        name: "Lattice Design",
        skills: "NPM package - Javascript",
        img: "thumbnail-project-4-large.webp",
        type: "demo",
        url: "/projects/lattice-design",
        code: "https://github.com/EduardoMeza97/lattice-design",
    },
];
