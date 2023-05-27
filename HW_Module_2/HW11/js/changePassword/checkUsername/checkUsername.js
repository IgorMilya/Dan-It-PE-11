import resetPassword from "./resetPassword/resetPassword.js";

const checkUsername = (myStore, formWrapper, e, ) => {
  const usernameInput = document.querySelector('#username')

  e.preventDefault();
  const foundUsername = myStore.find(({username}) => username === usernameInput.value)
  if (foundUsername) {
    formWrapper.innerHTML = `
    <form class="password-form">
      
    <label class="input-wrapper">
      Reset the password
      <input class="password" type="text" name="password" id="password" required/>
    </label>
    
    <button type="submit" class="submit">Submit</button>
  </form>
    `

    const passwordForm = document.querySelector('.password-form')

    passwordForm.addEventListener('submit', async (e) => await resetPassword(myStore, foundUsername, e))

  } else {
    console.log('Incorrect username')
  }
}
export default checkUsername