import React from 'react'

const About = ({ props }) => {
    if(props){
        var name = props.name;
        var profilepic = '/images/' + props.image;
        var bio = props.bio;
        var city = props.city;
        var phone= props.phone;
        var email = props.email;
        var resumeDownload = props.resumedownload;
    }
    

    return(
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img height={170} width={170} className="profile-pic" src={profilepic} alt="Eric Sabag Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{bio}</p>   
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Me</h2>
                            <p className="address">
                                <span>{name}</span><br/>
                                <span>{city}</span><br/>
                                <span>{phone}</span><br/>
                                <span>{email}</span><br/>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;