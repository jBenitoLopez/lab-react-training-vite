import './Styles.css'
import Rating from './Rating'

function Main(params) {

  return (
    <div className='main'>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  )
}

export default Main