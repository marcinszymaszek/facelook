import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeUpdateFlag } from "../../store/actions/actionsCreators";


const Opinion = () => {
    const likeUpdateFlag = useSelector(state => state.likeUpdateFlag)
    const dispatch = useDispatch();

    return (
        <div className="inline-container">
            <h3 id="thumb-txt">
                Do you like it?&nbsp;
                {/* change for svg icon */}
                {likeUpdateFlag ?
                    <span onClick={() => dispatch(toggleLikeUpdateFlag())} className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span onClick={() => dispatch(toggleLikeUpdateFlag())} className="thumb" role="img" aria-label="dislike">&#128078;</span>}
            </h3 >
            <br /><br />
        </div>
    )
}

export default Opinion;


