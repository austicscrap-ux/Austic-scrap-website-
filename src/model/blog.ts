// import mongoose, { Schema, Document, Model } from "mongoose";

/*
export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  tags: string[];
  isDeleted: boolean;
  visibility: "public" | "private";
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "General" },
    author: { type: String, default: "Admin" },
    readTime: { type: String, default: "5 min read" },
    tags: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },
    visibility: { type: String, enum: ["public", "private"], default: "public" },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;
*/

export default {};
