import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ButtonComponent from './../components/button';
import InputComponent from './../components/input';
import DropdownComponent from './../components/dropdown';
import { useSelector } from 'react-redux';
import Post from './../components/post';
import {StyledText} from './../style/basicStyle';

var uniqid = require('uniqid');

const Home = ({ navigation }) => {
    const [input, onChangeInput] = React.useState('');
    const [selectedValue, setSelectedValue] = useState();
    const dataStore = useSelector(state => state.post);
    const [data, setData] = useState(dataStore);

    const press = () => {
        //console.log("Button Pressed");
        navigation.navigate('Form', { type: "ADD", id: uniqid() });
    }

    const sortLogic = () => {

        switch (selectedValue) {
            case "Name":
                setData([...data].sort((a, b) => ('' + a.name.toLocaleLowerCase()).localeCompare(b.name.toLocaleLowerCase())));
                break;
            case "Year":
                setData([...data].sort((a, b) => parseInt(a.year) - parseInt(b.year)));
                break;
            case "Rating":
                setData([...data].sort((a, b) => parseInt(a.rating) - parseInt(b.rating)));
                break;
            default:
                break;
        }

    }

    function isContains(word, key) {

        if (key.length > word.length) return false;
        for (let i = 0; i < word.length; i++) {
            let mismatch = false;
            for (let j = 0; j < key.length && !mismatch; j++) {
                if (word.charAt(i + j) !== key.charAt(j))
                    mismatch = true;
            }
            if (!mismatch) return true;
        }
        return false;
    }

    // working Search logic
    // Not good working logic, just fine, giving anonymus data many time - see later
    // Integrating with logic ,but core logic not working

    //Add a custom search logic
    const searchLogic = () => {
        setData([...dataStore].filter((item) => {
            return isContains(item.name.toLowerCase(), input.toLowerCase());
        }));
    }


    const sortMethod = ["Name", "Year", "Rating"]

    useEffect(() => {
        setData(dataStore) //Changing data on changing on datastore, missed this point so delete not working previously
    }, [dataStore])

    useEffect(() => {
        sortLogic(); //Working sort logic
    }, [selectedValue])

    useEffect(() => {
        searchLogic(); //Working logic, but not perfect
    }, [input]) 

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center'}}>
                <StyledText type="h1">Anime List</StyledText>
                <InputComponent placeholder={"Search Anime Here"} change={(val) => onChangeInput(val)} value={input} type="search"/>
                <DropdownComponent data={sortMethod} change={(itemValue) => setSelectedValue(itemValue)} value={selectedValue} type="add"/>
                <ButtonComponent press={press} title="Add" disable={false} type="add"/>
                {data.map(post => <Post key={post.id} post={post} navigation={navigation} />)}
            </View>
        </ScrollView>
    )
}

export default Home;