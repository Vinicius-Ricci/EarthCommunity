import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from "@react-native-material/core";
import { handleSignUp } from '../API/SignUpAPI';

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUpPress = async () => {
    await handleSignUp(firstName, surname, email, password, confirmPassword);  };

  return (
    <View style={styles.container}>
      <Text variant="h5" style={{ textAlign: 'center', paddingBottom: 50 }}>Sign Up</Text>
      <TextInput variant="standard" color='#62D2A2' value={firstName} label="Name" style={{ margin: 25 }} onChangeText={setFirstName} />
      <TextInput variant="standard" color='#62D2A2' value={surname} label="Surname" style={{ margin: 25 }} onChangeText={setSurName} />
      <TextInput variant="standard" color='#62D2A2' value={email} label="E-mail" style={{ margin: 25 }} onChangeText={setEmail} />
      <TextInput variant="standard" color='#62D2A2' value={password} label="Password" style={{ margin: 25 }} onChangeText={setPassword} />
      <TextInput variant="standard" color='#62D2A2' value={confirmPassword} label="Confirm Password" style={{ margin: 25 }} onChangeText={setConfirmPassword} />

      <Button title="Register" onPress={handleSignUpPress} color='#62D2A2' style={{ margin: 25 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    margin: 20,
    marginTop: 150
  },
});