export const translations = {
  en: {
    nav: {
      links: [
        { label: 'Product', href: '#features' },
        { label: 'Integrations', href: '#comparison' },
        { label: 'Pricing', href: '#pricing' },
      ],
      login: 'Log in',
      cta: 'Get started',
    },
    hero: {
      badge: 'Automation for ops teams',
      titleLine1: 'Connect Slack, Notion,',
      titleLine2: 'Linear and Gmail in a',
      titleLine3: 'single flow.',
      subtitle:
        'Flowly detects repetitive work across your tools and runs it for you. No code, no improvised Zapier.',
      ctaPrimary: 'Start for free',
      ctaSecondary: 'Watch demo →',
      stats: [
        { value: 142, decimals: 0, suffix: '', label: 'tasks / week' },
        { value: 11.4, decimals: 1, suffix: 'h', label: 'hours saved / person' },
        { value: 4, decimals: 0, suffix: '', label: 'apps connected' },
      ],
      mockup: {
        breadcrumb: 'flowly / flow-builder',
        sidebar: ['Flows', 'Runs', 'Templates', 'Integrations'],
        steps: [
          { icon: 'S', iconBg: '#611F69', title: 'New message in #sales', meta: 'trigger · Slack', accent: false },
          { icon: 'L', iconBg: '#5E6AD2', title: 'Create "Demo" task', meta: 'action · Linear', accent: false },
          { icon: 'N', iconBg: '#111111', title: 'Log to "Deals" database', meta: 'action · Notion', accent: true },
        ],
      },
    },
    logos: {
      caption: 'Ops teams already orchestrating with Flowly',
    },
    bento: {
      eyebrow: 'Why Flowly',
      title: 'An automation layer on top of the apps you already use.',
      bigCard: {
        title: 'Your 4 apps, orchestrated',
        description: 'Flowly routes events between tools in real time. One trigger, multiple actions.',
      },
      smallCards: [
        { title: 'Conditions & branches', description: 'Visual if/then logic, no code required.' },
        { title: 'Real-time runs', description: 'Every execution, audited and retryable.' },
        { title: 'Ready-made templates', description: '40+ flows proven by ops teams.' },
      ],
      wideCard: {
        title: 'SOC 2 · data in your region',
        description: 'Granular permissions per integration and exportable logs.',
      },
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Founders who stopped operating by hand.',
      items: [
        {
          quote:
            '"We migrated 14 Zapier automations in one afternoon. The flow-builder is what Zapier should have been."',
          initials: 'MR',
          gradient: 'linear-gradient(135deg, #7C6BF5, #4C7DF0)',
          name: 'María Rodríguez',
          role: 'COO · Cadence',
        },
        {
          quote:
            '"Every Slack lead lands in Linear and Notion without anyone touching it. We got back ~10h per person a week."',
          initials: 'DK',
          gradient: 'linear-gradient(135deg, #3DD6C4, #4C7DF0)',
          name: 'David Klein',
          role: 'Founder · Helix',
        },
        {
          quote:
            '"Run logs gave us something we never had: auditing exactly what happened and retrying with one click."',
          initials: 'SA',
          gradient: 'linear-gradient(135deg, #4C7DF0, #7C6BF5)',
          name: 'Sara Amin',
          role: 'Head of Ops · Northwind',
        },
      ],
    },
    comparison: {
      eyebrow: 'Comparison',
      title: 'Flowly vs. Zapier',
      capability: 'Capability',
      flowly: 'Flowly',
      zapier: 'Zapier',
      rows: [
        { label: 'Visual branches & conditions', flowly: 'Included', zapier: 'Limited' },
        { label: 'Run logs & retries', flowly: 'Yes', zapier: 'Partial' },
        { label: 'Price per user (team)', flowly: '$18', zapier: '$49+' },
        { label: 'Native ops templates', flowly: '40+', zapier: 'Generic' },
        { label: 'Data in your region', flowly: 'Yes', zapier: 'No' },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Start free. Scale when you need to.',
      perUser: 'per user / month',
      plans: [
        {
          name: 'Starter',
          price: '$0',
          note: 'per user / month',
          cta: 'Get started',
          highlighted: false,
          features: ['2 integrations', '100 runs / month', 'Basic templates'],
        },
        {
          name: 'Team',
          price: '$18',
          note: 'per user / month',
          cta: 'Try 14 days',
          highlighted: true,
          badge: 'Most popular',
          features: ['Unlimited integrations', '10,000 runs / month', 'Branches & conditions', 'Roles & permissions'],
        },
        {
          name: 'Scale',
          price: 'Custom',
          note: 'annual billing',
          cta: 'Talk to sales',
          highlighted: false,
          features: ['Unlimited runs', 'SSO / SAML', 'SLA & dedicated support'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Do I need to write code?',
          answer:
            'No. The flow-builder is visual: pick a trigger, add conditions and actions by dragging blocks. If you know how to use Notion, you know how to use Flowly.',
        },
        {
          question: 'How do I migrate from Zapier?',
          answer:
            'We automatically import your most common Zaps and rebuild the rest in minutes using equivalent templates. Most teams migrate in a single afternoon.',
        },
        {
          question: 'What run limits does each plan have?',
          answer:
            "Starter includes 100 runs/month, Team 10,000, and Scale is unlimited. A \"run\" is one full execution of a flow, no matter how many actions it has.",
        },
        {
          question: 'Is it safe to connect my tools?',
          answer:
            "Yes. We're SOC 2 Type II certified, store data in your region, use OAuth with granular per-integration permissions, and you can revoke access or export logs anytime.",
        },
      ],
    },
    cta: {
      title: 'Stop copy-pasting between apps.',
      subtitle: 'Set up your first flow in under 5 minutes.',
      button: 'Start for free',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your workflow",
      subtitle: "Tell us about your team and we'll get back to you within one business day.",
      nameLabel: 'Name',
      emailLabel: 'Work email',
      messageLabel: 'Message',
      submit: 'Send message',
    },
    footer: {
      tagline: 'The automation layer for ops teams.',
      columns: [
        { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
        { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
        { title: 'Resources', links: ['Documentation', 'Help center', 'API status', 'Community'] },
        { title: 'Legal', links: ['Privacy policy', 'Terms of service', 'Security'] },
      ],
      copyright: 'Flowly, Inc. All rights reserved.',
    },
  },
  es: {
    nav: {
      links: [
        { label: 'Producto', href: '#features' },
        { label: 'Integraciones', href: '#comparison' },
        { label: 'Precios', href: '#pricing' },
      ],
      login: 'Entrar',
      cta: 'Empezar',
    },
    hero: {
      badge: 'Automatización para equipos de ops',
      titleLine1: 'Conecta Slack, Notion,',
      titleLine2: 'Linear y Gmail en un',
      titleLine3: 'solo flujo.',
      subtitle:
        'Flowly detecta el trabajo repetitivo entre tus herramientas y lo ejecuta por ti. Sin código, sin Zapier improvisado.',
      ctaPrimary: 'Empezar gratis',
      ctaSecondary: 'Ver demo →',
      stats: [
        { value: 142, decimals: 0, suffix: '', label: 'tareas / semana' },
        { value: 11.4, decimals: 1, suffix: 'h', label: 'ahorradas / persona' },
        { value: 4, decimals: 0, suffix: '', label: 'apps conectadas' },
      ],
      mockup: {
        breadcrumb: 'flowly / flow-builder',
        sidebar: ['Flows', 'Runs', 'Plantillas', 'Integraciones'],
        steps: [
          { icon: 'S', iconBg: '#611F69', title: 'Nuevo mensaje en #ventas', meta: 'trigger · Slack', accent: false },
          { icon: 'L', iconBg: '#5E6AD2', title: 'Crear tarea "Demo"', meta: 'acción · Linear', accent: false },
          { icon: 'N', iconBg: '#111111', title: 'Registrar en base "Deals"', meta: 'acción · Notion', accent: true },
        ],
      },
    },
    logos: {
      caption: 'Equipos de ops que ya orquestan con Flowly',
    },
    bento: {
      eyebrow: 'Por qué Flowly',
      title: 'Una capa de automatización sobre las apps que ya usas.',
      bigCard: {
        title: 'Tus 4 apps, orquestadas',
        description: 'Flowly enruta eventos entre herramientas en tiempo real. Un trigger, múltiples acciones.',
      },
      smallCards: [
        { title: 'Condiciones y ramas', description: 'Lógica if/then visual, sin escribir una línea.' },
        { title: 'Runs en tiempo real', description: 'Cada ejecución, auditada y reintentable.' },
        { title: 'Plantillas listas', description: '40+ flujos probados por equipos de ops.' },
      ],
      wideCard: {
        title: 'SOC 2 · datos en tu región',
        description: 'Permisos granulares por integración y logs exportables.',
      },
    },
    testimonials: {
      eyebrow: 'Testimonios',
      title: 'Founders que dejaron de operar a mano.',
      items: [
        {
          quote:
            '"Migramos 14 automatizaciones de Zapier en una tarde. El flow-builder es lo que Zapier debería haber sido."',
          initials: 'MR',
          gradient: 'linear-gradient(135deg, #7C6BF5, #4C7DF0)',
          name: 'María Rodríguez',
          role: 'COO · Cadence',
        },
        {
          quote:
            '"Cada lead de Slack cae en Linear y Notion sin que nadie toque nada. Recuperamos ~10h por persona a la semana."',
          initials: 'DK',
          gradient: 'linear-gradient(135deg, #3DD6C4, #4C7DF0)',
          name: 'David Klein',
          role: 'Founder · Helix',
        },
        {
          quote:
            '"Los logs de runs nos dieron algo que nunca tuvimos: auditar exactamente qué pasó y reintentar con un clic."',
          initials: 'SA',
          gradient: 'linear-gradient(135deg, #4C7DF0, #7C6BF5)',
          name: 'Sara Amin',
          role: 'Head of Ops · Northwind',
        },
      ],
    },
    comparison: {
      eyebrow: 'Comparativa',
      title: 'Flowly vs. Zapier',
      capability: 'Capacidad',
      flowly: 'Flowly',
      zapier: 'Zapier',
      rows: [
        { label: 'Ramas y condiciones visuales', flowly: 'Incluido', zapier: 'Limitado' },
        { label: 'Logs de runs y reintentos', flowly: 'Sí', zapier: 'Parcial' },
        { label: 'Precio por usuario (equipo)', flowly: '$18', zapier: '$49+' },
        { label: 'Plantillas de ops nativas', flowly: '40+', zapier: 'Genéricas' },
        { label: 'Datos en tu región', flowly: 'Sí', zapier: 'No' },
      ],
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Empieza gratis. Escala cuando lo necesites.',
      perUser: 'por usuario / mes',
      plans: [
        {
          name: 'Starter',
          price: '$0',
          note: 'por usuario / mes',
          cta: 'Empezar',
          highlighted: false,
          features: ['2 integraciones', '100 runs / mes', 'Plantillas básicas'],
        },
        {
          name: 'Team',
          price: '$18',
          note: 'por usuario / mes',
          cta: 'Probar 14 días',
          highlighted: true,
          badge: 'Más elegido',
          features: ['Integraciones ilimitadas', '10.000 runs / mes', 'Ramas y condiciones', 'Roles y permisos'],
        },
        {
          name: 'Scale',
          price: 'Custom',
          note: 'facturación anual',
          cta: 'Hablar con ventas',
          highlighted: false,
          features: ['Runs ilimitados', 'SSO / SAML', 'SLA y soporte dedicado'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Necesito escribir código?',
          answer:
            'No. El flow-builder es visual: eliges un trigger, añades condiciones y acciones arrastrando bloques. Si sabes usar Notion, sabes usar Flowly.',
        },
        {
          question: '¿Cómo migro desde Zapier?',
          answer:
            'Importamos tus Zaps más comunes automáticamente y el resto se reconstruye en minutos con plantillas equivalentes. La mayoría de equipos migra en una sola tarde.',
        },
        {
          question: '¿Qué límites de runs tiene cada plan?',
          answer:
            'Starter incluye 100 runs/mes, Team 10.000, y Scale es ilimitado. Un "run" es una ejecución completa de un flujo, sin importar cuántas acciones tenga.',
        },
        {
          question: '¿Es seguro conectar mis herramientas?',
          answer:
            'Sí. Somos SOC 2 Type II, guardamos datos en tu región, usamos OAuth con permisos granulares por integración y puedes revocar accesos o exportar logs cuando quieras.',
        },
      ],
    },
    cta: {
      title: 'Deja de copiar y pegar entre apps.',
      subtitle: 'Monta tu primer flujo en menos de 5 minutos.',
      button: 'Empezar gratis',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos sobre tu flujo de trabajo',
      subtitle: 'Cuéntanos sobre tu equipo y te responderemos en menos de un día hábil.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo de trabajo',
      messageLabel: 'Mensaje',
      submit: 'Enviar mensaje',
    },
    footer: {
      tagline: 'La capa de automatización para equipos de ops.',
      columns: [
        { title: 'Producto', links: ['Funciones', 'Precios', 'Integraciones', 'Novedades'] },
        { title: 'Empresa', links: ['Nosotros', 'Empleo', 'Blog', 'Contacto'] },
        { title: 'Recursos', links: ['Documentación', 'Centro de ayuda', 'Estado del API', 'Comunidad'] },
        { title: 'Legal', links: ['Privacidad', 'Términos de servicio', 'Seguridad'] },
      ],
      copyright: 'Flowly, Inc. Todos los derechos reservados.',
    },
  },
} as const

export type TranslationSet = typeof translations.en
