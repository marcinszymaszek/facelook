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
            <h3 id="thumb-txt">Do you like it?&nbsp;</h3 >
            <>
                {likeUpdateFlag ?
                    <ThumbsUp className="thumb-icon" onClick={() => dispatch(toggleLikeUpdateFlag())} /> :
                    <ThumbsDown className="thumb-icon" onClick={() => dispatch(toggleLikeUpdateFlag())} />}
            </>
            <br/><br/>
        </div>
    )
}

export default Opinion;


