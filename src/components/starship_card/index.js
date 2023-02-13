import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getShips } from '../../utilities/ship_functions';
import './index.css';



const StarshipCard = () => {
    
    const [starship, setStarship] = useState([])
    
    useEffect(() => {
        console.log("making api call");
        makeServerCall()
    }, []);
    
    const makeServerCall = async () => {
        let serverResponse = await getShips()

        let cardArray = serverResponse.data.results;
        setStarship(cardArray)
    }
    console.log(starship);

    let cardListJSX = starship.map((ship, index)=>{
        return(
            <div className='card' key={index}>
                <h1>{ship.name}</h1>
                <p>Cargo Capacity: {ship.cargo_capacity}</p>
            </div>
        )
    })
    

  return (
    <div id="cardlist">
        {cardListJSX}
    </div>
  )
}

export default StarshipCard