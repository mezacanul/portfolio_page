import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function IconLink({children, href}){
    return (
        <ChakraLink
            as={Link}
            fontSize={"1.8rem"}
            href={href} 
            target="_blank"
            _hover={{
                cursor:"pointer"  // Move cursor here
            }}
        >
            {children}
        </ChakraLink> 
    )
}