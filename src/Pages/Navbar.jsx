import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className=' flex items-center justify-between sm:px-12 md:px-24 px-2'>
            <Link to='/' className=' flex items-center justify-center'>
                <img src="logo.png" alt="leetclone" className=' relative right-10 h-[16vh]'/>
            </Link>

            <div className=' flex items-center'>
                <button className=' bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md outline-none text-sm font-medium hover:bg-white hover:outline-none hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition-all duration-300 ease-in-out'>Signup</button>
            </div>
        </div>
    )
}

export default Navbar;