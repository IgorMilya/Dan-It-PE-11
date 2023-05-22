import cryptoPassword from './generatePassword.utils.js'

const generatePassword = (length, options, restriction) => {
  const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯĄČĘĖĮŠŲŪŽ';
  const LowerCase = 'abcdefghijklmnopqrstuvwxyzабвгґдеєжзиіїйклмнопрстуфхцчшщьюяąčęėįšųūž';

  const objRestriction = {}

  !!restriction && restriction.split('').forEach(key => {
    objRestriction[key] = key;
  })

  const characters = {
    uppercase: UpperCase,
    lowercase: LowerCase,
    numbers: '0123456789',
    specialChars: '!@#$%^&*()_-+=|?/.,`~;:><{}[]¬£'
  };

  let selectedCharacters = '';
  Object.keys(options).forEach(el => options[el] && (selectedCharacters += characters[el]))

  if (!!restriction) {
    const midifyedData = selectedCharacters.split('').filter(item => item !== objRestriction[item])
    return cryptoPassword(midifyedData, length)
  }else {
    return cryptoPassword(selectedCharacters, length)
  }
}

export default generatePassword