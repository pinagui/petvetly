import type { Category } from './types';
export const catExercicio: Category = {
  id: 'exercicio', name: 'Exercício e Condicionamento', emoji: '🏃', gradient: 'g-emerald',
  description: 'Quanto exercício cada cão precisa, superexercício em filhotes e condicionamento físico',
  conditions: [
    {
      id: 'necessidades-exercicio', name: 'Necessidades de Exercício por Raça', emoji: '🐕', gradient: 'g-emerald',
      description: 'Cada raça tem necessidade diferente — errar pode causar ansiedade, destrutividade ou lesão',
      prevalence: 'Falta de exercício é causa primária de 70% dos problemas comportamentais em cães',
      protocols: [{
        id: 'p1', title: 'Protocolo de Exercício Personalizado', subtitle: 'Adequar exercício à raça, idade e condição física',
        stages: [
          { id: 's1', label: 'Subexercitado', urgency: 'moderate', description: 'Menos exercício que o necessário — causa comportamento destrutivo.', signs: ['Destrutividade em casa', 'Latido excessivo', 'Ansiedade', 'Hiperatividade ao ver a coleira', 'Dificuldade em ficar quieto'] },
          { id: 's2', label: 'Superexercitado', urgency: 'moderate', description: 'Excesso de exercício causa lesões — especialmente em filhotes.', signs: ['Claudicação após exercício', 'Cão não quer continuar', 'Letargia excessiva no dia seguinte', 'Patas machucadas', 'Superaquecimento'] },
        ],
        triggers: ['Raça de alta energia sem saída adequada', 'Filhote com exercício de adulto', 'Cão sedentário repentinamente forçado a exercício intenso', 'Calor intenso + exercício'],
        steps: [
          { title: 'Calcular exercício correto', icon: '📊', duration: 'Diário',
            description: 'Guia por grupos de raças para necessidade diária.',
            checklist: ['Alto drive (Border Collie, Malinois, Husky): 2-3h/dia de exercício intenso', 'Alto drive moderado (Labrador, Golden, Beagle): 1-2h/dia', 'Médio (Poodle, Schnauzer): 45-90 min/dia', 'Baixo drive (Bulldog, Basset, Shih Tzu): 30-45 min/dia', 'Filhotes: regra dos 5 min x mês de vida (3 meses = 15 min)', 'Idosos: 2-3 caminhadas curtas de 15-20 min/dia'] },
        ],
        checklists: [{ label: 'Exercício Diário', freq: 'daily', items: ['Exercício realizado?', 'Cão cansado de forma saudável (não exausto)?', 'Clima seguro (sem calor extremo)?', 'Água disponível antes, durante e após?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Qual raça e idade do cão?', 'Quanto exercício faz atualmente?', 'Comportamento indica falta ou excesso?'], note: 'Cão destrutivo em casa = subexercitado em 90% dos casos' },
          { day: 2, label: 'Dia 2 — Estruturar Rotina', tasks: ['Definir horários fixos de exercício', 'Manhã + tarde (melhor que uma sessão longa)', 'Tipo de exercício para a raça?'], note: 'Routine matters: cão com horário certo é mais calmo' },
          { day: 3, label: 'Dia 3 — Variedade', tasks: ['Passeio em local novo (estimula olfato)', 'Brincadeira de busca', 'Treino de obediência (cansa a mente)'], note: 'Exercício mental cansa tanto quanto o físico' },
          { day: 4, label: 'Dia 4 — Verificação de Fadiga', tasks: ['Cão está cansado demais?', 'Claudicação após exercício?', 'Patas machucadas?'] },
          { day: 5, label: 'Dia 5 — Raças de Alto Drive', tasks: ['Agility, flyball, disc dog se disponível', 'Trekking ou mountain biking', 'Busca e resgate amador (farejar objetos)'], note: 'Border Collie sem trabalho mental enlouquece literalmente' },
          { day: 6, label: 'Dia 6 — Raças Braquicefálicas', tasks: ['Evitar exercício no calor', 'Parar ao primeiro sinal de dificuldade respiratória', 'Natação: excelente para Bulldogs'], note: 'Buldogue: 20 min caminhada no frescor > 5 min no calor' },
          { day: 7, label: 'Dia 7 — Revisão da Semana', tasks: ['Comportamento do cão melhorou?', 'Cão mais calmo em casa?', 'Exercício foi prazeroso para ambos?'] },
        ],
        vetAlert: ['Claudicação após exercício em filhote', 'Síncope (desmaio) durante exercício', 'Cão para bruscamente e não quer continuar (dor?)'],
        prevention: ['Filhotes: regra dos 5 min por mês de vida até 1 ano', 'Exercício em horários frescos no verão', 'Aumento gradual de intensidade'],
        myths: [{ myth: 'Cão cansado é cão feliz — quanto mais, melhor', truth: 'Exercício excessivo em filhotes causa displasia. Em adultos, superexercício repetido sem recuperação leva a lesões crônicas. Equilíbrio e regularidade superam intensidade.' }],
        faq: [
          { q: 'Posso levar filhote de 3 meses para correr?', a: 'Não. Placa de crescimento aberta até 12-18 meses em raças grandes. Corrida e saltos antes disso aumentam risco de displasia. Regra dos 5 minutos: 3 meses = 15 min de caminhada leve, 2x/dia.' },
          { q: 'Qual o exercício ideal para cão de apartamento?', a: 'Passeio 2x/dia (mínimo 30 min cada), enriquecimento dentro de casa (farejar, puzzles), brincadeiras ativas. Raças de alto drive em apartamento precisam de atividade extra diária obrigatória.' },
          { q: 'Cão pode nadar no rio ou praia?', a: 'Rio: cuidado com leptospirose (água parada ou com animais). Mar: seguro, mas enxaguar com água doce após (sal irrita a pele). Piscina de cloro: enxaguar bem após. A maioria dos cães adora e é excelente exercício.' },
        ],
      }],
    },
    {
      id: 'hipertermia-exercicio', name: 'Golpe de Calor Induzido por Exercício', emoji: '🌡️', gradient: 'g-red',
      description: 'Exercício no calor pode matar em minutos — como prevenir e agir',
      prevalence: 'Uma das principais causas de morte súbita em cães — 100% prevenível',
      protocols: [{
        id: 'p1', title: 'Protocolo de Emergência: Hipertermia', subtitle: 'Reconhecimento, resfriamento de emergência e prevenção',
        stages: [
          { id: 's1', label: 'Hipertermia Inicial (39.5-41°C)', urgency: 'high', description: 'Cão ofegante excessivamente, lento.', signs: ['Ofegação intensa', 'Salivação excessiva', 'Mucosas vermelhas', 'Fraqueza', 'Temperatura > 39,5°C'] },
          { id: 's2', label: 'Golpe de Calor (>41°C)', urgency: 'emergency', description: 'Convulsões, colapso — URGÊNCIA MÁXIMA.', signs: ['Temperatura > 41°C', 'Convulsões', 'Colapso', 'Mucosas cinzas ou azuladas', 'Diarreia com sangue'] },
        ],
        triggers: ['Exercício em temperatura > 28°C', 'Umidade alta (impede dissipação de calor)', 'Raças braquicefálicas em qualquer temperatura', 'Cão em carro fechado', 'Cão gordo + exercício no calor'],
        steps: [
          { title: 'EMERGÊNCIA: Resfriamento imediato', icon: '🚨', duration: 'Imediato',
            description: 'Cada minuto conta — começar resfriamento ANTES de ir ao vet.',
            checklist: ['MOVER para sombra imediatamente', 'Água MORNA (não gelada) sobre o corpo todo', 'Ventilador ou vento direto', 'Panos úmidos nas virilhas, axilas e pescoço', 'NÃO colocar gelo — causa vasoconstrição e piora', 'Veterinário DE EMERGÊNCIA IMEDIATAMENTE', 'Na ida: janelas abertas, ar condicionado ligado'] },
        ],
        checklists: [{ label: 'Checklist de Prevenção no Verão', freq: 'daily', items: ['Temperatura < 25°C para exercício?', 'Exercício nas primeiras horas da manhã ou após 18h?', 'Água disponível durante todo o exercício?', 'Cão braquicefálico? Exercício apenas no frescor?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Planejamento de Verão', tasks: ['Definir horários seguros (antes das 9h ou após 18h)', 'Verificar previsão de temperatura para a semana', 'Comprar e instalar bowl de água para o quintal'], note: 'Asfalto a 30°C ar = 60°C na pata = 40°C retal' },
          { day: 2, label: 'Dia 2 — Adaptação ao Calor', tasks: ['Sessões de exercício mais curtas no início do verão', 'Aumentar gradualmente em 2 semanas', 'Observar tolerância individual do cão'], note: 'Adaptação ao calor leva 10-14 dias' },
          { day: 3, label: 'Dia 3 — Hidratação', tasks: ['Água disponível antes, durante e após exercício', 'Cão recusa água no calor: adicione caldo de frango sem sal', 'Gelo na água do bowl?'] },
          { day: 4, label: 'Dia 4 — Identificar Sinais Precoces', tasks: ['Ofegação intensa após 10 min?', 'Passos lentos ou cambaleantes?', 'Parar imediatamente se sinais presentes'] },
          { day: 5, label: 'Dia 5 — Alternativas no Calor', tasks: ['Natação no lugar de corrida', 'Atividade mental dentro de casa (Kong, puzzle)', 'Brincadeiras curtas de 5-10 min no jardim'] },
          { day: 6, label: 'Dia 6 — Carro é Perigo Mortal', tasks: ['Nunca deixar cão em carro fechado', 'Mesmo com janela entreaberta: temperatura sobe em minutos', 'Lembrar: 22°C fora = 47°C dentro do carro em 1 hora'], note: '37% dos casos de golpe de calor são em carros' },
          { day: 7, label: 'Dia 7 — Kit de Emergência', tasks: ['Saber onde fica o veterinário de emergência mais próximo', 'Ter garrafa de água no carro', 'Saber o protocolo de resfriamento de emergência'] },
        ],
        vetAlert: ['Temperatura > 40°C', 'Convulsão', 'Colapso', 'Mucosas roxas ou cinzas'],
        prevention: ['Exercício somente antes das 9h ou após 18h no verão', 'Nunca deixar cão em carro', 'Braquicefálicos: exercício apenas em temperatura < 22°C'],
        myths: [{ myth: 'Cão com água disponível não sofre golpe de calor', truth: 'Cão bebe água mas não transpira como humanos. O resfriamento é quase todo pelo ofego. Em ambiente quente e úmido, o ofego perde eficiência e o golpe de calor ocorre mesmo com água.' }],
        faq: [
          { q: 'Por que não usar gelo no golpe de calor?', a: 'Gelo causa vasoconstrição periférica, fechando os vasos da pele e impedindo a dissipação de calor. A temperatura interna pode continuar subindo mesmo com o cão frio por fora. Água morna + vento é mais efetivo.' },
          { q: 'Cão sobreviveu ao golpe de calor — vai ter sequelas?', a: 'Depende da gravidade e duração. Dano renal, hepático e cerebral são possíveis. Monitoramento por 48-72h com exames laboratoriais é essencial após golpe de calor grave.' },
        ],
      }],
    },
  ],
};
