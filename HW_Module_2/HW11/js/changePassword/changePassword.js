import checkUsername from "./checkUsername/checkUsername.js";

const changePassword = (myStore) => {
  let formWrapper = document.querySelector('.form-wrapper')

  if (!!myStore.length) {
    formWrapper.innerHTML = `
    <form class="username-form">
      
    <label class="input-wrapper-username">
      Enter the username
      <input id="username" type="text" name="username" required/>
    </label>
    
    <button type="submit" class="submit">Submit</button>
  </form>
    `

    const usernameForm = document.querySelector('.username-form')

    usernameForm.addEventListener('submit', (e) => checkUsername(myStore, formWrapper, e))
  }
}
export default changePassword