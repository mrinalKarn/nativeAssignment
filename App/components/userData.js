import React from 'react';
import { View, Text } from 'react-native';
const UserData = (props) => {

    return (
        <View className="post-container">
           <Text>{props.data.name}</Text>
           <Text>{props.data.email}</Text>
        </View>
    )
}

export default UserData;