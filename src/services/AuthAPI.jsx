import axios from 'axios';

async function AuthAPI(body) {
  try {
    let res = await axios.post(process.env.REACT_APP_AUTH_API, {
      email: body.email,
      password: body.password
    });
    if (res.status !== 200) {
      throw new Error('Invalid credentials.');
    }
    return res.data.token;
  }
  catch(err) {
    throw new Error('Invalid credentials.');
  }
}

export default AuthAPI;