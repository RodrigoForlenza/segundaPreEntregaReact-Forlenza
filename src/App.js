import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useParams } from 'react-router-dom'

function App() {

  const { categoryId } = useParams()
  console.log(categoryId)

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenido a Ohashi - Comida Japonesa" />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
