import React, {useState} from 'react'
import Item from "./Item"

const Store = (props) => {
    const categories = ["electronics","jewelery","men's clothing","women's clothing"]
    const [cat, setCat] = useState("all")

    //get items based on category state
    const getItemsInCategory = () => {
        return cat === "all" 
        ? props.items
        : props.items.filter(item => item.category === cat)
    }

    return (
        <>  
            {props.items.length > 0 &&
            <select className="filters" onChange={(e) => setCat(e.target.value)}>
                <option value="all">ALL</option>
                {categories.map((item, key) => 
                    {
                        return <option key={key} value={item}>{item.toUpperCase()}</option>
                    })
                }
            </select>
            }
            <div className="grid">
            {getItemsInCategory().length > 0 
            ? (getItemsInCategory().map((item) => {
                return <Item
                key={item.id}
                item={item}
                id={item.id}
                name={item.title}
                img={item.image}
                price={item.price}
                addToBasket={props.addToBasket}
                addToWishlist={props.addToWishlist} 
                removeFromWishlist={props.removeFromWishlist}
                inWishlist={item.inWishlist ? true : false}/>
            })
            )
            :<div className="spinner"></div>}
            </div>
        </>
    )
}

export default Store
