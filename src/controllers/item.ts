import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/cars.service";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = (await getCar(id)) || { message: "Not found" };
    res.send(data);
  } catch (e) {
    handleHttp(res, "Error get items", e);
  }
};

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await getCars();
    res.send(cars);
  } catch (e) {
    handleHttp(res, "Error get item");
  }
};

const postItem = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const createdItem = await insertCar(body);
    res.send(createdItem);
  } catch (e) {
    handleHttp(res, "Error post item", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { body, params } = req;
    const updatedItem = await updateCar(params.id, body);
    res.send(updatedItem);
  } catch (e) {
    handleHttp(res, "Error update item");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCar(id);
    res.send({ message: `Car with id: ${id} deleted` });
  } catch (e) {
    handleHttp(res, "Error delete item");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
