// import React, { useState, useEffect } from 'react';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import axios from 'axios';

// const CreditCardList = ({ onSelectCard }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.PUBLIC_URL}/data/card.json`)
//       .then(response => setCards(response.data))
//       .catch(error => console.error('Error fetching card data:', error));
//   }, []);

//   return (
//     <DropdownButton id="dropdown-basic-button" title="Select Credit Card">
//       {cards.map(card => (
//         <Dropdown.Item key={card.cardNumber} onClick={() => onSelectCard(card)}>
//           {card.cardName} - {card.cardNumber}
//         </Dropdown.Item>
//       ))}
//     </DropdownButton>
//   );
// };

// export default CreditCardList;


import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

const CreditCardList = ({ onSelectCard }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/cards`)
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching card data:', error));
  }, []);

  return (
    <DropdownButton id="dropdown-basic-button" title="Select Credit Card">
      {cards.map(card => (
        <Dropdown.Item key={card.cardNumber} onClick={() => onSelectCard(card)}>
          {card.cardName} - {card.cardNumber}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default CreditCardList;
