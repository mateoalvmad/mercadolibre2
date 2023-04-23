const Footer = () => {
  return (
    <footer className='flex h-44 flex-col bg-white px-5 md:px-[166px]'>
      <div>
        <div className='flex flex-row gap-5 flex-wrap justify-center  md:justify-start text-xs font-normal text-section-black '>
          <span>Trabaja con nosotros</span>
          <span className=''>Términos y condiciones</span>
          <span className=''>Cómo cuidamos tu privacidad</span>
          <span className=''>Accesibilidad</span>
          <span className=''>Ayuda / PQR</span>
          <span className=''>www.sic.gov.co</span>
        </div>
        <div className='flex flex-col pt-[7px] pb-[14px] gap-1 items-center md:items-start text-xs font-normal text-footer-text '>
          <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
          <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
        </div>
      </div>

      <hr />
      <div className='flex flex-row justify-center md:justify-start gap-5 p-4'>
          <img src='/media/sic.png' alt='industria y comercio' />
          <img src='/media/pum.png' alt='pare y compare' className='' />
        </div>
    </footer>
  );
};

export { Footer };

{
  /* <footer className='flex h-[233px] justify-center bg-white'>
  <div className=' h-[156px] w-full px-20 pt-[17px] md:px-[166px]'>
    <div className='flex  text-xs font-normal  text-section-black'>
      <div className='flex w-[400px] flex-wrap justify-center md:w-[1180px] md:justify-normal'>
        <span>Trabaja con nosotros</span>
        <span className='pl-[21.97px]'>Términos y condiciones</span>
        <span className='pl-[21.97px]'>Cómo cuidamos tu privacidad</span>
        <span className='pl-[21.97px]'>Accesibilidad</span>
        <span className='pl-[21.97px]'>Ayuda / PQR</span>
        <span className='pl-[21.97px]'>www.sic.gov.co</span>
      </div>
    </div>
    <div className='flex flex-col pb-5 pt-[7px] text-xs font-normal text-footer-text '>
      <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
      <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
    </div>
    <hr />
    <div className='flex pb-[43.5px] pt-5'>
      <div className='flex w-[1180px]'>
        <img src='/media/sic.png' alt='industria y comercio' />
        <img src='/media/pum.png' alt='pare y compare' className='pl-[20px]' />
      </div>
    </div>
  </div>
</footer>;
 */
}
