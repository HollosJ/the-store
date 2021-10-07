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
                <Link to={`/items/${props.id}`} className="card__info-name fw-sm">
                    {props.name.split(" ").slice(0,5).join(" ")}
                    {props.name.split(" ").length > 5 
                    && "..."}
                </Link>
                <span className="card__info-price">£{props.price.toFixed(2)}</span>     
            </div>

            <div className="card__btns">
                <div className="addToBasket btn btn--primary"  onClick={() => props.addToBasket(props.id)}>
                    Add to basket&nbsp;<FaShoppingBasket />
                </div>

                <div className="addToWishlist btn btn--secondary" onClick={
                    props.inWishlist 
                    ? () => props.removeFromWishlist(props.id) 
                    : () => props.addToWishlist(props.id)}>
                    {props.inWishlist 
                    ? <FaHeart className="addToWishlist--filled" /> 
                    : <FaRegHeart />}
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
