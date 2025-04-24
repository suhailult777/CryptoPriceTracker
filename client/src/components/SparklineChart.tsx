interface SparklineChartProps {
  trend: string;
  color: string;
}

const SparklineChart = ({ trend, color }: SparklineChartProps) => {
  let path = '';
  
  // Generate SVG path based on trend to mimic the example chart
  switch (trend) {
    case 'up':
      path = 'M0,32 C10,30 20,26 30,22 C40,18 50,14 60,12 C70,10 80,10 90,8 C100,6 110,6 120,5 C130,4 140,3 150,2 C160,1 164,0 164,0';
      break;
    case 'down':
      path = 'M0,8 C10,10 20,14 30,16 C40,18 50,22 60,25 C70,28 80,30 90,32 C100,33 110,34 120,35 C130,36 140,37 150,38 C160,39 164,40 164,40';
      break;
    case 'neutral':
      path = 'M0,24 C12,24 24,24 36,24 C48,24 60,24 72,24 C84,24 96,24 108,24 C120,24 132,24 144,24 C156,24 164,24 164,24';
      break;
    case 'volatile':
      path = 'M0,24 C8,18 16,28 24,20 C32,16 40,26 48,22 C56,18 64,28 72,24 C80,20 88,28 96,22 C104,18 112,26 120,22 C128,18 136,26 144,20 C152,16 160,24 164,20';
      break;
    default:
      path = 'M0,24 C12,24 24,24 36,24 C48,24 60,24 72,24 C84,24 96,24 108,24 C120,24 132,24 144,24 C156,24 164,24 164,24';
  }
  
  return (
    <svg className="sparkline" width="164" height="40" viewBox="0 0 164 40">
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
};

export default SparklineChart;
