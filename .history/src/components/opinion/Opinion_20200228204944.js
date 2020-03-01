import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeUpdateFlag } from "../../store/actions/actionsCreators";


const Opinion = () => {
    const likeUpdateFlag = useSelector(state => state.likeUpdateFlag)
    const dispatch = useDispatch();

    return (
        <>
            <h3 id="thumb-txt" onClick={() => dispatch(toggleLikeUpdateFlag())}>
                Do you like it?&nbsp;
            </h3 >
            {likeUpdateFlag ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                <span className="thumb" role="img" aria-label="dislike">&#128078;</span>}
            <br /><br />
        </>
    )
}

export default Opinion;


