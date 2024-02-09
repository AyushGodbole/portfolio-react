// import Login from "../Modals/login.jsx";
import { useSelector } from "react-redux";
import FormTemplate from "../Modals/FormTemplate.jsx";
import Navbar from "./Navbar.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();

    const btnClick = useSelector((state)=>state?.auth?.btnClick);
    // console.log(btnClick)

    // const [user,loading,error] = useAuthState(auth);
    // const [ispageLoading,setPageLoading] = useState(true);

    // useEffect(()=>{
    //     if(user) navigate('/user');
    //     if(!ispageLoading && !user) setPageLoading(false); 
    // },[user,ispageLoading])

    // if(ispageLoading) return null;

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