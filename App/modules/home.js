import React from 'react';
import {View,Text} from 'react-native';
import ButtonComponent from './../components/button';

const Home = ( {navigation}) => {
    const press = () => {
        console.log("Button Pressed");
        navigation.navigate('Form');
    }

    return(
        <View>
            <Text>Anime List</Text>
            <ButtonComponent press = {press}/>
        </View>
    )
}

export default Home;
