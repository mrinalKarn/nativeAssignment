// Writing CSS is useless and total time waste, do this if very very important

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const Input = styled.TextInput`
width : 50%;
border: 1px solid black;
border-radius: 5px;
width : 50%;
padding : 12px;
text-align : center;
margin-top :4px;
${props => {
        switch (props.type) {
            case "name":
                return "border : 1px solid red";
            case "year":
                return "border : 1px solid blue";
            case "rating":
                return "border : 1px solid green";
            case "description":
                return "border : 1px solid black";
            case "search":
                return "border : 1px solid blue";
            default:
                return "border :1px solid black";
        }
    }}
`
//name,year,rating,descr, search
export const StyledText = styled.Text`
margin-top :4px;
${props => {
        switch (props.type) {
            case "h1":
                return "font-size : 24px;margin :8px;text-align:center";
            case "large-bold":
                return "font-weight: bold; font-size: 16px";
            case "italic":
                return "font-style : italic;";
            case "small":
                return "font-size : 12px;";
            default:
                return "font-size : normal;";
        }
    }}
`

export const TableName = styled(StyledText)`
flex-basis:${0.3 * deviceWidth};
padding : 4px;
margin : 4px;
`
export const TableEmail = styled(StyledText)`
flex-grow : 1;
`

export const StyledButton = styled.TouchableOpacity`
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    padding: 8px 15px 8px 15px;
    position: relative;
    border: 2px solid transparent;
    border-radius: 8px;
    background: #ffffff;
    /* background: red; */
    background-clip: padding-box;
    /* color: #3acfd5; */
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin : 4px;
    ${props => {
        switch (props.type) {
            case "add":
                return "border : 1px solid blue;";
            case "edit":
                return "border : 1px solid green;";
            case "delete":
                return "border : 1px solid red;";
            case "submit":
                return "border : 1px solid blue;";
            case "prev":
                return "border : 1px solid blue;";
            case "next":
                return "border : 1px solid blue;";
            default:
                return;
        }
    }}
`

export const StyledPicker = styled.Picker`
align-items: center;
white-space: pre;
border-radius: 5px;
border-width: 1px;
border-style: solid;
font-size: 16px;
padding: 10px;
background: white;
border: 1px solid black;
width: 28%;
margin-top : 4px;
${props => {
        switch (props.type) {
            case "sort":
                return "border : 1px solid blue;";
            case "add":
                return "border : 1px solid green;";
            default:
                return;
        }
    }}
`