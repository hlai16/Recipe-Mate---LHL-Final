import './Home.scss';
import LandingForm from "./LandingForm.js";

function Home(props) {

    return (
        <div className="home-layout wood-bkg">
            <div className="HeroImg">
                <div className="redBorder"></div>
                <img
                    src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/master/public/images/heroImg%20Large.jpeg?raw=true"
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