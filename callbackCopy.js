/* Ecrivez un programme qui copie le fichier file1.txt
 vers le fichier file2.txt en utilisant les api 
 asynchrones basées sur des callbacks du module 
 fs de node.js. */

import fs from 'fs'

let content = fs.copyFile('file1.txt', 'file2.txt')
console.log('file1.txt was copied to file2.txt')
