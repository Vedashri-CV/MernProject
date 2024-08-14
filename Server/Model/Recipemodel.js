import mongoose,{Schema} from "mongoose";

const schema= new Schema(
    {
        id:String,
        name:String,
        category:String,
        steps:Object
    }
);
export const Recipemodel = mongoose.model("recipe",schema);