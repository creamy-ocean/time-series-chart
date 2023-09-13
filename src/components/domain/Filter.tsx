import useChartData from "../../hooks/useChartData";
import { ChartProps } from "../../types/types";

const Filter = ({ setActiveFilter }: Omit<ChartProps, "activeFilter">) => {
  const { locationFilters } = useChartData();

  return (
    <div>
      {locationFilters &&
        locationFilters.map((locationFilter) => (
          <button
            key={locationFilter}
            onClick={() => setActiveFilter(locationFilter)}
          >
            {locationFilter}
          </button>
        ))}
    </div>
  );
};

export default Filter;
