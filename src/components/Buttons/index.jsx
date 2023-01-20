import React from "react";
import { Button, ButtonContent } from "./styled";
import { Text } from 'react-native';

const ButtonComponent = ({ handlePress, children }) =>
    <Button activeOpacity={0.95} onPress={handlePress}>
        <Text>
            <ButtonContent>{children}</ButtonContent>
        </Text>
    </Button>

export default ButtonComponent