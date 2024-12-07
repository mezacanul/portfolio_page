import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from 'framer-motion';
import '../../public/styles/global.css';
import theme from "../../public/styles/theme";
// import { Suspense, lazy } from "react";
// const Navbar = lazy(() => import("./components/Navbar"));
// import Navbar from "./components/Navbar";

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait" initial={true}>
        {/* <Navbar key={"navbar"} /> */}
        <main >
          <Component {...pageProps} key={router.route}/>
        </main>
      </AnimatePresence>
    </ChakraProvider>
  )
}