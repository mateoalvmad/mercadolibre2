interface categories{
    categorie:string;
    children:JSX.Element;
}
const Categories = ({children, categorie}:categories) => {
  return (        
    <div className="h-40 w-40 bottom-40 bg-white rounded-sm border-solid border-category-color font-normal text-sm text-center grid justify-items-center align-center items-center justify-center text-gray-800 p-5">                        
      {children}
      <span>{categorie}</span>
    </div>
  )
}

export  {Categories};