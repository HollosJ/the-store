import React, {useState, useEffect} from 'react'

const Item = ({match}) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchItemData = async () => {
            let res = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            res = await res.json()
            setItem(res)
            setLoading(false)
        }
        fetchItemData()
    },[])

    return loading ? <div>loading...</div> : 
    <div className="item">
        <img className="item__img" src={item.image} alt=""/>
        <h1 className="item__title">{item.title}</h1>
        <p className="item__desc">{item.description}</p>
    </div>
}

export default Item
