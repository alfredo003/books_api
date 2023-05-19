const EndPoint = require('./../util/end-point');
const bodyParser = require('./../util/body-parse')
const writeToFile = require('./../util/write-to-file')
module.exports = async(req,res) =>{
  let url = (new EndPoint(req));
   let baseURL = url.baseURL();
   let id = url.param();
  if(baseURL === '/api/books/' && id){  
    let body = await bodyParser(req);

    let book = req.books.findIndex((book)=>book.id == id);
    req.books[book] = {id,...body};
    req.books.push(req.books);
      writeToFile(req.books);
      res.writeHead(201,{"Content-Type":"application/json"});
      res.end(JSON.stringify({title:"Success",message:"Created Success!"}));
   
  }else{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
      title:"Not Found",
      message:"Route Not Found"
    }))
  }


}