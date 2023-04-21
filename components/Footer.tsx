const Footer = () => {
    return (
      <footer className="bg-white h-[233px]">
        <div className="w-full h-[156px] pt-[17px]">
          <div className="flex text-xs font-normal justify-center text-section-black">
            <div className="w-[1180px]">
              <span>Trabaja con nosotros</span>
              <span className="pl-[21.97px]">Términos y condiciones</span>
              <span className="pl-[21.97px]">Cómo cuidamos tu privacidad</span>
              <span className="pl-[21.97px]">Accesibilidad</span>
              <span className="pl-[21.97px]">Ayuda / PQR</span>
              <span className="pl-[21.97px]">www.sic.gov.co</span>
            </div>
          </div>
          <div className="flex justify-center text-xs font-normal pt-[7px] text-footer-text">
            <div className="w-[1180px]">
              <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
            </div>
          </div>
          <div className="flex justify-center text-xs font-normal pt-[7px] text-footer-text">
            <div className="w-[1180px]">
              <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
            </div>
          </div>
          <div className="flex justify-center pt-[33px] pr-[20px] pb-[43.5px]" >
            <div className="w-[1180px] flex">
              <img src="/media/sic.png" alt="industria y comercio"/>
              <img src="/media/pum.png" alt="pare y compare" className="pl-[20px]"/> 
            </div>                
          </div>
        </div>
      </footer>
      
      
    )
  }
  
  export {Footer};