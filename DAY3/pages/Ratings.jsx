import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import UserLeftbar from "./Client/Layout/UserLeftbar";
import img from "../assets/rateimg.jpeg"
import { Link } from "react-router-dom";
import "../assets/Ratings.css"
export default function Ratings(){
    return(
        <>
        <UserLeftbar/>
           <Navbar/>
           <img className="rate" src={img} />
           <div className="rateimgdiv">
            <h1 className="text-rate">Reviews  </h1>
          <h2 className="h2text">Wedding Events : <input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
          <h2 className="h2text">Birthday Celebrations : <input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
          <h2 className="h2text">Corporate Events :<input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
          <h2 className="h2text">Reception : <br/><input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
          <h2 className="h2text">BabyShower and GenderReveal :<input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
          <h2 className="h2text">Christmas Celebrations : <input type="text" name="productName" id="productName" placeholder='Drop ur reviews here..' className='data-input bg-secondary black'required /> </h2>
        <Link to='/'><button className="rating-submit"> Submit </button></Link>
         

          </div>
           

          

           
           

            <Footer/>

            
        </>
    )
}