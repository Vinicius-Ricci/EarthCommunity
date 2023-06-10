import axios from 'axios';

export async function handleSignUp(firstName, surname, email, password, confirmPassword) {
    try {
      const response = await axios.post('https://earth-community-backend-dev.up.railway.app/api/auth/user/sign-up', {
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
