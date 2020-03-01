import React, { useState, useEffect } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState('count em :)');

    useEffect(() => {
        setNumberOfUsers(usersAmount);
    }, [usersAmount]);



    return (
        <>
            <h3>
                Amount of users:
                {/* do conditional */}
                {numberOfUsers}&nbsp;

                <EyeSolidIcon className="eye-icon" onClick={() => alert("elo")} />
                <EyeSlashSolidIcon className="eye-icon" onClick={() => alert("elo")} />

            </h3>
        </>
    )
}

export default MainInfo;


