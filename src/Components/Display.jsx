import React from 'react'

function DisplayIdeas (props) {

    // takes the array of data from app.jsx, and uses a .map to return all the items in a list
    return(
        <ul> 
            {props.ideas.map((idea, i, ) => <li key={i}>{idea}</li>)}
        </ul>
    )
}

export default DisplayIdeas