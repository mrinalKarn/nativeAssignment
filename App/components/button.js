import React from 'react';
import { Button ,StyleSheet,View} from 'react-native';

const ButtonComponent = (props) => {
   
    return (
        <View>
        <Button
            onPress={props.press}
            title="Add"
            accessibilityLabel="Learn more about how to add data through this button"
            style={styles.container}
        />
        </View>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({ // Not working ,see later with debugger tools
    container: {
      width: 50,
      marginLeft : 25,
      color : "red",
      marginRight : 25
    },
  });