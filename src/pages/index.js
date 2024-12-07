import { Text, Box, Heading, VStack } from "@chakra-ui/react";
import Hero from "./Home/Hero";
// import Link from "@/components/common/Link";
import InputThemed from "@/components/common/InputThemed";
import Head from "next/head";
import LinkThemed from "@/components/common/LinkThemed";

export default function Index() {
    return (
      <>
        <Head>
          <title>Eduardo Meza</title>
        </Head>

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
            <Hero />
            <Heading fontSize={"xl"}>Heading settings (XL)</Heading>
            <Heading fontSize={"lg"}>Heading settings (L)</Heading>
            <Heading fontSize={"md"}>Heading settings (M)</Heading>
            <Text>Body settings(L)</Text>
            <LinkThemed href={"#"}>LINK SETTINGS</LinkThemed>
            <InputThemed placeholder="INPUT SETTINGS" />
        </VStack>
      </>
    );
}
