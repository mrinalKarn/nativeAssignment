import React from 'react';
import { View, Text } from 'react-native';
import { fetchUser } from './../services/service';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser} from './../actions/userAction';
import UserData from './../components/userData';
// Change map to list section and other types of section later
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
            <Text>User Details</Text>
            {dataStore.map(data => <UserData data={data} key={data.id}/>)}
        </View>
    )
}

export default User