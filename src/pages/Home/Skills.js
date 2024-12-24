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

export default function Skills() {
    return (
        <Flex justify={"center"} w={"100%"}>
            <Container maxW={{ base: "93%", md: "90%", xl: "85%", }} mx={0} pt={"10rem"} position={"relative"}>
                <Divider />

                <SimpleGrid
                    maxW={"initial"}
                    spacing={"4rem"}
                    // w={"100%"}
                    align={"space-between"}
                    py={"5rem"}
                    columns={{base: 1, md: 2, lg: 3, xl: 4}}
                >
                    <Skill text={"1 Year Experience"}>React</Skill>
                    <Skill text={"1 Year Experience"}>Next.js</Skill>
                    <Skill text={"1 Year Experience"}>Redux</Skill>

                    <Skill text={"6 Years Experience"}>HTML</Skill>
                    <Skill text={"6 Years Experience"}>CSS</Skill>
                    <Skill text={"6 Years Experience"}>Javascript</Skill>

                    <Skill text={"1 Year Experience"}>CI/CD</Skill>
                    <Skill text={"1 Year Experience"}>SSR</Skill>
                    <Skill text={"1 Year Experience"}>SEO</Skill>

                    <Skill text={"4 Years Experience"}>API</Skill>
                    <Skill text={"2 Years Experience"}>Python</Skill>
                    <Skill text={"4 Years Experience"}>MySQL</Skill>
                </SimpleGrid>

                <FlexDimension>
                    <Image
                        src="pattern-rings.svg"
                        height={"10rem"}
                        position={"absolute"}
                        top={{base: "30rem", md: "20rem", xl: "20rem"}}
                        bottom={["initial", "15rem"]}
                        right={{base: "27rem", md: "15rem", lg: "8rem", xl: "-45rem"}}
                        alt=""
                    />
                </FlexDimension>
            </Container>
        </Flex>
    );
}

function Skill({ children, text }) {
    return (
        <VStack align={{base: "center", md: "flex-start"}}>
            <Heading fontSize={"lg"} mb={"0.8rem"}>
                {children}
            </Heading>
            <Text>{text}</Text>
        </VStack>
    );
}
