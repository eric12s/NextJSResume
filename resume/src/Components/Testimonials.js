import React from 'react'

const Testimonials = (props) => {
    if(props.data){
        var testimonial = props.data.map((testimonial) => {
            return <li>
                    <blockquote>
                        <p>{testimonial.text}</p>
                        <cite>{testimonial.user}</cite>
                    </blockquote>
                    </li>
        })
    }

    return(
        <section id="testimonials">
            <div className="text-container">
            <div className="row">
                <div className="two columns header-col">
                    <h1>Quate</h1>
                </div>
                <div className="ten columns flex-container">
                    <ul className="slides">
                        {testimonial}
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Testimonials