import React from 'react';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import Splash from './src/Screens/Splash';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';
import ForgetPassword from './src/Screens/ForgetPassword';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home';


import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  axios.interceptors.request.use(
    async (config) => {
      let userData = await AsyncStorage.getItem('userData');
      let data = JSON.parse(userData);
      config.headers.authorization = data;
      return config;
    },
    (error) => Promise.reject(error),
  );


  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'} headerMode={'none'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
