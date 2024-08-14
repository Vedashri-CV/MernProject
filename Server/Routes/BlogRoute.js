import express from "express";
import { Blog } from "../Model/Blogg.js";
const routeblog = express.Router();

routeblog.get("/blog", async (req, res) => {
  const data = await Blog.find();
  res.json(data);
});

routeblog.post("/blog", async (req, res) => {
  const new_data = await new Blog(req.body);
  new_data.save();
  res.json(new_data);
});
routeblog.put("/blog/:id", async (req, res) => {
  const data = await Blog.findByIdAndUpdate(req.params.id, req.body,{new: true});
  res.json(data);
});

routeblog.get("/blog/:id", async (req, res) => {
  const data = await Blog.findById(req.params.id);
  res.json(data);
});
routeblog.delete("/blog/:id", async (req, res) => {
  const data = await Blog.findByIdAndDelete(req.params.id);
  res.send("id deleted");
});

export default routeblog;