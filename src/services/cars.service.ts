import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";
const insertCar = async (item: Car) => {
  return await ItemModel.create(item);
};

const getCars = async () => {
  return await ItemModel.find({});
};

const getCar = async (id: string) => {
  return await ItemModel.findById(id);
};

const updateCar = async (id: string, data: Car) => {
  //new indica que retorne el nuevo
  return await ItemModel.findByIdAndUpdate({ _id: id }, data, { new: true });
};

const deleteCar = async (id: string) => {
  return await ItemModel.findByIdAndDelete(id);
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
