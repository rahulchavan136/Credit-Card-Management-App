import React from 'react';
import { Table } from 'react-bootstrap';

const CreditCardPaymentHistory = ({ payments }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Credit Card Name</th>
          <th>Paid Amount</th>
          <th>Remaining Amount</th>
          <th>Total Limit</th>
          <th>Date and Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => (
          <tr key={index}>
            <td>{payment.cardName}-{payment.cardNumber}</td>
            <td>{payment.paidAmount}</td>
            <td>{payment.remainingAmount}</td>
            <td>{payment.totalLimit}</td>
            <td>{payment.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CreditCardPaymentHistory;
