import React from 'react';
import ReactDOM from "react-dom";
import all from "./Data/data-all.js";

let All = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            all
        }
    },

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/all/${productId}`);
    },
    render () {
        
        let { all } = this.state;
        return (
            <div >
            <p>Здесь долдны быть подвески</p>
                <div>
                {
                    all.map(product => 
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
        function closeAll(e) {
            e.preventDefault();
            document.getElementById("all").style.display="none"
        }
		let {name, text, onClick } = this.props;
		return (
		<div className="product-preview">
            <img className="product-preview-img" src="/../images/catalog/3.png" />
                  <div className="TextNameProductPreview">{text}</div>
                   <div onClick={onClick}> 
                    <button className="info" onClick={closeAll} >Кнопочка </button>
                    </div>
                  <div>
                     {this.props.children}
                  </div>

                                                  
            
		</div>
		)
	}
})


export default All;
