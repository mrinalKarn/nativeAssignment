import React from 'react';
import { useDispatch } from "react-redux";
import { deleteData } from "./../actions/action";
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './button';

const Post = (props) => {
    const dispatch = useDispatch();

    const editPost = () => {
        props.navigation.navigate('Form',{type: "EDIT", id : props.post.id});
    }

    const deletePost = () =>{
        dispatch(deleteData(props.post.id));
    }

    return (
        <View>
            <Text>{props.post.id}</Text>
            <Text>{props.post.name}</Text>
            <Text>{props.post.genre}</Text>
            <Text>{props.post.year}</Text>
            <Text>{props.post.description}</Text>
            <Text>{props.post.rating}</Text>
            <ButtonComponent press={editPost} title="edit" disable={false}/>
            <ButtonComponent press={deletePost} title="delete" disable={false}/>
        </View>
    )
}

export default Post;