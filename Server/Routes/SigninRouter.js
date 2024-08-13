import express from "express";
import { Signinmodel } from "../Model/Signinmodel.js";
const SigninRouter = express.Router();

SigninRouter.get("/Recipe-Signin", async (req, res) => {
  const data = await Signinmodel.find();
  res.json(data);
});

SigninRouter.post("/Recipe-Signin", async (req, res) => {
  const new_data = await new Signinmodel(req.body);
  new_data.save();
  res.json(new_data);
});
SigninRouter.put("/Recipe-Signin/:id", async (req, res) => {
  const data = await Signinmodel.findByIdAndUpdate(req.params.id, req.body,{new: true});
  res.json(data);
});

SigninRouter.get("/Recipe-Signin/:id", async (req, res) => {
  const data = await Signinmodel.findOne({ id: req.params.id });
  res.json(data);
});
SigninRouter.delete("/Recipe-Signin/:id", async (req, res) => {
  const data = await Signinmodel.findByIdAndDelete(req.params.id);
  res.send("id deleted");
});

export default SigninRouter;