import React from "react";
import lessons from "./Data/data-lessons.js";


let LessonsInfo = React.createClass({
	getInitialState() {
        let { lessonId } = this.props.params;

        return {
            lesson: lessons.find(lesson => lesson.id === lessonId)
        };
    },
    componentWillReceiveProps(nextProps) {
        let { lessonId: prevId } = this.props.params;
        let { lessonId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                lesson: lessons.find(lesson => lesson.id === nextId)
            });
        }
    },
	render () {
        let { lesson }=this.state;
		function close(e) {
            e.preventDefault();
            document.getElementById("lessons-b-popup").style="display:none";
         }
       
		
		return (
			<div id="lessons-b-popup">
                <div className="lessons-b-popup-content">
                    <div id="b-popup-close-button" onClick={close}>
                        <img src="/./images/catalog/close.png" />
                    </div>
                    <div className="lesson-order">
                        <div className="order-title">ЗАКАЗАТЬ / УТОЧНИТЬ</div>
                    </div>
                    <div className="order-image">
                            <img src={lesson.image} />
                    </div>
                    <form id="lessonsform" method="post">
                            <div className="order-form">
                           
                                <input className="order-form-input" name="product" type="text" readonly placeholder="Название мастер-класса" subject={lesson.name}/>
                                <input className="order-form-input" name="name" type="text" required placeholder="Ваше имя:" />
                                <input className="order-form-input" name="email" type="email" required placeholder="Ваш e-mail:" />

                                <input className="order-form-input" name="data" type="number" required placeholder="Дата мастер-класса:"/> 
                                <textarea className="order-form-input order-form-input-message" name="info" type="text" placeholder="Сообщение:" />
                            </div>
                             <button id="lessonsform-button" className="product-info-button product-order-button">Отправить</button>
                    </form>

                </div>            
			</div>
			)
	}
});

export default LessonsInfo;