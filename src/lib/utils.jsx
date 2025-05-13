export const isNumeric = (value) => {
  const cleanedValue = value.replace(/\s+/g, "");
  return /^\d+$/.test(cleanedValue);
};

export const limitInputNumbers = (value, digits) => {
  const limited = value.slice(0, digits);
  return limited;
};
