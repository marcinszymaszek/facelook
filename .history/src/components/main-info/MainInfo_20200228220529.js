import React, { useState, useEffect } from 'react';
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
// import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const MainInfo = ({ usersAmount }) => {
    const [numberOfUsers, setNumberOfUsers] = useState('count em :)');


    useEffect(() => {
        setNumberOfUsers(usersAmount);
    }, [usersAmount]);

    const handleClick = () => {
        numberOfUsers === "count em :)" ? setNumberOfUsers(usersAmount) : setNumberOfUsers("count em :)")

        // if(this.state.clicked) {
        //     this.setState({
        //         bookstoreName : "White Books",
        //         textColor : "black",
        //         backgroundColor : "white"
        //     })
        // } else {
        //     this.setState({
        //         bookstoreName : "Black Books",
        //         textColor : "white",
        //         backgroundColor : "black"

        //     })
        // }
        // this.setState({
        //     clicked : !this.state.clicked
        // })

    }

    return (
        <>
            <h3>
                Amount of users:
                {/* do conditional */}
                {numberOfUsers}&nbsp;

                <EyeSolidIcon className="eye-icon" onClick={() => handleClick()} />
                {/* <EyeSlashSolidIcon className="eye-icon" onClick={() => alert("elo")} /> */}

            </h3>
        </>
    )
}

export default MainInfo;


