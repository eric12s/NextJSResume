
import React from 'react'

const Portfolio = (props) => {
    if(props.data){
        var projects = props.data.projects.map((project)=>{
            return <div className="columns feature-item" key={project.title}>
                <h3><span>{project.title}</span></h3>
                <div>{project.description}</div>
                <a href={project.url}>link</a>
            </div>
        })
    }

    return(
        <section id="portfolio">
            <h1>Check out my projects</h1>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </ul>
        </section>
    )
}

export default Portfolio;