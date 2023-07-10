import './Styles.css'
import visaLogo from '../assets/images/visa.png'
import masterCardLogo from '../assets/images/master-card.svg'
import Rating from '../Iteration06/Rating'

function DriverCard({ name, rating, img, car }) {

  console.log('object :>> ', { name, rating, img, car });
  if (!(rating >= 1 && rating <= 5)) return

  return (
    <>
      <div className="driver-card">
        <img className="driver-img" src={img} />
        <div className="driver-content">
          <div className="driver-name">{name}</div>
          <div className="driver-rating">
            <Rating rating={rating} />
            </div>
          <div className="driver-details">
            <div className="driver-model">{car.model}</div> - 
            <div className="driver-license-plate">{car.licensePlate}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DriverCard