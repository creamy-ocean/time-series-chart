import styled from "styled-components";
import useChartData from "../../hooks/useChartData";
import { ChartProps } from "../../types/types";

const Filter = ({ activeFilter, setActiveFilter }: ChartProps) => {
  const { locationFilters } = useChartData();

  return (
    <FilterBox>
      {locationFilters && (
        <>
          <Button onClick={() => setActiveFilter("")}>해제</Button>
          {locationFilters.map((locationFilter) => (
            <FilterButton
              key={locationFilter}
              onClick={() => setActiveFilter(locationFilter)}
              $isActive={activeFilter === locationFilter}
            >
              {locationFilter}
            </FilterButton>
          ))}
        </>
      )}
    </FilterBox>
  );
};

export default Filter;

const FilterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #5e805e;
  border-radius: 1rem;
  cursor: pointer;
  background-color: #fff;
  color: #666;
`;

const FilterButton = styled(Button)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#5e805e" : "")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "")};
  border: ${({ $isActive }) => ($isActive ? "2px solid #5e805e" : "")};
`;
