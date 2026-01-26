export const normalizeParams = <T>(value: T): T | undefined => {
  if (Array.isArray(value) && value.length === 0) {
    return undefined;
  }

  if (value === "" || value === null) {
    return undefined;
  }

  return value;
};
