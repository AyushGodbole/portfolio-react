import FormTemplate from "./FormTemplate";

function ResetPassword(){
    return(
        <form className="px-6 pt-2 pb-4">
            <div className=" flex flex-col gap-2">
            <h1 className=" py-5 text-xl font-medium text-white">Reset Password</h1>
            <p className='text-sm text-white '>
				Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
				to<br/> reset it.
			</p>
            <div>
                <label htmlFor="email" className=" text-sm font-medium block mb-2 text-gray-300">
                    Your email
                </label>
                <input type="email" name="email" id="email" placeholder="abc@example.com" className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-gray-600 placeholder-gray-400 text-gray-300"/>
            </div>

            <div className="py-5">
                <button
				    type='submit'
				    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-500 hover:text-white
                '
			    >
			        Reset Password
			    </button>
            </div>

			
            </div>
        </form>
    )
}

export default ResetPassword;