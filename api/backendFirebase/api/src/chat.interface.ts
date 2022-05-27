import { Document } from 'mongoose';

interface friend  {
  message: string;
  isSender: boolean;
}

export interface chat extends Document {
  user: string;
  friend: [friend];
}
