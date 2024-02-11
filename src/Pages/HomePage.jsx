import '../../src//index.css';
import About from './About';
import Know from './Know';
import MainSection from './MainSection';
import Navbar from './Navbar';
import Skills from './Skills';

function Homepage(){
    return (
        <section className="homepage text-white h-screen" id='home'>
            <section className='page1'>
                <Navbar/>
                <MainSection/>
                <About/>
                <Know/>
                <Skills/>
            </section>
        </section>
    )
}

export default Homepage;