import Test from "../components/test";
import Head from "next/head";
import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import { Box } from "@chakra-ui/react";

export default function Index() {
    return (
      <>
        <Head>
          <title>Eduardo Meza</title>
        </Head>

        <Box overflowX={"hidden"}>
          <Hero />
          <Skills />
          <Projects />
        </Box>
      </>
    )
}
