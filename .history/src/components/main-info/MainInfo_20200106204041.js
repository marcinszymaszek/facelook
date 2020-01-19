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
            <h3>
                Amount of users: {usersAmount}
            </h3>
            <h3>
                <button onClick={() => setFreinds(friends + 1)}>ADD</button>
                friends: {friends}
            </h3>
            <h3>
                <button onClick={handleClick}> {isLiked ? <icon>&#128077;</icon> : <icon>&#128078;</icon>} </button> this app!
            </h3 >
        </div >
    )
}

export default MainInfo;


//========= SoloLearn =======================================================

