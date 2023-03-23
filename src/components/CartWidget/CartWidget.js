import './CartWidget.css'
import icono from './icono-carrito.svg';

const CartWidget = () => {
    return  (
            <div className="IconoUsuarioCarrito">

                <a href="">
                    <img src={icono} width="40px" alt="ícono de carrito" />
                </a>
                
                <div className="Contador">
                    {0}
                </div>

            </div>
    )
}

export default CartWidget