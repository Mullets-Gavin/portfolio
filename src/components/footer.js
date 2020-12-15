import React from 'react'
import { Link } from 'gatsby'

export default () => {
    return (
        <div class="footer">
            <div class="footer-directory">
                <div class="footer-content">
                    <div class="footer-buttons">
                        <Link activeClassName="footer-map" class="footer-map" to="/">Home</Link>
                        <Link activeClassName="footer-map" class="footer-map" to="/games">Games</Link>
                        <Link activeClassName="footer-map" class="footer-map" to="/software">Software</Link>
                        <Link activeClassName="footer-map" class="footer-map" to="/contact">Contact</Link>
                    </div>

                    <hr class="footer-credit"/>

                    <div class="footer-credit">
                        <p>Made by ♥ by Gavin Rosenthal | <a class="footer-map" href="https://github.com/Mullets-Gavin/Mullets-Gavin.github.io" rel="noreferrer" role="button" target="_blank">Source on Github</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}