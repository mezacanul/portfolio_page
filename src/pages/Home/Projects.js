import LinkThemed from "@/components/common/LinkThemed";
import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Projects() {
    return (
        <Container maxW={"container.xl"} py={"5rem"}>
            <HStack justify={"space-between"}>
                <Heading fontSize={"xl"}>Projects</Heading>
                <LinkThemed href={"#"}>CONTACT ME</LinkThemed>
            </HStack>

            <VStack spacing={"6rem"} my={"5rem"}>
                <HStack justifyContent={"space-between"}>
                    <Project
                        name={"Coffeeshop"}
                        skills={"React - Next.js - Chakra UI"}
                        img={"thumbnail-project-1-large.webp"}
                    />
                    
                    <Project
                        name={"Data Visualization"}
                        skills={"React - Next.js - Chakra UI - D3.js - Python - Django"}
                        img={"thumbnail-project-2-large.webp"}
                    />
                </HStack>

                <HStack justifyContent={"space-between"}>
                    <Project
                        name={"Fligh Tracker"}
                        skills={"React - Next.js - Chakra UI - Axios - Websockets - API"}
                        img={"thumbnail-project-3-large.webp"}
                    />
                    
                    <Project
                        name={"Random Poster"}
                        skills={"React - Next.js - Chakra UI - Axios - Formik Yup - Python - MySQL"}
                        img={"thumbnail-project-4-large.webp"}
                    />
                </HStack>
            </VStack>
        </Container>
    );
}

function Project({name, skills, img}) {
    return (
        <Box w={"48%"} _hover={{
            "& .overlay": {
                opacity: 1
            }
        }}>
            <Box position={"relative"}>
                <Box className="overlay" position={"absolute"} w={"100%"} h={"100%"} opacity={0} transition={"all 0.3s"}>
                    <Box w={"100%"} h={"100%"} bg={"#000000"} position={"absolute"} opacity={0.75}/>
                    <Flex w={"100%"} h={"100%"} position={"absolute"} align={"center"} justify={"center"}>
                        <VStack spacing={"2rem"}>
                            <LinkThemed href={"#"} opacity={1}>VIEW PROJECT</LinkThemed>
                            <LinkThemed href={"#"} opacity={1}>VIEW CODE</LinkThemed>
                        </VStack>
                    </Flex>
                </Box>
                <Image src={img} mb={"2rem"}/>
            </Box>
            <Heading mb={"0.4rem"}>{name}</Heading>
            <Text>{skills}</Text>
        </Box>
    )
}
