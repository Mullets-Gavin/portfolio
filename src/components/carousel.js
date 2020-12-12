import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './items.js'

import Temp from '../images/pfp.png'

export default () => {
    return (
        <Carousel itemsToShow={1}>
            <Item name="Gavin Rosenthal" job="Lead Programmer, Mullet Mafia Dev" body="This is a temporary testimonial to demonstrate how testimonials will be displayed. If you write one, thanks." avatar={Temp}/>
        </Carousel>
    )
}