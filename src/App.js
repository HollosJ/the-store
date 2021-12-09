import './App.scss';
import Nav from "./components/Nav";
import Store from "./components/Store";
import Wishlist from "./components/Wishlist";
import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"; 

const LOCAL_BASKET = JSON.parse(localStorage.getItem("basket")) || [];
const LOCAL_WISHLIST = JSON.parse(localStorage.getItem("wishlist")) || [];

const App = () => {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState(LOCAL_BASKET);
  const [wishlist, setWishlist] = useState(LOCAL_WISHLIST);

  //initial items fetch & modify data for wishlist
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      //update data state to reflect wishlist
      wishlist.forEach(wItem => {
        let itemToUpdate = data.indexOf(data.find(item => item.id === wItem.id));
        data[itemToUpdate].inWishlist = true;
      })
      setItems(data);
    });
    // eslint-disable-next-line
  },[])

  //init basket & wishlist from localStorage
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  },[basket])
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  //add to basket
  const handleBasketAdd = (id, q) => {
    const itemToAdd = items.find(item => item.id === id);
    const newBasket = [...basket]
    let itemInBasket = newBasket.find((item) => id === item.id)

    if(itemInBasket) {
      itemInBasket.qt += q
      toast.success(`x${q} ${itemToAdd.title} now in basket`)

    } else {
      itemInBasket = {
        ...itemToAdd,
        qt: q,
      };
      newBasket.push(itemInBasket);
      toast.success(`x${q} ${itemToAdd.title} added to basket!`)
    }
    setBasket(newBasket)
  }
  
  //add to wishlist
  const handleWishlistAdd = (id) => {
    const itemToAdd = items.find(item => item.id === id);
    const newWishlist = [...wishlist]
    const itemInWishlist = newWishlist.find((item) => id === item.id);
    toast.success(`${itemToAdd.title} added to wishlist!`)
    
    //if not in wishlist, add to wishlist
    if(!itemInWishlist){
      itemToAdd.inWishlist = true;
      newWishlist.push(itemToAdd);
      setWishlist(newWishlist);
    }
  }
  
  //remove specific item from basket
  const handleBasketRemove = (itemToRemove) => {
    setBasket(basket.filter(item => item !== itemToRemove))
    toast.error(`All ${itemToRemove.title} removed from basket`)
  }
  
  //remove item from wishlist
  const handleWishlistRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id))
    toast.error(`${items.find(item => item.id === id).title} removed from wishlist`)
    
    //update item state to reflect wishlist state
    let newItems = [...items]
    let idx = newItems.indexOf(newItems.find(item => item.id === id))
    newItems[idx].inWishlist = false
  }
  
  //clear entire basket
  const handleBasketClear = () => {
    setBasket([])
  };
  
  return (
    <Router>
        <div className="App">
          <Nav className="Nav"
            clear={handleBasketClear}
            delete={handleBasketRemove}
            items={basket}/>
          <div className="container content">
            <Switch>
              <Route path="/wishlist" render={
                () => <Wishlist 
                removeFromWishlist={handleWishlistRemove}
                items={wishlist}/>
              } />
              {/* <Route path="/items/:id"
               component={Item} /> */}
               {/* <Route path="/items/:id" render={() => {
                 <Item addToBasket={handleBasketAdd} />
               }} component={Item}/> */}
              <Route path="/" render={
                () => <Store 
                wishlist={wishlist}
                items={items}
                addToBasket={handleBasketAdd}
                addToWishlist={handleWishlistAdd}
                removeFromWishlist={handleWishlistRemove}/>
              }/>
            </Switch>
            <ToastContainer 
            position="bottom-right"
            autoClose={2000} />
          </div>
        </div>
    </Router>
  );
}

export default App;
