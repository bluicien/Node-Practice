/* ================== OPERATING SYS =================== */


// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)

// // Method returns the system uptime in seconds
// console.log(`The system Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freemem: os.freemem(),
// }
// console.log(currentOS)



/* ================== PATH =================== */

// const path = require('path');

// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base= path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
// console.log(absolute)



/* ================== SYNC FILE R/W/A===================== */

// const {readFileSync, writeFileSync} = require('fs') 

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// // console.log(first, second)

// writeFileSync(
//     './content/results-sync.txt', 
//     `Here is the result : ${first}, ${second}`, 
//     { flag:'a' }
//     )

// console.log(writeFileSync)

/* ================== ASYNC FILE R/W/A===================== */



// const {readFile, writeFile} = require('fs') 

// readFile('./content/first.txt', 'utf8', (err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile(
//             './content/result-async.txt',
//             `Here is the result : ${first}, ${second}`,
//             {flag: 'a'},
//             (err,result) => {
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })

