import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import $ from "jquery";

let LessonsImage = React.createClass({
    componentDidMount() {
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
                    <div className="lessons-image-name">{lesson.name} </div>
                   
                    
                    <div className="lessons-image-photo-big" >
                        <img id="lessons-image-photo-big-img" src={lesson.image1} />
                    </div>
                    <div className="lessons-image-photo-small">
                        <img  id="lessons-image-photo-small-1" src={lesson.image1} />
                        <img  id="lessons-image-photo-small-2" src={lesson.image2} />
                        <img  id="lessons-image-photo-small-3" src={lesson.image3} />
                    </div>


                    
                </div>
               </div>  
			</div>
			)
	}
});



export default LessonsImage;