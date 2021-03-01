import React from 'react';
import { TextInput } from 'react-native';
import {Input} from './../style/basicStyle';

const InputComponent = (props) => {

  return (
    <Input
      type = {props.type}
      onChangeText={props.change}
      value={props.value}
      placeholder = {props.placeholder}
      
    />
  );
}

export default InputComponent;
