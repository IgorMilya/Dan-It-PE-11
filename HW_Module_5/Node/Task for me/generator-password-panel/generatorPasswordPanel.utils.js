import fs from "fs";
import {resolve} from "path";

const saveFile = async (password) => {
  await fs.appendFile(resolve(process.cwd(), "./generated-password.text"), `${password} \n`, err => {
    if (err) {
      console.error('An error occurred while appending the file:', err);
    } else {
      console.log('Content appended to the file successfully.');
    }
  });
}
export default saveFile