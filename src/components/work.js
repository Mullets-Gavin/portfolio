import React from 'react'

export default (props) => {
    return (
        <div class="work-content">
            <div class="work-header">
                <img class="work-img" alt="Roblox" src={props.img}></img>
                <h2>{props.title}</h2>
            </div>
            
            <div class="work-info">
                <i>{props.info}</i>

                <h3>Description</h3>
                <ul>
                    <li>{props.desc1}</li>
                    <li>{props.desc2}</li>
                    <li>{props.desc3}</li>
                </ul>

                <h3>Accomplishments</h3>
                <ul>
                    <li>{props.accomp1}</li>
                    <li>{props.accomp2}</li>
                    <li>{props.accomp3}</li>
                </ul>

                <p>{props.date}</p>
            </div>
        </div>
    )
}