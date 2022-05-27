import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: any, ...args: any[]) {
    console.log(args);

    this.logger.log(`Client connected: ${client.id}`);
  }
  afterInit(server: any) {
    this.logger.log('Init');
  }
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): void {
    this.server.emit('msgToClient', payload, client.id);
  }
}
