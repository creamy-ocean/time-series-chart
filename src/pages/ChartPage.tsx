import { useState } from "react";
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
import dataApi from "../api/dataApi";
import { AREA_KEY, BAR_KEY } from "../consts/consts";

interface TooltipProps {
  active: boolean;
  payload: any;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <TooltipBox>
        <p>{`id: ${payload[0].payload.id}`}</p>
        <p>{`${BAR_KEY}: ${payload[0].payload[BAR_KEY]}`}</p>
        <p>{`${AREA_KEY}: ${payload[0].payload[AREA_KEY]}`}</p>
      </TooltipBox>
    );
  }
  return null;
};

const ChartPage = () => {
  const [date, setDate] = useState<string>();
  const [data, setData] = useState<
    Array<{
      time: string;
      id: string;
      value_bar: number;
      value_area: number;
    }>
  >();
  const [locationFilters, setLocationFilters] = useState<Array<string>>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");

  const fetchData = async () => {
    const rawData = Object.entries(await dataApi.getData());

    setDate(new Date(rawData[0][0]).toLocaleDateString());
    setData(
      rawData.map(([time, data]) => ({
        time: new Date(time).toLocaleTimeString("it-IT", { hour12: false }),
        ...data,
      }))
    );
    setLocationFilters([...new Set(rawData.map(([_, data]) => data.id))]);
  };
  fetchData();

  return (
    <>
      <div>
        {locationFilters &&
          locationFilters.map((locationFilter) => (
            <button onClick={() => setActiveFilter(locationFilter)}>
              {locationFilter}
            </button>
          ))}
      </div>
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
    </>
  );
};

export default ChartPage;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const TooltipBox = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  opacity: 0.9;
  p {
    margin: 0.25rem;
  }
`;
