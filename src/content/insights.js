export const INSIGHT_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'logistica', label: 'Logística' },
  { id: 'pagos', label: 'Pagos internacionales' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'data', label: 'Data & Tecnología' },
];

export const INSIGHTS = [
  {
    id: 'tendencias-logistica-2025',
    category: 'logistica',
    tag: 'Logística',
    title: 'Tendencias de Logística 2025: eficiencia, trazabilidad y sostenibilidad',
    excerpt:
      'Las cadenas de suministro migran a modelos ágiles con visibilidad en tiempo real, automatización y métricas de huella de carbono.',
    date: '2025-10-01',
    author: 'Equipo InverCenter',
    readTime: '5 min',
    href: '/insights/tendencias-logistica-2025',
    content: [
      { type: 'p', text: 'Las cadenas de suministro ya no son simples líneas de producción; son ecosistemas dinámicos. Para 2025, la trilogía que define su evolución es Eficiencia, Trazabilidad y Sostenibilidad, y estos conceptos ya no operan de forma aislada, sino que se refuerzan mutuamente.' },
      { type: 'p', text: 'La eficiencia ya no se mide solo en velocidad y costo, sino en resiliencia. Los modelos ágiles, impulsados por datos en tiempo real, permiten anticipar disrupciones y reconfigurar rutas sobre la marcha. Imagine un sistema que no solo le dice dónde está su contenedor, sino que le predice un retraso portuario y le sugiere automáticamente una alternativa multimodal, optimizando costos y tiempo de forma integrada.' },
      { type: 'p', text: 'La trazabilidad ha escalado desde el "seguimiento" hasta la "visibilidad total". Gracias al IoT y blockchain, cada producto cuenta su historia: origen, condiciones de transporte, huella de carbono, autenticidad. Esto no es solo un lujo para el consumidor final; es una herramienta corporativa poderosa. Permite una gestión de inventario predictiva, cumplimiento regulatorio automatizado y una respuesta rápida ante cualquier incidente en la cadena.' },
      { type: 'p', text: 'Finalmente, la sostenibilidad ha dejado de ser un eslogan de marketing para convertirse en un KPI financiero. Las métricas de huella de carbono son ahora un factor crítico en la toma de decisiones. Las empresas líderes no solo reportan su impacto, sino que lo utilizan para optimizar rutas, seleccionar socios y acceder a financiamiento verde, convirtiendo una obligación ética en una ventaja competitiva tangible.' },
      { type: 'h2', text: '¿Cómo lo hacemos posible en InverCenter?' },
      { type: 'p', text: 'Integramos nuestra plataforma logística con sus sistemas ERP y de datos, aplicando analítica predictiva y soluciones de trazabilidad blockchain para ofrecerle no solo un servicio de transporte, sino un ecosistema de supply chain inteligente, resiliente y alineado con sus metas de sostenibilidad.' },
      { type: 'cta', text: '¿Listo para transformar su cadena de suministro? Hable con nuestros expertos.', href: '/contact' },
    ],
  },
  {
    id: 'cumplimiento-pagos-globales',
    category: 'pagos',
    tag: 'Pagos',
    title: 'Cumplimiento y optimización en pagos internacionales',
    excerpt:
      'De AML/KYC a screening de sanciones: cómo las empresas integran compliance sin fricción y reducen costos cambiarios.',
    date: '2025-09-18',
    author: 'Equipo InverCenter',
    readTime: '4 min',
    href: '/insights/cumplimiento-pagos-globales',
    content: [
      { type: 'p', text: 'Navegar el complejo mundo de los pagos internacionales es como caminar sobre una cuerda floja: de un lado, la presión de la eficiencia y la reducción de costos; del otro, el abismo regulatorio del cumplimiento (AML/KYC, sanciones). La clave ya no es solo cumplir, sino hacerlo sin sacrificar la agilidad del negocio.' },
      { type: 'p', text: 'El paradigma está cambiando de un "cumplimiento reactivo" a un "cumplimiento integrado y sin fricciones". Las plataformas tecnológicas avanzadas ahora permiten automatizar los flujos de trabajo de due diligence, realizar verificaciones en tiempo real y mantener registros auditables de manera continua. Esto reduce el riesgo operacional y libera a su equipo para focarse en actividades de mayor valor.' },
      { type: 'p', text: 'Paralelamente, la optimización de costos cambiarios ha dejado de ser una simple búsqueda del mejor tipo de cambio. Se trata de una gestión estratégica de la exposición a divisas, utilizando herramientas de cobertura (hedging) y mecanismos de pago que se ejecutan en ventanas de oportunidad precisas, logrando ahorros significativos que impactan directamente en el margen.' },
      { type: 'p', text: 'La integración es la palabra clave. Un sistema donde la verificación de un pago, la evaluación de riesgo y la ejecución cambiaria ocurren en una secuencia fluida y automatizada es la nueva ventaja competitiva en el comercio global.' },
      { type: 'h2', text: '¿Cómo lo hacemos posible en InverCenter?' },
      { type: 'p', text: 'Combinamos nuestra profunda experiencia regulatoria con plataformas tecnológicas de vanguardia para ofrecerle una solución de pagos internacionales que es a la vez segura, ágil y optimizada para maximizar sus flujos de capital y minimizar sus riesgos.' },
      { type: 'cta', text: 'Optimice su estrategia de pagos internacionales. Solicite una consultoría gratuita.', href: '/contact' },
    ],
  },
  {
    id: 'blockchain-supply-chain',
    category: 'blockchain',
    tag: 'Blockchain',
    title: 'Casos de uso de blockchain en supply chain y finanzas corporativas',
    excerpt:
      'Contratos inteligentes, tokenización de documentos y verificación de origen para cadenas de suministro más confiables.',
    date: '2025-08-30',
    author: 'Equipo InverCenter',
    readTime: '6 min',
    href: '/insights/blockchain-supply-chain',
    content: [
      { type: 'p', text: 'Blockchain ha trascendido el hype de las criptomonedas para consolidarse como una tecnología fundamental para la confianza y la eficiencia en los negocios. Su valor reside en la creación de un registro inmutable, descentralizado y transparente, ideal para resolver puntos críticos en supply chain y finanzas.' },
      { type: 'h2', text: 'En la Cadena de Suministro' },
      { type: 'ul', items: [
        'Verificación de Origen y Autenticidad: rastree cada ingrediente o componente hasta su origen, combatiendo la falsificación y asegurando el cumplimiento de estándares.',
        'Contratos Inteligentes para Logística: libere pagos automáticamente al confirmarse la entrega con IoT, eliminando disputas y acelerando ciclos.'
      ]},
      { type: 'h2', text: 'En Finanzas Corporativas' },
      { type: 'ul', items: [
        'Tokenización de Documentos y Activos: cartas de crédito o conocimientos de embarque como activos digitales únicos y transferibles.',
        'Conciliación Automatizada: una blockchain compartida elimina conciliaciones manuales y reduce errores.'
      ]},
      { type: 'p', text: 'Estos casos de uso no son futuristas; son implementaciones presentes que están redefiniendo los estándares de confiabilidad y eficiencia operativa.' },
      { type: 'h2', text: '¿Cómo lo hacemos posible en InverCenter?' },
      { type: 'p', text: 'Diseñamos e implementamos soluciones de blockchain a la medida de sus desafíos específicos, creando cadenas de suministro más confiables y sistemas financieros corporativos más ágiles y seguros.' },
      { type: 'cta', text: 'Descubra cómo blockchain puede resolver sus desafíos de confianza y eficiencia. Contáctenos.', href: '/contact' },
    ],
  },
  {
    id: 'analitica-predictiva-y-rpa',
    category: 'data',
    tag: 'Data & Tecnología',
    title: 'Analítica predictiva y automatización (RPA) para tomar mejores decisiones',
    excerpt:
      'Cómo los equipos combinan big data con automatización para reducir tiempos operativos y aumentar la productividad.',
    date: '2025-07-22',
    author: 'Equipo InverCenter',
    readTime: '5 min',
    href: '/insights/analitica-predictiva-y-rpa',
    content: [
      { type: 'p', text: 'En la era del big data, el desafío ya no es la falta de información, sino la capacidad de transformarla en acción. La combinación de Analítica Predictiva y Automatización (RPA) permite pasar de lo reactivo a lo proactivo.' },
      { type: 'p', text: 'La Analítica Predictiva utiliza modelos estadísticos y machine learning para analizar datos históricos y actuales, identificando patrones y proyectando futuros escenarios: demanda, riesgos logísticos o financieros.' },
      { type: 'p', text: 'Pero la predicción por sí sola no es suficiente. RPA ejecuta acciones derivadas de esos insights, orquestando tareas repetitivas y conectando sistemas.' },
      { type: 'ul', items: [
        'Si el modelo prevé un pico de demanda, el RPA puede lanzar órdenes de compra a proveedores.',
        'Si se identifica una discrepancia en una factura, el RPA puede bloquearla y notificar al equipo correspondiente.'
      ]},
      { type: 'p', text: 'El resultado: reducción de tiempos operativos, menos errores manuales y mayor productividad, enfocando al talento humano en estrategia e innovación.' },
      { type: 'h2', text: '¿Cómo lo hacemos posible en InverCenter?' },
      { type: 'p', text: 'Integramos sus fuentes de datos y aplicamos soluciones de analítica y RPA para automatizar flujos críticos, convirtiendo datos en decisiones accionables que elevan su rentabilidad.' },
      { type: 'cta', text: 'Automatice su inteligencia de negocio. Hablemos de su proyecto.', href: '/contact' },
    ],
  },
];

// English versions for the Insights listing
export const INSIGHT_CATEGORIES_EN = [
  { id: 'all', label: 'All' },
  { id: 'logistica', label: 'Logistics' },
  { id: 'pagos', label: 'International Payments' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'data', label: 'Data & Technology' },
];

export const INSIGHTS_EN = [
  {
    id: 'tendencias-logistica-2025',
    category: 'logistica',
    tag: 'Logistics',
    title: 'Logistics Trends 2025: efficiency, traceability, and sustainability',
    excerpt:
      'Supply chains are shifting to agile models with real-time visibility, automation, and carbon-footprint metrics.',
    date: '2025-10-01',
    author: 'InverCenter Team',
    readTime: '5 min',
    href: '/insights/tendencias-logistica-2025',
  },
  {
    id: 'cumplimiento-pagos-globales',
    category: 'pagos',
    tag: 'Payments',
    title: 'Compliance and optimization in international payments',
    excerpt:
      'From AML/KYC to sanctions screening: how companies integrate seamless compliance and reduce FX costs.',
    date: '2025-09-18',
    author: 'InverCenter Team',
    readTime: '4 min',
    href: '/insights/cumplimiento-pagos-globales',
  },
  {
    id: 'blockchain-supply-chain',
    category: 'blockchain',
    tag: 'Blockchain',
    title: 'Blockchain use cases in supply chain and corporate finance',
    excerpt:
      'Smart contracts, document tokenization, and origin verification for more reliable supply chains.',
    date: '2025-08-30',
    author: 'InverCenter Team',
    readTime: '6 min',
    href: '/insights/blockchain-supply-chain',
  },
  {
    id: 'analitica-predictiva-y-rpa',
    category: 'data',
    tag: 'Data & Technology',
    title: 'Predictive analytics and automation (RPA) for better decisions',
    excerpt:
      'How teams combine big data with automation to reduce cycle times and increase productivity.',
    date: '2025-07-22',
    author: 'InverCenter Team',
    readTime: '5 min',
    href: '/insights/analitica-predictiva-y-rpa',
  },
];
