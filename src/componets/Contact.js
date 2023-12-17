import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const {id}=useParams()
    return (
        <div>
            <h1 style={{color:'green'}}>Contact  {id} </h1>
        </div>
    )
}

export default Contact
