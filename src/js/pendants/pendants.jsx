import React from 'react';

// import { products, products2 } from "./../Data/data-pendants.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;
let products = require("./../Data/data-pendants.js").products;
let products2 = require("./../Data/data-pendants.js").products2;

// let Page=location.pathname;
// let test="/catalog/polimer/pendants/page2";


let Pendants = React.createClass({
     
       
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    // componentWillMount() {
        
    // },
    getInitialState() {
        return {
            
            products
        }
    },
    
        

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/pendants/${productId}`);
    },

    toPage1: function(e) {
                e.preventDefault();
                this.setState({products:products});
            },
    toPage2: function(e) {
        e.preventDefault();
        this.setState({products:products2});
    },

    render () {
            let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Полимерная глина>></Link>
                    <Link to="/catalog/polimer/pendants">Кулоны/подвески</Link>
                </div>
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
            <div className="pages">
                    <div className="pages-back">
                         <a className="pages-link">← предыдущая</a>
                    </div>
                    <div className="pages-numbers">
                        <p className="pages-numbers-link" onClick={this.toPage1}> 1</p>
                        <p to="/catalog" className="pages-numbers-link" onClick={this.toPage2}>2</p>
                        <p to="/catalog" className="pages-numbers-link">3</p>
                    </div>
                    <div className="pages-next">
                         <a className="pages-link">следующая →</a>
                    </div>
                </div>

                <div >
                {this.props.children}
                </div>


            </div>
        )
    }
})




export default Pendants ;