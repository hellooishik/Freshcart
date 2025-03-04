import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../utils/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function ProfileScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login Successful');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Account Created Successfully');
    } catch (error) {
      Alert.alert('Signup Failed', error.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>

      {/* Login Form */}
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        secureTextEntry 
        onChangeText={setPassword} 
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} color="green" />
    </View>
  );
}
