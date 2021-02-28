import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import  styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    padding: 13px 38px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    position: relative;
    border: 2px solid transparent;
    border-radius: 8px;
    background: #ffffff;
    /* background: red; */
    background-clip: padding-box;
    /* color: #3acfd5; */
    outline: none;
    cursor: pointer;
    text-decoration: none;
`

const ButtonComponent = (props) => {
    return (
        <View>
        <Button
            onPress={props.press}
            disabled={props.disable}
        >
            <Text>{props.title}</Text>
        </Button>
        </View>
    )
}

export default ButtonComponent;