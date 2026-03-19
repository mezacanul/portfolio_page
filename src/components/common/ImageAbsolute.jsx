import { Circle, Image } from "@chakra-ui/react";

export default function ImageAbsolute({
    type,
    location,
    zIndex = 0,
    height,
}) {
    if (type === "lines") {
        return (
            <Image
                src={"pattern-rings.svg"}
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
    if (type === "circle") {
        return (
            <Circle
                size={height}
                borderWidth={3}
                opacity={0.4}
                borderColor={"white"}
                position={"absolute"}
                top={location.top}
                right={location.right}
                bottom={location.bottom}
                left={location.left}
                zIndex={zIndex}
            />
        );
    }
}
