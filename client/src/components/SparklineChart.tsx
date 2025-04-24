interface SparklineChartProps {
  trend: string;
  color: string;
}

const SparklineChart = ({ trend, color }: SparklineChartProps) => {
  let path = '';
  
  // Generate SVG path based on trend
  switch (trend) {
    case 'up':
      path = 'M0,35 C8,32 14,38 20,32 C30,20 40,25 52,16 C65,5 72,20 84,22 C98,24 110,10 120,8 C132,6 144,18 164,4';
      break;
    case 'down':
      path = 'M0,15 C12,18 24,36 36,30 C48,24 60,12 72,18 C84,24 96,30 108,28 C120,26 132,14 144,12 C156,10 164,6 164,6';
      break;
    case 'neutral':
      path = 'M0,24 C12,26 24,22 36,24 C48,26 60,28 72,24 C84,20 96,24 108,24 C120,24 132,22 144,24 C156,26 164,24 164,24';
      break;
    case 'volatile':
      path = 'M0,24 C8,16 16,32 24,24 C32,16 40,32 48,24 C56,16 64,32 72,24 C80,16 88,32 96,24 C104,16 112,32 120,24 C128,16 136,32 144,24 C152,16 160,32 164,24';
      break;
    default:
      path = 'M0,24 C12,26 24,22 36,24 C48,26 60,28 72,24 C84,20 96,24 108,24 C120,24 132,22 144,24 C156,26 164,24 164,24';
  }
  
  return (
    <svg className="sparkline" width="164" height="48" viewBox="0 0 164 48">
      <path d={path} stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
};

export default SparklineChart;
