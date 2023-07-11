import './Styles.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const bday = new Date(birth)
  const bdayOpt = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

  const bdayStr = bday.toLocaleDateString('en-US', bdayOpt).replaceAll(',', '')

  return (
    <div id='card-it01' className='card'>
      <div className="card-image">
        <img src={picture} className="card-img-top" alt={firstName} />
      </div>
      <div className="card-body">
        <div className="card-item"><span className="card-label">First name: </span>{firstName}</div>
        <div className="card-item"><span className="card-label">First name: </span>{lastName}</div>
        <div className="card-item"><span className="card-label">Gender: </span>{gender}</div>
        <div className="card-item"><span className="card-label">Height: </span>{height}</div>
        <div className="card-item"><span className="card-label">Birth: </span>{bdayStr}</div>
      </div>
    </div>
  )
}

export default IdCard;


