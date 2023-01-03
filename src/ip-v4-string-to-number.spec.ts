import { concatByRadix } from "./concat-by-radix";
import { ipV4StringToNumber } from "./ip-v4-string-to-number";

jest.mock("./concat-by-radix");

describe("ipV4StringToNumber function", () => {
  it("should call concatByRadix with valid params", () => {
    ipV4StringToNumber("192.168.1.1");
    const mockedConcatByRadix = concatByRadix as jest.MockedFunction<
      typeof concatByRadix
    >;

    expect(mockedConcatByRadix.mock.lastCall[0]).toEqual([192, 168, 1, 1]);
    expect(mockedConcatByRadix.mock.lastCall[1]).toEqual(8);
  });

  it("should return valid value", () => {
    ipV4StringToNumber("192.168.1.1");
    const mockedConcatByRadix = concatByRadix as jest.MockedFunction<
      typeof concatByRadix
    >;

    mockedConcatByRadix.mockReturnValue(42);

    expect(ipV4StringToNumber("192.168.1.1")).toBe(42);
  });
});
