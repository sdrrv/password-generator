import { describe, expect, it } from "vitest";
import { shuffle } from "../passwordGenerator";

describe("shuffle", () => {
  it("should shuffle", () => {
    const input = "testing123";
    expect(shuffle(input)).not.toEqual(input);
  });
});
