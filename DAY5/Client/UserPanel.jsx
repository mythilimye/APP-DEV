import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import UserLeftbar from './Layout/UserLeftbar';
import { Footer } from '../../components/Footer';
import {FaRegSmileWink} from "react-icons/fa";
import img from "../../assets/bg1.jpg"
const UserPanel = () => {

    let uname = localStorage.getItem('xuserName');

    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        let greeting = '';
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good morning !';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Good afternoon !';
        } else {
            greeting = 'Good evening !';
        }

        setTimeOfDay(greeting);
    }, []);

    return (
        <>
            <Navbar />
            <UserLeftbar />

            <div>
        <img className='bg1'src={img}/>
      </div>
      <div className='rest'>
       
      </div>
            {/* <div className='mainx'> */}
                {/* <div className='titlebar'>
                {timeOfDay}
                </div> */}

                {/* <div className='user-data-display'>
                    <div className='user-profile-container'>

                        
                    </div>
                </div> */}
            {/* </div> */}

                        <div >
                            <h2 className="text-shadows-profile"> <FaRegSmileWink/> Welcome {uname}! </h2>
                        </div>

            <Footer />
                        <div>
                            <h1 className='making'>Making Any Occasions<br/> Unforgettable!</h1>
                        </div>
        </>
    );
}

export default UserPanel;
