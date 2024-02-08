function Login(){
    return(
        <form className=" space-x-6 px-6 py-4">
            <h1 className=" text-xl font-medium text-white">Signup to leetclone</h1>
            <div>
                <label htmlFor="email" className=" text-sm font-medium block mb-2 text-gray-300">
                    your email
                </label>
                <input type="email" name="email" id="email" placeholder="abc@example.com" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"/>
            </div>

            <div>
                <label htmlFor="email" className=" text-sm font-medium block mb-2 text-gray-300">
                    your password
                </label>
                <input type="password" name="password" id="password" placeholder="********" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"/>
            </div>

            <button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            '
			>
				{/* {loading ? "Loading..." : "Log In"} */}Log In
			</button>
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
			<div className='text-sm font-medium text-gray-300'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
        </form>
    )
}

export default Login;