import express from "express";
import mongoose from "mongoose";
import route from "./Routes/recipeRoutes.js";
import cors from "cors";

import SigninRouter from "./Routes/SigninRouter.js";
import FeedbackRouter from "./Routes/FeedbackRouter.js";
import routeblog from "./Routes/BlogRoute.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',route);

app.use('/api',routeblog);
app.use('/api',SigninRouter);
app.use('/api',FeedbackRouter)

app.listen(3001);
mongoose.connect(
  "mongodb+srv://SKCT-NODE:MERNdev@cluster0.wvyao.mongodb.net/cooking?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("DB Connected"))
.catch((err) => console.log(err));