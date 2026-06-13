import type { Category } from './types';
export const catMultiespecie: Category = {
  id: 'multiespecie', name: 'Convivência Multiespécie', emoji: '🐾🐈', gradient: 'g-emerald',
  description: 'Cão com gato, coelho, ave ou outros animais — introdução segura e convivência harmoniosa',
  conditions: [
    {
      id: 'cao-gato', name: 'Cão com Gato na Mesma Casa', emoji: '🐈', gradient: 'g-emerald',
      description: 'Introdução, território e sinais de que está ou não dando certo',
      prevalence: '30% dos lares brasileiros têm cão e gato; integração bem-feita leva a coabitação pacífica em maioria',
      protocols: [{
        id: 'p1', title: 'Protocolo Cão-Gato', subtitle: 'Apresentação gradual por cheiro, espaço seguro do gato e retreinamento',
        stages: [
          { id: 's1', label: 'Curiosidade e Exploração Mútua', urgency: 'low', description: 'Interessados um no outro, sem agressividade.', signs: ['Cão quer cheirar, gato observa de cima', 'Sem ataque ou perseguição', 'Gato bufa mas não foge desesperado'] },
          { id: 's2', label: 'Instinto de Predador Ativado', urgency: 'high', description: 'Cão persegue o gato como presa.', signs: ['Cão persegue o gato ao fugir', 'Latido intenso e postura de caça', 'Gato em pânico, escondido', 'Incapaz de coabitar no mesmo espaço'] },
        ],
        triggers: ['Instinto de predador (cão com alta prey drive)', 'Gato foge = desencadeia caça', 'Introdução abrupta', 'Sem espaço de escape para o gato', 'Raças com high prey drive: Husky, Greyhound, Jack Russell'],
        steps: [
          { title: 'Introdução por fases', icon: '🐈', duration: '2-8 semanas de introdução gradual',
            description: 'Por cheiro → por visão → por espaço compartilhado.',
            checklist: ['FASE 1: Troca de odores (coberta do gato para cão, e vice-versa)', 'FASE 2: Ver sem contato (portão de bebê, cão na guia)', 'FASE 3: Mesmo espaço, cão na guia, recompensa por calma', 'GATO sempre ter SAÍDA SEGURA (móvel alto, quarto exclusivo)', 'GATO: comida, água e caixa de areia em local inacessível ao cão', 'Cão: "deixa" e "senta" sólidos antes do encontro', '"Olha pro cão": recompensar o gato por não fugir'] },
        ],
        checklists: [{ label: 'Convivência Cão-Gato', freq: 'daily', items: ['Gato teve acesso a espaço sem o cão?', 'Cão ficou calmo perto do gato?', 'Nenhum episódio de perseguição hoje?', 'Comida do gato inacessível ao cão?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Separação Total', tasks: ['Quartos separados inicialmente', 'Trocar coberta ou roupinha com odores', 'Cada um come no lado oposto da porta fechada'], note: 'Porta como barreira: cada um farejo o cheiro do outro sem contato — associação positiva com o odor' },
          { day: 2, label: 'Dia 2 — Cheiro Avançado', tasks: ['Coberta do gato na cama do cão', 'Coberta do cão no espaço do gato', 'Reação de cada um ao odor?'] },
          { day: 3, label: 'Dia 3 — Visão Controlada', tasks: ['Portão de bebê: cão de um lado, gato do outro', 'Cão na guia: recompensa por ficar calmo', 'Gato pode ir e vir ao próprio ritmo?'] },
          { day: 4, label: 'Dia 4 — Primeiro Encontro', tasks: ['Cão na guia, gato livre', 'Sessão máxima de 5-10 min', 'Recompensar cão por ignorar ou farejar calmamente o gato'] },
          { day: 5, label: 'Dia 5 — Progressão', tasks: ['Sessões mais longas se sem tensão', 'Gato não fugiu?', 'Cão desinteressado é o ideal'], note: 'Perseguição: separar e regredir na etapa. Não punir o cão — redirecionar' },
          { day: 6, label: 'Dia 6 — Espaços Verticais', tasks: ['Arranhador alto para o gato', 'Bancada/estante acessível ao gato, inacessível ao cão', 'Gato nunca deve ficar sem saída'] },
          { day: 7, label: 'Dia 7 — Coabitação', tasks: ['Cão e gato no mesmo espaço sem guia?', 'Gato relaxado?', 'Cão ignorando o gato?'] },
        ],
        vetAlert: ['Gato que parou de comer por estresse do cão', 'Cão com alta prey drive impossível de controlar com treino'],
        prevention: ['Introdução gradual', 'Raças de low prey drive facilitam a coabitação', 'Gato sempre com espaço de escape'],
        myths: [{ myth: 'Cão e gato são inimigos naturais', truth: 'Cão e gato coabitam pacificamente na maioria das casas quando a introdução é feita gradualmente. A relação depende mais da personalidade individual dos animais e do método de introdução do que da espécie.' }],
        faq: [
          { q: 'Meu cão persegue o gato para brincar ou para caçar?', a: 'Difícil distinguir para o gato. Mesmo que o cão não pretenda machucar, o gato experimenta estresse intenso sendo perseguido. Sinais de predação real: postura baixa, olhar fixo, perseguição silenciosa. Brincadeira: mais barulhosa, play bow. Ambas: gerenciar até o gato sentir-se seguro.' },
        ],
      }],
    },
  ],
};
