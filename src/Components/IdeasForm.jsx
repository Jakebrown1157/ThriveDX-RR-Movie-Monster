import React, { useState } from "react";

function IdeasForm (props) {
    let [input, setInput] = useState('')

    //prevents random page updates, and links the child info back into the parent array
    function handleSubmit(e) {
        e.preventDefault()
        props.addIdeas(input)
    }
    //takes any updates from the user and updates the State, then calls HandleSubmit
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <button type="submit">Submit your idea!</button>
        </form>
    )
}

export default IdeasForm
