import type { Category } from './types';
export const catHidratacao: Category = {
  id: 'hidratacao', name: 'Hidratação', emoji: '💧', gradient: 'g-blue',
  description: 'Desidratação, polidipsia, fontes de água e como garantir hidratação adequada',
  conditions: [
    {
      id: 'desidratacao', name: 'Desidratação Canina', emoji: '🏜️', gradient: 'g-amber',
      description: 'Reconhecer e tratar desidratação — um dos primeiros sinais de doença',
      prevalence: 'Qualquer cão doente pode desidratá-lo; vômito, diarreia e calor são as principais causas',
      protocols: [{
        id: 'p1', title: 'Protocolo Desidratação', subtitle: 'Avaliação, reidratação e quando é emergência',
        stages: [
          { id: 's1', label: 'Desidratação Leve (< 5%)', urgency: 'moderate', description: 'Pele perde elasticidade.', signs: ['Skin turgor: pele volta mais devagar', 'Mucosas levemente secas', 'Olhos ligeiramente encovados', 'Letargia leve'] },
          { id: 's2', label: 'Desidratação Grave (> 8%)', urgency: 'emergency', description: 'Choque hipovolêmico iminente.', signs: ['Skin turgor: pele NÃO retorna ao normal', 'Mucosas secas e pastosas', 'Taquicardia', 'Extremidades frias', 'Colapso'] },
        ],
        triggers: ['Vômito ou diarreia > 24h', 'Golpe de calor', 'Recusa de água', 'Febre alta', 'Doença renal ou diabetes (poliúria)'],
        steps: [
          { title: 'Teste de turgor e reidratação', icon: '💧', duration: 'Imediato',
            description: 'Teste do skin turgor: beliscar pele do pescoço — deve retornar em < 2 segundos.',
            checklist: ['Teste turgor: beliscar pele nuca — retorno normal < 2s', 'Oferecer água em pequenos volumes frequentes', 'Levemente desidratado sem vômito: reidratação oral', 'Soro de reidratação oral para cães (ou caseiro: 1L água + 1 col. sal + 2 col. açúcar)', 'Veterinário SE: vômito impede ingestão oral, graves sinais sistêmicos, cão colapsa'] },
        ],
        checklists: [{ label: 'Monitoramento de Hidratação', freq: 'daily', items: ['Cão bebeu água normalmente hoje?', 'Teste de turgor: normal?', 'Mucosas úmidas?', 'Urina normal (não escura)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Teste de turgor', 'Avaliar mucosas', 'Cão vomita? Diarreia?'], note: 'Desidratação grave = veterinário imediato' },
          { day: 2, label: 'Dia 2 — Reidratação Oral', tasks: ['Pequenos goles frequentes', 'Gelo: muitos cães aceitam melhor', 'Caldo de frango sem sal: palatabilidade aumenta ingestão'], note: 'Nunca forçar ingestão de água em cão com vômito' },
          { day: 3, label: 'Dia 3 — Causa Subjacente', tasks: ['Diarreia: probiótico e dieta bland', 'Vômito: antiemético veterinário', 'Febre: veterinário para a causa'] },
          { day: 4, label: 'Dia 4 — Monitoramento', tasks: ['Turgor normalizado?', 'Mucosas úmidas?', 'Urina de cor normal?'] },
          { day: 5, label: 'Dia 5 — Prevenção', tasks: ['Água fresca disponível 24h', 'Múltiplas fontes d\'água em locais diferentes', 'Bowl de água no quarto?'] },
          { day: 6, label: 'Dia 6 — Estimular Ingestão', tasks: ['Fonte de água em movimento (cão bebe mais)', 'Bowl de cerâmica ou inox (não plástico que retém odor)', 'Úmido na dieta aumenta hidratação'] },
          { day: 7, label: 'Dia 7 — Resolução', tasks: ['Desidratação resolvida?', 'Causa tratada?', 'Prevenção estruturada?'] },
        ],
        vetAlert: ['Turgor ausente (pele não volta)', 'Mucosas secas e brancas', 'Cão colapsa ou não fica de pé'],
        prevention: ['Água fresca disponível 24h', 'Múltiplas fontes em casas grandes', 'Troca diária da água'],
        myths: [{ myth: 'Cão que não bebe muito está bem regulado', truth: 'Cão que bebe muito pouco pode estar desidratado, nauseado ou com problema renal. Monitorar o consumo de água é parte do monitoramento de saúde.' }],
        faq: [
          { q: 'Quanto de água um cão deve beber por dia?', a: 'Regra geral: 50-60ml/kg/dia. Cão de 10kg: 500-600ml. Aumenta com calor, exercício e dieta seca. Diminui com dieta úmida. Beber muito mais que isso: investigar diabetes ou doença renal.' },
          { q: 'Posso dar soro de reidratação humano (Pedialyte) para cão?', a: 'Em emergência sem opção veterinária: sim, Pedialyte sem sabor artificial em dose calculada para cão. Mas a formulação veterinária é mais adequada. Soro caseiro (1L água + 1/2 colher de sal + 2 de açúcar) é alternativa aceitável.' },
        ],
      }],
    },
    {
      id: 'polidipsia', name: 'Beber Água Demais (Polidipsia)', emoji: '🚰', gradient: 'g-blue',
      description: 'Cão que bebe água excessivamente — sinal de diversas doenças sérias',
      prevalence: 'Polidipsia acompanha diabetes, Cushing, doença renal, piometra e hepatopatia',
      protocols: [{
        id: 'p1', title: 'Investigação da Polidipsia', subtitle: 'Diagnóstico diferencial e condução',
        stages: [
          { id: 's1', label: 'Polidipsia Leve', urgency: 'moderate', description: 'Bebe mais que o normal mas estável.', signs: ['Consumo > 90-100ml/kg/dia', 'Urina muito frequente', 'Sem outros sintomas evidentes'] },
          { id: 's2', label: 'Polidipsia com Sintomas Sistêmicos', urgency: 'high', description: 'Bebe muito + outros sinais — investigação urgente.', signs: ['Bebe e urina excessivamente', 'Perda de peso', 'Abdômen distendido', 'Febre ou prostração associada'] },
        ],
        triggers: ['Diabetes mellitus', 'Hiperadrenocorticismo (Cushing)', 'Doença renal crônica', 'Piometra (útero infectado)', 'Hipercalcemia', 'Diabetes insipidus (raro)'],
        steps: [
          { title: 'Investigação laboratorial', icon: '🔬', duration: 'Diagnóstico',
            description: 'Hemograma, bioquímica e urinálise são o ponto de partida.',
            checklist: ['Medir consumo de água em 24h (ML/kg/dia)', 'Hemograma e bioquímica completa', 'Urinálise com densidade urinária', 'Glicemia (diabetes)', 'Cortisol e teste de supressão com dexametasona (Cushing)', 'Ultrassom abdominal se suspeita de piometra ou renal'] },
        ],
        checklists: [{ label: 'Monitoramento Diário', freq: 'daily', items: ['Volume de água ingerido medido?', 'Volume de urina aparentemente aumentado?', 'Cão come normalmente?', 'Abdômen normal?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Medir o Consumo', tasks: ['Medir exatamente a água colocada', 'Medir o que sobra no fim do dia', 'Calcular ml/kg ingerido'], note: 'Polidipsia: > 90ml/kg/dia' },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Consulta veterinária com dados de consumo', 'Exames laboratoriais solicitados', 'Ultrassom se indicado'] },
          { day: 3, label: 'Dia 3 — Aguardar Resultados', tasks: ['Continuar monitorando consumo', 'Registrar episódios de urina', 'Outros sintomas novos?'] },
          { day: 4, label: 'Dia 4 — Resultado dos Exames', tasks: ['Diagnóstico estabelecido?', 'Tratamento iniciado conforme causa', 'Retorno agendado?'] },
          { day: 5, label: 'Dia 5 — Tratamento', tasks: ['Diabetes: insulina conforme protocolo', 'Cushing: trilostano ou mitotano', 'Renal: dieta renal e suporte'], note: 'Cada causa tem tratamento específico' },
          { day: 6, label: 'Dia 6 — Resposta ao Tratamento', tasks: ['Bebe menos água com tratamento?', 'Urina ainda excessiva?', 'Peso estável?'] },
          { day: 7, label: 'Dia 7 — Controle', tasks: ['Exames de controle em 4 semanas', 'Sintomas controlados?', 'Qualidade de vida mantida?'] },
        ],
        vetAlert: ['Piometra (cadela inteira bebe muito): veterinário HOJE', 'Vômito associado a polidipsia', 'Prostração com polidipsia'],
        prevention: ['Check-up anual detecta diabetes e Cushing precocemente', 'Castração feminina elimina risco de piometra'],
        myths: [{ myth: 'Cão que bebe muita água tem calor', truth: 'Polidipsia patológica persiste mesmo no frio, sem exercício. Cão que bebe mais de 100ml/kg/dia de forma consistente precisa de investigação veterinária, não de ajuste de temperatura.' }],
        faq: [
          { q: 'Como medir o quanto meu cão bebe?', a: 'Coloque exatamente 1L de água de manhã. À noite, meça o que sobrou. A diferença é o que o cão ingeriu em 24h. Divida pelo peso do cão para obter ml/kg/dia. Repita 3 dias seguidos para confirmar padrão.' },
          { q: 'Polidipsia pode ser psicogênica?', a: 'Sim, mas é incomum. Polidipsia psicogênica (por tédio ou ansiedade) é diagnóstico de exclusão — só após afastar todas as causas orgânicas. Cão que bebe muito por ansiedade geralmente tem outros comportamentos ansiosos associados.' },
        ],
      }],
    },
  ],
};
