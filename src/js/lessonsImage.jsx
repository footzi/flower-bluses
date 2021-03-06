import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
import { browserHistory } from 'react-router';


let LessonsImage = React.createClass({
    componentDidMount() {
        window.scrollTo(0, 0)
        let photoSmall1=document.getElementById('lessons-image-photo-small-1').src
        let photoSmall2=document.getElementById('lessons-image-photo-small-2').src
        let photoSmall3=document.getElementById('lessons-image-photo-small-3').src
        $("#lessons-image-photo-small-1").bind("click", function() {
            $("#lessons-image-photo-big-img").attr("src", photoSmall1);
        });
        $("#lessons-image-photo-small-2").bind("click", function() {
            $("#lessons-image-photo-big-img").attr("src", photoSmall2);
        });
        $("#lessons-image-photo-small-3").bind("click", function() {
            $("#lessons-image-photo-big-img").attr("src", photoSmall3);
        });

        if ($("#lessons-image-photo-small-3").attr("src")==" ") {
            $("#lessons-image-photo-small-3").hide()
        }
        if ($("#lessons-image-photo-small-2").attr("src")==" ") {
            $("#lessons-image-photo-small-2").hide()
        }
        

    },
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
		return (
            
			<div>
               <div id="lessons-image-b-popup">
                <div className="lessons-image-b-popup-content">
                    <div id="b-popup-lesson-close-button"> 
                        <Link to="/lessons"><p onClick={browserHistory.goBack}>✖</p> </Link>
                    </div>
                    <h1 className="lessons-image-name">{lesson.name} </h1>
                    <div className="lessons-image-photo-big" >
                        <img id="lessons-image-photo-big-img" src={lesson.image1} />
                    </div>
                    <div className="lessons-image-photo-small">
                        <img  id="lessons-image-photo-small-1" src={lesson.image1} />
                        <img  id="lessons-image-photo-small-2" src={lesson.image2} />
                        <img  id="lessons-image-photo-small-3" src={lesson.image3} />
                    </div>
                    <div className="order-buttons-back-mobile product-info-button-back" onClick={browserHistory.goBack}>« назад</div>


                    
                </div>
               </div>  
			</div>
			)
	}
});



export default LessonsImage;