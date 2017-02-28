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
		let { lesson }=this.state;
		return (
			<div>
				<p>{lesson.text}</p>
			</div>
			)
	}
});

export default LessonsInfo;