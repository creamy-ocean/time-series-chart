import { useEffect, useState } from "react";
import dataApi from "../api/dataApi";
import { ChartDataObject } from "../types/types";

const useChartData = () => {
  const [date, setDate] = useState<string>();
  const [data, setData] = useState<Array<ChartDataObject>>();
  const [locationFilters, setLocationFilters] = useState<Array<string>>();

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

  useEffect(() => {
    fetchData();
  }, []);

  console.log("useChartData rendered");

  return { date, data, locationFilters };
};

export default useChartData;
