import { getUsers } from "./getUsers";

describe("getUsers function", () => {
  it("should return users with their groups", async () => {
    const users = await getUsers();
    expect(users).toEqual([
      { name: "Erik", group: 1 },
      { name: "Lisa", group: 2 },
      { name: "Hampus", group: 1 },
      { name: "Linda", group: 3 },
      { name: "Eva", group: 1 },
      { name: "Anna", group: 3 },
    ]);
  });
});
