import React, { useState } from 'react';
import './Opinion.css'

const Opinion = () => {
    const [isLiked, setIsLiked] = useState(true);

    function toggle() {
        setIsLiked(!isLiked);
    }

    return (
        <>
            <h3 id="thumb-txt" onClick={toggle}>
                {isLiked ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="like">&#128078;</span>} for this app!
            </h3 >
            <br /><br />
        </>
    )
}

export default Opinion;


