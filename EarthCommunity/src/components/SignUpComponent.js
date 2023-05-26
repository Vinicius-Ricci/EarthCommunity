import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from "@react-native-material/core";
import axios from 'axios';

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSignUp() {
    try {
      const response = await axios.post('https://earth-community-backend-production.up.railway.app/api/auth/user/sign-up', {
        info: {
          firstName: firstName,
          surname: surname,
          email: email
        },
        security: {
          authWith: "manually",
          password: password,
          confirmPassword: confirmPassword,
        }
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="h5" style={{ textAlign: 'center', paddingBottom: 50 }}>Sign Up</Text>
      <TextInput variant="standard" color='#62D2A2' label="Name" style={{ margin: 25 }} onChangeText={setFirstName} />
      <TextInput variant="standard" color='#62D2A2' label="Surname" style={{ margin: 25 }} onChangeText={setSurName} />
      <TextInput variant="standard" color='#62D2A2' label="E-mail" style={{ margin: 25 }} onChangeText={setEmail} />
      <TextInput variant="standard" color='#62D2A2' label="Password" style={{ margin: 25 }} onChangeText={setPassword} />
      <TextInput variant="standard" color='#62D2A2' label="Confirm Password" style={{ margin: 25 }} onChangeText={setConfirmPassword} />

      <Button title="Register" onPress={handleSignUp} color='#62D2A2' style={{ margin: 25 }} />
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