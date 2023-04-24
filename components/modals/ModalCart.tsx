import Dialog from '@mui/material/Dialog';
import {DialogTitle,DialogContent } from '@mui/material';
import { Dispatch, useState } from 'react';
import React from 'react';

interface ModalDialogProps {
  open:boolean;
  setOpen:Dispatch<React.SetStateAction<boolean>>;
  modalTitle:string;
  children:JSX.Element;
}
const ModalCart = ({open, setOpen, modalTitle, children} : ModalDialogProps) => {
  
  return (
  <Dialog  open={open} onClose={()=>setOpen(false)}>
    <DialogTitle className='flex justify-center text-3xl text-red-400 font-medium'>{modalTitle}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
  )
}

export { ModalCart};
