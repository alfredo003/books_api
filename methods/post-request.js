const { randomUUID } = require('crypto')
const bodyParser = require('./../util/body-parse');
const writeToFile = require('./../util/write-to-file')
module.exports = async(req,res)=>{
  if(req.url === '/api/books'){
    try{
      let body = await bodyParser(req);
      id = randomUUID();
      let data = {id,...body}
      req.books.push(data);
      writeToFile(req.books);
      res.writeHead(201,{"Content-Type":"application/json"});
      res.end(JSON.stringify({title:"Success",message:"Created Success!"}));
    }catch(error){
      console.log(error)
      res.writeHead(400,{"Content-Type":"application/json"});
      res.end(JSON.stringify({
        title:"Validation Failed",
        message:"Request body is not valid",
      }))
    }
   }else{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({title:"Not found",message:"Route not found"}));
  }
}