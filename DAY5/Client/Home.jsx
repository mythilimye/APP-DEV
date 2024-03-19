import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import vid from "../../assets/video1.mp4";
import vid1 from "../../assets/video2.mp4";
import img3 from "../../assets/beachweds.jpg";
import img4 from "../../assets/babygirl.jpg";
import img5 from "../../assets/babybirth.jpg";
import img6 from "../../assets/dining.jpg";
import img from "../../assets/bgs.jpg";
import Contact from '../Contact';
import {GiPartyPopper} from "react-icons/gi"
import { Footer } from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Github } from 'lucide-react'
const Home = () => {
    const nav = useNavigate()

    const routeProducts = () => {
        nav('/products')
    }


    return (
        <>
            <div className='main'>
                <Navbar/>
            </div>
            <div>
                <video className='vid' src={vid} autoPlay loop muted></video>
            </div>
            <div>
                <video className='vid1' src={vid1} autoPlay loop muted></video>
            </div>
            <div>
    <img  className="image2"  src={img} />
   </div>
             <div>
    <h1 className="cs">
        <i>EventCarft Pro</i>
    </h1>
    <h1 className="eventmemory">
        <i>" Life is an Event , Make it memorable..! "</i>
    </h1>
   </div>
   <div>
   <h1 className="pp2">
            <GiPartyPopper/>
        </h1>

        <h1 className="pp1">
            <GiPartyPopper/>
        </h1>
   <p className="para">
   This phrase emphasizes the goal of the service, which is to create memorable and remarkable experiences for event attendees. It suggests that EventCraft Pro aims to go beyond the ordinary and deliver exceptional events that leave a lasting impression on participants.
        </p>

        <p className="para1">
        his likely refers to the planning, coordination, and execution of various types of parties and events. "Advance" might imply that the service is advanced or sophisticated in its approach, possibly offering cutting-edge event management techniques or technology.
        </p>
   </div>
   <div>
        <h2 className="works">
            Here are some of our works..!
        </h2>
       </div>

       <div className="blockmoves  ">
           <div className="block"> </div>
           <div>
            <img className="image3" src={img3} />
            <img className="image4" src={img4} />
            <img className="image5" src={img5} />
            <img className="image6" src={img6} />
           </div>
           </div>
           <div className='magenda'>

           </div>
           <div>
            <Contact/>
           </div>
           <div>
            <Footer/>
           </div>

           
        </>

       
    )
}
export default Home;
