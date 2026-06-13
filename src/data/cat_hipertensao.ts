import type { Category } from './types';
export const catHipertensao: Category = {
  id: 'hipertensao', name: 'Hipertensão Arterial Canina', emoji: '💓', gradient: 'g-red',
  description: 'Pressão alta em cão — consequências oculares, renais e cardíacas, e tratamento',
  conditions: [
    {
      id: 'hta-canina', name: 'Hipertensão Arterial Sistêmica', emoji: '💓', gradient: 'g-red',
      description: 'Pressão > 160 mmHg — frequentemente secundária a doença renal, Cushing ou hipotireoidismo',
      prevalence: 'Comum em cães com doença renal crônica (50-60%) e Cushing (20-80%)',
      protocols: [{
        id: 'p1', title: 'Protocolo Hipertensão Canina', subtitle: 'Medição, causa subjacente e anti-hipertensivo',
        stages: [
          { id: 's1', label: 'Hipertensão Leve-Moderada (160-180 mmHg)', urgency: 'moderate', description: 'Dano orgânico iniciando.', signs: ['Geralmente assintomática', 'Descoberta em check-up', 'Associada a doença renal ou Cushing'] },
          { id: 's2', label: 'Hipertensão Grave (> 180 mmHg)', urgency: 'high', description: 'Dano ocular, renal e cardíaco.', signs: ['Cegueira súbita (descolamento de retina)', 'Convulsão por encefalopatia hipertensiva', 'Insuficiência renal acelerada', 'Epistaxe (sangramento nasal)'] },
        ],
        triggers: ['Doença renal crônica', 'Hiperadrenocorticismo (Cushing)', 'Hipotiroidismo', 'Aldosteronismo', 'Feocromocitoma (raro)'],
        steps: [
          { title: 'Diagnóstico e tratamento', icon: '💊', duration: 'Crônico — tratamento indefinido',
            description: 'Medir pressão com Doppler ou oscilometria. Tratar a causa + anti-hipertensivo.',
            checklist: ['Pressão arterial: medição com Doppler veterinário (padrão-ouro)', 'Doença renal: tratamento renal + benazepril ou enalapril', 'Cushing: tratamento com trilostano + amlodipina', 'Amlodipina 0,1-0,25mg/kg/dia: anti-hipertensivo de escolha em cão', 'Benazepril/enalapril: ECA inibidores (proteção renal adicional)', 'Controle pressórico em 2-4 semanas', 'Exame ocular: avaliação de retina'] },
        ],
        checklists: [{ label: 'Controle de Hipertensão', freq: 'monthly', items: ['Medicação anti-hipertensiva dada?', 'Pressão medida neste mês?', 'Visão normal?', 'Causa subjacente sendo tratada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Pressão arterial com Doppler veterinário', 'Causa subjacente: doença renal, Cushing?', 'Exame ocular: retina descolada?'] },
          { day: 2, label: 'Dia 2 — Tratamento', tasks: ['Amlodipina iniciada?', 'Dose baixa inicial com titulação', 'Causa subjacente tratada simultaneamente'] },
          { day: 3, label: 'Dia 3 — Cegueira Súbita', tasks: ['Cegueira por HTA: emergência veterinária', 'Anti-hipertensivo imediato pode recuperar visão se precoce', 'Oftalmologista veterinário?'] },
          { day: 4, label: 'Dia 4 — Monitoramento', tasks: ['Pressão em 2-4 semanas: alvo < 150 mmHg?', 'Hipotensão (pressão muito baixa) pelo medicamento?', 'Pressão < 120: reduzir dose'] },
          { day: 5, label: 'Dia 5 — Rastreamento', tasks: ['Check-up de cão com doença renal: pressão SEMPRE', 'Cão com Cushing: pressão parte do protocolo', 'Sênior: pressão semestral no check-up'] },
          { day: 6, label: 'Dia 6 — Dieta', tasks: ['Sal baixo: redução da pressão', 'Ração renal (se causa renal): baixo sódio', 'Obesidade: perder peso reduz pressão'] },
          { day: 7, label: 'Dia 7 — Longo Prazo', tasks: ['Anti-hipertensivo: tratamento vitalício', 'Controle mensal de pressão durante titulação?', 'Quadrimestral quando estabilizado?'] },
        ],
        vetAlert: ['Cegueira súbita em cão hipertenso: emergência ocular', 'Convulsão por encefalopatia hipertensiva', 'Epistaxe recorrente'],
        prevention: ['Check-up anual inclui pressão arterial após 5 anos', 'Raças de risco (doença renal crônica): pressão em toda consulta'],
        myths: [{ myth: 'Cão não tem pressão alta como humano', truth: 'Hipertensão canina é bem documentada e comum. A maioria é secundária a doenças tratáveis (doença renal, Cushing). Tratamento adequado previne cegueira, insuficiência renal acelerada e AVC.' }],
        faq: [
          { q: 'Como é medida a pressão do cão?', a: 'Doppler vascular com manguito na pata ou cauda. O cão precisa estar calmo — agitação causa "hipertensão de jaleco branco" falsa. Mínimo 5 medições, descartar a primeira, tirar a média. Idealmente: 3 sessões separadas para diagnóstico definitivo.' },
          { q: 'Cão hipertenso pode exercitar?', a: 'Depende do grau. HTA controlada: exercício moderado é seguro e benéfico. HTA grave: restrição de esforço até controle pressórico. Após estabilização: caminhadas progressivas são recomendadas.' },
        ],
      }],
    },
  ],
};
