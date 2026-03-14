export const formatNumberID = (value: number) => {
  return value.toLocaleString('id-ID');
};

export const parseNumberInput = (value: string) => {
  const sanitizedValue = value.replace(/\D/g, '');
  return parseInt(sanitizedValue, 10) || 0;
};
