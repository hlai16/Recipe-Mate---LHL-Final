// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Search from './components/Search/index';
// import Create from './components/Create';
import UserProfile from './UserProfile';
import NavBar from "./NavBar";


// const RequiresLogin = (props) => {
//   const isLoggedIn = true;
//   if(isLoggedIn) { 
//     return props.children;
//   } 
//   return <Home />
// }


function AuthPages() {

  return (
    <section className="authPages">
        <NavBar />
        <UserProfile />
    </section>
  );
}

export default AuthPages;

