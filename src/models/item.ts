import { model, Model, Schema } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color: { type: String, required: true },
    name: { type: String, required: true },
    gas: { type: String, required: true, enum: ["gasoline", "electric"] },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
