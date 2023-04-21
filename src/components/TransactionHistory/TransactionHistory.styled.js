import styled from 'styled-components';

export const Table = styled.table`
  width: 948px;

  border: 1px solid silver;
  box-shadow: 2px 1px 1px silver;
`;

export const TableHead = styled.thead`
  padding: 12px 0;

  background-color: #87ceeb;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;

  & > tr > th {
    padding: 16px 0;
    font-weight: 400;
  }
`;

export const TableBody = styled.tbody`
  text-transform: capitalize;
  font-size: 28px;
  text-align: center;
  color: #808080;

  & > tr:nth-child(odd) {
    background-color: #ffffff;
  }

  & > tr > td {
    padding: 16px 0;
  }
`;

/* <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>; */
