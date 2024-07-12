import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CreditCardDetails = ({ card, onPayBill }) => {
  return (
    <Card>
      <Card.Header>Credit Card Details</Card.Header>
      <Card.Body>
        <Card.Text>Credit card name: {card.cardName}</Card.Text>
        <Card.Text>Credit card number: {card.cardNumber}</Card.Text>
        <Card.Text>Credit card limit: {card.cardLimit}</Card.Text>
        <Card.Text>Credit card remaining amount: {card.cardRemainingAmount}</Card.Text>
        <Card.Text>Credit card used amount: {card.cardUsedAmount}</Card.Text>
        <Card.Text>Credit card type: {card.cardType}</Card.Text>
        <Card.Text>Credit card bill date: {card.cardBillDate}</Card.Text>
        <Card.Text>Credit card due date: {card.cardDueDate}</Card.Text>
        <Button onClick={onPayBill}>Pay Bill</Button>
      </Card.Body>
    </Card>
  );
};

export default CreditCardDetails;
