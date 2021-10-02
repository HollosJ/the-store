import React from 'react'
import { FaHeart, FaRegHeart, FaShoppingBasket } from "react-icons/fa"
import { Link } from "react-router-dom"; 

const ItemCard = (props) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="card__info">
                <Link to={`/items/${props.id}`} className="card__info-name fw-sm">{props.name.split(" ").slice(0,7).join(" ")}...</Link>
                <span className="card__info-price clr-nl">£{props.price.toFixed(2)}</span>     
            </div>

            <div className="card__btns">
                <div className="addToBasket btn btn--primary"  onClick={() => props.addToBasket(props.id)}>
                    Add to basket&nbsp;<FaShoppingBasket />
                </div>
                <div className="addToWishlist btn btn--secondary" onClick={() => props.addToWishlist(props.id)}>
                    {props.inWishList ? <FaHeart /> : <FaRegHeart />}
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
