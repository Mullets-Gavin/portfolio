import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './items.js'

import Temp from '../images/pfp.png'

export default () => {
    return (
        <Carousel itemsToShow={1}>
            <Item name="Mullets_Gavin" job="Lead Programmer, Mullet Mafia Dev" body="This is a temporary testimonial to demonstrate it" avatar={Temp}/>
        </Carousel>
    )
}