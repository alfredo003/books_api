const EndPoint = require('./../util/end-point');

module.exports = (req,res)=>{
  const url  = (new EndPoint(req));
  let baseURL = url.baseURL();
  let id = url.param();

  if(req.url === '/api/books'){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(req.books));
  }else if(baseURL === '/api/books/' && id){
    res.writeHead(200,{"Content-Type":"application/json"});
    let book = req.books.filter((book)=> book.id == id)
    if(book.length > 0){
      res.writeHead(200,{"Content-Type":"application/json"});
      res.end(JSON.stringify(book));
    }else{
      res.writeHead(404,{"Content-Type":"application/json"});
      res.end(JSON.stringify({title:'Not Found',message:'Book not Found'}));
    }
  }else{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({cod:"404",message:"Route Not found"}))
  }

}