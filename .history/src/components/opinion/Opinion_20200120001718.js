import React  from 'react';
import './Opinion.css'
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeUpdateFlag } from "../../store/actions/actionsCreators";


const Opinion = () => {
    const likeUpdateFlag = useSelector(state => state.likeUpdateFlag)
    const dispatch = useDispatch();

    // function toggle() {
    //     setIsLiked(!isLiked);
    // }

    return (
        <>
            <h3 id="thumb-txt" onClick={() => dispatch(toggleLikeUpdateFlag())}>
                {likeUpdateFlag ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="dislike">&#128078;</span>} for this app!
            </h3 >
            <br /><br />
        </>
    )
}

export default Opinion;


