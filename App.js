import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginApp from './components/loginapp'; 
import LoginWeb from './components/loginweb'; 

export default function App() {
 
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      {isWeb ? <LoginWeb /> : <LoginApp />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
