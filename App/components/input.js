import React from 'react';
import { TextInput } from 'react-native';
import {Input} from './../style/basicStyle';

const InputComponent = (props) => {

  return (
    <Input
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={props.change}
      value={props.value}
      placeholder = {props.placeholder}
      
    />
  );
}

export default InputComponent;
