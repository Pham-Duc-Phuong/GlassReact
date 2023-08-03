import React, { useState } from 'react'
import Model from './Model'
import Glass from './Glass'

const Carousel = ({ glass }) => {
    const [putOnGlass, setPutOnGlass] = useState()
    const handlePutOn = (product) => {
        setPutOnGlass(product)
    }
    return (
        <div>
            <Model glassPng={glass} putOnGlass={putOnGlass}/>
            <Glass glass={glass} handlePutOn={handlePutOn}/>
        </div>
    )
}

export default Carousel