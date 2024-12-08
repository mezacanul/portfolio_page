import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function LinkThemed({ children, bg, color, href }) {
    return (
        <>
            <ChakraLink
                as={NextLink}
                href={href}
                color={"white"}
                borderBottom={"2px"}
                borderColor={"green"}
                pb={"0.6rem"}
                fontWeight={700}
                letterSpacing={3}
                _hover={{
                    color: "green",
                }}
            >
                {children}
            </ChakraLink>
        </>
    );
}