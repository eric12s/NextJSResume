import React from 'react'

const Header = (props) => {
    if(props){
        var name = props.name;
        var occupation= props.occupation;
        var description= props.description;
        var city= props.city;
        var networks= props.social.map(
            function(network){
                  return <li key={network.name}><a href={network.url} aria-label={network.name}><i className={network.className}></i></a></li>
            }
        )
      }

    return( 
        <header id="home" style={{ height: 358 }}>

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current" key="home"><a className="smoothscroll" href="#home">Home</a></li>
                    <li key="about"><a className="smoothscroll" href="#about">About</a></li>
                    <li key="resume"><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
            
            
            <div className="row banner">
                <div className="banner-text">
                    <a className="smoothscroll name" href="#about"><h1 className="responsive-headline">I'm {name}.</h1></a>
                    <h2>I'm a {city} based <span>{occupation}</span>.<br/> 
                    {description}.</h2>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about" aria-label="scroll down"><i className="icon-down-circle"></i></a>
            </p>
        </header>
 )    
}

export default Header;
