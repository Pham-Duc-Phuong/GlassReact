import React from 'react'

const GlassItem = ({ item, index , handlePutOn}) => {
    return (
        <div className='card col-2'  >
            <div style={{height: 50 , marginTop:10}}>
                <img className='img-fluid' style={{ width: 100}} src={`./images/glassesImage/g${index + 1}.jpg`} alt="" />
            </div>
            <div className="card-body">
                <h6>{item.name}</h6>
                <p>{item.price}$</p>
                <button  className='btn btn-outline-danger p-1' onClick={()=>{
                    handlePutOn(item)
                }}>Put on</button>
            </div>
        </div>
    )
}

export default GlassItem