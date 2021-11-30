
import useToken from '../../hooks/useToken';
import Welcome from './Welcome';
import NavBar from "../NavBar";
import './index.scss';
import ProfileNav from "./ProfileNav";
import { faArrowCircleUp, faLightbulb, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function UserProfile(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;


  return (

    <div className="profileDiv">
      <NavBar setToken={props.setToken} />
      <section className="profileDiv--inner">

        <Welcome userId={userId} />
        <ProfileNav />
        <article id="Welcome" className="Greeting">
          <p>You're in the right place to share recipes and inspiration!</p>
          <p> Please, choose an option from the navigation bar . </p>
          <p>  Select Catagories if you would like to browse,</p>
          <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/user-profile/public/images/pointCategory.jpg?raw=true"
            alt="Category is here on navbar" />
          <p> Click on Create if you want to share a recipe, or </p>
          <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/user-profile/public/images/pointCreate.jpg?raw=true"
            alt="Create is here on navbar" width="200" />
          <p>type in Search bar if you have something particular in mind.</p>
          <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/user-profile/public/images/searchBar.png?raw=true"
            alt="Search bar" width="200" />
          <p>You will also see your profile navigation bar (the smaller gray navbar that's just underneath your email),</p>
          <p>All your creations as well as your favorites are safe here!</p>
          <p>As you browse in search, you may save recipes that you like to your 'Saved Favorites' tab. Simply click the Heart in of the recipe you like.</p>
          <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/user-profile/public/images/favoriteButton.jpg?raw=true"
            alt="Favourite button with tooltip" />
          <p>If you're not clear what some of the icons for, simply hover on it to find out what it's for <FontAwesomeIcon icon={faSmileWink} /></p>
          <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/user-profile/public/images/seeRecipes.jpg?raw=true"
            alt="Mouseover to see Tooltip" width="200" />
          <p>We hope you enjoy Recipe Mate , Stay Inspired <FontAwesomeIcon icon={faLightbulb} /> !</p>

        </article>



      </section>
    </div>

  );

}


