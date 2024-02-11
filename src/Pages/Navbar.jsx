// import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../../src//index.css';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillBell,
  } from "react-icons/ai";

import {CgGitFork , CgFileDocument} from 'react-icons/cg'
// import { Link } from 'react-scroll';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Navbar(){

    // navbar scrolled background
    const [scroll,setSroll] = useState(false);

    const scrolled = ()=>{
        if(window.scrollY>=20){
            setSroll(true);
        }
        else{
            setSroll(false);
        }
    }

    window.addEventListener('scroll', scrolled);

    return (
        <nav className={scroll ? 'navbar-scroll bg-transparent top-0 flex justify-between px-32 py-5 w-full bg-fixed fixed' : 'navbar bg-transparent py-5 flex top-0 justify-between px-32 w-full bg-fixed fixed'}>
            <Link to={'/'} spy={true} smooth={true} offset={50} duration={500} className=' text-2xl'>AG |</Link>
            <ul className='list flex items-center justify-between w-[46%] text-[21px]'>
                <li>
                    <div className='tabs'>
                        <AiOutlineHome/>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </div>
                </li>
                <li>
                    <div className='tabs'>
                        <AiOutlineUser/>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                    </div>
                </li>
                <li>
                    <div className='tabs'>
                        <AiOutlineFundProjectionScreen/>
                        <Link to={'projects'} spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                    </div>
                </li>
                <li>
                    <div className='tabs'>
                        <CgFileDocument/>
                        <Link to={'resume'} spy={true} smooth={true} offset={-100} duration={500}>Resume</Link>
                    </div>
                </li>
                <li>
                <button class='git-btn border bg-[#1f1f35] border-white py-1 px-4 rounded-md hover:bg-purple-800'>
                    <a href="www.google.com" target='_blank'>
                        <div className=' flex'>
                            <CgGitFork/>
                            <AiFillStar/>
                        </div>
                    </a>
                </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;