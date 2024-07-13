import { ResponsiveLine } from '@nivo/line';

type transportationType = {
  x: string;
  y: number;
};

type dataType = {
  id: 'japan';
  color: '#4cceac';
  data: transportationType[];
};

const LineChart = ({
  data,
  isDashBoard = false,
}: {
  data: dataType[];
  isDashBoard: boolean;
}) => (
  <ResponsiveLine
    data={data}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: '#777777',
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 14,
            fill: '#1a9349',
            outlineWidth: 0,
            outlineColor: 'transparent',
          },
        },
      },
    }}
    margin={{ top: 50, right: 180, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="cardinal"
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashBoard ? undefined : 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashBoard ? undefined : 'count',
      legendOffset: -40,
      legendPosition: 'middle',
      truncateTickAt: 0,
    }}
    enableGridX={false}
    enableGridY={false}
    colors={{ scheme: 'nivo' }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default LineChart;
