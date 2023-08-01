// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Welcome to our home page')
//         res.end()
//     }
//     else if (req.url === '/about') {
//         res.write('Here is our short history')
//         res.end()
//     }
//     else {
//     res.write(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//     res.end()}
// })

// server.listen(3000)


const _ = require('lodash')

const items = [1, [2, [3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)