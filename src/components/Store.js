import React, {useState, useEffect} from 'react'
import ItemCard from "./ItemCard"

const Store = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=> {
                json.forEach(product => {
                    product.inWishList = false;
                })
                setItems(json)
            });
    }, []);

    return (
        <div className="grid">
           {items.length > 0 ? (
               items.map((item) => {
                return <ItemCard
                items={items}
                key={item.id}
                id={item.id}
                name={item.title}
                img={item.image}
                price={item.price}
                desc={item.description}
                addToBasket={props.addToBasket}
                addToWishlist={props.addToWishlist} />
            })
           ):<div className="spinner"></div>}
        </div>
    )
}

export default Store
