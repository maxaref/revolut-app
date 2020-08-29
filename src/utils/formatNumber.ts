export const formatNumber = (value: number | string, decimals = 2) => parseFloat(parseFloat(value.toString()).toFixed(decimals));
