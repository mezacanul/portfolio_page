// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import projects from "../../static/projects/main";
import content from "../../static/projects/content";

export default function handler(req, res) {
    const { id = null } = req.query;
    if (id) {
        let project = projects.find(
            (project) => project.id === id
        );
        project.content = content[id];
        res.status(200).json(project);
    } else {
        res.status(200).json(projects);
    }
}
