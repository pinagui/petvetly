import type { Category } from './types';
export const catGravidezParto: Category = {
  id: 'gravidez-parto', name: 'Gestação, Parto e Pós-Parto', emoji: '🤰', gradient: 'g-pink',
  description: 'Como acompanhar a gestação, reconhecer trabalho de parto e cuidados pós-parto',
  conditions: [
    {
      id: 'gestacao-canina', name: 'Gestação Canina', emoji: '🤰', gradient: 'g-pink',
      description: '63 dias de gestação — o que monitorar e quando ir ao veterinário',
      prevalence: 'Gestação canina: 58-65 dias da fertilização. Ultrassom a partir do dia 25 confirma',
      protocols: [{
        id: 'p1', title: 'Protocolo Gestação e Parto', subtitle: 'Monitoramento, nutrição gestacional, parto e emergências',
        stages: [
          { id: 's1', label: 'Gestação Normal', urgency: 'low', description: 'Desenvolvimento normal dos filhotes.', signs: ['Abdômen gradualmente aumentando', 'Mamas desenvolvendo', 'Aumento de apetite', 'Comportamento de nidificação nas últimas 2 semanas'] },
          { id: 's2', label: 'Distocia (Dificuldade de Parto)', urgency: 'emergency', description: 'Parto prolongado sem nascimento — emergência obstétrica.', signs: ['Mais de 2h entre nascimentos', 'Cadela em trabalho de parto > 30 min sem nascimento', 'Filhote preso no canal do parto', 'Cadela exausta e prostrada durante o parto'] },
        ],
        triggers: ['Filhote grande demais para o canal (raças braquicefálicas)', 'Distocia por inércia uterina', 'Gestação gemelar numerosa'],
        steps: [
          { title: 'Monitoramento e preparação', icon: '🤰', duration: '63 dias de gestação',
            description: 'Nutrição gestacional, temperatura retal pré-parto e caixa de parto.',
            checklist: ['Ultrassom dia 25: confirmar gestação e número de filhotes', 'Dieta: ração gestacional a partir da 5ª semana (puppy ou específica gestante)', 'Temperatura retal: medir 2x/dia na última semana — queda de 1°C indica parto em 24h', 'Caixa de parto: 1 semana antes do parto previsto', 'Veterinário de emergência 24h: número no contato', 'Braquicefálicas: cesariana eletiva na maioria', 'Vitamina E e ácido fólico: suporte gestacional'] },
        ],
        checklists: [{ label: 'Monitoramento Gestacional', freq: 'daily', items: ['Cadela come e bebe normalmente?', 'Abdômen crescendo?', 'Mamária desenvolvendo?', 'Corrimento vaginal (pode ser normal leve, patológico: verde, fétido)'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Confirmação', tasks: ['Ultrassom: confirmar gestação', 'Número de filhotes?', 'Raça: cesariana esperada?'], note: 'Cobertura involuntária: misoprostol/aglepristone interrompem a gestação se < 45 dias' },
          { day: 2, label: 'Dia 2 — Nutrição', tasks: ['Trocar para ração gestacional', 'Aumentar caloria 1,5x a partir da 6ª semana', 'Sem suplemento de cálcio (causa eclâmpsia)'], note: 'Suplemento de cálcio na gestação = eclâmpsia pós-parto (hipocalcemia) — contraindicado' },
          { day: 3, label: 'Dia 3 — Semana 7-8', tasks: ['Caixa de parto preparada', 'Temperatura rectal 2x/dia', 'Mamas produzindo colostro?'] },
          { day: 4, label: 'Dia 4 — Temperatura Caiu?', tasks: ['< 37,5°C: parto em 24h', 'Preparar material: tesoura, fio, toalha limpa', 'Veterinário avisado?'] },
          { day: 5, label: 'Dia 5 — Parto', tasks: ['Filhotes nascendo de 20-60 min de intervalo?', 'Placenta de cada filhote expulsa?', 'Filhote respira?'], note: 'Mais de 2h entre filhotes sem nascimento: VETERINÁRIO imediatamente' },
          { day: 6, label: 'Dia 6 — Pós-Parto', tasks: ['Todos os filhotes mamando?', 'Cadela tem leite?', 'Temperatura da mãe normal?', 'Corrimento pós-parto: verde oliva é normal por 48h'], note: 'Eclâmpsia (hipocalcemia): convulsão na amamentação — emergência veterinária' },
          { day: 7, label: 'Dia 7 — 1ª Semana', tasks: ['Filhotes ganham peso diariamente?', 'Cadela come e bebe?', 'Mastite (mama vermelha e dolorosa)?', 'Veterinário para visita pós-parto e pesagem dos neonatos'] },
        ],
        vetAlert: ['Trabalho de parto > 30 min sem nascimento', 'Filhote preso', 'Corrimento verde antes do 1° nascimento', 'Convulsão pós-parto (eclâmpsia)'],
        prevention: ['Raças braquicefálicas: cesariana eletiva planejada', 'Castração para evitar gestação não planejada', 'Suplementação pré-gestacional adequada'],
        myths: [{ myth: 'Cadela precisa ter pelo menos uma ninhada antes de ser castrada', truth: 'Falso mito. Nenhum benefício científico comprovado para a saúde da cadela em ter filhotes antes da castração. Pelo contrário: castração antes do 1° cio reduz risco de tumor mamário em 99%.' }],
        faq: [
          { q: 'Como saber quantos filhotes a cadela terá?', a: 'Ultrassom a partir do dia 25: confirma gestação. Para contagem precisa de filhotes: radiografia a partir do dia 45 (esqueleto calcificado). Ultrassom pode subestimar em ninhadas numerosas.' },
          { q: 'Eclâmpsia o que é e como reconhecer?', a: 'Eclâmpsia (hipocalcemia pós-parto): queda de cálcio na corrente sanguínea durante a amamentação intensa. Sinais: tremores, rigidez, febre alta, convulsão. Emergência: cálcio IV pela veterinário imediatamente.' },
        ],
      }],
    },
  ],
};
