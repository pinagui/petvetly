import type { Category } from './types';
export const catMicrobioma: Category = {
  id: 'microbioma', name: 'Microbioma e Saúde Intestinal', emoji: '🦠', gradient: 'g-teal',
  description: 'O intestino como segundo cérebro — probióticos, prebióticos e disbiose canina',
  conditions: [
    {
      id: 'disbiose-canina', name: 'Disbiose Intestinal', emoji: '🦠', gradient: 'g-teal',
      description: 'Desequilíbrio da microbiota intestinal — consequências sistêmicas além da diarreia',
      prevalence: 'Antibiótico de amplo espectro destrói microbiota em 24-72h; recomposição demora semanas a meses',
      protocols: [{
        id: 'p1', title: 'Protocolo Microbioma Canino', subtitle: 'Probiótico específico, prebiótico e dieta fermentescível',
        stages: [
          { id: 's1', label: 'Disbiose Aguda (Pós-Antibiótico)', urgency: 'moderate', description: 'Diarreia após tratamento com antibiótico.', signs: ['Diarreia 1-5 dias após início do antibiótico', 'Fezes moles e gasosas', 'Cão com apetite preservado', 'Sem febre'] },
          { id: 's2', label: 'Disbiose Crônica', urgency: 'moderate', description: 'Microbioma alterado cronicamente — impacto sistêmico.', signs: ['Diarreia ou fezes inconsistentes cronicamente', 'Gases e borborigmos', 'Pelagem opaca', 'Comportamento levemente alterado', 'Alergia de difícil controle'] },
        ],
        triggers: ['Antibiótico de amplo espectro', 'Dieta de baixa qualidade (sem fibra fermentescível)', 'Estresse', 'Infecção gastrointestinal prévia', 'Uso crônico de omeprazol'],
        steps: [
          { title: 'Recomposição da microbiota', icon: '🦠', duration: '2-8 semanas',
            description: 'Probiótico específico veterinário + prebiótico + dieta rica em fibra.',
            checklist: ['Probiótico específico veterinário: Purina FortiFlora, Waltham Intestinal, Probioma', 'Dose: durante e por 2 semanas após o antibiótico', 'Prebiótico: FOS, inulina, psyllium (1 colher de chá na ração)', 'Dieta: ração com fibras fermentescíveis (frutooligossacarídeo)', 'Evitar: ração com muitos conservantes e corantes artificiais', 'Kefir de leite: 1-2 colheres ao dia (probiótico natural)', 'Dieta bland durante disbiose aguda: arroz + frango'] },
        ],
        checklists: [{ label: 'Saúde Intestinal Diária', freq: 'daily', items: ['Probiótico dado?', 'Fezes de consistência normal?', 'Gases menos?', 'Cão com apetite normal?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início', tasks: ['Probiótico iniciado', 'Fibra prebiótica adicionada', 'Dieta bland se diarreia aguda'], note: 'Dar probiótico 2h APÓS o antibiótico para não ser destruído pela medicação' },
          { day: 2, label: 'Dia 2 — Adaptação', tasks: ['Kefir: começar com 1 colher de chá', 'Fezes: igual, melhores ou piores?', 'Gases melhoraram?'] },
          { day: 3, label: 'Dia 3 — Fibra', tasks: ['Psyllium 1/2 colher de chá na ração?', 'Cenoura cozida: prebiótico natural', 'Batata-doce: fibra e palatabilidade'] },
          { day: 4, label: 'Dia 4 — Diversidade Alimentar', tasks: ['Rotação de proteínas?', 'Ingredientes variados dentro da mesma marca?', 'Alimento fermentado?'] },
          { day: 5, label: 'Dia 5 — Resultado', tasks: ['Fezes normais?', 'Antibiótico ainda em uso? Continuar probiótico', 'Continuar 2 semanas após fim do antibiótico?'] },
          { day: 6, label: 'Dia 6 — Manutenção', tasks: ['Probiótico de manutenção: 2-3x/semana após fase aguda', 'Dieta de qualidade permanente', 'Evitar antibiótico sem indicação clara?'] },
          { day: 7, label: 'Dia 7 — Microbioma como Saúde Sistêmica', tasks: ['Pelagem melhorou?', 'Energia melhorou?', 'Alergia de pele relacionada à gut health?'] },
        ],
        vetAlert: ['Diarreia com sangue durante uso de antibiótico', 'Diarreia hemorrágica pós-antibiótico (colite pseudomembranosa, rara em cão)'],
        prevention: ['Probiótico preventivo durante todo tratamento com antibiótico', 'Dieta de qualidade com fibra fermentescível', 'Não usar antibiótico sem indicação veterinária'],
        myths: [{ myth: 'Iogurte humano é suficiente como probiótico para cão', truth: 'Iogurte humano tem cepas de Lactobacillus para humanos, não otimizadas para o microbioma canino. Probiótico veterinário específico (FortiFlora: Enterococcus faecium SF68) tem evidência em cão. Iogurte: pode ajudar mas não substitui probiótico veterinário.' }],
        faq: [
          { q: 'Por quanto tempo dar probiótico após antibiótico?', a: 'Mínimo: durante o curso do antibiótico + 2 semanas após o término. Antibióticos de amplo espectro: 4 semanas de probiótico pós-tratamento. O microbioma leva de semanas a meses para se recompor completamente.' },
          { q: 'Existe probiótico de manutenção para cão saudável?', a: 'Sim. Para cães com alergia, DII, diarreia recorrente ou pós-antibiótico: probiótico 2-3x/semana de manutenção tem evidência de benefício. Para cão jovem saudável sem problemas: pode ser utilidade preventiva mas não é obrigatório.' },
        ],
      }],
    },
  ],
};
