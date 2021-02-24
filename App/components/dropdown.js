import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const DropdownComponent = (props) => {

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={props.value}
        style={{ height: 50, width: 150 }}
        onValueChange={props.change}
      >
        <Picker.Item disabled value="None" label="None"/>
        {props.data.map(val => <Picker.Item label={val} key={val} value={val} />)}
      </Picker>
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