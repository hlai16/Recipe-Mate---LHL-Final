
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
    // setting the initial state of the below 4 keys
    const [state, setState] = useState({
        recipes: []
    });
    
        
    useEffect(() => {
        
        axios.get('/recipes')
        .then((all) => {
            console.log(all.data)
            setState({recipes: [...all.data]})
        });
    }, []);    // important to add [], if not, will be calling api in an infinite loop.
    return { state }
    // need to return the above keys in order to use them in Application.js
}