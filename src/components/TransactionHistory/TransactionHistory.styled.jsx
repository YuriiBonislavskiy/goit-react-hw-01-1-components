import styled from 'styled-components';

export const TransactionsContainer = styled.section`
  width: auto;
  max-width: 48vw;
  min-width: 300px;
  background-color: #e8ebf1;
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const TransactionsTitle = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  color: #1f1f1f;
  margin-bottom: 12px;
`;

export const TransactionsHistoryTable = styled.table`
  padding: 0px;
  margin: 0px;
  width: 48vw;
  min-width: 300px;
  text-align: center;
  font-size: 18px;
  border: solid 1px #ffffff;
`;

export const TransactionsTableHeaderRow = styled.tr`
  width: 16vw;
  min-width: 100px;
  background-color: #03bdd5;
  color: #ffffff;
`;

const setBgColor = ({$rowNumber}) => {
    // console.log(props.rowNumber);
    if (($rowNumber % 2) === 0) {
        return '#ffffff';
      }
}

export const TransactionsTableBodyRow = styled.tr`
  width: 16vw;
  min-width: 100px;
  color: #7d8797;
  background-color: ${setBgColor};
`;
