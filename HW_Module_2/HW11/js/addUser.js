import {hashPasswordWithSalt, generateSalt} from "../utils/hashPassword.utils.js";

const addUser = async (e, myStore) => {
  const username = document.querySelector('#username')
  const password = document.querySelector('.password')
  e.preventDefault();

  const myData = {}
  const formData = new FormData(e.target);

  for (const [key, value] of formData.entries()) myData[key] = value
  const salt = generateSalt();
  myData.password = await hashPasswordWithSalt(myData.password, salt)

  if (!myStore.length) {
    myStore.push(myData)
    username.value = ''
    password.value = ''
    console.log(myStore)
  } else {
    myStore.forEach(({username}) => {
      if (myData.username === username) {
        console.log('U have already had that username')
      } else {
        myStore.push(myData)
        console.log(myStore)
      }
    })
  }
}
export default addUser