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
    useColorModeValue,
    useToken,
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
            {projectData && (
                <>
                    <Hero project={projectData} />
                    <Content
                        content={projectData.content}
                    />
                    <BackToHome />
                </>
            )}
        </Box>
    );
}

function BackToHome() {
    return (
        <HStack
            justify={"center"}
            w={"100%"}
            mt={"8rem"}
            mb={"7rem"}
        >
            <Text
                color={"green"}
                fontSize={"1.2rem"}
                fontWeight={300}
            >
                {"Back To Home"}
            </Text>
        </HStack>
    );
}
function Content({ content }) {
    const green = useToken("colors", "green");

    return (
        <VStack
            my={"5rem"}
            w={"100%"}
            position={"relative"}
        >
            {content.map((item, idx) => (
                <VStack key={idx} w={"100%"}>
                    <HStack
                        columns={2}
                        spacing={10}
                        py={"5rem"}
                        flexDir={
                            idx % 2 === 0
                                ? "row"
                                : "row-reverse"
                        }
                    >
                        <Image
                            w={"50%"}
                            src={`/${item.img}`}
                            alt={item.description}
                        />
                        <VStack
                            w={"50%"}
                            align={"center"}
                            justify={"center"}
                            h={"100%"}
                        >
                            <Text textAlign={"center"}>
                                {item.description}
                            </Text>
                        </VStack>
                    </HStack>
                    <Box
                        w={"35%"}
                        borderBottom={`2px solid ${green}`}
                    />
                </VStack>
            ))}
        </VStack>
    );
}

function Hero({ project }) {
    const green = useToken("colors", "green");

    return (
        <SimpleGrid
            mt={"-11vh"}
            gridTemplateColumns={"3fr 2fr"}
            spacing={10}
            height={"100vh"}
            alignItems={"center"}
            borderBottom={`10px solid ${green}`}
            position={"relative"}
        >
            <Image
                src="/pattern-rings.svg"
                height={"10rem"}
                position={"absolute"}
                top={"60vh"}
                zIndex={10}
                right={["-34rem", "-30rem"]}
            />
            <Box
                position={"absolute"}
                top={0}
                left={-10}
                mt={"11vh"}
                w={"58%"}
                zIndex={0}
                h={"70vh"}
                bg={"green"}
            />
            <Image
                src={`/${project.img}`}
                alt={project.name}
                w={"100%"}
                // w={"70vh"}
                h={"70vh"}
                zIndex={1}
                borderRadius={"5px"}
                objectFit={"cover"}
                align={project.align || "center"}
            />
            <VStack
                justify={"center"}
                align={"center"}
                h={"100%"}
            >
                <VStack mt={"-10vh"}>
                    <Heading
                        size={"2xl"}
                        textAlign={"center"}
                    >
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
