import LinkThemed from "@/components/common/LinkThemed";
import ScrollLinkThemed from "@/components/common/ScrollLinkThemed";
import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";

const projectsArr = [
    {
        name: "SIAPSEZ",
        skills: "React - Bootstrap - Vite",
        img: "img/siapsez.jpg",
        type: "about",
        visibility: "private",
        url: "/projects/siapsez",
        align: "right",
    },
    {
        name: "Hadassa Lash Studio",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/hadassa-lash-studio",
        code: "https://github.com/EduardoMeza97/hadassa-lash-studio",
    },
    {
        name: "Grupo SOL Advertising",
        skills: "React Native - Bootstrap",
        img: "thumbnail-project-3-large.webp",
        type: "about",
        url: "/projects/grupo-sol-advertising",
        code: "https://github.com/EduardoMeza97/grupo-sol-advertising",
    },
    {
        name: "Planets",
        skills: "React - Next.js - Chakra UI",
        img: "thumbnail-project-1-large.webp",
        type: "demo",
        url: "/projects/planets",
        code: "https://github.com/EduardoMeza97/planets",
    },
    {
        name: "Real Time Chatbot",
        skills: "React - Next.js - Websockets",
        img: "thumbnail-project-2-large.webp",
        type: "demo",
        url: "/projects/real-time-chatbot",
        code: "https://github.com/EduardoMeza97/real-time-chatbot",
    },
    {
        name: "Lattice Design",
        skills: "NPM package - Javascript",
        img: "thumbnail-project-4-large.webp",
        type: "demo",
        url: "/projects/lattice-design",
        code: "https://github.com/EduardoMeza97/lattice-design",
    },
];

export default function Projects() {
    return (
        <Container
            // maxW={{ base: "90%", md: "90%", xl: "85%" }}
            maxW={["100%"]}
            py={"1rem"}
        >
            <Flex
                flexDir={["column", "row"]}
                rowGap={"1.5rem"}
                justify={"space-between"}
                align={["flex-start", "center"]}
            >
                <Heading fontSize={["lg", "xl"]}>
                    {"Projects"}
                </Heading>
                <ScrollLinkThemed
                    href={"#footer"}
                    duration={600}
                >
                    {"CONTACT ME"}
                </ScrollLinkThemed>
            </Flex>

            <SimpleGrid
                columns={[1, 2]}
                columnGap={"10rem"}
                rowGap={{ base: "4rem", lg: "6rem" }}
                my={"5rem"}
            >
                {projectsArr.map((project) => (
                    <Project
                        key={project.name}
                        project={project}
                    />
                ))}
            </SimpleGrid>
        </Container>
    );
}

function Project({ project }) {
    const {
        name,
        skills,
        img,
        type,
        visibility = "public",
        url,
        code,
        align
    } = project;
    return (
        <Box
            _hover={{
                "& .overlay": {
                    opacity: 1,
                },
            }}
        >
            <Box position={"relative"}>
                <OverlayAndButtons
                    url={url}
                    code={code}
                    type={type}
                    visibility={visibility}
                />

                <Image
                    h={"40vh"}
                    w={"100%"}
                    align={align || "center"}
                    objectFit={"cover"}
                    src={img}
                    mb={"2rem"}
                    alt=""
                />
            </Box>

            <TitleAndSkills name={name} skills={skills} />

            <HStack
                spacing={"2rem"}
                display={{ base: "flex", xl: "none" }}
            >
                <LinkThemed href={"#"} opacity={1}>
                    {"VIEW PROJECT"}
                </LinkThemed>
                <LinkThemed href={"#"} opacity={1}>
                    {"VIEW CODE"}
                </LinkThemed>
            </HStack>
        </Box>
    );
}

function TitleAndSkills({ name, skills }) {
    return (
        <VStack align={"flex-start"} mb={"2rem"}>
            <Heading fontSize={"2rem"} mb={"0.4rem"}>
                {name}
            </Heading>
            <Text
                color={"green"}
                fontSize={"1rem"}
                fontWeight={300}
            >
                {skills}
            </Text>
        </VStack>
    );
}

function OverlayAndButtons({
    url,
    code,
    type,
    visibility,
}) {
    return (
        <Box
            display={{ base: "none", xl: "block" }}
            className="overlay"
            position={"absolute"}
            w={"100%"}
            h={"100%"}
            opacity={0}
            transition={"all 0.3s"}
        >
            <Box
                w={"100%"}
                h={"100%"}
                bg={"#000000"}
                position={"absolute"}
                opacity={0.75}
            />
            <Flex
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                align={"center"}
                justify={"center"}
            >
                <VStack spacing={"2rem"}>
                    <LinkThemed href={url} opacity={1}>
                        {type === "about"
                            ? "ABOUT PROJECT"
                            : "VIEW DEMO"}
                    </LinkThemed>
                    {visibility === "public" && (
                        <LinkThemed href={code} opacity={1}>
                            {"VIEW CODE"}
                        </LinkThemed>
                    )}
                </VStack>
            </Flex>
        </Box>
    );
}
