import React from "react"
import Item from "./Item"

 const ItemList = ({ juegos})=>{
    return(
        <>
        {juegos.map(juego => <Item juego = {juego} /> )}

        </>
    )
}
export default ItemList
