import React from 'react';
let products = require("./../Data/data-rings.js").products;
import Product from "../product.jsx"

let ProductRings = React.createClass({
    getInitialState() {
        let { productId } = this.props.params;
        return {
            
            product: products.find(product => product.id === productId)
        };
    },
    componentWillReceiveProps(nextProps) {
        let { productId: prevId } = this.props.params;
        let { productId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                product: products.find(product => product.id === nextId)
            });
        }
    },
    render () {
        let { product } = this.state;

        return (
            <Product 
                  id={product.id}
                  name={ product.name }
                  text={ product.text }
                  image1={product.image1}
                  image2={product.image2}
                  image3={product.image3}
                  image4={product.image4}
                  image5={product.image5}
                  imagePreview={product.imagePreview}/>
        )
    }
})
 export default ProductRings;