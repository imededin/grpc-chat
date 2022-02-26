const grpc = require('grpc');
const messages= require('./salutations_pb');
const services= require('./salutations_grpc_pb');
 
function main(){
    const client = new services.salutationClient('localhost:8086',grpc.credentials.createInsecure());
    const salutationReq= new messages.helloRequest();
    const prompt = require("prompt-sync")();
    x= process.argv[2];
    var i=0
    for(i=0;i<x;i++){

    const input = prompt("print some message: ");
    salutationReq.setMessage(input);

    client.helloreq(salutationReq, function(err,response){
        if(err) console.log('error:',err);
        else console.log("response from server:",response.getMessager())
    })
}
  
  
}
main();