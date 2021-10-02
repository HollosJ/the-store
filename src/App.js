import './App.scss';
import Nav from "./components/Nav";
import Store from "./components/Store";
import Item from "./components/Item";
import Wishlist from "./components/Wishlist";
import Error from "./components/Error";
import React, {useState, useEffect} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"; 

const LOCAL_BASKET = JSON.parse(localStorage.getItem("basket")) || [];
const LOCAL_WISHLIST = JSON.parse(localStorage.getItem("wishlist")) || [];

const App = () => {
  const [basket, setBasket] = useState(LOCAL_BASKET);
  const [wishlist, setWishlist] = useState(LOCAL_WISHLIST);
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  },[basket])
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const handleBasketAdd = async (id) => {
    const itemToAdd = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    const newBasket = [...basket]
    let itemInBasket = newBasket.find((item) => id === item.id)

    if(itemInBasket) {
      itemInBasket.qt++
    } else {
      itemInBasket = {
        ...itemToAdd,
        qt: 1,
      };
      newBasket.push(itemInBasket);
    }
    setBasket(newBasket)
  }
  const handleWishlistAdd = async (id) => {
    const itemToAdd = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    const newWishlist = [...wishlist]
    const itemInWishlist = newWishlist.find((item) => id === item.id);

    if(!itemInWishlist){
      newWishlist.push(itemToAdd)
      setWishlist(newWishlist)
    } else {
      handleError()
    }
  }

  //remove specific item from basket
  const handleBasketRemove = (itemToRemove) => {
    setBasket(basket.filter(item => item !== itemToRemove))
  }

  //clear entire basket
  const handleBasketClear = () => {
    setBasket([])
  };

  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false)
    }, 5000)
  }
 
  

  return (
    <Router>
        <div className="App">
          <Nav className="Nav" clear={handleBasketClear} delete={handleBasketRemove} count={Object.keys(basket).length} items={basket}/>
          <div className="container content">
            <Switch>
              <Route path="/" exact render={
                () => <Store 
                addToBasket={handleBasketAdd}
                addToWishlist={handleWishlistAdd}/>
              }/>
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/items/:id" component={Item} />
            </Switch>
          </div>
          {error ? <Error text={"Item already in wishlist!"}/> : null}
        </div>
    </Router>
    
  );
}

export default App;
