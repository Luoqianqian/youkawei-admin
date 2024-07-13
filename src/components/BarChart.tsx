import { ResponsiveBar } from '@nivo/bar';

type dataType = {
  country: string;
  'hot dog': number;
  'hot dogColor': string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
};

const BarChart = ({ data }: { data: dataType[] }) => (
  <ResponsiveBar
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
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 200, bottom: 60, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Country',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Food',
      legendPosition: 'middle',
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
    }
  />
);

export default BarChart;
