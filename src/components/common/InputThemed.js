import { FormControl, Input, InputGroup, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const InputThemed = ({ label = "", placeholder = "", errorMessage, ...props }) => {
    const [isInvalid, setIsInvalid] = useState(false);

    return (
        <FormControl isInvalid={isInvalid} w={"100%"}>
            <InputGroup w={"100%"}>
                <Input
                    aria-labelledby={label}
                    placeholder={placeholder}
                    _placeholder={{ color: "light", opacity: 0.7 }} // Set the placeholder color
                    border={"0"}
                    borderBottom={"2px"}
                    borderRadius={0}
                    fontWeight={500}
                    width={"100%"}
                    color={"white"}
                    pl={"1rem"}
                    pb={"0.6rem"}
                    _focusVisible={{
                        outline: "none",
                        borderColor: "green",
                    }}
                    _invalid={{
                        borderColor: "red",
                    }}
                    {...props} // Pass additional props (e.g., type, size)
                />
            </InputGroup>
            { isInvalid && (
                <Text
                    color={"red"}
                    fontSize={"1rem"}
                    fontWeight={600}
                    textAlign={"right"}
                    mt={3}
                >
                    {errorMessage}
                </Text>
            )}
        </FormControl>
    );
}

function TextAreaThemed({ label = "", placeholder = "", errorMessage, ...props }) {
    const [isInvalid, setIsInvalid] = useState(false);

    return (
        <FormControl isInvalid={isInvalid} w={"100%"}>
            <InputGroup w={"100%"}>
                <Textarea
                    height= "8.5rem"
                    fontSize= "18px"
                    aria-labelledby={label}
                    placeholder={placeholder}
                    resize={"none"}
                    _placeholder={{ 
                        color: "light", 
                        opacity: 0.7,
                    }} // Set the placeholder color
                    border={"0"}
                    borderBottom={"2px"}
                    borderRadius={0}
                    fontWeight={500}
                    width={"100%"}
                    pl={"1rem"}
                    pb={"0.6rem"}
                    _focusVisible={{
                        outline: "none",
                        borderColor: "green",
                    }}
                    _invalid={{
                        borderColor: "red",
                    }}
                    {...props} // Pass additional props (e.g., type, size)
                />
            </InputGroup>
            { isInvalid && (
                <Text
                    color={"red"}
                    fontSize={"1rem"}
                    fontWeight={600}
                    textAlign={"right"}
                    mt={3}
                >
                    {errorMessage}
                </Text>
            )}
        </FormControl>
    )
}

export default InputThemed;
export { TextAreaThemed }
