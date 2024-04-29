interface Group {
    id: number;
    groupName: string;
  }
  
  export function getGroups(): Promise<Group[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const groups: Group[] = [
          { id: 1, groupName: 'Hajarna' },
          { id: 2, groupName: 'Valarna' },
          { id: 3, groupName: 'Zebrorna' }
        ];
        resolve(groups);
      }, 1000);
    });
  }
  