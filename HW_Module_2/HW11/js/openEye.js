const openEye = () => {
  let password = document.querySelector('.password')
  let icon = document.querySelector('#icon')

  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-eye')) {
      icon.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
      icon.classList.replace('fa-eye-slash', 'fa-eye')
    }
    if (icon.className.includes('fa-eye-slash')) {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  });
};
export default openEye