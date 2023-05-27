import openEye from "./openEye.js";
import addUser from "./addUser.js";
import changePassword from "./changePassword/changePassword.js";

const form = document.querySelector('.password-form')
const changePasswordText = document.querySelector('.change-password')
let myStore = []

openEye()

form.addEventListener('submit', async (e) => await addUser(e, myStore))
changePasswordText.addEventListener('click', () => changePassword(myStore))

