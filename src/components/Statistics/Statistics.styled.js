import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  width: 474px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  padding: 32px 0;

  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
  text-align: center;

  background-color: #ffffff;
  color: #808080;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: 20%;
  aspect-ratio: 1 / 1;

  background-color: ${props => props.bgColor};
  color: #ffffff;
  font-size: 24px;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
