import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from "@react-native-material/core";
import { handleSignUp } from '../API/SignUpAPI';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpPress = async () => {
    await handleSignUp(firstName, surname, email, password, confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text variant="h5" style={{ textAlign: 'center', paddingBottom: 50 }}>Sign Up</Text>
      <TextInput variant="standard" color='#62D2A2' value={firstName} label="Name" style={{ margin: 25 }} onChangeText={setFirstName} />
      <TextInput variant="standard" color='#62D2A2' value={surname} label="Surname" style={{ margin: 25 }} onChangeText={setSurName} />
      <TextInput variant="standard" color='#62D2A2' value={email} label="E-mail" style={{ margin: 25 }} onChangeText={setEmail} />
      
      <View style={styles.passwordContainer}>
        <TextInput
          variant="standard"
          color='#62D2A2'
          value={password}
          secureTextEntry={!showPassword}
          label="Password"
          style={styles.passwordInput}
          onChangeText={setPassword}
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        />
      </View>
      
      <View style={styles.passwordContainer}>
        <TextInput
          variant="standard"
          color='#62D2A2'
          value={confirmPassword}
          secureTextEntry={!showPassword}
          label="Confirm Password"
          style={styles.passwordInput}
          onChangeText={setConfirmPassword}
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        />
      </View>
      
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});
