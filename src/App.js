import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import { Value } from 'sass';


const arr =[]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
  axios.get('https://687e3f8ec07d1a878c31e6be.mockapi.io/Items').then((res) =>{
    setItems(res.data);
  });
  axios.get('https://687e3f8ec07d1a878c31e6be.mockapi.io/cart').then((res) =>{
    setCartItems(res.data);
  });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://687e3f8ec07d1a878c31e6be.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

    const onRemoveItem = (id) =>{
      axios.delete(`https://687e3f8ec07d1a878c31e6be.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    const onAddFavority = (obj) => {
    axios.post('https://688383b221fa24876a9e5b76.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavority={onAddFavority}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
