import React from 'react';

let ProductPreview = React.createClass ({
        
	render () {
        function openPopup(e) {
            e.preventDefault();
            $("b-popup").show()
        }

		let {name, text, cost, instock, imagePreview, onClick} = this.props;
		return (
		<div className="product-preview" onClick={onClick}>
            <div className="product-preview-thumbs">
                <img className="product-preview-img" src={imagePreview} />
                <div className="product-preview-caption">
                    <span className="product-preview-name">{name}</span>
                    <span className="product-preview-cost">Цена: {cost} </span>
                    <span className="product-preview-button" onClick={onClick}>
                        <div className="product-preview-button-img" onClick={openPopup}>Заказать</div>
                    </span>
                     <span><img className="product-preview-instock"  src={instock} /></span>
                   
                </div>
            </div>
            <div>
                {this.props.children} 
            </div>
		</div>
		)
	}
})

export default ProductPreview;