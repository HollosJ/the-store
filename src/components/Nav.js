import React, { useState, useEffect } from 'react'
import Basket from "./Basket"

import { FaShoppingBasket } from "react-icons/fa"

import { Link } from "react-router-dom"; 

const Nav = (props) => {

    const [open, setOpen] = useState(false);
    const [sum, setSum] = useState(0);

    //when page is loaded + when basket is changed
    //... update basket total
    useEffect(() => {
        let total = 0;
        props.items.forEach(item => {
            total += item.price * item.qt
        })
        setSum(total)
    }, [props.items])

    //toggle basket menu open/closed
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="nav">
            <div className="container">
                <Link to="/"><h1><span className="logo-the">the</span>Store</h1></Link>
                <div className="nav__links">
                    <Link to="/wishlist" className="btn btn--secondary btn__wishlist">
                        Wishlist
                    </Link>
                    <div className="btn btn--primary btn__basket" onClick={handleOpen}>
                        <FaShoppingBasket /> &nbsp;£{sum.toFixed(2)}
                    </div>
                </div>

                {open
                && <Basket items={props.items} delete={props.delete} clear={props.clear}/>
                }
            </div>
        </div>
    )
}

export default Nav;