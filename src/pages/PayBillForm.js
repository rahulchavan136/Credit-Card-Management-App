import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PayBillForm = ({ cards, onPay }) => {
    const [selectedCard, setSelectedCard] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onPay(selectedCard, parseFloat(amount));
        setSelectedCard('');
        setAmount('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Select Card</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedCard}
                    onChange={(e) => setSelectedCard(e.target.value)}
                    required
                >
                    <option value="">Select...</option>
                    {cards.map((card) => (
                        <option key={card.id} value={card.id}>
                            {card.cardNumber} - {card.cardHolder}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Pay Bill
            </Button>
        </Form>
    );
};

export default PayBillForm;
