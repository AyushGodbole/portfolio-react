import { useState } from "react";
import { AiFillStar, AiOutlineFundProjectionScreen, AiOutlineHeatMap, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { Link } from "react-scroll";

function NewNavbar(){

    const [clicked,setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked);
    }

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

    return(
        <nav className={scroll ? 'newnav-scroll w-[100%] top-0 flex justify-between px-20 py-5 bg-fixed fixed' : 'newnav w-[100%] py-5 flex top-0 justify-between px-20 bg-fixed fixed'}>
            <a href="/">
                <svg id="logo-39" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" class="ccompli2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" class="ccustom"></path> <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" class="ccompli2" fill-opacity="0.3"></path> </svg>
            </a>
            <div className="list-items">
                <ul className={clicked?"newnavbar" : "newnavbar-active"}>
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
                        <Link to={'skill'} spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
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
            </div>

            <div id="mobile" className=" text-white hidden" onClick={handleClick}>
                <i id="i" className={clicked?"fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    )
}

export default NewNavbar;