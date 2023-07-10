import './Styles.css'
import maxence from '../assets/images/maxence.jpg';
import glasesImg from '../assets/images/glases.png';

import ClickablePicture from './ClickablePicture'

function Main() {

  return (
    <div className='main'>
      <ClickablePicture
        img={maxence}
        imgClicked={glasesImg}
      />
    </div>
  )
}

export default Main