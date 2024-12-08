import { Link as ScrollLink } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react"

export default function ScrollLinkThemed({ children, href, duration = 1000 }) {
    return (
        <ChakraLink
            as={ScrollLink}
            to={href.replace("#", "")} // remove # from href
            smooth={true}
            duration={duration} // scroll duration in ms
            offset={-50} // offset for fixed headers
            // spy={true} // changes active state on scroll
            // activeClass="active"
            // cursor="pointer"  // Move cursor here
            color={"white"}
            
            borderBottom={"2px"}
            borderColor={"green"}
            pb={"0.6rem"}
            fontWeight={700}
            letterSpacing={3}

            _hover={{
                color: "green",
                cursor:"pointer"  // Move cursor here
            }}
        >
            {children}
        </ChakraLink>
    );
}
