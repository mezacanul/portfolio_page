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
    Container,
} from "@chakra-ui/react";

function Hero() {
    return (
        <Container
            maxW={{base: "container.xl", md: "95%", xl: "container.xl"}}
            position={"relative"}
            maxH={{ base: "100vh" }}
            minH={"100vh"}
            display={"flex"}
        >
            <Flex flexDir={{ base: "column", md: "row" }} position={"relative"}>
                <FlexDimension
                    display={{ base: "block", md: "flex" }}
                    position={{ base: "relative", md: "absolute" }}
                    justify={"flex-end"}
                    align={"center"}
                    w={{ sm: "auto", md: "100%", lg: "auto", xl: "100%" }}
                    minH={{ base: "60vh", md: "100vh" }}
                    pt={{ base: "9rem", md: "initial" }}
                    mb={{base: "2rem", md: 0}}
                    left={{base: 0, md: "10rem", lg: "30rem", xl: "initial"}}
                >
                    <Image
                        m={{ base: "auto", md: "initial" }}
                        w={{ base: "90%", md: "auto" }}
                        height={{base: "60vh", md: "100%", lg: "100%"}}
                        src="image-profile-desktop.jpg"
                        objectFit={"cover"}
                    />
                </FlexDimension>

                <FlexDimension
                    position={["relative"]}
                    align={{md: "flex-end", lg: "center"}}
                    w={{md: "80%", lg: "100%"}}
                    height={"100%"}
                    pb={{md: "10rem", lg: "0"}}
                >
                    <Greeting />
                </FlexDimension>
            </Flex>

            <FlexDimension>
                <Circle
                    size={"8rem"}
                    borderWidth={2}
                    borderColor={"white"}
                    position={"absolute"}
                    bottom={"8rem"}
                    right={{base: "0rem", md: "31rem", lg: "45rem", xl:"41rem"}}
                />
            </FlexDimension>

            <FlexDimension>
                <Image
                    src="pattern-rings.svg"
                    height={"10rem"}
                    position={"absolute"}
                    top={"11rem"}
                    left={["-34rem", "-30rem"]}
                />
            </FlexDimension>
        </Container>
    );
}

function Greeting() {
    return (
        <VStack w={{ base: "100%", md: "90%", lg: "65%", xl: "70%" }} align={{base: "center", md: "flex-start"}}>
            {/* <Heading fontSize={{ base: "3rem", md: "xl" }} mb={"-0.5rem"} textAlign={"center"}>
                Nice to meet you!
            </Heading> */}

            <Heading mb={{base: "2rem", xl: "3rem"}} fontSize={{ base: "2.5rem", md: "4rem", xl: "xl" }} textAlign={{base: "center", md: "left"}}>
                {"Nice to meet you! I'm "}
                <Heading fontSize={{base: "2.5rem", md: "4rem", xl: "xl"}} as={"b"} borderBottom={"8px"} borderColor={"green"}>
                    Eduardo Meza
                </Heading>
                .
            </Heading>

            {/* <HStack align={"flex-start"} w={"100%"}>
                <Heading fontSize={{base: "3rem", md: "xl"}} mb={"2rem"} me={"1rem"}>
                    {"I'm "}
                </Heading>
                <Heading
                    fontSize={{base: "3rem", md: "xl"}}
                    mb={"2rem"}
                    display={"inline"}
                    borderBottom={"8px"}
                    borderColor={"green"}
                >
                    Eduardo Meza
                </Heading>
                <Heading
                    fontSize={"xl"}
                    alignSelf={"flex-end"}
                    pb={"2.4rem"}
                    ml={"-0.5rem"}
                >
                    {"."}
                </Heading>
            </HStack> */}

            <Text w={{base: "100%", md: "75%", xl: "60%"}} mb={{base: "2rem", xl: "4rem"}} textAlign={{base: "center", md: "left"}}>
                {
                    "Based in MX, I'm a front-end developer passionate about building fast, efficient and visually appealing web pages for users to have a great experience on the internet."
                }
            </Text>
            <ScrollLinkThemed href={"#footer"}>CONTACT ME</ScrollLinkThemed>
        </VStack>
    );
}

export default Hero;
