import { getGroups } from './getGroups';

describe('getGroups function', () => {
  it('should return groups with their IDs', async () => {
    const groups = await getGroups();
    expect(groups).toEqual([
      { id: 1, groupName: 'Hajarna' },
      { id: 2, groupName: 'Valarna' },
      { id: 3, groupName: 'Zebrorna' }
    ]);
  });

  
});
