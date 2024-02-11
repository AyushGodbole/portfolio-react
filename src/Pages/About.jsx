function About(){
    return(
        <section id="about" className=" flex px-28 py-36 gap-[9.5rem]">
            <div className="left-about flex flex-col justify-center gap-8">
                <h1 class="text-4xl px-28">LET ME <span>INTRODUCE</span> MYSELF</h1>
                <div className=" text-2xl flex flex-col gap-8 tracking-wider">
                    <p>I'm deeply passionate about programming and have developed a strong affinity for it over time.</p>
                    <p>Proficient in <span>C++, DSA, and JavaScript</span>, I excel in crafting innovative web technologies and products.</p>
                    <p>With a focus on <span>problem-solving</span>, I've tackled over 500 challenges online, pushing the boundaries of <span>web development.</span></p>
                    <p>Using tools like <span>Node.js, React.js, and Next.js</span>, I create impactful products, navigating the digital landscape with finesse.</p>
                </div>

            </div>

            <div className="right-about flex justify-center w-[51%]">
                <img src="boy.png" alt="" className=" h-[450px]"/>
            </div>
        </section>
    )
}

export default About;