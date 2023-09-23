import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const[qty, setQty] = useState('1');
    const[size, setSize] = useState("");
    const priceRef = useRef();

    const handleAddToCart = async () => {
        await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: netPrice, qty: qty, size: size
    })
    await console.log(data);
    }

    let netPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card mt-3" style={{"width": "18rem", "maxHeight": "450px"}}>
                <img className="card-img-top" src={props.foodItem.img} alt="..." style={{height: "200px", objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <div className="container w-100">
                            <select className="m-2 h-100  rounded" onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(7), (e, i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  rounded" ref={priceRef}  onChange={(e) => setSize(e.target.value)} >
                                {priceOptions.map((data)=>{
                                    return <option key={data}>{data}</option>
                                })}
                            </select>
                            
                            <hr />
                            <div className='d-inline h-100 fs-5'>
                               Total: <span>&#8377;</span> {netPrice}
                            </div>
                            <hr />
                            <div className='btn authnav' onClick={handleAddToCart}>ADD</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
