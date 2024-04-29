interface User {
  name: string;
  group: number;
}

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users: User[] = [
        { name: "Erik", group: 1 },
        { name: "Lisa", group: 2 },
        { name: "Hampus", group: 1 },
        { name: "Linda", group: 3 },
        { name: "Eva", group: 1 },
        { name: "Anna", group: 3 },
      ];
      resolve(users);
    }, 1000);
  });
}
