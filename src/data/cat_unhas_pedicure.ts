import type { Category } from './types';
export const catUnhasPedicure: Category = {
  id: 'unhas-pedicure', name: 'Unhas e Pedicure', emoji: '✂️', gradient: 'g-indigo',
  description: 'Corte de unhas, unhão encravado, dedos inchados e cuidado dos coxins',
  conditions: [
    {
      id: 'corte-unhas', name: 'Corte de Unhas', emoji: '✂️', gradient: 'g-indigo',
      description: 'Unhas longas causam dor, desvio postural e lesões — como cortar com segurança',
      prevalence: 'Muito comum: 60% dos tutores têm dificuldade com o corte; unhas longas são a causa mais negligenciada de dor articular',
      protocols: [{
        id: 'p1', title: 'Protocolo de Corte de Unhas', subtitle: 'Técnica segura, frequência certa e como lidar com o nervosismo do cão',
        stages: [
          { id: 's1', label: 'Unhas Compridas', urgency: 'moderate', description: 'Unhas que tocam o chão — causam dor e desvio postural.', signs: ['Barulho de clique ao caminhar no piso duro', 'Dígitos em desvio lateral', 'Relutância a caminhar em superfícies duras', 'Pata curvando para dentro'] },
          { id: 's2', label: 'Corte Excessivo (Quick)', urgency: 'moderate', description: 'Atingiu o quick — sangramento e dor aguda.', signs: ['Sangramento da ponta da unha', 'Cão recua e gane', 'Vermelhidão ao redor', 'Cão passa a odiar o corte'] },
        ],
        triggers: ['Falta de corte regular', 'Piso muito macio (carpete)', 'Pouco exercício em piso duro', 'Unhão (5º dígito) não desgasta naturalmente'],
        steps: [
          { title: 'Corte seguro passo a passo', icon: '✂️', duration: '10-15 min',
            description: 'Alicate de qualidade, boa iluminação, polvilho hemostático em mãos.',
            checklist: ['Alicate de unhas canino (não humano)', 'Iluminação: veja o quick (cor rosa nas unhas claras)', 'Unhas pretas: corte 2mm de cada vez — sem ver o quick', 'Corte em ângulo 45°, não reto', 'Polvilho de arroz ou estanção Quick Stop em caso de sangramento', 'Frequência: a cada 3-4 semanas'] },
        ],
        checklists: [{ label: 'Corte Mensal', freq: 'monthly', items: ['Alicate afiado e limpo?', 'Quick Stop em mãos?', 'Unhas claras: quick visível?', 'Unhão (dewclaw) verificado?', 'Pós-corte: petisco de recompensa?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação das Unhas', tasks: ['Unhas tocam o chão ao andar?', 'Barulho de clique ao caminhar?', 'Unhão presente? Também precisa de corte!'], note: 'Unhão (dewclaw) não desgasta — cresce em espiral e encravar' },
          { day: 2, label: 'Dia 2 — Dessensibilização', tasks: ['Tocar as patas sem cortar (treino de tolerância)', 'Petisco ao tocar as patas', 'Mostrar o alicate sem usar'], note: 'Cão ansioso: treine por 5 dias antes de cortar' },
          { day: 3, label: 'Dia 3 — Corte de 2 Patas', tasks: ['Cortar dianteiras primeiro (mais fácil)', 'Parar se cão estressar muito', 'Petisco após cada unha cortada'], note: 'Dividir em 2 sessões é melhor que forçar uma só' },
          { day: 4, label: 'Dia 4 — Corte das Traseiras', tasks: ['Patas traseiras + unhões se presentes', 'Verificar se todas as pontas estão lisas', 'Lixa se tiver ponta afiada'], note: 'Traseiras: menor risco de atingir o quick' },
          { day: 5, label: 'Dia 5 — Verificação', tasks: ['Nenhuma unha toca o chão?', 'Cão anda normalmente?', 'Pontas lisas (sem lasca)?'] },
          { day: 6, label: 'Dia 6 — Coxins', tasks: ['Coxins rachados?', 'Pelos entre os dedos excessivos?', 'Hidratante de coxim se rachado (cera de avelã pet)'] },
          { day: 7, label: 'Dia 7 — Próximo Corte', tasks: ['Anotar data para próximo corte (3-4 semanas)', 'Recompensar o cão (o ritual positivo importa!)', 'Alicate limpo e guardado?'] },
        ],
        vetAlert: ['Unhão encravado na pele (abscesso)', 'Sangramento que não para em 5 min', 'Dígito inchado ou dolorido'],
        prevention: ['Corte regular a cada 3-4 semanas', 'Exercício em piso duro desgasta naturalmente as unhas', 'Verificar unhões (dewclaws) que nunca desgastam'],
        myths: [{ myth: 'Cão que anda na rua não precisa cortar as unhas', truth: 'Passeio em asfalto desgasta unhas medianas, mas unhões nunca desgastam e Dewclaws podem encravar sem corte. Todo cão precisa de verificação regular.' }],
        faq: [
          { q: 'Cortei demais e sangrou muito — o que fazer?', a: 'Pressione polvilho de arroz, farinha de trigo ou produto Quick Stop diretamente na ponta por 2-3 min. Se não parar, pressão com gaze por 10 min. Raramente é emergência. O cão vai evitar usar a pata por algumas horas — isso é normal.' },
          { q: 'Como cortar unhas de cão que odeia?', a: 'Dessensibilização progressiva: semana 1: tocar patas com petisco; semana 2: toque do alicate; semana 3: cortar 1 unha por dia com recompensa alta. Em casos extremos, o veterinário pode sedar levemente para o corte.' },
          { q: 'Com que frequência cortar unhas?', a: 'A cada 3-4 semanas em média. Cões com muita atividade em pisos duros precisam menos. Cão de apartamento pode precisar a cada 2 semanas. O sinal: quando ouve o barulho "tique-taque" ao andar.' },
        ],
      }],
    },
    {
      id: 'coxins-rachados', name: 'Coxins Rachados e Lesionados', emoji: '🐾', gradient: 'g-red',
      description: 'Coxins rachados, queimados ou feridos — causa de dor e claudicação',
      prevalence: 'Muito comum em verão (asfalto quente) e em cães com nutrição deficiente',
      protocols: [{
        id: 'p1', title: 'Protocolo Coxins Saudáveis', subtitle: 'Tratamento de rachaduras, queimaduras e hidratação preventiva',
        stages: [
          { id: 's1', label: 'Coxins Secos e Rachados', urgency: 'moderate', description: 'Rachaduras superficiais — doem ao andar.', signs: ['Coxins com fissuras visíveis', 'Pele ao redor descamando', 'Cão lambe as patas excessivamente', 'Claudicação leve em superfícies duras'] },
          { id: 's2', label: 'Queimadura de Asfalto', urgency: 'high', description: 'Asfalto a 60°C+ em dias quentes — queima coxins em minutos.', signs: ['Coxins avermelhados ou com bolhas', 'Claudicação aguda após passeio', 'Cão recusa andar', 'Pele descascando'] },
        ],
        triggers: ['Asfalto quente (>30°C ambiente = 60°C no asfalto)', 'Inverno seco — ar frio resseca os coxins', 'Nutrição deficiente (omega-3 baixo)', 'Produtos químicos no chão (hipoclorito, sal de degelo)'],
        steps: [
          { title: 'Tratamento de coxins rachados', icon: '🧴', duration: '7-14 dias',
            description: 'Lavar, secar, hidratante específico e proteção durante a cura.',
            checklist: ['Lavar com água morna e sabão neutro', 'Secar completamente (especialmente entre os dedos)', 'Aplicar cera de avelã ou balm de coxim específico', 'Bota protetora durante passeios até cicatrizar', 'Omega-3: 1g/10kg/dia — melhora barreira cutânea', 'Queimadura: colar elizabetano para evitar lambedura'] },
        ],
        checklists: [{ label: 'Verificação Semanal dos Coxins', freq: 'weekly', items: ['Coxins macios (nem muito duros, nem muito moles)?', 'Fissuras visíveis?', 'Vermelhidão entre os dedos?', 'Pelo entre os dedos cortado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Examinar cada coxim individualmente', 'Verificar entre os dedos', 'Rachadura superficial ou profunda?'], note: 'Rachadura profunda com sangramento: veterinário hoje' },
          { day: 2, label: 'Dia 2 — Limpeza e Hidratação', tasks: ['Lavar com água morna', 'Secar completamente', 'Aplicar balm ou cera de coxim 2x/dia'] },
          { day: 3, label: 'Dia 3 — Proteção', tasks: ['Bota protetora nos passeios?', 'Evitar asfalto quente', 'Meia cirúrgica ou curativo se lesão aberta'] },
          { day: 4, label: 'Dia 4 — Cicatrização', tasks: ['Fissuras fechando?', 'Cão anda melhor?', 'Aplicar hidratante novamente'] },
          { day: 5, label: 'Dia 5 — Nutrição', tasks: ['Omega-3 iniciado?', 'Dieta com gorduras de qualidade?', 'Ração premium com DHA/EPA?'] },
          { day: 6, label: 'Dia 6 — Passeio Seguro', tasks: ['Teste do asfalto: tocar com dorso da mão por 5 seg. Quente? Evite', 'Passeio em grama ou terra se possível', 'Horário: antes das 10h ou após 18h'], note: 'Regra dos 5 segundos: se dói na mão humana, dói na pata do cão' },
          { day: 7, label: 'Dia 7 — Resultado', tasks: ['Coxins mais macios?', 'Cão não lambe mais as patas?', 'Manter hidratação semanal preventiva?'] },
        ],
        vetAlert: ['Coxins com úlceras ou bolhas abertas', 'Dedos inchados e quentes', 'Cão recusa totalmente apoiar a pata'],
        prevention: ['Verificar temperatura do asfalto antes de sair (regra dos 5 seg)', 'Hidratante de coxim semanal em clima seco', 'Omega-3 na dieta para barreira cutânea forte'],
        myths: [{ myth: 'Coxins duros são saudáveis', truth: 'Coxins muito endurecidos (hiperqueratose) são patológicos — causam fissuras e dor. O ideal é coxim firme mas com elasticidade, similar a borracha de qualidade.' }],
        faq: [
          { q: 'Posso usar vaselina nos coxins do meu cachorro?', a: 'Não é o ideal — vaselina amolece demais e pode ser ingerida na lambedura. Prefira balm específico para pets com cera de abelha, manteiga de karité ou shea. Se lambeu um pouco de vaselina, não é tóxico.' },
          { q: 'Bota de cachorro: como habituar?', a: 'Treinamento progressivo: dia 1 coloca só; dia 2 coloca e distrai com petisco por 2 min; aumento gradual. A maioria dos cães aceita em 1-2 semanas. Botas de silicone são mais fáceis que de tecido.' },
        ],
      }],
    },
  ],
};
