import React, { useState, useEffect } from 'react';
import './MainInfo.css'

const MainInfo = ({ usersAmount }) => {
    const [friends, setFreinds] = useState(0);
    const [isLiked, setIsLiked] = useState(true);

    const handleClick = () => {
        setIsLiked(prevState => { return !prevState.isLiked });
    }

    return (
        <div className="info-container">
            <div>
                Amount of users: {usersAmount}
            </div>
            <div>
                <button onClick={() => setFreinds(friends + 1)}>ADD</button>
                friends: {friends}
            </div>
            <div>
                <button onClick={() => { return handleClick}}> {isLiked ? '&#128077;' : '&#128078;'}</button> this app!
            </div>
        </div>
    )
}

export default MainInfo;


//========= SoloLearn =======================================================

