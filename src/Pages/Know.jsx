import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodingninjas,
    SiCodechef,
  } from "react-icons/si";

  import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
  } from "react-icons/di";
  import {
    SiFirebase,
    SiNextdotjs,
    SiExpress,
    SiCss3,
    SiC,
  } from "react-icons/si";
  import { AiFillHtml5 } from "react-icons/ai";
  import { FaGit, FaGithub } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";

function Know(){
    return(
        <section className="know-skills">
            <section className="know-section flex px-28 pt-36 gap-[9.5rem]">
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

        <section className="skills pt-36 pb-[5rem] px-28 text-white flex flex-col gap-8">
            <h1 className="head text-4xl text-center" id="skill">Professional <span className=" text-[#4444ef]">Skillset</span></h1>
            <div class="container-one">
                <div class="cont">
                    <SiC className="images"/>
                </div>
                <div class="cont">
                    <CgCPlusPlus className="images"/>
                </div>
                <div class="cont">
                    <AiFillHtml5 className="images"/>
                </div>
                <div class="cont">
                    <SiCss3 className="images"/>
                </div>
                <div class="cont">
                    <DiJavascript1 className="images"/>
                </div>


                <div class="cont">
                    <DiMongodb className="images"/>
                </div>
                <div class="cont">
                    <SiExpress className="images"/>
                </div>
                <div class="cont">
                    <DiReact className="images"/>
                </div>
                <div class="cont">
                    <DiNodejs className="images"/>
                </div>
                <div class="cont">
                    <SiNextdotjs className="images"/>
                </div>


                <div class="cont">
                    <SiFirebase className="images"/>
                </div>
                <div class="cont">
                    <FaGit className="images"/>
                </div>
                <div class="cont">
                    <FaGithub className="images"/>
                </div>
                <div class="cont">
                    <DiPython className="images"/>
                </div>
            </div>
        </section>



        <section className="skills pb-36 px-28 text-white flex flex-col gap-8">
            <h1 className="head text-4xl text-center" id="skill"><span className=" text-[#4444ef]">Tools </span>I use</h1>
            <div class="container-one">
                <div class="cont">
                    <SiVisualstudiocode className="images"/>
                </div>
                <div class="cont">
                    <SiLeetcode className="images"/>
                </div>
                <div class="cont">
                    <SiCodechef className="images"/>
                </div>
                <div class="cont">
                    <SiCodingninjas className="images"/>
                </div>
                <div class="cont">
                    <SiGeeksforgeeks className="images"/>
                </div>


                <div class="cont">
                    <SiSlack className="images"/>
                </div>
                <div class="cont">
                    <SiPostman className="images"/>
                </div>
                {/* <div class="cont">
                    <SiVercel className="images"/>
                </div> */}
            </div>
        </section>
        </section>
    )
}

export default Know;