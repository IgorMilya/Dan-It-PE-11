import {generateSalt, hashPasswordWithSalt} from "../../../../utils/hashPassword.utils.js";

const resetPassword = async (myStore, foundUsername, e) => {
  const newPassword = document.querySelector('#password')

  e.preventDefault();
  const newStore = myStore.map(async (item) => {
    if (item.username === foundUsername.username) {
      const salt = generateSalt();
      item.password = await hashPasswordWithSalt(newPassword.value, salt)
      return item
    } else {
      return item
    }
  })
  newPassword.value = ''

  const dataset = await Promise.all(newStore)

  myStore = [...dataset]
  console.log(myStore)
}
export default resetPassword
