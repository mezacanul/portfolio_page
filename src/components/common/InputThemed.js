import { FormControl, Input, InputGroup, Text } from "@chakra-ui/react";
import { useState } from "react";

const InputCustom = ({ label = "", placeholder = "", ...props }) => {
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
                    fontWeight={600}
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
                    // borderColor="teal.500"
                    // focusBorderColor="teal.600"
                    // _hover={{ borderColor: "teal.400" }}
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
                    Sorry, invalid format here
                </Text>
            )}
        </FormControl>
    );
};

export default InputCustom;
