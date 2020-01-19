import React, { useState } from 'react';
import './Friends.css'

const Friends = () => {
    const [friends, setFreinds] = useState(0);

    return (
        <>
            <h3>
                <button className="btn-add" onClick={() => setFreinds(friends + 1)}>ADD</button>
                <button className="btn-delete" onClick={() => setFreinds(friends - 1)}>DELETE</button>
                friends: {friends}
            </h3>
        </>
    )
}

export default Friends;