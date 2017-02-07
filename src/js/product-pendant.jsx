import React from "react";
import pendants from "./Data/data-pendants.js";

let ProductPendant = React.createClass({
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: pendants.find(product => product.id === productId)
        };
    },
    render () {
        let { product } = this.state;

        return (
            <div>
                <p>{product.name}</p>
                <p>{product.text}</p>
            </div>

        )
    }
})

export default ProductPendant;