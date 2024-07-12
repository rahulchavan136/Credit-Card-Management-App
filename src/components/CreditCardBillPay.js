import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const CreditCardBillPay = ({ card, onPay }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onPay(amount);
  };

  return (
    <Card>
      <Card.Header>Pay Credit Card Bill</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAmount">
            <Form.Label>Enter amount to pay</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </Form.Group>
          <Button variant="primary" type="submit">Pay Bill</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreditCardBillPay;
