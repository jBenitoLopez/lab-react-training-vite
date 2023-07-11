import "./App.css"
import RandomTest from './RandomTest.jsx'
import Iteration01 from './Iteration01/Main.jsx'
import Iteration02 from './Iteration02/Main.jsx'
import Iteration03 from './Iteration03/Main.jsx'
import Iteration04 from './Iteration04/Main.jsx'
import Iteration05 from './Iteration05/Main.jsx'
import Iteration06 from './Iteration06/Main.jsx'
import Iteration07 from './Iteration07/Main.jsx'
import Iteration08 from './Iteration08/Main.jsx'
import Iteration09 from './Iteration09/Main.jsx'
import Iteration10 from './Iteration10/Main.jsx'
import Iteration11 from './Iteration11/Main.jsx'
import Iteration12 from './Iteration12/Main.jsx'
import Iteration13 from './Iteration13/Main.jsx'

function App() {
  return (
    <div className="App">
      {false && <RandomTest />}
      {false && <Iteration01 />}
      {false && <Iteration02 />}
      {false && <Iteration03 />}
      {false && <Iteration04 />}
      {false && <Iteration05 />}
      {false && <Iteration06 />}
      {false && <Iteration07 />}
      {false && <Iteration08 />}
      {false && <Iteration09 />}
      {false && <Iteration10 />}
      {false && <Iteration11 />}
      {false && <Iteration12 />}
      {true && <Iteration13 />}
    </div>
  )
}

// https://github.com/jBenitoLopez/lab-react-training-vite

export default App
