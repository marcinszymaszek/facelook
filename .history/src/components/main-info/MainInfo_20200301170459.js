import React, { useState, useEffect } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = (props) => {
    const [numberOfUsers, setNumberOfUsers] = useState({...props.numberOfUsers});

    useEffect(() => {
        setNumberOfUsers(props.numberOfUsers)
    }, [props.numberOfUsers]);


    const handleClick = () => { numberOfUsers === "count em :)" ? setNumberOfUsers(props.numberOfUsers) : setNumberOfUsers("count em :)") }


    return (
        <div className="inline-container">
            <h3>Amount of users: {props.numberOfUsers}</h3>
            <>
                {numberOfUsers === "count em :)" ?
                    <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} /> :
                    <EyeSlashSolidIcon className="eye-icon" onClick={() => handleClick()} />}
            </>
        </div>
    )
}

export default MainInfo;


