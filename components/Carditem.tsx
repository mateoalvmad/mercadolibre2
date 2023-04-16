interface Carditem{
    imagen1:string;
    imagen2:string;
}
const Carditem = ({imagen1,imagen2}:Carditem) => {
  return (
    <div className="grid h-96 ">
        <img src={imagen1} alt="item-colección"/>
        <img src={imagen2} alt="item-colección"/>
    </div> 
  )
}

export  {Carditem}
