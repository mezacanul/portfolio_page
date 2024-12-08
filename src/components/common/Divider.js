import { Box } from "@chakra-ui/react"

export default function Divider({...props}) {
    return (
        <Box borderTop={"2px"} {...props}/>
    )
}