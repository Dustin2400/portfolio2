import React from 'react';

function Footer() {

    return (
        <footer>
            <a href="https://github.com/Dustin2400" alt="GitHub">
                <img src={require("../../images/github-icon.png")} />
            </a>
            <a href="https://www.linkedin.com/in/dustin-grijalva/" alt="LinedIn">
                <img src={require("../../images/linkedin.png")} />
            </a>
            <a href="https://stackoverflow.com/users/16777098/dustin" al="Stack Overflow">
                <img src={require("../../images/stackoverflow.png")} />
            </a>
        </footer>
    )
}

export default Footer