import React from "react"; 
import "./Header.css";
import LogoCaixinha from "../assets/imgs/logocaixinha.svg"
import LogoDeliverize from "../assets/imgs/logodeliverize.svg"
/* import { MdKeyboardArrowDown } from "react-icons/md"*/
import { MdOutlineAccountCircle } from "react-icons/md"
import { MdOutlineShoppingCart } from "react-icons/md"


function Header() {
    return (
        <>
            <nav className="navHeader">
                <div className="logos">
                    <img className="logoCaixinhasvg" src={LogoCaixinha} alt="Caixinha Veloz" />
                    <img className="logoDeliverizesvg" src={LogoDeliverize} alt="Logo Principal" />
                </div>
                    <div className="local_entrega">
                        <p className="p_force" style={{fontFamily: "Roboto", color: "#ed3237", fontWeight: "500"}}>Entrega:</p>
                        <p style={{color: "#656363", fontWeight: "700"}}>R. Antonio Braune, 222</p>
                    </div>
                    <div className="barra_pesquisa">
                        <input className="busca" type="text" placeholder="Busque por estabelecimentos ou produtos" />
                    </div>
                <div>
                    <div className="login_user"><span className="iconUser"><MdOutlineAccountCircle size={27.67} color="#ED3237" /></span>Entrar</div>
                </div>
                <div>
                    <div className="login_carrito"><span className="iconCarrito"><MdOutlineShoppingCart size={27.67} color="#ED3237" /></span>Carrinho</div>
                </div>
            </nav>
        </>
    )
}

export default Header;