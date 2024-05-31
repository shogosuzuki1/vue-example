import { User } from "@/types/User";
import Dexie, { EntityTable } from "dexie";

const dbName = "example-database";

const db = new Dexie(dbName) as Dexie & {
  users: EntityTable<User, "id">;
};

db.version(1).stores({
  users: "++id, email, rank",
});

export { db };
// export type { User };
