import profiles from "../data/berlin.json"

function FaceBookCard({ firstName, lastName, country, img, isStudent, highlight }) {
  return (
    <div id='card-it13' className={`card ${highlight ? 'highlight':''}`} >
      <div className="card-image">
        <img src={img} className="card-img-top" alt={firstName} />
      </div>
      <div className="card-body">
        <div className="card-item"><span className="card-label">First name: </span>{firstName}</div>
        <div className="card-item"><span className="card-label">First name: </span>{lastName}</div>
        <div className="card-item"><span className="card-label">country: </span>{country}</div>
        <div className="card-item"><span className="card-label">Type: </span>{isStudent ? 'Student' : 'Teacher'}</div>
      </div>
    </div>
  )
}

export default FaceBookCard;


