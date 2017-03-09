import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";

let Lessons = React.createClass({
	contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            lessons
        }
    },

    // handlePreviewClick(lessonId) {
    //     this.context.router.push(`/lessons/${lessonId}`);
    // },
    handlePreviewClick(imageId) {
        this.context.router.push(`/lessons/${imageId}`);
    },
	render () {
        // let pageLink=location.pathname;
        // let lessonsLink="/lessons";
        // if(false !== pageLink.indexOf(lessonsLink)) {
        //      
        //  }
        document.body.style.backgroundImage="url(/images/fon-lessons.jpg)"
        document.getElementById("footer").style.marginTop="3.1%"

		let { lessons } = this.state;
		return (
			<div className="lessons">
                <div className="lessons-title">МАСТЕР-КЛАССЫ:</div>
                <div className="lessons-introduction">
                    <div className="lessons-introduction-next-date">Ближайшие даты проведения обучения</div>
                    <div className="lessons-introduction-date">13, 19, 25 марта</div>
                    <div className="lessons-introduction-button">Записаться</div>
                </div>
                <div className="lessons-info">
                    <p>Для тех, кто хочет научиться очень популярному виду искусства «Создание реалистичных цветов из самозастывающих полимерных глин». Все предлагаемые мастер-классы проводятся в моей уютной домашней мастерской. Здесь достаточно места для 6 человек. Но, на сегодняшний день мне удобен формат проведения МК для 1-4 человек.</p>
                    <p>Используя опыт своего обучения у разных мастеров и на основе опыта проведения своих МК, я постаралась взять лучшее и предложить вам наиболее удобную форму обучения! Ее преимущества заключаются в том, что:</p>
                    <div className="lessons-info-more">
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="images/marker.png" />
                             Во-первых, наши занятия будут проводиться независимо от количества пришедших на МК учеников, даже для одного человека! (группа небольшая, до 4 человек!). 
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="images/marker.png" />
                             Во-вторых, вы можете выбрать любой из предложенных ниже МК! И я, лично вам, буду показывать нюансы и тонкости лепки выбранного вами цветка!  
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="images/marker.png" />
                            В-третьих, с завершенного МК, вы будете уходить с полностью готовой работой. Это может быть просто реалистический цветок, который можно будет поставить в вазу, или это будет брошка, или небольшая заколка- зажим... 
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="images/marker.png" />
                             В-четвёртых, у вас будет возможность тратить столько часов на одно посещение, сколько вам необходимо. И Вы можете придти в указанные дни в удобное для вас время.  
                        </div>
                    </div>
                    <p> Стоимость одного часа МК независимо от количества человек 350 руб. Шесть часов и более за одно посещение рассчитывается по 300 руб. за час.</p>
                </div>

                

                <div className="lessons-list">
                {
                    lessons.map(lesson => 
                    <LessonsPreview
                        key={lesson.id}
                        imageId={lesson}
                        imageId={this.handlePreviewClick.bind(null, lesson.imageId)}
                        onClick={this.handlePreviewClick.bind(null, lesson.id)}
                        name={lesson.name}
                        image={lesson.image}
                        info={lesson.info}
                        duration={lesson.duration}
                        level={lesson.level}
                        
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
        function close(e) {
            e.preventDefault();
            document.getElementById("lessons-image-b-popup").style="display:none";
         }
             function openPopup(e) {
            e.preventDefault();
            document.getElementById("b-popup").style="display:table"
  }
        function openImage(e) {
            e.preventDefault();
            document.getElementById("lessons-image-b-popup").style="display:table"
  }
		let { name, info, image, duration, level, onClick, imageId} = this.props;
		return(
			<div className="lesson">
               
                    <img className="lesson-img" src={image} onClick={imageId}/>
                
                <div className="lesson-info">
                    <div className="lesson-name">{name}</div>
                    <div className="lesson-more">
                        <div>{info}</div>
                        <div>{duration}</div>
                        <div>{level}</div>
                    </div>
                </div>
                <div onClick={onClick}>
                    <div className="lessons-introduction-button lesson-button" onClick={openPopup}>Записаться</div>
                </div>

                <div>
                     {this.props.children} 
                 </div>
			</div>
			)
	}
})
export default Lessons;

