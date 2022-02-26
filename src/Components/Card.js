import React from  'react';

const Card = ({id, name, email})=>{
    return(
        <div className="bg-navy white dib pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${name}?200x200`} alt="robot image" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card