// LoginWeb.js (for web)
import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import { useLoginLogic } from '../src/login';


const LoginWeb = () => {
  const { email, password, setEmail, setPassword, handleLogin } = useLoginLogic();

  return (
    <ImageBackground
      source={require('../assets/images/login.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Image source={require('../assets/images/login-logo.png')} style={styles.logoImage} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name/Member ID"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoImage: {
    width: 310,
    height: 145,
    marginBottom: 16,
    alignSelf: 'center',    
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '20%',
    //borderColor: 'gray',
    //borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    //borderRadius: 5,
    borderBottomWidth: 1, 
    borderBottomColor: '#ffffff', 
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: '41%',
  },
  rememberText: {
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
    width: '20%',
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#3b5998',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginWeb;
