import type { Category } from './types';
export const catRacasGigantes: Category = {
  id: 'racas-gigantes', name: 'Raças Gigantes — Saúde Específica', emoji: '🦁', gradient: 'g-amber',
  description: 'São Bernardo, Rottweiler, Fila, Great Dane — problemas específicos das raças gigantes',
  conditions: [
    {
      id: 'crescimento-gigante', name: 'Crescimento e Nutrição de Raças Gigantes', emoji: '📏', gradient: 'g-amber',
      description: 'Crescimento acelerado inadequado é a causa principal de displasia e doenças articulares em gigantes',
      prevalence: 'Displasia de quadril em Rottweiler: 20-40%; GDV em São Bernardo: risco de vida ao longo da vida',
      protocols: [{
        id: 'p1', title: 'Protocolo Raças Gigantes', subtitle: 'Nutrição controlada, exercício adequado, gastropexia profilática',
        stages: [
          { id: 's1', label: 'Filhote Gigante (até 18-24 meses)', urgency: 'moderate', description: 'Crescimento correto é a prevenção principal.', signs: ['Crescimento muito rápido por excesso alimentar', 'Claudicação em filhote', 'Deficiência de cálcio ou excesso (suplementação errada)'] },
          { id: 's2', label: 'Adulto Gigante — Prevenção', urgency: 'low', description: 'Rastreamento de GDV, displasia e cardiopatia.', signs: ['Check-up semestral necessário', 'GDV: risco presente vida toda', 'Cardiopatia: Rottweiler, Dobermann', 'Osteossarcoma: maior incidência em raças gigantes'] },
        ],
        triggers: ['Crescimento muito rápido (excesso de calorias em filhote)', 'Suplementação de cálcio em filhote (contraindicado)', 'Exercício excessivo em filhote (antes de 18 meses)', 'Refeição única grande (risco de GDV)'],
        steps: [
          { title: 'Manejo nutricional e preventivo', icon: '🍽️', duration: 'Do filhote ao idoso',
            description: 'Ração específica para raça gigante + gastropexia profilática.',
            checklist: ['FILHOTE: ração específica "large/giant breed puppy" (menos calorias, Ca:P controlado)', 'NÃO suplementar cálcio em filhote de gigante (causa deformidades ósseas)', 'Exercício: sem corrida ou saltos até 18-24 meses', 'Refeições: 3x/dia em cumbuca anti-engulida', 'GASTROPEXIA profilática: no momento da castração', 'Check-up com radiografia de quadril: 12 meses e 24 meses', 'Ecocardiograma: Rottweiler a partir de 5 anos'] },
        ],
        checklists: [{ label: 'Saúde de Raça Gigante', freq: 'monthly', items: ['Ração específica para tamanho e fase?', 'Crescimento dentro do esperado (não rápido demais)?', 'Exercício adequado para a idade?', 'GDV: protocolo de refeições fracionadas?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Ração Correta', tasks: ['Ração large/giant breed (Purina Pro Large, Hill\'s Science Large)?', 'NÃO ração genérica de adulto em filhote gigante', 'NÃO suplemento de cálcio'], note: 'Crescimento lento e controlado = ossos mais saudáveis' },
          { day: 2, label: 'Dia 2 — Exercício Adequado', tasks: ['Filhote gigante: até 5 min/mês de idade 2x/dia (regra geral)', 'Sem corrida em piso duro até 18 meses', 'Natação: excelente exercício de baixo impacto'] },
          { day: 3, label: 'Dia 3 — GDV Prevention', tasks: ['3 refeições por dia', 'Cumbuca anti-engulida', 'Sem exercício 1h antes e após refeição'] },
          { day: 4, label: 'Dia 4 — Monitoramento Físico', tasks: ['Claudicação? Avaliação veterinária', 'Crescimento assimétrico?', 'Peso adequado para a raça?'] },
          { day: 5, label: 'Dia 5 — Gastropexia Profilática', tasks: ['Gastopexia na castração: discutida com veterinário?', '0% de recidiva de torção com gastropexia', 'Toda raça de grande porte de tórax fundo: indicada'] },
          { day: 6, label: 'Dia 6 — Rastreamento Cardíaco', tasks: ['Rottweiler, Dobermann: sopro cardíaco avaliado?', 'Ecocardiograma a partir de 5 anos?', 'Grande porte: pressão arterial medida no check-up?'] },
          { day: 7, label: 'Dia 7 — Osteossarcoma', tasks: ['Caroço em osso longo (rádio, úmero, tíbia) de cão gigante: veterinário urgente', 'Osteossarcoma: mais frequente em raças gigantes', 'Diagnóstico precoce melhora prognóstico'] },
        ],
        vetAlert: ['Claudicação em filhote gigante', 'Abdômen distendido + tentativa de vômito (GDV)', 'Inchaço progressivo em osso longo de cão adulto gigante'],
        prevention: ['Ração específica para raça gigante', 'Gastropexia profilática na castração', 'Exercício controlado durante crescimento', 'Rastreamento semestral a partir de 5 anos'],
        myths: [{ myth: 'Suplementar cálcio em filhote de raça grande acelera o crescimento saudável', truth: 'FALSO e perigoso. Excesso de cálcio em filhote de raça gigante causa deformidades ósseas graves (osteocondrose, deformidade angular). Raças gigantes precisam de ração com proporção Ca:P adequada, nunca suplemento de cálcio.' }],
        faq: [
          { q: 'Great Dane tem expectativa de vida de apenas 7-8 anos?', a: 'Infelizmente sim. Raças gigantes envelhecem mais rápido. Great Dane, São Bernardo, Irish Wolfhound: 7-10 anos em média. Raças gigantes são consideradas sêniors a partir de 5-6 anos — check-up semestral a partir dessa idade.' },
          { q: 'Filhote gigante deve comer ração de filhote ou de adulto?', a: 'Ração específica de filhote para RAÇA GRANDE/GIGANTE. Não pode ser ração de filhote normal (excesso de calorias) nem de adulto (perfil nutricional errado). A proteína adequada com calorias controladas é fundamental para crescimento saudável.' },
        ],
      }],
    },
  ],
};
