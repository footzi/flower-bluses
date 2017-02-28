import React from "react";
import lessons from "./Data/data-lessons.js";

let Lessons = React.createClass({
	contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            lessons
        }
    },

    handlePreviewClick(lessonId) {
        this.context.router.push(`/lessons/${lessonId}`);
    },
	render () {
		let { lessons } = this.state;
		return (
			<div className="lessons">
                <div className="lessons-title">МАСТЕР-КЛАССЫ:</div>
                <div className="lessons-introduction">
                    <div className="lessons-introduction-next-date">Ближайшие <br/>даты проведения <br/> обучения</div>
                    <div className="lessons-introduction-date">13, 19, 25 марта</div>
                    <div className="lessons-introduction-next-date">кнопка</div>
                </div>

                <div>
                {
                    lessons.map(lesson => 
                    <LessonsPreview
                        key={lesson.id}
                        onClick={this.handlePreviewClick.bind(null, lesson.id)}
                        name={lesson.name}
                        data={lesson.data}
                        text={lesson.text}
                        
                    />

                )}
            
            </div>

                <div >
                {this.props.children}
                </div>


            </div>
			)
	}
});

let LessonsPreview = React.createClass({
	render() {
		let { name, data, text, onClick } = this.props;
		return(
			<div>

				<p>{name}</p>
				<p>{data}</p>
				<button onClick={onClick}> button</button>
			</div>
			)
	}
})
export default Lessons;