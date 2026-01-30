import Test from "../components/test";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoaderFullWidth from "@/components/common/LoaderFullWidth";
import LinesAbsolute from "@/components/common/ImageAbsolute";

export default function Index() {
    const [projects, setProjects] = useState([]);
    const cmsData = useSelector((state) => state.cms);

    useEffect(() => {
        axios.get("/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    if (projects.length === 0) {
        return <LoaderFullWidth />;
    }

    return (
        <Box overflowX={"hidden"} position={"relative"}>
            <Hero cms={cmsData.home.hero} zIndex={10} />
            <Skills cms={cmsData.home.skills} zIndex={10} />
            <Projects
                projects={projects}
                cms={cmsData.home.projects}
                zIndex={10}
            />
        </Box>
    );
}
