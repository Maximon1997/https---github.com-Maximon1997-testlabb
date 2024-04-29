import { isPrime } from "./validatePrimtal";

describe("isPrime function", () => {
  it("should return true for a prime number", () => {
    expect(isPrime(7)).toBe(true);
  });

  it("should return false for a non-prime number", () => {
    expect(isPrime(6)).toBe(false);
  });

  it("should return false for 1", () => {
    expect(isPrime(1)).toBe(false);
  });
});
