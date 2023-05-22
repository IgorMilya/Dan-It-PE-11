import readline from 'readline'
import generatorPasswordPanel from './generator-password-panel/generatorPasswordPanel.js'

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

await generatorPasswordPanel();
