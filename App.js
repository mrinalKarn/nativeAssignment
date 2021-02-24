import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Home from './App/modules/home';
import Form from './App/modules/form';
import User from './App/modules/user';
import UserPage from './App/modules/userPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './App/reducers/rootReducer';
import 'react-native-gesture-handler';
import {createStackNavigator, StackActions} from '@react-navigation/stack';

import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const StackScreens = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
   
  );
};


const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackScreens} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="UserPage" component={UserPage} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <TabScreens />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
