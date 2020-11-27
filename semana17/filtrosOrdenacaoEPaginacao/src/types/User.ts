import { Professions } from "./Professions";

export type User = {
  id: number;
  name: string;
  email: string;
  type: Professions[];
};

export type inputData = {
  name: string;
  orderBy: string;
  orderType: string;
  page: number;
};
