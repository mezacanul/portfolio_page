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


export default function Skills({ cms, zIndex }) {
    const { title, skills, span } = cms;
    return (
        <Box pt={"10rem"} zIndex={zIndex}>
            <Heading fontSize={"xl"} mb={"2rem"}>
                {title}
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
                        {skills.map((skill) => (
                            <Skill
                                experience={
                                    skill.experience
                                }
                                key={skill.title}
                                span={span}
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

function Skill({ children, experience, span }) {
    const experienceText = useMemo(() => {
        return `${experience} ${span}${
            experience > 1 ? "s" : ""
        }`;
    }, [experience, span]);

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
