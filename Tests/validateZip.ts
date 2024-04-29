export function validateZip(zip: string): boolean {
  if (/^\d{5}$/.test(zip)) {
    return true;
  } else {
    return false;
  }
}
