import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
import { browserHistory } from 'react-router';

let LessonsImage = React.createClass({
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
            document.getElementById("lessons-image-b-popup").style="display:none";
         }
		return (
            
			<div>
               <div id="lessons-image-b-popup">
                <div className="lessons-image-b-popup-content">
                    <div id="b-popup-lesson-close-button" onClick={close}>
                        <Link to="/lessons"><img src="/./images/catalog/close.png" /> </Link>
                    </div>
                    {lesson.name}
                    <div className="product-carousel">
                      
                        <div id="photo-big" >
                            <img id="1" src={lesson.image1} />
                            <img id="2" src={lesson.image1} />
                        </div>


                    </div>
                </div>
               </div>  
			</div>
			)
	}
});



export default LessonsImage;