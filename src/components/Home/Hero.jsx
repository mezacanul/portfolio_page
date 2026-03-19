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

function Hero({ cms, zIndex }) {
    return (
        <Box
            // px={0}
            mt={"-11vh"}
            maxW={["100%"]}
            w={"100%"}
            position={"relative"}
            maxH={{ base: "100vh" }}
            minH={"100vh"}
            display={"flex"}
            mb={["5rem", 0]}
            zIndex={zIndex}
        >
            <Flex
                flexDir={{ base: "column", md: "row" }}
                position={"relative"}
            >
                <FlexDimension
                    display={{ base: "block", md: "flex" }}
                    position={{
                        base: "relative",
                        md: "absolute",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    w={{
                        sm: "auto",
                        md: "100%",
                        lg: "auto",
                        xl: "100%",
                    }}
                    minH={{ base: "60vh", md: "100vh" }}
                    pt={{ base: "9rem", md: "initial" }}
                    mb={{ base: "2rem", md: 0 }}
                    left={{
                        base: 0,
                        md: "10rem",
                        lg: "30rem",
                        xl: "initial",
                    }}
                >
                    <Image
                        m={{ base: "auto", md: "initial" }}
                        w={{ base: "90%", md: "auto" }}
                        height={{
                            base: "60vh",
                            md: "100%",
                            lg: "100%",
                        }}
                        src="image-profile-desktop.jpg"
                        objectFit={"cover"}
                    />
                </FlexDimension>

                <FlexDimension
                    position={["relative"]}
                    align={{ md: "flex-end", lg: "center" }}
                    w={{ md: "80%", lg: "100%" }}
                    height={"100%"}
                    pb={{ md: "10rem", lg: "0" }}
                    px={0}
                    mt={["2rem", 0]}
                >
                    <Greeting cms={cms} />
                </FlexDimension>
            </Flex>

            {/* <FlexDimension>
                <Circle
                    size={"8rem"}
                    borderWidth={2}
                    borderColor={"white"}
                    position={"absolute"}
                    bottom={"8rem"}
                    right={{
                        base: "0rem",
                        md: "31rem",
                        lg: "45rem",
                        xl: "19rem",
                    }}
                />
            </FlexDimension> */}

            {/* <FlexDimension>
                <Image
                    zIndex={10}
                    src="pattern-rings.svg"
                    height={"10rem"}
                    position={"absolute"}
                    top={"11rem"}
                    left={["-34rem", "-30rem"]}
                />
            </FlexDimension> */}
        </Box>
    );
}

function Greeting({ cms }) {
    return (
        <VStack
            px={0}
            w={{
                base: "100%",
                md: "90%",
                lg: "65%",
                xl: "70%",
            }}
            align={{ base: "center", md: "flex-start" }}
        >
            <Heading
                fontSize={{
                    base: "2.5rem",
                    md: "4rem",
                    xl: "4.5rem",
                }}
                mb={"-0.5rem"}
                textAlign={"center"}
            >
                {"Nice to meet you!"}
            </Heading>

            <Heading
                mb={{ base: "2rem", xl: "3rem" }}
                fontSize={{
                    base: "2.5rem",
                    md: "4rem",
                    xl: "4.5rem",
                }}
                textAlign={{ base: "center", md: "left" }}
            >
                {cms.subject}
                <Heading
                    fontSize={{
                        base: "2.5rem",
                        md: "4rem",
                        xl: "4.5rem",
                    }}
                    as={"b"}
                    borderBottom={"8px"}
                    borderColor={"green"}
                >
                    {cms.name}
                </Heading>
                {"."}
            </Heading>

            <Text
                w={{ base: "100%", md: "80%", xl: "70%" }}
                mb={{ base: "2rem", xl: "4rem" }}
                textAlign={{ base: "center", md: "left" }}
                fontSize={"1.2rem"}
                fontWeight={300}
            >
                {cms.description}
            </Text>
            <ScrollLinkThemed href={"#footer"}>
                {cms.button}
            </ScrollLinkThemed>
        </VStack>
    );
}

export default Hero;
