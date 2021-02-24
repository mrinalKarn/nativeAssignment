import React from 'react';
import { View, Text } from 'react-native';
import UserData from './../components/userData';
import { paginationUser } from './../services/service';
import { useEffect, useState } from 'react';
import ButtonComponent from '../components/button';

const UserPage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [prev,disPrev] = useState(false);
    const [next,disNext] = useState(false);

    useEffect(() => {
        paginationUser(page).then(val => setData(val.data));
        // Next Prev Logic
        //Next, Prev logic
        if(page == 70) {disNext(true) ;disPrev(false)}
        else if(page == 1)  {disPrev(true);disNext(false);}
        else {disNext(false);disPrev(false);}
    }, [page])

    const incr = () => {
        setPage(page => {
            //console.log("old",page);
            let p = ++page;
            //console.log("cureent",p);
            return p;
        });
    }

    const decr = () => {
        setPage(page-1);
    }

    return (
        <View>
            <Text>Pagination User Data</Text>
            <ButtonComponent press={decr} title="Prev" disable={prev}/>
            <ButtonComponent press={incr} title="Next" disable={next}/>
            {data.map(data => <UserData data={data} key={data.id}/>)}
        </View>
    )
}

export default UserPage;