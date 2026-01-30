import {
    HStack,
    Spinner,
    Box,
    Text,
    VStack,
} from "@chakra-ui/react";

export default function LoaderFullWidth() {
    return (
        <HStack
            justify={"center"}
            align={"center"}
            h={"100vh"}
            w={"100%"}
        >
            <VStack spacing={"2rem"}>
                <Box transform={"scale(1.4)"}>
                    <Spinner color={"green"} size={"xl"} />
                </Box>
                {/* <Text textAlign={"center"} fontSize={"sm"}>
                    {"Loading..."}
                </Text> */}
            </VStack>
        </HStack>
    );
}
