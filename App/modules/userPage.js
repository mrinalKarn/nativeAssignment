import React from 'react';
import { View, Text,ScrollView,StyleSheet} from 'react-native';
import UserData from './../components/userData';
import { paginationUser } from './../services/service';
import { useEffect, useState } from 'react';
import ButtonComponent from '../components/button';
import {TableEmail,TableName,StyledText} from './../style/basicStyle';

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
        <ScrollView>
            <StyledText type="h1">Pagination User Data</StyledText>
            <View style={{flexDirection:'row'}}>
            <ButtonComponent press={decr} title="Prev" disable={prev} type="prev"/>
            <ButtonComponent press={incr} title="Next" disable={next} type="next"/>
            </View>
            <View style={styles.container}>
                <TableName type="large-bold">Name</TableName>
                <TableEmail type="large-bold">Email</TableEmail>
            </View>
            {data.map(data => <UserData data={data} key={data.id}/>)}
        </ScrollView>
    )
}

export default UserPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        background: 'red'
    }
})