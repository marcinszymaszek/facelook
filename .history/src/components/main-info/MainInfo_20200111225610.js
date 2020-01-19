import React, { useState } from 'react';
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
                Amoundsadsat of users: {usersAmount}
            </h3>
            <h3>
                <button className="btn-add" onClick={() => setFreinds(friends + 1)}>ADD</button>
                friends: {friends}
            </h3>
            <h3 id="thumb-txt" onClick={toggle}>
                {isLiked ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="like">&#128078;</span>} for this app!
            </h3 >
            <br /><br />
        </div >
    )
}

export default MainInfo;

//========= SoloLearn =======================================================

