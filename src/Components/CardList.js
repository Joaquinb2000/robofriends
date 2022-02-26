import React from 'react'
import Card from './Card'


const CardList= ({robots})=>{
    const cardComponent= robots.map((element, i)=> {
        return <Card 
            key={i} id={robots[i].id} name={robots[i].name} email= {robots[i].email}/>
    });

    if (cardComponent.length===0)
        cardComponent.push (<h1 key= {0}>Sorry we couldn't find any robots :(</h1>);

    return (
        <div>
          {cardComponent}
        </div>
    );
}

export default CardList