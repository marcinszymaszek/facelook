import React from 'react';
import './Friends.css'
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/actions/actionsCreators";

const Friends = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <>
            <h3>
                <button className="btn-add" onClick={() => dispatch(increment())}>ADD</button>
                {/* <button className="btn-delete" onClick={() => setFriends(friends - 1)}>DELETE</button> */}
                friends: {counter}
            </h3>
        </>
    )
}

export default Friends;