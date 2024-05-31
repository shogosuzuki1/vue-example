import { GENDER } from "./constants/constants";
import { db } from "./core/db";
import { User } from "./types/User";

const userList: User[] = [
  {
    id: 1,
    lastName: "last-name01",
    firstName: "first-name01",
    gender: GENDER.MALE,
    email: "test01@example.com",
    rank: 1,
  },
  {
    id: 2,
    lastName: "last-name02",
    firstName: "first-name02",
    gender: GENDER.FEMALE,
    email: "test02@example.com",
    rank: 1,
  },
  {
    id: 3,
    lastName: "last-name03",
    firstName: "first-name03",
    gender: GENDER.OTHER,
    email: "test03@example.com",
    rank: 2,
  },
  {
    id: 4,
    lastName: "last-name04",
    firstName: "first-name04",
    gender: GENDER.MALE,
    email: "test04@example.com",
    rank: 3,
  },
  {
    id: 5,
    lastName: "last-name05",
    firstName: "first-name05",
    gender: GENDER.FEMALE,
    email: "test05@example.com",
    rank: 4,
  },
  {
    id: 6,
    lastName: "last-name06",
    firstName: "first-name06",
    gender: GENDER.MALE,
    email: "test06@example.com",
    rank: 3,
  },
  {
    id: 7,
    lastName: "last-name07",
    firstName: "first-name07",
    gender: GENDER.FEMALE,
    email: "test07@example.com",
    rank: 2,
  },
  {
    id: 8,
    lastName: "last-name08",
    firstName: "first-name08",
    gender: GENDER.MALE,
    email: "test08@example.com",
    rank: 2,
  },
  {
    id: 9,
    lastName: "last-name09",
    firstName: "first-name09",
    gender: GENDER.MALE,
    email: "test09@example.com",
    rank: 1,
  },
  {
    id: 10,
    lastName: "last-name10",
    firstName: "first-name10",
    gender: GENDER.FEMALE,
    email: "test10@example.com",
    rank: 1,
  },
];

export default async function initDB() {
  userList.forEach(async (user) => {
    await db.users.put(user, user.id);
  });
}
