import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeUpdateFlag } from "../../store/actions/actionsCreators";
import { ReactComponent as ThumbsUp } from '../../styles/thumbs-up-solid.svg';
import { ReactComponent as ThumbsDown } from '../../styles/thumbs-down-solid.svg';


const Opinion = () => {
    const likeUpdateFlag = useSelector(state => state.likeUpdateFlag)
    const dispatch = useDispatch();

    return (
        <div className="inline-container">
            <div className="inner-box">
                <h3>Do you like it?</h3 >
                {likeUpdateFlag ?
                    <ThumbsUp className="thumb-icon" onClick={() => dispatch(toggleLikeUpdateFlag())} /> :
                    <ThumbsDown className="thumb-icon" onClick={() => dispatch(toggleLikeUpdateFlag())} />}
            </div>
        </div>
    )
}

export default Opinion;


