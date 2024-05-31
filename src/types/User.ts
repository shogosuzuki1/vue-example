import { GENDER, RANK } from "@/constants/constants";

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  gender: Gender;
  email: string;
  rank: Rank;
}

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export type Rank = (typeof RANK)[keyof typeof RANK];
