import './Styles.css'
import visaLogo from '../assets/images/visa.png'
import masterCardLogo from '../assets/images/master-card.svg'
const CardTypeLogo = {
  'Visa': visaLogo,
  'Master Card': masterCardLogo
}

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  if(!['Visa','Master Card'].includes(type)) return
  if(!(expirationMonth >= 1 && expirationMonth <= 12)) return
  

  const numberFormated = formatCredicardNumber(number);

  return (
<>
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
      <img className="credit-logo" src={CardTypeLogo[type]} alt={type} />
      <div className="credit-number">{numberFormated}</div>
      <div className="credit-details">
        <div className="credit-expiration">
          <span>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</span>
          <span className='ml-2'>{bank}</span>
        </div>
        <div className="credit-owner">{owner}</div>
      </div>
    </div>
    </>
  )
}

function formatCredicardNumber(cardNumber){
  const cardNumberStr = cardNumber.toString().split('');
  const cardNumberLength = cardNumberStr.length;
  let result = '';

  for (let i = 0; i < cardNumberLength; i++) {
    result += (i < cardNumberLength - 4) ? '•' : cardNumberStr[i]

    if((i+1) % 4 === 0)

    result += ' ';   
  }
  return result
}


/**
 * Get color (black/white) depending on bgColor so it would be clearly seen.
 * @param bgColor
 * @returns {string}
 */
function getColorByHexColor(color) {
  if (!color) { return ''; }
  return (parseInt(color.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff';
}

export default CreditCard