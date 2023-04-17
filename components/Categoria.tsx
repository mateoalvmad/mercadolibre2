interface categoria{
    categoria:string;
    children:JSX.Element;
}
const Categoria = ({children, categoria}:categoria) => {
  return (        
                    <div className="h-40 w-40 bottom-40 bg-white rounded-sm border-solid border-category-color font-normal text-sm text-center grid justify-items-center align-center items-center justify-center text-gray-800 p-5">                        
                      {children}
                      <span>{categoria}</span>
                    </div>
  )
}

export  {Categoria};