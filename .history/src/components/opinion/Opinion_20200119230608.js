import React  from 'react';
import './Opinion.css'
import { useSelector } from "react-redux";


const Opinion = () => {
    const like = useSelector(state => state.like)

    // function toggle() {
    //     setIsLiked(!isLiked);
    // }

    return (
        <>
        <h3>
            {/* <h3 id="thumb-txt" onClick={toggle}> */}
                {like ? <span className="thumb" role="img" aria-label="like">&#128077;</span> :
                    <span className="thumb" role="img" aria-label="dislike">&#128078;</span>} for this app!
            </h3 >
            <br /><br />
        </>
    )
}

export default Opinion;


