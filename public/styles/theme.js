// 1. Import `extendTheme` from Chakra UI
import { extendTheme, transition } from "@chakra-ui/react";

// 2. Define custom theme configurations
const theme = extendTheme({
    colors: {
        black: "#151515",
        dark: "#242424",
        green: "#4EE1A0",
        light: "#D9D9D9",
        white: "#FFFFFF",
        red: "#EE7763",
    },
    fonts: {
        heading: "Space Grotesk, sans-serif",
        body: "Space Grotesk, sans-serif",
    },
    fontSizes: {
        xl: "88px",
        lg: "48px",
        md: "24px",
    },
    components: {
        Input: {
            baseStyle: {
                field: {
                    fontSize: "18px",
                    color: "light",
                },
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white",
            },
            p: {
                fontSize: "20px",
            },
            a: {
                fontSize: "16px",
            },
            input: {
                fontSize: "16px",
            },
            svg: {
                transition: "0.3s all"
            },
            "svg:hover": {
                fill: "green",
                cursor: "pointer"
            }
            
        },
    },
});

export default theme;
