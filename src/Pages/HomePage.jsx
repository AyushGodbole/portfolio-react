import { useEffect, useState } from 'react';
import '../../src//index.css';
import About from './About';
import Know from './Know';
import MainSection from './MainSection';
import Navbar from './Navbar';
import Skills from './Skills';
import Pageloader from '../Loader/Pageloader.jsx';

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
                    <Navbar />
                    <MainSection />
                    <About />
                    <Know />
                    <Skills />
                </section>
            </section>
        )
}

export default Homepage;