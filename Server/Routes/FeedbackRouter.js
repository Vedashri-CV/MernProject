import express from "express";
import {Feedbackmodel } from "../Model/Feedbackmodel.js";
const FeedbackRouter = express.Router();

FeedbackRouter.get("/feedback", async (req, res) => {
  const data = await Feedbackmodel .find();
  res.json(data);
});

FeedbackRouter.post("/feedback", async (req, res) => {
  const new_data = await new Feedbackmodel (req.body);
  new_data.save();
  res.json(new_data);
});
FeedbackRouter.put("/feedback/:id", async (req, res) => {
  const data = await Feedbackmodel.findByIdAndUpdate(req.params.id, req.body,{new: true});
  res.json(data);
});

FeedbackRouter.get("/feedback/:id", async (req, res) => {
  const data = await Feedbackmodel .findOne({ id: req.params.id });
  res.json(data);
});
FeedbackRouter.delete("/feedback/:id", async (req, res) => {
  const data = await Feedbackmodel .findByIdAndDelete(req.params.id);
  res.send("id deleted");
});

export default FeedbackRouter;