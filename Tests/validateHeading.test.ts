import { createHeading } from "./validateHeading";

describe("createHeading function", () => {
  it("should create an h1 heading with the given text", () => {
    expect(createHeading("Hello", 1)).toBe("<h1>Hello</h1>");
  });

  it("should create an h2 heading with the given text", () => {
    expect(createHeading("Hello world", 2)).toBe("<h2>Hello world</h2>");
  });
});
