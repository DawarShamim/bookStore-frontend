// AuthService.js
import AxiosInstance from './BaseService';

export async function loginService(payload){
  try {  
    const response = await AxiosInstance.post('api/Login', payload);
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    if (response.status === 200) {
      return response.data.result.token;
    }
  } catch (error) {
    throw new Error('Incorrect Email Address or Password');
  }
};

export async function SignupService(payload){
  try {  
    const response = await AxiosInstance.post('api/Login', payload);
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    if (response.status === 200) {
      return response.data.result.token;
    }
  } catch (error) {
    throw new Error('Incorrect Email Address or Password');
  }
};