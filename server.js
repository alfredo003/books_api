const http = require('http');
const getRequest = require('./methods/get-request');
const postRequest = require('./methods/post-request');
const putRequest = require('./methods/put-request')
const deleteRequest = require('./methods/delete-request');
const port = 2001;
const books = require('./data/books.json');

const app = http.createServer((req,res)=>{
  req.books = books;
   switch(req.method){
    case "GET":
     getRequest(req,res);
    break;
    case "POST":
      postRequest(req,res);
    break;
    case "PUT":
     putRequest(req,res);
    break;
    case "DELETE":
     deleteRequest(req,res)
    break;
    default:
        res.writeHead(404,{"Content-Type":"application"});
        res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}));
   }
});

app.listen(port,()=>console.log(`Server running in port = ${port}`))