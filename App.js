import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button} from 'react-native';
import Home from './App/modules/home';
import Form from './App/modules/form';
import User from './App/modules/user';
import UserPage from './App/modules/userPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './App/reducers/rootReducer';
import 'react-native-gesture-handler';
import { createStackNavigator, StackActions } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ThemeProvider } from 'styled-components/native';
import * as theme from './App/style/theme';

import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = "plus"
          }
          else if (route.name === 'User') {
            iconName = "list"
          }
          else if (route.name === 'UserPage') {
            iconName = "users"
          }
          return <FontAwesome5 name={iconName} size={22} color={focused ? '#000000' : 'gray'} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen name="Home" component={StackScreens} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="UserPage" component={UserPage} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [appTheme,changeTheme] = React.useState(theme.dark);
  const toggle = ( ) => {                         //Wow, theme changing very perfectly, great mkk
    if(appTheme==theme.light) changeTheme(theme.dark);
    else changeTheme(theme.light);
  }
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <Button title={appTheme==theme.light ? "Dark" : "Light"}onPress={toggle}/>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          <TabScreens />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
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
