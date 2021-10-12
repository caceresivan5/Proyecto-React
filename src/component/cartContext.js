import { useState, createContext, useContext } from "react";

  const cartContext = createContext([])

  export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){ //con children estoy tomando por props los hijos en la app

    const [carList, setCarList] = useState([])

    /*function addToCart(itemCart){
        setCarList([...carList, itemCart])
    }
    */

    const addToCart = (data) =>{
        
        const prodCart = [...carList]
        if(prodCart.some(i => i.itemCart.id === data.itemCart.id)){
            prodCart.find( (i => i.itemCart.id === data.itemCart.id) ).Cantidad += data.Cantidad
            setCarList(prodCart)
        }else{
            setCarList([...carList, data])
        }
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

