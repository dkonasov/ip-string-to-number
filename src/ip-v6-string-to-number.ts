import { concatByRadix } from "./concat-by-radix";

export function ipV6StringToNumber(rawIp: string): bigint {
  const groups = rawIp
    .split(":")
    .map((groupStr) => Number(`0x${groupStr || 0}`));
  return concatByRadix(groups, 16);
}
