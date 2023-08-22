// cookieUtils.js
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
const cookie = new Cookies();




const TOKEN_KEY = "User_Authentication_And_Access";

const EXPIRATION_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

export const setJwtToken = (token) => {
  const expirationDate = new Date(Date.now() + EXPIRATION_TIME);
  cookie.set(TOKEN_KEY,token);

  // cookie.set(TOKEN_KEY, token, {
  //   expires: expirationDate,
  //   secure: true,
  //   sameSite: 'strict',
  //   httpOnly: true
  // });
  const decoded = jwt_decode(token);
  console.log("decoded",decoded);
};




export const getJwtToken = () => {
  return cookie.get(TOKEN_KEY);
};

export const removeJwtToken = () => {
  cookie.remove(TOKEN_KEY);
};
