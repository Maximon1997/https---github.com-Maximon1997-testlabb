export function getGenitive(name: string): string {
    if (name.endsWith('s')) {
      return name + '';
    }
  
    return name + 's';
  }
  