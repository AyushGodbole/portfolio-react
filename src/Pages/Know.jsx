function Know(){
    return(
        <section className="know-section flex px-28 py-36 gap-[9.5rem] bg-purple-700">
            <div className="left-know flex flex-col justify-center gap-8">
                <h1 class="head text-4xl px-28">KNOW WHO <span>I'M</span></h1>
                <div className="info text-2xl flex flex-col gap-8 tracking-wider">
                    <p>Hello there! My name is Ayush Godbole from <span>Nagpur,India.</span></p>
                    <p>I'm a third-year student at the Indian Institute of Information Technology, Nagpur.</p>
                    <p>I'm currently on the lookout for a 6-month internship opportunity. It's great to connect with you!</p>
                </div>
            </div>

            <div className="right-know flex justify-center w-[51%]">
                <img src="student.png" alt="" className="student h-[450px]"/>
            </div>
        </section>
    )
}

export default Know;