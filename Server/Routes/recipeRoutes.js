import express from "express";
import { Recipemodel } from "../Model/Recipemodel.js";
const route = express.Router();

route.get("/Recipe-Diet", async (req, res) => {
  const data = await Recipemodel.find();
  res.json(data);
});

route.post("/Recipe-Diet", async (req, res) => {
  const new_data = await new Recipemodel(req.body);
  new_data.save();
  res.json(new_data);
});
route.put("/Recipe-Diet/:id", async (req, res) => {
  const data = await Recipemodel.findByIdAndUpdate(req.params.id, req.body,{new: true});
  res.json(data);
});

route.get("/Recipe-Diet/:id", async (req, res) => {
  const data = await Recipemodel.findOne({ id: req.params.id });
  res.json(data);
});
route.delete("/Recipe-Diet/:id", async (req, res) => {
  const data = await Recipemodel.findByIdAndDelete(req.params.id);
  res.send("id deleted");
});

export default route;