import React from 'react'


const Btn= ({ click })=>{
    return (
    <input 
    type="button"
    onClick={ click }
    value= "Add Robot"/>)
}

export default Btn;