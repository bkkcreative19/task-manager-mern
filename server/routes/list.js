import express from "express";
import { aunthenticate } from "../middlewares/auth.js";
import {
  createList,
  deleteList,
  updateList,
  getLists,
} from "../controllers/list.js";

const router = express.Router();

router.get("/lists", aunthenticate, getLists);
router.post("/lists", aunthenticate, createList);
router.patch("/lists/:id", aunthenticate, updateList);
router.delete("/lists/:id", aunthenticate, deleteList);

export default router;
