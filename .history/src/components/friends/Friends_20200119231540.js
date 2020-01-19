import React from 'react';
import './Friends.css'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/actionsCreators";

const Friends = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <>
            <h3>
                <button className="btn-add" onClick={() => dispatch(increment(1))}>ADD</button>
                <button className="btn-delete" onClick={() => dispatch(decrement(1))}>DELETE</button>
                friends: {counter}
            </h3>
        </>
    )
}

export default Friends;