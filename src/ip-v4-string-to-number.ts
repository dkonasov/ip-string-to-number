import { concatByRadix } from "./concat-by-radix";

export function ipV4StringToNumber(rawIp: string): number {
  const octets = rawIp.split(".").map((val) => Number(val));

  return concatByRadix(octets, 8);
}
