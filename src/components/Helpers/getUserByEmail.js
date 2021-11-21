/* import axios from "axios";


export default function getUserByEmail(email, password) {

  //let userId = "IDK";
  axios.get('/Users')
  .then((all) => {
      const Users = all.data
      console.log("USERS:", Users)

      for (const user of Users) {
        if (user.email === email) {
          if (user.password === password) {
            console.log("User id is:", user.id)
            return user.id
          } 
        //   else {
        //     return "Incorrect password"
        //   }
        // } else {
        //   return "Email not found"
        }

      }
    });
  //return userId
} */