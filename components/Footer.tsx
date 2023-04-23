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
      <div className='flex flex-row justify-center md:comojustify-start gap-5 p-4'>
          <img src='/media/sic.png' alt='industria y comercio' />
          <img src='/media/pum.png' alt='pare y compare' className='' />
        </div>
    </footer>
  );
};

export { Footer };

