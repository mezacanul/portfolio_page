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

export default function Projects({
    projects,
    cms,
    zIndex,
}) {
    return (
        <Box
            // maxW={{ base: "90%", md: "90%", xl: "85%" }}
            maxW={["100%"]}
            w={"100%"}
            py={"5rem"}
            zIndex={zIndex}
            position={"relative"}
        >
            <Heading
                fontSize={{
                    base: "3rem",
                    lg: "4rem",
                    xl: "5rem",
                }}
            >
                {cms.title}
            </Heading>

            <SimpleGrid
                columns={[1, 2]}
                gap={{
                    base: "3rem",
                    lg: "5rem",
                    xl: "7rem",
                }}
                rowGap={{
                    base: "3rem",
                    lg: "4rem",
                    xl: "4rem",
                }}
                my={"3rem"}
            >
                {projects.map((project) => (
                    <Project
                        key={project.name}
                        project={project}
                        cms={cms}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
}

function Project({ project }) {
    return (
        <Box
            _hover={{
                "& .overlay": {
                    opacity: 1,
                },
            }}
        >
            <Box position={"relative"}>
                <OverlayAndButtons project={project} />

                <Image
                    h={"40vh"}
                    w={"100%"}
                    // align={project.align || "center"}
                    objectPosition={
                        project.align || "center top"
                    }
                    objectFit={"cover"}
                    src={project.img}
                    mb={"2rem"}
                />
            </Box>

            <TitleAndSkills
                name={project.name}
                skills={project.skills}
            />

            <HStack
                spacing={"2rem"}
                display={{ base: "flex", xl: "none" }}
            >
                {project.type === "about" && (
                    <LinkThemed
                        href={`/projects/${project.id}`}
                    >
                        {"ABOUT"}
                    </LinkThemed>
                )}
                {project.type === "preview" && (
                    <>
                        <LinkThemed
                            href={project.url}
                            target="_blank"
                        >
                            {"PREVIEW"}
                        </LinkThemed>
                        <LinkThemed
                            href={project.code}
                            target="_blank"
                        >
                            {"CODE"}
                        </LinkThemed>
                    </>
                )}
            </HStack>
        </Box>
    );
}

function TitleAndSkills({ name, skills }) {
    return (
        <VStack align={"flex-start"} mb={"2rem"}>
            <Heading fontSize={"2rem"}>{name}</Heading>
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

function OverlayAndButtons({ project }) {
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
                    {project.type === "about" && (
                        <LinkThemed
                            href={`/projects/${project.id}`}
                            opacity={1}
                        >
                            {"ABOUT"}
                        </LinkThemed>
                    )}
                    {project.type === "preview" && (
                        <>
                            <LinkThemed
                                href={project.url}
                                opacity={1}
                            >
                                {"PREVIEW"}
                            </LinkThemed>
                            <LinkThemed
                                href={project.code}
                                opacity={1}
                            >
                                {"CODE"}
                            </LinkThemed>
                        </>
                    )}
                </VStack>
            </Flex>
        </Box>
    );
}
