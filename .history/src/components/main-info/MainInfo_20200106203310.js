import React, { useState, useEffect } from 'react';
import './MainInfo.css'

const MainInfo = ({ usersAmount }) => {
    const [friends, setFreinds] = useState(0);
    const [isLiked, setIsLiked] = useState(true);

    const handleClick = () => {
        setIsLiked(prevState => { return !prevState.isLiked }, []);
    }

    return (
        <div className="info-container">
            <h1>
                Amount of users: {usersAmount}
            </h1>
            <h1>
                <button onClick={() => setFreinds(friends + 1)}>ADD</button>
                friends: {friends}
            </h1>
            <h1>
                <button onClick={handleClick}> <i>{isLiked ? '&#128077;' : '&#128078;'}</i> </button> this app!
            </h1 >
        </div >
    )
}

export default MainInfo;


//========= SoloLearn =======================================================

