import React from 'react';
import { TextInput } from 'react-native';

const Input = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "input"
    />
  );
}

export default Input;
