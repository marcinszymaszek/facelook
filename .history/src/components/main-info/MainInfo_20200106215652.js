import React, { useState, useEffect } from 'react';
import './MainInfo.css'

const MainInfo = ({ usersAmount }) => {
    const [friends, setFreinds] = useState(0);
    const [isLiked, setIsLiked] = useState(true);

    function toggle() {
        setIsLiked(!isLiked);
    }

    return (
        <div className="info-container">
            <h3>
                Amount of users: {usersAmount}
            </h3>
            <h3>
                <button onClick={() => setFreinds(friends + 1)}>ADD</button>
                friends: {friends}
            </h3>
            <h3 id="thumb" onClick={toggle}>
                {isLiked ? <span role="img" aria-label="like">&#128077;</span> :
                    <span role="img" aria-label="like">&#128078;</span>} for this app!
            </h3 >
        </div >
    )
}

export default MainInfo;


//========= SoloLearn =======================================================

