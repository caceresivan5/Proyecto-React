import { useState, createContext, useContext } from "react";

  const cartContext = createContext([])

  export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider ({children}){ //con children estoy tomando por props los hijos en la app

    const [carList, setCarList] = useState([])

    function addToCart(itemCart){
        setCarList([...carList, itemCart])
    }
    function BorrarLista(){
        carList([])
    }


    
    console.log(carList)
    return(
        <cartContext.Provider value={{
            carList,

            addToCart,
            BorrarLista
        }}>

            {children}
        </cartContext.Provider>
    )
}

