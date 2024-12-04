
const http = require('http');
const server = http.createServer((req, res) => {
   
    res.end('voilà la réponse');
})

server.listen(process.env.PORT || 3000 , () => {
    console.log('Server is running on port');
});