import Test from "../components/test";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import { Box } from "@chakra-ui/react";

export default function Index() {
    return (
        <Box overflowX={"hidden"}>
            <Hero />
            <Skills />
            <Projects />
        </Box>
    );
}
