import { useRouter } from "next/router";
import {
    Box,
    Heading,
    HStack,
    Image,
    VStack,
    Text,
} from "@chakra-ui/react";

export default function ProjectPage() {
    const router = useRouter();
    const { project } = router.query; // "myproject", "client-portal", etc.

    return (
        <Box>
            <Hero />
            <Content />
        </Box>
    );
}

function Hero() {
    return (
        <HStack>
            <Image src={project.image} alt={project.name} />
            <VStack>
                <Heading>{project.name}</Heading>
                <Text>{project.description}</Text>
            </VStack>
        </HStack>
    );
}
