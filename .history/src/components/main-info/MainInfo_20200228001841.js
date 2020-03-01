import React, { useState } from 'react';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState({ usersAmount });

    return (
        <>
            <h3>
                Amount of users: {numberOfUsers}
            </h3>
        </>
    )
}

export default MainInfo;


