import { Flex } from "@chakra-ui/react";

export default function FlexDimension({ children, zIndex, ...props }) {
    return (
        <Flex position={"absolute"} w={"container.xl"} px={"1rem"} h={"100%"} {...props} top={0} left={0}>
            {children}
        </Flex>
    );
}