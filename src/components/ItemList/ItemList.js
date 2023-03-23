import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ dishes }) => {
    return (
        <div class = "itemList">
            {
                dishes.map(food => {
                    return <Item key={food.id} {...food}/>
                })
            }
        </div>
    )
}

export default ItemList