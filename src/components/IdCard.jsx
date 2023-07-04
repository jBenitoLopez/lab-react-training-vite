/* eslint-disable react/prop-types */
import '../styles/IdCard.css'


function IdCard({ lastName, firstName, gender, height, birth, picture }) {

  return (
    <div className='card' style={{width: "18rem"}}>
      <img src={picture} className="card-img-top" alt={firstName} />

      <div className="card-body">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{gender}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{height}</li>
          <li className="list-group-item">{birth}</li>
          <li className="list-group-item">A third item</li>
        </ul>

      </div>

    </div>
  )
}

export default IdCard;


