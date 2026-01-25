import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
    Box,
    Heading,
    HStack,
    Image,
    VStack,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import NotFound from "@/components/NotFound";

export default function ProjectPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { project } = router.query; // "myproject", "client-portal", etc.
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        if (project) {
            axios
                .get(`/api/projects?id=${project}`)
                .then((response) => {
                    console.log(response);
                    setProjectData(response.data);
                    setLoading(false);
                });
        }
    }, [project]);

    if (!projectData && !loading) {
        return <NotFound />;
    }

    return (
        <Box mt={"11vh"} minH={"100vh"}>
            {projectData && <Hero project={projectData} />}
            {/* <Content /> */}
        </Box>
    );
}

function Hero({ project }) {
    return (
        <SimpleGrid
            mt={"-11vh"}
            gridTemplateColumns={"3fr 2fr"}
            spacing={10}
            height={"100vh"}
            alignItems={"center"}
        >
            <Image
                src={`/${project.img}`}
                alt={project.name}
                w={"100%"}
                h={"70vh"}
                objectFit={"cover"}
                align={project.align || "center"}
            />
            <VStack
                justify={"center"}
                align={"center"}
                h={"100%"}
            >
                <VStack mt={"-10vh"}>
                    <Heading size={"2xl"} textAlign={"center"}>
                        {project.name}
                    </Heading>
                    <Text
                        color={"green"}
                        // fontSize={"1rem"}
                        // fontWeight={300}
                    >
                        {project.skills}
                    </Text>
                    <Text
                        textAlign={"center"}
                        fontSize={"1rem"}
                        mt={"1rem"}
                    >
                        {
                            "An ERP system for the public sector in Mexico"
                        }
                    </Text>
                </VStack>
            </VStack>
        </SimpleGrid>
    );
}
