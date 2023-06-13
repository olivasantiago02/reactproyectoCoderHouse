import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav className="text-center">
            <h3 className="title1">OlivaStore</h3>
            
            <div className="divcart">
                <button className="boton1">Remeras</button>
                <button className="boton2">Buzos</button>
                <button className="boton3">Medias</button>
            </div>
            <CartWidget/>
        </nav>
    
    )
}

export default NavBar;

