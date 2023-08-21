import styled from 'styled-components';
import { getRandomHexColor } from 'utils';

export const StatisticsContainer = styled.section`
  width: 30vw;
  min-width: 270px;
  max-width: 620px;
  background-color: #e8ebf1;
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const StatisticsTitle = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: #1f1f1f;
  margin-bottom: 12px;
`;

export const StatisticsList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  box-sizing: border-box;
  width: 7.5vw;
  min-width: 60px;
  max-width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  border-width: 1px 1px;
  border-style: solid;
  border-color: #e6eaf1;
  text-align: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;

export const StatisticsLabel = styled.span`
padding: 0px;
margin: 0px;
font-size: 14px;
color: #020202;
`;

export const StatisticsPercentage = styled.span`
padding: 0px;
margin: 0px;
font-size: 14px;
color: #020202;
margin: 4px;
`;
