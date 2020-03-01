import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/actionsCreators";

const Friends = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (

        <>
            <h3>
                your friends: {counter}
                <button className="btn-add" onClick={() => dispatch(increment(1))}>ADD</button>
                <button className="btn-delete" onClick={() => dispatch(decrement(1))}>DELETE</button>
            </h3>
        </>
    )
}

export default Friends;