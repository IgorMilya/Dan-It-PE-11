import {rl} from '../main.js'
import validateOptions from "../validation/validateOptions.js";
import generatePassword from "../generate-password/generatePassword.js";
import saveFile from "./generatorPasswordPanel.utils"

const generatorPasswordPanel = async () => {
  const question = (prompt) => {
    return new Promise(resolve => {
      rl.question(prompt, answer => {
        resolve(answer);
      });
    });
  };

  const length = await question('Enter the length of the password: ');
  const options = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true
  };

  const includeUppercase = await question('Include uppercase letters? (Y/N): ');
  options.uppercase = includeUppercase.toUpperCase() === 'Y';

  const includeLowercase = await question('Include lowercase letters? (Y/N): ');
  options.lowercase = includeLowercase.toUpperCase() === 'Y';

  const includeNumbers = await question('Include numbers? (Y/N): ');
  options.numbers = includeNumbers.toUpperCase() === 'Y';

  const includeSpecialChars = await question('Include special characters? (Y/N): ');
  options.specialChars = includeSpecialChars.toUpperCase() === 'Y';

  const includeRestrictionSymbols = await question('Do u wanna restrict some symbols? (Y/N)');

  if (includeRestrictionSymbols === 'Y') {
    const restrictionSymbols = await question('Provide them... \n');
    if (validateOptions(length, options)) {
      const password = generatePassword(length, options, restrictionSymbols.replace(/\s/g, ''));
      await saveFile(password)
      console.log('Generated password:', password);
    }

  } else {

    if (validateOptions(length, options)) {
      const password = generatePassword(length, options);
      await saveFile(password)
      console.log('Generated password:', password);
    }
  }
  rl.close();
};

export default generatorPasswordPanel
