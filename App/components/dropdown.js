import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import styled from 'styled-components/native';

const StyledPicker = styled.Picker`
-webkit-writing-mode: horizontal-tb !important;
text-rendering: auto;
color: -internal-light-dark(black, white);
letter-spacing: normal;
word-spacing: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: start;
appearance: menulist;
box-sizing: border-box;
align-items: center;
white-space: pre;
-webkit-rtl-ordering: logical;
background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
cursor: default;
margin: 0em;
font: 400 13.3333px Arial;
border-radius: 0px;
border-width: 1px;
border-style: solid;
border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
border-image: initial;
`

const DropdownComponent = (props) => {

  return (
    <View>
      <StyledPicker
        selectedValue={props.value}
        style={{ height: 50, width: 150 }}
        onValueChange={props.change}
      >
        <Picker.Item disabled value="None" label="None"/>
        {props.data.map(val => <Picker.Item label={val} key={val} value={val} />)}
      </StyledPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default DropdownComponent;