import { isLowerCase } from "./LowerCase";

describe("isLowerCase function", () => {
  it("should return true if the string only contains lowercase letters", () => {
    expect(isLowerCase("hello")).toBe(true);
  });

  it("should return false if the string contains uppercase letters", () => {
    expect(isLowerCase("Hello")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isLowerCase("")).toBe(true);
  });
});
