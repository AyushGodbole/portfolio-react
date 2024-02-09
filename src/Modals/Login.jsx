import { useDispatch } from "react-redux";
import { click } from "../Redux/Slices/Authslice";
import { useState } from "react";
import {auth} from '../Firebase/Firebase.js';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput,setUserInput] = useState({
        email:'',
        password:'',
    });

    // firebase signin function
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleClick(value){
        dispatch(click({value}));
    }

    const handleInputChange = (e)=>{
        const {name,value} = e.target;

        setUserInput({
            ...userInput,
            [name]:value,
        })
    }

    const login = async(event)=>{
        event.preventDefault();

        if(!userInput.email||!userInput.password){
            toast.error('please fill all details');
            return
        }

        if(!userInput.email || !userInput.password){
            toast.error("all fields are mandatory!");
            return;
        }

        try {

            const toastId = toast.loading("logging in...");

            const newUser = await signInWithEmailAndPassword(userInput.email,userInput.password);

            if(!newUser){
                // console.log(error.message);
                toast.error(error?.message);
                return;
            }

            toast.success("log in successfully");
            navigate('/user');
            // dismiss loader after registraton done
            toast.dismiss(toastId);
            
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <form onSubmit={login} className="px-6 pt-2 pb-4">
            <div className=" flex flex-col gap-2">
            <h1 className=" py-5 text-xl font-medium text-white">Signin to leetclone</h1>
            <div>
                <label htmlFor="email" className=" text-sm font-medium block mb-2 text-gray-300">
                    Email
                </label>
                <input type="email" onChange={handleInputChange} value={userInput.email} name="email" id="email" placeholder="abc@example.com" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-[#ded4d4] placeholder-gray-600 text-gray-600"/>
            </div>

            <div>
                <label htmlFor="password" className=" text-sm font-medium block mb-2 text-gray-300">
                    Your password
                </label>
                <input type="password" onChange={handleInputChange} value={userInput.password} name="password" id="password" placeholder="********" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"/>
            </div>

            <div className="py-5">
                <button
				    type='submit'
				    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-500 hover:text-white
                '
			    >
				    {/* {loading ? "Loading..." : "Log In"} */}Log In
			    </button>
            </div>
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-green-600 hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
			<div className='text-sm font-medium text-gray-300'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
            </div>
        </form>
    )
}

export default Login;