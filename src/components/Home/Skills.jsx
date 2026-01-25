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

const skillsArr = [
    { title: "React.js", experience: "1 Year" },
    { title: "Next.js", experience: "1 Year" },
    { title: "Redux", experience: "1 Year" },
    { title: "Typescript", experience: "1 Year" },
    { title: "MySQL", experience: "4 Years" },
    { title: "Node.js", experience: "1 Year" },
    { title: "Express.js", experience: "1 Year" },
    { title: "API", experience: "4 Years" },
    { title: "CI/CD", experience: "1 Year" },
    { title: "SSR", experience: "1 Year" },
    { title: "SEO", experience: "1 Year" },
    { title: "HTML", experience: "6 Years" },
    { title: "CSS", experience: "6 Years" },
    { title: "Javascript", experience: "6 Years" },
    { title: "Python", experience: "2 Years" },
    { title: "OpenAI API", experience: "1 Year" },
];

export default function Skills() {
    return (
        <Flex
            justify={"center"}
            maxW={["100%"]}
        >
            <Container
                maxW={["100%"]}
                mx={0}
                pt={"10rem"}
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
                            text={skill.experience}
                            key={skill.title}
                        >
                            {skill.title}
                        </Skill>
                    ))}
                </SimpleGrid>

                <FlexDimension>
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
                </FlexDimension>
            </Container>
        </Flex>
    );
}

function Skill({ children, text }) {
    return (
        <VStack
            align={{ base: "center", md: "flex-start" }}
        >
            <Heading
                fontSize={"2.5rem"}
                mb={"0.2rem"}
            >
                {children}
            </Heading>
            <Text
                color={"green"}
                fontSize={"1rem"}
                fontWeight={300}
            >
                {`${text}`}
            </Text>
        </VStack>
    );
}
