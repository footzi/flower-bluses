import React from 'react';
import products from "./../Data/data-earrings.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';

let Earrings  = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            products
        }
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/earrings/${productId}`);
    },
    render () {
        
        

        let { products } = this.state;
        return (
            <div>
                <div>
                {
                    products.map(product => 
                    <ProductPreview
                        key={product.id}
                        onClick={this.handlePreviewClick.bind(null, product.id)}
                        imagePreview={product.imagePreview}
                        name={product.name}
                        text={product.text}
                        cost={product.cost}
                        instock={product.instock}
                    />

                )}
            
            </div>

                <div >
                {this.props.children}
                </div>


            </div>
        )
    }
})





export default Earrings;