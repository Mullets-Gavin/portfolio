import React from 'react'

import ProfilePic from '../images/pfp.png'

export default () => {
    return (
        <div class="info">
            <div class="description">
                <h1 class="description-title">Programmer and Game Designer</h1>
                <p class="description-content">Creating exciting experiences since 2013</p>

                <div class="avatar">
                    <img class="avatar-img" alt="Profile Pic" src={ProfilePic}></img>
                </div>
            </div>
        </div>
    )
}