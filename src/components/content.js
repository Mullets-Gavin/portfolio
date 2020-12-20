import React from 'react';

export default (props) => {
    let Image;
    if (props.img) {
        Image = <img class="content-img" alt={props.name} src={props.img}/>
    }

    return (
        <a class="content-container" href={props.link} rel="noreferrer" target="_blank">
            {Image}

            <div class="content-body">
                <h1 class="content-title">{props.name}</h1>
                <i class="content-hint">{props.tldr}</i>
                
                <div class="content-gap"/>
                
                <h2 class="content-title">{props.title1}</h2>
                <p class="content-title">{props.about}</p>
                
                <div class="content-gap"/>

                <h2 class="content-title">{props.title2}</h2>
                <ul class="content-title">
                    <li>{props.stats1}</li>
                    <li>{props.stats2}</li>
                    <li>{props.stats3}</li>
                </ul>
            </div>
        </a>
    )
}