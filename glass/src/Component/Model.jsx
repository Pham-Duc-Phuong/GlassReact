import React from 'react'

const Model = ({ glass, putOnGlass }) => {
  console.log('putOnGlass', putOnGlass)
  return (
    <div className='my-4'>
      <div className="row justify-content-evenly">
        <div className="col-6 right" style={{ width: 290 }}>
          <img className='transformImg' style={{ height: 350 }} src="./images/glassesImage/model.jpg" alt="" />
          <img className='glass-left' src={`./images/${putOnGlass?.url}`} alt="" />
          <div className='desc'>
            <h6>{putOnGlass?.name}</h6>
            <p style={{ width: 260 , textAlign:'justify'}}>{putOnGlass?.desc}</p>
          </div>
        </div>
        <div className="col-6 left" style={{ width: 290 }}>
          <img className='transformImg' style={{ height: 350 }} src="./images/glassesImage/model.jpg" alt="" />
          <img className='glass-right' src={`./images/${putOnGlass?.url}`} alt="" />
        </div>
      </div>
    </div>
  )
}



export default Model