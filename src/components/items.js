import React from 'react'

export default (props) => {
    return (
        <div class="testimonials-item">
            <img class="testimonials-avatar" alt="Testimonial" src={props.avatar}/>

            <p class="testimonials-body">"{props.body}"</p>

            <h3 class="testimonials-header">{props.name}</h3>
            <p class="testimonials-body">{props.job}</p>
        </div>
    )
}