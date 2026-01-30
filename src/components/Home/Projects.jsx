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
        >
            <Flex
                flexDir={["column", "row"]}
                rowGap={"1.5rem"}
                justify={"space-between"}
                align={["flex-start", "center"]}
            >
                <Heading fontSize={"xl"}>
                    {cms.title}
                </Heading>
                {/* <ScrollLinkThemed
                    href={"#footer"}
                    duration={600}
                >
                    {"CONTACT ME"}
                </ScrollLinkThemed> */}
            </Flex>

            <SimpleGrid
                columns={[1, 2]}
                columnGap={"10rem"}
                rowGap={{ base: "4rem", lg: "6rem" }}
                my={"5rem"}
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

function Project({ project, cms }) {
    const {
        name,
        skills,
        img,
        type,
        visibility = "public",
        url,
        code,
        align,
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
                    cms={cms}
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
                justify={"space-between"}
                display={{ base: "flex", xl: "none" }}
            >
                <LinkThemed href={url} opacity={1}>
                    {cms.buttons.demo}
                </LinkThemed>
                {code && (
                    <LinkThemed href={code} opacity={1}>
                        {cms.buttons.code}
                    </LinkThemed>
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

function OverlayAndButtons({
    url,
    code,
    type,
    visibility,
    cms,
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
                            ? cms.buttons.about
                            : cms.buttons.demo}
                    </LinkThemed>
                    {visibility === "public" && (
                        <LinkThemed href={code} opacity={1}>
                            {cms.buttons.code}
                        </LinkThemed>
                    )}
                </VStack>
            </Flex>
        </Box>
    );
}
