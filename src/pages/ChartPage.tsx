import { useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import dataApi from "../api/dataApi";

const ChartPage = () => {
  const [data, setData] = useState<
    Array<{
      time: string;
      id: string;
      value_bar: number;
      value_area: number;
    }>
  >();
  const fetchData = async () => {
    const rawData = await dataApi.getData();
    setData(
      Object.entries(rawData).map(([time, location]) => ({
        time: new Date(time).toLocaleTimeString("it-IT", { hour12: false }),
        ...location,
      }))
    );
  };
  fetchData();

  return (
    <ChartContainer>
      <ResponsiveContainer width="85%" height={600}>
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
            label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis
            yAxisId="area"
            orientation="left"
            label={{
              value: "area",
              angle: 0,
              position: "insideLeft",
              offset: -5,
            }}
            domain={[0, 200]}
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
          />
          <Tooltip />
          <Legend />
          <Area
            yAxisId="area"
            type="monotone"
            dataKey="value_area"
            fill="#666"
            stroke="#666"
          />
          <Bar yAxisId="bar" dataKey="value_bar" barSize={20} fill="#999" />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ChartPage;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
