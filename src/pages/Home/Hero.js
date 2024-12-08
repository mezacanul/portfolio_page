import FlexDimension from "@/components/common/FlexDimension";
import LinkThemed from "@/components/common/LinkThemed";
import {
    Text,
    Box,
    Heading,
    VStack,
    Flex,
    Image,
    Circle,
    HStack,
    Container
} from "@chakra-ui/react";

function Hero() {
    return (
        <Container maxW={"container.xl"} position={"relative"} height={"100vh"}>
            <FlexDimension justify={"flex-end"}>
                <Image src="image-profile-desktop.webp" />
            </FlexDimension>

            <FlexDimension>
                <Circle
                    size={"8rem"}
                    borderWidth={2}
                    borderColor={"white"}
                    position={"absolute"}
                    top={"40rem"}
                    right={"30rem"}
                />
            </FlexDimension>

            <FlexDimension>
                <Image
                    src="pattern-rings.svg"
                    height={"10rem"}
                    position={"absolute"}
                    top={"8rem"}
                    left={"-20rem"}
                />
            </FlexDimension>

            <FlexDimension align={"center"}>
                <Greeting />
            </FlexDimension>
        </Container>
    );
}

function Greeting() {
    return (
        <VStack w={"70%"} align={"flex-start"}>
            <Heading fontSize={"xl"} mb={"-0.5rem"}>
                Nice to meet you!
            </Heading>
            <HStack align={"flex-start"}>
                <Heading fontSize={"xl"} mb={"2rem"} me={"1rem"}>I'm{" "}</Heading>
                <Heading fontSize={"xl"} mb={"2rem"} display={"inline"} borderBottom={"8px"} borderColor={"green"}>Eduardo Meza</Heading>
                <Heading fontSize={"xl"} alignSelf={"flex-end"} pb={"2.4rem"} ml={"-0.5rem"}>{"."}</Heading>
            </HStack>
            
            <Text w={"60%"} mb={"4rem"}>
                {
                    "Based in MX, I'm a front-end developer passionate about building fast, efficient and visually appealing web apps that users love."
                }
            </Text>
            <LinkThemed href={"#"}>CONTACT ME</LinkThemed>
        </VStack>
    );
}

export default Hero;
