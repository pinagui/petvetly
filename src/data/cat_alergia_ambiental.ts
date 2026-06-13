import type { Category } from './types';
export const catAlergiaAmbiental: Category = {
  id: 'alergia-ambiental', name: 'Atopia e Alergia Ambiental', emoji: '🌿', gradient: 'g-emerald',
  description: 'Dermatite atópica canina — alergia a pólen, ácaro, mofo e alérgenos do ambiente',
  conditions: [
    {
      id: 'dermatite-atopica', name: 'Dermatite Atópica Canina (DAC)', emoji: '🌿', gradient: 'g-emerald',
      description: 'Alergia ambiental crônica — coceira intensa, patas vermelhas, otite recorrente',
      prevalence: 'Afeta 10-15% dos cães; causa mais comum de prurido canino crônico junto com alergia alimentar',
      protocols: [{
        id: 'p1', title: 'Protocolo DAC', subtitle: 'Controle de alérgenos, Apoquel/Cytopoint, imunoterapia',
        stages: [
          { id: 's1', label: 'Leve', urgency: 'moderate', description: 'Coceira sazonal sem infecção secundária.', signs: ['Coceira sazonal (primavera/verão)', 'Patas vermelhas pós-passeio', 'Orelhas com prurido', 'Sem infecção bacteriana visível'] },
          { id: 's2', label: 'Grave', urgency: 'high', description: 'Infecção secundária e lesão crônica da pele.', signs: ['Liquenificação (pele engrossada)', 'Infecção bacteriana secundária (piodermite)', 'Otite grave bilateral', 'Coceira 24h por dia', 'Lesões na axila, virilha, focinho'] },
        ],
        triggers: ['Ácaro da poeira (Dermatophagoides)', 'Pólen de gramíneas e árvores', 'Mofo ambiental', 'Epitélio humano e de gatos', 'Limpadores de piso, perfumes, materiais sintéticos'],
        steps: [
          { title: 'Controle e imunomodulação', icon: '💊', duration: 'Crônico — manejo vitalício',
            description: 'Oclacitinib (Apoquel) ou lokivetmab (Cytopoint) são padrões atuais.',
            checklist: ['Diagnóstico: clínico + exclusão de pulgas e alergia alimentar', 'Apoquel (oclacitinib): 0,4-0,6mg/kg 2x/dia por 14 dias, depois 1x/dia', 'Cytopoint (lokivetmab): injeção SC a cada 4-8 semanas — anticorpo anti-IL-31', 'Shampoo terapêutico 2x/semana (clorhexidina + ceramida): restaura barreira cutânea', 'Lavagem das patas após passeio (remove alérgenos)', 'Ômega-3 em alta dose: anti-inflamatório cutâneo', 'Imunoterapia específica (ASIT): única opção que modifica a doença (60-70% resposta)'] },
        ],
        checklists: [{ label: 'Controle de Atopia', freq: 'daily', items: ['Medicação dada?', 'Patas lavadas após passeio?', 'Banho terapêutico nesta semana?', 'Coceira melhor que ontem?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Pulgas excluídas (prevenção rigorosa)', 'Dieta de exclusão 8 semanas (excluir alergia alimentar)', 'Apoquel ou Cytopoint iniciados conforme vet'], note: 'Diagnóstico de DAC é de exclusão — primeiro excluir pulgas e alergia alimentar' },
          { day: 2, label: 'Dia 2 — Redução de Exposição', tasks: ['Aspirar cama do cão frequentemente', 'Capa lavável na cama do cão', 'Filtro HEPA no quarto?'] },
          { day: 3, label: 'Dia 3 — Banho', tasks: ['Banho com shampoo terapêutico (clorhexidina)', 'Deixar agir 10-15 min antes de enxaguar', 'Patas limpas após passeio'] },
          { day: 4, label: 'Dia 4 — Suplementação', tasks: ['Ômega-3 (óleo de peixe): 100mg EPA+DHA/kg/dia', 'Vitamina E: antioxidante cutâneo', 'Probiótico: suporte à barreira imune'] },
          { day: 5, label: 'Dia 5 — Resposta ao Apoquel', tasks: ['Coceira: escala de 1-10', 'Comparar com dia 1', 'Efeito colateral: infecção (Apoquel pode reduzir imunidade)'] },
          { day: 6, label: 'Dia 6 — Imunoterapia', tasks: ['Discutir teste intradérmico com dermatologista veterinário', 'ASIT (imunoterapia): única que modifica a doença', 'Custo e comprometimento com vet dermatologista?'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Atopia é crônica — plano de manejo permanente', 'Identificar estação de pior sintoma', 'Controle profilático antes do pico sazonal?'] },
        ],
        vetAlert: ['Piodermite (infecção bacteriana da pele) sobreposta', 'Otite grave com dor', 'Coceira noturna intensa que impede o sono do cão e do tutor'],
        prevention: ['Ambiente limpo com aspiração frequente', 'Lavagem das patas após passeio (remove pólen)', 'Shampoo terapêutico regular', 'Ômega-3 de manutenção'],
        myths: [{ myth: 'Atopia é causada por ração de baixa qualidade', truth: 'Atopia é doença imunológica com componente genético — ração de alta qualidade ajuda a nutrição da pele mas não previne nem cura atopia. O cão geneticamente predisposto desenvolverá atopia independente da qualidade da ração.' }],
        faq: [
          { q: 'Apoquel x Cytopoint — qual é melhor?', a: 'Apoquel (comprimido diário): ação mais rápida (24h), flexibilidade de dose, mais barato. Cytopoint (injeção mensal): mais conveniente, sem efeito sistêmico imunossupressor. Para cães imunodeprimidos ou com infecções recorrentes: Cytopoint é preferido. Para coceira intensa que precisa de alívio imediato: Apoquel.' },
          { q: 'Imunoterapia realmente funciona para atopia canina?', a: 'Sim. ASIT (allergen specific immunotherapy) tem 60-70% de taxa de resposta em cães bem selecionados. Requer teste intradérmico, vacinas específicas por 1-2 anos e acompanhamento com dermatologista veterinário. Única opção que modifica a doença em vez de apenas controlar os sintomas.' },
          { q: 'Meu cão coça mais no verão — é atopia?', a: 'Possivelmente. Atopia por pólen de gramíneas e árvores tem pico na primavera/verão. Atopia por ácaro da poeira pode ocorrer o ano todo, com piora no inverno (ambientes fechados). O padrão sazonal ajuda no diagnóstico diferencial.' },
        ],
      }],
    },
  ],
};
