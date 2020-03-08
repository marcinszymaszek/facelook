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
            <div className="inner-box">
                <h3>Amount of users: {numberOfUsers}</h3>
                {numberOfUsers === "count em :)" ?
                    <div className="icon-transparent-box">
                        <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} />
                    </div>
                    : <EyeSlashSolidIcon className="eye-icon" onClick={() => handleClick()} />
                }
            </div>
        </div>
    )
}

export default MainInfo;


