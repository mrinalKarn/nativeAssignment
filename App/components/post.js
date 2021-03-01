import React from 'react';
import { useDispatch } from "react-redux";
import { deleteData } from "./../actions/action";
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './button';
import {StyledText} from './../style/basicStyle';

const Post = (props) => {
    const dispatch = useDispatch();

    const editPost = () => {
        props.navigation.navigate('Form',{type: "EDIT", id : props.post.id});
    }

    const deletePost = () =>{
        dispatch(deleteData(props.post.id));
    }

    return (
        <View style={{margin:4,padding:4,borderWidth:1, borderColor:'black',backgroundColor:'#e1e2e1' }}>
            <StyledText type="large-bold">{props.post.name}</StyledText>
            <StyledText type="italic">{props.post.genre}</StyledText>
            <StyledText type="small">{props.post.year}</StyledText>
            <StyledText>{props.post.description}</StyledText>
            <StyledText type="italic">{props.post.rating}</StyledText>
            <View style={{flexDirection:'row'}}>
            <ButtonComponent press={editPost} title="edit" disable={false} type="edit"/>
            <ButtonComponent press={deletePost} title="delete" disable={false} type="delete"/>
            </View>
        </View>
    )
}

export default Post;