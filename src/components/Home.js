import './Home.scss';
import Buttons from './Buttons.js';
import LandingForm from "./LandingForm.js";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from './Search/index';
import { useState } from "react";
import UserProfile from './UserProfile';

function Home() {

    return (
        <div className="wood-bkg">
            <div className="HeroImg">
                <div className="redBorder"></div>
                <img
                    src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/landing/public/images/heroImg.jpeg?raw=true"
                    alt="Hero Img"
                    width="550"
                />
            </div>
            <section className="sidebar">

                <img
                    className="sidebar--centered"
                    src="images/logo.png"
                    alt="Recipe Mate"
                    width="200"
                />
                <LandingForm />
               
                
            </section>
        </div >
    );
}

export default Home;