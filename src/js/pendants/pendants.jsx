import React from 'react';
import products from "./../Data/data-pendants.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';

let Pendants = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            products
        }
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/pendants/${productId}`);
    },
    render () {
        
        

        let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <a href="/catalog">Каталог>></a>
                    <a href="/catalog/polimer/all">Полимерная глина>></a>
                    <a href="/catalog/polimer/pendants">Кулоны/подвески</a>
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
                <Link to="/catalog" className="pages-link">1</Link>
                <Link to="/catalog" className="pages-link">2</Link>
                <Link to="/catalog" className="pages-link">3</Link>
            </div>

                <div >
                {this.props.children}
                </div>


            </div>
        )
    }
})





export default Pendants;