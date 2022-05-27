import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDTO } from './chat-dto';
import { chat } from './chat.interface';
import { UserDataDTO } from './dto/UserData-dto';
// import * as auth from 'firebase/auth';
import * as admin from 'firebase-admin';
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

// import * as firebase from 'firebase/app';

@Injectable()
export class AppService {
  constructor(@InjectModel('Chat') private readonly chatsModal: Model<chat>, @InjectFirebaseAdmin() private readonly firebase : FirebaseAdmin) {
    // auth.initializeAuth(firebase.getApp());
    // initializeApp({
    //   credential: admin.credential.cert({
    //     projectId: 'webprojects-8ff0d',
    //     clientEmail:
    //       'firebase-adminsdk-mxu3i@webprojects-8ff0d.iam.gserviceaccount.com',
    //     privateKey:
    //       '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKPqGgQD1fCSPz\nKIStiSxLRpYdBuUfWj9Do+vH/z32fWHNoH5T+1Hkcw6xr/XKJvZ/RSg4SIEGAw08\n5SEhQvElhGkRvDckGb/ziFX56adBSX81ICmUj8a/vsaILMgDt75JfVClcYtIXuQY\nZP/VMt3n56vgS5qDhCxPYEehgOMTKnA5JZkFr2ss4aFKWSPRMMHvNpwv4uQnAiMy\nBKPgx20vDtHFWeu8oIKqbPVotKarYCjgqELoqDM4HYFbvk9ReD4BPfF9umTGzvY6\nemLtzLUCsggfwv5Zp86kPRP1cmnKW39ha0YzzVPxwoDvapinz3CwgwkvNpqbDB0K\n8lGH6y5dAgMBAAECggEAR1m7Sb8AJ9Qgs7t6u4JmdxQrB4iUMvBy21ksaL2azahE\nZfgWOWiz5oXVDEkIzM3cLuBmJR0nL8jJ1c78VjC4xMSnENO3HGxdNPzHYEjXcggM\n8eAr6zaiJqmWfxpVYkJjxqeIWSXqvpiDnjubqkqs0REBqTrjAz0RKNvNyaOf+PVi\nP5Xex1sr+07QewB/QjsSMOwU4T/vtVvjV7UU5Yrw5uXT1fRc2wmq1KImAYLJYTV2\nV+BXD2SfywTtjdYf1uW5FJNNwD8HvM80OKEwfThpD9UD60BG4CkEWtxz2jpZ4l4o\nbDCsX5LlHycKOXZRY9ctAkwcupR9J49JH//zWeZkfQKBgQDsmwKjn+hqBozs6FLD\nqAv3NRyVUZTOg9hHjpNiQdxzc3zByAPMMcxWlIKnpg/hLoNsULqqB3l/81eTh/je\nxq7A6+eDtQUiLRwgp410ohqh65aBy5iSJWv/Sa2t5dlbW5CRwwvrhkxSVBrPt6JM\n7RWMrK6HpyyQrbs8d2zZaOEf4wKBgQDa0pWNOlpQ8RCaGX3DnTW0napPiA4Cn4Z1\nPH0QTGBkIIpyn39Y2PWcljV6EFySKDpsXNVfN/g+xWQIkbUDF+VV3MP8CIqnkcWD\nQQrKjNWaIpD+BvfgcjHch++kKxlTjz6rBtOPxveMao4cgHcdvq8H0TIWelRWCWPe\nmizG8h9MvwKBgQC4D9KaxaBBMv1Yo1cXXFiKpGerBX8UtN6AtDqVmpTLv5DTEy1Z\nIXhL9lY542bBD7UvgxHjidMMJZsAayvA6qEx9ZLyE9V9g8g44v+ZNy4uvp4kNOVo\n8/Gy9HdHK+LOPkoWCrzwKVagSUteQgXhgCJegEt5viReHLjmziUAcKWJbwKBgA57\n9e49OJE3A7RPj6WNGGr2LLnK9bJywMGt2VFk3NSD2uYvbIyC/+73el60CoyaIRPf\nKTh+Se5NvotaqbKkuEdwr4BVSGhDG+HOQlqZ6+Gh/Br0dx/iLy67yL8DI1AGoU1M\nzGAt+WDQBMwaLMhJQOixjjEys7ZmNLgdWG1qxWudAoGAX4X1g0AGK4HGDJ8bN9MX\n4w8dx5B1+Sh8UKCaP7/Nk7Y8PT9+NCEM5Rp4esB9LOi1lJLIHh6kspgd0DHYjese\nVfv8mdqCXVZd1DR1uYUHzNkJK1PunaxXxgCXmd/GcPvvDSprZkRsBLgIVxksyQfd\nizAfifsCSMuD4jeYpP710fQ=\n-----END PRIVATE KEY-----\n',
    //   }),
    //   projectId: 'webprojects-8ff0d'
    // });
  }

  async getAllChats(username: string) {
    const chats = await this.chatsModal
      .find()
      .where('user')
      .equals(username)
      .exec();

    return chats;
    // let data_ ;
    // const stream = this.chatsModal.collection.watch();
    // stream.on('change',(data)=>{
    //   console.log(data);

    //   data_ = data;
    // })
    // return data_;
  }

  async signUpUser(userdata: UserDataDTO) {
    console.log(userdata.email);
    console.log(userdata.password);

    // const auth = getAuth(app);
    try {
      // const res = await auth.createUserWithEmailAndPassword(auth.getAuth(), userdata.email, userdata.password);
      const res = await this.firebase.auth.createUser({
        email: userdata.email,
        password: userdata.password,
        displayName: userdata.username,
        emailVerified: true,
      });
      const user = res.uid;
      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
    // return userdata;
  }

  async createEntry(chatDto: ChatDTO) {
    const newUser = new this.chatsModal(chatDto);
    const result = await newUser.save();
    console.log(result);

    return result._id;
  }
}
