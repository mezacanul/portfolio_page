import Divider from "@/components/common/Divider";
import FlexDimension from "@/components/common/FlexDimension";
import { Text, Box, Container, Heading, HStack, Image, VStack } from "@chakra-ui/react";

export default function Skills() {
    return (
        <Container maxW={"container.xl"} pt={"10rem"} position={"relative"}>
            <Divider/>
            
            <VStack spacing={"4rem"} w={"100%"} align={"space-between"} py={"5rem"}>
                <HStack justify={"space-between"}>
                    <Skill text={"1 Year Experience"}>React</Skill>
                    <Skill text={"1 Year Experience"}>Next.js</Skill>
                    <Skill text={"1 Year Experience"}>Redux</Skill>
                </HStack>
                
                <HStack justify={"space-between"}>
                    <Skill text={"6 Years Experience"}>HTML</Skill>
                    <Skill text={"6 Years Experience"}>CSS</Skill>
                    <Skill text={"6 Years Experience"}>Javascript</Skill>
                </HStack>

                <HStack justify={"space-between"}>
                    <Skill text={"1 Year Experience"}>SSR</Skill>
                    <Skill text={"1 Year Experience"}>SEO</Skill>
                    <Skill text={"1 Year Experience"}>CI/CD</Skill>
                </HStack>
                
                <HStack justify={"space-between"}>
                    <Skill text={"4 Years Experience"}>API</Skill>
                    <Skill text={"2 Years Experience"}>Python</Skill>
                    <Skill text={"4 Years Experience"}>MySQL</Skill>
                </HStack>
            </VStack>

            <FlexDimension>
                <Image
                    src="pattern-rings.svg"
                    height={"10rem"}
                    position={"absolute"}
                    bottom={"20rem"}
                    right={"-32rem"}
                />
            </FlexDimension>
        </Container>
    )
}

function Skill({children, text}) {
    return (
        <Box width={"33%"}>
            <Heading fontSize={"lg"} mb={"0.8rem"}>{children}</Heading>
            <Text>{text}</Text>
        </Box>
    )
}