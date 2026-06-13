import type { Category } from './types';

export const catBraquicefalico: Category = {
  id: 'braquicefalico', name: 'Braquicefálicos', emoji: '🐾', gradient: 'g-indigo',
  description: 'Síndrome obstrutiva, palato mole, estenose de narina e problemas de raças de focinho curto',
  conditions: [
    {
      id: 'boas', name: 'Síndrome Braquicefálica (BOAS)', emoji: '😮‍💨', gradient: 'g-indigo',
      description: 'Conjunto de anomalias anatômicas das vias aéreas — prevalente em Bulldog, Pug, Shih Tzu, Boston Terrier',
      prevalence: '> 50% dos braquicefálicos têm BOAS clinicamente significativa',
      protocols: [{
        id: 'p1', title: 'Protocolo BOAS', subtitle: 'Avaliação de grau, cirurgia corretiva e manejo de crises respiratórias',
        stages: [
          { id: 's1', label: 'Grau I — Leve', urgency: 'low', description: 'Ronco e esforço em exercício, sem sintomas em repouso.', signs: ['Ronco audível em repouso', 'Esforço ao exercício', 'Boa tolerância a atividades leves', 'Sem cianose'] },
          { id: 's2', label: 'Grau II — Moderado', urgency: 'moderate', description: 'Dispneia ao exercício e ao estresse.', signs: ['Dispneia ao exercício leve', 'Gasp (inspiração ruidosa)', 'Não tolera caminhadas longas', 'Cianose discreta ao esforço'] },
          { id: 's3', label: 'Grau III — Grave', urgency: 'emergency', description: 'Dispneia em repouso — risco de vida.', signs: ['Respiração laboriosa em repouso', 'Cianose', 'Colapso laríngeo', 'Incapaz de se exercitar', 'Episódios de asfixia'] },
        ],
        triggers: ['Estenose de narina (narinas muito estreitas)', 'Palato mole longo (obstrui a nasofaringe)', 'Traqueia hipoplásica (muito estreita)', 'Sáculos laríngeos evertidos', 'Colapso laríngeo (fase final)'],
        steps: [
          { title: 'Avaliação de grau BOAS', icon: '🔬', duration: 'Diagnóstico',
            description: 'Exame físico e teste de exercício padronizado definem o grau. TC de nasofaringe é o padrão ouro.',
            checklist: ['Teste de tolerância ao exercício (3 min caminhada)', 'Pletismografia de corpo inteiro: mede fluxo de ar', 'TC de cabeça e pescoço: avaliação completa das estruturas', 'Endoscopia nasofaríngea', 'Avaliação cardiológica se sopro associado'] },
          { title: 'Cirurgia corretiva precoce', icon: '✂️', duration: 'Indicação',
            description: 'Cirurgia precoce (< 2 anos) tem melhores resultados. Curar BOAS = abrir as vias aéreas.',
            checklist: ['Alargamento de narina (rinoplastia) — sempre indicado se estenose', 'Ressecção de palato mole — reduzir comprimento excessivo', 'Remoção de sáculos evertidos', 'Realizada em bloco — todas as correções numa cirurgia', 'Melhora imediata pós-cirúrgica em 80% dos casos'] },
          { title: 'Crise respiratória: primeiros socorros', icon: '🚨', duration: 'Emergência',
            description: 'Braquicefálico em crise respiratória: resfrie, acalme e veterinário URGENTE.',
            warning: 'Braquicefálico em ambiente quente com dispneia = risco de vida. NÃO force exercício.',
            checklist: ['Ambiente refrigerado (AC ou sombra com ventilação)', 'Oxigênio suplementar se disponível', 'Não excite o cão — excitação piora a dispneia', 'Collar leve (nunca coleira de pescoço em crise)', 'Veterinário de emergência imediatamente'] },
        ],
        checklists: [
          { label: 'Monitoramento Diário', freq: 'daily', items: ['Ronco mudou (piorou)?', 'Cão tolerou atividade de hoje?', 'Temperatura ambiente controlada?', 'Água fresca disponível?'] },
          { label: 'Verão — Emergência', freq: 'each_event', items: ['Cão está ofegante em repouso?', 'Mucosas rosadas (não azuis)?', 'Ambiente refrigerado?', 'Se azulado: emergência imediata'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Consulta com Especialista', tasks: ['Agende avaliação BOAS com cirurgião especializado', 'Documentação de vídeos de roncos e respiração', 'TC de nasofaringe se indicada'], note: 'Diagnóstico de grau define o tratamento' },
          { day: 2, label: 'Dia 2 — Adaptações de Emergência', tasks: ['Troque coleira por peitoral', 'Instale AC no ambiente do cão', 'Elimine exercícios intensos'], note: 'Peitoral não comprime a traqueia' },
          { day: 3, label: 'Dia 3 — Controle de Peso', tasks: ['Pese o cão', 'Braquicefálico obeso tem BOAS mais grave', 'Inicie dieta de controle se sobrepeso'], note: 'Obesidade agrava BOAS significativamente' },
          { day: 4, label: 'Dia 4 — Planejamento Cirúrgico', tasks: ['Discuta indicação cirúrgica com especialista', 'Custo e local de cirurgia', 'Resultados esperados'], note: 'Cirurgia antes dos 2 anos tem melhores resultados' },
          { day: 5, label: 'Dia 5 — Rotina Adaptada', tasks: ['Passeios curtos (10-15 min) em horários frescos', 'Sem corridas ou brincadeiras agitadas', 'Observar tolerância ao exercício'], note: 'Respeite os limites respiratórios' },
          { day: 6, label: 'Dia 6 — Pré-Cirúrgico', tasks: ['Hemograma e bioquímica pré-anestésicos', 'Ecocardiograma se ronco cardíaco', 'Jejum conforme orientação'], note: 'Braquicefálicos têm maior risco anestésico' },
          { day: 7, label: 'Dia 7 — Cirurgia ou Revisão', tasks: ['Cirurgia realizada?', 'Pós-operatório: monitoramento respiratório', 'Alta apenas após estabilização completa'], note: 'Monitoramento pós-cirúrgico rigoroso' },
        ],
        vetAlert: ['Cianose (mucosas azuis)', 'Colapso por asfixia', 'Gasp ruidoso em repouso', 'Crise respiratória em dia quente'],
        prevention: ['Teste genético e seleção de criadores que reduzem grau de braquicefalismo', 'Evitar reprodução de animais com BOAS grave', 'Controle de peso rigoroso', 'Cirurgia precoce'],
        myths: [
          { myth: 'Ronco em braquicefálico é normal — faz parte da raça', truth: 'Ronco intenso, dispneia ao exercício e intolerância ao calor indicam BOAS tratável. Não é "normal" e causa sofrimento.' },
          { myth: 'Cirurgia de BOAS é só estética', truth: 'BOAS grave sem cirurgia causa hipóxia crônica, hipertensão pulmonar e cardiopatia. A cirurgia é médica, não estética.' },
        ],
        faq: [
          { q: 'Com que idade devo operar meu Bulldog?', a: 'O ideal é entre 6 meses e 2 anos — quando as estruturas estão formadas mas o colapso laríngeo ainda não ocorreu. Cirurgia após o colapso laríngeo tem resultados piores.' },
          { q: 'Braquicefálico pode viajar de avião?', a: 'Altamente não recomendado no porão — hipóxia, estresse e temperatura causam mortes. Na cabine (se permitido pelo porte): possível com avaliação veterinária e formulário de saúde.' },
        ],
      }],
    },
    {
      id: 'estenose-narina', name: 'Estenose de Narina', emoji: '👃', gradient: 'g-blue',
      description: 'Narinas excessivamente estreitas — compromete 40-50% do fluxo de ar inspirado',
      prevalence: '50-80% dos braquicefálicos têm estenose de narina de algum grau',
      protocols: [{
        id: 'p1', title: 'Protocolo Estenose de Narina', subtitle: 'Rinoplastia com ala wedge ou punch — cirurgia de baixo risco e alta eficácia',
        stages: [
          { id: 's1', label: 'Leve', urgency: 'low', description: 'Narinas levemente estreitas — ronco ocasional.', signs: ['Narinas parcialmente abertas', 'Ronco leve', 'Exercício moderado tolerado'] },
          { id: 's2', label: 'Moderada a Grave', urgency: 'moderate', description: 'Narinas quase fechadas — esforço inspiratório constante.', signs: ['Narinas aparentemente fechadas (buracos mínimos)', 'Respiração predominantemente oral', 'Ronco intenso', 'Esforço ao qualquer exercício'] },
        ],
        triggers: ['Genética — raça braquicefálica', 'Tecido cartilaginoso excessivo nas asas nasais', 'Pressão negativa inspiratória que colapsa as narinas'],
        steps: [
          { title: 'Avaliação das narinas', icon: '🔬', duration: 'Diagnóstico',
            description: 'Exame visual simples — narinas de abertura mínima são claramente anormais.',
            checklist: ['Avaliação visual: abertura das narinas < 1/3 da abertura normal?', 'Fluxo de ar: coloque espelho ou laninha — pouco ou sem fluxo nasal?', 'Estadiamento com TC nasal e BOAS completo', 'Indicação cirúrgica quase sempre presente'] },
          { title: 'Rinoplastia (cirurgia de narina)', icon: '✂️', duration: 'Cirurgia eletiva',
            description: 'Remoção de cunha de cartilagem das asas nasais — procedimento rápido e eficaz. Melhora imediata do fluxo de ar.',
            checklist: ['Técnica Ala Wedge: remoção de triângulo de ala nasal', 'Técnica Punch: punch biopsia nas narinas', 'Cicatrização completa em 4-6 semanas', 'Resultado: aumento de fluxo aéreo de 50-80%', 'Geralmente associada ao palato e sáculos na mesma cirurgia'] },
        ],
        checklists: [
          { label: 'Pós-Operatório', freq: 'daily', items: ['Narinas sem crosta que obstrua?', 'Cão respira melhor?', 'Ronco diminuiu?', 'Colar elizabetano em uso?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Avaliação das narinas com cirurgião', 'Grau de estenose avaliado', 'Indicação cirúrgica discutida'], note: 'Quase sempre indicada em moderada/grave' },
          { day: 2, label: 'Dia 2 — Pré-Cirúrgico', tasks: ['Hemograma e bioquímica', 'Jejum conforme instrução', 'Ambiente calmo pré-cirurgia'], note: 'Braquicefálico tem maior risco anestésico' },
          { day: 3, label: 'Dia 3 — Cirurgia', tasks: ['Rinoplastia realizada', 'Colar elizabetano após', 'Observação pós-anestésica obrigatória'], note: 'Recuperação pós-anestésica é crítica em braquicefálicos' },
          { day: 4, label: 'Dia 4 — Pós-Op', tasks: ['Narinas com crosta? Limpe suavemente com soro', 'Anti-inflamatório dado?', 'Ronco já melhorou?'], note: 'Melhora respiratória imediata' },
          { day: 5, label: 'Dia 5 — Atividade', tasks: ['Atividade restrita por 7-10 dias', 'Sem piscina ou banho por 2 semanas', 'Monitoramento da cicatrização'], note: 'Cicatrização em 4-6 semanas' },
          { day: 6, label: 'Dia 6 — Avaliação', tasks: ['Cão respira melhor que antes?', 'Ronco diminuiu?', 'Exercício tolerado melhor?'], note: 'Resultado deve ser perceptível imediatamente' },
          { day: 7, label: 'Dia 7 — Retorno', tasks: ['Avaliação veterinária da cicatrização', 'Confirme resultado da rinoplastia', 'Próximos passos se BOAS completo'], note: 'Resultado ótimo em cirurgia precoce' },
        ],
        vetAlert: ['Cão não consegue respirar pelo nariz de jeito nenhum (narinas completamente ocluídas)', 'Crise respiratória pós-operatória'],
        prevention: ['Seleção de criadores conscientes que não perpetuam extremos anatômicos', 'Não reproduzir animais com BOAS grave'],
        myths: [
          { myth: 'Estenose de narina é cosmética — não precisa de cirurgia', truth: 'Narinas estreitas reduzem fluxo de ar em 50-80%. Sem cirurgia, o cão vive com hipóxia crônica e desenvolve colapso laríngeo.' },
        ],
        faq: [
          { q: 'A rinoplastia muda muito a aparência do cão?', a: 'A mudança é sutil mas significativa. A abertura das narinas melhora claramente sem alterar a "cara" característica da raça. Os tutores ficam frequentemente surpresos com como era possível não perceber antes.' },
        ],
      }],
    },
    {
      id: 'regurgitacao-braq', name: 'Megaesôfago & Regurgitação Braquicefálica', emoji: '🤮', gradient: 'g-amber',
      description: 'Regurgitação crônica em braquicefálicos por disfunção esofágica e DRGE',
      prevalence: '~20% dos braquicefálicos têm sinais gastrointestinais — frequentemente subestimados',
      protocols: [{
        id: 'p1', title: 'Protocolo DRGE Braquicefálica', subtitle: 'Alimentação em posição vertical, antiácidos e manejo da dismotilidade',
        stages: [
          { id: 's1', label: 'Regurgitação Leve', urgency: 'low', description: 'Regurgitação ocasional após as refeições.', signs: ['Regurgita 1-3x/semana', 'Comida mal digerida (sem bile)', 'Imediatamente ou minutos após comer', 'Peso estável'] },
          { id: 's2', label: 'Regurgitação Frequente', urgency: 'moderate', description: 'Regurgitação diária com risco de pneumonia por aspiração.', signs: ['Regurgita todos os dias', 'Perda de peso', 'Tosse após refeições', 'Risco de pneumonia aspirativa'] },
        ],
        triggers: ['DRGE (refluxo gastroesofágico) — principal causa em braquicefálicos', 'Hipomotilidade esofágica por neuropatia braquicefálica', 'Obesidade aumentando pressão abdominal', 'Esôfago de Barrett (complicação crônica)'],
        steps: [
          { title: 'Alimentação em posição vertical (Bailey Chair)', icon: '🪑', duration: 'Permanente',
            description: 'Cão come na posição vertical e permanece assim por 20-30 min após — gravidade ajuda a comida descer.',
            checklist: ['Bailey Chair: cadeira especial mantém cão vertical enquanto come', '20-30 min em posição vertical após cada refeição', 'Porções pequenas e frequentes (3-4x/dia)', 'Ração úmida ou mole: desce mais fácil que seco', 'Elevação da tigela (mesmo sem Bailey Chair) ajuda'] },
          { title: 'Antiácidos e procinéticos', icon: '💊', duration: 'Contínuo',
            description: 'Omeprazol reduz ácido gástrico e previne esofagite. Metoclopramida melhora motilidade esofágica.',
            checklist: ['Omeprazol 0,7-1mg/kg 1x/dia em jejum', 'Metoclopramida ou cisaprida (procinético)', 'Sucralfato 0,5-1g 2-3x/dia (proteção da mucosa)', 'Endoscopia esofágica se sem resposta ao tratamento'] },
        ],
        checklists: [
          { label: 'Pós-Refeição', freq: 'each_event', items: ['Cão ficou 20 min vertical?', 'Regurgitação após a refeição?', 'Tosse?', 'Porção adequada (não muito grande)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Endoscopia esofágica ou bário-esôfago', 'Avalie motilidade e DRGE', 'Inicie omeprazol'], note: 'Diferenciação de megaesôfago é importante' },
          { day: 2, label: 'Dia 2 — Posição de Alimentação', tasks: ['Monte Bailey Chair ou eleve a tigela', 'Ensine o cão a comer em posição elevada', 'Observe se regurgita imediatamente'], note: 'Posição vertical é o manejo mais eficaz' },
          { day: 3, label: 'Dia 3 — Porções Fracionadas', tasks: ['4 refeições pequenas ao invés de 2 grandes', 'Ração úmida ou amolecida', '20 min vertical após cada refeição'], note: 'Porções menores reduzem a pressão esofágica' },
          { day: 4, label: 'Dia 4 — Monitoramento', tasks: ['Frequência de regurgitação caiu?', 'Cão mais confortável após comer?', 'Tosse pós-prandial?'], note: 'Tosse sugere aspiração — risco de pneumonia' },
          { day: 5, label: 'Dia 5 — Raio-X de Tórax', tasks: ['Pneumonia por aspiração excluída?', 'Esôfago normal ao bário?', 'Mediastino alargado?'], note: 'Pneumonia é complicação grave' },
          { day: 6, label: 'Dia 6 — Ajuste Medicamentoso', tasks: ['Omeprazol em dia?', 'Procinético se dismotilidade?', 'Sucralfato se esofagite?'], note: 'Terapia combinada é mais eficaz' },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Regurgitação < 1x/dia?', 'Peso estável?', 'Cão se alimenta sem angústia?'], note: 'Meta: regurgitação < 3x/semana' },
        ],
        vetAlert: ['Pneumonia por aspiração (tosse, febre, dispneia)', 'Perda de peso progressiva', 'Cão não retém alimento algum'],
        prevention: ['Bailey Chair desde o desmame em raças braquicefálicas', 'Controle de peso', 'Evitar grandes refeições únicas'],
        myths: [
          { myth: 'Braquicefálico regurgitar é normal', truth: 'Regurgitação não é normal. É sinal de DRGE ou megaesôfago que pode evoluir para pneumonia por aspiração — potencialmente fatal.' },
        ],
        faq: [
          { q: 'Bailey Chair é realmente necessária?', a: 'Para megaesôfago verdadeiro, sim — é o manejo mais eficaz. Para DRGE braquicefálica, elevação da tigela + porções menores + omeprazol frequentemente suficiente.' },
        ],
      }],
    },
  ],
};
