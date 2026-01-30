// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { region } = req.query;
    const regions_map = {
        en: ["US", "CA", "UK", "AU", "NZ"],
        es: ["MX", "CO", "ES", "AR", "CL"],
    };
    const language = regions_map["en"].includes(region)
        ? "en"
        : regions_map["es"].includes(region)
        ? "es"
        : "en";

    console.log("cms data", CMS_DATA[language]);
    res.status(200).json(CMS_DATA[language]);
}

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
                title: "My Stack",
                span: "Year",
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
