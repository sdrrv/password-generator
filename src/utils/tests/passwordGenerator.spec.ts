import { describe, expect, it } from "vitest";
import { generate, SelectedUses, shuffle } from "../passwordGenerator";

describe("shuffle", () => {
  it("should shuffle", () => {
    const input = "testing123";
    expect(shuffle(input)).not.toEqual(input);
  });
});

describe("generate", () => {
  it("should generate a string with the available chars with ABC & abc", () => {
    const output = generate([SelectedUses.LowerCase, SelectedUses.UpperCase]);
    expect(output.length).toEqual(52);
    expect(output.includes("A")).toBe(true);
    expect(output.includes("a")).toBe(true);
  });
});
