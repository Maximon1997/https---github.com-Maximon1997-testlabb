import { validateZip } from "./validateZip";

describe("validateZip function", () => {
  it("should return true for a valid ZIP code", () => {
    expect(validateZip("12345")).toBe(true);
  });

  it("should return false for an incomplete ZIP code", () => {
    expect(validateZip("1234")).toBe(false);
  });

  it("should return false for a ZIP code with too many digits", () => {
    expect(validateZip("123456")).toBe(false);
  });

  it("should return false for a ZIP code without numbers", () => {
    expect(validateZip("abcde")).toBe(false);
  });
});
