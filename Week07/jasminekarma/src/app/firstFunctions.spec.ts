// test suite
import { addition } from "./firstFunctions";
describe("Test Suite", () => {
  it("Testing addtion function", () => {
    expect(addition(20, 25)).toBe(45);
  });
});
