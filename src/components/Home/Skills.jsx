import Divider from "@/components/common/Divider";
import FlexDimension from "@/components/common/FlexDimension";
import {
    Text,
    Box,
    Container,
    Heading,
    HStack,
    Image,
    VStack,
    SimpleGrid,
    Flex,
} from "@chakra-ui/react";
import { useMemo } from "react";

const skillsArr = [
    { title: "React.js", experience: 2 },
    { title: "Next.js", experience: 2 },
    { title: "Redux", experience: 2 },
    { title: "Typescript", experience: 2 },
    { title: "MySQL", experience: 4 },
    { title: "Node.js", experience: 1 },
    { title: "Express.js", experience: 1 },
    { title: "REST API", experience: 4 },
    { title: "CI/CD", experience: 1 },
    { title: "SSR", experience: 1 },
    { title: "SEO", experience: 1 },
    { title: "HTML", experience: 6 },
    { title: "CSS", experience: 6 },
    { title: "Javascript", experience: 6 },
    { title: "Python", experience: 2 },
];

export default function Skills({ cms, zIndex }) {
    return (
        <Box pt={"10rem"} zIndex={zIndex}>
            <Heading fontSize={"xl"} mb={"2rem"}>
                {cms.title}
            </Heading>
            <Flex justify={"center"} maxW={["100%"]}>
                <Box
                    maxW={["100%"]}
                    w={"100%"}
                    mx={0}
                    position={"relative"}
                >
                    <Divider />

                    <SimpleGrid
                        maxW={"initial"}
                        spacing={"4rem"}
                        // w={"100%"}
                        align={"space-between"}
                        py={"5rem"}
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                            xl: 4,
                        }}
                    >
                        {skillsArr.map((skill) => (
                            <Skill
                                experience={
                                    skill.experience
                                }
                                key={skill.title}
                                cms={cms}
                            >
                                {skill.title}
                            </Skill>
                        ))}
                    </SimpleGrid>

                    {/* <FlexDimension>
                        <Image
                            src="pattern-rings.svg"
                            height={"10rem"}
                            position={"absolute"}
                            top={{
                                base: "30rem",
                                md: "20rem",
                                xl: "20rem",
                            }}
                            bottom={["initial", "15rem"]}
                            right={{
                                base: "30rem",
                                md: "15rem",
                                lg: "8rem",
                                xl: "-25rem",
                            }}
                            alt=""
                        />
                    </FlexDimension> */}
                </Box>
            </Flex>
        </Box>
    );
}

function Skill({ children, experience, cms }) {
    const experienceText = useMemo(() => {
        return `${experience} ${cms.span}${
            experience > 1 ? "s" : ""
        }`;
    }, [experience, cms.span]);

    return (
        <VStack
            align={{ base: "center", md: "flex-start" }}
        >
            <Heading fontSize={"2.5rem"} mb={"0.2rem"}>
                {children}
            </Heading>
            <Text
                color={"green"}
                fontSize={"1rem"}
                fontWeight={300}
            >
                {experienceText}
            </Text>
        </VStack>
    );
}
