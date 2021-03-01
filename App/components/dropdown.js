import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import {StyledPicker} from './../style/basicStyle';

const DropdownComponent = (props) => {

  return (

    <StyledPicker
      selectedValue={props.value}
      onValueChange={props.change}
      type = {props.type}
    >
      <Picker.Item disabled value="None" label="None" />
      {props.data.map(val => <Picker.Item label={val} key={val} value={val} />)}
    </StyledPicker>

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