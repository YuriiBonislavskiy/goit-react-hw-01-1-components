import styled from 'styled-components';
import { themes } from 'utils';

export const TransactionsContainer = styled.section`
  width: auto;
  max-width: 48vw;
  min-width: 300px;
  background-color: ${themes.color.color6};
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const TransactionsTitle = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: ${themes.color.color3};
  margin-bottom: 12px;
`;

export const TransactionsHistoryTable = styled.table`
  padding: 0px;
  margin: 0px;
  width: 48vw;
  min-width: 300px;
  text-align: center;
  font-size: 18px;
  border: solid 1px ${themes.color.color9};
`;

export const TransactionsTableHeaderRow = styled.tr`
  width: 16vw;
  min-width: 100px;
  background-color: #03bdd5;
  color: ${themes.color.color9};
`;

const setBgColor = ({ $rowNumber }) => {
  // console.log(props.rowNumber);
  if ($rowNumber % 2 === 0) {
    return themes.color.color9;
  }
};

const setBrdColor = ({ $rowNumber }) => {
  // console.log(props.rowNumber);
  if ($rowNumber % 2 !== 0) {
    return themes.color.color9;
  }
  return themes.color.color6;
};

export const TransactionsTableBodyRow = styled.tr`
  width: 16vw;
  min-width: 100px;
  color: ${themes.color.color10};
  background-color: ${setBgColor};

  td {
    border: solid 1px ${setBrdColor};
  }
`;
