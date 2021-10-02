import React, {useEffect, useState} from 'react'
import ItemCard from "./ItemCard"

const Wishlist = (props) => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("wishlist")));
    },[])

    return (
        <>
        <h1 className="fw-xl clr-nl">Wishlist</h1>
        <div className="grid">
            {items.map((item, key) => {
                return <div key={key}>{item.title}</div>
            })}
        </div>
        </>
    )
}

export default Wishlist
