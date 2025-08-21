import z from "zod";
import { userFormSchemaValidation } from "../validations";

export type User = {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  status: "active" | "inactive";
};

export type Product = {
  id: string | number;
  price: number;
  name: string;
  shortDescription: string;
  description: string;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type UserFormSchema = z.infer<typeof userFormSchemaValidation>;
