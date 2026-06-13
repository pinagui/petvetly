import type { Category } from './types';

export const catArticulacoes: Category = {
  id: 'articulacoes',
  name: 'Articulações & Ossos',
  emoji: '🦴',
  gradient: 'grad-orange',
  description: 'Displasia de quadril, artrose, luxação de patela, lesão de ligamento cruzado e problemas ortopédicos comuns em cães',
  conditions: [
    {
      id: 'displasia-quadril',
      name: 'Displasia de Quadril',
      emoji: '🦴',
      gradient: 'grad-orange',
      description: 'Desenvolvimento anormal da articulação coxofemoral causando frouxidão articular, desgaste progressivo e dor crônica. Principal causa de artrose e claudicação em cães de raças grandes.',
      prevalence: 'Afeta 15-70% de certas raças: Pastor Alemão, Labrador, Golden, Rottweiler, São Bernardo, Mastim.',
      protocols: [
        {
          id: 'proto-displasia',
          title: 'Manejo da Displasia de Quadril',
          subtitle: 'Controle da dor, fortalecimento muscular e qualidade de vida',
          stages: [
            {
              id: 's0', label: 'Displasia assintomática', description: 'Alteração radiológica sem sinais clínicos evidentes.',
              signs: ['Raio-X mostra subluxação leve', 'Cão não demonstra dor', 'Atividade física normal', 'Diagnóstico incidental em triagem genética'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Displasia leve com claudicação intermitente', description: 'Sinais aparentes após exercício intenso.',
              signs: ['Mancam após passeios longos', 'Dificuldade em subir escadas', 'Preferência por uma das patas traseiras', 'Relutância em pular', '"Andar de coelho" (patas traseiras juntas ao correr)'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'Displasia moderada com artrose', description: 'Dor contínua e limitação de movimento.',
              signs: ['Claudicação persistente, piora no frio/umidade', 'Dificuldade de se levantar do chão', 'Atrofia muscular das coxas', 'Dor à extensão do quadril', 'Crepitação à movimentação', 'Emagrecimento por inatividade'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Displasia grave / incapacitante', description: 'Articulação destruída, dor severa, locomoção prejudicada.',
              signs: ['Incapacidade de se levantar sem ajuda', 'Recusa total de exercício', 'Dor intensa à palpação do quadril', 'Perda de massa muscular severa', 'Decúbito lateral por horas'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Predisposição genética: raças de grande porte com seleção inadequada de reprodutores',
            'Crescimento rápido em filhotes alimentados com excesso de calorias ou cálcio',
            'Obesidade: cada kg extra aumenta a carga articular em 3-4kg',
            'Exercício excessivo de impacto em filhotes (< 1 ano): corrida em superfície dura, saltos',
            'Superfícies escorregadias constantes (piso de porcelanato)',
            'Trauma articular'
          ],
          steps: [
            {
              title: 'Diagnóstico radiológico e graduação',
              description: 'Raio-X em posição de ventrodorsal com cão em decúbito dorsal é o padrão. A Federação Internacional de Cinofilia (FCI) e OFA (Orthopedic Foundation) graduam de Excelente a Grave.',
              duration: 'Uma vez para diagnóstico; reavaliação anual',
              icon: '📸',
              checklist: [
                'Raio-X da pelve em posição estendida (padrão OFA)',
                'Graduação: A (sem displasia), B (borderline), C (leve), D (moderada), E (grave)',
                'PennHIP: método alternativo com melhor sensibilidade em filhotes',
                'Raio-X de coluna lombar associado (displasia pode causar espondilose)',
                'Avaliação da articulação do joelho (associação com lesão de cruzado)'
              ]
            },
            {
              title: 'Protocolo de analgesia multimodal',
              description: 'A dor é tratada com combinação de anti-inflamatório, suplementação e fisioterapia — raramente um medicamento isolado é suficiente.',
              duration: 'Tratamento crônico e individualizado',
              icon: '💊',
              checklist: [
                'Anti-inflamatório AINE veterinário: meloxicam 0,1mg/kg/dia ou carprofeno 2,2mg/kg 2x/dia',
                'Gabapentina: 5-10mg/kg 2-3x/dia para dor neuropática associada',
                'Tramadol: 2-5mg/kg 2-3x/dia para dor aguda intensa',
                'Nunca usar anti-inflamatórios humanos (ibuprofeno, nimesulida, diclofenaco) — são tóxicos para cães',
                'Associar protetor gástrico (omeprazol 0,7mg/kg) em tratamento prolongado com AINE'
              ],
              warning: 'AINEs por mais de 3-4 semanas exigem monitoramento hepático e renal. Solicitar bioquímica sérica a cada 3-6 meses.'
            },
            {
              title: 'Suplementação condromoduladora',
              description: 'Glucosamina + sulfato de condroitina + ômega-3 auxiliam na manutenção da cartilagem e têm efeito anti-inflamatório articular. Início de efeito em 4-8 semanas.',
              duration: 'Suplementação contínua',
              icon: '🌿',
              checklist: [
                'Glucosamina HCl: 20mg/kg/dia',
                'Sulfato de condroitina: 15mg/kg/dia',
                'Ômega-3 EPA+DHA: 50-100mg/kg/dia (óleo de peixe ou cápsula)',
                'Colágeno tipo II não hidrolisado (UC-II): 40mg/dia — superior ao hidrolisado para articulações',
                'CBD veterinário: evidências emergentes para dor articular'
              ]
            },
            {
              title: 'Fisioterapia e hidroterapia',
              description: 'A fisioterapia é fundamental — sem fortalecimento muscular, o tratamento medicamentoso tem resultado muito inferior. O músculo compensa a frouxidão articular.',
              duration: '2-3 sessões/semana por 3-6 meses, depois manutenção',
              icon: '🏊',
              checklist: [
                'Hidroterapia (esteira aquática ou piscina): sem impacto articular, fortalece musculatura',
                'Laser de baixa intensidade: reduz inflamação e dor',
                'Acupuntura veterinária: evidências em dor crônica articular',
                'Exercícios de propriocepção: tapete de borracha, discos inflados',
                'Massagem muscular dos membros posteriores: 10 min diários',
                'Em casa: cavaletti (pular sobre bastões baixos) fortalece os membros'
              ]
            },
            {
              title: 'Controle rigoroso de peso',
              description: 'A redução de 10% do peso corporal em cão obeso com displasia reduz a dor em grau equivalente à medicação. É o intervenção mais custo-efetiva.',
              duration: 'Permanente',
              icon: '⚖️',
              checklist: [
                'Meta: escore corporal 4-5/9',
                'Ração de controle de peso calculada por veterinário',
                'Exercício de baixo impacto: natação, caminhada lenta em superfície macia',
                'Evitar: correr em asfalto, saltos, superfícies escorregadias',
                'Tapete antiderrapante em todas as áreas de circulação'
              ]
            },
            {
              title: 'Cirurgia: opções para casos selecionados',
              description: 'Cirurgia pode oferecer melhor qualidade de vida em casos jovens ou graves sem resposta ao tratamento conservador.',
              duration: 'Avaliação com ortopedista veterinário',
              icon: '🔪',
              checklist: [
                'TPO (Triple Pelvic Osteotomy): em filhotes < 10 meses sem artrose',
                'FHO (Femoral Head Ostectomy): remove a cabeça do fêmur — funcional para cães < 25kg',
                'Prótese de quadril total: melhor resultado funcional, alto custo',
                'Indicação cirúrgica: dor sem controle com tratamento clínico ou cão jovem sem artrose',
                'Pós-operatório: fisioterapia obrigatória'
              ]
            },
            {
              title: 'Adaptações domiciliares',
              description: 'Modificações simples na casa reduzem a dor e o risco de lesão em cães com displasia.',
              duration: 'Permanente',
              icon: '🏠',
              checklist: [
                'Tapetes antiderrapantes em todos os cômodos',
                'Rampa para subir no sofá ou cama (se permitido)',
                'Cama ortopédica de espuma viscoelástica',
                'Comedouro elevado (reduce tensão no pescoço e coluna)',
                'Evitar escadas — usar rampa quando possível',
                'Aquecimento no inverno (dor articular piora no frio)'
              ]
            }
          ],
          checklists: [
            {
              label: 'Manejo Diário da Dor',
              freq: 'daily',
              items: [
                'Medicação no horário correto',
                'Suplementos dados junto com alimentação',
                'Exercício de baixo impacto (caminhada lenta 15-20 min)',
                'Massagem dos membros posteriores (5-10 min)',
                'Observar claudicação: piorou, melhorou ou igual?',
                'Verificar temperatura das articulações (calor = inflamação ativa)'
              ]
            },
            {
              label: 'Monitoramento Mensal',
              freq: 'monthly',
              items: [
                'Peso (manter no alvo)',
                'Avaliação subjetiva da dor: escala de 0-10',
                'Atrofia muscular das coxas: palpação',
                'Ajuste de medicação se necessário',
                'Fisioterapia em dia?'
              ]
            }
          ],
          vetAlert: [
            'Cão que não consegue se levantar',
            'Dor intensa sem resposta a AINE após 48-72h',
            'Crepitação ou estalos audíveis na articulação',
            'Atrofia muscular rápida e progressiva',
            'Temperatura local muito elevada (artrite séptica?)',
            'Cão para de comer por dor'
          ],
          prevention: [
            'Escolher criadores com triagem radiológica dos reprodutores (OFA/PennHIP)',
            'Alimentação controlada em filhotes de raças grandes (não sobrealimentar)',
            'Sem exercício de impacto até 12-18 meses (raças grandes)',
            'Controlar peso desde filhote',
            'Superfícies antiderrapantes desde cedo',
            'Suplementação preventiva em raças predispostas a partir de 1 ano'
          ],
          myths: [
            { myth: 'Displasia de quadril não tem tratamento', truth: 'Tem muitos tratamentos eficazes. Com manejo correto, muitos cães vivem com boa qualidade de vida por anos.' },
            { myth: 'Cirurgia é sempre necessária', truth: 'A maioria dos casos responde bem ao tratamento conservador (analgesia + fisioterapia + controle de peso). Cirurgia fica para casos refratários.' },
            { myth: 'Cão com displasia não pode se exercitar', truth: 'Exercício de baixo impacto é FUNDAMENTAL. Inatividade causa atrofia muscular que piora a condição articular.' }
          ],
          faq: [
            { q: 'Meu filhote foi diagnosticado com displasia. Ele vai sofrer para sempre?', a: 'Não necessariamente. Muitos cães com displasia controlada têm excelente qualidade de vida. O prognóstico depende da gravidade, controle de peso e adesão ao tratamento.' },
            { q: 'Glucosamina funciona mesmo?', a: 'As evidências são mistas para artrose estabelecida, mas o benefício na manutenção de cartilagem saudável é razoável. É segura e vale associar ao protocolo principal.' },
            { q: 'Posso usar curcumina ou gengibre para dor?', a: 'Curcumina tem alguma evidência anti-inflamatória, mas biodisponibilidade é baixa em cães. Não substitui AINEs em dor moderada/grave. Pode ser associado como suplemento.' }
          ]
        }
      ]
    },
    {
      id: 'luxacao-patela',
      name: 'Luxação de Patela',
      emoji: '🦵',
      gradient: 'grad-orange',
      description: 'Deslocamento da patela para fora do sulco troclear causando dor, claudicação e a característica marcha de "pular com três patas". Muito comum em raças pequenas.',
      prevalence: 'Segunda ortopedia mais prevalente em cães; Yorkshire, Poodle, Maltês, Chihuahua e Pomeranian têm > 50% de incidência.',
      protocols: [
        {
          id: 'proto-luxacao-patela',
          title: 'Manejo da Luxação de Patela',
          subtitle: 'Graduação, manejo conservador e indicação cirúrgica',
          stages: [
            {
              id: 's0', label: 'Grau I — Luxação ocasional', description: 'Patela luxa mas retorna espontaneamente.',
              signs: ['Ocasionalmente levanta a pata por alguns passos', 'Retorna ao normal sem manobra', 'Palpação: patela luxa com pressão mas retorna'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Grau II — Luxação frequente', description: 'Patela luxa com frequência, requer manobra para retornar.',
              signs: ['Claudicação intermitente — "pula" com 3 patas', 'Estende a perna para fazer a patela retornar', 'Episódios de 2-3 passos sobre 3 patas'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'Grau III — Luxação permanente redutível', description: 'Patela permanentemente luxada, mas pode ser reposicionada manualmente.',
              signs: ['Claudicação contínua', 'Patela permanentemente fora do lugar', 'Pode ser recolocada mas volta imediatamente', 'Inicio de deformidade óssea'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Grau IV — Luxação irreversível', description: 'Deformidade óssea grave, patela não pode ser reposicionada.',
              signs: ['Incapacidade de estender o joelho', 'Deformidade visível da perna', 'Rotação óssea do fêmur/tíbia', 'Artrose grave já estabelecida'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Predisposição genética: conformação anormal do sulco troclear',
            'Raças condrodistróficas (pequeno porte): conformação natural favorece luxação',
            'Trauma: queda, salto de altura',
            'Obesidade: peso extra força a articulação',
            'Superfícies escorregadias causando trauma articular repetitivo'
          ],
          steps: [
            {
              title: 'Avaliação e graduação pelo veterinário',
              description: 'O veterinário palpa a patela e gradua de I a IV. Raio-X avalia deformidade óssea e artrose.',
              duration: 'Diagnóstico inicial',
              icon: '🔍',
              checklist: [
                'Exame ortopédico com gradação da luxação',
                'Raio-X do joelho AP e lateral',
                'Avaliação de artrose secundária',
                'Verificar se há lesão de cruzado associada (comum em luxação grau III-IV)'
              ]
            },
            {
              title: 'Graus I-II: manejo conservador',
              description: 'Controle de peso, exercício moderado, suplementação e observação.',
              duration: 'Tratamento contínuo',
              icon: '🌿',
              checklist: [
                'Controle rigoroso de peso',
                'Evitar saltos de altura, escadas excessivas',
                'Superfícies antiderrapantes',
                'Glucosamina + condroitina + ômega-3',
                'Anti-inflamatório somente em episódios agudos de dor',
                'Fisioterapia para fortalecimento dos músculos periarticulares'
              ]
            },
            {
              title: 'Graus II-IV: avaliação cirúrgica',
              description: 'Luxação grau II com episódios frequentes, graus III e IV geralmente se beneficiam de cirurgia.',
              duration: 'Decisão com ortopedista veterinário',
              icon: '🔪',
              checklist: [
                'Trocleoplastia: aprofunda o sulco troclear',
                'Transposição da tuberosidade tibial: realinha o aparelho extensor',
                'Imbricação do retináculo medial/lateral',
                'Combinação de técnicas conforme o caso',
                'Pós-operatório: 6-8 semanas de restrição de atividade + fisioterapia'
              ],
              warning: 'Cirurgia em grau I assintomático geralmente não é indicada. Grau IV: prognóstico funcional depende do grau de deformidade óssea estabelecida.'
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Semanal (Graus I-II)',
              freq: 'weekly',
              items: [
                'Frequência dos episódios de claudicação esta semana',
                'Peso do cão: mantendo o alvo?',
                'Superfícies da casa têm tapete antiderrapante?',
                'Cão está pulando de alturas (sofá, cama)?'
              ]
            }
          ],
          vetAlert: [
            'Aumento súbito na frequência de episódios',
            'Cão para de apoiar a pata por mais de 24h',
            'Dor intensa ao toque do joelho',
            'Inchaço articular',
            'Progressão de grau II para III'
          ],
          prevention: [
            'Não comprar de criadores que não fazem triagem ortopédica',
            'Manter peso saudável desde filhote',
            'Tapetes antiderrapantes em casa',
            'Rampa para acesso a sofás e camas',
            'Não puxar ou segurar pela pata traseira'
          ],
          myths: [
            { myth: 'Luxação de patela grau I sempre vai para grau IV', truth: 'Muitos cães com grau I permanecem estáveis por anos com manejo adequado de peso e proteção articular.' },
            { myth: 'Cirurgia é sempre definitiva', truth: 'Há taxa de recorrência de 5-15% dependendo da técnica. O resultado depende da gravidade pré-operatória.' }
          ],
          faq: [
            { q: 'Meu Yorkshire "pula de três patas" às vezes mas parece não doer. Devo operar?', a: 'Provavelmente grau II. Avalie com ortopedista veterinário — operação é indicada quando compromete qualidade de vida ou há progressão. Grau II estável pode ser manejado conservadoramente.' },
            { q: 'A patela pode ser recolocada em casa?', a: 'Em grau I-II, alguns tutores aprendem a manobra. Mas isso não trata o problema — é apenas redução temporária. O diagnóstico e plano de tratamento precisam de veterinário.' }
          ]
        }
      ]
    }
  ]
};
