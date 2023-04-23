import { createContext,Dispatch,useContext, SetStateAction, useState} from 'react';

interface CartContext {
    itemsCount:number;
    setItemsCount: Dispatch<SetStateAction<number>>;
    openModalCart:boolean;
    setOpenModalCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext= createContext<CartContext>({} as CartContext);

export const useCartContext=()=> useContext(CartContext);

interface cartItemsProps{

}
interface CartContextProviderProps {
    children:JSX.Element;
}
const CartContextProvider =({children}:CartContextProviderProps)=>{
    const [openModalCart,setOpenModalCart]=useState<boolean>(false);
    const [itemsCount,setItemsCount]=useState<number>(0); 
    return (
        <CartContext.Provider
        value={{itemsCount, setItemsCount, openModalCart, setOpenModalCart}}>
            {children}
        </CartContext.Provider>
    );
}
export {CartContextProvider}


