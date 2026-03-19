import {
    HStack,
    Container,
    Heading,
    VStack,
    Box,
    Text,
    Input,
    Image,
    Flex,
} from "@chakra-ui/react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import Divider from "../common/Divider";
import InputThemed, {
    TextAreaThemed,
} from "../common/InputThemed";
import LinkThemed from "../common/LinkThemed";
import IconLink from "../common/IconLink";
import { useSelector } from "react-redux";

export default function Footer() {
    const footerData = useSelector(
        (state) => state.cms.footer
    );

    return (
        <Box
            bg={"dark"}
            w={"100%"}
            py={"5rem"}
            position={"relative"}
            id="footer"
        >
            <Image
                src="pattern-rings.svg"
                height={"11rem"}
                position={"absolute"}
                bottom={"14rem"}
                left={"-20rem"}
                alt=""
            />
            <Container maxW={{ base: "90%", xl: "85%" }}>
                <Content cms={footerData} />
                <Divider mt={"6rem"} mb={"3rem"} />
                <Navigation />
            </Container>
        </Box>
    );
}

function Content({ cms }) {
    return (
        <Flex
            flexDir={["column", "row"]}
            justify={"space-between"}
            align={"flex-start"}
        >
            <VStack
                mb={["4rem", "0rem"]}
                align={["center", "flex-start"]}
                w={["100%", "40%"]}
            >
                <Heading
                    fontSize={{
                        base: "lg",
                        md: "4rem",
                        lg: "xl",
                    }}
                >
                    {cms.title}
                </Heading>
                <Text textAlign={["center", "left"]}>
                    {cms.description}
                </Text>
            </VStack>

            <VStack
                w={["100%", "45%"]}
                spacing={"2.5rem"}
                align={"flex-end"}
            >
                <InputThemed
                    placeholder={cms.inputs.name}
                    // errorMessage={"This field is required"}
                />
                <InputThemed
                    placeholder={cms.inputs.email}
                    // errorMessage={"Invalid format here"}
                />
                {/* <InputThemed placeholder="MESSAGE"/> */}
                <TextAreaThemed
                    placeholder={cms.inputs.message}
                    // errorMessage={"This field is required"}
                />
                <LinkThemed href={"#"}>
                    {cms.button}
                </LinkThemed>
            </VStack>
        </Flex>
    );
}

function Navigation() {
    return (
        <Flex
            flexDir={["column", "row"]}
            justify={"space-between"}
            align={"center"}
        >
            <Heading
                mb={["2rem", 0]}
                fontSize={"1.6rem"}
                fontWeight={"700"}
            >
                eduardomeza
            </Heading>

            <HStack fontSize={"1.8rem"} spacing={"2rem"}>
                <IconLink
                    href={"https://github.com/mezacanul"}
                >
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
    );
}
