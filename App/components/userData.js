import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const UserData = (props) => {

    return (
        <View className="post-container" style={styles.container}>
            <Text style={{flexBasis:0.3*deviceWidth, paddingRight:5}}>{props.data.name}</Text>
            <Text style={{flexGrow:1}}>{props.data.email}</Text>
        </View>
    )
}

export default UserData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        background: 'red'
    }
})