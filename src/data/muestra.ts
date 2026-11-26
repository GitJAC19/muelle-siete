// Contenido de Muelle Siete compartido por todas las páginas.
// Fotos locales en public/media (licencia libre de Unsplash).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const img = (name: string, _w = 1600) => `/media/${name}.jpg`;

export const PHOTOS = {
  warehouse: 'warehouse',
  shelves: 'shelves',
  containers: 'containers',
  forklift: 'forklift',
  boxes: 'boxes',
  team: 'team',
  packing: 'packing',
  trucks: 'trucks',
};

export const CONTACT = {
  phone: '+57 300 000 0000',
  email: 'contacto@ejemplo.com',
  address: 'Bogotá, Colombia',
  hours: 'Lun a vie 8:00–17:00, sáb 8:00–13:00',
};

export const clients = [
  'Cliente A', 'Cliente B', 'Cliente C', 'Cliente D', 'Cliente E', 'Cliente F',
  'Cliente G', 'Cliente H', 'Cliente I', 'Cliente J', 'Cliente K',
];

export const stats = [
  { value: '12.400', label: 'servicios prestados' },
  { value: '150', label: 'personas en operación' },
  { value: '2.000 m²', label: 'de bodega climatizada' },
  { value: '24/7', label: 'operación logística' },
];

export const serviceGroups = [
  {
    slug: 'operacion-de-bodega',
    icon: 'tabler:forklift',
    photo: PHOTOS.forklift,
    title: 'Operación de bodega',
    text: 'Tu centro de distribución funcionando con personal entrenado, turnos cubiertos y supervisión propia.',
    services: [
      ['Cargue y descargue', 'De vehículos y contenedores, con control de tiempos y novedades en cada movimiento.'],
      ['Arrume, paletización y almacenaje', 'Mercancía organizada, estibada y ubicada para que se encuentre rápido.'],
      ['Entradas y salidas de inventario', 'Recepción, verificación y despacho con trazabilidad documental.'],
    ],
  },
  {
    slug: 'alistamiento-y-empaque',
    icon: 'tabler:package',
    photo: PHOTOS.packing,
    title: 'Alistamiento y empaque',
    text: 'Pedidos que salen completos, a tiempo y listos para el canal: retail, e-commerce o institucional.',
    services: [
      ['Picking y alistamiento', 'Preparación de pedidos por unidad, caja o estiba con verificación.'],
      ['Packing y co-packing', 'Empaque, reempaque, armado de kits y exhibidores promocionales.'],
      ['Inspección de cargues y llenados', 'Control de calidad antes de que el vehículo salga de la bodega.'],
    ],
  },
  {
    slug: 'flujo-y-distribucion',
    icon: 'tabler:arrows-exchange',
    photo: PHOTOS.trucks,
    title: 'Flujo y distribución',
    text: 'Menos tiempo en piso y más mercancía moviéndose hacia tus clientes.',
    services: [
      ['Cross docking', 'Transferencia directa de mercancía entre vehículos sin almacenaje prolongado.'],
      ['Auxiliares de distribución', 'Personal de apoyo en rutas de entrega y última milla.'],
      ['Logística inversa', 'Gestión de devoluciones, reprocesos y recuperación de producto.'],
    ],
  },
  {
    slug: 'soporte-a-la-operacion',
    icon: 'tabler:building-warehouse',
    photo: PHOTOS.shelves,
    title: 'Soporte a la operación',
    text: 'Todo lo que rodea la operación para que tu equipo se enfoque en vender.',
    services: [
      ['Gestión documental de archivo', 'Organización, custodia y digitalización de documentos operativos.'],
      ['Aseo industrial', 'Limpieza especializada de bodegas, plantas y zonas de cargue.'],
      ['Servicios generales', 'Mantenimiento y apoyo a instalaciones.'],
    ],
  },
];

export const steps = [
  { n: '01', title: 'Diagnóstico en planta', text: 'Visitamos tu operación, medimos tiempos y detectamos dónde se pierde dinero.' },
  { n: '02', title: 'Diseño del equipo', text: 'Definimos perfiles, turnos, supervisión e indicadores (ANS) contigo.' },
  { n: '03', title: 'Arranque acompañado', text: 'Selección, inducción y salida en vivo con un coordinador dedicado.' },
  { n: '04', title: 'Medición y mejora', text: 'Reporte periódico de productividad, exactitud y novedades. Sin sorpresas.' },
];

export const faqs = [
  { title: '¿Qué tamaño de empresa atienden?', description: 'Medianas y grandes empresas con operación de bodega o centro de distribución propio o tercerizado.' },
  { title: '¿Pueden operar dentro de mis instalaciones?', description: 'Sí. Llevamos el personal, la supervisión y los procesos a tu planta, o usamos nuestra bodega de 2.000 m² en Bogotá.' },
  { title: '¿Cómo manejan los picos de temporada?', description: 'Escalamos el número de personas según tu demanda, sin que tengas que contratar ni capacitar personal temporal.' },
  { title: '¿Cómo mido el servicio?', description: 'Acordamos indicadores (productividad, exactitud de alistamiento, cumplimiento) y te los reportamos periódicamente.' },
];

// ── Prueba social ──────────────────────────────────────────────────────────
// IMPORTANTE: casos y testimonios son PLANTILLAS. No hay testimonios reales
// todavía; cada bloque se muestra con la marca "Ejemplo" mientras
// `placeholder: true`. Al recibir el material del cliente (con autorización
// escrita de cada empresa), reemplazar el texto y poner `placeholder: false`.

export const caseStudy = {
  placeholder: true,
  client: 'Empresa de paquetería nacional',
  title: 'Cross docking para despachos nocturnos',
  challenge: 'Picos de volumen al cierre del día y personal propio insuficiente para cargar a tiempo.',
  solution: 'Equipo de auxiliares por turnos, supervisión en sitio e inspección de cada cargue.',
  photo: PHOTOS.trucks,
  metrics: [
    { value: 'X %', label: 'menos tiempo de cargue' },
    { value: 'X', label: 'personas en temporada alta' },
    { value: 'X %', label: 'despachos a tiempo' },
  ],
};

export const testimonials = [
  {
    placeholder: true,
    quote: 'Desde que Muelle Siete opera nuestra bodega dejamos de preocuparnos por los picos de temporada.',
    name: 'Nombre Apellido',
    role: 'Gerente de logística',
    company: 'Empresa cliente',
  },
  {
    placeholder: true,
    quote: 'El coordinador en sitio nos reporta cada novedad. Sabemos qué pasa en la operación todos los días.',
    name: 'Nombre Apellido',
    role: 'Director de operaciones',
    company: 'Empresa cliente',
  },
  {
    placeholder: true,
    quote: 'Arrancamos el co-packing de temporada en pocas semanas y sin contratar personal temporal.',
    name: 'Nombre Apellido',
    role: 'Jefe de cadena de abastecimiento',
    company: 'Empresa cliente',
  },
];
