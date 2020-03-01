import React, { useState, useEffect } from 'react';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState('count em :)');

    useEffect(() => {
        setNumberOfUsers(usersAmount);
    }, [usersAmount]);

    return (
        <>
            <h3>
                Amount of users: {numberOfUsers}
                {/* {likeUpdateFlag ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="dislike">&#128078;</span>} */}
            </h3>
        </>
    )
}

export default MainInfo;


