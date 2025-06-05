import { Request, Response, Router } from "express";
import {
  deleteBlock,
  getBlock,
  getBlocks,
  postBlock,
  updateBlock,
} from "../controllers/block";
import { deleteItem } from "../controllers/item";

const router = Router();

router.get("/", getBlocks);

router.get("/:id", getBlock);

router.post("/", postBlock);

router.put("/:id", updateBlock);

router.delete("/:id", deleteBlock);
export { router };
