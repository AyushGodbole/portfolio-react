// import Login from "../Modals/login.jsx";
import FormTemplate from "../Modals/FormTemplate.jsx";
import Navbar from "./Navbar.jsx";

function Dashboard(){
    return(
        <div className=" bg-gradient-to-b from-gray-600 to-black h-screen">
            <div>
                <Navbar/>

                <div className=" flex relative items-center justify-center h-[full] pointer-events-none select-none">
                    <img src="/hero.png" alt="hero" />
                    <div className=" absolute bg-gradient-to-b from-brand-orange to-slate-900">
                        <FormTemplate/>
                    </div>
                </div>

                {/* <Login/> */}
            </div>
        </div>
    )
}

export default Dashboard;