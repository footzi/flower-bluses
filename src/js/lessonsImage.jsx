import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
var Carousel = require('react-responsive-carousel').Carousel;
import $ from "jquery";
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
    
       //document.getElementsByClassName("carousel").style({"width":"100%"});
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
                    <div id="product-carousel">
                        <Carousel>
                            <div><img src={lesson.image1} /></div>
                            <div><img src={lesson.image2} /></div>
                            <div><img src={lesson.image3} /></div>
                        </Carousel>
                    </div>
                </div>
               </div>  
			</div>
			)
	}
});
 $(".carousel").css(({"width":"100%"}))

export default LessonsImage;