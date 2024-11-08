import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  qty: number;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  qty: { type: Number, required: true, default: 1 },
});

export default mongoose.model<IBook>('Book', BookSchema);
