import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ButtonComponent from './../components/button';
import InputComponent from './../components/input';
import DropdownComponent from './../components/dropdown';
import { useSelector } from 'react-redux';
import Post from './../components/post';
var uniqid = require('uniqid');

const Home = ({ navigation }) => {
    const [input, onChangeInput] = React.useState('');
    const [selectedValue, setSelectedValue] = useState();
    const dataStore = useSelector(state => state.post);

    const dropdownChange = (itemValue) => {
        //console.log(itemValue);
        setSelectedValue(itemValue);
    }

    const press = () => {
        //console.log("Button Pressed");
        navigation.navigate('Form',{type: "ADD", id : uniqid()});
    }

    const inputChange = (val) => {
        //console.log(val);
        onChangeInput(val);
    }

    const sort = ["Name", "Year", "Rating"]

    return (
        <ScrollView>
        <View>
            <Text>Anime List</Text>
            <InputComponent placeholder={"Search Anime Here"} change={inputChange} value={input} />
            <Text>Sort</Text>
            <DropdownComponent data={sort} change={dropdownChange} value={selectedValue}/>
            <ButtonComponent press={press} title="Add data" disable={false}/>
            <Text>Anime List Goes Here....</Text>
            {dataStore.map(post => <Post key={post.id} post={post} navigation={navigation}/>)}
        </View>
          </ScrollView>
    )
}

export default Home;