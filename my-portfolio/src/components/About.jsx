import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

function About(){
 return(
    <div>
        <div className="littleaboutme">
            <p className="aboutme">About Me</p>
            <p className="aboutmesub">My name is Tiegist Girma, and I am a dedicated software engineering student at Wollo University. With a passion for technology and a strong commitment to learning, I am on track to graduate in 2025.</p>
            <p className="skills">Skills</p>
            <p className="skillssub">Programming Languages: </p>
            <p className="javalogodiv"><TbBrandJavascript className="javalgo" />Javascript</p>
            <p className="sqldiv"><DiMsqlServer className="sql" />SQL</p>

<p className="skillssub2">Web Development:</p>
<p className="reactp"><FaReact className="react" />React</p>
<p className="html5p"><FaHtml5 className="html5p" />HTML5</p>
<p className="cssp"><FaCss3Alt className="css" />CSS3</p>
<p className="Jsp"><BiLogoJavascript className="js" />JS</p>


        </div>
    </div>
);
}
export default About;

{/* <p>
 [List of web development technologies you are familiar with]
Software Development: [List of software development methodologies and tools you have experience with]
Problem Solving: [Highlight your problem-solving abilities]
Teamwork:</p> */}