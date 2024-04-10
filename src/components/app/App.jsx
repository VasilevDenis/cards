import CardsList from '../card_list/CardList';
import Form from '../form/Form'
import { useState } from 'react';
import './app.css'
import checkCardIssuer from './utils';
import cards from './cards'


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);
  

  const handleChange = (e) => {
      setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const cardIsshuerId = checkCardIssuer(cards, inputValue);
      setSelectedCardId(cardIsshuerId);
  };

  return (
    <div className='app'>
      <CardsList
      cards={cards}
      selectedCardId={selectedCardId}
      />
      <Form
      inputValue={inputValue}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      />
    </div>
  )
}
