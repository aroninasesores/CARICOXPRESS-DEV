// src/data/faqs.ts

export interface FAQItem {
  pregunta: string;
  respuesta: string;
  id?: string;
  hasTable?: boolean;
  href?: string;
  description?: string;
}

export const faqs: FAQItem[] = [
  {
    id: "tarifas", // ID condicional para anclar o renderizar la tabla de precios
    pregunta: "¿Cuáles son las tarifas de envío desde Miami?",
    respuesta:
      'Ofrecemos tarifas competitivas puerta a puerta que ya incluyen flete, aduana y aranceles.<br><br><span class="font-bold text-orange-500">A continuación, presentamos el detalle de los costos por libra y pie cúbico:</span>',
    hasTable: true,
  },
  {
    pregunta:
      "¿Cuál es la frecuencia de salida de los envíos aéreos y marítimos?",
    respuesta:
      "Para garantizar la rapidez y el flujo constante de tu mercancía, contamos con salidas aéreas semanales express. Por su parte, los envíos marítimos consolidados tienen salidas regulares programadas, ideales para cargas de mayor volumen o peso.",
  },
  {
    pregunta: "¿Tienen un límite de tamaño para los paquetes?",
    respuesta:
      "Para nosotros no hay paquete pequeño ni grande. Transportamos todo tipo de carga, desde compras personales mínimas hasta grandes equipos comerciales. Además, nos encargamos de entregártelo directamente en la puerta de tu casa u oficina con el servicio personalizado que mereces.",
  },
  {
    pregunta: "¿Cómo funciona mi Casillero y el Área de Usuarios?",
    respuesta:
      "Al registrarte obtienes tu propio casillero gratuito en Miami. En nuestra plataforma web contarás con un Área de Usuarios privada donde podrás reportar tus compras (pre-alertas), realizar el seguimiento en tiempo real de tus paquetes desde que llegan al almacén y gestionar tus envíos a un solo clic.",
    description:
      "Ingresa en el siguiente enlace para conocer como crear tu casillero y usar el área de usuarios:",
    href: "/blog/casillero-area-usuarios",
  },
  {
    pregunta:
      "¿Cómo envío mis compras al almacén de Miami y cómo funciona el reempaque?",
    respuesta:
      "Debes enviar tus compras a la dirección: 8239 NW 68 ST, Miami, FL 33166, de lunes a viernes de 8:30 am a 12:00 m y de 1:00 pm a 5:00 pm. Nuestro personal optimiza el volumen de tus cajas bajando el espacio vacío gratis. Si solicitas un reempaque formal para consolidar varias compras en una sola, este tiene un costo de $10 (1 a 5 cajas) o $20 (de 5 en adelante).",
    href: "/blog/reempaque-consolidacion",
  },
];
