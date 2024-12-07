import { Text, Box, Heading, VStack } from "@chakra-ui/react";
import Hero from "./Home/Hero";
import Link from "@/components/common/Link";
import Input from "@/components/common/Input";

export default function Index() {
    return (
        <VStack
            my={"2rem"}
            mx={"4rem"}
            height={"100vh"}
            p={5}
            spacing={4}
            align={"flex-start"}
            // w={"60%"}
            display={"inline-flex"}
        >
            <Heading fontSize={"xl"}>Heading settings (XL)</Heading>
            <Heading fontSize={"lg"}>Heading settings (L)</Heading>
            <Heading fontSize={"md"}>Heading settings (M)</Heading>
            <Text>Body settings(L)</Text>
            <Link href={"#"}>LINK SETTINGS</Link>
            <Input placeholder="INPUT SETTINGS" />
        </VStack>
    );
}
