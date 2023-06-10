import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async (setUserId) => {
  const userString = await AsyncStorage.getItem('user');
  const user = JSON.parse(userString);
  console.log(user); // Verifica o conteúdo do objeto user
  setUserId(user._id);
};
