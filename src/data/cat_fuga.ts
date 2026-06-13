import type { Category } from './types';
export const catFuga: Category = {
  id: 'fuga', name: 'Fuga e Escapismo', emoji: '🏃', gradient: 'g-indigo',
  description: 'Cão que escapa do quintal, pula cercas, abre portões — como prevenir e lidar',
  conditions: [
    {
      id: 'escapismo', name: 'Escapismo e Fuga Recorrente', emoji: '🏃', gradient: 'g-indigo',
      description: 'Cão que escapa repetidamente do quintal — motivações e soluções',
      prevalence: 'Uma das principais causas de abandono e acidentes; mais comum em cães jovens não castrados',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Fuga', subtitle: 'Identificar motivação, reforçar cercas, castração e treinamento',
        stages: [
          { id: 's1', label: 'Fuga Ocasional', urgency: 'moderate', description: 'Escapa quando oportunidade aparece.', signs: ['Escapa pela porta aberta', 'Pula quando estimulado', 'Escava embaixo da cerca'] },
          { id: 's2', label: 'Fuga Compulsiva', urgency: 'high', description: 'Escapa repetidamente apesar das barreiras.', signs: ['Supera cercas de 1,5m', 'Passa horas tentando escapar', 'Associado a cio, caça ou ansiedade de separação'] },
        ],
        triggers: ['Macho inteiro em busca de fêmea (cio)', 'Predador perseguindo algo do lado de fora', 'Ansiedade de separação', 'Excitação ou ansiedade ambiental', 'Cerca insuficiente'],
        steps: [
          { title: 'Reforço ambiental e castração', icon: '🔒', duration: 'Imediato',
            description: 'Castração (machos/fêmeas) + cerca adequada são as soluções mais eficazes.',
            checklist: ['CASTRAÇÃO: elimina fuga por cio em 70-80% dos machos', 'Cerca: mínimo 1,8m + anti-pulo (extensão inclinada para dentro)', 'Inspeção: escavar embaixo? Reforçar com pedras ou tela enterrada', 'Portão: trava dupla, abertura para dentro', 'Monitoramento: câmera para identificar o método de fuga', 'Enriquecimento: cão bem estimulado escapa menos', 'Nunca punir o cão que retorna — aprende a não voltar'] },
        ],
        checklists: [{ label: 'Prevenção de Fuga', freq: 'daily', items: ['Portão bem fechado e travado?', 'Cão viu fêmea no cio recentemente?', 'Cerca sem buracos ou pontos de escalada?', 'Microchip e plaquinha atualizados?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico da Fuga', tasks: ['Câmera para identificar o método de fuga', 'Por onde escapa: pula, escava, empurra?', 'Quando foge: em sua presença ou ausência?'] },
          { day: 2, label: 'Dia 2 — Reforço da Cerca', tasks: ['Anti-pulo: extensão em L de 50cm inclinada para dentro', 'Embaixo: pedras, tijolo ou tela enterrada 20cm', 'Portão: trava que o cão não consegue abrir?'] },
          { day: 3, label: 'Dia 3 — Castração', tasks: ['Macho inteiro: castração é a medida mais eficaz', 'Discussão com veterinário agendada?', 'Efeito na fuga: perceptível em 4-8 semanas pós-castração'], note: 'Castração reduz mas não elimina todos os casos de fuga' },
          { day: 4, label: 'Dia 4 — Enriquecimento', tasks: ['Cão estimulado escapa menos', 'Kong, sniffari, exercício intenso', 'Agility ou esporte canino para raças de alta energia?'] },
          { day: 5, label: 'Dia 5 — Identificação', tasks: ['Microchip atualizado?', 'Plaquinha com telefone legível?', 'Foto recente do cão para distribuir se fugir?'] },
          { day: 6, label: 'Dia 6 — Treinamento', tasks: ['"Vem aqui": recall sólido fundamental', 'Retornar ao tutor deve ser sempre recompensado', 'Nunca punir cão que fugiu quando retorna — pune o retorno'] },
          { day: 7, label: 'Dia 7 — Plano de Emergência', tasks: ['Se fugir: foto nas redes da cidade', 'SINID e ONG local contactados', 'Veterinários próximos avisados'] },
        ],
        vetAlert: ['Cão com ferimento ao tentar escapar', 'Fuga associada a convulsão ou estado de confusão mental'],
        prevention: ['Castração precoce', 'Cerca adequada à raça (Husky pula 1,8m, Dachshund escava)', 'Microchip + plaquinha', 'Enriquecimento para reduzir motivação de escapar'],
        myths: [{ myth: 'Cão que foge não gosta do dono', truth: 'Fuga é motivada por instinto (cio, caça), energia reprimida ou ansiedade — não é rejeição ao tutor. Cão fugiria mesmo adorando o tutor se a motivação instintiva for forte o suficiente.' }],
        faq: [
          { q: 'Coleira GPS resolve o problema da fuga?', a: 'GPS ajuda a ENCONTRAR o cão quando foge, mas não PREVINE a fuga. Invista em prevenção (cerca, castração) e GPS como backup para localização.' },
          { q: 'Devo punir o cão quando pego ele depois que fugiu?', a: 'NUNCA. O cão associa a punição ao que está fazendo AGORA (voltando para você) — não ao que fez antes (fugir). Punição ensina o cão a não voltar, tornando a situação muito mais perigosa.' },
        ],
      }],
    },
  ],
};
