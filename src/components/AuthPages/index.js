// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Search from './components/Search/index';
// import Create from './components/Create';
import UserProfile from './UserProfile';
import NavBar from '../NavBar';
import Home from '../Home';



// const RequiresLogin = (props) => {
//   const isLoggedIn = true;
//   if(isLoggedIn) { 
//     return props.children;
//   } 
//   return <Home />
// }


function AuthPages(props) {
 
  return (
    <section className="authPages">
        <NavBar setToken={ props.setToken } />
        <UserProfile />
    </section>
  );
}

export default AuthPages;

