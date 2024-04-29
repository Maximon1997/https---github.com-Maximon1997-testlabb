import { validateEmail } from "./validateEmail";

describe("validateEmail function", () => {
  it("should return true for a valid email address", () => {
    expect(validateEmail("jonatan@gmail.com")).toBe(true);
  });

  it("should return false for an incomplete email address", () => {
    expect(validateEmail("jonatan@gmail")).toBe(false);
  });

  it("should return false for an email address without @", () => {
    expect(validateEmail("jonatan.com")).toBe(false);
  });

  it("should return true for an email address with subdomain", () => {
    expect(validateEmail("test@example.co.uk")).toBe(true);
  });
});
