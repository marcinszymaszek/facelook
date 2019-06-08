import React from 'react';
import Product from './Product'
import ShowPromoted from './ShowPromoted';

class ProductList extends React.Component {
    state = {
        products: [
            { id: 0, name: "Water" },
            { id: 1, name: "Juice" },
            { id: 2, name: "Tea" },
            { id: 3, name: "Cola" }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(p => (
                        <li key={p.id}>
                            <Product {...p} name={p.name}></Product>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default ShowPromoted(ProductList);