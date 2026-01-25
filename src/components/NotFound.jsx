import { HStack, Heading } from "@chakra-ui/react";

export default function NotFound() {
    return (
        <HStack
            mt={"-11vh"}
            justify={"center"}
            align={"center"}
            h={"100vh"}
            w={"100%"}
        >
            <h1 style={{ fontSize: "1.5rem" }}>Page not found - 404</h1>
        </HStack>
    );
}
