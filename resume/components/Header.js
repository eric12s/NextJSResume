import React from 'react'
import Link from 'next/link';

const Header = (props) => {
    if(props.data){
        var name = props.data.name;
        var occupation= props.data.occupation;
        var description= props.data.description;
        var city= props.data.city;
        var networks= props.data.social.map(
            function(network){
                  return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            }
        )
      }

    return( 
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><Link href="#about"><a className="smoothscroll">About</a></Link></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
            
            
            <div className="row banner">
                <div className="banner-text">
                    <a className="smoothscroll name" href="#about"><h1 className="responsive-headline">I'm {name}.</h1></a>
                    <h3>I'm a {city} based <span>{occupation}</span>.<br/> 
                    {description}.</h3>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
 )    
}

export default Header;
