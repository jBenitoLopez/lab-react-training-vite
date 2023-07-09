import './Styles.css'


function BoxColor({ r, g, b }) {

  const hexColor = rgbToHex(r, g, b)
  const textColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff'

  return (
    <div className='card'>
      <div className='card-body p-1' style={{ backgroundColor: hexColor, color: textColor }}>
        <div className='card-item header-4'>{`rgb(${r},${g},${b})`}</div>
        <div className='card-item header-4'>{`${hexColor}`}</div>
      </div>
    </div>

  )
}

function rgbToHex(red, green, blue) {
  if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
    throw new Error('Los valores de los canales de color deben estar en el rango de 0 a 255.')
  }

  const redHex = red.toString(16).padStart(2, '0')
  const greenHex = green.toString(16).padStart(2, '0')
  const blueHex = blue.toString(16).padStart(2, '0')

  const hexColor = `#${redHex}${greenHex}${blueHex}`

  return hexColor
}


export default BoxColor