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
	render () {
		function close(e) {
            e.preventDefault();
            document.getElementById("b-popup").style="display:none";
         }
        function order(e) {
            e.preventDefault();
            document.getElementById("order").style="display:table";
            document.getElementById("product").style="display:none";
         }
        function back(e) {
                    e.preventDefault();
                    document.getElementById("order").style="display:none";
                    document.getElementById("product").style="display:table";
        }
		let { lesson }=this.state;
		return (
			<div>
			<div id="b-popup">
                <div className="b-popup-content">
                    <div id="b-popup-close-button" onClick={close}>
                        <img src="/./images/catalog/close.png" />
                    </div>
                <img src={lesson.image} />
				<p>{lesson.name}</p>
				<p>{lesson.duration}</p>
				<p>{lesson.level}</p>

                </div>
            </div>
			</div>
			)
	}
});

export default LessonsInfo;