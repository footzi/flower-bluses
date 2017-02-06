import React from "react";
import all from "./Data/data-all.js";

let ProductAll = React.createClass({
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: all.find(product => product.id === productId)
        };
    },
    render () {
        let { product } = this.state;

        return (
            <div>
                <p>{product.name}</p>
                <p>{product.text}</p>
                <p>{product.body}</p>
            </div>

        )
    }
})

export default ProductAll;