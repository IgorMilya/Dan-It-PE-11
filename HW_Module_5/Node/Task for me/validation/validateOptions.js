const validateOptions = (length, options) => {
  if (isNaN(length) || length < 1) {
    console.log('Invalid password length. Please enter a positive number.');
    return false;
  }

  const selectedOptions = Object.values(options);
  if (!selectedOptions.includes(true)) {
    console.log('Please select at least one type of character to include.');
    return false;
  }

  return true;
}

export default validateOptions