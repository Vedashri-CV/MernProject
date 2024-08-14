import mongoose,{Schema} from "mongoose";

const schema= new Schema(
    {
        id: Number,
        img: String,
        title: String,
        date: String,
        excerpt: String,
        authorImg: String,
        authorName: String,
        recipe: String,
       
    }
);
export const Blog = mongoose.model("Blog",schema);