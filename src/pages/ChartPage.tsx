import { useState } from "react";
import Chart from "../components/domain/Chart";
import Filter from "../components/domain/Filter";

const ChartPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <>
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Chart activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </>
  );
};

export default ChartPage;
