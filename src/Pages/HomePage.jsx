import { useEffect, useState } from 'react';
import '../../src//index.css';
import About from './About';
import Know from './Know';
import MainSection from './MainSection';
import Pageloader from '../Loader/Pageloader.jsx';
import NewNavbar from './NewNavbar.jsx';
import Project from './Project.jsx';

function Homepage(){

    // loader state
    const [loading,setIsloading] = useState(true);

    useEffect(()=>{
        const timer = ()=>{
            setTimeout(()=>{
                setIsloading(false);
            },700);
        }

        timer();
    },[])

    return loading ? <Pageloader /> : (
            <section className="homepage text-white h-screen" id='home'>
                <section className='page1'>
                    {/* <Navbar /> */}
                    <NewNavbar/>
                    <MainSection />
                    <About />
                    <Know />
                    <Project/>
                </section>
            </section>
        )
}

export default Homepage;