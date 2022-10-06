import { describe, expect, it } from "vitest";
import {
  generate,
  passwordGenerator,
  SelectedUses,
  shuffle,
} from "../passwordGenerator";

function randomNumberFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

  it("should generate a string with the available chars with !#$ & 1234 & ABC", () => {
    const output = generate([
      SelectedUses.Symbols,
      SelectedUses.Numbers,
      SelectedUses.UpperCase,
    ]);
    expect(output.length).toEqual(51);
    expect(output.includes(")")).toBe(true);
    expect(output.includes("9")).toBe(true);
    expect(output.includes("A")).toBe(true);
    expect(output.includes("a")).toBe(false);
  });
});

describe("passwordGenerator", () => {
  it("should generate a password with length X", () => {
    const length = randomNumberFromInterval(1, 20);
    expect(
      passwordGenerator(
        length,
        generate([SelectedUses.UpperCase, SelectedUses.LowerCase])
      ).length
    ).toEqual(length);
  });
});
