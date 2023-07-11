import React, { useState } from 'react'

import profilesJson from "../data/berlin.json"

import FaceBookCard from './FaceBookCard'

function FaceBook() {

  const [profiles, setProfiles] = useState([...profilesJson])
  return (
    <div className='facebook'>
      {
        profiles
          .map((profil) => <FaceBookCard
            key={profil.firstName + profil.lastName}
            firstName={profil.firstName}
            lastName={profil.lastName}
            country={profil.country}
            img={profil.img}
            isStudent={profil.isStudent}
          />)
      }

    </div>
  )
}

export default FaceBook;


