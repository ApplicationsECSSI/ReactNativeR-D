
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';

export const useLoginLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };
  
  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
};


