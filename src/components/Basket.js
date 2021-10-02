import React from 'react'
import {FaShoppingBasket} from "react-icons/fa"

const Basket = (props) => {
    return (
        <div className="basket">
            {props.items.length > 0
            ? (props.items.slice(0,3).map((item, key) => {
                return <div key={key} className="basket__item">
                        <span className="basket__item-name">{item.title}</span>
                        <span className="basket__item-quantity">x{item.qt}</span>
                        <span className="basket__item-price">£{(item.price * item.qt).toFixed(2)}</span>
                        <div className="basket__item-delete" onClick={() => props.delete(item)}>X</div>
                    </div>
            }))
            : "Basket empty!"}
            {props.items.length > 3
            ? <div className="btn btn--secondary">
                See full basket&nbsp;<FaShoppingBasket />
            </div>
            : null}
            {props.items.length > 0 
            ? <div className="btn btn--primary" onClick={props.clear}>Clear basket</div>
            : null}
            
        </div>
    )
}

export default Basket
