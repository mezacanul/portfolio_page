import { HStack, Container, Heading, VStack, Box, Text, Input, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Divider from "../common/Divider";
import InputThemed, { TextAreaThemed } from "../common/InputThemed";
import LinkThemed from "../common/LinkThemed";
import IconLink from "../common/IconLink";

export default function Footer() {
    return (
        <Box bg={"dark"} w={"100%"} py={"5rem"} position={"relative"} id="footer">
            <Image
                src="pattern-rings.svg"
                height={"11rem"}
                position={"absolute"}
                bottom={"14rem"}
                left={"-20rem"}
                alt=""
            />
            <Container maxW={"container.xl"}>
                <Content />
                <Divider mt={"6rem"} mb={"3rem"}/>
                <Navigation/>
            </Container>
        </Box>
    )
}

function Content() {
    return (
        <HStack justify={"space-between"} align={"flex-start"}>
            <VStack align={"flex-start"} w={"40%"}>
                <Heading fontSize={"xl"}>Contact</Heading>
                <Text>{"I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible."}</Text>
            </VStack>

            <VStack w={"45%"} spacing={"2.5rem"} align={"flex-end"}>
                <InputThemed placeholder="NAME" errorMessage={"This field is required"}/>
                <InputThemed placeholder="EMAIL" errorMessage={"Invalid format here"}/>
                {/* <InputThemed placeholder="MESSAGE"/> */}
                <TextAreaThemed placeholder="MESSAGE" errorMessage={"This field is required"}/>
                <LinkThemed href={"#"}>SEND MESSAGE</LinkThemed>
            </VStack>
        </HStack>
    )
}

function Navigation() {
    return (
        <HStack justify={"space-between"} align={"center"}>
            <Heading fontSize={"1.6rem"} fontWeight={"700"}>eduardomeza</Heading>

            <HStack fontSize={"1.8rem"} spacing={"2rem"}>
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
        </HStack>
    )
}