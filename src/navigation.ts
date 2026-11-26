import { getPermalink } from './utils/permalinks';

export const WHATSAPP_NUMBER = '573000000000';
export const whatsappLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Se conservan las secciones y URLs del sitio actual (quienessomos, servicios,
// trabajaconnosotros, contactanos, politica-de-privacidad, equipo-de-trabajo)
// para no perder posicionamiento. Se suman /bodega y /cotizar.
export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    {
      text: 'Quiénes somos',
      links: [
        { text: 'Quiénes somos', href: getPermalink('/quienessomos') },
        { text: 'Equipo de trabajo', href: getPermalink('/equipo-de-trabajo') },
        { text: 'Nuestra bodega', href: getPermalink('/bodega') },
      ],
    },
    { text: 'Servicios', href: getPermalink('/servicios') },
    { text: 'Trabaja con nosotros', href: getPermalink('/trabajaconnosotros') },
    { text: 'Contáctanos', href: getPermalink('/contactanos') },
    { text: 'Política de privacidad', href: getPermalink('/politica-de-privacidad') },
  ],
  actions: [{ text: 'Cotizar', href: getPermalink('/cotizar'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Operación de bodega', href: getPermalink('/servicios#operacion-de-bodega') },
        { text: 'Alistamiento y empaque', href: getPermalink('/servicios#alistamiento-y-empaque') },
        { text: 'Flujo y distribución', href: getPermalink('/servicios#flujo-y-distribucion') },
        { text: 'Soporte a la operación', href: getPermalink('/servicios#soporte-a-la-operacion') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Quiénes somos', href: getPermalink('/quienessomos') },
        { text: 'Equipo de trabajo', href: getPermalink('/equipo-de-trabajo') },
        { text: 'Nuestra bodega', href: getPermalink('/bodega') },
        { text: 'Trabaja con nosotros', href: getPermalink('/trabajaconnosotros') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: '+57 300 000 0000', href: 'tel:+573000000000' },
        { text: 'contacto@ejemplo.com', href: 'mailto:contacto@ejemplo.com' },
        { text: 'Lun a vie 8:00–17:00, sáb 8:00–13:00', href: getPermalink('/contactanos') },
        { text: 'Contáctanos', href: getPermalink('/contactanos') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Política de privacidad', href: getPermalink('/politica-de-privacidad') }],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `© ${new Date().getFullYear()} Muelle Siete Logística, empresa ficticia · Diseño y desarrollo: <strong>JAC LAB</strong> · Muestra, todos los derechos reservados`,
};
