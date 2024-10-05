import { GetStaticProps } from "next";
import allProductsDatas from "../../public/fakeDatas/products.fakeDatas.json";

export enum GammeProductColor {
  GREASY = "#FF9500",
  DRY = "#FFCC00",
  NORMAL = "#00C7BE",
  CURLY = "#5856D6",
  STRAIGHT = "#007AFF",
  COLORED = "#FF2D55",
  THINNING = "#30B0C7",
  DAMAGED = "#32ADE6",
}

export interface Review {
  id: number;
  productId: number;
  username: number;
  rating: number;
  comment: string;
  date: string; // au format timestamp : "2021-06-01T00:00:00.000Z" donc pour
}

export interface Promotion {
  id: number;
  description: string;
  code: string;
}

export interface Ingredient {
  name: string;
  percentage: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  promotion: Promotion | null;
  reviews: Review[] | null;
  gamme?: string;
  limitedEdition?: string;
  ingredients: Ingredient[];
  long_description: string;
  how_to_use: string[];
}

export function getGammeColor(gamme: string): string {
  switch (gamme) {
    case "GREASY":
      return GammeProductColor.GREASY;
    case "DRY":
      return GammeProductColor.DRY;
    case "NORMAL":
      return GammeProductColor.NORMAL;
    case "CURLY":
      return GammeProductColor.CURLY;
    case "STRAIGHT":
      return GammeProductColor.STRAIGHT;
    case "COLORED":
      return GammeProductColor.COLORED;
    case "THINNING":
      return GammeProductColor.THINNING;
    case "DAMAGED":
      return GammeProductColor.DAMAGED;
    default:
      return "#000";
  }
}

export function extractProducts(data: any): Product[] {
  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    description: item.description,
    promotion: item.promotion || null,
    reviews: item.reviews || [],
    gamme: item.gamme,
    limitedEdition: item.limitedEdition,
    ingredients: item.ingredients,
    long_description: item.long_description,
    how_to_use: item.how_to_use,
  }));
}