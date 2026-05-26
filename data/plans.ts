export const PLANS = [
  {
    id: 'base',
    name: 'Base',
    price: 35,
    kicker: 'Para começar',
    featured: false,
    hours: [
      'Seg–Sex · 07:00 – 22:00',
      'Sáb · 09:00 – 17:00',
      'Domingos · fechado',
    ],
    perks: [
      { t: 'Treino Livre — piso principal', y: true },
      { t: 'Acesso à app Danalock', y: true },
      { t: 'Acesso 24h / 7 dias', y: false },
    ],
  },
  {
    id: 'inter',
    name: 'Intermédio',
    price: 55,
    kicker: '',
    featured: false,
    hours: [
      'Seg–Sex · 06:00 – 24:00',
      'Sáb–Dom · 07:00 – 22:00',
      'Feriados incluídos',
    ],
    perks: [
      { t: 'Treino Livre — piso principal', y: true },
      { t: 'Acesso à app Danalock', y: true },
      { t: 'Acesso 24h / 7 dias', y: false },
    ],
  },
  {
    id: 'avan',
    name: 'Avançado',
    price: 60,
    kicker: 'Sem restrições',
    featured: false,
    hours: [
      'Acesso 24h · 7 dias / 7',
      'Todos os feriados',
      'Sem janela horária',
    ],
    perks: [
      { t: 'Treino Livre — piso principal', y: true },
      { t: 'Acesso à app Danalock', y: true },
      { t: 'Acesso 24h / 7 dias', y: true },
    ],
  },
];
