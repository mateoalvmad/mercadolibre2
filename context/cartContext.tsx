import { createContext,Dispatch,useContext, SetStateAction, useState, useReducer} from 'react';

interface cartItems{
    name:string;
    image:string;
    count:number;
    price:string;
}
interface CartContext {
    itemsCount:number;
    setItemsCount: Dispatch<SetStateAction<number>>;
    openModalCart:boolean;
    setOpenModalCart: Dispatch<SetStateAction<boolean>>;
    cartItems:cartItems[];
    setCartItems: Dispatch<SetStateAction<cartItems[]>>;
   }

const CartContext= createContext<CartContext>({} as CartContext);

export const useCartContext=()=> useContext(CartContext);

interface CartContextProviderProps {
    children:JSX.Element;
}

const CartContextProvider =({children}:CartContextProviderProps)=>{
    const [openModalCart,setOpenModalCart]=useState<boolean>(false);
    const [itemsCount,setItemsCount]=useState<number>(0); 
    const [cartItems, setCartItems] = useState<cartItems[]>([]);
    return (
        <CartContext.Provider
        value={{itemsCount, setItemsCount, openModalCart, setOpenModalCart,cartItems,setCartItems}}>
            {children}
        </CartContext.Provider>
    );
}
export {CartContextProvider}


