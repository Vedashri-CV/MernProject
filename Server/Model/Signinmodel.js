import mongoose,{Schema} from "mongoose";

const schema= new Schema(
    {
        id:String,
        firstname:String,
        lastname:String,
        email:String,
        password:String
    }
);
export const Signinmodel = mongoose.model("signin",schema);