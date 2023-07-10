import './Styles.css'

// ☆, ★
function Rating({ children }) {

  return (
    <div className='rating'>
      <div className='rating-content'>
        { getRatingStars(children)  } 
      </div>
    </div>

  )
}

function getRatingStars(ratingValue){
  const rating = Math.round(+ratingValue);
  let result = '';

  for (let i = 0; i < 5; i++) {
    if(i >= rating)
      result += '☆'
    else
      result += '★'
  }

  return result
}

export default Rating