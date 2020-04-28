import React from 'react'

const Resume = (props) => {
    if(props.data){
        var skillmessage =props.data.skillmessage
        var education = props.data.education.map((education) => {
            var description = education.description.map((line) => {
                return <div key={line}>{line}</div>
            })

            /////Check if the education still in proccess//////////////////////
            var fullDate = education.date.split(' ');
            var date = fullDate[0].split(/\//);
            var time = fullDate[1];
            var newDate = date[1] + '/' + date[0] + '/' + date[2] + ' ' + time;
            var gradDate = new Date(newDate);

            var isGrad = ''
            var bull = ''
            if(gradDate > new Date()){
                bull = <span>&bull;</span>
                isGrad = "in Proccess"
            }
            ///////////////////////////////////////////////////////////////////
            return <div key = {education.school}><h3>{education.school}</h3>
            <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}{bull}{isGrad}</em></p>
            <div className="description">{description}</div></div>
        })
        var skills = props.data.skills.map((skill) => {
            return <div key = {skill.name}><h3>{skill.name}</h3><p><span>&bull;</span>{skill.level}<span>&bull;</span></p></div>
        })
        var technologies = props.data.technologies.map((technology) => {
            var image = "images/"+technology.image
            return <div className="columns feature-item" key = {technology.name}>
                <img className="skills" src={image} alt={technology.name}></img>
                <h5>{technology.name}</h5>
                <p>{technology.description}</p>
                </div>
            })
    }

    return(
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                           {education}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                <p className="info">{skillmessage}</p>
                    <div className="row item">
                        <div className="twelve columns">
                           {skills}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row technology">

                <div className="three columns header-col">
                        <h1><span>technologies</span></h1>
                 </div>            
            
                <div>
                <div className="nine columns main-col"><p className="lead center">As a programmer, I find that learning about new technologies help my development, and gives me new tools to improve my apps. I find it enjoyable and satisfying to learn new technologies.</p></div>
                <ul className="bgrid-quarters s-bgrid-thirds cf">
                    <>{technologies}</>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;