
import NavBar from '../NavBar';
import './index.scss';
import Create from './Create';


function AuthPages(props) {
 
  return (
    <section className="authPages">
        <NavBar setToken={ props.setToken } />
        <Create />
    </section>
  );
}

export default AuthPages;

