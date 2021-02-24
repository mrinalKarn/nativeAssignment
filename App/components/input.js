import React from 'react';
import { TextInput } from 'react-native';

const InputComponent = (props) => {

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={props.change}
      value={props.value}
      placeholder = {props.placeholder}
      
    />
  );
}

export default InputComponent;
