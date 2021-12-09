import React from 'react'

const Wishlist = (props) => {
    return (
        <>
        <h1 className="fw-xl clr-nl">Wishlist</h1>
        <div className="grid">
            {props.items.map((item, key) => {
                return <div key={key}>{item.title}</div>
            })}
        </div>
        </>
    )
}

export default Wishlist
