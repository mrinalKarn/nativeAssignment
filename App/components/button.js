import React from 'react';
import { Button,View} from 'react-native';

const ButtonComponent = (props) => {
   
    return (
        <View>
        <Button
            onPress={props.press}
            title={props.title}
            accessibilityLabel="Learn more about how to add data through this button"
            style={{ height: 50, width: 150 }}
            disabled={props.disable}
        />
        </View>
    )
}

export default ButtonComponent;