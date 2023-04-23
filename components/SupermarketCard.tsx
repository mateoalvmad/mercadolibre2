interface SupermarketCard{
    imagen1:string;
    imagen2:string;
}
const SupermarketCard = ({imagen1,imagen2}:SupermarketCard) => {
  return (
    <div className="grid h-96 gap-4">
        <img src={imagen1} alt="item-colección"/>
        <img src={imagen2} alt="item-colección"/>
    </div> 
  )
}

export  {SupermarketCard}