export function isValidIP(str: string): boolean {
  const parts = str.split(".");

  if (parts.length !== 4) {
    return false;
  }
  for (const part of parts) {
    if (part.length === 0) {
      return false;
    }

    if (!/^[0-9]+$/.test(part)) {
      return false;
    }

    if (part.length <= 1 && part.length >= 3) {
      return false;
    }

    if (part.length > 1 && part.startsWith("0")) {
      return false;
    }
    const num = Number(part);
    if (num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}

console.log(isValidIP("1.2.3"));
