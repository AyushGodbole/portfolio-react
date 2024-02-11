import {Route, Routes} from 'react-router-dom'
import '../src/index.css'
import Homepage from './Pages/Homepage'


function App() {

  return (
    // <Dashboard/>
    <Routes>


    <Route path="/" element={<Homepage/>}/>


    </Routes>
  )
}

export default App
