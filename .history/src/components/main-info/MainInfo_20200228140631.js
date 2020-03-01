import React, { useState, useEffect } from 'react';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState('count em :)');

    // useEffect(() => {
    //     setNumberOfUsers(usersAmount);
    // }, [usersAmount]);

    return (
        <>
            <h3>
                Amount of users: {numberOfUsers}
            </h3>
        </>
    )
}

export default MainInfo;


