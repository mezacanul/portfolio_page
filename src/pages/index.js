import Test from "./Test";
import Head from "next/head";
import Hero from "./Home/Hero"
import Skills from "./Home/Skills";
import Projects from "./Home/Projects";

export default function Index() {
    return (
      <>
        <Head>
          <title>Eduardo Meza</title>
        </Head>

        <Hero />
        <Skills />
        <Projects />
      </>
    )
}
