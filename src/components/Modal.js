import React, {useState} from 'react'
import { FaShoppingBasket, FaHeart, FaRegHeart, FaPlus, FaMinus, FaTimes} from "react-icons/fa"

const Modal = (props) => {
    const [quantity, setQuantity] = useState(1)

    const handleChange = (m) => {
        if(m === "inc" && quantity < 50){
            setQuantity(quantity+1)
        } else if (m === "dec" && quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="modal">
            <div className="modal__inner">
                <FaTimes className="modal__inner-close" onClick={props.closeModal}/>

                <h1 className="modal__inner-title">{props.item.title}</h1>
                <img className="modal__inner-img" src={props.item.image} alt="" />
                <p className="modal__inner-desc">{props.item.description}</p>

                <div className="modal__inner-btns">
                    <button className="btn btn--secondary" onClick={() => handleChange("dec")}><FaMinus /></button>
                    <input type="number" min="1" max="50" value={quantity}/>
                    <button className="btn btn--secondary" onClick={() => handleChange("inc")}><FaPlus /></button>
                    <button className="btn btn--primary" style={{marginLeft: "0.25rem"}} onClick={() => props.addToBasket(props.item.id, quantity)}><FaShoppingBasket /></button>
                    <button className="btn btn--secondary" style={{marginLeft: "0.25rem"}} onClick={
                        props.inWishlist 
                        ? () => props.removeFromWishlist(props.item.id) 
                        : () => props.addToWishlist(props.item.id)}>
                        {props.inWishlist ? <FaHeart className="addToWishlist--filled"/> : <FaRegHeart />}    
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal