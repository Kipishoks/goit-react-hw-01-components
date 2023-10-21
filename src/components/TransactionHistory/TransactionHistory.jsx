import PropTypes from 'prop-types';
import {TransactionTable } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>    
    {items.map(({ id, type, amount, currency }) => {
    return (<tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </tr>
            )
        })}
  </tbody>
</TransactionTable>
    )
}          

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        }))
}