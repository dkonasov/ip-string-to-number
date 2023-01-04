export function concatByRadix(radixes: number[], radixSize: 16): bigint;
export function concatByRadix(radixes: number[], radixSize: 8): number;

export function concatByRadix(
  radixes: number[],
  radixSize: 8 | 16
): number | bigint {
  const isBigInt = radixSize === 16;
  let result = isBigInt ? BigInt("0") : 0;
  let shift = isBigInt ? BigInt("0") : 0;

  const input = radixes.slice();
  while (input.length) {
    if (typeof result === "bigint") {
      result |= BigInt(String(input.pop())) << (shift as bigint);
      (shift as bigint) += BigInt(String(radixSize));
    } else {
      result |= input.pop() << (shift as number);
      (shift as number) += radixSize;
    }
  }

  if (typeof result === "number") {
    result = result >>> 0;
  }
  return result;
}
