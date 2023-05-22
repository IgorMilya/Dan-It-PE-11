import crypto from "crypto";

const cryptoPassword = (data, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, data.length);
    password += data[randomIndex];
  }
  return password;
}

export default cryptoPassword