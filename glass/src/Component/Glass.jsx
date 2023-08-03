import React from 'react'
import GlassItem from './GlassItem'

const Glass = ({glass , handlePutOn}) => {
  return (
    <div className='row' style={{gap: 10}}>

        {
          glass.map((item,index)=>{
            return(
              <GlassItem key={item.id} item={item} index={index} handlePutOn={handlePutOn}/>
            )
          })
        }
    </div>
  )
}

export default Glass