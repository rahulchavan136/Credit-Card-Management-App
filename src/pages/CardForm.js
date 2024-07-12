import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CardForm = ({ onAdd }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [limit, setLimit] = useState('');
    const [balance, setBalance] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            cardNumber,
            cardHolder,
            expiryDate,
            cvv,
            limit: parseFloat(limit),
            balance: parseFloat(balance),
            dueDate
        };
        onAdd(newCard);
        setCardNumber('');
        setCardHolder('');
        setExpiryDate('');
        setCvv('');
        setLimit('');
        setBalance('');
        setDueDate('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Card Holder</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter card holder name"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Limit</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter card limit"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Balance</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter card balance"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Card
            </Button>
        </Form>
    );
};

export default CardForm;
