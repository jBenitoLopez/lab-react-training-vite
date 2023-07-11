import React, { useState } from 'react'
import profilesJson from "../data/berlin.json"
import FaceBookCard from './FaceBookCard'

const countryList =  Array.from(
  profilesJson.reduce((acc, cur) => acc.add(cur.country), new Set())
);


function FaceBook() {
  const [profiles, setProfiles] = useState([...profilesJson])
  const [countryHighlight, setCountryHighlight] = useState('')

  const handlerClickHighlighting = (country ) => {
    if(country=='All'){
      setCountryHighlight('');
    } else {
      setCountryHighlight(country);
    }
  }

  return (
    <div className='facebook'>
      <div className='botonera botonera-tiny'>
      <button key='All' className='button mr-1' onClick={()=>handlerClickHighlighting('All')}>Clear All</button>
        {
          countryList.map(country => <button key={country} className={`button ${country===countryHighlight?'selected':''}`} onClick={()=>handlerClickHighlighting(country)}>{country}</button>)
        }
      </div>
      {
        profiles
          .map((profil) => <FaceBookCard 
            key={profil.firstName + profil.lastName}
            firstName={profil.firstName}
            lastName={profil.lastName}
            country={profil.country}
            img={profil.img}
            isStudent={profil.isStudent}
            highlight={profil.country === countryHighlight}
          />)
      }

    </div>
  )
}

export default FaceBook;
