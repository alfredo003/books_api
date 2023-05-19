const writeToFile = require('./../util/write-to-file');
module.exports = (req,res) =>{
  baseURL = req.url.substring(0,req.url.lastIndexOf("/") +1);
  id = req.url.split("/")[3];
  if(baseURL === '/api/books/' && id){
    let book = req.books.findIndex((book)=>book.id == id);
    if(!(book === -1)){
        req.books.splice(book,1);
        writeToFile(req.books);
        res.writeHead(204,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
          title:"success",
          message:"delete with success"
        }));
    }else{
         res.writeHead(404,{"Content-Type":"application/json"});
         res.end(JSON.stringify({
          title:"Not Found",
          message:"Book Not Found"
         }))
    }

  }else{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
      title:"Not Found",
      message:"Route not Found"
    }))
  }
}