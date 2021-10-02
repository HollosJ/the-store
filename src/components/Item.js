import React, {useState, useEffect} from 'react'

const Item = ({match}) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
            setLoading(false)
    },[match.params.id])

    return loading ? <div>loading...</div> : 
    <div className="item">
        <img className="item__img" src={item.image} alt=""/>
        <h1 className="item__title">{item.title}</h1>
        <p className="item__desc">{item.description}</p>
    </div>
}

export default Item
