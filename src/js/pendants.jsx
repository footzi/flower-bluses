import React from 'react';
import pendants from "./Data/data-pendants.js";

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
            <p>Здесь долдны быть подвески</p>
                <div>
                {
                    pendants.map(product => 
                    <ProductPreview
                        key={product.id}
                        onClick={this.handlePreviewClick.bind(null, product.id)}
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
		let {name, text, onClick } = this.props;
		return (
		<div className="ProductPreview">
                 <div className="TextNameProductPreview">{name}</div>
                  <div className="TextNameProductPreview">{text}</div>
                  <button onClick={onClick}>Кнопошка </button>
                  <div>
                     {this.props.children}
                  </div>

                                                  
            
		</div>
		)
	}
})




export default Pendants;
