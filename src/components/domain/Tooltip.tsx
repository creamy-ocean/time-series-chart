import styled from "styled-components";
import { AREA_KEY, BAR_KEY } from "../../consts/consts";
import { TooltipProps } from "../../types/types";

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const PAYLOAD = payload[0].payload;
    return (
      <TooltipBox>
        <p>{`id: ${PAYLOAD.id}`}</p>
        <p>{`${BAR_KEY}: ${PAYLOAD[BAR_KEY]}`}</p>
        <p>{`${AREA_KEY}: ${PAYLOAD[AREA_KEY]}`}</p>
      </TooltipBox>
    );
  }
  return null;
};

export default CustomTooltip;

const TooltipBox = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  opacity: 0.9;
  p {
    margin: 0.25rem;
  }
`;
