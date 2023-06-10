import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleSignIn = async (email, password, navigation, setError) => {
  try {
    const response = await axios.post('https://earth-community-backend-dev.up.railway.app/api/auth/user/sign-in', {
      info: {
        email: email
      },
      security: {
        password: password,
      }
    });
    console.log(response.data); 
    const user = response.data.user;
    await AsyncStorage.setItem('user', JSON.stringify(user));
    navigation.navigate('Feed');
  } catch (error) {
    console.error(error);
    setError("E-mail e/ou senha incorretos");
  }
};
