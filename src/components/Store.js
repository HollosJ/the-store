import React from 'react'
import ItemCard from "./ItemCard"

const Store = (props) => {
    return (
        <div className="grid">
           {props.items.length > 0 ? (
               props.items.map((item) => {
                return <ItemCard
                key={item.id}
                id={item.id}
                name={item.title}
                img={item.image}
                price={item.price}
                addToBasket={props.addToBasket}
                addToWishlist={props.addToWishlist} 
                removeFromWishlist={props.removeFromWishlist}
                inWishlist={item.inWishlist ? true : false}/>
            })
           ):<div className="spinner"></div>}
        </div>
    )
}

export default Store
