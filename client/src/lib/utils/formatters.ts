// Format currency with appropriate symbol
export const formatCurrency = (value: number, maximumFractionDigits = 2): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits
  }).format(value);
};

// Format large numbers with appropriate abbreviation
export const formatLargeNumber = (value: number): string => {
  if (value >= 1e12) return (value / 1e12).toFixed(2) + ' T';
  if (value >= 1e9) return (value / 1e9).toFixed(2) + ' B';
  if (value >= 1e6) return (value / 1e6).toFixed(2) + ' M';
  if (value >= 1e3) return (value / 1e3).toFixed(2) + ' K';
  return value.toFixed(2);
};

// Format percentage with appropriate sign and color class
export const formatPercentage = (value: number): { value: string; className: string } => {
  const formatted = Math.abs(value).toFixed(2) + '%';
  const className = value > 0 ? 'text-success' : value < 0 ? 'text-danger' : '';
  const sign = value > 0 ? '↑ ' : value < 0 ? '↓ ' : '';
  return { value: sign + formatted, className };
};
