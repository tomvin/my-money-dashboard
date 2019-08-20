import { Item } from "./item";

export interface Category {
  name: string;
  icon: string;
  items: Item[];
}