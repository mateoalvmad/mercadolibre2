import React, { useState } from 'react'
import { ModalCart } from './modals/ModalCart'
import { useCartContext } from '@/context/cartContext'
import { toast } from 'react-toastify'
import { MdCancel } from 'react-icons/md'

const CartDialog = () => {
const {openModalCart,setOpenModalCart, cartItems, setCartItems,itemsCount,setItemsCount}= useCartContext()
let total=0;
const successAlert=(index:number)=>{
  const copiaMiArray = [...cartItems];
  copiaMiArray.splice(index,1);
  setItemsCount(itemsCount-1)
  setCartItems(copiaMiArray)
  toast.info("Eliminado correctamente.")
}
  return (
    <ModalCart open={openModalCart} setOpen={setOpenModalCart} modalTitle='Articulos seleccionados'>
    <div className="grid  w-full">
    <table className="grid gap-6">
            <thead>
              <tr className='flex justify-start gap-20 w-full text-gray-600'>
              <th scope="col">Imagen</th>
                <th scope="col">Item</th>
                <th scope="col">Catidad</th>
                <th scope="col">precio</th>
                <th scope="col">¿Quitar del carrito?</th>
              </tr>
            </thead>
            <tbody className='grid gap-5 justify-start'>
            {cartItems.map((cartItems, index) => {
              total=total+cartItems.price
              return(
              <tr className="flex justify-start gap-20 px-6 text-gray-600">
                <td><img src={cartItems.image} alt={`Imagen_$index`} width={120} height={120}/></td>
                <td>{cartItems.name}</td>
                <td>{cartItems.count}</td>
                <td>{cartItems.price}</td>
                <td>
                  <button className="text-3xl w-12 h-12 bg-white text-red-900 justify-center text-justify items-center pb-6" 
                    onClick={()=>successAlert(index)}>
                    <MdCancel/>
                  </button> 
                </td>
              </tr>
              )
            })}
            <div className="flex justify-center p-9 gap-7"> 
              <span className="text-xl text-gray-700" >El total es: </span>
              <span className='text-xl text-black'>${total}</span> 
            </div>
           
             </tbody>
          </table>
          <div className="flex justify-between">
            <div></div>
            <button className='btn-modal' onClick={() => setOpenModalCart(false)}>Cerrar
      </button>
          </div>
          
       
    </div>        
    </ModalCart>
  )
}

export  {CartDialog}
