import React, { useState, useEffect } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState('count em :)');

    useEffect(() => {
        setNumberOfUsers(usersAmount);
    }, [usersAmount]);


    return (
        <>
            <h3>
                Amount of users: {numberOfUsers}&nbsp;
                <EyeSolidIcon className="eye-icon" onClick={() => alert("elo")} />
                {/* {likeUpdateFlag ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="dislike">&#128078;</span>} */}
            </h3>
        </>
    )
}

export default MainInfo;


