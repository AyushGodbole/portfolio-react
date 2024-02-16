import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Project() {
    const projectItemStyle = {
        border: '1px solid blue',
        padding: '20px',
        margin: '10px',
        boxShadow: 'rgba(11, 4, 220, 0.46) 0px 4px 5px 3px',
        color: 'white',
        backgroundColor: 'transparent',
        opacity: '0.9',
        transition: 'all 0.5s ease 0s',
        height: '100%',
        borderRadius: '5px',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
    };
    

    return (
        <section className="projects" id='projects'>
            <h1 className='text-center'>My recent work</h1>
            <div className="row">
                <div className="col-md-3" id='item'>
                    <div className="project-item" style={projectItemStyle}>
                        <img src="portfolio.png" alt="..." />
                        <div className="">
                            <h5 className=" text-center">Portfolio</h5>
                            <p className="">My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer.</p>
                            <div className='btns'>
                                <a href="https://github.com/AyushGodbole/portfolio-react" target='_blank' className='btn btn-primary'>GitHub</a>
                                <a href="https://65cf31ae9607eca133cf8798--spiffy-dolphin-2d2b26.netlify.app/" target='_blank'>Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3" id='item'>
                    <div className="project-item" style={projectItemStyle}>
                        <img src="portfolio.png" alt="..." />
                        <div className="">
                            <h5 className=" text-center">Portfolio</h5>
                            <p className="">My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer.</p>
                            <div className='btns'>
                                <a href="#">GitHub</a>
                                <a href="#">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3" id='item'>
                    <div className="project-item" style={projectItemStyle}>
                        <img src="portfolio.png" alt="..." />
                        <div className="">
                            <h5 className=" text-center">Portfolio</h5>
                            <p className="">My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer.</p>
                            <div className='btns'>
                                <a href="#">GitHub</a>
                                <a href="#">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3" id='item'>
                    <div className="project-item" style={projectItemStyle}>
                        <img src="portfolio.png" alt="..." />
                        <div className="">
                            <h5 className=" text-center">Portfolio</h5>
                            <p className="">My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer.</p>
                            <div className='btns'>
                                <a href="#">GitHub</a>
                                <a href="#">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Project;
