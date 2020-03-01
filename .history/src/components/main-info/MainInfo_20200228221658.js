import React, { useState } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState(usersAmount);


    const handleClick = () => { numberOfUsers === "count em :)" ? setNumberOfUsers(usersAmount) : setNumberOfUsers("count em :)") }

    return (
        <>
            <h3>
                Amount of users:
                {numberOfUsers}&nbsp;
                {numberOfUsers === "count em :)" ?
                    <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} /> :
                    <EyeSlashSolidIcon className="eye-icon" onClick={() => handleClick()} />}
            </h3>
        </>
    )
}

export default MainInfo;


