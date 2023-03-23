import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getDishes, getDishesByCategory } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        
        const productsByCategory = categoryId ? getDishesByCategory : getDishes

        productsByCategory(categoryId)
            .then(food => {
                setDishes(food)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(categoryId){

        const categoryCap = categoryId.charAt(0).toUpperCase() + categoryId.slice(1); 

        return (
            <div class = "itemListContainer">
                <h1>{categoryCap}</h1>
                <ItemList dishes={dishes}/>
            </div>
        )  

    } else {
        
        return (
            <div class = "itemListContainer">
                <h1>{greeting}</h1>
                <ItemList dishes={dishes}/>
            </div>
        )
    }

}

export default ItemListContainer