import z from "zod";
import { userFormSchemaValidation } from "../validations";

export type User = {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  status: "active" | "inactive";
};

export type UserFormSchema = z.infer<typeof userFormSchemaValidation>;
