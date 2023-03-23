import './ItemDetail.css' 

const ItemDetail = ({ name, price, img, description, longDescription, extras }) => {
    return (
        <div class = 'itemDetail'>

            <div class="itemDetailImg">
                <img src={img} alt={name} />
            </div>
            
            <div class="itemDetailText">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{longDescription}</p>
                <p>{extras}</p>
                <h3>Precio: ${price}</h3>
            </div>
            
        </div>
    )
}

export default ItemDetail