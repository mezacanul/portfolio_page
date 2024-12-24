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

export default function Projects() {
    return (
        <Container maxW={{base: "90%", md: "85%", lg: "85%"}} py={"1rem"}>
            <Flex flexDir={["column", "row"]} rowGap={"1.5rem"} justify={"space-between"} align={["flex-start", "center"]}>
                <Heading fontSize={["lg", "xl"]}>Projects</Heading>
                <ScrollLinkThemed href={"#footer"} duration={600}>
                    CONTACT ME
                </ScrollLinkThemed>
            </Flex>

            <SimpleGrid columns={[1, 2]} columnGap={"2rem"} rowGap={{base: "4rem", lg: "6rem"}} my={"5rem"}>
                <Project
                    name={"Coffeeshop"}
                    skills={"React - Next.js - Chakra UI"}
                    img={"thumbnail-project-1-large.webp"}
                />

                <Project
                    name={"Data Visualization"}
                    skills={
                        "React - Next.js - Chakra UI - D3.js - Python - Django"
                    }
                    img={"thumbnail-project-2-large.webp"}
                />

                <Project
                    name={"Fligh Tracker"}
                    skills={
                        "React - Next.js - Chakra UI - Axios - Websockets - API"
                    }
                    img={"thumbnail-project-3-large.webp"}
                />

                <Project
                    name={"Random Poster"}
                    skills={
                        "React - Next.js - Chakra UI - Axios - Formik Yup - Python - MySQL"
                    }
                    img={"thumbnail-project-4-large.webp"}
                />
            </SimpleGrid>
        </Container>
    );
}

function Project({ name, skills, img }) {
    return (
        <Box
            _hover={{
                "& .overlay": {
                    opacity: 1,
                },
            }}
        >
            <Box position={"relative"}>
                <Box
                    display={{base: "none", xl: "block"}}
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
                            <LinkThemed href={"#"} opacity={1}>
                                VIEW PROJECT
                            </LinkThemed>
                            <LinkThemed href={"#"} opacity={1}>
                                VIEW CODE
                            </LinkThemed>
                        </VStack>
                    </Flex>
                </Box>

                <Image src={img} mb={"2rem"} alt="" />
            </Box>

            <VStack align={"flex-start"} mb={"2rem"}>
                <Heading mb={"0.4rem"}>{name}</Heading>
                <Text>{skills}</Text>
            </VStack>

            <HStack spacing={"2rem"}>
                <LinkThemed href={"#"} opacity={1}>
                    VIEW PROJECT
                </LinkThemed>
                <LinkThemed href={"#"} opacity={1}>
                    VIEW CODE
                </LinkThemed>
            </HStack>
        </Box>
    );
}
