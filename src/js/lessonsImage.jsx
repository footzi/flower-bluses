import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";

let LessonsInfo = React.createClass({
	getInitialState() {
        let { imageId } = this.props.params;

        return {
            lesson: lessons.find(lesson => lesson.imageId === imageId)
        };
    },
    componentWillReceiveProps(nextProps) {
        let { imageId: prevId } = this.props.params;
        let { imageId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                lesson: lessons.find(lesson => lesson.imageId === nextId)
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
			<div>
                <div id="lessons-image-b-popup">
                <div className="lessons-image-b-popup-content">
                    <div id="b-popup-lesson-close-button" onClick={close}>
                        <Link to="/lessons"><img src="/./images/catalog/close.png" /> </Link>
                        <img className="lesson-img" src={image} />
                        <div className="lesson-name">{name}</div>

                    </div>
                </div>
            </div>           
			</div>
			)
	}
});

export default LessonsInfo;