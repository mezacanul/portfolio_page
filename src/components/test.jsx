import { VStack, Heading, Text } from "@chakra-ui/react"
import LinkThemed from "@/components/common/LinkThemed"
import InputThemed from "@/components/common/InputThemed"

export default function Test(){
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
            <LinkThemed href={"#"}>LINK SETTINGS</LinkThemed>
            <InputThemed placeholder="INPUT SETTINGS" />
        </VStack>
    )
}