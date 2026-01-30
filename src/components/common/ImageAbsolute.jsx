import { Image } from "@chakra-ui/react";

export default function ImageAbsolute({
    location,
    zIndex = 0,
    height,
}) {
    return (
        <Image
            src="pattern-rings.svg"
            height={height}
            position={"absolute"}
            top={location.top}
            right={location.right}
            bottom={location.bottom}
            left={location.left}
            zIndex={zIndex}
            alt=""
        />
    );
}
