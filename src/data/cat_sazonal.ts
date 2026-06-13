import type { Category } from './types';

export const catSazonal: Category = {
  id: 'sazonal', name: 'Sazonalidades', emoji: '🌡️', gradient: 'g-orange',
  description: 'Golpe de calor, hipotermia, alergias sazonais e condições climáticas extremas',
  conditions: [
    {
      id: 'golpe-calor', name: 'Golpe de Calor (Hipertermia)', emoji: '🔥', gradient: 'g-red',
      description: 'Temperatura corporal > 41°C — emergência fatal se não resfriada em minutos',
      prevalence: 'Frequente no verão brasileiro — mortalidade de 50% sem tratamento imediato',
      protocols: [{
        id: 'p1', title: 'Protocolo Golpe de Calor', subtitle: 'Resfriamento imediato, fluidos e monitoramento de órgãos',
        stages: [
          { id: 's1', label: 'Hipertermia Inicial (39,5-41°C)', urgency: 'high', description: 'Cão com temperatura elevada mas ainda responsivo.', signs: ['Ofega excessivamente', 'Salivação profusa', 'Mucosas vermelhas vivas', 'Inquietação', 'Busca por sombra e água'] },
          { id: 's2', label: 'Golpe de Calor (> 41°C)', urgency: 'emergency', description: 'Dano tecidual em curso — cada minuto causa dano irreversível.', signs: ['Temperatura > 41°C', 'Ataxia e desequilíbrio', 'Vômito', 'Diarreia sanguinolenta', 'Colapso', 'Convulsões', 'Mucosas cinzas ou azuladas'] },
          { id: 's3', label: 'Colapso / Disfunção Múltipla', urgency: 'emergency', description: 'Falência de múltiplos órgãos — CID, insuficiência renal, dano cerebral.', signs: ['Coma', 'Convulsões', 'CID (sangramento)', 'Anúria', 'Bradicardia'] },
        ],
        triggers: ['Confinamento em carro parado — temperatura interna sobe 10°C/10 min', 'Exercício intenso em clima quente e úmido', 'Raças braquicefálicas (Bulldog, Pug, Shih Tzu, Boxer)', 'Cão obeso ou idoso', 'Pelo longo e denso em clima tropical', 'Sem acesso a água ou sombra', 'Acorrentado sem sombra', 'Transporte em gaiola sem ventilação'],
        steps: [
          { title: 'RESFRIAMENTO IMEDIATO — primeiros 5 minutos', icon: '🚨', duration: 'AGORA',
            description: 'Cada minuto com temperatura alta causa dano cerebral permanente. Resfrie ANTES de ir ao veterinário.',
            warning: 'NÃO use água gelada ou gelo — causa vasoconstrição cutânea e retém calor. Use água fria de torneira.',
            checklist: ['MOVA para sombra ou local climatizado imediatamente', 'Molhe o cão com água FRIA de torneira (não gelada, não gelo)', 'Ventilador sobre o cão molhado (evaporação esfria)', 'Molhe especialmente as virilhas, axilas, região das patas e pescoço', 'Termômetro retal: monitorar temperatura a cada 2-3 min', 'PARE o resfriamento quando temperatura = 39,5°C (hipotermia é tão perigosa)', 'Deixe cão lamber água voluntariamente — nunca force ingestão'] },
          { title: 'Veterinário imediato (em paralelo com resfriamento)', icon: '🏥', duration: 'Urgente',
            description: 'Resfriamento domiciliar é apenas primeiro socorro — hospital é obrigatório.',
            checklist: ['Fluidos IV para hidratar e ajudar a regular temperatura', 'Tratamento de CID se estabelecida', 'Manitol IV se dano cerebral suspeito', 'Monitorar: ureia, creatinina (lesão renal)', 'Monitorar: tempo de coagulação (CID)', 'Oxigenoterapia se necessário', 'Temperatura monitorada continuamente'] },
          { title: 'Prevenção ativa no dia a dia', icon: '🌡️', duration: 'Verão',
            description: 'Prevenção é a melhor estratégia contra o golpe de calor.',
            checklist: ['NUNCA deixar cão em carro parado — nem por 5 minutos', 'Passeios: apenas antes das 8h ou após 17h no verão', 'Braquicefálicos e obesos: mais sensíveis — redobrar cuidado', 'Água fresca sempre disponível', 'Piscina ou kiddie pool: cão pode se refrescar sozinho', 'Colchão refrescante para descanso', 'Sombra permanente no quintal'] },
        ],
        checklists: [
          { label: 'Prevenção de Verão', freq: 'daily', items: ['Água fresca disponível o dia todo?', 'Passeio antes das 8h ou após 17h?', 'Cão na sombra com ventilação?', 'Quintal inspecionado (sem armadilhas de calor)?'] },
          { label: 'Recuperação Pós-Golpe', freq: 'daily', items: ['Temperatura < 39,5°C?', 'Fluidos sendo ingeridos?', 'Exames de rins e coagulação feitos?', 'Sem novos sintomas neurológicos?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Resfriamento com água fria de torneira', 'Ventilador', 'Veterinário IMEDIATAMENTE', 'Pare resfriamento em 39,5°C'], note: 'Cada minuto conta' },
          { day: 2, label: 'Dia 2 — Hospitalar', tasks: ['Fluidos IV', 'Monitoramento renal e coagulação', 'Temperatura estabilizada?'], note: 'Complicações aparecem em 24-48h' },
          { day: 3, label: 'Dia 3 — Órgãos', tasks: ['Ureia e creatinina?', 'Tempo de protrombina?', 'Urina de cor normal?'], note: 'Falência renal e CID são as piores complicações' },
          { day: 4, label: 'Dia 4 — Alta', tasks: ['Critérios de alta: temperatura normal, comendo, urinando', 'Atividade restrita por 1 semana', 'Evitar calor nas próximas semanas'], note: 'Cão pré-disposto a novos episódios' },
          { day: 5, label: 'Dia 5 — Em Casa', tasks: ['Climatizado ou bem ventilado?', 'Água fresca sempre', 'Atividade mínima'], note: 'Recuperação completa leva 1-2 semanas' },
          { day: 6, label: 'Dia 6 — Prevenção', tasks: ['Revise o ambiente para pontos de calor', 'Nunca mais carro parado', 'Passeios nos horários seguros'], note: 'Cão que teve golpe tem mais risco de recidiva' },
          { day: 7, label: 'Dia 7 — Exames de Controle', tasks: ['Função renal normalizada?', 'Cão alerta e com qualidade de vida?', 'Plano de verão reformulado?'], note: 'Complicações renais podem aparecer tardias' },
        ],
        vetAlert: ['Temperatura > 41°C', 'Colapso ou convulsão', 'Mucosas cinzas ou azuladas', 'Sangramento espontâneo (CID)'],
        prevention: ['NUNCA carro parado', 'Passeios matinais ou noturnos no verão', 'Água fresca sempre', 'Braquicefálicos: ar condicionado no verão é necessário'],
        myths: [
          { myth: 'Gelo ou água gelada esfria mais rápido', truth: 'Água gelada causa vasoconstrição cutânea — o calor fica preso dentro do corpo. Água fria de torneira (20°C) é ideal.' },
          { myth: 'Deixar a janela aberta é suficiente no carro', truth: 'Interior do carro com janela aberta pode atingir 55-60°C em dias quentes. Nunca deixe o cão em carro parado.' },
        ],
        faq: [
          { q: 'Quanto tempo posso deixar o cão em carro com ar condicionado?', a: 'Com o carro ligado e AC funcionando, o risco é baixo, mas: motor pode falhar, AC pode parar. A recomendação é: nunca deixar o cão no carro sem você.' },
          { q: 'Raspar o pelo no verão ajuda?', a: 'Depende da raça. Para raças de pelo duplo (Husky, Malamute, Chow Chow), a subpele isola do calor — não raspar. Para raças de pelo único longo, raspar moderadamente ajuda.' },
        ],
      }],
    },
    {
      id: 'hipotermia', name: 'Hipotermia', emoji: '❄️', gradient: 'g-cyan',
      description: 'Temperatura corporal < 37°C — emergência em filhotes, idosos e raças toy no inverno',
      prevalence: 'Risco alto em filhotes neonatos, cães de raças pequenas no inverno e pós-anestesia',
      protocols: [{
        id: 'p1', title: 'Protocolo Hipotermia', subtitle: 'Reaquecimento gradual e suporte de órgãos',
        stages: [
          { id: 's1', label: 'Leve (37-37,5°C)', urgency: 'moderate', description: 'Tremores, letargia — responde ao aquecimento.', signs: ['Tremores', 'Letargia', 'Pele fria ao toque', 'Frequência cardíaca lenta'] },
          { id: 's2', label: 'Moderada (32-37°C)', urgency: 'high', description: 'Músculo rígido, semiconsciente.', signs: ['Parada de tremer (perigo — calor perdido)', 'Rigidez muscular', 'Semiconsciente', 'Pupilas dilatadas', 'Arritmia cardíaca'] },
          { id: 's3', label: 'Grave (< 32°C)', urgency: 'emergency', description: 'Colapso cardiovascular iminente.', signs: ['Inconsciente', 'Sem trem..', 'Bradicardia extrema', 'Hipotensão', 'Parada cardíaca possível'] },
        ],
        triggers: ['Exposição prolongada ao frio sem abrigo', 'Filhotes neonatos separados da mãe', 'Cão molhado em ambiente frio (banho no inverno)', 'Pós-anestesia (temperatura cai durante cirurgia)', 'Choque de qualquer causa', 'Raças toy ou filhotes com hipoglicemia'],
        steps: [
          { title: 'Reaquecimento ativo externo', icon: '🔥', duration: 'Imediato',
            description: 'Reaquecimento GRADUAL — rápido demais causa vasodilatação periférica e piora.',
            warning: 'NÃO use bolsa de água quente diretamente na pele — causa queimaduras em cão hipotérmico. Envolva em toalha morna primeiro.',
            checklist: ['Envolva em cobertores aquecidos (secador em temperatura BAIXA para aquecer)', 'Bolsa de água quente envolto em toalha — nunca diretamente na pele', 'Ambiente aquecido (quarto com aquecedor ou banheiro fechado)', 'Líquidos mornos orais SE ALERTA E ENGOLE', 'Glicose oral (mel, xarope) se filhote ou pequeno porte', 'Monitorar temperatura a cada 10 minutos'] },
          { title: 'Veterinário para casos moderados/graves', icon: '🏥', duration: 'Urgente',
            description: 'Hipotermia moderada a grave requer fluidos IV aquecidos e monitoramento cardíaco.',
            checklist: ['Fluidos IV aquecidos (soro morno no microondas — mas verificar temperatura)', 'ECG: arritmias são comuns na hipotermia', 'Glicemia: filhotes hipotérmicos quase sempre hipoglicêmicos', 'Oxigênio suplementar', 'Enema de água morna (reaquecimento interno rápido e seguro)'] },
          { title: 'Filhote neonato: protocolo específico', icon: '🐕', duration: 'Urgente',
            description: 'Filhote hipotérmico precisa de reaquecimento imediato + glicose.',
            checklist: ['Aquecimento gradual no colo (calor corporal humano)', 'Mel ou xarope de glucose na mucosa gengival', 'Incubadora caseira: caixa com toalha morna e bolsa de água envolta', 'Temperatura alvo: 32-34°C na primeira semana de vida', 'Amamentar ou alimentar com seringa após aquecimento'] },
        ],
        checklists: [
          { label: 'Monitoramento no Inverno', freq: 'daily', items: ['Cão dormiu em local aquecido?', 'Filhotes com temperatura adequada?', 'Cão molhado foi secado completamente?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Reaquecimento', tasks: ['Inicie reaquecimento gradual imediatamente', 'Meça temperatura a cada 10 min', 'Veterinário se hipotermia moderada/grave'], note: 'Gradual é fundamental' },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Temperatura normal (37,5-39,2°C)?', 'Cão alerta e ativo?', 'Glicemia normal?'], note: 'Recuperação esperada em horas se leve' },
          { day: 3, label: 'Dia 3 — Investigação da Causa', tasks: ['Por que ocorreu? (ambiente, neonato, pós-cirúrgico)', 'Corrija o ambiente', 'Abrigo adequado para o inverno'], note: 'Eliminar causa para evitar recidiva' },
          { day: 4, label: 'Dia 4 — Ambiente de Inverno', tasks: ['Cama elevada do chão (frio do cimento)', 'Cobertor no canil', 'Filhotes com fonte de calor contínua'], note: 'Prevenção para o resto do inverno' },
          { day: 5, label: 'Dia 5', tasks: ['Cão 100% recuperado?', 'Ambiente invernal adequado?'], note: 'Monitoramento concluído' },
          { day: 6, label: 'Dia 6', tasks: ['Manutenção do ambiente aquecido', 'Secar cão após banho ou chuva'], note: 'Prevenção contínua' },
          { day: 7, label: 'Dia 7', tasks: ['Revisão do ambiente de inverno', 'Cão saudável e aquecido?'], note: 'Inverno seguro para o pet' },
        ],
        vetAlert: ['Temperatura < 35°C', 'Inconsciência', 'Arritmia cardíaca', 'Filhote neonato frio e imóvel'],
        prevention: ['Abrigo adequado no inverno', 'Cama elevada e cobertores', 'Secar completamente após banho ou chuva', 'Filhotes neonatos: temperatura constante 30-32°C nas primeiras semanas'],
        myths: [
          { myth: 'Raças de pelo curto são as únicas em risco de hipotermia', truth: 'Filhotes neonatos, cães idosos e toy de qualquer raça correm risco. A temperatura ambiente é tão importante quanto o tamanho da pelagem.' },
        ],
        faq: [
          { q: 'Banho no inverno é perigoso para cão?', a: 'Apenas se não secar completamente e imediatamente após. Secador em temperatura moderada, banho no período mais quente do dia e ambiente sem corrente de ar são suficientes.' },
        ],
      }],
    },
    {
      id: 'alergia-sazonal', name: 'Alergia Sazonal', emoji: '🌸', gradient: 'g-emerald',
      description: 'Exacerbação de dermatite atópica na primavera e verão — pólens e fungos ambientais',
      prevalence: 'Afeta 40% dos cães atópicos com padrão sazonal reconhecível',
      protocols: [{
        id: 'p1', title: 'Protocolo Alergia Sazonal', subtitle: 'Antígeno de pólen, banhos pós-exposição e imunoterapia',
        stages: [
          { id: 's1', label: 'Primavera/Verão', urgency: 'moderate', description: 'Cocceira sazonal — piora e melhora com as estações.', signs: ['Coceira intensa de setembro a março', 'Remissão no inverno', 'Patas, virilha, axilas afetadas', 'Lacrimejamento ocular'] },
          { id: 's2', label: 'Exacerbação', urgency: 'high', description: 'Infecção secundária e autolesão na fase aguda.', signs: ['Escoriações por coceira intensa', 'Piodermite secundária', 'Hot spots frequentes', 'Otite bilateral de repetição'] },
        ],
        triggers: ['Pólens de gramíneas (bermuda, tim-tim) — maior gatilho sazonal', 'Pólens de árvores (ipê, cipreste, betula)', 'Esporos de fungos (Alternaria, Cladosporium)', 'Ácaros em explosão no calor e umidade', 'Maior exposição externa no verão'],
        steps: [
          { title: 'Banho pós-passeio', icon: '🛁', duration: 'Após cada passeio',
            description: 'Remove pólens e alérgenos do pelo antes que causem reação.',
            checklist: ['Banho ou pedicure (lavar as patas) após cada passeio', 'Shampoo de aveia coloidal ou clorexidina suave', 'Secar as patas completamente (lambedura pós-passeio = alergia às patas)', 'Toalha úmida para limpar patas se banho completo não for viável'] },
          { title: 'Controle ambiental e medicamentoso', icon: '💊', duration: 'Sazonal',
            description: 'Oclacitinibe (Apoquel) ou lokivetmab (Cytopoint) para controle da coceira na temporada.',
            checklist: ['Oclacitinibe 0,4-0,6mg/kg 2x/dia × 14 dias, depois 1x/dia', 'Cytopoint SC: 2mg/kg (duração 4-8 semanas)', 'Antifúngico se Malassezia associada na temporada', 'Acompanhamento veterinário na chegada da primavera'] },
          { title: 'Imunoterapia (ASIT)', icon: '💉', duration: 'Longo prazo',
            description: 'Dessensibilização ao alérgeno específico — a única tratamento que modifica a doença.',
            checklist: ['Teste cutâneo ou sorológico para identificar alérgenos', 'Imunoterapia sublingual ou subcutânea com o alérgeno específico', 'Protocolo de 3-5 anos', 'Melhora progressiva — início de efeito em 6-12 meses', '70% dos cães respondem à imunoterapia'] },
        ],
        checklists: [
          { label: 'Controle Sazonal', freq: 'daily', items: ['Patas lavadas após passeio?', 'Medicação da temporada em dia?', 'Coceira controlada?'] },
          { label: 'Monitor de Alérgenos', freq: 'weekly', items: ['Época de floração no bairro?', 'Cão coceira mais em dias de mais pólen?', 'Relação temporal com plantas no jardim?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início da Temporada', tasks: ['Inicie medicação sazonal (oclacitinibe ou Cytopoint)', 'Banho após passeio hoje', 'Avalie coceira basal'], note: 'Iniciar antes do pico da estação' },
          { day: 2, label: 'Dia 2 — Rotina de Patas', tasks: ['Lave patas após cada passeio', 'Secagem completa', 'Observe redução da lambedura'], note: 'Alérgenos de contato via patas' },
          { day: 3, label: 'Dia 3 — Ambiente', tasks: ['Filtre o ar da casa (ar condicionado com filtro)', 'Aspire tapetes e sofá', 'Lave cama do cão'], note: 'Ácaros e pólens acumulam no ambiente' },
          { day: 4, label: 'Dia 4 — Suplementação', tasks: ['Ômega-3 para reforço da barreira', 'Probiótico para modulação imune', 'Dieta sem o alérgeno alimentar se suspeita'], note: 'Ômega-3 tem efeito anti-inflamatório' },
          { day: 5, label: 'Dia 5 — Avaliação', tasks: ['Coceira controlada?', 'Sem piodermite nova?', 'Olhos lacrimejantes?'], note: 'Olhos afetados: colírio anti-alérgico' },
          { day: 6, label: 'Dia 6 — Teste de Imunoterapia', tasks: ['Converse com dermatologista sobre ASIT', 'Teste cutâneo intradermal agendado?', 'Imunoterapia = única solução a longo prazo'], note: 'ASIT é a única opção modificadora de doença' },
          { day: 7, label: 'Dia 7 — Revisão Semanal', tasks: ['Melhora com o protocolo?', 'Medicação sendo usada corretamente?', 'Próxima temporada: iniciar mais cedo?'], note: 'Início precoce do tratamento = melhor controle' },
        ],
        vetAlert: ['Otite bilateral que não controla', 'Piodermite recorrente na temporada', 'Cão sem resposta aos medicamentos habituais'],
        prevention: ['Imunoterapia (dessensibilização) é o único tratamento preventivo eficaz', 'Iniciar medicação sazonal ANTES da temporada', 'Banhos pós-passeio na época de floração'],
        myths: [
          { myth: 'Alergia sazonal não precisa de tratamento — passa sozinha no inverno', truth: 'A remissão de inverno ocorre, mas cada temporada sem tratamento causa mais sensibilização. Com o tempo, a doença se torna perene.' },
        ],
        faq: [
          { q: 'Existe cura para a alergia sazonal?', a: 'Imunoterapia específica (ASIT) pode levar à remissão em 30% dos casos e melhora significativa em 70%. É o tratamento que mais se aproxima da cura.' },
        ],
      }],
    },
  ],
};
