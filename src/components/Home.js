import './Home.scss';
import LandingForm from "./LandingForm.js";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


function Home(props) {

    return (
        <div className="home-layout wood-bkg">
            <div className="HeroImg">
                <div className="redBorder"></div>
                <img
                    src=""
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
                <LandingForm 
                    setToken={props.setToken}
                />
                
                
            </section>
        </div >
    );
}

export default Home;