import SignUp from "./Modals/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import {Route, Routes} from 'react-router-dom'
import HomePage from "./Pages/HomePage.jsx";


function App() {

  return (
    // <Dashboard/>
    <Routes>


    <Route path="/" element={<Dashboard/>}/>

    <Route path="/user" element={<HomePage />}/>

    </Routes>
  )
}

export default App
