import React from 'react'
import { useParams } from 'react-router-dom'
const Home = () => {
    const {id} =useParams()
    return (
        <div>
            <h1>Home    </h1> {id}
        </div>
    )
}

export default Home
