import mongoose, { Schema, type Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    publishedDate: string;
    publisher: string;
    description: string;
    coverImage: string;
    rating: {
      average: number;
      count: number;
    };
    tags: string[];
    initialQty: number;
    qty: number;
}

const BookSchema: Schema = new Schema(
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      publishedDate: { type: String, required: true },
      publisher: { type: String, required: true },
      description: { type: String, required: true },
      coverImage: { type: String, required: true },
      rating: {
        average: { type: Number, required: true },
        count: { type: Number, required: true },
      },
      tags: { type: [String], required: true },
      initialQty: { type: Number, required: true },
      qty: { type: Number, required: true },
    },
)

export default mongoose.model<IBook>('Book', BookSchema);