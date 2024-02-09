import {useSelector,useDispatch} from 'react-redux'
import Login from "./login.jsx";
import { IoCloseSharp } from "react-icons/io5";
import SignUp from './SignUp.jsx';
import { close } from '../Redux/Slices/Authslice.js';
import ResetPassword from '../Modals/ResetPassword.jsx'

function FormTemplate(){

const dispatch = useDispatch();

const type = useSelector((state)=>state?.auth?.type);
// console.log('type',type);

const handleClose= ()=>{
    dispatch(close());
}


return (
    <>
        <div
            className='w-full h-full flex items-center justify-center bg-black bg-opacity-60'
            onClick={handleClose}
        ></div>
        <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-green-400 to-slate-900 mx-6'>
                    <div className='flex justify-center p-2'>
                        <button
                            type='button'
                            className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-white text-white'
                            onClick={handleClose}
                        >
                            <IoCloseSharp className='h-5 w-5' />
                        </button>
                    </div>
                    {type === "login" ? <Login /> : type === "register" ? <SignUp /> : <ResetPassword />}
                </div>
            </div>
        </div>
    </>
);
}

export default FormTemplate;
