import type { Category } from './types';
export const catQueimadura: Category = {
  id: 'queimadura', name: 'Queimaduras e Lesões Térmicas', emoji: '🔥', gradient: 'g-red',
  description: 'Queimadura por calor, frio, química e elétrica em cães — primeiros socorros e tratamento',
  conditions: [
    {
      id: 'queimadura-termica', name: 'Queimadura Térmica', emoji: '🔥', gradient: 'g-red',
      description: 'Queimadura por fogo, água quente, superfície quente ou sol — primeiro socorro',
      prevalence: 'Queimaduras por vapor e água quente são as mais comuns em ambiente doméstico; fogo afeta cães em situações de incêndio',
      protocols: [{
        id: 'p1', title: 'Protocolo Queimadura Canina', subtitle: 'Resfriamento, cobertura, analgesia e cuidado da ferida',
        stages: [
          { id: 's1', label: '1° Grau (Superficial)', urgency: 'moderate', description: 'Vermelhidão sem bolha.', signs: ['Pele avermelhada', 'Sensível ao toque', 'Sem bolha', 'Pelo na área pode estar levemente alterado'] },
          { id: 's2', label: '2° Grau (Bolha) / 3° Grau (Necrose)', urgency: 'emergency', description: 'Bolha ou tecido branco/necrótico.', signs: ['Bolha visível (2° grau)', 'Pele branca, marrom ou preta (3° grau)', 'Ausência de dor no 3° grau (destruição de nervos)', 'Maior que 10% do corpo: emergência sistêmica'] },
        ],
        triggers: ['Água quente/fervente', 'Churrasqueira, fogueira', 'Superfície quente (calçada no verão)', 'Vapor de panela'],
        steps: [
          { title: 'Resfriamento e cobertura imediata', icon: '💧', duration: 'Imediato',
            description: 'Água MORNA corrente por 20 min — nunca gelo.',
            checklist: ['Água MORNA corrente por 20 min na área queimada (não gelada)', 'NUNCA: gelo, manteiga, pasta dental, qualquer produto caseiro', 'Retirar coleira, roupa ou adorno da área queimada', 'Curativo não aderente: gaze úmida com soro fisiológico', 'VETERINÁRIO para 2° e 3° grau', 'Analgesia: veterinário prescreve (queimadura é muito dolorosa)', 'Queimadura extensa: risco de hipotermia com resfriamento — limitar a área resfriada'] },
        ],
        checklists: [{ label: 'Cuidado de Queimadura', freq: 'daily', items: ['Curativo trocado?', 'Área limpa com soro fisiológico?', 'Analgesia dada?', 'Sinais de infecção (pus, odor, vermelhidão aumentando)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Água morna corrente 20 min', 'Gaze úmida cobrindo a área', 'Veterinário IMEDIATAMENTE para > 1° grau'], note: 'Gelo causa vasoconstrição e piora a lesão — NUNCA usar em queimadura' },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Debridamento da ferida se necessário', 'Antibioticoterapia se infecção', 'Analgesia: tramadol, gabapentina'] },
          { day: 3, label: 'Dia 3 — Curativo', tasks: ['Trocar curativo diariamente', 'Soro fisiológico para limpar', 'Curativo não aderente (Adaptic ou equivalente)'] },
          { day: 4, label: 'Dia 4 — Infecção', tasks: ['Sinais de infecção? (pus, odor, vermelhidão progressiva)', 'Veterinário se infecção', 'Cicatrização esperada em 1-3 semanas (1° e 2° grau)'] },
          { day: 5, label: 'Dia 5 — Nutrição', tasks: ['Proteína aumentada para cicatrização', 'Vitamina C e zinco: suporte à cicatrização', 'Ração de alta qualidade durante cicatrização?'] },
          { day: 6, label: 'Dia 6 — 3° Grau: Cirurgia', tasks: ['Necrose: debridamento cirúrgico?', 'Enxerto de pele: casos extensos', 'Fisioterapia para prevenir contratura cicatricial?'] },
          { day: 7, label: 'Dia 7 — Cicatrização', tasks: ['Pelo começa a crescer de novo?', 'Cicatriz retrátil?', 'Fisioterapia se contratura?'] },
        ],
        vetAlert: ['Queimadura > 10% do corpo', 'Queimadura na face ou vias aéreas (fumaça)', '3° grau (pele branca/preta, sem dor)', 'Infecção da queimadura'],
        prevention: ['Churrasqueira e fogão: nunca sem supervisão do cão', 'Água quente: cuidado em banheiro e cozinha', 'Calçada no verão: teste com dorso da mão por 5s — se não aguentar, cão não deve caminhar nela'],
        myths: [{ myth: 'Passar manteiga em queimadura de cão alivia a dor', truth: 'Manteiga e qualquer produto gorduroso ou cremoso RETÉM O CALOR, aprofundando a lesão. Água morna corrente por 20 minutos é o único primeiro socorro correto para queimaduras.' }],
        faq: [
          { q: 'Calçada quente pode queimar as patas do cão?', a: 'Sim. Asfalto a 40°C (temperatura do ar 28°C): pode queimar coxins em 1-2 min. Teste: coloque o dorso da mão por 5 segundos. Se não aguentar, o cão não deve caminhar. Passeio em horas mais frescas ou calçadas em sombra.' },
          { q: 'Cão pode se queimar em aquecedor ou lareira?', a: 'Sim. Cão que fica muito próximo a lareira, aquecedor ou fogão a lenha pode se queimar. Crianças de 4 patas precisam das mesmas proteções que crianças pequenas: grade protetora em lareiras e aquecedores.' },
        ],
      }],
    },
  ],
};
