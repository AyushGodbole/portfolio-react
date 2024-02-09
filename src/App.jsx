import SignUp from "./Modals/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    // <Dashboard/>
    <Routes>


    <Route path="/" element={<Dashboard/>}/>

    {/* <Route path="/register" element={<SignUp />}/> */}

    </Routes>
  )
}

export default App
