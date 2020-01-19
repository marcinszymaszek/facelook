import React from 'react';
import './MainInfo.css'

const MainInfo = ({ usersAmount }) => {

    return (
        <div className="info-container">
            <h1 className="info-titles">
                Amount of users: {usersAmount}
            </h1>
        </div>
    )

}

export default MainInfo;


//========= SoloLearn =======================================================

