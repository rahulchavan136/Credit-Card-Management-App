import React from 'react';
import { Table, Button } from 'react-bootstrap';

const CardList = ({ cards, onDelete, onUpdate }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Card Number</th>
                    <th>Card Holder</th>
                    <th>Expiry Date</th>
                    <th>CVV</th>
                    <th>Limit</th>
                    <th>Balance</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cards.map((card, index) => (
                    <tr key={card.id}>
                        <td>{index + 1}</td>
                        <td>{card.cardNumber}</td>
                        <td>{card.cardHolder}</td>
                        <td>{card.expiryDate}</td>
                        <td>{card.cvv}</td>
                        <td>${card.limit}</td>
                        <td>${card.balance}</td>
                        <td>{new Date(card.dueDate).toLocaleDateString()}</td>
                        <td>
                            <Button variant="warning" onClick={() => onUpdate(card)}>Edit</Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(card.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CardList;
