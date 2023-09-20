import React from 'react'

export default function Card(props) {



    let options = props.options;
    let priceOptions = Object.keys(options);


    return (
        <div>
            <div className="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
                <img className="card-img-top" src={props.img} alt="..." style={{height: "200px", objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <div className="container w-100">
                            <select className="m-2 h-100  rounded">
                                {Array.from(Array(21), (e, i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  rounded" >
                                {priceOptions.map((data)=>{
                                    return <option key={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}