import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseModule } from 'nestjs-firebase';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatSchema } from './chat.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@democluster.yyv3r.mongodb.net/chatApp?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }]),
    FirebaseModule.forRoot({
      googleApplicationCredential: resolve(
        'src',
        './service-account-file.json',
      ),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
