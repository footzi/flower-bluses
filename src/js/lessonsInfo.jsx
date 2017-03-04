import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";

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
                    <div id="b-popup-lesson-close-button" onClick={close}>
                        <Link to="/lessons"><img src="/./images/catalog/close.png" /> </Link>
                    </div>
                    <div className="lesson-order">
                        <div className="lesson-title">ЗАПИСАТЬСЯ</div>
                    </div>
                    <div className="lesson-image">
                            <img src={lesson.image} />
                    </div>
                    <form id="lessonsform" method="post">
                            <div className="lesson-form">
                                <input className="lesson-form-input" name="product" type="text" readonly placeholder="Название мастер-класса" value={lesson.name}/>
                                <input className="lesson-form-input" name="name" type="text" required placeholder="Ваше имя:" />
                                <input className="lesson-form-input" name="email" type="email" required placeholder="Ваш e-mail:" />
                                <select className="lesson-form-input lesson-form-input-date" required name="data">
                                    <option  value="" disable selected hidden>Дата мастер класса:</option>
                                    <option className="lesson-form-option">10.05.1990</option>
                                    <option>11.05.1990</option>
                                    <option>12.05.1990</option>
                                </select>
                                <textarea className="lesson-form-input lesson-form-input-message" name="info" type="text" placeholder="Сообщение:" />
                            </div>
                             <button id="lessonsform-button" className="product-info-button product-lesson-button">Отправить</button>
                    </form>

                </div>            
			</div>
			)
	}
});

export default LessonsInfo;