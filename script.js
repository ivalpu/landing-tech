// ===== i18n (Internationalization) =====
const translations = {
  es: {
    // Navbar
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.servicios": "Servicios",
    "nav.portfolio": "Portfolio",
    "nav.blog": "Blog",
    "nav.testimonios": "Testimonios",
    "nav.faq": "FAQ",
    "nav.contacto": "Contacto",
    // Lang & Theme
    "lang.toggle": "Cambiar idioma",
    "theme.toggle": "Cambiar tema",
    "menu.toggle": "Menu",
    // Hero
    "hero.badge": "\ud83d\ude80 Agencia Digital",
    "hero.title.line1": "Creamos experiencias",
    "hero.title.gradient": "digitales",
    "hero.title.line2": "que impulsan tu negocio",
    "hero.subtitle":
      "Somos un equipo de disenadores y desarrolladores apasionados por transformar ideas en productos digitales que generan impacto real.",
    "hero.btn.primary": "Habla con nosotros",
    "hero.btn.secondary": "Ver proyectos",
    "hero.stat1": "Proyectos",
    "hero.stat2": "Clientes",
    "hero.stat3": "Satisfaccion",
    "hero.dashboard": "novatech/dashboard",
    "hero.floating1": "\u2728 Diseno UX/UI",
    "hero.floating2": "\u26a1 Desarrollo Web",
    "hero.floating3": "\ud83d\udcf1 Apps Moviles",
    // Marquee
    "marquee.react": "Desarrollo React",
    "marquee.ux": "Diseno UX/UI",
    "marquee.apps": "Apps Nativas",
    "marquee.cloud": "Cloud & DevOps",
    "marquee.marketing": "Marketing Digital",
    "marquee.ciberseguridad": "Ciberseguridad",
    "marquee.branding": "Branding",
    "marquee.ia": "IA & Machine Learning",
    // Stats
    "stats.proyectos": "Proyectos Completados",
    "stats.clientes": "Clientes Satisfechos",
    "stats.anios": "Anos de Experiencia",
    "stats.soporte": "Soporte Tecnico",
    // About
    "about.badge": "Sobre Nosotros",
    "about.title.line1": "Transformamos ideas en",
    "about.title.gradient": "soluciones digitales",
    "about.text":
      "En NovaTech, creemos que cada proyecto es una oportunidad para innovar. Desde 2021, ayudamos a empresas de todos los tamanos a establecer su presencia digital con soluciones a medida.",
    "about.feature1.title": "Enfoque Estrategico",
    "about.feature1.desc":
      "Cada decision esta respaldada por datos y alineada con tus objetivos.",
    "about.feature2.title": "Colaboracion Total",
    "about.feature2.desc":
      "Trabajamos codo a codo contigo en cada etapa del proyecto.",
    "about.feature3.title": "Innovacion Constante",
    "about.feature3.desc":
      "Utilizamos las tecnologias mas avanzadas del mercado.",
    "about.exp.badge": "Anos de experiencia",
    "about.img.alt": "Equipo NovaTech trabajando",
    // Services
    "services.badge": "Nuestros Servicios",
    "services.title.line1": "Soluciones completas para tu",
    "services.title.gradient": "crecimiento digital",
    "services.desc":
      "Ofrecemos un ecosistema de servicios disenados para impulsar tu presencia online.",
    "service.web.title": "Desarrollo Web",
    "service.web.desc":
      "Creacion de sitios web y aplicaciones web modernas con las ultimas tecnologias del mercado.",
    "service.web.li1": "React / Next.js / Vue",
    "service.web.li2": "Node.js / Python / PHP",
    "service.web.li3": "Bases de datos SQL/NoSQL",
    "service.web.li4": "APIs RESTful y GraphQL",
    "service.mobile.title": "Apps Moviles",
    "service.mobile.desc":
      "Desarrollo de aplicaciones nativas e hibridas para iOS y Android con experiencia fluida.",
    "service.mobile.li1": "React Native / Flutter",
    "service.mobile.li2": "UI/UX para moviles",
    "service.mobile.li3": "Optimizacion de rendimiento",
    "service.mobile.li4": "Publicacion en stores",
    "service.design.title": "Diseno UX/UI",
    "service.design.desc":
      "Disenamos interfaces intuitivas y atractivas que encantan a los usuarios y mejoran conversiones.",
    "service.design.li1": "Investigacion de usuarios",
    "service.design.li2": "Wireframes y prototipos",
    "service.design.li3": "Design Systems",
    "service.design.li4": "Pruebas de usabilidad",
    "service.marketing.title": "Marketing Digital",
    "service.marketing.desc":
      "Estrategias de marketing basadas en datos para aumentar tu alcance y conversiones.",
    "service.marketing.li1": "SEO / SEM",
    "service.marketing.li2": "Email Marketing",
    "service.marketing.li3": "Social Media Ads",
    "service.marketing.li4": "Analitica web",
    "service.cloud.title": "Cloud & DevOps",
    "service.cloud.desc":
      "Infraestructura cloud escalable y automatizacion de despliegues para maxima disponibilidad.",
    "service.cloud.li1": "AWS / GCP / Azure",
    "service.cloud.li2": "CI/CD pipelines",
    "service.cloud.li3": "Docker / Kubernetes",
    "service.cloud.li4": "Monitorizacion 24/7",
    "service.ciberseguridad.title": "Ciberseguridad",
    "service.ciberseguridad.desc":
      "Proteccion integral de tus sistemas y datos con las mejores practicas de seguridad.",
    "service.ciberseguridad.li1": "Auditorias de seguridad",
    "service.ciberseguridad.li2": "Penetration testing",
    "service.ciberseguridad.li3": "Proteccion de datos",
    "service.ciberseguridad.li4": "Cumplimiento GDPR",
    // Portfolio
    "portfolio.badge": "Nuestro Portfolio",
    "portfolio.title.line1": "Proyectos que hablan por",
    "portfolio.title.gradient": "si solos",
    "portfolio.desc":
      "Conoce algunos de los proyectos en los que hemos trabajado.",
    "portfolio.filter.all": "Todos",
    "portfolio.filter.web": "Web",
    "portfolio.filter.mobile": "Mobile",
    "portfolio.filter.design": "Diseno",
    "portfolio.ecommerce.title": "E-Commerce Plus",
    "portfolio.ecommerce.desc": "Plataforma de comercio electronico",
    "portfolio.ecommerce.btn": "Ver proyecto",
    "portfolio.fittracker.title": "FitTracker App",
    "portfolio.fittracker.desc": "App de fitness con IA",
    "portfolio.fittracker.btn": "Ver proyecto",
    "portfolio.bankpro.title": "BankPro UX",
    "portfolio.bankpro.desc": "Rediseno de banca digital",
    "portfolio.bankpro.btn": "Ver proyecto",
    "portfolio.streamflix.title": "StreamFlix",
    "portfolio.streamflix.desc": "Plataforma de streaming",
    "portfolio.streamflix.btn": "Ver proyecto",
    "portfolio.melody.title": "Melody App",
    "portfolio.melody.desc": "App de musica social",
    "portfolio.melody.btn": "Ver proyecto",
    "portfolio.ecolife.title": "EcoLife Brand",
    "portfolio.ecolife.desc": "Identidad visual sostenible",
    "portfolio.ecolife.btn": "Ver proyecto",
    // Portfolio modal labels
    "portfolio.modal.client": "Cliente:",
    "portfolio.modal.features": "Funcionalidades clave",
    "portfolio.modal.results": "Resultados",
    "portfolio.modal.challenge": "🎯 Desafío",
    "portfolio.modal.solution": "💡 Solución",
    "portfolio.modal.readingTime": "min de lectura",
    // Contact form extras
    "contact.form.error.network":
      "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos a",
    "contact.form.error.networkRetry": "Reintentar",
    "contact.mail.subject": "Contacto desde NovaTech: ",
    "contact.mail.bodyName": "Nombre",
    "contact.mail.bodyPhone": "Teléfono",

    // Project clients
    "project.ecommerce.client": "Grupo RetailMax",
    "project.fittracker.client": "FitLife Inc.",
    "project.bankpro.client": "BancoPro S.A.",
    "project.streamflix.client": "StreamFlix Media",
    "project.melody.client": "Melody Labs",
    "project.ecolife.client": "EcoLife Brands",

    // Blog
    "blog.badge": "Blog &amp; Noticias",
    "blog.title.line1": "Últimas",
    "blog.title.gradient": "Noticias",
    "blog.desc": "Conocimiento, tendencias y novedades del mundo digital",
    "blog.filter.all": "Todas",
    "blog.filter.desarrollo": "Desarrollo",
    "blog.filter.diseno": "Diseño",
    "blog.filter.marketing": "Marketing",
    "blog.filter.tecnologia": "Tecnología",
    "blog.loadmore": "Cargar más artículos",
    "blog.card.read": "Leer artículo",
    "blog.article.1.title": "Guía completa de optimización SEO en 2026",
    "blog.article.1.excerpt":
      "Descubre las estrategias más efectivas para posicionar tu sitio web en los primeros resultados de búsqueda.",
    "blog.article.1.authorRole": "Especialista SEO",
    "blog.article.1.authorBio":
      "Especialista SEO con más de 5 años de experiencia ayudando a empresas a mejorar su visibilidad online y tráfico orgánico.",
    "blog.article.1.date": "28 mayo, 2026",
    "blog.article.1.content":
      "<p>El SEO sigue siendo una de las estrategias más rentables para atraer tráfico orgánico de calidad. Los algoritmos priorizan la experiencia de usuario y el contenido útil.</p><p>Los pilares del SEO moderno incluyen la optimización técnica, la creación de contenido relevante y la construcción de autoridad. La velocidad de carga, compatibilidad móvil y seguridad son factores críticos.</p><blockquote>El mejor lugar para esconder un cuerpo es la segunda página de Google.</blockquote><ul><li>Investiga palabras clave con intención de búsqueda</li><li>Optimiza Core Web Vitals</li><li>Crea contenido original de valor</li></ul>",
    "blog.article.2.title":
      "Cómo el diseño UX/UI transforma la experiencia de usuarios",
    "blog.article.2.excerpt":
      "El diseño centrado en el usuario no solo mejora la estética, sino que incrementa las conversiones y la satisfacción del cliente.",
    "blog.article.2.authorRole": "Diseñador UX Lead",
    "blog.article.2.authorBio":
      "Diseñador UX/UI especializado en crear productos digitales intuitivos y visualmente atractivos.",
    "blog.article.2.date": "25 mayo, 2026",
    "blog.article.2.content":
      "<p>El diseño UX/UI ha pasado de ser un lujo a una necesidad en el desarrollo de productos digitales. Las empresas que invierten en experiencia de usuario ven retornos significativos.</p><p>Un buen diseño guía al usuario de forma intuitiva hacia sus objetivos, reduciendo la fricción y aumentando la satisfacción general.</p><blockquote>El diseño no es solo cómo se ve y cómo se siente. El diseño es cómo funciona. — Steve Jobs</blockquote><ul><li>Realiza pruebas de usabilidad con usuarios reales</li><li>Implementa un sistema de diseño coherente</li><li>Prioriza la accesibilidad WCAG 2.1</li></ul>",
    "blog.article.3.title": "React vs Vue vs Angular: ¿Cuál elegir en 2026?",
    "blog.article.3.excerpt":
      "Analizamos las fortalezas y debilidades de los tres frameworks más populares para ayudarte a tomar la mejor decisión.",
    "blog.article.3.authorRole": "Desarrolladora Full Stack",
    "blog.article.3.authorBio":
      "Desarrollador web full-stack apasionado por construir aplicaciones rápidas, escalables y mantenibles.",
    "blog.article.3.date": "22 mayo, 2026",
    "blog.article.3.content":
      "<p>La elección del framework adecuado puede determinar el éxito del proyecto. React continúa siendo el más popular, pero Vue y Angular tienen nichos donde brillan.</p><p>React ofrece flexibilidad con su ecosistema masivo. Vue destaca por su curva de aprendizaje suave. Angular proporciona estructura completa para apps empresariales.</p><blockquote>Elige la herramienta correcta para el trabajo correcto.</blockquote><ul><li>React: Ideal para proyectos flexibles y escalables</li><li>Vue: Perfecto para equipos pequeños y prototipos</li><li>Angular: La mejor opción para aplicaciones empresariales</li></ul>",
    "blog.article.4.title":
      "Tendencias de marketing digital para el próximo trimestre",
    "blog.article.4.excerpt":
      "Mantente a la vanguardia con las últimas tendencias en publicidad digital, redes sociales y automatización.",
    "blog.article.4.authorRole": "Directora de Marketing",
    "blog.article.4.authorBio":
      "Analista de marketing digital con experiencia en estrategias basadas en datos y optimización del ROI.",
    "blog.article.4.date": "19 mayo, 2026",
    "blog.article.4.content":
      "<p>El panorama del marketing digital evoluciona constantemente. Las marcas que se adaptan rápidamente obtienen una ventaja competitiva significativa.</p><p>La IA generativa está revolucionando la creación de contenido, permitiendo personalización a escala y análisis predictivo más preciso que nunca.</p><blockquote>El marketing ya no trata sobre lo que vendes, sino sobre las historias que cuentas. — Seth Godin</blockquote><ul><li>Contenido generado por IA con supervisión humana</li><li>Estrategias omnicanal integradas</li><li>Personalización en tiempo real</li></ul>",
    "blog.article.5.title":
      "Arquitectura limpia: principios para software sostenible",
    "blog.article.5.excerpt":
      "Aprende los fundamentos de la arquitectura limpia para crear código mantenible y escalable a largo plazo.",
    "blog.article.5.authorRole": "Arquitecto de Software",
    "blog.article.5.authorBio":
      "Arquitecto de software con más de 10 años diseñando sistemas escalables, mantenibles y alineados con principios SOLID.",
    "blog.article.5.date": "16 mayo, 2026",
    "blog.article.5.content":
      "<p>La arquitectura limpia, popularizada por Robert C. Martin, establece principios para crear software fácil de mantener, probar y evolucionar.</p><p>El principio fundamental es la separación de responsabilidades en capas, donde las reglas de negocio son independientes de los detalles de implementación.</p><blockquote>La única forma de ir rápido es ir bien. — Robert C. Martin</blockquote><ul><li>Independencia del framework</li><li>Testeabilidad del código de negocio</li><li>Separación en capas concéntricas</li></ul>",
    "blog.article.6.title": "Edge computing y el futuro del desarrollo web",
    "blog.article.6.excerpt":
      "Cómo la computación en el borde está transformando la velocidad y eficiencia de las aplicaciones web modernas.",
    "blog.article.6.authorRole": "Ingeniera Cloud",
    "blog.article.6.authorBio":
      "Ingeniera cloud especializada en arquitecturas edge, computación distribuida y despliegues de alta disponibilidad.",
    "blog.article.6.date": "13 mayo, 2026",
    "blog.article.6.content":
      "<p>El edge computing está redefiniendo cómo construimos aplicaciones web. Al procesar datos cerca del usuario, reducimos drásticamente la latencia.</p><p>Combinado con WebAssembly y service workers, permite ejecutar lógica compleja en el borde de la red sin depender de servidores centralizados.</p><blockquote>El futuro del código no está en la nube, está en el borde.</blockquote><ul><li>Reducción de latencia a milisegundos</li><li>Mejora en seguridad y privacidad</li><li>Escalabilidad horizontal automática</li></ul>",
    "blog.article.7.title": "Estrategias de branding digital para startups",
    "blog.article.7.excerpt":
      "Construye una marca sólida desde cero con estas estrategias probadas de branding digital para empresas emergentes.",
    "blog.article.7.authorRole": "Especialista en Branding",
    "blog.article.7.authorBio":
      "Diseñador de identidad de marca ayudando a empresas a establecer presencias visuales memorables y consistentes.",
    "blog.article.7.date": "10 mayo, 2026",
    "blog.article.7.content":
      "<p>Crear una marca digital sólida es fundamental para cualquier startup. El branding no es solo un logo, sino la percepción completa que los usuarios tienen de tu empresa.</p><p>Las startups exitosas invierten en definir su propuesta de valor única, personalidad de marca y voz coherente en todos los puntos de contacto.</p><blockquote>Tu marca es lo que otros dicen de ti cuando no estás en la sala. — Jeff Bezos</blockquote><ul><li>Define tu propuesta de valor única</li><li>Crea una identidad visual coherente</li><li>Desarrolla una voz de marca auténtica</li></ul>",
    "blog.article.8.title": "Ciberseguridad web: protege tu sitio en 2026",
    "blog.article.8.excerpt":
      "Las amenazas evolucionan constantemente. Descubre las mejores prácticas para mantener tu sitio web seguro.",
    "blog.article.8.authorRole": "Especialista en Ciberseguridad",
    "blog.article.8.authorBio":
      "Experto en ciberseguridad dedicado a proteger activos digitales y privacidad en un mundo interconectado.",
    "blog.article.8.date": "7 mayo, 2026",
    "blog.article.8.content":
      "<p>La seguridad web requiere atención constante. Las amenazas cibernéticas evolucionan rápidamente y las empresas deben mantenerse actualizadas.</p><p>Las prácticas fundamentales incluyen mantener software actualizado, implementar HTTPS, usar firewalls y realizar auditorías periódicas.</p><blockquote>La única computadora segura es la que está apagada, desconectada y enterrada en concreto.</blockquote><ul><li>Implementa HTTPS y HSTS</li><li>Mantén dependencias actualizadas</li><li>Usa autenticación multifactor</li></ul>",
    "blog.category.desarrollo": "Desarrollo",
    "blog.category.diseno": "Diseño UX/UI",
    "blog.category.marketing": "Marketing Digital",
    "blog.category.tecnologia": "Tecnología",
    "blog.modal.takeaways": "Puntos clave",
    "blog.modal.related": "Artículos relacionados",
    "blog.modal.related.empty": "No hay artículos relacionados disponibles.",
    "blog.article.1.author": "María García",
    "blog.article.2.author": "Carlos Mendoza",
    "blog.article.3.author": "Laura Sánchez",
    "blog.article.4.author": "Ana Martínez",
    "blog.article.5.author": "David Torres",
    "blog.article.6.author": "Sofía Ruiz",
    "blog.article.7.author": "María García",
    "blog.article.8.author": "Carlos Mendoza",
    "blog.article.1.category": "marketing",
    "blog.article.2.category": "diseno",
    "blog.article.3.category": "desarrollo",
    "blog.article.4.category": "marketing",
    "blog.article.5.category": "desarrollo",
    "blog.article.6.category": "tecnologia",
    "blog.article.7.category": "diseno",
    "blog.article.8.category": "tecnologia",
    "blog.article.1.tags": "SEO, Marketing Digital, Google, Organic Traffic",
    "blog.article.2.tags": "UX, UI, Diseño, Usabilidad",
    "blog.article.3.tags": "React, Vue, Angular, Frameworks, JavaScript",
    "blog.article.4.tags":
      "Marketing Digital, IA, Redes Sociales, Automatización",
    "blog.article.5.tags": "Arquitectura, Clean Code, SOLID, Desarrollo",
    "blog.article.6.tags": "Edge Computing, WebAssembly, Cloud, Rendimiento",
    "blog.article.7.tags": "Branding, Color Theory, Visual Identity, Logo",
    "blog.article.8.tags": "Ciberseguridad, HTTPS, Firewall, Auditoría",
    // Testimonials
    "testimonials.badge": "Testimonios",
    "testimonials.title.line1": "Lo que dicen nuestros",
    "testimonials.title.gradient": "clientes",
    "testimonials.desc":
      "La satisfacción de nuestros clientes es nuestra mejor tarjeta de presentación.",
    "testimonial1.text":
      '"Trabajar con NovaTech fue una experiencia increíble. Transformaron nuestra idea en un producto digital que superó todas nuestras expectativas. Profesionalismo y calidad excepcional."',
    "testimonial1.name": "María Rodríguez",
    "testimonial1.role": "CEO, TechStart SL",
    "testimonial2.text":
      '"El equipo de NovaTech entendió nuestras necesidades desde el primer momento. El resultado fue una aplicación web que nuestros usuarios aman. Altamente recomendados."',
    "testimonial2.name": "Carlos García",
    "testimonial2.role": "CTO, InnovaCorp",
    "testimonial3.text":
      '"Contratamos a NovaTech para rediseñar nuestra plataforma de e-learning. Los resultados fueron sorprendentes: las ventas aumentaron un 200% en solo 3 meses."',
    "testimonial3.name": "Ana López",
    "testimonial3.role": "Directora, EduWeb",
    // FAQ
    "faq.badge": "FAQ",
    "faq.title.line1": "Preguntas",
    "faq.title.gradient": "frecuentes",
    "faq.desc": "Resolvemos tus dudas sobre nuestros servicios y procesos.",
    "faq.q1": "¿Cuánto tiempo toma desarrollar un proyecto web?",
    "faq.a1":
      "Dependiendo de la complejidad, un proyecto web típico puede tomar entre 4 y 12 semanas. Realizamos una reunión inicial para evaluar tus necesidades y darte un cronograma preciso.",
    "faq.q2": "¿Ofrecen servicios de mantenimiento continuo?",
    "faq.a2":
      "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, respaldos, monitoreo y soporte técnico 24/7 para garantizar que tu sitio funcione sin problemas.",
    "faq.q3": "¿Qué tecnologías utilizan para el desarrollo?",
    "faq.a3":
      "Trabajamos con un stack moderno: React, Next.js, Node.js, TypeScript, y bases de datos como PostgreSQL y MongoDB. Para apps móviles usamos React Native y Flutter. Siempre elegimos la mejor tecnología para cada proyecto.",
    "faq.q4": "¿Cómo manejan el feedback y las revisiones?",
    "faq.a4":
      "Utilizamos metodologías ágiles con entregas quincenales. Tendrás acceso a un dashboard donde podrás ver el progreso y dejar feedback en tiempo real. Incluimos hasta 3 rondas de revisión en cada fase.",
    "faq.q5": "¿Trabajan con startups o solo con empresas grandes?",
    "faq.a5":
      "Trabajamos con empresas de todos los tamaños, desde startups en fase inicial hasta grandes corporaciones. Ofrecemos planes flexibles y escalables que se adaptan al presupuesto y necesidades de cada cliente.",
    // Contact
    "contact.badge": "Contacto",
    "contact.title.line1": "Hablemos de tu",
    "contact.title.gradient": "próximo proyecto",
    "contact.desc":
      "Estamos listos para escucharte. Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.",
    "contact.info.office": "Oficina Central",
    "contact.info.address": "Calle Principal 123, 28001 Madrid",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.hours": "Horario",
    "contact.info.hoursValue": "Lun - Vie: 9:00 - 18:00",
    "contact.form.name": "Nombre completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono (opcional)",
    "contact.form.message": "Mensaje",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.phonePlaceholder": "+34 600 000 000",
    "contact.form.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.error.required": "Campo requerido",
    "contact.form.error.email": "Email inválido",
    "contact.success.title": "¡Mensaje enviado con éxito!",
    "contact.success.desc":
      "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
    "contact.success.reset": "Enviar otro mensaje",
    // Footer
    "footer.desc":
      "Transformando ideas en experiencias digitales desde 2021. Tu socio tecnológico de confianza.",
    "footer.services": "Servicios",
    "footer.company": "Compañía",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
    // Back to top
    backToTop: "Volver arriba",
    // Legal modals
    "legal.privacy.title": "Politica de Privacidad",
    "legal.privacy.lastUpdated": "Ultima actualizacion: 28 de junio de 2026",
    "legal.privacy.intro":
      "En NovaTech, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta politica describe como recopilamos, usamos y protegemos tu informacion.",
    "legal.privacy.section1.title": "1. Informacion que recopilamos",
    "legal.privacy.section1.text":
      "Recopilamos informacion que nos proporcionas directamente al contactarnos, como nombre, email y telefono. Tambien recopilamos datos de navegacion de forma automatica, como direccion IP, tipo de navegador y paginas visitadas.",
    "legal.privacy.section2.title": "2. Como usamos tu informacion",
    "legal.privacy.section2.text":
      "Utilizamos tus datos para responder a tus consultas, enviar informacion sobre nuestros servicios, mejorar nuestra web y cumplir con obligaciones legales.",
    "legal.privacy.section3.title": "3. Proteccion de datos",
    "legal.privacy.section3.text":
      "Implementamos medidas de seguridad tecnicas y organizativas para proteger tus datos contra acceso no autorizado, alteracion, divulgacion o destrucion.",
    "legal.privacy.section4.title": "4. Tus derechos",
    "legal.privacy.section4.text":
      "Tienes derecho a acceder, rectificar, suprimir y limitar el tratamiento de tus datos. Para ejercer estos derechos, contacta a hola@novatech.com.",
    "legal.terms.title": "Terminos de Servicio",
    "legal.terms.lastUpdated": "Ultima actualizacion: 28 de junio de 2026",
    "legal.terms.intro":
      "Al acceder y usar este sitio web y nuestros servicios, aceptas los siguientes terminos y condiciones. Te recomendamos leerlos cuidadosamente.",
    "legal.terms.section1.title": "1. Aceptacion de los terminos",
    "legal.terms.section1.text":
      "Al usar nuestro sitio web, aceptas estos terminos en su totalidad. Si no estás de acuerdo con alguno de ellos, no debes usar nuestros servicios.",
    "legal.terms.section2.title": "2. Servicios",
    "legal.terms.section2.text":
      "NovaTech ofrece servicios de desarrollo web, diseno UX/UI, aplicaciones moviles y marketing digital. Los detalles especificos se acuerdan en cada contrato de prestacion de servicios.",
    "legal.terms.section3.title": "3. Propiedad intelectual",
    "legal.terms.section3.text":
      "Todo el contenido de este sitio web, incluyendo textos, graficos, logos e imagenes, es propiedad de NovaTech o sus proveedores y esta protegido por las leyes de propiedad intelectual.",
    "legal.terms.section4.title": "4. Limitacion de responsabilidad",
    "legal.terms.section4.text":
      "NovaTech no se hace responsable de los danos derivados del uso de este sitio web. Nos reservamos el derecho de modificar o suspender el servicio en cualquier momento.",
    "legal.cookies.title": "Politica de Cookies",
    "legal.cookies.lastUpdated": "Ultima actualizacion: 28 de junio de 2026",
    "legal.cookies.intro":
      "Esta politica explica como NovaTech utiliza las cookies y tecnologias similares en nuestro sitio web.",
    "legal.cookies.section1.title": "1. Que son las cookies",
    "legal.cookies.section1.text":
      "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para recordar tus preferencias y mejorar tu experiencia.",
    "legal.cookies.section2.title": "2. Cookies que utilizamos",
    "legal.cookies.section2.text":
      "Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de analitica para entender como se usa la web, y cookies de preferencias para recordar tu idioma y tema seleccionado.",
    "legal.cookies.section3.title": "3. Gestion de cookies",
    "legal.cookies.section3.text":
      "Puedes configurar tu navegador para rechazar cookies o para notificarte cuando se envian. Sin embargo, algunas funcionalidades del sitio pueden dejar de funcionar correctamente.",
    "legal.cookies.section4.title": "4. Cambios en esta politica",
    "legal.cookies.section4.text":
      "Nos reservamos el derecho de actualizar esta politica de cookies. Cualquier cambio sera publicado en esta pagina con la fecha de ultima actualizacion.",
  },
  en: {
    // Navbar
    "nav.inicio": "Home",
    "nav.nosotros": "About",
    "nav.servicios": "Services",
    "nav.portfolio": "Portfolio",
    "nav.blog": "Blog",
    "nav.testimonios": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contacto": "Contact",
    // Lang & Theme
    "lang.toggle": "Switch language",
    "theme.toggle": "Toggle theme",
    "menu.toggle": "Menu",
    // Hero
    "hero.badge": "\ud83d\ude80 Digital Agency",
    "hero.title.line1": "We create",
    "hero.title.gradient": "digital",
    "hero.title.line2": "experiences that drive your business",
    "hero.subtitle":
      "We are a team of designers and developers passionate about transforming ideas into digital products that generate real impact.",
    "hero.btn.primary": "Talk to us",
    "hero.btn.secondary": "View projects",
    "hero.stat1": "Projects",
    "hero.stat2": "Clients",
    "hero.stat3": "Satisfaction",
    "hero.dashboard": "novatech/dashboard",
    "hero.floating1": "\u2728 UX/UI Design",
    "hero.floating2": "\u26a1 Web Development",
    "hero.floating3": "\ud83d\udcf1 Mobile Apps",
    // Marquee
    "marquee.react": "React Development",
    "marquee.ux": "UX/UI Design",
    "marquee.apps": "Native Apps",
    "marquee.cloud": "Cloud & DevOps",
    "marquee.marketing": "Digital Marketing",
    "marquee.ciberseguridad": "Cybersecurity",
    "marquee.branding": "Branding",
    "marquee.ia": "AI & Machine Learning",
    // Stats
    "stats.proyectos": "Projects Completed",
    "stats.clientes": "Happy Clients",
    "stats.anios": "Years Experience",
    "stats.soporte": "Tech Support",
    // About
    "about.badge": "About Us",
    "about.title.line1": "We turn ideas into",
    "about.title.gradient": "digital solutions",
    "about.text":
      "At NovaTech, we believe every project is an opportunity to innovate. Since 2021, we help businesses of all sizes establish their digital presence with tailored solutions.",
    "about.feature1.title": "Strategic Focus",
    "about.feature1.desc":
      "Every decision is backed by data and aligned with your goals.",
    "about.feature2.title": "Full Collaboration",
    "about.feature2.desc":
      "We work side by side with you at every stage of the project.",
    "about.feature3.title": "Constant Innovation",
    "about.feature3.desc":
      "We use the most advanced technologies in the market.",
    "about.exp.badge": "Years of experience",
    "about.img.alt": "NovaTech team working",
    // Services
    "services.badge": "Our Services",
    "services.title.line1": "Complete solutions for your",
    "services.title.gradient": "digital growth",
    "services.desc":
      "We offer a service ecosystem designed to boost your online presence.",
    "service.web.title": "Web Development",
    "service.web.desc":
      "Creation of modern websites and web applications with the latest technologies.",
    "service.web.li1": "React / Next.js / Vue",
    "service.web.li2": "Node.js / Python / PHP",
    "service.web.li3": "SQL/NoSQL Databases",
    "service.web.li4": "RESTful & GraphQL APIs",
    "service.mobile.title": "Mobile Apps",
    "service.mobile.desc":
      "Native and hybrid app development for iOS and Android with seamless experience.",
    "service.mobile.li1": "React Native / Flutter",
    "service.mobile.li2": "Mobile UI/UX",
    "service.mobile.li3": "Performance optimization",
    "service.mobile.li4": "Store publication",
    "service.design.title": "UX/UI Design",
    "service.design.desc":
      "We design intuitive and attractive interfaces that delight users and boost conversions.",
    "service.design.li1": "User research",
    "service.design.li2": "Wireframes & prototypes",
    "service.design.li3": "Design Systems",
    "service.design.li4": "Usability testing",
    "service.marketing.title": "Digital Marketing",
    "service.marketing.desc":
      "Data-driven marketing strategies to increase your reach and conversions.",
    "service.marketing.li1": "SEO / SEM",
    "service.marketing.li2": "Email Marketing",
    "service.marketing.li3": "Social Media Ads",
    "service.marketing.li4": "Web analytics",
    "service.cloud.title": "Cloud & DevOps",
    "service.cloud.desc":
      "Scalable cloud infrastructure and deployment automation for maximum availability.",
    "service.cloud.li1": "AWS / GCP / Azure",
    "service.cloud.li2": "CI/CD pipelines",
    "service.cloud.li3": "Docker / Kubernetes",
    "service.cloud.li4": "24/7 Monitoring",
    "service.ciberseguridad.title": "Cybersecurity",
    "service.ciberseguridad.desc":
      "Comprehensive protection for your systems and data with best security practices.",
    "service.ciberseguridad.li1": "Security audits",
    "service.ciberseguridad.li2": "Penetration testing",
    "service.ciberseguridad.li3": "Data protection",
    "service.ciberseguridad.li4": "GDPR compliance",
    // Portfolio
    "portfolio.badge": "Our Portfolio",
    "portfolio.title.line1": "Projects that speak for",
    "portfolio.title.gradient": "themselves",
    "portfolio.desc": "Check out some of the projects we have worked on.",
    "portfolio.filter.all": "All",
    "portfolio.filter.web": "Web",
    "portfolio.filter.mobile": "Mobile",
    "portfolio.filter.design": "Design",
    "portfolio.ecommerce.title": "E-Commerce Plus",
    "portfolio.ecommerce.desc": "Full e-commerce platform",
    "portfolio.ecommerce.btn": "View project",
    "portfolio.fittracker.title": "FitTracker App",
    "portfolio.fittracker.desc": "AI fitness app",
    "portfolio.fittracker.btn": "View project",
    "portfolio.bankpro.title": "BankPro UX",
    "portfolio.bankpro.desc": "Digital banking redesign",
    "portfolio.bankpro.btn": "View project",
    "portfolio.streamflix.title": "StreamFlix",
    "portfolio.streamflix.desc": "Streaming platform",
    "portfolio.streamflix.btn": "View project",
    "portfolio.melody.title": "Melody App",
    "portfolio.melody.desc": "Social music app",
    "portfolio.melody.btn": "View project",
    "portfolio.ecolife.title": "EcoLife Brand",
    "portfolio.ecolife.desc": "Sustainable visual identity",
    "portfolio.ecolife.btn": "View project",
    // Portfolio modal labels
    "portfolio.modal.client": "Client:",
    "portfolio.modal.features": "Key Features",
    "portfolio.modal.results": "Results",
    "portfolio.modal.challenge": "🎯 Challenge",
    "portfolio.modal.solution": "💡 Solution",
    "portfolio.modal.readingTime": "min read",
    // Contact form extras
    "contact.form.error.network":
      "Could not send the message. Please try again or email us at",
    "contact.form.error.networkRetry": "Retry",
    "contact.mail.subject": "Contact from NovaTech: ",
    "contact.mail.bodyName": "Name",
    "contact.mail.bodyPhone": "Phone",

    // Project clients
    "project.ecommerce.client": "RetailMax Group",
    "project.fittracker.client": "FitLife Inc.",
    "project.bankpro.client": "BancoPro S.A.",
    "project.streamflix.client": "StreamFlix Media",
    "project.melody.client": "Melody Labs",
    "project.ecolife.client": "EcoLife Brands",

    // Blog
    "blog.badge": "Blog &amp; News",
    "blog.title.line1": "Latest",
    "blog.title.gradient": "News",
    "blog.desc": "Knowledge, trends and news from the digital world",
    "blog.filter.all": "All",
    "blog.filter.desarrollo": "Development",
    "blog.filter.diseno": "Design",
    "blog.filter.marketing": "Marketing",
    "blog.filter.tecnologia": "Technology",
    "blog.loadmore": "Load more articles",
    "blog.card.read": "Read article",
    "blog.article.1.title": "Complete SEO Optimization Guide 2026",
    "blog.article.1.excerpt":
      "Discover the most effective strategies to rank your website in top search results.",
    "blog.article.1.authorRole": "SEO Specialist",
    "blog.article.1.authorBio":
      "SEO specialist with over 5 years of experience helping businesses improve their online visibility and organic traffic.",
    "blog.article.1.date": "May 28, 2026",
    "blog.article.1.content":
      "<p>SEO remains one of the most cost-effective strategies for attracting quality organic traffic. Algorithms prioritize user experience and useful content.</p><p>The pillars of modern SEO include technical optimization, relevant content creation, and authority building. Page speed, mobile-friendliness, and security are critical factors.</p><blockquote>The best place to hide a body is the second page of Google.</blockquote><ul><li>Research keywords with search intent</li><li>Optimize Core Web Vitals</li><li>Create original valuable content</li></ul>",
    "blog.article.2.title": "How UX/UI Design Transforms User Experience",
    "blog.article.2.excerpt":
      "User-centered design not only improves aesthetics but also increases conversions and customer satisfaction.",
    "blog.article.2.authorRole": "UX Lead Designer",
    "blog.article.2.authorBio":
      "UX/UI designer specialized in creating intuitive and visually appealing digital products.",
    "blog.article.2.date": "May 25, 2026",
    "blog.article.2.content":
      "<p>UX/UI design has gone from a luxury to a necessity in digital product development. Companies investing in user experience see significant returns.</p><p>Good design guides users intuitively toward their goals, reducing friction and increasing overall satisfaction.</p><blockquote>Design is not just how it looks and feels. Design is how it works. — Steve Jobs</blockquote><ul><li>Conduct usability tests with real users</li><li>Implement a consistent design system</li><li>Prioritize WCAG 2.1 accessibility</li></ul>",
    "blog.article.3.title": "React vs Vue vs Angular: Which to Choose in 2026?",
    "blog.article.3.excerpt":
      "We analyze the strengths and weaknesses of the three most popular frameworks to help you make the best decision.",
    "blog.article.3.authorRole": "Full Stack Developer",
    "blog.article.3.authorBio":
      "Full-stack web developer passionate about building fast, scalable and maintainable applications.",
    "blog.article.3.date": "May 22, 2026",
    "blog.article.3.content":
      "<p>Choosing the right framework can determine project success. React remains the most popular, but Vue and Angular have niches where they shine.</p><p>React offers flexibility with its massive ecosystem. Vue stands out for its gentle learning curve. Angular provides complete structure for enterprise apps.</p><blockquote>Choose the right tool for the right job.</blockquote><ul><li>React: Ideal for flexible, scalable projects</li><li>Vue: Perfect for small teams and prototypes</li><li>Angular: Best for enterprise applications</li></ul>",
    "blog.article.4.title": "Digital Marketing Trends for Next Quarter",
    "blog.article.4.excerpt":
      "Stay ahead with the latest trends in digital advertising, social media, and automation.",
    "blog.article.4.authorRole": "Marketing Director",
    "blog.article.4.authorBio":
      "Digital marketing analyst experienced in data-driven strategies and ROI optimization.",
    "blog.article.4.date": "May 19, 2026",
    "blog.article.4.content":
      "<p>The digital marketing landscape is constantly evolving. Brands that adapt quickly gain a significant competitive advantage.</p><p>Generative AI is revolutionizing content creation, enabling personalization at scale and more accurate predictive analysis than ever before.</p><blockquote>Marketing is no longer about what you sell, but the stories you tell. — Seth Godin</blockquote><ul><li>AI-generated content with human oversight</li><li>Integrated omnichannel strategies</li><li>Real-time personalization</li></ul>",
    "blog.article.5.title":
      "Clean Architecture: Principles for Sustainable Software",
    "blog.article.5.excerpt":
      "Learn the fundamentals of clean architecture to create maintainable and scalable code long-term.",
    "blog.article.5.authorRole": "Software Architect",
    "blog.article.5.authorBio":
      "Software architect with over 10 years designing scalable, maintainable systems aligned with SOLID principles.",
    "blog.article.5.date": "May 16, 2026",
    "blog.article.5.content":
      "<p>Clean architecture, popularized by Robert C. Martin, establishes principles for creating software that is easy to maintain, test, and evolve.</p><p>The fundamental principle is separation of concerns into layers, where business rules are independent of implementation details.</p><blockquote>The only way to go fast is to go well. — Robert C. Martin</blockquote><ul><li>Framework independence</li><li>Business code testability</li><li>Concentric layer separation</li></ul>",
    "blog.article.6.title": "Edge Computing and the Future of Web Development",
    "blog.article.6.excerpt":
      "How edge computing is transforming the speed and efficiency of modern web applications.",
    "blog.article.6.authorRole": "Cloud Engineer",
    "blog.article.6.authorBio":
      "Cloud engineer specialized in edge architectures, distributed computing and high-availability deployments.",
    "blog.article.6.date": "May 13, 2026",
    "blog.article.6.content":
      "<p>Edge computing is redefining how we build web applications. By processing data near the user, we drastically reduce latency.</p><p>Combined with WebAssembly and service workers, it enables running complex logic at the network edge without relying on centralized servers.</p><blockquote>The future of code is not in the cloud, it is at the edge.</blockquote><ul><li>Latency reduction to milliseconds</li><li>Improved security and privacy</li><li>Automatic horizontal scaling</li></ul>",
    "blog.article.7.title": "Digital Branding Strategies for Startups",
    "blog.article.7.excerpt":
      "Build a strong brand from scratch with these proven digital branding strategies.",
    "blog.article.7.authorRole": "Branding Specialist",
    "blog.article.7.authorBio":
      "Brand identity designer helping companies establish memorable and consistent visual presences.",
    "blog.article.7.date": "May 10, 2026",
    "blog.article.7.content":
      "<p>Creating a strong digital brand is essential for any startup. Branding is not just a logo, but the complete perception users have of your company.</p><p>Successful startups invest in defining their unique value proposition, brand personality, and consistent voice across all touchpoints.</p><blockquote>Your brand is what others say about you when you are not in the room. — Jeff Bezos</blockquote><ul><li>Define your unique value proposition</li><li>Create a consistent visual identity</li><li>Develop an authentic brand voice</li></ul>",
    "blog.article.8.title": "Web Cybersecurity: Protect Your Site in 2026",
    "blog.article.8.excerpt":
      "Threats evolve constantly. Discover best practices to keep your website secure.",
    "blog.article.8.authorRole": "Cybersecurity Specialist",
    "blog.article.8.authorBio":
      "Cybersecurity expert dedicated to protecting digital assets and privacy in an interconnected world.",
    "blog.article.8.date": "May 7, 2026",
    "blog.article.8.content":
      "<p>Web security requires constant attention. Cyber threats evolve rapidly and businesses must stay updated.</p><p>Fundamental practices include keeping software updated, implementing HTTPS, using firewalls, and conducting periodic audits.</p><blockquote>The only secure computer is one that is turned off, disconnected and buried in concrete.</blockquote><ul><li>Implement HTTPS and HSTS</li><li>Keep dependencies updated</li><li>Use multi-factor authentication</li></ul>",
    "blog.category.desarrollo": "Development",
    "blog.category.diseno": "UX/UI Design",
    "blog.category.marketing": "Digital Marketing",
    "blog.category.tecnologia": "Technology",
    "blog.modal.takeaways": "Key takeaways",
    "blog.modal.related": "Related articles",
    "blog.modal.related.empty": "No related articles available.",
    "blog.article.1.author": "Maria Garcia",
    "blog.article.2.author": "Carlos Mendoza",
    "blog.article.3.author": "Laura Sanchez",
    "blog.article.4.author": "Ana Martinez",
    "blog.article.5.author": "David Torres",
    "blog.article.6.author": "Sofia Ruiz",
    "blog.article.7.author": "Maria Garcia",
    "blog.article.8.author": "Carlos Mendoza",
    "blog.article.1.category": "marketing",
    "blog.article.2.category": "diseno",
    "blog.article.3.category": "desarrollo",
    "blog.article.4.category": "marketing",
    "blog.article.5.category": "desarrollo",
    "blog.article.6.category": "tecnologia",
    "blog.article.7.category": "diseno",
    "blog.article.8.category": "tecnologia",
    "blog.article.1.tags": "SEO, Digital Marketing, Google, Organic Traffic",
    "blog.article.2.tags": "UX, UI, Design, Usability",
    "blog.article.3.tags": "React, Vue, Angular, Frameworks, JavaScript",
    "blog.article.4.tags": "Digital Marketing, AI, Social Media, Automation",
    "blog.article.5.tags": "Architecture, Clean Code, SOLID, Development",
    "blog.article.6.tags": "Edge Computing, WebAssembly, Cloud, Performance",
    "blog.article.7.tags": "Branding, Color Theory, Visual Identity, Logo",
    "blog.article.8.tags": "Cybersecurity, HTTPS, Firewall, Audit",
    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title.line1": "What our",
    "testimonials.title.gradient": "clients say",
    "testimonials.desc": "Our clients' satisfaction is our best business card.",
    "testimonial1.text":
      '"Working with NovaTech was an incredible experience. They transformed our idea into a digital product that exceeded all our expectations. Exceptional professionalism and quality."',
    "testimonial1.name": "Maria Rodriguez",
    "testimonial1.role": "CEO, TechStart SL",
    "testimonial2.text":
      '"The NovaTech team understood our needs from the very first moment. The result was a web application our users love. Highly recommended."',
    "testimonial2.name": "Carlos Garcia",
    "testimonial2.role": "CTO, InnovaCorp",
    "testimonial3.text":
      '"We hired NovaTech to redesign our e-learning platform. The results were amazing: sales increased by 200% in just 3 months."',
    "testimonial3.name": "Ana Lopez",
    "testimonial3.role": "Director, EduWeb",
    // FAQ
    "faq.badge": "FAQ",
    "faq.title.line1": "Frequently asked",
    "faq.title.gradient": "questions",
    "faq.desc": "We answer your doubts about our services and processes.",
    "faq.q1": "How long does it take to develop a web project?",
    "faq.a1":
      "Depending on the complexity, a typical web project can take between 4 and 12 weeks. We hold an initial meeting to assess your needs and give you an accurate timeline.",
    "faq.q2": "Do you offer ongoing maintenance services?",
    "faq.a2":
      "Yes, we offer monthly maintenance plans that include security updates, backups, monitoring and 24/7 technical support to keep your site running smoothly.",
    "faq.q3": "What technologies do you use for development?",
    "faq.a3":
      "We work with a modern stack: React, Next.js, Node.js, TypeScript, and databases like PostgreSQL and MongoDB. For mobile apps we use React Native and Flutter. We always pick the best technology for each project.",
    "faq.q4": "How do you handle feedback and revisions?",
    "faq.a4":
      "We use agile methodologies with biweekly deliveries. You will have access to a dashboard where you can see progress and leave feedback in real time. We include up to 3 review rounds in each phase.",
    "faq.q5": "Do you work with startups or only with large companies?",
    "faq.a5":
      "We work with companies of all sizes, from early-stage startups to large corporations. We offer flexible and scalable plans that adapt to the budget and needs of each client.",
    // Contact
    "contact.badge": "Contact",
    "contact.title.line1": "Let's talk about your",
    "contact.title.gradient": "next project",
    "contact.desc":
      "We are ready to listen. Tell us about your project and we will reply in less than 24 hours.",
    "contact.info.office": "Main Office",
    "contact.info.address": "Calle Principal 123, 28001 Madrid",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.hours": "Hours",
    "contact.info.hoursValue": "Mon - Fri: 9:00 - 18:00",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone (optional)",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailPlaceholder": "you@email.com",
    "contact.form.phonePlaceholder": "+34 600 000 000",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.submit": "Send message",
    "contact.form.error.required": "Required field",
    "contact.form.error.email": "Invalid email",
    "contact.success.title": "Message sent successfully!",
    "contact.success.desc":
      "Thanks for contacting us. We will reply in less than 24 hours.",
    "contact.success.reset": "Send another message",
    // Footer
    "footer.desc":
      "Transforming ideas into digital experiences since 2021. Your trusted technology partner.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookies Policy",
    // Back to top
    backToTop: "Back to top",
    // Legal modals
    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.lastUpdated": "Last updated: June 28, 2026",
    "legal.privacy.intro":
      "At NovaTech, we respect your privacy and are committed to protecting your personal data. This policy describes how we collect, use, and protect your information.",
    "legal.privacy.section1.title": "1. Information we collect",
    "legal.privacy.section1.text":
      "We collect information you provide directly when contacting us, such as name, email, and phone number. We also automatically collect browsing data like IP address, browser type, and pages visited.",
    "legal.privacy.section2.title": "2. How we use your information",
    "legal.privacy.section2.text":
      "We use your data to respond to your inquiries, send information about our services, improve our website, and comply with legal obligations.",
    "legal.privacy.section3.title": "3. Data protection",
    "legal.privacy.section3.text":
      "We implement technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.",
    "legal.privacy.section4.title": "4. Your rights",
    "legal.privacy.section4.text":
      "You have the right to access, rectify, delete, and limit the processing of your data. To exercise these rights, contact hola@novatech.com.",
    "legal.terms.title": "Terms of Service",
    "legal.terms.lastUpdated": "Last updated: June 28, 2026",
    "legal.terms.intro":
      "By accessing and using this website and our services, you accept the following terms and conditions. We recommend reading them carefully.",
    "legal.terms.section1.title": "1. Acceptance of terms",
    "legal.terms.section1.text":
      "By using our website, you accept these terms in their entirety. If you do not agree with any of them, you should not use our services.",
    "legal.terms.section2.title": "2. Services",
    "legal.terms.section2.text":
      "NovaTech offers web development, UX/UI design, mobile app, and digital marketing services. Specific details are agreed upon in each service contract.",
    "legal.terms.section3.title": "3. Intellectual property",
    "legal.terms.section3.text":
      "All content on this website, including texts, graphics, logos, and images, is the property of NovaTech or its suppliers and is protected by intellectual property laws.",
    "legal.terms.section4.title": "4. Limitation of liability",
    "legal.terms.section4.text":
      "NovaTech is not liable for damages arising from the use of this website. We reserve the right to modify or suspend the service at any time.",
    "legal.cookies.title": "Cookies Policy",
    "legal.cookies.lastUpdated": "Last updated: June 28, 2026",
    "legal.cookies.intro":
      "This policy explains how NovaTech uses cookies and similar technologies on our website.",
    "legal.cookies.section1.title": "1. What are cookies",
    "legal.cookies.section1.text":
      "Cookies are small text files stored on your device when you visit a website. They help remember your preferences and improve your experience.",
    "legal.cookies.section2.title": "2. Cookies we use",
    "legal.cookies.section2.text":
      "We use essential cookies for site functionality, analytics cookies to understand how the site is used, and preference cookies to remember your language and theme selection.",
    "legal.cookies.section3.title": "3. Managing cookies",
    "legal.cookies.section3.text":
      "You can configure your browser to reject cookies or to notify you when they are sent. However, some site features may stop working properly.",
    "legal.cookies.section4.title": "4. Changes to this policy",
    "legal.cookies.section4.text":
      "We reserve the right to update this cookies policy. Any changes will be published on this page with the last updated date.",
  },
};

// ===== Current Language =====
let currentLang = localStorage.getItem("novatech-lang") || "es";
let currentTheme = localStorage.getItem("novatech-theme") || "light";

// ===== Config =====
const CONFIG = {
  contactEmail: "hola@novatech.com",
  formEndpoint: "",
  formEndpointPlaceholder: "https://formspree.io/f/yourFormId",
};

// ===== DOM References =====
const header = document.getElementById("header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggleNav");
const langToggle = document.getElementById("langToggle");
const langToggleLabel = document.getElementById("langToggleLabel");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const preloader = document.getElementById("preloader");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const resetFormBtn = document.getElementById("resetFormBtn");
const blogGrid = document.getElementById("blogGrid");
const loadMoreBtn = document.getElementById("loadMoreBlog");
const testimonialsTrack = document.getElementById("testimonialsTrack");
const testimonialDots = document.getElementById("testimonialDots");
const portfolioGrid = document.querySelector(".portfolio-grid");
const portfolioFilters = document.querySelector(".portfolio-filters");
const faqItems = document.querySelectorAll(".faq-item");

// ===== Blog Articles Data =====
const blogArticles = [
  {
    id: 1,
    titleKey: "blog.article.1.title",
    excerptKey: "blog.article.1.excerpt",
    authorRoleKey: "blog.article.1.authorRole",
    authorBioKey: "blog.article.1.authorBio",
    dateKey: "blog.article.1.date",
    contentKey: "blog.article.1.content",
    tags: ["SEO", "Marketing Digital", "Google", "Organic Traffic"],
    category: "marketing",
    categoryLabel: "Marketing Digital",
    readingTime: 8,
    author: "Maria Garcia",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "El SEO técnico es la base: sin una web rápida y accesible, el contenido no rankea.",
        "La intención de búsqueda importa más que el volumen de keywords.",
        "Core Web Vitals son factor de ranking confirmado por Google desde 2021.",
        "El contenido evergreen sigue siendo la inversión más rentable a largo plazo.",
      ],
      en: [
        "Technical SEO is the foundation: without a fast, accessible site, content will not rank.",
        "Search intent matters more than raw keyword volume.",
        "Core Web Vitals have been a confirmed Google ranking factor since 2021.",
        "Evergreen content remains the most cost-effective long-term investment.",
      ],
    },
    relatedIds: [4, 7, 2],
  },
  {
    id: 2,
    titleKey: "blog.article.2.title",
    excerptKey: "blog.article.2.excerpt",
    authorRoleKey: "blog.article.2.authorRole",
    authorBioKey: "blog.article.2.authorBio",
    dateKey: "blog.article.2.date",
    contentKey: "blog.article.2.content",
    tags: ["UX", "UI", "Diseno", "Usabilidad"],
    category: "diseno",
    categoryLabel: "Diseno UX/UI",
    readingTime: 6,
    author: "Carlos Mendoza",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "Por cada euro invertido en UX, el retorno está entre 2 y 100 euros según Forrester.",
        "El 88% de los usuarios no vuelve tras una mala experiencia.",
        "Un Design System reduce el tiempo de desarrollo hasta un 40%.",
        "Testear con 5 usuarios descubre el 85% de los problemas de usabilidad.",
      ],
      en: [
        "For every euro invested in UX, the return ranges from 2 to 100 euros per Forrester.",
        "88% of users will not return after a bad experience.",
        "A Design System cuts development time by up to 40%.",
        "Testing with 5 users uncovers 85% of usability issues.",
      ],
    },
    relatedIds: [7, 5, 1],
  },
  {
    id: 3,
    titleKey: "blog.article.3.title",
    excerptKey: "blog.article.3.excerpt",
    authorRoleKey: "blog.article.3.authorRole",
    authorBioKey: "blog.article.3.authorBio",
    dateKey: "blog.article.3.date",
    contentKey: "blog.article.3.content",
    tags: ["React", "Vue", "Angular", "Frameworks", "JavaScript"],
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    readingTime: 10,
    author: "Laura Sanchez",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "Los tres frameworks tienen cuotas similares pero audiencias muy distintas.",
        "React domina en startups y productos consumer-facing.",
        "Vue es ideal para equipos pequeños que necesitan iterar rápido.",
        "Angular sigue siendo el rey en grandes empresas y banca.",
      ],
      en: [
        "All three frameworks have similar market share but very different audiences.",
        "React dominates in startups and consumer-facing products.",
        "Vue is ideal for small teams that need to iterate fast.",
        "Angular remains the king in large enterprises and banking.",
      ],
    },
    relatedIds: [5, 6, 2],
  },
  {
    id: 4,
    titleKey: "blog.article.4.title",
    excerptKey: "blog.article.4.excerpt",
    authorRoleKey: "blog.article.4.authorRole",
    authorBioKey: "blog.article.4.authorBio",
    dateKey: "blog.article.4.date",
    contentKey: "blog.article.4.content",
    tags: ["Marketing Digital", "IA", "Redes Sociales", "Automatizacion"],
    category: "marketing",
    categoryLabel: "Marketing Digital",
    readingTime: 7,
    author: "Ana Martinez",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "La IA generativa está cambiando el SEO más en 6 meses que en los últimos 10 años.",
        "El email marketing tiene el mejor ROI: 36€ por cada euro invertido.",
        "El vídeo corto (TikTok, Reels) tiene 2,5x más engagement que el estático.",
        "La personalización en tiempo real aumenta las conversiones un 20% de media.",
      ],
      en: [
        "Generative AI is changing SEO more in 6 months than in the last 10 years.",
        "Email marketing has the best ROI: 36€ per euro invested.",
        "Short video (TikTok, Reels) gets 2.5x more engagement than static posts.",
        "Real-time personalization lifts conversions by 20% on average.",
      ],
    },
    relatedIds: [1, 7, 8],
  },
  {
    id: 5,
    titleKey: "blog.article.5.title",
    excerptKey: "blog.article.5.excerpt",
    authorRoleKey: "blog.article.5.authorRole",
    authorBioKey: "blog.article.5.authorBio",
    dateKey: "blog.article.5.date",
    contentKey: "blog.article.5.content",
    tags: ["Arquitectura", "Clean Code", "SOLID", "Desarrollo"],
    category: "desarrollo",
    categoryLabel: "Desarrollo",
    readingTime: 9,
    author: "David Torres",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "Clean Architecture trata de dependencias lógicas, no de capas físicas.",
        "El código de negocio debe ser 100% testeable sin frameworks ni bases de datos.",
        "Invertir un 20% más al inicio ahorra un 80% en mantenimiento futuro.",
        "Los principios SOLID son la base, no el techo, de un buen diseño.",
      ],
      en: [
        "Clean Architecture is about logical dependencies, not physical layers.",
        "Business code must be 100% testable without frameworks or databases.",
        "Investing 20% more upfront saves 80% in future maintenance.",
        "SOLID principles are the foundation, not the ceiling, of good design.",
      ],
    },
    relatedIds: [3, 6, 8],
  },
  {
    id: 6,
    titleKey: "blog.article.6.title",
    excerptKey: "blog.article.6.excerpt",
    authorRoleKey: "blog.article.6.authorRole",
    authorBioKey: "blog.article.6.authorBio",
    dateKey: "blog.article.6.date",
    contentKey: "blog.article.6.content",
    tags: ["Edge Computing", "WebAssembly", "Cloud", "Rendimiento"],
    category: "tecnologia",
    categoryLabel: "Tecnologia",
    readingTime: 7,
    author: "Sofia Ruiz",
    authorAvatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "El edge computing reduce la latencia de 100ms a menos de 10ms.",
        "Cloudflare Workers, Vercel Edge y Deno Deploy lideran el mercado.",
        "WebAssembly permite ejecutar código casi-nativo en el edge.",
        "El futuro de la web es distribuido: menos cloud centralizado, más edge.",
      ],
      en: [
        "Edge computing cuts latency from 100ms to under 10ms.",
        "Cloudflare Workers, Vercel Edge and Deno Deploy lead the market.",
        "WebAssembly enables near-native code execution at the edge.",
        "The future of the web is distributed: less centralized cloud, more edge.",
      ],
    },
    relatedIds: [5, 3, 8],
  },
  {
    id: 7,
    titleKey: "blog.article.7.title",
    excerptKey: "blog.article.7.excerpt",
    authorRoleKey: "blog.article.7.authorRole",
    authorBioKey: "blog.article.7.authorBio",
    dateKey: "blog.article.7.date",
    contentKey: "blog.article.7.content",
    tags: ["Branding", "Color Theory", "Visual Identity", "Logo"],
    category: "diseno",
    categoryLabel: "Diseno UX/UI",
    readingTime: 6,
    author: "Maria Garcia",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "El 75% de los consumidores juzga una marca por su diseño visual.",
        "Una marca coherente aumenta los ingresos un 23% (Lucidpress).",
        'El branding empieza antes del logo: primero define tu "por qué".',
        "Consistencia no es aburrimiento: mantén la esencia, varía la ejecución.",
      ],
      en: [
        "75% of consumers judge a brand by its visual design.",
        "A consistent brand increases revenue by 23% (Lucidpress).",
        'Branding starts before the logo: define your "why" first.',
        "Consistency is not boring: keep the essence, vary the execution.",
      ],
    },
    relatedIds: [2, 4, 1],
  },
  {
    id: 8,
    titleKey: "blog.article.8.title",
    excerptKey: "blog.article.8.excerpt",
    authorRoleKey: "blog.article.8.authorRole",
    authorBioKey: "blog.article.8.authorBio",
    dateKey: "blog.article.8.date",
    contentKey: "blog.article.8.content",
    tags: ["Ciberseguridad", "HTTPS", "Firewall", "Auditoria"],
    category: "tecnologia",
    categoryLabel: "Tecnologia",
    readingTime: 7,
    author: "Carlos Mendoza",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    takeaways: {
      es: [
        "El coste medio de un ataque ransomware es de 4,5M€ (IBM 2023).",
        "El 95% de los breaches empiezan por un error humano, no técnico.",
        "HTTPS + HSTS + CSP cubren el 80% de los ataques web básicos.",
        "Las auditorías anuales descubren vulnerabilidades que el monitoring diario no detecta.",
      ],
      en: [
        "The average ransomware attack costs 4.5M€ (IBM 2023).",
        "95% of breaches start with human error, not a technical flaw.",
        "HTTPS + HSTS + CSP cover 80% of basic web attacks.",
        "Annual audits uncover vulnerabilities that daily monitoring misses.",
      ],
    },
    relatedIds: [5, 6, 3],
  },
];
// ===== Portfolio Modal Data =====
const portfolioData = {
  ecommerce: {
    titleKey: "portfolio.ecommerce.title",
    descKey: "portfolio.ecommerce.desc",
    clientKey: "project.ecommerce.client",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    features: [
      "Catalogo de mas de 10.000 productos con busqueda avanzada",
      "Pasarela de pagos integrada con Stripe y PayPal",
      "Dashboard analitico en tiempo real",
      "Sistema de gestion de inventario automatico",
    ],
    results: [
      "Incremento del 45% en la tasa de conversion",
      "Reduccion del 60% en carritos abandonados",
      "Tiempo de carga reducido a menos de 1.5 segundos",
    ],
    tags: ["React", "Next.js", "Stripe", "Node.js"],
    challenge:
      "El cliente tenia una plataforma lenta y con alta tasa de abandono. Necesitaban una solucion escalable que soportara picos de trafico en temporadas altas.",
    solution:
      "Migracion a Next.js con SSR para maximo rendimiento. Checkout optimizado en un solo paso con Stripe. Implementacion de caching inteligente y CDN global.",
  },
  fittracker: {
    titleKey: "portfolio.fittracker.title",
    descKey: "portfolio.fittracker.desc",
    clientKey: "project.fittracker.client",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    features: [
      "IA que adapta rutinas en tiempo real",
      "Seguimiento de progreso con graficos",
      "Planes nutricionales personalizados",
      "Integracion con Apple Health y Google Fit",
    ],
    results: [
      "Mas de 100.000 descargas en el primer trimestre",
      "Valoracion media de 4.7 estrellas",
      "Retencion del 72% a 90 dias",
    ],
    tags: ["React Native", "Python", "AI", "Firebase"],
    challenge:
      "Crear una app de fitness que realmente mantuviera a los usuarios motivados. La competencia era alta y la retencion el mayor desafio.",
    solution:
      "Algoritmo de IA que adapta rutinas en tiempo real segun el progreso. Gamificacion con logros y retos semanales. Integracion con wearables.",
  },
  bankpro: {
    titleKey: "portfolio.bankpro.title",
    descKey: "portfolio.bankpro.desc",
    clientKey: "project.bankpro.client",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&h=400&fit=crop",
    features: [
      "Investigacion con mas de 50 entrevistas",
      "Design System con 150+ componentes",
      "Prototipado interactivo",
      "Rediseno de flujos criticos",
    ],
    results: [
      "Reduccion del 40% en tickets de soporte",
      "Aumento del 35% en aperturas de cuentas",
      "NPS incrementado de 24 a 62",
    ],
    tags: ["Figma", "UX Research", "Design System"],
    challenge:
      "La app bancaria existente tenia una experiencia de usuario compleja y puntuaciones bajas en accesibilidad.",
    solution:
      "Rediseno completo centrado en el usuario con research exhaustivo. Design system accesible con 150+ componentes.",
  },
  streamflix: {
    titleKey: "portfolio.streamflix.title",
    descKey: "portfolio.streamflix.desc",
    clientKey: "project.streamflix.client",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop",
    features: [
      "Motor de recomendaciones con ML",
      "Reproduccion adaptativa HLS",
      "Soporte multi-dispositivo",
      "Panel de control para creadores",
    ],
    results: [
      "Escalado a 500.000 usuarios concurrentes",
      "Reduccion del 70% en costes AWS",
      "Tasa de retencion del 85%",
    ],
    tags: ["AWS", "Microservices", "Kubernetes"],
    challenge:
      "La plataforma de streaming sufria buffering frecuente y altos costes de infraestructura.",
    solution:
      "Arquitectura de microservicios con Kubernetes. CDN multi-region y transcodificacion adaptativa.",
  },
  melody: {
    titleKey: "portfolio.melody.title",
    descKey: "portfolio.melody.desc",
    clientKey: "project.melody.client",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
    features: [
      "Playlists colaborativas en tiempo real",
      "Algoritmo de descubrimiento musical",
      "Salas de escucha sincronizada",
      "Integracion con Spotify",
    ],
    results: [
      "250.000 usuarios activos mensuales",
      "1 millon de playlists creadas",
      "Tiempo medio de sesion de 42 min",
    ],
    tags: ["React", "WebSocket", "Node.js"],
    challenge:
      "Los usuarios querian una experiencia musical social que Spotify no ofrecia.",
    solution:
      "Salas de escucha sincronizada con WebSockets. Algoritmo de descubrimiento colaborativo.",
  },
  ecolife: {
    titleKey: "portfolio.ecolife.title",
    descKey: "portfolio.ecolife.desc",
    clientKey: "project.ecolife.client",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    features: [
      "Diseno de logotipo conceptual",
      "Paleta cromatica de pigmentos naturales",
      "Guia de marca de 80 paginas",
      "Packaging ecologico",
    ],
    results: [
      "Posicionamiento como lider en sostenibilidad",
      "60% mas de reconocimiento de marca",
      "Premio Laus de Bronce 2025",
    ],
    tags: ["Branding", "Design", "Packaging"],
    challenge:
      "La marca necesitaba transmitir su compromiso ecologico sin caer en greenwashing.",
    solution:
      "Identidad visual basada en pigmentos naturales. Packaging compostable y certificaciones reales.",
  },
};

// ===== Blog Posts Rendering =====
let blogFilter = "all";
let blogVisible = 4;

function t(key) {
  return translations[currentLang] &&
    translations[currentLang][key] !== undefined
    ? translations[currentLang][key]
    : translations["en"] && translations["en"][key] !== undefined
      ? translations["en"][key]
      : key;
}

function getCatLabel(category) {
  return t(
    category === "desarrollo"
      ? "blog.category.desarrollo"
      : category === "diseno"
        ? "blog.category.diseno"
        : category === "marketing"
          ? "blog.category.marketing"
          : "blog.category.tecnologia",
  );
}

function renderBlogPosts() {
  if (!blogGrid) return;
  var filtered =
    blogFilter === "all"
      ? blogArticles
      : blogArticles.filter(function (a) {
          return a.category === blogFilter;
        });
  var shown = filtered.slice(0, blogVisible);
  blogGrid.innerHTML = "";
  shown.forEach(function (article, i) {
    var catLabel = getCatLabel(article.category);
    var item = document.createElement("div");
    item.className = "portfolio-item";
    item.setAttribute("data-category", article.category);
    item.style.transitionDelay = i * 0.1 + "s";
    item.innerHTML =
      '<div class="portfolio-image" data-article="' +
      article.id +
      '">' +
      '<img src="' +
      article.image +
      '" alt="' +
      t(article.titleKey) +
      '" loading="lazy" class="portfolio-img">' +
      '<div class="portfolio-overlay">' +
      '<span class="blog-cat-badge ' +
      article.category +
      '">' +
      catLabel +
      "</span>" +
      '<h4 class="blog-overlay-title">' +
      t(article.titleKey) +
      "</h4>" +
      '<p class="blog-overlay-desc">' +
      t(article.excerptKey) +
      "</p>" +
      '<span class="blog-overlay-meta">📅 ' +
      t(article.dateKey) +
      " · " +
      article.readingTime +
      " " +
      t("portfolio.modal.readingTime") +
      "</span>" +
      '<button class="btn btn-sm" data-article="' +
      article.id +
      '">' +
      t("blog.card.read") +
      "</button>" +
      "</div>" +
      "</div>";
    blogGrid.appendChild(item);
    requestAnimationFrame(function () {
      item.classList.add("visible");
    });
  });
  if (loadMoreBtn) {
    loadMoreBtn.style.display = filtered.length <= blogVisible ? "none" : "";
  }
}

// ===== Shared Modal Utilities =====
function _modalGetFocusableElements(modal) {
  return modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
}

function _modalTrapFocus(e) {
  if (e.key !== "Tab") return;
  const focusable = _modalGetFocusableElements(this);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function _modalOpen(modal) {
  modal.classList.add("open");
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.addEventListener("keydown", _modalTrapFocus);
  const focusable = _modalGetFocusableElements(modal);
  if (focusable.length) focusable[0].focus();
}

function _modalClose(modal) {
  modal.classList.remove("open");
  modal.style.display = "";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modal.removeEventListener("keydown", _modalTrapFocus);
}

// ===== Blog Modal =====
(function () {
  var modal = document.getElementById("blogModal");
  if (!modal) return;
  var overlay = modal.querySelector(".portfolio-modal-overlay");
  var closeBtn = modal.querySelector(".portfolio-modal-close");
  var body = document.getElementById("blogModalBody");
  var img = modal.querySelector(".portfolio-modal-img");
  var triggerElement = null;

  var currentId = null;
  var currentScrollHandler = null;

  function closeModal() {
    _modalClose(modal);
    if (triggerElement) triggerElement.focus();
    // Clean up scroll listener
    if (currentScrollHandler) {
      var scrollContainer = body.querySelector(".blog-modal-body-inner");
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", currentScrollHandler);
      }
      currentScrollHandler = null;
    }
  }

  function openModal() {
    _modalOpen(modal);
  }

  function renderArticle(id) {
    var article = blogArticles.find(function (a) {
      return a.id === id;
    });
    if (!article) return;
    currentId = id;

    // Eliminado el código que muestra/oculta las flechas de navegación

    if (img) {
      img.src = article.image;
      img.alt = t(article.titleKey);
    }

    if (body) {
      var catLabel = getCatLabel(article.category);
      var tagsHtml = article.tags
        .map(function (tag) {
          return '<span class="blog-tag">' + tag + "</span>";
        })
        .join("");
      var encodedTitle = encodeURIComponent(t(article.titleKey));

      var takeawaysList = "";
      if (article.takeaways && article.takeaways[currentLang]) {
        takeawaysList = article.takeaways[currentLang]
          .map(function (tk) {
            return "<li>" + tk + "</li>";
          })
          .join("");
      } else if (article.takeaways && article.takeaways.en) {
        takeawaysList = article.takeaways.en
          .map(function (tk) {
            return "<li>" + tk + "</li>";
          })
          .join("");
      }
      var takeawaysBlock = takeawaysList
        ? '<div class="blog-takeaways">' +
          '<div class="blog-takeaways-title">' +
          t("blog.modal.takeaways") +
          "</div>" +
          "<ul>" +
          takeawaysList +
          "</ul>" +
          "</div>"
        : "";

      var relatedCards = "";
      if (article.relatedIds && article.relatedIds.length) {
        relatedCards = article.relatedIds
          .map(function (rid) {
            var rel = blogArticles.find(function (a) {
              return a.id === rid;
            });
            if (!rel) return "";
            var relCat = getCatLabel(rel.category);
            return (
              '<button class="blog-related-card" data-related="' +
              rel.id +
              '" type="button">' +
              '<img class="blog-related-card-img" src="' +
              rel.image +
              '" alt="' +
              t(rel.titleKey) +
              '" loading="lazy">' +
              '<div class="blog-related-card-body">' +
              '<span class="blog-related-card-cat">' +
              relCat +
              "</span>" +
              '<span class="blog-related-card-title">' +
              t(rel.titleKey) +
              "</span>" +
              '<span class="blog-related-card-time">' +
              rel.readingTime +
              " " +
              t("portfolio.modal.readingTime") +
              "</span>" +
              "</div>" +
              "</button>"
            );
          })
          .join("");
      }
      var relatedBlock = relatedCards
        ? '<div class="blog-related">' +
          '<div class="blog-related-title">' +
          t("blog.modal.related") +
          "</div>" +
          '<div class="blog-related-grid">' +
          relatedCards +
          "</div>" +
          "</div>"
        : "";

      body.innerHTML =
        '<div class="blog-modal-progress"></div>' +
        '<div class="blog-modal-body-inner">' +
        '<h2 class="portfolio-modal-title" style="font-size:1.3rem;">' +
        t(article.titleKey) +
        "</h2>" +
        '<div class="blog-meta-row">' +
        '<span class="blog-cat-badge ' +
        article.category +
        '" style="position:static;display:inline-block;">' +
        catLabel +
        "</span>" +
        "<span>" +
        t(article.dateKey) +
        "</span>" +
        '<span class="blog-meta-dot"></span>' +
        "<span>" +
        article.readingTime +
        " " +
        t("portfolio.modal.readingTime") +
        "</span>" +
        "</div>" +
        '<div class="blog-author-row">' +
        '<img src="' +
        article.authorAvatar +
        '" alt="' +
        article.author +
        '">' +
        "<div><strong>" +
        article.author +
        "</strong><span>" +
        t(article.authorRoleKey) +
        "</span></div>" +
        "</div>" +
        takeawaysBlock +
        '<div class="blog-content">' +
        t(article.contentKey) +
        "</div>" +
        '<div class="blog-tags">' +
        tagsHtml +
        "</div>" +
        '<div class="blog-share">' +
        '<button class="share-btn share-twitter" type="button" data-share="twitter" data-share-text="' +
        encodedTitle +
        '">🐦 Twitter</button>' +
        '<button class="share-btn share-linkedin" type="button" data-share="linkedin">💼 LinkedIn</button>' +
        "</div>" +
        relatedBlock +
        "</div>";

      // Wire share buttons (CSP-safe: addEventListener instead of inline onclick)
      var shareTwitter = body.querySelector('[data-share="twitter"]');
      var shareLinkedIn = body.querySelector('[data-share="linkedin"]');
      if (shareTwitter) {
        shareTwitter.addEventListener("click", function () {
          var text = this.getAttribute("data-share-text") || "";
          window.open(
            "https://twitter.com/intent/tweet?text=" + text,
            "_blank",
            "noopener,noreferrer",
          );
        });
      }
      if (shareLinkedIn) {
        shareLinkedIn.addEventListener("click", function () {
          window.open(
            "https://linkedin.com/sharing/share-offsite/?url=" +
              encodeURIComponent(window.location.href),
            "_blank",
            "noopener,noreferrer",
          );
        });
      }
    }

    openModal();

    var progressBar = body.querySelector(".blog-modal-progress");
    var scrollContainer = body.querySelector(".blog-modal-body-inner");
    function updateProgress() {
      if (!scrollContainer) return;
      var max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      var pct = max > 0 ? (scrollContainer.scrollTop / max) * 100 : 0;
      if (progressBar)
        progressBar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    // Clean up previous scroll listener before adding new one
    if (currentScrollHandler) {
      var prevContainer = body.querySelector(".blog-modal-body-inner");
      if (prevContainer) {
        prevContainer.removeEventListener("scroll", currentScrollHandler);
      }
    }
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
      currentScrollHandler = updateProgress;
      scrollContainer.addEventListener("scroll", currentScrollHandler);
      requestAnimationFrame(updateProgress);
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Eliminado eventos de teclado para navegación con flechas

  // Open modal on article button click
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-article]");
    if (!btn) return;
    var id = parseInt(btn.getAttribute("data-article"));
    var article = blogArticles.find(function (a) {
      return a.id === id;
    });
    if (!article) return;
    triggerElement = btn;
    renderArticle(id);
  });

  // Open related article in same modal
  body.addEventListener("click", function (e) {
    var relBtn = e.target.closest("[data-related]");
    if (!relBtn) return;
    var rid = parseInt(relBtn.getAttribute("data-related"));
    if (
      rid &&
      blogArticles.find(function (a) {
        return a.id === rid;
      })
    ) {
      renderArticle(rid);
    }
  });
})();
// ===== Legal Modal =====
(function () {
  var modal = document.getElementById("legalModal");
  if (!modal) return;
  var closeBtn = modal.querySelector(".portfolio-modal-close");
  var overlay = modal.querySelector(".portfolio-modal-overlay");
  var body = document.getElementById("legalModalBody");
  var iconContainer = document.getElementById("legalModalIcon");
  var triggerElement = null;

  var legalIcons = {
    privacy:
      '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    terms:
      '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    cookies:
      '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>',
  };

  function closeModal() {
    _modalClose(modal);
    if (triggerElement) triggerElement.focus();
  }

  function renderLegal(type) {
    if (!body) return;

    if (iconContainer && legalIcons[type]) {
      iconContainer.innerHTML = legalIcons[type];
    }

    var html = '<div class="legal-content">';
    html += '<h2 class="legal-title">' + t("legal." + type + ".title") + "</h2>";
    html +=
      '<div class="legal-meta"><span>' +
      t("legal." + type + ".lastUpdated") +
      "</span></div>";
    html += '<p class="legal-intro">' + t("legal." + type + ".intro") + "</p>";
    html += '<div class="legal-sections">';
    for (var i = 1; i <= 4; i++) {
      html += '<div class="legal-section">';
      html += "<h3>" + t("legal." + type + ".section" + i + ".title") + "</h3>";
      html += "<p>" + t("legal." + type + ".section" + i + ".text") + "</p>";
      html += "</div>";
    }
    html += "</div></div>";
    body.innerHTML = html;
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-legal]");
    if (!link) return;
    e.preventDefault();
    var type = link.getAttribute("data-legal");
    if (!type) return;
    triggerElement = link;
    renderLegal(type);
    _modalOpen(modal);
  });
})();
// ===== Portfolio Modal (New) =====
(function () {
  var modal = document.getElementById("portfolioModal");
  if (!modal) return;
  var overlay = modal.querySelector(".portfolio-modal-overlay");
  var closeBtn = modal.querySelector(".portfolio-modal-close");
  var body = document.getElementById("portfolioModalBody");
  var img = modal.querySelector(".portfolio-modal-img");
  var projectKeys = [
    "ecommerce",
    "fittracker",
    "bankpro",
    "streamflix",
    "melody",
    "ecolife",
  ];
  var currentProject = projectKeys[0];
  var triggerElement = null;

  function closePortfolioModal() {
    _modalClose(modal);
    if (triggerElement) triggerElement.focus();
  }

  function openPortfolioModal() {
    _modalOpen(modal);
  }

  function renderProject(projectKey) {
    currentProject = projectKey;
    var data = portfolioData[projectKey];
    if (!data) return;

    if (img) img.src = data.image;
    if (img) img.alt = t(data.titleKey);

    if (body) {
      var hasCS = data.challenge && data.solution;
      var challengeLabel = t("portfolio.modal.challenge");
      var solutionLabel = t("portfolio.modal.solution");
      var clientLabel = t("portfolio.modal.client");
      var featuresLabel = t("portfolio.modal.features");
      var resultsLabel = t("portfolio.modal.results");

      var challengeHtml = "";
      if (hasCS) {
        challengeHtml =
          '<div class="pm-animate pm-animate-3"><div class="portfolio-modal-cs">' +
          '<div class="portfolio-modal-cs-card">' +
          '<span class="portfolio-modal-cs-label">' +
          challengeLabel +
          "</span>" +
          "<p>" +
          data.challenge +
          "</p>" +
          "</div>" +
          '<div class="portfolio-modal-cs-card">' +
          '<span class="portfolio-modal-cs-label">' +
          solutionLabel +
          "</span>" +
          "<p>" +
          data.solution +
          "</p>" +
          "</div></div></div>";
      }

      body.innerHTML =
        '<div class="pm-animate pm-animate-1">' +
        '<p class="portfolio-modal-desc">' +
        t(data.descKey) +
        "</p>" +
        "</div>" +
        challengeHtml +
        '<div class="pm-animate pm-animate-4 portfolio-modal-columns">' +
        '<div class="portfolio-modal-col-main">' +
        '<div class="portfolio-modal-section"><h4>' +
        featuresLabel +
        "</h4><ul>" +
        data.features
          .map(function (f) {
            return "<li>" + f + "</li>";
          })
          .join("") +
        "</ul></div>" +
        "</div>" +
        '<div class="portfolio-modal-col-results">' +
        '<div class="portfolio-modal-section"><h4>' +
        resultsLabel +
        '</h4><ul class="modal-results-list">' +
        data.results
          .map(function (r) {
            return "<li>" + r + "</li>";
          })
          .join("") +
        "</ul></div>" +
        "</div>" +
        "</div>" +
        '<div class="pm-animate pm-animate-6">' +
        '<div class="portfolio-modal-tags">' +
        data.tags
          .map(function (tag) {
            return '<span class="portfolio-modal-tag">' + tag + "</span>";
          })
          .join("") +
        "</div>" +
        "</div>";
      // Force reflow to restart CSS animations
      void body.offsetHeight;
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closePortfolioModal);

  if (portfolioGrid) {
    portfolioGrid.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-project]");
      if (!btn) return;
      var project = btn.getAttribute("data-project");
      var data = portfolioData[project];
      if (!data) return;
      triggerElement = btn;
      renderProject(project);
      openPortfolioModal();
    });
  }
})();

// ===== Portfolio Filter =====
if (portfolioFilters) {
  portfolioFilters.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    portfolioFilters.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    var filter = btn.getAttribute("data-filter");
    document
      .querySelectorAll("#portfolio .portfolio-item")
      .forEach(function (item) {
        var matches = filter === "all" || item.getAttribute("data-category") === filter;
        if (matches) {
          item.classList.remove("hidden", "filtering");
          item.classList.add("visible");
        } else {
          item.classList.add("filtering");
          setTimeout(function () {
            item.classList.add("hidden");
            item.classList.remove("filtering");
          }, 300);
        }
      });
  });
}

// ===== Blog Filter =====
const blogFilterBar = document.querySelector(".blog-filter-bar");
if (blogFilterBar) {
  blogFilterBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    blogFilterBar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    blogFilter = btn.getAttribute("data-filter");
    blogVisible = 4;
    renderBlogPosts();
  });
}

// ===== Load More Blog =====
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", function () {
    blogVisible += 4;
    renderBlogPosts();
  });
}

// ===== i18n System =====
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var text = t(key);
    if (text !== key) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    el.setAttribute("alt", t(key));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });
  if (langToggleLabel) {
    langToggleLabel.textContent = currentLang === "es" ? "EN" : "ES";
  }
  document.documentElement.setAttribute("lang", currentLang);
  updateFooterCopyright();
  renderBlogPosts();
}

function updateFooterCopyright() {
  var el = document.getElementById("currentYear");
  if (el) {
    var year = new Date().getFullYear();
    el.textContent =
      "\u00a9 " +
      year +
      " NovaTech. " +
      (currentLang === "es"
        ? "Todos los derechos reservados."
        : "All rights reserved.");
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("novatech-lang", lang);
  applyTranslations();
  var titles = document.querySelectorAll(".hero-title, .section-title");
  titles.forEach(function (title) {
    title.querySelectorAll(".stagger-word").forEach(function (w) {
      w.remove();
    });
  });
  if (typeof applyTextStagger === "function") applyTextStagger();
}

// ===== Theme Toggle =====
function updateThemeIcons(theme) {
  var lightIcon = document.querySelector(".icon-light");
  var darkIcon = document.querySelector(".icon-dark");
  if (lightIcon) lightIcon.style.display = theme === "dark" ? "none" : "inline";
  if (darkIcon) darkIcon.style.display = theme === "dark" ? "inline" : "none";
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("novatech-theme", theme);
  updateThemeIcons(theme);
}

const savedTheme = localStorage.getItem("novatech-theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// ===== Language Toggle =====
if (langToggle) {
  langToggle.addEventListener("click", function () {
    setLanguage(currentLang === "es" ? "en" : "es");
  });
}

// ===== Preloader =====
window.addEventListener("load", function () {
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(function () {
      if (preloader) preloader.style.display = "none";
    }, 600);
  }
  if (typeof applyTextStagger === "function") applyTextStagger();
});

// ===== Navigation =====
if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});

// Close mobile menu on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navLinks && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
  }
});

// ===== Scroll Spy - Active nav link =====
(function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinksAll = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinksAll.length) return;

  var NAV_HEIGHT = 72;

  var linkMap = {};
  navLinksAll.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      linkMap[href.substring(1)] = link;
    }
  });

  function setActiveSection(id) {
    navLinksAll.forEach(function (l) {
      l.classList.remove("active");
    });
    if (linkMap[id]) {
      linkMap[id].classList.add("active");
    }
  }

  var currentActive = null;

  // Primary: scroll-based detection (most reliable for "sticky top" feel)
  function onScroll() {
    var scrollPos = window.scrollY + NAV_HEIGHT + 10;
    var found = null;
    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        found = sections[i];
        break;
      }
    }
    if (found) {
      var id = found.getAttribute("id");
      if (id && id !== currentActive) {
        currentActive = id;
        setActiveSection(id);
      }
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on init
})();

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var href = anchor.getAttribute("href");
    if (href === "#") return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      var navH = document.querySelector(".header").offsetHeight || 72;
      var targetPos =
        target.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  });
});
// ===== Marquee Animation (CSS handles it via marqueeScroll keyframe) =====

// ===== Stats Counter =====
function animateCounters() {
  document.querySelectorAll(".stat-number").forEach(function (counter) {
    var target = parseInt(counter.getAttribute("data-target"));
    var current = 0;
    var increment = Math.ceil(target / 40);
    var timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 40);
  });
}

// Stats counter with IntersectionObserver - only animate when visible
(function () {
  var statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;
  var counted = false;
  var statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  statsObserver.observe(statsSection);
})();

// ===== Services Reveal =====
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".service-card").forEach(function (card, i) {
    card.style.transitionDelay = i * 0.1 + "s";
    observer.observe(card);
  });
})();

// ===== Portfolio Items Reveal =====
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".portfolio-item").forEach(function (item) {
    observer.observe(item);
  });
})();

// ===== Testimonials Slider =====
(function () {
  var track = document.getElementById("testimonialsTrack");
  var dots = document.querySelectorAll(".dot");
  if (!track || !dots.length) return;
  var currentSlide = 0;
  var totalSlides = dots.length;
  var autoplayTimer = null;

  function goToSlide(index) {
    currentSlide = index;
    track.style.transform = "translateX(-" + index * 100 + "%)";
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === index);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(function () {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goToSlide(parseInt(dot.getAttribute("data-index")));
      startAutoplay();
    });
  });

  var slider = track.closest(".testimonials-slider");
  if (slider) {
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
  }

  startAutoplay();
})();

// ===== FAQ Accordion =====
document.querySelectorAll(".faq-question").forEach(function (btn) {
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", function () {
    var item = btn.closest(".faq-item");
    var isOpen = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(function (i) {
      i.classList.remove("active");
      i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ===== Contact Form =====
function showFormSuccess() {
  contactForm.reset();
  contactForm.style.display = "none";
  formSuccess.classList.remove("hidden");
  formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showFormError(submitBtn, message) {
  submitBtn.classList.remove("loading");
  submitBtn.disabled = false;
  var errorBox = contactForm.querySelector(".form-error-box");
  if (!errorBox) {
    errorBox = document.createElement("div");
    errorBox.className = "form-error-box";
    errorBox.setAttribute("role", "alert");
    submitBtn.parentNode.appendChild(errorBox);
  }
  errorBox.textContent = message;
  errorBox.style.display = "block";
}

function submitViaMailto(data) {
  var subject = encodeURIComponent(
    t("contact.mail.subject") + (data.name || ""),
  );
  var body = encodeURIComponent(
    t("contact.mail.bodyName") +
      ": " +
      (data.name || "") +
      "\n" +
      "Email: " +
      (data.email || "") +
      "\n" +
      t("contact.mail.bodyPhone") +
      ": " +
      (data.phone || "-") +
      "\n\n" +
      (data.message || ""),
  );
  window.location.href =
    "mailto:" + CONFIG.contactEmail + "?subject=" + subject + "&body=" + body;
}

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    var hasError = false;
    contactForm.querySelectorAll("[required]").forEach(function (field) {
      var group = field.closest(".form-group");
      var errorSpan = group.querySelector(".form-error");
      if (!field.value.trim()) {
        group.classList.add("error");
        if (errorSpan) errorSpan.textContent = t("contact.form.error.required");
        hasError = true;
      } else if (
        field.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
      ) {
        group.classList.add("error");
        if (errorSpan) errorSpan.textContent = t("contact.form.error.email");
        hasError = true;
      } else {
        group.classList.remove("error");
      }
    });
    if (hasError) return;
    var submitBtn = contactForm.querySelector(".submit-btn");
    var originalText = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
    }

    var formData = new FormData(contactForm);
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    if (CONFIG.formEndpoint && CONFIG.formEndpoint.indexOf("http") === 0) {
      try {
        var response = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        if (response.ok) {
          showFormSuccess();
          contactForm.reset();
        } else {
          var errData = await response.json().catch(function () { return {}; });
          throw new Error((errData && errData.error) || "Error " + response.status);
        }
      } catch (err) {
        var msg = t("contact.form.error.network") + " " + CONFIG.contactEmail;
        showFormError(submitBtn, msg);
        console.error("Contact form error:", err);
      } finally {
        if (submitBtn) {
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    } else {
      submitViaMailto(data);
      setTimeout(function () {
        showFormSuccess();
      }, 600);
    }
  });
  contactForm.querySelectorAll("input, textarea").forEach(function (field) {
    field.addEventListener("input", function () {
      var group = field.closest(".form-group");
      if (group) group.classList.remove("error");
      var errorBox = contactForm.querySelector(".form-error-box");
      if (errorBox) errorBox.style.display = "none";
    });
  });
}

if (resetFormBtn) {
  resetFormBtn.addEventListener("click", function () {
    formSuccess.classList.add("hidden");
    contactForm.style.display = "flex";
  });
}

// ===== Parallax =====
var parallaxTicking = false;
function updateHeroParallax() {
  var scrollY = window.scrollY;
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var rect = hero.getBoundingClientRect();
  if (rect.bottom > 0 && rect.top < window.innerHeight) {
    var bgImage = document.querySelector(".hero-bg-image");
    if (bgImage)
      bgImage.style.transform = "translateY(" + scrollY * 0.15 + "px)";
  }
  parallaxTicking = false;
}

function requestParallaxUpdate() {
  if (!parallaxTicking) {
    requestAnimationFrame(updateHeroParallax);
    parallaxTicking = true;
  }
}

// ===== 3D Tilt Effect =====
(function () {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;
  function onTiltMove(e) {
    var card = e.currentTarget;
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var centerX = rect.width / 2;
    var centerY = rect.height / 2;
    var rotateX = ((y - centerY) / centerY) * -3;
    var rotateY = ((x - centerX) / centerX) * 3;
    var perspective = card.classList.contains("hero-card-main")
      ? "1000px"
      : "800px";
    card.style.transform =
      "perspective(" +
      perspective +
      ") rotateX(" +
      rotateX +
      "deg) rotateY(" +
      rotateY +
      "deg)";
    card.style.setProperty("--mx", (x / rect.width) * 100 + "%");
    card.style.setProperty("--my", (y / rect.height) * 100 + "%");
  }
  function onTiltLeave(e) {
    var card = e.currentTarget;
    card.style.transform = "";
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  }
  document
    .querySelectorAll(".service-card, .portfolio-item, .hero-card-main")
    .forEach(function (card) {
      card.addEventListener("mousemove", onTiltMove);
      card.addEventListener("mouseleave", onTiltLeave);
    });
})();

// ===== Text Stagger Reveal =====
let staggerObserver = null;
let staggerFallbackTimer = null;

function revealStaggerTitle(title) {
  if (!title) return;
  var words = title.querySelectorAll(".stagger-word:not(.visible)");
  words.forEach(function (word, i) {
    setTimeout(function () {
      word.classList.add("visible");
    }, i * 50);
  });
}

function applyTextStagger() {
  var titles = document.querySelectorAll(".hero-title, .section-title");
  titles.forEach(function (title) {
    if (title.querySelector(".stagger-word")) return;
    var children = title.children;
    var wordIndex = 0;
    if (children.length === 0) {
      var text = title.textContent.trim();
      var words = text.split(/\s+/);
      var html = "";
      for (var w = 0; w < words.length; w++) {
        if (!words[w]) continue;
        html +=
          '<span class="stagger-word" style="transition-delay:' +
          wordIndex * 0.05 +
          's">' +
          words[w] +
          "</span> ";
        wordIndex++;
      }
      title.innerHTML = html.trim();
    } else {
      for (var c = 0; c < children.length; c++) {
        var child = children[c];
        if (child.querySelector(".stagger-word")) continue;
        if (child.classList.contains("no-stagger")) continue;
        var text = child.textContent.trim();
        var words = text.split(/\s+/);
        var html = "";
        wordIndex = 0;
        for (var w = 0; w < words.length; w++) {
          if (!words[w]) continue;
          html +=
            '<span class="stagger-word" style="transition-delay:' +
            wordIndex * 0.05 +
            's">' +
            words[w] +
            "</span> ";
          wordIndex++;
        }
        child.innerHTML = html.trim();
      }
    }
  });

  if (staggerObserver) staggerObserver.disconnect();
  staggerObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revealStaggerTitle(entry.target);
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
  );
  titles.forEach(function (title) {
    staggerObserver.observe(title);
  });

  // Safety fallback: si el observer no dispara en 1.5s, revelar todo.
  clearTimeout(staggerFallbackTimer);
  staggerFallbackTimer = setTimeout(function () {
    document
      .querySelectorAll(".hero-title, .section-title")
      .forEach(revealStaggerTitle);
  }, 1500);
}

// ===== Init =====
applyTranslations();

(function () {
  var backToTopBtn = document.getElementById("backToTop");
  var scrollProgressBar = document.getElementById("scrollProgress");
  window.addEventListener(
    "scroll",
    function () {
      var scrollTop = document.documentElement.scrollTop;
      var scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (scrollProgressBar) {
        scrollProgressBar.style.width = (scrollTop / scrollHeight) * 100 + "%";
      }
      if (header) header.classList.toggle("scrolled", scrollTop > 50);
      if (backToTopBtn)
        backToTopBtn.classList.toggle("visible", scrollTop > 500);
      requestParallaxUpdate();
    },
    { passive: true },
  );
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

// ===== Image Fallbacks =====
(function () {
  var placeholderText =
    currentLang === "es" ? "Imagen no disponible" : "Image unavailable";
  var fallbackSvg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
        '<rect width="400" height="300" fill="#f1f5f9"/>' +
        '<g transform="translate(200,130)" fill="#94a3b8" font-family="system-ui,sans-serif" text-anchor="middle">' +
        '<text font-size="40" y="-10">📷</text>' +
        '<text font-size="16" y="30">' +
        placeholderText +
        "</text>" +
        "</g></svg>",
    );
  function applyFallback(img) {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "1";
    img.addEventListener("error", function () {
      if (img.dataset.fallbackError) return;
      img.dataset.fallbackError = "1";
      img.src = fallbackSvg;
    });
  }
  document.querySelectorAll("img").forEach(applyFallback);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeName === "IMG") applyFallback(node);
        if (node.querySelectorAll) {
          node.querySelectorAll("img").forEach(applyFallback);
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
