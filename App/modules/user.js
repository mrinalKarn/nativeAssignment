import React from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import { fetchUser } from './../services/service';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser} from './../actions/userAction';
import UserData from './../components/userData';
import {StyledText} from './../style/basicStyle';
import {TableEmail,TableName} from './../style/basicStyle';
// Change map to list section and other types of section later

const deviceWidth = Dimensions.get('window').width;

const User = () => {
    const dispatch = useDispatch();
    const dataStore = useSelector(state => state.user);

    useEffect(() => {
        if (dataStore.length == 0) {
            fetchUser().then(val => {
                dispatch(addUser(val));
            });
        }
    }, [])

    return (
        <View>
            <StyledText type="h1">User Details</StyledText>
            <View style={styles.container}>
                <TableName type="large-bold">Name</TableName>
                <TableEmail type="large-bold">Email</TableEmail>
            </View>
            {dataStore.map(data => <UserData data={data} key={data.id}/>)}
        </View>
    )
}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        background: 'red'
    }
})