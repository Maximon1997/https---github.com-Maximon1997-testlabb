export function isLowerCase(input: string): boolean {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < "a" || input[i] > "z") {
      return false;
    }
  }
  return true;
}
