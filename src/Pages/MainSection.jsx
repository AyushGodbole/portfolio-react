import Typewriter from 'typewriter-effect';

function MainSection(){

    return(
        <section className="main-section flex flex-wrap items-center justify-between px-56 py-[8rem]">
            <section className="left-part text-3xl text-white flex flex-col gap-5 tracking-wider">
                {/* Hi there ayush godbole here <span className="text-[#4444ef] font-semibold">AYUSH</span> */}
                <h1 className="head text-5xl">
                    Hi There! <span className='hand-wave'>👋🏻</span>
                </h1>
                <p className="name text-4xl">I'M <span className="text-[#4444ef] font-semibold">Ayush Godbole</span>
                </p>
                <span className='text-[#4444ef] pt-9 text-4xl'>
                    <Typewriter
                    options={{
                        strings:['Mern Stack Developer','Full Stack Developer','Software Developer'],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:40
                    }}
                    />
                </span>
            </section>

            <section className="right-part">
                <img src="Coding.png" alt="" className="code h-[25rem]"/>
            </section>
        </section>
    )
}

export default MainSection;