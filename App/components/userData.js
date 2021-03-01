import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import {TableEmail,TableName} from './../style/basicStyle';

const deviceWidth = Dimensions.get('window').width;

const UserData = (props) => {

    return (
        <View style={styles.container}>
            <TableName>{props.data.name}</TableName>
            <TableEmail>{props.data.email}</TableEmail>
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