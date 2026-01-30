import {
    Box,
    ChakraProvider,
    Heading,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "../../public/styles/global.css";
import theme from "../../public/styles/theme";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import { useEffect } from "react";
import { getCurrentRegion } from "@/utils/main";
import axios from "axios";
import {
    Provider,
    useDispatch,
    useSelector,
} from "react-redux";
import store from "@/app/store";
import { injectCMSData } from "@/features/cmsSlice";
import { setRegion } from "@/features/regionSlice";
import LoaderFullWidth from "@/components/common/LoaderFullWidth";

const titles = {
    "/": "Home",
    "/projects/[project]": "Project",
};

export default function App({
    Component,
    pageProps,
    router,
}) {
    const pathname = router.pathname;

    return (
        <>
            <Head>
                <title>{`Eduardo Meza - ${titles[pathname]}`}</title>
            </Head>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode="wait" initial={true}>
                    <Provider store={store}>
                        <Main
                            Component={Component}
                            pageProps={pageProps}
                            router={router}
                        />
                    </Provider>
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}

function Main({ Component, pageProps, router }) {
    const dispatch = useDispatch();
    const cmsData = useSelector((state) => state.cms);

    useEffect(() => {
        const currentRegion = getCurrentRegion(navigator);
        dispatch(setRegion(currentRegion));
        axios
            .get(`/api/cms?region=${currentRegion}`)
            .then((response) => {
                setTimeout(() => {
                    dispatch(injectCMSData(response.data));
                    console.log(response.data);
                }, 1000);
            });
    }, []);

    useEffect(() => {
        console.log(cmsData);
    }, [cmsData]);

    // return <LoaderFullWidth />;
    if (!cmsData) {
        return <LoaderFullWidth />;
    }

    return (
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
    );
}
