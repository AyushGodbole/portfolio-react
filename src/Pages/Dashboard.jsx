// import Login from "../Modals/login.jsx";
import { useSelector } from "react-redux";
import FormTemplate from "../Modals/FormTemplate.jsx";
import Navbar from "./Navbar.jsx";

function Dashboard(){

    const btnClick = useSelector((state)=>state?.auth?.btnClick);
    // console.log(btnClick)

    return(
        <div className=" bg-gradient-to-b from-gray-600 to-black h-screen">
            <div>
                <Navbar/>

                <div className=" flex relative items-center justify-center h-[full]">
                    <img src="/hero.png" alt="hero" className="pointer-events-none select-none"/>
                    <div className=" absolute">
                        {btnClick && <FormTemplate/>}
                    </div>
                </div>

                {/* <Login/> */}
            </div>
        </div>
    )
}

export default Dashboard;