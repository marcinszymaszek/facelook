import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/actionsCreators";

const Friends = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (

        <div className="inline-container">
            <h3>
                your friends: {counter}
                {/* change for svg icon */}
                {/* <button className="btn-add" onClick={() => dispatch(increment(1))}>ADD</button>
                <button className="btn-delete" onClick={() => dispatch(decrement(1))}>DELETE</button> */}
            </h3>
        </div>
    )
}

export default Friends;