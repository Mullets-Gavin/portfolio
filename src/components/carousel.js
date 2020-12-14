import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './items.js'

import Luke from '../images/luke.png'

export default () => {
    return (
        <Carousel itemsToShow={1}>
            <Item name="Luke Shadwell" job="Founder, RTrack" body="Gavin is an amazing resource to consult on user experience and visual design.
            He's also an extremely capable programmer when it comes to making Roblox games, and his insights into the developer perspective have been incredibly useful
            in the development of RTrack." avatar={Luke}/>
        </Carousel>
    )
}