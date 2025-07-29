import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsRes, cartRes, favoritesRes] = await Promise.all([
          axios.get('https://687e3f8ec07d1a878c31e6be.mockapi.io/Items'),
          axios.get('https://687e3f8ec07d1a878c31e6be.mockapi.io/cart'),
          axios.get('https://688743f3071f195ca97ffe5d.mockapi.io/favorites')
        ]);
        setItems(itemsRes.data);
        setCartItems(cartRes.data);
        setFavorites(favoritesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        await axios.delete(`https://687e3f8ec07d1a878c31e6be.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://687e3f8ec07d1a878c31e6be.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://687e3f8ec07d1a878c31e6be.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

const onAddFavorite = async (obj) => {
  try {
    if (!obj || obj.id === undefined) {
      throw new Error('Invalid item object');
    }
    
    const existingItem = favorites.find((item) => Number(item.id) === Number(obj.id));
    
    if (existingItem) {
      await axios.delete(`https://688743f3071f195ca97ffe5d.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id))); // Исправлено здесь
    } else {
      if (!obj.name || !obj.price || !obj.imageUrl) {
        throw new Error('Item is missing required fields');
      }
      
      const { data } = await axios.post('https://688743f3071f195ca97ffe5d.mockapi.io/favorites', obj);
      setFavorites(prev => [...prev, data]);
    }
  } catch (error) {
    console.error('Error updating favorites:', error);
    alert(error.message || 'Не удалось добавить в закладки');
  }
};

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.id) === Number(id));
}

  return (
    <AppContext value={{items, cartItems, favorites, setCartOpened, setCartItems}}>
      <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavority={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              onAddFavority={onAddFavorite}
            />
          }
          exact
        />
      </Routes>
    </div>
    </AppContext>
  );
}

export default App;