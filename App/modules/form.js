import React, { useState } from 'react';
import {View,Text} from 'react-native';
import InputComponent from './../components/input';
import ButtonComponent from './../components/button';
import DropdownComponent from './../components/dropdown';
import { useDispatch,useSelector } from "react-redux";
import { addData,editData } from './../actions/action';

const Form = ({route, navigation}) => {
    const sort = ["Comedy","Action","Thriller","Kids"];
    const dispatch = useDispatch();
    const routeData = route.params;
    const [name, changeName] = useState('');
    const [year, changeYear] = useState('');
    const [genre, changeGenre] = useState('');
    const [rating, changeRating] =  useState('');
    const [description, changeDescription] = useState('');
    const data = useSelector(state => state);

    const Click = () =>{
        let obj = {
            id    : routeData.id,
            name  : name,
            year  : year,
            genre  : genre,
            rating : rating,
            description : description
        }
        
        if (routeData.type == "EDIT") dispatch(editData(routeData.id, obj));
        else dispatch(addData(obj));
    
        navigation.navigate('Home');
    }

    React.useEffect(()=>{
        if (routeData.type == "EDIT") {
            data.post.map(post => {
                if (post.id == routeData.id) {
                    // Set Value
                    changeName(post.name);
                    changeYear(post.year);
                    changeGenre(post.genre);
                    changeRating(post.rating);
                    changeDescription(post.description);
                }
            })
        }
    },[])

    return(
        <View>
            <Text>{routeData.type} Data Form</Text>
            <Text>Name</Text>
            <InputComponent placeholder="Name" change={val => changeName(val)} value={name}/>
            <Text>Year</Text>
            <InputComponent placeholder="Year" change={val => changeYear(val)} value={year}/>
            <Text>Genre</Text>
            <DropdownComponent data={sort} change={(val)=>changeGenre(val)} value={genre}/>
            <Text>Rating</Text>
            <InputComponent placeholder="Rating" change={val => changeRating(val)} value={rating}/>
            <Text>Description</Text>
            <InputComponent placeholder="Description" change={val => changeDescription(val)} value={description}/>
            <ButtonComponent press={Click} title="submit"/>
        </View>
    )
}

export default Form;