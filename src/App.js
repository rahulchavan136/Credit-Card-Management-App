import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CreditCardList from './components/CreditCardList';
import CreditCardDetails from './components/CreditCardDetails';
import CreditCardBillPay from './components/CreditCardBillPay';
import CreditCardPaymentHistory from './components/CreditCardPaymentHistory';
import './App.css';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [payments, setPayments] = useState([]);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const handlePayBill = (amount) => {
    const newPayment = {
      cardName: selectedCard.cardName,
      cardNumber: selectedCard.cardNumber,
      paidAmount: amount,
      remainingAmount: selectedCard.cardRemainingAmount - amount,
      totalLimit: selectedCard.cardLimit,
      timestamp: new Date().toLocaleString(),
    };
    setPayments([...payments, newPayment]);
    setSelectedCard({
      ...selectedCard,
      cardRemainingAmount: newPayment.remainingAmount,
      cardUsedAmount: parseFloat(selectedCard.cardUsedAmount) + parseFloat(amount),
      showPayForm: false
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <CreditCardList onSelectCard={handleSelectCard} />
          </div>
          <div className="col-md-8">
            {selectedCard && (
              <CreditCardDetails card={selectedCard} onPayBill={() => setSelectedCard({ ...selectedCard, showPayForm: true })} />
            )}
            {selectedCard && selectedCard.showPayForm && (
              <CreditCardBillPay card={selectedCard} onPay={handlePayBill} />
            )}
            {payments.length > 0 && (
              <CreditCardPaymentHistory payments={payments} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
