// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const language_map = {
    en: ["US", "CA", "UK", "AU", "NZ"],
    es: ["MX", "CO", "ES", "AR", "CL"],
};

export default function handler(req, res) {
    const { region } = req.query;
    const language = language_map["en"].includes(region)
        ? "en"
        : language_map["es"].includes(region)
        ? "es"
        : "en";

    console.log("cms data", CMS_DATA[language]);
    res.status(200).json(CMS_DATA[language]);
}

const skillsArr = [
    { title: "React.js", experience: 5 },
    { title: "Next.js", experience: 4 },
    { title: "TypeScript", experience: 3 },
    { title: "Tailwind CSS", experience: 4 },
    { title: "Redux", experience: 4 },
    { title: "Express.js", experience: 2 },
    { title: "MySQL", experience: 5 },
    { title: "MongoDB", experience: 2 },
    { title: "Node.js", experience: 2 },
    { title: "React Native", experience: 1 },
    // { title: "Expo", experience: 1 },
    { title: "REST API", experience: 5 },
    { title: "CI/CD", experience: 3 },
    { title: "CSR/SSR", experience: 2 },
    // { title: "SSG/ISR", experience: 2 },
    { title: "HTML", experience: 6 },
    { title: "CSS", experience: 6 },
    { title: "Javascript", experience: 6 },
    // { title: "Python", experience: 2 },
];

const CMS_DATA = {
    en: {
        home: {
            hero: {
                title: "Nice to meet you!",
                subject: "I'm ",
                name: "Eduardo Meza",
                description:
                    "Based in MX, I'm a Full Stack developer who has a great passion for building web pages, web applications, cross-platform applications and APIs for users to have a great experience on the internet.",
                button: "CONTACT ME",
            },
            skills: {
                title: "Technical Skills",
                span: "Year",
                skills: skillsArr,
            },
            projects: {
                title: "My Projects",
                buttons: {
                    about: "ABOUT PROJECT",
                    demo: "VIEW DEMO",
                    code: "VIEW CODE",
                },
            },
        },
        footer: {
            title: "Contact",
            description:
                "I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible!",
            inputs: {
                name: "NAME",
                email: "EMAIL",
                message: "MESSAGE",
            },
            button: "SEND MESSAGE",
        },
    },
    es: {},
};
