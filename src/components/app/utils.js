function checkCardValidity(cardNumber, card) {
  // Check the card number length
  const validLengths = card.length;
  const cardLength = cardNumber.length;
  if (!validLengths.includes(cardLength)) {
      return false;
  }

  // Check the card number prefix
  let validPrefix = false;
  for (let i = 0; i < card.startsWith.length; i++) {
      if (cardNumber.startsWith(card.startsWith[i])) {
          validPrefix = true;
          break;
      }
  }
  if (!validPrefix) {
      return false;
  }

  // Luhn Algorithm
  let sum = 0;
  let digit;
  let even = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
      digit = parseInt(cardNumber.charAt(i), 10);
      
      if(even) {
          digit *= 2;
          if(digit > 9) {
              digit -= 9;
          }
      }
      
      sum += digit;
      even = !even;
  }

  return sum % 10 === 0;
}

export default function checkCardIssuer(cards, cardNumber) {
const issuer = cards.find(card => checkCardValidity(cardNumber, card));
  return issuer ? issuer.id : "Unknown card issuer";
}
