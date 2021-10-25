import React, {useState} from 'react'
import { FaHeart, FaRegHeart, FaShoppingBasket } from "react-icons/fa"
import Modal from "./Modal"

const Item = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModalShow = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="card">
                {/* Item image and information */}
                <div className="card__img">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="card__info">
                    <div className="card__info-name" onClick={toggleModalShow}>
                        {props.name.split(" ").slice(0,5).join(" ")}
                        {props.name.split(" ").length > 5 
                        && "..."}
                    </div>
                    <span className="card__info-price">£{props.price.toFixed(2)}</span>     
                </div>
                {/* Buttons */}
                <div className="card__btns">
                    <div className="addToBasket btn btn--primary"  onClick={() => props.addToBasket(props.id, 1)}>
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

            {modal && <Modal
            addToWishlist={props.addToWishlist}
            addToBasket={props.addToBasket}
            inWishlist={props.inWishlist}
            removeFromWishlist={props.removeFromWishlist}
            closeModal={toggleModalShow}
            item={props.item} />}
        </>
    )
}

export default Item;
