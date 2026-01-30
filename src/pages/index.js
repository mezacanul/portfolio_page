import Test from "../components/test";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Index() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <Box overflowX={"hidden"}>
            <Hero />
            <Skills />
            <Projects projects={projects} />
        </Box>
    );
}
