import type { Category } from './types';

export const catHepatico: Category = {
  id: 'hepatico', name: 'Hepático & Pancreático', emoji: '🫀', gradient: 'g-amber',
  description: 'Hepatite, lipidose hepática, pancreatite crônica e doenças do fígado',
  conditions: [
    {
      id: 'hepatite-cronica', name: 'Hepatite Crônica', emoji: '🔴', gradient: 'g-amber',
      description: 'Inflamação hepática persistente levando a cirrose — diagnosticada frequentemente tarde',
      prevalence: '~3% dos cães; Dobermann, Labrador, Cocker, Bedlington Terrier predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Hepatite Crônica', subtitle: 'Diagnóstico por biópsia, hepatoprotetores e controle de cobre',
        stages: [
          { id: 's1', label: 'Compensada', urgency: 'moderate', description: 'Fígado ainda funcional apesar da inflamação.', signs: ['Enzimas hepáticas elevadas (ALT, FA)', 'Sem sinais clínicos evidentes', 'Achado incidental em exame de rotina', 'Leve polipsia/polidipsia'] },
          { id: 's2', label: 'Descompensada', urgency: 'high', description: 'Insuficiência hepática com manifestações clínicas.', signs: ['Icterícia', 'Ascite (barriga dágua)', 'Encefalopatia hepática (confusão)', 'Coagulopatia', 'Vômito e anorexia'] },
          { id: 's3', label: 'Cirrose / Terminal', urgency: 'emergency', description: 'Fibrose irreversível — fígado em colapso.', signs: ['Ascite refratária', 'Encefalopatia grave', 'Colapso', 'Falência múltipla de órgãos'] },
        ],
        triggers: ['Acúmulo de cobre (Dobermann, Bedlington — genético)', 'Hepatite infecciosa (adenovírus, leptospirose)', 'Drogas hepatotóxicas (NSAIDs, fenobarbital crônico)', 'Hepatite imuno-mediada (idiopática)', 'Aflatoxinas (ração contaminada)'],
        steps: [
          { title: 'Diagnóstico por biópsia', icon: '🔬', duration: 'Diagnóstico',
            description: 'Biópsia hepática é obrigatória para diagnóstico definitivo e quantificação de cobre.',
            checklist: ['Ultrassom hepático: tamanho, textura, vasculatura', 'Biópsia ecoguiada ou cirúrgica', 'Histopatologia + dosagem de cobre tecidual', 'Perfil hepático completo: ALT, FA, AST, bilirrubinas, albumina', 'Coagulograma antes da biópsia (coagulopatia contraindica)'] },
          { title: 'Tratamento da causa + hepatoprotetores', icon: '💊', duration: 'Contínuo',
            description: 'SAMe, silimarina e vitamina E são os hepatoprotetores mais evidenciados.',
            checklist: ['SAMe (S-adenosil metionina): 20mg/kg/dia em jejum', 'Silimarina (silybum marianum): 20-50mg/kg/dia', 'Vitamina E: 10-15 UI/kg/dia (antioxidante)', 'D-penicilamina ou zinco: quelação de cobre se acúmulo confirmado', 'Dieta com restrição de cobre e baixo sódio (ascite)', 'Evitar hepatotóxicos (NSAIDs, paracetamol, sulfa)'] },
          { title: 'Manejo da encefalopatia', icon: '🧠', duration: 'Se presente',
            description: 'Encefalopatia hepática = amônia elevada. Lactulose reduz produção intestinal.',
            checklist: ['Lactulose 0,5 mL/kg 2-3x/dia (acidifica cólon, reduz amônia)', 'Neomicina oral (reduz bactérias produtoras de amônia)', 'Dieta com proteína reduzida e de alta qualidade', 'Evitar benzodiazepínicos (metabolizados pelo fígado)', 'Aldactone (espironolactona) se ascite presente'] },
        ],
        checklists: [
          { label: 'Hepatoprotetores Diários', freq: 'daily', items: ['SAMe em jejum?', 'Silimarina dada?', 'Vitamina E?', 'Ração de dieta hepática?'] },
          { label: 'Monitoramento Mensal', freq: 'monthly', items: ['ALT, FA, bilirrubinas?', 'Albumina?', 'Ascite avaliada?', 'Encefalopatia?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico Completo', tasks: ['Ultrassom hepático', 'Perfil hepático completo', 'Biópsia se indicada'], note: 'Diagnóstico sem biópsia é incompleto' },
          { day: 2, label: 'Dia 2 — Início dos Hepatoprotetores', tasks: ['SAMe em jejum (30 min antes)', 'Silimarina com a refeição', 'Vitamina E com gordura'], note: 'Hepatoprotetores são a base do tratamento' },
          { day: 3, label: 'Dia 3 — Dieta Hepática', tasks: ['Troque para ração hepática ou dieta caseira orientada', 'Restrição de cobre se acúmulo', 'Evite petiscos com fígado, vísceras'], note: 'Dieta impacta evolução da doença' },
          { day: 4, label: 'Dia 4 — Eliminação de Hepatotóxicos', tasks: ['Revise todos os medicamentos em uso', 'NSAIDs devem ser substituídos', 'Ração de origem verificada (aflatoxinas)'], note: 'Hepatotóxicos são causa ou agravante' },
          { day: 5, label: 'Dia 5 — Ascite?', tasks: ['Abdômen distendido?', 'Espironolactona se ascite presente', 'Evitar alta ingestão de sódio'], note: 'Ascite = doença mais avançada' },
          { day: 6, label: 'Dia 6 — Qualidade de Vida', tasks: ['Cão come e está ativo?', 'Encefalopatia? (desorientação, vaguear)', 'Ajuste de lactulose se encefalopatia'], note: 'Encefalopatia responde bem à lactulose' },
          { day: 7, label: 'Dia 7 — Revisão e Plano', tasks: ['Exames de sangue na 4ª semana', 'Melhora de enzimas?', 'Plano de manutenção a longo prazo'], note: 'Hepatite crônica = acompanhamento vitalício' },
        ],
        vetAlert: ['Icterícia aguda', 'Ascite em aumento rápido', 'Encefalopatia (confusão, vaguear)', 'Coagulopatia (sangramentos)'],
        prevention: ['Raças de risco: exame hepático semestral', 'Evitar hepatotóxicos sem necessidade', 'Ração de boa procedência (aflatoxinas)', 'Vacinação em dia (adenovírus)'],
        myths: [
          { myth: 'Hepatite crônica em cão não tem tratamento', truth: 'Hepatoprotetores, dieta hepática e controle da causa base podem estabilizar a doença por anos. Diagnóstico precoce é fundamental.' },
        ],
        faq: [
          { q: 'Por quanto tempo meu cão deve tomar hepatoprotetores?', a: 'Na maioria dos casos, pelo resto da vida — especialmente SAMe e vitamina E. São seguros para uso prolongado.' },
        ],
      }],
    },
    {
      id: 'lipidose-hepatica', name: 'Lipidose Hepática', emoji: '🟡', gradient: 'g-amber',
      description: 'Acúmulo de gordura no fígado por jejum prolongado — menos comum que em gatos mas ocorre',
      prevalence: 'Menos frequente que em gatos mas ocorre em cães obesos em anorexia',
      protocols: [{
        id: 'p1', title: 'Protocolo Lipidose Canina', subtitle: 'Nutrição enteral forçada e hepatoprotetores',
        stages: [
          { id: 's1', label: 'Anorexia e Início', urgency: 'high', description: 'Cão obeso não come por > 3 dias.', signs: ['Anorexia > 3 dias', 'Letargia progressiva', 'Vômito', 'Enzimas hepáticas elevadas'] },
          { id: 's2', label: 'Lipidose Estabelecida', urgency: 'emergency', description: 'Icterícia e insuficiência hepática.', signs: ['Icterícia', 'Hipoglicemia', 'Coagulopatia', 'Encefalopatia hepática'] },
        ],
        triggers: ['Cão obeso em jejum prolongado (> 3-5 dias)', 'Mobilização de gordura corporal sobrecarrega o fígado', 'Qualquer causa de anorexia em cão obeso'],
        steps: [
          { title: 'Nutrição enteral urgente', icon: '🏥', duration: 'Hospitalar',
            description: 'Alimentação forçada via sonda é o tratamento mais importante. Cada dia sem nutrição piora o fígado.',
            checklist: ['Sonda nasogástrica ou de esofagostomia', 'Alimentação forçada calórica desde o dia 1', 'Fluidos IV com glicose', 'SAMe e silimarina por sonda', 'Antieméticos para facilitar a alimentação'] },
        ],
        checklists: [
          { label: 'Alimentação Diária', freq: 'daily', items: ['Alimentação via sonda feita?', 'Calorias alvo atingidas?', 'Icterícia diminuindo?', 'Glicemia normal?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Hospitalização imediata', 'Sonda de alimentação instalada', 'Fluidos IV e hepatoprotetores'], note: 'Alimentação forçada é obrigatória' },
          { day: 2, label: 'Dia 2 — Nutrição Contínua', tasks: ['Alimentação via sonda de 4 em 4h', 'SAMe por sonda', 'Glicemia monitorada'], note: 'Consistência na alimentação é a chave' },
          { day: 3, label: 'Dia 3 — Resposta ao Tratamento', tasks: ['Icterícia diminuindo?', 'Enzimas caindo?', 'Cão mais ativo?'], note: 'Melhora esperada em 3-7 dias' },
          { day: 4, label: 'Dia 4 — Introdução Oral', tasks: ['Tente oferecer alimento palatável', 'Complementar com sonda se necessário', 'Ração de fácil digestão'], note: 'Alimentação oral deve ser reintroduzida gradualmente' },
          { day: 5, label: 'Dia 5 — Alta ou Continuação', tasks: ['Comer voluntariamente > 50% das calorias?', 'Critério de alta: come, não ictérico, estável'], note: 'Alta hospitalar se come voluntariamente' },
          { day: 6, label: 'Dia 6 — Em Casa', tasks: ['Continue hepatoprotetores', 'Alimentação frequente em pequenas porções', 'Enzimas de controle em 1 semana'], note: 'Acompanhamento pós-alta importante' },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Enzimas de controle', 'Cão come voluntariamente?', 'Investigar causa da anorexia inicial'], note: 'Tratar a causa inicial é obrigatório' },
        ],
        vetAlert: ['Cão obeso sem comer por > 3 dias', 'Icterícia em cão obeso anorético', 'Hipoglicemia grave'],
        prevention: ['Controle de peso rigoroso', 'Nunca deixar cão obeso em dieta restritiva abrupta', 'Investigar qualquer anorexia > 2 dias em cão obeso'],
        myths: [],
        faq: [
          { q: 'Posso dieta forçada em cão obeso para emagrecer rápido?', a: 'Nunca. Restrição calórica brusca em cão obeso pode desencadear lipidose hepática. Emagrecimento deve ser gradual (1-2% do peso corporal por semana).' },
        ],
      }],
    },
    {
      id: 'shunt-portossistemico', name: 'Shunt Portossistêmico', emoji: '🔀', gradient: 'g-indigo',
      description: 'Comunicação anômala entre veia porta e circulação sistêmica — encefalopatia e crescimento retardado',
      prevalence: '0,5% dos cães; Yorkshire, Maltes, Cairn Terrier, Irish Wolfhound',
      protocols: [{
        id: 'p1', title: 'Protocolo Shunt Portossistêmico', subtitle: 'Diagnóstico por cintilografia/TC, cirurgia de atenuação e manejo médico',
        stages: [
          { id: 's1', label: 'Subclínico / Descoberta', urgency: 'moderate', description: 'Sintomas vagos — crescimento retardado, cão "pequeno para a raça".', signs: ['Crescimento abaixo do esperado', 'Microhepático (fígado pequeno)', 'Enzimas hepáticas elevadas discretamente', 'Ácidos biliares pós-prandiais elevados'] },
          { id: 's2', label: 'Encefalopatia', urgency: 'high', description: 'Acúmulo de amônia causando sinais neurológicos.', signs: ['Desorientação', 'Vaguear em círculos', 'Convulsões pós-refeição', 'Cegueira transitória', 'Hipersalivação'] },
        ],
        triggers: ['Shunt intra-hepático congênito (raças grandes)', 'Shunt extra-hepático congênito (raças toy)', 'Shunt adquirido por hipertensão portal (cirrose)'],
        steps: [
          { title: 'Diagnóstico confirmatório', icon: '🔬', duration: 'Diagnóstico',
            description: 'Dosagem de ácidos biliares pré e pós-prandial é o teste mais sensível.',
            checklist: ['Ácidos biliares pré e pós-prandial (2h após refeição)', 'Amônia sérica', 'Cintilografia de 99mTc: gold standard para diagnóstico e localização', 'TC abdominal: visualiza o vaso anômalo', 'Biópsia hepática durante cirurgia'] },
          { title: 'Cirurgia de atenuação', icon: '✂️', duration: 'Cirurgia',
            description: 'Atenuador ameróide ou banda de celofane: oclui gradualmente o shunt ao longo de semanas.',
            checklist: ['Centro veterinário especializado em hepatologia', 'Manejo médico pré-cirúrgico: lactulose, antibiótico, dieta', 'Cirurgia de atenuação ameróide (fechamento gradual)', 'Risco de hipertensão portal após cirurgia (monitoramento)', 'Prognóstico: 90% melhora clínica significativa'] },
          { title: 'Manejo médico (pré-cirúrgico ou definitivo)', icon: '💊', duration: 'Contínuo',
            description: 'Dieta com proteína moderada de alta qualidade + lactulose + antibiótico intestinal.',
            checklist: ['Dieta hepática com proteína vegetal/laticínio de alta qualidade', 'Lactulose 0,5 mL/kg 2-3x/dia', 'Metronidazol ou neomicina 2 semanas/mês', 'Ração em pequenas porções frequentes (reduz pico de amônia)', 'Zinco como hepatoprotetor'] },
        ],
        checklists: [
          { label: 'Monitoramento Diário', freq: 'daily', items: ['Desorientação presente?', 'Convulsão?', 'Lactulose dada?', 'Alimentação fracionada feita?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Ácidos biliares pós-prandial', 'Amônia sérica', 'TC ou cintilografia agendados'], note: 'Diagnóstico definitivo antes de tratamento' },
          { day: 2, label: 'Dia 2 — Manejo Médico Inicial', tasks: ['Lactulose 3x/dia', 'Ração em 4 porções pequenas', 'Metronidazol iniciado'], note: 'Reduzir amônia é a prioridade' },
          { day: 3, label: 'Dia 3 — Observação Neurológica', tasks: ['Encefalopatia melhorou?', 'Convulsão pós-refeição?', 'Comportamento mais normal?'], note: 'Melhora esperada em dias com lactulose' },
          { day: 4, label: 'Dia 4 — Planejamento Cirúrgico', tasks: ['Referência para cirurgião especializado', 'TC/cintilografia agendada', 'Idade ideal para cirurgia: 4-6 meses'], note: 'Cirurgia precoce melhora prognóstico' },
          { day: 5, label: 'Dia 5 — Dieta', tasks: ['Ração hepática introduzida', 'Dieta caseira: queijo cottage + arroz', 'Petiscos proteicos permitidos com moderação'], note: 'Proteína vegetal e laticínio são mais seguras' },
          { day: 6, label: 'Dia 6', tasks: ['Cão mais ativo e orientado?', 'Mantenha medicações', 'Próxima cirurgia planejada'], note: 'Manutenção até a cirurgia' },
          { day: 7, label: 'Dia 7 — Revisão Veterinária', tasks: ['Amônia sérica de controle', 'Ajuste de lactulose se necessário', 'Data da cirurgia confirmada'], note: 'Monitoramento semanal até a cirurgia' },
        ],
        vetAlert: ['Convulsão após refeição', 'Encefalopatia grave (coma)', 'Hipoglicemia grave em filhote'],
        prevention: ['Não reproduzir raças de risco sem investigação hereditária', 'Diagnóstico precoce em filhote com crescimento retardado'],
        myths: [
          { myth: 'Shunt é incurável — o cão vai morrer cedo', truth: 'Com cirurgia adequada, 90% dos cães têm vida normal e longa. O diagnóstico precoce e a cirurgia em centro especializado são determinantes.' },
        ],
        faq: [
          { q: 'Posso operar shunt no interior do país?', a: 'Shunt cirúrgico requer cirurgião veterinário especializado em hepatologia e hepato-cirurgia, com suporte de UTI veterinária. Busque um centro de referência.' },
        ],
      }],
    },
    {
      id: 'pancreatite-cronica', name: 'Pancreatite Crônica', emoji: '🔥', gradient: 'g-orange',
      description: 'Inflamação recorrente do pâncreas com lesão progressiva — diferente da pancreatite aguda',
      prevalence: 'Subdiagnosticada — frequente em Cavalier King Charles, Cocker Spaniel, raças toy',
      protocols: [{
        id: 'p1', title: 'Protocolo Pancreatite Crônica', subtitle: 'Dieta hipogordurosa, suplementação enzimática e manejo de flares',
        stages: [
          { id: 's1', label: 'Flare Leve', urgency: 'moderate', description: 'Episódio de dor abdominal com enzimas elevadas.', signs: ['Dor abdominal ao palpar o epigástrio', 'Vômito', 'Anorexia por 1-2 dias', 'Lipase pancreática elevada (cPL)'] },
          { id: 's2', label: 'Flare Grave', urgency: 'high', description: 'Crise com prostração e risco de complicações.', signs: ['Prostração', 'Vômito persistente', 'Dor abdominal intensa', 'Desidratação', 'Icterícia possível'] },
          { id: 's3', label: 'Insuficiência Exócrina (IPE)', urgency: 'moderate', description: 'Lesão permanente — cão não digere gordura.', signs: ['Fezes volumosas, gordurosas (esteatorreia)', 'Perda de peso progressiva', 'Polifagia', 'Coprografia (come fezes)', 'Pelo opaco'] },
        ],
        triggers: ['Dieta hipergordurosa (o gatilho mais comum)', 'Raças predispostas (Schnauzer — frequentemente com hiperlipidemia)', 'Hiperlipidemia familiar (Schnauzer, Shetland)', 'Hipercalcemia', 'Medicamentos (azatioprina, tetraciclina, sulfa)', 'Obesidade'],
        steps: [
          { title: 'Dieta hipogordurosa — base do tratamento', icon: '🥗', duration: 'Permanente',
            description: 'Gordura estimula secreção de colecistoquinina que ativa o pâncreas. Dieta < 8% de gordura é obrigatória.',
            checklist: ['Ração para pancreatite ou renal (baixa gordura < 8% MS)', 'NUNCA dar: bacon, queijo amarelo, pele de frango, linguiça', 'Proteína de alta qualidade e fácil digestão', 'Alimentação em 3-4 porções pequenas diárias', 'Petiscos: apenas frutas, cenoura cozida, ração light'] },
          { title: 'Flare agudo: jejum + fluidos', icon: '🏥', duration: 'Flare',
            description: 'Durante o flare: jejum de 12-24h (controvertido em cães), fluidos IV e antieméticos.',
            checklist: ['Veterinário durante flare moderado/grave', 'Fluidos IV para hidratação', 'Antiemético: maropitant IV', 'Analgesia: buprenorfina ou tramadol', 'Reiniciar alimentação: dieta líquida → pastosa → sólida', 'Alimentação enteral precoce preferível ao jejum prolongado'] },
          { title: 'Insuficiência pancreática exócrina (IPE)', icon: '💊', duration: 'Vitalício',
            description: 'IPE é consequência da pancreatite crônica. Terapia enzimática substitutiva.',
            checklist: ['Extrato pancreático pó (Pancrex Vet): misturar na ração imediatamente antes de servir', 'Dose: 1-2 colheres de chá por xícara de ração', 'B12 IM: frequentemente deficiente em IPE', 'Folato: avaliar deficiência', 'Dieta de alta digestibilidade'] },
        ],
        checklists: [
          { label: 'Prevenção de Flare', freq: 'daily', items: ['Sem gordura na ração?', 'Petiscos adequados (sem gordura)?', 'Nenhum alimento proibido hoje?', 'Fezes normais (sem gordura)?'] },
          { label: 'Enzimas (se IPE)', freq: 'each_event', items: ['Extrato pancreático misturado na ração?', 'Adicionado imediatamente antes de servir?', 'Fezes melhores após início das enzimas?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Flare ou Diagnóstico', tasks: ['Veterinário se flare ativo', 'cPL (lipase pancreática) para diagnóstico', 'Iniciar dieta hipogordurosa'], note: 'Dieta é o tratamento mais importante' },
          { day: 2, label: 'Dia 2 — Restrição Alimentar', tasks: ['Revise TODA a dieta atual', 'Elimine petiscos com gordura', 'Calcule a gordura da ração atual (< 8%?)'], note: 'Muitos tutores não percebem a gordura nos petiscos' },
          { day: 3, label: 'Dia 3 — Reintrodução Alimentar', tasks: ['Após flare: ração pastosa em pequena quantidade', 'Observe vômito ou dor', 'Progrida conforme tolerância'], note: 'Alimentação precoce acelera recuperação' },
          { day: 4, label: 'Dia 4 — Enzimas (se IPE)', tasks: ['Extrato pancreático prescrito?', 'Adicione à ração imediatamente antes de servir', 'Observe melhora das fezes em 1-2 semanas'], note: 'Enzimas devem ser adicionadas fresquinhas' },
          { day: 5, label: 'Dia 5 — Educação da Família', tasks: ['TODOS devem saber os alimentos proibidos', 'Visitas e crianças orientadas', 'Lista colada na geladeira'], note: 'Um petisco de bacon pode causar flare' },
          { day: 6, label: 'Dia 6 — Monitoramento', tasks: ['Fezes: normais, pastosas ou com gordura?', 'Cão come e está ativo?', 'Dor abdominal ao acordar?'], note: 'Esteatorreia indica IPE não controlada' },
          { day: 7, label: 'Dia 7 — Revisão', tasks: ['Flares esta semana?', 'Dieta hipogordurosa sendo seguida?', 'Próxima cPL de controle?'], note: 'Controle semestral de cPL' },
        ],
        vetAlert: ['Flare com prostração e vômitos incontroláveis', 'Icterícia', 'Dor abdominal intensa', 'Diabetes mellitus diagnosticada em cão com pancreatite (diabetes pancreatogênica)'],
        prevention: ['Dieta hipogordurosa permanente', 'Nunca oferecer bacon, linguiça, pele de frango, batata frita', 'Controle de hiperlipidemia em raças predispostas'],
        myths: [
          { myth: 'Um pouco de carne gordurosa ocasionalmente não faz mal', truth: 'Em cão com pancreatite crônica, UM episódio de dieta gordurosa pode desencadear flare grave e hospitalização. Zero tolerância.' },
        ],
        faq: [
          { q: 'Cão com pancreatite pode comer ração seca normal?', a: 'Depende da gordura da ração. Verifique sempre o percentual de gordura na análise garantida — deve ser < 8% na matéria seca. Rações light e rações renais geralmente atendem.' },
        ],
      }],
    },
  ],
};
