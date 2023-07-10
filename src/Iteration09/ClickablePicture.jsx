import React, { useState } from 'react'
import './Styles.css'


function ClickablePicture({img, imgClicked}) {

  const [showImage, setShowImage] = useState(false)


  return (
    <div className='picture' onClick={() => setShowImage(!showImage)}>
      <img className='picture-fondo' src={img} />
      {showImage && <img className='picture-glases' src={imgClicked} />}
    </div>
  )
}




export default ClickablePicture