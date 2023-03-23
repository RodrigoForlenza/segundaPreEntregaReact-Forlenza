const dishes = [
    { 
        id: '1', 
        name: 'Gyoza', 
        price: 1000, 
        category: 'entradas', 
        img:'/imgs/gyoza.jpg',  
        stock: 10, 
        description:'6 Unidades de gyozas rellenas de carne de cerdo con especias cocidas al vapor y grilladas.',
        longDescription: 'La gyoza es una masa rellena, principalmente, de carne y vegetal al vapor o a la plancha. En nuestro caso la cocción es mixta, ya que se doran primero en sartén para luego agregar agua y terminar la cocción al vapor.',
        extras: 'Acompañadas de salsa típica con vinagre de arroz y aceite de sésamo. Bowl de arroz opcional.'
    },

    { 
        id: '2', 
        name: 'Miso Ramen', 
        price: 2000, 
        category: 'especialidades', 
        img:'/imgs/ramen.jpg',
        stock: 8, 
        description:'Porción grande de Miso Ramen.',
        longDescription: 'Caldo relativamente espeso elaborado a base de pasta de miso, vegetales y concentrado de cerdo, originaria de Hokkaido (isla más al norte de Japón) y típica de época invernal. Servido con trozos de cerdo (chashu), fideos al huevo (blandos, de grosor medio), verduras salteadas (puerro, pak choi, hongos shiitake), huevo y menma (brotes de bambú fermentados). Plato robusto, sabroso y rico en proteinas y minerales.',
        extras: 'Taza de té verde opcional.'
    },

    { 
        id: '3', 
        name: 'Dorayaki', 
        price: 700, 
        category: 'postres', 
        img:'/imgs/dorayaki.jpg', 
        stock: 5, 
        description: 'Porción de tres Dorayakis.',
        longDescription: 'El Dorayaki es un pastel clásico de la repostería japonesa elaborado a base de harina, huevo, agua, azúcar y miel. Consiste en dos bizcochos de forma redonda (este tipo de pan se denomina kasutera) relleno de anko, una pasta de porotos hecha con la variante de porotos azuki.',
        extras: 'Infusión a elección.'
    }

]

export const getDishes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dishes)
        }, 2000)
    })
}

export const getDishesByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dishes.filter(d => d.category === categoryId))
        }, 2000)
    })
}

export const getDishesById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dishes.find(d => d.id === productId))
        }, 2000)
    })
}