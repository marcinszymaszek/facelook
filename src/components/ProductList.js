import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    state = {
        products: [
            { id: 0, name: "Apple", isSold: false },
            { id: 1, name: "Coffee", isSold: false }
        ]
    }


    handleBuyClick = id => {
        this.setState(previousState => {
            const products = previousState.products.map(p => p.id === id ? { ...p, isSold: true } : p)
            return { products }
        })

    }

    render() {
        return (
            <ul>
                {this.state.products.map(p => (
                    <li key={p.id}>
                        <Product id={p.id} isSolid={p.isSold} name={p.name} onBuyCLick={this.handleBuyClick}></Product>
                    </li>
                ))}
            </ul>
        )
    }
}

export default ProductList;