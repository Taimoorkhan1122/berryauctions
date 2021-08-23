import React from 'react'
import { useParams } from 'react-router-dom'

const AuctionsDetails = () => {
    const {id} = useParams<{id: string}>();
    console.log(id);
    
    return (
        <div>
            <h3>details page of {id}</h3>
        </div>
    )
}

export default AuctionsDetails
