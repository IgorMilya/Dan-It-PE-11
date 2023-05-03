////////////////////////////////1
// import http from "http";
// import fs from 'fs';
// const {readFile, writeFile, mkdir, unlink, rmdir, rm} = fs.promises;
// const PORT = 3000;
//
// const server = http.createServer((req, res) => {
//   console.log(req.url)
//   console.log(req.method)
//
//   // res.setHeader('Content-Type', "text/html")
//   // res.statusCode = 202
//   res.writeHead(200, {
//     'Content-Type': "text/html",
//   })
//
//   res.write("hello World")
//   res.write("<h1>TITLE</h1>")
//   res.write("<p>PARAGRAPH</p>")
//
//   res.end("Hello world!")
// })
// server.listen(PORT, (err) => {
//   if (err) throw err
//
//   console.log(`Server is running on http//:localhost:${PORT}`)
// })


// import yargs from "yargs";
// import {hideBin} from "yargs/helpers"
// const argv = yargs(hideBin(process.argv)).argv
//
// if (argv.mode === "development"){
//   console.log("dev mode")
// }
//
// if (argv.mode === "production"){
//   console.log("production mode")
// }
// import chalk from "chalk";
// console.log(chalk.blue("Hello"))
// console.log(chalk.red("Error"))
// console.log(`${process.cwd()}/data/ht2a`)
// console.log(process.env.URL)

// import path from "path";
// import fs from 'fs';
// const {readFile, writeFile, mkdir, unlink, rmdir, rm} = fs.promises;
//
// console.log(path.resolve(process.cwd(), "data/test", "text")) // For any OS

//Best Practice
// (async () => {
//   try {
//     const data = await readFile('./data/ht2a', "utf8");
//     // const data = await readFile('./data/ht2a');
//     console.log(data);
//
//     await writeFile('./data/http', `Hello - \n\n ${data}`);
//     // await writeFile('./data/http', data);
//   } catch (e) {
//     throw e;
//   }
// })();

// (async () => {
//   try {
//     // await mkdir("./data/test/js/style/gulp", {recursive: true}) //create folders
//     // await unlink("./data/test/js/style/gulp/Text") //delete files
//     // await rmdir("./data/test", {recursive: true}) // delete folders
//     // await rm("./data/test", {recursive: true}) // delete folders
//     if (fs.existsSync("./data/test")) return
//
//     await mkdir("./data/test")
//     await writeFile('./data/test/text', "Hello")
//   } catch (e) {
//     throw e;
//   }
// })();

// fs.readFile('./data/ht2a',"utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data)
// })

// not recommended
// const data = fs.readFileSync('./data/ht2a', "utf8")
// console.log(data)

////////////////////////////////////2
// import fs from "fs";
// import {readFile, writeFile} from "fs/promises"
// import {resolve} from "path"
//
// const readStream = fs.createReadStream(resolve(process.cwd(), "./data/ht2a"), 'utf8')
// const writeStream = fs.createWriteStream(resolve(process.cwd(), "./data/https"),'utf8')
//
// readStream.on('data', (chunk) => {
//   writeStream.write('\n\n-------------New Chunck---------------\n\n')
//   writeStream.write(chunk)
// })

// (async () => {
//   try {
//     const hp = await readFile(resolve(process.cwd(), "./data/ht2a"), 'utf8')
//     await writeFile(resolve(process.cwd(), "./data/https"), hp)
//
//   } catch (e) {
//     throw e
//   }
// })()











