import React from 'react';
import "../assets/Contact.css";
import{AiOutlineInstagram} from "react-icons/ai"
import{CgMail} from "react-icons/cg"
import{FiPhone} from "react-icons/fi"
import { Link } from 'react-router-dom';
//import Layout from '../components/Layout'
function Contact() {
    return (
        <>
        <div >
                <div>
                    <h1 className='cnt'> Contact Us </h1>
                </div>
                <div>
                    <p className='contactpara'>
                    We have years of experience in private event planning. Event planning is our passion, and we take great pride in our work. We are here to create luxurious private events and host community gatherings
                    and corporates. Contact us for your dream events to make them true.

                    </p>
                </div>
            </div>

                <Link to="https://www.instagram.com/">
                    <div >
                        <h1 className='insta'><AiOutlineInstagram/></h1>
                        <p className='instaid'>- EventCraft Pro</p>
                    </div>
                </Link>
                <Link to="https://mail.google.com/">
                    <div >
                        <h1 className='gmail'><CgMail/></h1>
                        <p className='gmailid'>- EventCraft Pro@gmail.com</p>
                    </div>
                </Link>
                <div >
                    <h2 className='phone'><FiPhone/></h2>
                    <p className='phoneid'>- +91 7867972099</p>
                </div>

        </>
    )
}

export default Contact