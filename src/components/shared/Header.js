import { Box, Container, Flex, HStack, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import IconLink from "../common/IconLink";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
    const router = useRouter();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        console.log(router.asPath);

        const handleScroll = () => {
            setScrolling(window.scrollY > 50); // Change this value for different thresholds
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            position={"fixed"}
            left={0}
            top={0}
            w={"100%"}
            zIndex={10}
            backgroundColor={"transparent"}
            bg={scrolling ? "dark" : "transparent"} // Transition between colors
            // color={
            //     scrolling || "white"
            // } // Text color based on background
            boxShadow={scrolling ? "lg" : "none"}
            transition="all 0.3s ease"
        >
            <Container
                maxW={{ base: "93%", md: "90%", xl: "85%", }}
                my={["1.5rem", "1.8rem"]}
                // px={0}
            >
                <Flex
                    flexDir={{ base: "column", md: "row" }}
                    rowGap={["0.8rem", "1rem"]}
                    justify={"space-between"}
                    align={"center"}
                >
                    <Heading fontSize={"1.6rem"} fontWeight={"700"}>
                        eduardomeza
                    </Heading>

                    <HStack spacing={["1rem", "2rem"]} >
                        <IconLink href={"https://github.com/mezacanul"}>
                            <FaGithub />
                        </IconLink>
                        <IconLink
                            href={
                                "https://www.linkedin.com/in/eduardo-meza-7b6a02194/"
                            }
                        >
                            <FaLinkedin />
                        </IconLink>
                        {/* <IconLink href={"https://www.instagram.com/eduardomzcn/"}>
                            <FaInstagram />
                        </IconLink> */}
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
