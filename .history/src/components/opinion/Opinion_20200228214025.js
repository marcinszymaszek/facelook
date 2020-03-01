import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeUpdateFlag } from "../../store/actions/actionsCreators";
import { ReactComponent as EyeSolidIcon } from '../../styles/eye-solid.svg';
import { ReactComponent as EyeSlashSolidIcon } from '../../styles/eye-slash-solid.svg';

const Opinion = () => {
    const likeUpdateFlag = useSelector(state => state.likeUpdateFlag)
    const dispatch = useDispatch();

    return (
        <>
            <h3 id="thumb-txt" onClick={() => dispatch(toggleLikeUpdateFlag())}>
                Do you like it?&nbsp;
                {likeUpdateFlag ? <EyeSolidIcon className="eye-icon" onClick={() => alert("elo")} /> :
                    <EyeSlashSolidIcon className="eye-icon" onClick={() => alert("elo")} />}
            </h3 >
            <br /><br />
        </>
    )
}

export default Opinion;


