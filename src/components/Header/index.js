import React, { PureComponent } from "react";
import './Header.css'
import intelLogo from './Intel-logo.png'

class Header extends PureComponent {

    render() {
        return (
            <div className="Navbar">
                <img src={intelLogo} className="d-inline-block align-top Header-logo" />
                RU Floor Plan
            </div>
        )
    }
}

export default Header;