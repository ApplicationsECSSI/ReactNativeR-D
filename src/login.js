
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


export const useLoginLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      if (Platform.OS === 'web') {
        window.alert('Error: Please fill in all fields');
      } else {
        Alert.alert('Error', 'Please fill in all fields');
      }
      return;
    }
  
    if (Platform.OS === 'web') {
      window.alert('Success: Logged in!');
    } else {
      Alert.alert('Success', 'Logged in!');
    }
    
    navigation.navigate('DashBoard'); 
 
  };
  
  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
};


