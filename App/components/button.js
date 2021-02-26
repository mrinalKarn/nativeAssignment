import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import  styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
background : rgb(33,151,243);
width : 50%
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