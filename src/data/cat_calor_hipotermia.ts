import type { Category } from './types';
export const catCalorHipotermia: Category = {
  id: 'calor-hipotermia', name: 'Hipertermia e Hipotermia', emoji: '🌡️', gradient: 'g-red',
  description: 'Golpe de calor, insolação e hipotermia — emergências por temperatura extrema',
  conditions: [
    {
      id: 'golpe-calor', name: 'Golpe de Calor (Coup de Chaleur)', emoji: '☀️', gradient: 'g-red',
      description: 'Temperatura corporal > 41°C — dano de órgãos em minutos, pode ser fatal',
      prevalence: 'Principais vítimas: cão deixado em carro, cão exercitado no verão, braquicefálicos',
      protocols: [{
        id: 'p1', title: 'Protocolo Golpe de Calor', subtitle: 'Resfriamento imediato, fluidos e monitoramento de CIVD',
        stages: [
          { id: 's1', label: 'Hipertermia Moderada', urgency: 'emergency', description: 'T > 39,5°C com sintomas.', signs: ['Ofego intenso', 'Salivação excessiva', 'Gengivas vermelhas vívidas', 'Cão desorientado'] },
          { id: 's2', label: 'Golpe de Calor Grave', urgency: 'emergency', description: 'T > 41°C — dano orgânico iminente.', signs: ['Temperatura > 41°C', 'Gengivas acinzentadas (colapso circulatório)', 'Convulsão', 'Colapso', 'CIVD (sangramento generalizado)'] },
        ],
        triggers: ['Carro: 15 min em carro parado eleva T interna em 10-15°C', 'Exercício intenso no verão', 'Sem água e sem sombra', 'Braquicefálicos (não dissipam calor eficientemente)'],
        steps: [
          { title: 'Resfriamento imediato e transporte', icon: '❄️', duration: 'Imediato',
            description: 'Água morna (não gelada) no corpo + ventilação + veterinário de emergência.',
            checklist: ['Tirar do ambiente quente IMEDIATAMENTE', 'Água MORNA (não gelada): molhar o corpo todo', 'Ventilador ou AC direcionado ao cão', 'Gelo APENAS nas axilas e virilha, não no corpo todo', 'NÃO submergir em água gelada: vasoconstrição periférica piora', 'Veterinário de emergência ENQUANTO faz o resfriamento', 'Parar o resfriamento quando T < 39°C (risco de hipotermia)'] },
        ],
        checklists: [{ label: 'Prevenção de Golpe de Calor', freq: 'daily', items: ['Cão tem água fresca disponível?', 'Sombra suficiente no quintal?', 'Exercício apenas nas horas mais frescas?', 'Carro: cão nunca deixado sozinho?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Resfriamento imediato com água morna', 'Veterinário ENQUANTO resfria', 'Temperatura monitorada a cada 5 min'], note: 'Água GELADA contrai vasos periféricos e retém calor no core — usar morna' },
          { day: 2, label: 'Dia 2 — Internação', tasks: ['Fluidos IV para proteção renal', 'Monitoramento de coagulação (CIVD)', 'Temperatura interna controlada?'] },
          { day: 3, label: 'Dia 3 — Sequela', tasks: ['Insuficiência renal aguda pós-golpe?', 'Coagulopatia?', 'Dano neurológico?'], note: 'CIVD (coagulação intravascular disseminada) é a complicação mais grave' },
          { day: 4, label: 'Dia 4 — Recuperação', tasks: ['Cão come e bebe?', 'Urina de cor normal?', 'Sem sangramento espontâneo?'] },
          { day: 5, label: 'Dia 5 — Prevenção', tasks: ['Nunca carro sem AC, sempre aberto', 'Passeio: antes das 9h ou após 17h no verão', 'Água fresca renovada 2x/dia?'] },
          { day: 6, label: 'Dia 6 — Braquicefálicos', tasks: ['Bulldog, Pug, Shih Tzu: risco muito alto?', 'Sem exercício no calor para braquicefálicos', 'AC no ambiente de verão?'] },
          { day: 7, label: 'Dia 7 — Consciência', tasks: ['Família sabe o risco do carro?', 'Vizinhos orientados sobre carro e cão?', 'Plano para dias de onda de calor?'] },
        ],
        vetAlert: ['Temperatura > 41°C', 'Colapso no calor', 'Convulsão', 'Gengivas não voltam ao rosa com resfriamento'],
        prevention: ['Nunca deixar cão em carro', 'Água e sombra sempre disponíveis', 'Exercício nas horas mais frescas', 'AC para braquicefálicos no verão'],
        myths: [{ myth: 'Jogar água gelada no cão com golpe de calor salva a vida', truth: 'FALSO. Água gelada causa vasoconstrição periférica, impedindo a perda de calor do core. Água MORNA + ventilação é o método correto. Gelo: somente nas axilas e virilha (áreas de grandes vasos).' }],
        faq: [
          { q: 'Em quanto tempo um carro fecha pode matar um cão?', a: 'Com temperatura externa de 25°C: interior do carro chega a 40°C em 15-20 minutos. Com 35°C externo: 55-60°C em poucos minutos. Nunca deixar cão em carro, mesmo na sombra e com janela entreaberta.' },
        ],
      }],
    },
    {
      id: 'hipotermia', name: 'Hipotermia', emoji: '🥶', gradient: 'g-blue',
      description: 'Temperatura corporal < 37°C — filhotes, cães de pelo curto e cães molhados',
      prevalence: 'Filhotes e idosos são mais vulneráveis; hipotermia pós-cirúrgica é a forma mais comum em clínica',
      protocols: [{
        id: 'p1', title: 'Protocolo Hipotermia Canina', subtitle: 'Aquecimento gradual, manta e fluidos aquecidos',
        stages: [
          { id: 's1', label: 'Leve (T 32-37°C)', urgency: 'high', description: 'Tremores, letargia.', signs: ['Tremores intensos', 'Pele fria ao toque', 'Letargia', 'Respiração lenta'] },
          { id: 's2', label: 'Grave (T < 32°C)', urgency: 'emergency', description: 'Parada cardíaca iminente.', signs: ['Sem tremores (depleção muscular)', 'Bradicardia', 'Pupilas dilatadas', 'Inconsciência'] },
        ],
        triggers: ['Filhote exposto ao frio', 'Cão molhado sem secar', 'Anestesia prolongada', 'Frio extremo sem abrigo', 'Choque com perda de calor'],
        steps: [
          { title: 'Aquecimento gradual', icon: '🌡️', duration: 'Imediato',
            description: 'Aquecimento GRADUAL — nunca fontes de calor direto.',
            checklist: ['Manta térmica ou toalhas aquecidas (NÃO bolsa de água quente diretamente na pele)', 'Ambiente aquecido', 'Fluidos mornos IV (veterinário)', 'Secar completamente após banho (causa de hipotermia em filhotes)', 'Temperatura retal a cada 15 min: parar quando > 37,5°C'] },
        ],
        checklists: [{ label: 'Prevenção de Hipotermia', freq: 'daily', items: ['Filhotes secos e aquecidos?', 'Cão molhado: secado completamente?', 'Cão idoso com roupinha em dias frios?', 'Temperatura da cama acima de 18°C?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Veterinário imediato se T < 32°C', 'Aquecimento gradual com toalhas', 'NÃO bolsa de água quente direta (queimadura + vasodilatação periférica abrupta)'] },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Temperatura normalizada?', 'Frequência cardíaca normal?', 'Cão alerta?'] },
          { day: 3, label: 'Dia 3 — Prevenção', tasks: ['Filhote: ambiente > 29°C na 1ª semana', 'Secar completamente após banho', 'Roupinha para raças de pelo curto no inverno?'] },
          { day: 4, label: 'Dia 4-7 — Prevenção Permanente', tasks: ['Cama longe do frio e corrente de ar', 'Roupinha para idosos em noites frias', 'Abrigo exterior isolado para cão que fica fora?'] },
        ],
        vetAlert: ['T < 32°C', 'Sem tremores (hipotermia grave)', 'Colapso no frio'],
        prevention: ['Filhotes: ambiente quente', 'Secar após banho completamente', 'Abrigo adequado para cão exterior'],
        myths: [{ myth: 'Massagear o cão com hipotermia o aquece mais rápido', truth: 'Massagem periférica redistribui o sangue frio das extremidades para o core, podendo piorar a hipotermia central. Aquecimento passivo com manta é mais seguro.' }],
        faq: [
          { q: 'Cão precisa de roupinha no inverno?', a: 'Raças de pelo curto (Pinscher, Dachshund, Basenji, Saluki) e cães idosos: sim, em dias frios. Raças de pelo duplo espesso (Husky, Malamute): não precisam e podem superaquecer. Filhotes: roupinha ajuda muito.' },
        ],
      }],
    },
  ],
};
