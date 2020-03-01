import React, { useState } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState("count em :)");

    const handleClick = () => { numberOfUsers === "count em :)" ? setNumberOfUsers(7) : setNumberOfUsers("count em :)") }

    return (
        <div className="inline-container">
            <h3>Amount of users: {numberOfUsers}</h3>
            <>
                {numberOfUsers === "count em :)" ?
                    <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} /> :
                    <EyeSlashSolidIcon className="eye-icon" onClick={() => handleClick()} />}
            </>
        </div>
    )
}

export default MainInfo;


