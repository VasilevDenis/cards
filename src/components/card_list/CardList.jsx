import './card_list.css'

function CardList({ cards, selectedCardId }) {
  return (
    <div>
      <h2>Identify the issuer by card number:</h2>
      <ul className="card-list">
        {cards.map((card) => (
          <li
          key={card.id}
          className={selectedCardId === card.id ? "card-item selected-card-item" : "card-item"}
          style={{ backgroundImage: card.backgroundImage }}>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default CardList;
