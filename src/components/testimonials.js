import React from 'react'
import Carousel from './carousel.js'

export default () => {
    return (
        <div class="testimonials">
            <div class="testimonials-content">
                <h1 class="testimonials-title">Testimonials</h1>
                <p class="testimonials-body">People have said some pretty cool things about me</p>

                <div class="testimonials-carousel">
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}