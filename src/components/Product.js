import React from 'react';

const Product = ({ name, onBuyCLick, id, isSolid }) => {

    const handleClick = () => {
        onBuyCLick(id)
    }
    
    return (
        <div style={{ textDecoration: isSolid ?
        'line-through':'none' }}>
            <span>
                {name}
            </span>
            <button onClick={handleClick}>
                Buy
            </button>
        </div>)

}

export default Product;