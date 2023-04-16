const Footer = () => {
    return (
      <div className="mt-0.5 grid pt-3 bg-white pl-36 pr-36">
        <div className="flex gap-4 font-normal align-center mb-1 text-gray-950">
            <span>Trabaja con nosotros</span>
            <span>Términos y condiciones</span>
            <span>Cómo cuidamos tu privacidad</span>
            <span>Accesibilidad</span>
            <span>Ayuda / PQR</span>
            <span>www.sic.gov.co</span>
        </div>
        <span className="text-gray-500 font-light">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
        <span className="text-gray-500 font-extralight">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
        <div className="h-0.5  border-1  mt-6 bg-gray-200" ></div>
        <div className="flex gap-8 pt-6 pb-8 w-2/3">
            <img src="/media/sic.png" alt="industria y comercio"/>
            <img src="/media/pum.png" alt="pare y compare"/>
        </div>                
    </div>
    )
  }
  
  export {Footer};