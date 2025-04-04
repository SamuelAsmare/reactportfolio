import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import {toviewaboutme, toviewcontact,toviewservices,toviewskills,toviewprojects} from './navigation.jsx';
import '@fontsource/roboto'; // Default weight is 400.
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faNode,
  faGit,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons"; 
import {
  faHome,
  faUser,
  faLaptopCode,
  faBriefcase,
  faProjectDiagram,

} from "@fortawesome/free-solid-svg-icons";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons
function App() {
    const [loaded,setloaded] = useState(false);
  useEffect(() => {
    document.getElementById('body').style.overflow =loaded? "" : "hidden";
   setTimeout(() =>{
      setloaded(true);
       document.getElementById('body').style.overflowY='auto';
   },3000)
  }
  
  ,[]);
   return (
     !loaded?(
     <div id="loadercontainer"><div id="lds-ripple"><div></div><div></div></div></div>
   ): (
     <div id="app">
      <div id="hea">
        <div id="navs"  title="home">
        <a href="#" style={{textDecoration:"none",}} id="navs"> <FontAwesomeIcon icon={faHome} /></a>
       </div>
       <div id="navs" title="aboutme" onClick={toviewaboutme}>
       <FontAwesomeIcon icon={faUser} />
       </div>
      <div id="navs" onClick={toviewservices}>
       <FontAwesomeIcon icon={faBriefcase} />
       </div>
       <div id="navs" onClick={toviewskills} >
        <FontAwesomeIcon icon={faLaptopCode} />
       </div>
       <div id="navs" onClick={toviewprojects}>
      <FontAwesomeIcon icon={faProjectDiagram} />
       </div>
       <div id="navs" onClick={toviewcontact}>
      <FontAwesomeIcon icon={faEnvelope} />
       </div>
      </div>

      <div id="homepage">
       
          <div style={{
            padding:"0px",
            width:"100%",


         }}>
             <h1 className="text-center p-3 mb-5 mt-4 fw-bold " id="craft"
              >
              I am Samuel Asmare
             </h1>
         </div>
         
         <div style={{
            paddingBottom:"10px",
            width:"90%",
            fontSize:"30px",
              fontFamily: "'Nunito', sans-serif"

         }}>
            <h3 className="text-center fs-3 p-0 ">
          Frontend Developer | Tech Enthusiast | UI/UX Designer,
         </h3>
         </div>
         <div style={{
            padding:"0px",
            width:"100%",
            fontFamily:"font-family: 'Nunito', sans-serif;",

         }}>
            <h3 className="text-center fs-12 pt-0 p-lg-5 p-lg- p-md-2" id="nam">
          I'm a skilled Frontend developer focused on creating tailored web solutions. I deliver seamless applications that meet your needs, making me your trusted partner for web development and different problem soloving projects.
         </h3>
         </div>
         <div style={{
            padding:"0px",
            width:"100%",
            fontFamily:"font-family: 'Nunito', sans-serif;",

         }}>
         </div>
         
         <div id="buttons">
            <a href= "./CV.pdf"  download="Samuel Asmare CV.pdf" ><button id="portfolio">
              Download CV
            </button></a>
            
            <button id="connect" onClick={toviewcontact}>
              Let's Connect
            </button>
            {/* <img id="github" src="./git.png">
              
            </img>
            <img id="linkedin" src="./lin.png">
            </img> */}
         </div>
          
          <div id="awards">
                  <a href="https://github.com/SamuelAsmare/"style={{ textDecoration:"none",}}><div id= "experianceblocks" style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        gap:"10px",
                        flexWrap:"wrap",
                     }}>
                     <h2 id="icons"
                     style={{
                        fontSize:"25px",
                        fontWeight:"bold",
                       color:"black",
                       textDecoration:"none",
                     
                     }}>&lt; &gt;</h2>
                     <h2 style={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                         textDecoration:"none",
                        color:" rgba(3, 103, 255, 0.801)",
                     }}>5000+</h2>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                         textDecoration:"none",
                            color:"black",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Hours of Coding</h7>
                  </div></a>
                  <a href="https://leetcode.com/u/Sami1_2_21/" style={{ textDecoration:"none",}}><div id= "experianceblocks"  style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        gap:"10px",
                        flexWrap:"wrap",
                     }}>
                     <h2 id="icons"
                     style={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        color:" rgba(3, 103, 255, 0.801)",
                     }}
                     >✓</h2>
                     <h2 style={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:" rgba(3, 103, 255, 0.801)",
                     }}>300+</h2>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                           color:"black",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Problems solved</h7>
                  </div></a>
                   <a href="https://github.com/SamuelAsmare/" style={{ textDecoration:"none",}}><div id= "experianceblocks"  style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        gap:"10px",
                       
                        flexWrap:"wrap",
                     }}>
                     <h2 id="icons" style={{
                        paddingTop:"8px",
                        color:"#ce13d1",
                         fontSize:"30px",
                     }} >◎</h2>
                     <h2 style={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:" rgba(3, 103, 255, 0.801)",
                     }}>30+</h2>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                           color:"black",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Projects completed</h7>
                  </div></a>
                  <a href="https://github.com/SamuelAsmare/" style={{ textDecoration:"none",}}><div id= "experianceblocks"  style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        gap:"10px",
                        flexWrap:"wrap",
                     }}>
                     <h2 id="icons" Style={{
                        fontFamily:"'Nunito', sans-serif",
                        fontSize:"0px",
                        paddingTop:"0px",
                     }}>&#9889;</h2>
                     <h2 style={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:" rgba(3, 103, 255, 0.801)",
                     }}>700+</h2>
                     <h7 id ="contribution "style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        color:"black",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Contributions</h7>
                  </div> </a>
          </div>
          </div>
  
  <h1 id="abouttitle" style={{
     textAlign:"center",
     fontSize:"35px",
     fontWeight:"bold",
     marginBottom:"-50px",
        
  }}>
         About Me
       </h1>
      <div id="aboutme">
       
        <div id="photo">
           <img src="./NEWCOPY.JPG" style={{
            width:"100%",
            height:"100%",
            borderRadius:"10px",
           }}></img>
        </div>
          <div id="phone"  style={{
               fontSize:"10px",
               textAlign:"right",
               fontWeight:"bold",
            }} >
               <h3 style={{
                  fontSize:"20px",
               textAlign:"center",
               marginTop:"70px",
               fontWeight:"bold",
            }}>Name: Samuel Asmare</h3>
               <h3 style={{
                   fontSize:"20px",
               textAlign:"center",
               marginTop:"20px",
               fontWeight:"bold",
            }}>Profile: Frontend Developer</h3>
               <h3 style={{
                   fontSize:"20px",
               textAlign:"center",
               marginTop:"20px",
               fontWeight:"bold",
            }}>Email: samuelasmare19@gmail.com</h3>
               <h3 style={{
                   fontSize:"20px",
               textAlign:"center",
               marginTop:"20px",
               fontWeight:"bold",
            }}>Phone: (+251) 928210736</h3>
               <h3 style={{
                   fontSize:"20px",
               textAlign:"center",
               marginTop:"20px",
               fontWeight:"bold",

            }}>Adress: Addis Ababa, Ethiopia</h3>
         
        </div>
        <div id="description" style={{
          textAlign:"center",
          fontFamily: "'Nunito', sans-serif",
        }}>
<h4 style={{
   paddingTop:"20px",
}}>I am a second year Computer Science student at Addis Ababa University.  I am currently developing my skills on designing engaging and user-friendly websites and real life problem solving. As an aspiring frontend developer , I specialize in creating responsive and dynamic websites that focuses on not only aesthetics background but also on functionality.</h4>
        </div>
      
      </div>
      <h1 id="serv">  </h1>
<div>
   <h1 id="serviceheader" style={{
      fontSize:"40px",
      textAlign:"center",
      fontWeight:"bold",
      marginTop:"150px",
      
   }}>
   
      Services
   </h1>
   <h3 style={{
      textAlign:"center",
      fontWeight:"lighter",
      marginTop:"20px",}}>
     Comprehensive solutions for your digital needs
   </h3>

   <div id="services" >
      {/* service 1 */}
       <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        fontSize:"23px",
                        fontWeight:"bold",
                        color:"red",
                        
                     }}>&lt; &gt;</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Website Development</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Building responsive and visually appealing websites using modern frameworks like React, Vue.js, or Angular with HTML, CSS, and JavaScript. Implementing complex features and ensuring optimal performance across all platforms.</h7>
                  </div>
                {/* service 2 */}
         <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        fontSize:"23px",
                        fontWeight:"bold",
                        backgroundColor:"#FFD480",
                     }}>&#x2705;</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>UI/UX Implementation</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
                  
                  {/* service 4 */}
                     <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        paddingTop:"5px",
                        fontSize:"30px",
                        fontWeight:"bold",
                        color:"red",
                         backgroundColor:"  rgb(204, 255, 204)",
                     }}>&#9889;</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
                     }}>Version Control & Collaboration</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                       
                         fontFamily:" 'Nunito', sans-serif",
                     }}>
Managing Git repositories, handling pull requests, and facilitating team collaboration through code reviews. Implementing efficient branching strategies and maintaining clean commit history.</h7>
                  </div>
                  {/* service 5 */}
                   <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        paddingTop:"10px",
                        fontSize:"25px",
                        fontWeight:"bold",
                        backgroundColor:" rgb(204, 255, 204)",
                        color:"blue",
                     }}>◯</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>API Integration</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                       margin:"10px",
                        marginLeft:"30px",
                         fontFamily:" 'Nunito', sans-serif",
                         
                     }}>
Connecting front-end applications with back-end services using RESTful APIs or GraphQL. Implementing secure authentication, real-time data synchronization, and error handling.</h7>
                  </div>
                  {/* service 6 */}
                   <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        fontSize:"23px",
                        fontWeight:"bold",
                        color:"green",
                        backgroundColor:"#FFD480",
                     }}>◑</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Mobile-Responsive Design</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                       margin:"10px",
                        marginLeft:"30px",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>Mobile-Responsive Design
Ensuring cross-browser compatibility and smooth functionality across all devices using modern CSS frameworks. Creating fluid layouts that adapt seamlessly to different screen sizes.</h7>
                  </div>
                  {/* service 7 */}
                   <div id= "eachservice">
                     <h2 id="icons"
                     style={{
                        marginLeft:"30px",
                        fontSize:"23px",
                        fontWeight:"bold",

                        backgroundColor:" rgba(2, 5, 13, 0.8)",
                     }}>&#128161;</h2>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Problem Solving & Algorithms</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                       margin:"10px",
                        marginLeft:"30px",
                         fontFamily:" 'Nunito', sans-serif",
                     }}>
Expertise in data structures and algorithms. Regular contributor to open-source projects and coding challenges on GitHub, LeetCode, CodeForces, and HackerRank.</h7>
                  </div>
                  
   </div>
</div>
     
     {/* Skills  */}
<div id="skillpage">
       <h1  style={{
     textAlign:"center",
     fontSize:"40px",
     fontWeight:"bold",
     marginTop:"150px",
     marginBottom:"0px",
      
  }}>
         Skills

       </h1>
       <h3 style={{
         textAlign:"center",
         fontWeight:"lighter",
         marginTop:"20px",
         fontFamily:"'Lora',serif",
 
       }}>
         Technical expertise and professional capabilities
       </h3>

      <div id="skills">
          <div id="technicalskills">
            
          <div id="html">

            {/* HTML */}
            <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                        paddingTop:"15px",
                        marginLeft:"30px",
                        fontSize:"50px",
                        fontWeight:"bold",                      
                     }}><FontAwesomeIcon icon={faHtml5} color="#E34F26" /></h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  90%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>HTML</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>

            {/* CSS */}
            <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                        paddingTop:"10px",
                        marginLeft:"30px",
                        fontSize:"50px",
                        fontWeight:"bold",
                        color:"white",
                       
                     }}><FontAwesomeIcon icon={faCss3Alt} color="#1572B6" /></h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  87%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>CSS</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
            {/* bootstrap */}
            <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 id="icons"
                     style={{
                        paddingTop:"5px",
                        marginLeft:"30px",
                        fontSize:"35px",
                        color:"white",
                        borderRadius:"10px",
                        fontWeight:"bold",
                        backgroundColor:"#5e09cd",
                     }}>B</h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  90%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>HTML</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
            {/* Js */}
            <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 id="icons"
                     style={{
                        paddingTop:"5px",
                        marginLeft:"30px",
                        fontSize:"35px",
                        
                        borderRadius:"10px",
                        fontWeight:"bold",
                        backgroundColor:"yellow",
                     }}>JS</h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  90%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>HTML</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
               {/*react  */}
               <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                       
                        marginLeft:"30px",
                        fontSize:"50px",
                        color:"white",
                        borderRadius:"10px",
                        fontWeight:"bold",
                     }}>      <FontAwesomeIcon icon={faReact} color="#61DBFB" />
</h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  70%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>HTML</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
                  {/* Git */}
                   <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                        marginLeft:"30px",
                        fontSize:"40px",
                        color:"white",
                        fontFamily: "'Arial', sans-serif",
                        borderRadius:"10px",
                        fontWeight:"bold",
                     }}> <FontAwesomeIcon icon={faGit} color="#F05032" /></h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  70%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>HTML</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
                  {/* github */}
                  <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"180px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                        paddingTop:"0px",
                        marginLeft:"30px",
                        fontSize:"45px",
                        borderRadius:"10px",
                        fontWeight:"bold",
                        
                     }}>  <FontAwesomeIcon icon={faGithub} color="black" /></h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  80%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>Github</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
                  {/* Python */}
                   <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 
                     style={{
                        paddingTop:"10px",
                        marginLeft:"30px",
                        fontSize:"50px",
                        fontWeight:"bold",
                        color:"white",
                         borderRadius:"10px",
                       
                     }}> <FontAwesomeIcon icon={faPython} color="#3776AB" /></h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  87%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>Python</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>
                  {/* C++ */}
                   <div id= "eachskill">
               <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  gap:"170px",
                  marginTop:"10px",
                  marginBottom:"10px",
               }}>
                     <h2 id="icons"
                     style={{
                        paddingTop:"10px",
                        marginLeft:"30px",
                        fontSize:"25px",
                        fontWeight:"bold",
                        color:"white",
                         borderRadius:"10px",
                        backgroundColor:"#108bec",
                     }}>C++</h2>
               <h1 style={{color:"#009BFF",
                  fontWeight:"bold",
               }}>
                  75%
               </h1></div>
                     <h3 style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
               
                     }}>C++</h3>
                     <h7 style={{
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginLeft:"30px",
                        marginRight:"5px",
                         fontFamily:" 'Nunito', sans-serif",
                         color:"black",
                     }}>Translating design files into functional web pages while ensuring accessibility and user-friendly navigation. Creating intuitive interfaces that enhance user experience and engagement.</h7>
                  </div>

            </div>
          </div>
      </div></div>
   {/* projects */}
   <div id="projectspage">
    <h1 style={{
      marginTop:"150px",
      textAlign:"center",
      fontWeight:"bold",
      // fontFamily:"'Nunito', sans-serif"

    }}
    > Featured Projects</h1> 
<h5
style={{
      marginTop:"15px",
      textAlign:"center",
     
      fontFamily:"'Nunito', sans-serif"

    }}
>A selection of my recent works</h5>
   </div>
   <div id="projects">
      {/* Movie app */}
       <div id="eachproject">
         <img src="./elements_files/dd6121e766fd77fe0007e51453405ced.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Movie App</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"45px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        React.js
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"70px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        Movie API
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"80px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        Bootstrap
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
                        Movie browsing application with detailed information and reviews.
                     </h5>
                     <button id="viewtheproject">
                        <a href="https://everymoviesearch.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
       {/* Qrcode scanner */}
    <div id="eachproject">
         <img src=".\elements_files\fe005d6fff320e7ef3dc428c0240d815.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>QR Code Scanner</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"45px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        React.js
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"70px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        HTML5
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"80px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        Canvas
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
                     Fast and efficient QR code scanner that accepts uploaded image and live scanning. 
                     </h5>
                     <button id="viewtheproject">
                        <a href="https://qrcreader.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
       {/* Quiz App */}
        <div id="eachproject">
         <img src="./elements_files\4d47f9bdceaafb3c3ad7aed38460073b.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Quiz App</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"55px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                       JavaScript
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"50px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        HTML5
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"50px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                       CSS3
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
Interactive quiz application with multiple categories and scoring system.                     </h5>
                     <button id="viewtheproject">
                       <a href="https://marvelous-kangaroo-619086.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
       {/* Password Generator */}
      <div id="eachproject">
         <img src="./elements_files/pass2.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Password Generator</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"45px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        React.js
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"50px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        HTML
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"60px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        Bootstrap
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
                     Password Generator application that prompts the user to enter type of characters.
                     </h5>
                     <button id="viewtheproject">
                      <a href="https://samipga.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
       {/* Weather App */}
        <div id="eachproject">
         <img src=".\elements_files\f6a9bf19c5c362c63936ace16be46ca9.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Weather App</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"45px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        React.js
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"100px",
                        textAlign:"center",         
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        OpenWeather API
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"55px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        Bootstrap
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
Real-time weather forecasting app with detailed climate information.                     </h5>
                     <button id="viewtheproject">
                        <a href="https://joyful-crostata-55fbf3.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
       {/* Calculator */}
  <div id="eachproject">
         <img src=".\elements_files\f33d36ed7b0115b6779d7ecf32aa547d.jpg" 
         style={{
            width:"100%",
            height:"50%",
            borderRadius:"10px 10px 0px 0px",
         }}></img>
         <h2 
         style={{
                        fontSize:"20px",
                         marginLeft:"30px",
                         marginTop:"-10px",
                        fontWeight:"bold",
                        fontFamily:"sans-serif",
                        color:"black",
               
                     }}>Calculator</h2>
                     <div id="technologiesused">
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"60px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#99f1b9",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                       JavaScript
                     </h6>
                     <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"50px",
                        textAlign:"center",
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#f0d2f6",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                       HTML5
                     </h6>
                   <h6 style={{
                        fontSize:"10px",
                         marginLeft:"30px",
                        color:"black",
                        width:"50px",
                        textAlign:"center",
                       
                         fontFamily:"'Nunito', sans-serif",
                         backgroundColor:"#cdf7f7",
                         borderRadius:"10px",
                         padding:"5px",
                     }}>
                        CSS3
                     </h6>
                     </div>

                     <h5 
                      style={{
                        fontSize:"16px",
                         marginLeft:"30px",
                        color:"black",
                         fontFamily:"'Nunito', sans-serif"
               
                     }}>
                    Modern calculator with advanced mathematical functions.                  </h5>
                     <button id="viewtheproject">
                      <a href="https://bucolic-profiterole-71fd40.netlify.app/" style={{textDecoration:"none"}}>View project</a>
                     </button>
       </div>
   </div>

   {/* Get in touch */}
  
   <div id="getintouchpage">

      <h1 style={{
         fontSize:"40px",
         fontWeight:"bold",
         color:"black",
         textAlign:"center",
         marginTop:"50px",
      }}>
         Get in Touch
      </h1>
      <h4>Let's discuss your next project</h4>
      <div id="formandcontact">
    
         <form id="form">
           <input type="text" placeholder="Name" id="name" required/>
            <input type="email" placeholder="Email" id="name" required/>
            <input type="text" placeholder="Subject" id="name" required/>
            <textarea placeholder="Message" id="name" required></textarea>
            <input type="submit" id="sendmessage" value="Send Message"/>
         </form>
      
      </div>
   </div> 
   {/*  Contact*/}
   <div id="lastdiv">
      <div id="logo" style={{
         width:"400px",
      }}>
        <h3  style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}}>
         Contact Us
        </h3>
        <h6 style={{fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif",
         textAlign:"center",
         }}>
         Creating innovative digital solutions with a focus on user experience and performance.
        </h6>
        <h4 style={{
            paddingTop: '8px',
            marginLeft: '67x',
             fontSize: '18px',
             text:"center",
            fontWeight: 'bold',
            fontFamily:"'Nunito', sans-serif",
         }}> <FontAwesomeIcon icon={faPhone} />   phone: +(251) 928210736</h4>
          <h4 style={{
            paddingTop: '8px',
             fontSize: '18px',
            fontWeight: 'bold',
            fontFamily:"'Nunito', sans-serif",
         }}><FontAwesomeIcon icon={faEnvelope} /> Email: samuelasmare19@gmail.com</h4>
         <h5 style={{
            paddingTop: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily:"'Nunito', sans-serif",
         }}> <FontAwesomeIcon icon={faLocationDot} /> Location: Addis Ababa, Ethiopia&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5>

      </div>
      <div id="quicklinks">
      <h3  style={{textAlign:"center",
         fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"
      }}>Quick Links</h3>
      
      <h6  style={{textAlign:"center",
         fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"
      }}  onClick={toviewaboutme}>
         About
      </h6>
      <h6  style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}} onClick={toviewservices}>
         Services
      </h6>
      <h6 style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}} onClick={toviewskills}>
         Skills
      </h6>
      <h6  style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}} onClick={toviewprojects}>
        Projects
      </h6>
      <h6 style={{
         fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif",
         marginTop:"40px",
         textAlign:"center",
      }}>Social Medias</h6>
      <div id="social">
           <a href="https://leetcode.com/u/Sami1_2_21/"> <img src="leet.png" id="eachsocial"></img></a>

           <a href="https://www.linkedin.com/in/samuel-asmare-b56303330/"> <img src="lin.png" id="eachsocial"></img></a>

           <a href="https://github.com/SamuelAsmare/"> <img src="git.png" id="eachsocial"></img></a>

           <a href="https://t.me/Sani_j12" > <img src="telegram.png" id="eachsocial"></img></a>

           <a  href=" https://www.hackerrank.com/profile/samuelasmare19"> <img src="hackerrank.png" id="eachsocial"></img></a>
           <a href="https://codeforces.com/profile/Sami1219"> <img src="codeforces.png" id="eachsocial"></img></a>           
           
          

          </div >
      </div>
      <div id="newsletter">
          <h3 style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}}>
            Newsletter
          </h3>
          <h6  style={{textAlign:"center",fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"}}>
            Subscribe to receive updates and news.
          </h6>
          <input type="email" placeholder="Email..." style={{
            backgroundColor:"",
            color:"black",
            padding:"",
            border:"none",
            cursor:"pointer",
            fontFamily:"'Nunito', sans-serif",
            fontWeight:"bold",
            fontSize:"16px",
 
          }} required></input>
          <button style={{
            backgroundColor:"#99f1b9",
            color:"black",
            padding:"",
            border:"none",
            cursor:"pointer",
            fontFamily:"'Nunito', sans-serif",
            fontWeight:"bold",
            fontSize:"16px",
 
          }}>Subscribe</button>

          
      </div>
   </div>
   <div id="footer">
      <h6  style={{textAlign:"center",
         fontWeight:"bold",
         fontFamily:"'Nunito', sans-serif"
      }}>
         Copyright &copy; Samuel Asmare. All rights reserved.
      </h6>
   </div>
     </div>
      )
  )
} 
                  

export default App

