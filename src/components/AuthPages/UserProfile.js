
import useToken from '../../hooks/useToken';
import Welcome from './Welcome';
import NavBar from "../NavBar";
import './index.scss';
import ProfileNav from "./ProfileNav";

export default function UserProfile(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;
  

  return (

    <div className="profileDiv">
      <NavBar setToken={props.setToken} />
      <section className="profileDiv--inner">
      <ProfileNav />
        <Welcome userId={userId} />
        
      
        
      </section>
    </div>

  );

}


