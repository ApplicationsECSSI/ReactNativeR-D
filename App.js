import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginApp from './components/loginapp'; 
import LoginWeb from './components/loginweb'; 
import WebDashBoard from './components/Webdashboard'; 
import AppDashBoard from './components/Appdashboard'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const isWeb = Platform.OS === 'web';

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={isWeb ? LoginWeb : LoginApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DashBoard"
          component={isWeb ? WebDashBoard : AppDashBoard}
          options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
