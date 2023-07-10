import React, { useState, useEffect } from 'react'

function Carousel({ images }) {

  const [active, setActive] = useState(0)
  const [autoSlide, setAutoSlide] = useState(false)
  const imagesLength = images.length
  let interval;
  
  const setActiveClass = (indice) => {
    return active == indice ? 'active' : ''
  }

  const handlerClickAutoSlide = () => setAutoSlide(!autoSlide)


  if (autoSlide) {
    interval = setInterval(() => {
      if (active === imagesLength - 1) {
        setActive(0)
      } else {
        setActive(active + 1)
      }
    }, 2000)
  } else {
    if(interval) {
      clearInterval(interval)
    }
   
    // setActive(0)
  }

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {
          images.map(((url, idx) => (
            <div key={url} className={`carousel-slide ${setActiveClass(idx)}`}>
              <img src={url} alt="Imagen" />
            </div>
          )))
        }
      </div>

      <div className="carousel-controls">
        {
          images.map((url, idx) => (
            <div
              key={url}
              className={`carousel-control ${setActiveClass(idx)}`}
              onClick={() => setActive(idx)}
            ></div>
          ))
        }
      </div>
      <div className='carousel-auto'>
        <button onClick={handlerClickAutoSlide} style={{color: autoSlide?'orange':'white'}} >Auto Slide</button>
      </div>
    </div>
  )

}

export default Carousel