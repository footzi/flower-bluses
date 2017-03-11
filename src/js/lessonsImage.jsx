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
                        {/*<ul className="bxslider-lesson">
                            <li><img src={lesson.image1} /></li>
                            <li><img src={lesson.image2} /></li>
                            <li><img src={lesson.image3} /></li>
                        </ul>
                        <div id="bx-pager">
                            <a data-slide-index="0" href=""><img src={lesson.image1} /></a>
                            <a data-slide-index="1" href=""><img src={lesson.image2} /></a>
                            <a data-slide-index="2" href=""><img src={lesson.image3} /></a>
                        </div>*/}
                        <div id="photo-big">
                            <img src={lesson.image1} />
                        </div>

                        <div id="photo-small">
                            <img src={lesson.image2} />
                        </div>

                    </div>
                </div>
               </div>  
			</div>
			)
	}
});

let photoBig = document.getElementById("photo-big")
let photoSmall = document.getElementById("photo-small")

photoSmall.addEventListener("click", function () {
    if (photoBig.getAttribute("src")=="{lesson.image1}") {
        console.log("ok")
    }
})
// $(".photo-small").bind("click", function() {
//       $(".photo-big").attr("src","{lesson.image2}");
// });

export default LessonsImage;