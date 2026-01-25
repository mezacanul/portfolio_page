import { Box, ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "../../public/styles/global.css";
import theme from "../../public/styles/theme";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
// import { Suspense, lazy } from "react";
// const Navbar = lazy(() => import("./components/Navbar"));
// import Navbar from "./components/Navbar";

const titles = {
    "/": "Home",
    "/projects/[project]": "Project",
};

export default function App({
    Component,
    pageProps,
    router,
}) {
    // const router = useRouter();
    console.log(router.pathname);
    const pathname = router.pathname;
    return (
        <>
            <Head>
                <title>{`Eduardo Meza - ${titles[pathname]}`}</title>
            </Head>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode="wait" initial={true}>
                    {/* <Navbar key={"navbar"} /> */}
                    <main style={{ position: "relative" }}>
                        <Header />
                        <Box
                            minH={"100vh"}
                            w={"100%"}
                            mt={"11vh"}
                            maxW={{
                                base: "90%",
                                md: "90%",
                                xl: "85%",
                            }}
                            mx={"auto"}
                        >
                            <Component
                                {...pageProps}
                                key={router.route}
                            />
                        </Box>
                        <Footer />
                    </main>
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}
