import axios from 'axios';

async function AuthAPI(body) {
  try {
    let res = axios.post('http://challenge-react.alkemy.org/', {
      email: body.email,
      password: body.password
    });
    return res;
  }
  catch(err) {
    throw new Error(err);
  }
}

export default AuthAPI;