import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/actionsCreators";
import { ReactComponent as PlusCircle } from '../../styles/plus-circle-solid.svg';
import { ReactComponent as MinusCircle } from '../../styles/minus-circle-solid.svg';

const Friends = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="inline-container">
            <h3>your friends: {counter}</h3>
            {/* change for svg icon */}
            <PlusCircle className="plus-circle-icon" onClick={() => dispatch(increment(1))} />
            <MinusCircle className="minus-circle-icon" onClick={() => dispatch(decrement(1))} />
        </div>
    )
}

export default Friends;
