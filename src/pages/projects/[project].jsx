import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";

export default function ProjectPage() {
    const router = useRouter();
    const { project } = router.query; // "myproject", "client-portal", etc.

    return (
        <Box>
            <Heading>Project: {project}</Heading>
            {/* your page content */}
        </Box>
    );
}
