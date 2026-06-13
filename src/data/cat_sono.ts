import type { Category } from './types';
export const catSono: Category = {
  id: 'sono', name: 'Sono e Distúrbios do Sono', emoji: '😴', gradient: 'g-indigo',
  description: 'Cão que late, corre ou convulsiona dormindo — narcolepsia, apneia e comportamentos noturnos',
  conditions: [
    {
      id: 'movimento-sono', name: 'Movimento durante o Sono (REM Normal)', emoji: '💤', gradient: 'g-indigo',
      description: 'Cão que corre, late e abana o rabo dormindo — comportamento normal do sono REM',
      prevalence: 'Virtualmente todos os cães apresentam movimentos durante o sono REM — completamente normal',
      protocols: [{
        id: 'p1', title: 'Diferenciação: Sono Normal x Convulsão', subtitle: 'Como distinguir sono REM de convulsão real',
        stages: [
          { id: 's1', label: 'Sono REM Normal', urgency: 'low', description: 'Movimentos e sons durante o sono profundo.', signs: ['Patas em movimento de corrida', 'Latido ou gemido baixo', 'Movimentos oculares visíveis', 'Cão ACORDA FACILMENTE quando chamado', 'Volta ao normal imediatamente após acordar'] },
          { id: 's2', label: 'Convulsão x Sono', urgency: 'high', description: 'Convulsão pode ocorrer durante o sono.', signs: ['Rigidez muscular (não apenas movimento)', 'Não acorda ao ser chamado pelo nome', 'Confusão prolongada após o episódio', 'Salivação excessiva', 'Defecação ou micção involuntária'] },
        ],
        triggers: ['Sono REM: normal em todo cão', 'Convulsão noturna: epilepsia, hipoglicemia, toxinas'],
        steps: [
          { title: 'Observação e diferenciação', icon: '👁️', duration: 'Observação durante episódio',
            description: 'Chamar o nome: o cão acorda = sono. Não acorda = possível convulsão.',
            checklist: ['NUNCA sacudir cão acordando de sono REM violentamente (desorientação)', 'Chamar o nome suavemente: acorda rápido = sono REM', 'NÃO acorda e tem rigidez = gravar video e ir ao vet', 'Filmagem: essencial para diagnóstico neurológico', 'Convulsão noturna: ver protocolo de epilepsia'] },
        ],
        checklists: [{ label: 'Monitoramento de Episódios', freq: 'daily', items: ['Episódio ocorreu?', 'Cão acordou quando chamado?', 'Duração do episódio?', 'Comportamento após acordar: normal ou confuso?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diferenciar', tasks: ['Observar próximo episódio', 'Chamar nome suavemente no meio do episódio', 'Acorda = sono REM (normal)'], note: 'Regra simples: acorda ao nome = normal; não acorda = investigar' },
          { day: 2, label: 'Dia 2 — Filmagem', tasks: ['Câmera de monitoramento no quarto?', 'Cel próximo para gravar o próximo episódio?', 'Video: essencial para o veterinário neurologista'] },
          { day: 3, label: 'Dia 3 — Sono REM Normal', tasks: ['Deixar o cão dormir em local confortável e seguro', 'Sem barreira (pode se machucar acordando assustado)', 'Cama de borda baixa para cão idoso com episódios intensos'] },
          { day: 4, label: 'Dia 4 — Apneia do Sono', tasks: ['Roncado intenso + pausas respiratórias?', 'Braquicefálico: apneia do sono muito comum', 'Cirurgia das vias aéreas melhora apneia em braquicefálicos'] },
          { day: 5, label: 'Dia 5 — Narcolepsia (Rara)', tasks: ['Cão colapsa de repente durante atividade?', 'Narcolepsia: colapso catapléxico por emoção forte', 'Eletroencefalograma e avaliação neurológica'] },
          { day: 6, label: 'Dia 6 — Sono Saudável', tasks: ['Cão de pequeno porte: 12-14h de sono/dia', 'Filhote: 16-18h de sono/dia', 'Cão idoso: mais sono (normal)'] },
          { day: 7, label: 'Dia 7 — Qualidade do Sono', tasks: ['Local seguro, confortável e sem interrupção?', 'Temperatura adequada?', 'Sem barulhos excessivos no período de sono principal?'] },
        ],
        vetAlert: ['Não acorda ao nome durante episódio', 'Confusão prolongada após acordar', 'Colapso súbito durante atividade'],
        prevention: ['Local de sono seguro e sem barulhos excessivos', 'Cobertor para cão idoso em ambiente frio'],
        myths: [{ myth: 'Cão que corre dormindo está tendo um pesadelo e precisa ser acordado', truth: 'Sono REM com movimentos é normal e saudável — o cão está processando memórias do dia. Acordar abruptamente pode causar desorientação e até mordida reflexiva. Se preciso acordar: chamar o nome suavemente.' }],
        faq: [
          { q: 'Por que meu cão filhote dorme tanto?', a: 'Normal. Filhotes precisam de 16-18 horas de sono por dia para crescimento e desenvolvimento neurológico. Adultos: 12-14h. Cão saudável que dorme muito não é preguiçoso — está fazendo o que deveria.' },
        ],
      }],
    },
  ],
};
