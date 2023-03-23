import { useEffect, useState } from "react"
import { getDishesById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [dishes, setDishes] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        getDishesById(itemId)
            .then(food => {
                setDishes(food)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle de {dishes.name} </h1>
            <ItemDetail {...dishes}/>
        </div>
    )
}

export default ItemDetailContainer