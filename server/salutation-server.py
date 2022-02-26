import grpc
import concurrent
from concurrent import futures
import salutations_pb2
import salutations_pb2_grpc


class salutationServicer(salutations_pb2_grpc.salutationServicer):
    def helloreq(self,request,context):
        response= salutations_pb2.helloResponse()
        print("from client:"+request.message)
        x=input()
        response.messageR=x+" "+"from python server"
        return response
    def hellostream(self,request_iterator,context):
        print("pinging")
       
        i=0
        for message in request_iterator:
            yield message
        print(i)
def main():
    server =grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    salutations_pb2_grpc.add_salutationServicer_to_server(salutationServicer(),server)
    server.add_insecure_port('[::]:8086')
    server.start()
    print("port 8086 ready..")
    server.wait_for_termination()

main()

