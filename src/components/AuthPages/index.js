// import UserProfile from './UserProfile';
import NavBar from '../NavBar';
import './index.scss';
// import Home from '../Home';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Search from './components/Search/index';
import Create from './Create';


function AuthPages(props) {
 
  return (
    <section className="authPages">
        {/* <NavBar setToken={ props.setToken } /> */}
        <Create />
    </section>
  );
}

export default AuthPages;

