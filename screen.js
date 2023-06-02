import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <text>This is Home Screen</text>      

      <Button title="Go To Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go To  Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View>
    <text>This is Login Screen</text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go To Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const SignupScreen = ({ navigation }) => {
  return (
    <View>
    <text>This is Signup screen</text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go To Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;