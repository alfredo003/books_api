class EndPoint {

  constructor(request){
     this.req = request;
  }
  baseURL(){
    return this.req.url.substring(0,this.req.url.lastIndexOf('/')+1);
}
  param(){
    return this.req.url.split("/")[3];
  }
}

module.exports = EndPoint;