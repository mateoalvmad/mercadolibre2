interface categories {
  categorie: string;
  children: JSX.Element;
}
const Categories = ({ children, categorie }: categories) => {
  return (
    <div className='align-center bottom-40 grid h-40 w-40 items-center justify-center justify-items-center rounded-sm border-solid border-category-color bg-white p-5 text-center text-sm font-normal text-gray-800'>
      {children}
      <span>{categorie}</span>
    </div>
  );
};

export { Categories };
