import FlexDimension from "@/components/common/FlexDimension";
import LinkThemed from "@/components/common/LinkThemed";
import ScrollLinkThemed from "@/components/common/ScrollLinkThemed";
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
                <Image src="image-profile-desktop.jpg" alt=""/>
            </FlexDimension>

            <FlexDimension>
                <Circle
                    size={"8rem"}
                    borderWidth={2}
                    borderColor={"white"}
                    position={"absolute"}
                    bottom={"8rem"}
                    right={"35rem"}
                />
            </FlexDimension>

            <FlexDimension>
                <Image
                    src="pattern-rings.svg"
                    height={"10rem"}
                    position={"absolute"}
                    top={"11rem"}
                    left={"-25rem"}
                    alt=""
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
                <Heading fontSize={"xl"} mb={"2rem"} me={"1rem"}>{"I'm "}</Heading>
                <Heading fontSize={"xl"} mb={"2rem"} display={"inline"} borderBottom={"8px"} borderColor={"green"}>Eduardo Meza</Heading>
                <Heading fontSize={"xl"} alignSelf={"flex-end"} pb={"2.4rem"} ml={"-0.5rem"}>{"."}</Heading>
            </HStack>
            
            <Text w={"60%"} mb={"4rem"}>
                {
                    "Based in MX, I'm a front-end developer passionate about building fast, efficient and visually appealing web pages for users to have a great experience on the internet."
                }
            </Text>
            <ScrollLinkThemed
                href={"#footer"}
            >
                CONTACT ME
            </ScrollLinkThemed>
        </VStack>
    );
}

export default Hero;
