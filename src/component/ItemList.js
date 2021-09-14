import React from "react"
import Item from "./Item"

 const ItemList = ({ juegosArray})=>{
    return(
        <>
        {juegosArray.map(juego =><Item juego = {juego} /> )}

        </>
    )
}
export default ItemList
