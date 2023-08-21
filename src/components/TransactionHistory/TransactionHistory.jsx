import PropTypes from 'prop-types';
import { capitalize } from 'utils';
import {
  TransactionsContainer,
  TransactionsTitle,
  TransactionsHistoryTable,
  TransactionsTableHeaderRow,
  TransactionsTableBodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ title, transactions }) => {
  return (
    <TransactionsContainer>
      {title && <TransactionsTitle>{title}</TransactionsTitle>}
      <TransactionsHistoryTable>
        <thead>
          <TransactionsTableHeaderRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TransactionsTableHeaderRow>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }, index) => (
            <TransactionsTableBodyRow  $rowNumber={index} key={id}>
              <td>{capitalize(type, ', ')}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionsTableBodyRow>
          ))}
        </tbody>
      </TransactionsHistoryTable>
    </TransactionsContainer>
  );
};

TransactionHistory.propTypes = {
  title: PropTypes.string,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
