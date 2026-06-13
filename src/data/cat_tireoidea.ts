import type { Category } from './types';
export const catTireoidea: Category = {
  id: 'tireoidea', name: 'Tireoide e Glândulas Endócrinas', emoji: '⚗️', gradient: 'g-purple',
  description: 'Hipotireoidismo, hiperparatireoidismo e outras disfunções glandulares',
  conditions: [
    {
      id: 'hipotireoidismo', name: 'Hipotireoidismo', emoji: '🐌', gradient: 'g-purple',
      description: 'Deficiência de hormônio tireoidiano — a endocrinopatia mais comum em cães',
      prevalence: 'Raças médias e grandes: 1 em 500 cães; mais comum entre 4-10 anos',
      protocols: [{
        id: 'p1', title: 'Protocolo Hipotireoidismo', subtitle: 'Diagnóstico por T4 e TSH, levotiroxina vitalícia',
        stages: [
          { id: 's1', label: 'Hipotireoidismo Suspeito', urgency: 'moderate', description: 'Sinais metabólicos inespecíficos.', signs: ['Ganho de peso sem causa aparente', 'Letargia e intolerância ao exercício', 'Pelagem opaca, seca ou com alopecia simétrica bilateral', 'Intolerância ao frio', 'Ritmo cardíaco lento'] },
          { id: 's2', label: 'Hipotireoidismo Grave', urgency: 'high', description: 'Mixedema e neuropatia.', signs: ['Face "triste" com pele engrossada (mixedema)', 'Fraqueza muscular', 'Neuropatia periférica (paralisia facial)', 'Coma mixedematoso (raro mas fatal)'] },
        ],
        triggers: ['Destruição autoimune da tireoide (tireoidite linfocítica)', 'Atrofia idiopática da tireoide', 'Predisposição racial: Golden, Dobermann, Boxer, Setter'],
        steps: [
          { title: 'Diagnóstico e levotiroxina', icon: '🧪', duration: 'Diagnóstico e tratamento vitalício',
            description: 'T4 total + TSH canino para diagnóstico; levotiroxina para tratamento.',
            checklist: ['T4 total baixo + TSH elevado: diagnóstico confirmado', 'T4 livre: mais específico que T4 total', 'Excluir doença euthyroid sick: doenças sistêmicas baixam T4 sem hipotireoidismo', 'Levotiroxina (L-T4): 0,02mg/kg 2x/dia', 'Colher T4 4h após a dose (pico) e 8h após (nadir)', 'Ajuste de dose para T4 na metade superior do intervalo de referência', 'Melhora esperada em 4-8 semanas de tratamento'] },
        ],
        checklists: [{ label: 'Controle Hipotireoidismo', freq: 'daily', items: ['Levotiroxina dada (2x/dia)?', 'Cão mais ativo esta semana?', 'Peso estável ou perdendo?', 'Pelagem melhorando?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Exames: T4 + TSH canino', 'Hemograma e bioquímica (hiperlipidemia é comum no hipotireoidismo)', 'Levotiroxina prescrita'], note: 'Levotiroxina deve ser dada sempre 30 min antes da refeição para melhor absorção' },
          { day: 2, label: 'Dia 2 — Início da Medicação', tasks: ['Primeira dose de levotiroxina', 'Dose 30 min antes do café da manhã e jantar', 'Registrar peso e letargia basal'] },
          { day: 3, label: 'Dia 3 — Ajuste', tasks: ['Cão tolerando medicação?', 'Sintomas de hipertireoidismo? (agitação, taquicardia) = sobredose', 'Registrar observações'] },
          { day: 4, label: 'Dia 4 — Primeira Semana', tasks: ['Alguma melhora percebida?', 'Mais ativo?', 'Menos frio?'], note: 'Pelagem melhora por último (2-3 meses) — não é indicador precoce de resposta' },
          { day: 5, label: 'Dia 5 — Efeitos Colaterais', tasks: ['Polidipsia ou polifagia (sobredose)?', 'Ritmo cardíaco normal?', 'Perda de peso excessiva?'] },
          { day: 6, label: 'Dia 6 — Monitoramento Colesterol', tasks: ['Hiperlipidemia era presente?', 'Colesterol tende a normalizar com tratamento', 'Dieta de baixo teor de gordura se hiperlipidemia presente'] },
          { day: 7, label: 'Dia 7 — Plano de Controle', tasks: ['Controle T4 em 4-8 semanas', 'Dose ajustada?', 'Família ciente: TRATAMENTO VITALÍCIO'] },
        ],
        vetAlert: ['Sinais de hipertireoidismo com levotiroxina (sobredose)', 'Paralisia facial ou neuropatia', 'Coma mixedematoso (emergência rara)'],
        prevention: ['Raças predispostas: T4 basal em check-up anual após 5 anos', 'Diagnóstico precoce evita dano cardiovascular'],
        myths: [{ myth: 'Hipotireoidismo é a causa de obesidade na maioria dos cães gordos', truth: 'Apenas uma fração dos cães obesos tem hipotireoidismo. A maioria da obesidade canina é por superalimentação e sedentarismo. T4 baixo por doença sistêmica ("euthyroid sick") é confundido com hipotireoidismo — diagnóstico diferencial é fundamental.' }],
        faq: [
          { q: 'Posso usar levotiroxina humana (Puran T4) para cão?', a: 'Sim. A levotiroxina veterinária (Soloxine) e humana (Puran T4) são biologicamente idênticas. Dose para cão é muito maior que para humano (0,02mg/kg vs 0,001mg/kg em humanos). Calcular a dose correta com o veterinário.' },
          { q: 'Hipotireoidismo em cão tem cura?', a: 'Geralmente não. Levotiroxina é necessária por vida toda. Alguns casos de tireoidite autoimune precoce podem ter remissão, mas é exceção. Tratamento vitalício com boa qualidade de vida é o esperado.' },
        ],
      }],
    },
  ],
};
