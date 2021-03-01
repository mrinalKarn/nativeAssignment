import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import {StyledButton} from './../style/basicStyle';

const ButtonComponent = (props) => {
    return (
        
        <StyledButton
            onPress={props.press}
            disabled={props.disable}
            type={props.type}
        >
            <Text>{props.title}</Text>
        </StyledButton>
    )
}

export default ButtonComponent;