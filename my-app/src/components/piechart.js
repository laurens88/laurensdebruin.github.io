import { PieChart } from '@mui/x-charts/PieChart';

function PChart({data, width, height}) {
  

  return (
    <div>
      <PieChart
        colors={['#1011F5', '#f0f0f0']}
        series={[
          {
            data: data,
            labelKey: 'id',
            valueKey: 'value',
          },
        ]}
        width={width}
        height={height}
        slotProps={
            {
                legend: {hidden: true},
            }
        }
      />
    </div>
  );
}

export default PChart;