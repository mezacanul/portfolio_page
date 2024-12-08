import { Box, Container, HStack, Heading } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Header() {
    return (
        <Box position={"fixed"} left={0} top={0} w={"100%"} zIndex={10}>
            <Container maxW={"container.xl"} my={"2.4rem"}>
                <HStack justify={"space-between"} align={"center"}>
                    <Heading fontSize={"1.6rem"} fontWeight={"700"}>eduardomeza</Heading>

                    <HStack fontSize={"1.8rem"} spacing={"2rem"} mr={"2rem"}>
                        <FaGithub />
                        <FaLinkedin />
                        <FaInstagram />
                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}