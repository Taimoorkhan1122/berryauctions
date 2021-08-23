import React from 'react'
import { useParams } from 'react-router-dom'

import { AuctionData, auctionData } from '../../utils/data';

        
const AuctionsDetails = () => {
    const {id} = useParams<{id: string}>();
    const _id = id.split('_').map(d => d)
    const [data] : AuctionData[] = auctionData.filter((data) => data.id === _id[1] );
    console.log(data, _id);

    return (
        <div>
            <div className="imagecontianer">
                <img src={data.nftLink} alt="auction"  />
            </div>
            <div className="detailsContaier">
                {/* author and share button */}
                <div className="author">{data.username} and share container</div>
                {/* flex container - contains auction and bid details*/}
                <div className="details">
                    <div className="firs">first half</div>
                    <div className="second">second half</div>
                </div>
            </div>
        </div>
    )
}

export default AuctionsDetails
