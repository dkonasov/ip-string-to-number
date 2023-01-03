import { concatByRadix } from "./concat-by-radix";

describe("concat by radix function", () => {
  it("should concat 8 bit array", () => {
    expect(concatByRadix([255, 255], 8)).toEqual(0xffff);
  });

  it("should concat 16 bit array", () => {
    expect(
      concatByRadix(
        [0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff],
        16
      )
    ).toEqual(BigInt("0xffffffffffffffffffffffffffffffff"));
  });

  it("should correctly process leading zeros for 8 bit array", () => {
    expect(concatByRadix([0, 0, 0, 1], 8)).toEqual(1);
  });

  it("should correctly process leading zeros for 16 bit array", () => {
    expect(concatByRadix([0, 0, 0, 0, 0, 0, 0, 1], 16)).toEqual(BigInt("1"));
  });
});
