import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import { AREA_KEY, BAR_KEY } from "../../consts/consts";
import useChartData from "../../hooks/useChartData";
import { ChartProps } from "../../types/types";
import CustomTooltip from "./Tooltip";

const Chart = ({ activeFilter, setActiveFilter }: ChartProps) => {
  const { date, data } = useChartData();

  return (
    <ChartContainer>
      <ResponsiveContainer width="95%" height={600}>
        <ComposedChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="time"
            label={{
              value: date,
              position: "insideBottomLeft",
              offset: -15,
            }}
            scale="band"
          />
          <YAxis
            yAxisId="area"
            orientation="left"
            label={{
              value: "area",
              angle: 0,
              position: "insideLeft",
              offset: -15,
            }}
            domain={[0, 200]}
            stroke="#999"
          />
          <YAxis
            yAxisId="bar"
            orientation="right"
            label={{
              value: "bar",
              angle: 0,
              position: "insideRight",
              offset: -25,
            }}
            stroke="#999"
          />
          <Tooltip content={<CustomTooltip active={false} payload={[]} />} />
          <Legend />
          <Bar
            yAxisId="bar"
            dataKey={BAR_KEY}
            barSize={15}
            fill="#7BA68A"
            onClick={(data) => setActiveFilter(data.id)}
          >
            {data?.map((entry, index) => {
              const fillColor =
                entry.id === activeFilter ? "#5E805E" : "#7BA68A";
              return <Cell key={`cell-${index}`} fill={fillColor} />;
            })}
          </Bar>
          <Area
            yAxisId="area"
            type="monotone"
            dataKey={AREA_KEY}
            fill="#F2A03D"
            stroke="#F2A03D"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
