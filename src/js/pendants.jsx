import React from 'react';
import pendants from "./Data/data-pendants.js";
import $ from 'jquery';
let Pendants = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            pendants
        }
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/pendants/${productId}`);
    },
    render () {
        

        let { pendants } = this.state;
        return (
            <div>
                <div>
                {
                    pendants.map(product => 
                    <ProductPreview
                        key={product.id}
                        onClick={this.handlePreviewClick.bind(null, product.id)}
                        imagePreview={product.imagePreview}
                        name={product.name}
                        text={product.text}
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

let ProductPreview = React.createClass ({
	render () {
        function openPopup(e) {
            e.preventDefault();
            document.getElementById("b-popup").style="display:table"
  }
    
		let {name, text, imagePreview, onClick} = this.props;
		return (
		<div className="product-preview">

            <div className="thumbs">
                <img className="product-preview-img" src={imagePreview} />
                <div className="caption">
                    <span className="TextNameProductPreview title">{name}</span>
                    <span className="info" onClick={onClick}> 
                        <div id="product-preview-button" onClick={openPopup}>Заказать</div>
                    </span> 
                   
                </div>
            </div>
        <div>
            {this.props.children} 
        </div>
		</div>
		)
	}
})




export default Pendants;
