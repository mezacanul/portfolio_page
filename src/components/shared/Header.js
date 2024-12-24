import { Box, Container, Flex, HStack, Heading } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import IconLink from "../common/IconLink"


export default function Header() {
    return (
        <Box position={"fixed"} left={0} top={0} w={"100%"} zIndex={10}>
            <Container maxW={{base: "93%", xl: "container.xl"}} my={"2.4rem"}>
                <Flex flexDir={{base: "column", md: "row"}} rowGap={"1rem"} justify={"space-between"} align={"center"}>
                    <Heading fontSize={"1.6rem"} fontWeight={"700"}>eduardomeza</Heading>

                    <HStack spacing={"2rem"} mr={{base: "0", xl:"2rem"}}>
                        <IconLink href={"https://github.com/mezacanul"}>
                            <FaGithub />
                        </IconLink>
                        <IconLink href={"https://www.linkedin.com/in/eduardo-meza-7b6a02194/"}>
                            <FaLinkedin />
                        </IconLink>
                        {/* <IconLink href={"https://www.instagram.com/eduardomzcn/"}>
                            <FaInstagram />
                        </IconLink> */}
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}