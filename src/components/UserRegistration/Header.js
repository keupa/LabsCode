import React, {Fragment} from 'react'
import laapsLogo from "../../assets/images/LaapsLogo.svg";

function Header() {
    return(
        <Fragment>
            <img className="LAAPS-logo" src={laapsLogo} alt="LAAPS logo" />
            <h4 className="registro">REGISTRO</h4>
        </Fragment>
    )
}

export default Header