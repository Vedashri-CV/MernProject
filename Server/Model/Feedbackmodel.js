import mongoose,{Schema} from "mongoose";

const schema= new Schema(
    {
        id:String,
        feedback:String
    }
);
export const Feedbackmodel = mongoose.model("feedback",schema);