import { useDispatch } from "react-redux";
import { click } from "../Redux/Slices/Authslice";
import React, { useEffect, useState } from "react";
import {auth} from '../Firebase/Firebase.js';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function SignUp(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userInput,setUserInput] = useState({
        email:"",
        displayName:'',
        password:'',
    });

    // firebase signup function
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;

        console.log('change',value);

        setUserInput({
            ...userInput,
            [name] : value,
        });
    }

    const registerUser = async(event)=>{
        event.preventDefault();

        if(!userInput.email||!userInput.displayName||!userInput.password){
            toast.error('please fill all details');
            return
        }

        try {

            const toastId = toast.loading("wait registering");

            const newUser = await createUserWithEmailAndPassword(userInput.email,userInput.password);

            if(!newUser){
                // console.log(error.message);
                toast.error(error?.message);
                return;
            }

            toast.success("registration done successfully");
            navigate('/user');
            // dismiss loader after registraton done
            toast.dismiss(toastId);
            
        } catch (error) {
            alert(error.message);
        }
    }

    function handleClick(value){
        // console.log('val',value);
        dispatch(click({value}));
    }


    return(
        <form onSubmit={registerUser} className="px-6 pt-2 pb-4">
            <div className=" flex flex-col gap-2">
            <h1 className=" py-5 text-xl font-medium text-white">Register to leetclone</h1>
            <div>
                <label htmlFor="email" className=" text-sm font-medium block mb-2 text-gray-300">
                    Email
                </label>
                <input type="email" onChange={handleInputChange} value={userInput.email} name="email" id="email" placeholder="abc@example.com" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-[#ded4d4] placeholder-gray-600 text-gray-600"/>
            </div>

            <div>
                <label htmlFor="displayName" className=" text-sm font-medium block mb-2 text-gray-300">
                    Display Name
                </label>
                <input type="text" onChange={handleInputChange} value={userInput.displayName} name="displayName" id="displayName" placeholder="Ayush_God" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"/>
            </div>

            <div>
                <label htmlFor="password" className=" text-sm font-medium block mb-2 text-gray-300">
                    Your password
                </label>
                <input type="password" onChange={handleInputChange} value={userInput.password} name="password" id="password" placeholder="********" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-[#ded4d4] placeholder-gray-600 text-gray-600"/>
            </div>

            <div className="py-5">
                <button
				    type='submit'
				    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-500 hover:text-white
                '
			    >
				    {/* {loading ? "Loading..." : "Log In"} */}Register
			    </button>
            </div>

			<div className='text-sm font-medium text-gray-300'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("login")}>
					Log in
				</a>
			</div>
            </div>
        </form>
    )
}

export default SignUp;