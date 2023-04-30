import React from "react"; 
import "./Header.css";
import LogoCaixinha from "../assets/imgs/logocaixinha.svg"
import LogoDeliverize from "../assets/imgs/logodeliverize.svg"

function Header() {
    return (
        <>
            <nav className="navHeader">
                <div>
                    <img className="logoCaixinhasvg" src={LogoCaixinha} alt="Caixinha Veloz" />
                    <img src={LogoDeliverize} alt="Logo Principal" />
                </div>
            </nav>
        </>
    )
}

export default Header;