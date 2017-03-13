import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import $ from "jquery";

let LessonsImage = React.createClass({
    componentDidMount() {
        let photoBig=document.getElementById('photo-big-img').src
        let photoSmall1=document.getElementById('photo-small-1').src
        let photoSmall2=document.getElementById('photo-small-2').src
        let photoSmall3=document.getElementById('photo-small-3').src
        $("#photo-small-1").bind("click", function() {
            $("#photo-big-img").attr("src", photoSmall1);
        });
        $("#photo-small-2").bind("click", function() {
            $("#photo-big-img").attr("src", photoSmall2);
        });
        $("#photo-small-3").bind("click", function() {
            $("#photo-big-img").attr("src", photoSmall3);
        });


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
                    {lesson.name}
                    <div className="product-carousel">
                      
                       <div className="photo-big" >
                            <img id="photo-big-img" src={lesson.image1} />
                        </div>
                        <div className="photo-small">
                            <img id="photo-small-1" src={lesson.image1} />
                            <img id="photo-small-2" src={lesson.image2} />
                            <img id="photo-small-3" src={lesson.image3} />
                        </div>


                    </div>
                </div>
               </div>  
			</div>
			)
	}
});



export default LessonsImage;