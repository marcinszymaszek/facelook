import React, { useState, useEffect } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState(usersAmount);

    useEffect(() => {
        setNumberOfUsers(usersAmount)
    }, [usersAmount]);


    const handleClick = () => { numberOfUsers === "count em :)" ? setNumberOfUsers(usersAmount) : setNumberOfUsers("count em :)") }


    return (
        <div className="inline-container">
            <h3>Amount of users: {usersAmount}</h3>
            <>
                {numberOfUsers === "count em :)" ?
                    <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} /> :
                    <EyeSlashSolidIcon className="eye-icon" onClick={() => handleClick()} />}
            </>
        </div>
    )
}

export default MainInfo;


