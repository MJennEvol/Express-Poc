import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlock = (req: Request, res: Response) => {
  try {
    res.send({ message: "data" });
  } catch (e) {
    handleHttp(res, "Error get Blocks");
  }
};

const getBlocks = (req: Request, res: Response) => {
  try {
    res.send({ message: "datas" });
  } catch (e) {
    handleHttp(res, "Error get Block");
  }
};

const postBlock = (req: Request, res: Response) => {
  const { body } = req;
  try {
  } catch (e) {
    handleHttp(res, "Error post Block");
  }
};

const updateBlock = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "Error update Block");
  }
};

const deleteBlock = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "Error delete Block");
  }
};

export { getBlock, getBlocks, postBlock, updateBlock, deleteBlock };
