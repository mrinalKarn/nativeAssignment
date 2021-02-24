import React from 'react';
import { View, Text } from 'react-native';
import UserData from './../components/userData';
import { paginationUser } from './../services/service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        paginationUser(page).then(val => {
            setData(val.data);
        });
    }, [])

    return (
        <View>
            <Text>Pagination User Data</Text>
            {data.map(data => <UserData data={data} key={data.id}/>)}
        </View>
    )
}

export default UserPage;