import type { Category } from './types';
export const catRacasToy: Category = {
  id: 'racas-toy', name: 'Raças Toy e Miniatura — Saúde Específica', emoji: '🐩', gradient: 'g-pink',
  description: 'Chihuahua, Poodle Toy, Yorkshire, Maltês, Shih Tzu — problemas específicos das raças pequenas',
  conditions: [
    {
      id: 'hipoglicemia-toy', name: 'Hipoglicemia em Raças Toy', emoji: '🍬', gradient: 'g-pink',
      description: 'Queda súbita de glicose em filhotes toy — emergência que pode causar morte em minutos',
      prevalence: 'Filhotes toy de < 1,5kg: risco alto de hipoglicemia, especialmente se pular refeições',
      protocols: [{
        id: 'p1', title: 'Protocolo Hipoglicemia Toy', subtitle: 'Reconhecer, mel na gengiva, alimentar e prevenir',
        stages: [
          { id: 's1', label: 'Hipoglicemia Leve', urgency: 'high', description: 'Fraqueza e tremores — intervir imediatamente.', signs: ['Tremores generalizados', 'Fraqueza e insegurança ao andar', 'Letargia súbita', 'Ocorre após jejum > 4-6h em filhote toy'] },
          { id: 's2', label: 'Hipoglicemia Grave', urgency: 'emergency', description: 'Convulsão ou inconsciência.', signs: ['Convulsão', 'Inconsciência', 'Gengivas frias e pálidas', 'Não responde ao estímulo', 'Emergência veterinária imediata'] },
        ],
        triggers: ['Jejum longo em filhote toy (> 4-6h)', 'Stress intenso', 'Diarreia que impede absorção', 'Exercício excessivo em filhote toy'],
        steps: [
          { title: 'Tratamento imediato e prevenção', icon: '🍬', duration: 'Imediato + mudança de rotina',
            description: 'Mel ou glicose na gengiva, alimentar, veterinário se não recuperar em 5 min.',
            checklist: ['LEVE: Mel (1/2 colher de chá) na gengiva ou debaixo da língua IMEDIATAMENTE', 'Aguardar 5 min: cão deve começar a responder', 'Oferecer alimento de alta palatabilidade se recuperou', 'GRAVE (convulsão): veterinário ENQUANTO dá o mel', 'PREVENÇÃO: refeições a cada 4h em filhotes toy < 6 meses', 'Não deixar filhote toy sem comer por mais de 6h nunca', 'Sempre ter mel em casa se tem raça toy'] },
        ],
        checklists: [{ label: 'Prevenção Hipoglicemia', freq: 'daily', items: ['Filhote comeu nas últimas 4h?', 'Mel disponível em casa?', 'Sinais de tremores ou fraqueza?', 'Atividade normal para a faixa etária?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação de Risco', tasks: ['Filhote toy < 1,5kg?', 'Refeições a cada 4-6h garantidas?', 'Mel em casa sempre disponível?'], note: 'Yorkshire de 500g pode morrer de hipoglicemia em horas sem tratamento' },
          { day: 2, label: 'Dia 2 — Rotina Alimentar', tasks: ['Crocante disponível livre ou 4-5 refeições/dia?', 'Petisco de alta energia (pasta de carne) entre refeições?', 'Horários de refeição anotados?'] },
          { day: 3, label: 'Dia 3 — Kit de Emergência', tasks: ['Mel em casa?', 'NutriCal (pasta calórica) disponível?', 'Veterinário de emergência no contato?'] },
          { day: 4, label: 'Dia 4 — Sinais de Alerta', tasks: ['Família sabe reconhecer tremores por hipoglicemia?', 'Diferença de tremores por frio x hipoglicemia?', 'Família treinada para dar mel na gengiva?'], note: 'Tremor por frio: cão alerta. Tremor hipoglicêmico: cão fraco, olhar perdido' },
          { day: 5, label: 'Dia 5 — Transição Filhote-Adulto', tasks: ['Após 6 meses: pode reduzir para 3 refeições/dia', 'Após 1 ano: 2 refeições/dia em raças toy', 'Monitorar peso: toy obeso = problema articular'] },
          { day: 6, label: 'Dia 6 — Dental Específico', tasks: ['Raças toy: dentes supranumerários e má oclusão comuns', 'Dental checkup a cada 6 meses em toy', 'Escovação diária: prevenir reabsorção dentária'], note: 'Yorkshire e Maltês: 80% têm doença periodontal antes dos 3 anos' },
          { day: 7, label: 'Dia 7 — Luxação de Patela', tasks: ['Cão pula com 3 patas ocasionalmente?', 'Luxação de patela: muito comum em toy', 'Veterinário para avaliação?'] },
        ],
        vetAlert: ['Filhote toy com convulsão', 'Inconsciência após jejum', 'Gengivas frias e pálidas'],
        prevention: ['Refeições frequentes até 6 meses (cada 4-6h)', 'Mel sempre disponível em casa', 'Evitar jejum > 6h em filhote toy'],
        myths: [{ myth: 'Cão toy não precisa de cuidados especiais por ser pequeno', truth: 'Raças toy têm metabolismo mais acelerado, hipoglicemia, luxação de patela, doença dental grave, traqueia colapsada e sensibilidade a temperaturas — precisam de cuidados específicos e frequentes, não menos.' }],
        faq: [
          { q: 'Posso dar açúcar comum no lugar de mel em hipoglicemia?', a: 'Sim, em emergência. Açúcar dissolvido em água na gengiva funciona. Mel é preferido por ser mais concentrado e palatável. Glicose veterinária (Nutri-Cal, glicose 50%) é ainda mais eficaz.' },
          { q: 'Raças toy podem conviver com crianças pequenas?', a: 'Com muito cuidado. Raças toy são frágeis — uma queda de 30cm pode fraturar ossos. Crianças pequenas devem ser supervisionadas de perto. Muitos especialistas contraindicam toy em famílias com < 5-6 anos.' },
        ],
      }],
    },
    {
      id: 'traqueia-colapsada', name: 'Traqueia Colapsada', emoji: '💨', gradient: 'g-blue',
      description: 'Tosse de "ganso" em Poodle, Yorkshire, Chihuahua — manejo clínico e cirúrgico',
      prevalence: 'Yorkshire: 30-40% desenvolvem grau variável de colapso de traqueia; mais sintomático com excesso de peso',
      protocols: [{
        id: 'p1', title: 'Protocolo Traqueia Colapsada', subtitle: 'Coleira peitoral, controle de peso, broncodilatador e stent traqueal',
        stages: [
          { id: 's1', label: 'Leve', urgency: 'moderate', description: 'Tosse episódica de "ganso" sob excitação.', signs: ['Tosse de "ganso" episódica', 'Piora com excitação, calor ou puxada na coleira', 'Sem comprometimento respiratório em repouso'] },
          { id: 's2', label: 'Grave', urgency: 'high', description: 'Dispneia e episódios cianóticos.', signs: ['Dispneia ao mínimo esforço', 'Episódio cianótico (gengivas azuladas)', 'Intolerância ao exercício grave', 'Pode precisar de cirurgia (stent traqueal)'] },
        ],
        triggers: ['Excitação', 'Coleira convencional (comprime traqueia)', 'Obesidade', 'Calor e umidade', 'Infecção respiratória concomitante'],
        steps: [
          { title: 'Manejo clínico e prevenção de piora', icon: '💨', duration: 'Crônico — manejo vitalício',
            description: 'Peitoral, perda de peso, broncodilatador em crise.',
            checklist: ['PEITORAL sempre no lugar da coleira (alívio imediato)', 'Controle rigoroso do peso: obesos têm sintomas muito piores', 'Terbutalina ou teofilina: broncodilatadores em crises', 'Hidrocodona ou butorfanol: antitussígeno', 'Evitar calor e ambientes com fumaça, poeira', 'Ar-condicionado: reduz carga respiratória', 'Stent traqueal: para casos graves que não respondem a clínico'] },
        ],
        checklists: [{ label: 'Controle de Traqueia Colapsada', freq: 'daily', items: ['Peitoral (não coleira)?', 'Peso controlado?', 'Ambiente fresco?', 'Episódio de tosse hoje?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Radiografia: confirmação do colapso', 'Grau de colapso (I-IV)', 'Peso verificado?'] },
          { day: 2, label: 'Dia 2 — Peitoral', tasks: ['Trocar coleira por peitoral imediatamente', 'Passeios sem pressão no pescoço', 'Cão mais confortável em 24h?'] },
          { day: 3, label: 'Dia 3 — Controle de Peso', tasks: ['Caloria diária calculada para emagrecer', 'Ração light se obeso', 'Exercício leve (caminhadas curtas em temperatura amena)'] },
          { day: 4, label: 'Dia 4 — Medicação de Crise', tasks: ['Broncodilatador prescrito?', 'Antitussígeno prescrito?', 'Família sabe usar em crise?'] },
          { day: 5, label: 'Dia 5 — Ambiente', tasks: ['Ar-condicionado ou ambiente fresco?', 'Sem tabagismo no ambiente?', 'Evitar desodorantes e produtos de limpeza em spray perto do cão?'] },
          { day: 6, label: 'Dia 6 — Episódio Cianótico: Plano', tasks: ['Episódio cianótico = veterinário de emergência', 'Família treinada?', 'Veterinário de emergência no contato?'] },
          { day: 7, label: 'Dia 7 — Stent', tasks: ['Não responde ao clínico? Stent traqueal veterinário?', 'Cirurgião veterinário de referência identificado?', 'Qualidade de vida do cão mantida?'] },
        ],
        vetAlert: ['Gengivas azuladas (cianose)', 'Dispneia em repouso', 'Crise prolongada sem melhora com peitoral e repouso'],
        prevention: ['Peitoral desde filhote em raças predispostas', 'Peso saudável toda a vida', 'Evitar exposição a irritantes respiratórios'],
        myths: [{ myth: 'Tosse de "ganso" em Yorkshire é normal e não precisa de atenção', truth: 'Traqueia colapsada causa desconforto progressivo e pode evoluir para dificuldade respiratória grave. Diagnóstico e manejo precoce melhoram significativamente a qualidade de vida e retardam a progressão.' }],
        faq: [
          { q: 'Cirurgia de stent traqueal tem bom resultado?', a: 'Para graus III e IV com falha clínica: stent traqueal oferece melhora significativa da qualidade de vida em 70-80% dos casos. Complicações possíveis: formação de granuloma. Custo é elevado. Realizado por cirurgião veterinário especializado.' },
        ],
      }],
    },
  ],
};
