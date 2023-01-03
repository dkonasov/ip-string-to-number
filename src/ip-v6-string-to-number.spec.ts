import { ipV6StringToNumber } from "./ip-v6-string-to-number";
import { concatByRadix } from "./concat-by-radix";

jest.mock("./concat-by-radix");

describe("ipV6StringToNumber", () => {
  it("should call concatByRadix with valid params", () => {
    ipV6StringToNumber("ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff");

    const mockedConcatByRadix = concatByRadix as jest.MockedFunction<
      typeof concatByRadix
    >;

    expect(mockedConcatByRadix.mock.lastCall[0]).toEqual([
      0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff,
    ]);

    expect(mockedConcatByRadix.mock.lastCall[1]).toEqual(16);
  });

  it("should return valid value", () => {
    const mockedConcatByRadix = concatByRadix as unknown as jest.MockedFunction<
      (groups: number[], radix: 16) => bigint
    >;

    mockedConcatByRadix.mockReturnValue(42n);

    expect(ipV6StringToNumber("ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff")).toBe(
      42n
    );
  });

  it("should correctly process empty groups", () => {
    ipV6StringToNumber("::1");

    const mockedConcatByRadix = concatByRadix as jest.MockedFunction<
      typeof concatByRadix
    >;

    expect(mockedConcatByRadix.mock.lastCall[0]).toEqual([0, 0, 1]);
  });
});
