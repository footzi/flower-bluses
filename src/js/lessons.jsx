import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
let Lessons = React.createClass({
    componentDidMount () {
        window.scrollTo(0, 0)
        $(function(){
                $(window).resize(function(){
                    if($(window).width()<=640) {
                        $("body").css({"background-image":"url(/images/fon2.jpg)"})
                    } else {
                        $("body").css({"background-image":"url(/images/fon-lessons.jpg)","height":"229vw"});
                        //  $("#footer").css({"margin-top":"17.4%"});
                    }
                }).resize()
            })
       
    },
	contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            lessons
        }
    },

    lessonPreviewClick(lessonId) {
        this.context.router.push(`/lessons/${lessonId}`);
    },
    imagePreviewClick(lessonId) {
        this.context.router.push(`/lessons/picture/${lessonId}`);
    },
	render () {
		let { lessons } = this.state;
		return (
			<div className="lessons">
                <h1 className="lessons-title">МАСТЕР-КЛАССЫ</h1>
                {/*<div className="lessons-introduction">
                    <div className="lessons-introduction-next-date">Ближайшие даты проведения обучения</div>
                    <div className="lessons-introduction-date">13, 19, 25 марта</div>
                    <a href="/lessons/1"><div className="lessons-introduction-button">Записаться</div></a>
                </div> */}
                <div className="lessons-info">
                    <p>Все предлагаемые мастер-классы проводятся в моей уютной домашней мастерской. Здесь достаточно места для 6 человек.</p>
                    {/*<p>Используя опыт своего обучения у разных мастеров и на основе опыта проведения своих МК, я постаралась взять лучшее и предложить вам наиболее удобную форму обучения! Ее преимущества заключаются в том, что:</p>*/}
                    <div className="lessons-info-more">
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="/images/marker.png" />
                             Во-первых, занятия будут проводиться в небольших группах. Максимальное количество участников - 4 человека. 
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="/images/marker.png" />
                             Во-вторых, Все необходимые материалы и фурнитура для создания украшений с реалистичными цветами предоставляются. Вам дополнительно докупать ничего не требуется.  
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="/images/marker.png" />
                            В-третьих, с завершенного МК, вы будете уходить с полностью готовой работой. Это может быть просто реалистический цветок, который можно будет поставить в вазу, или это будет брошка, или небольшая заколка- зажим.
                        </div>
                        <div className="lessons-info-more-text">
                            <img className="about-introduction-marker lessons-info-more-marker" src="/images/marker.png" />
                             В-четвёртых, участие в мастер-классах осуществляется по предварительной записи. Вы можете оставить свою заявку с помощью <Link className="link-contacts" to="/contacts">формы обратной связи</Link> или позвонив по телефону: +79038482661. 
                        </div>
                    </div>
                    <p> Стоимость одного часа МК независимо от количества человек 350 руб. Шесть часов и более за одно посещение рассчитывается по 300 руб. за час.</p>
                </div>

                

                <div className="lessons-list">
                {
                    lessons.map(lesson => 
                    <LessonsPreview
                        key={lesson.id}
                        imageId={lesson.imageid}
                        openImage={this.imagePreviewClick.bind(null, lesson.id)}
                        openPopup={this.lessonPreviewClick.bind(null, lesson.id)}
                        name={lesson.name}
                        imagePreview={lesson.imagePreview}
                        info={lesson.info}
                        duration={lesson.duration}
                        level={lesson.level}
                        cost={lesson.cost}
                        
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
		let { name, info, imagePreview, duration, level, openPopup, openImage, cost} = this.props;
		return(
			<div className="lesson">
               <div onClick={openImage}>
                    <img className="lesson-img" src={imagePreview}/>
                </div>
                <div className="lesson-info">
                    <div className="lesson-name">{name}</div>
                    <div className="lesson-more">
                        <div>{info}</div>
                        <div>{duration}</div>
                        <div>{level}</div>
                        <div>{cost}</div>
                    </div>
                </div>
                    <div className="lessons-introduction-button lesson-button" onClick={openPopup}>Записаться</div>
                <div>
                     {this.props.children} 
                 </div>
			</div>
			)
	}
})
export default Lessons;

