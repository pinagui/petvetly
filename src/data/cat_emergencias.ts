import type { Category } from './types';

export const catEmergencias: Category = {
  id: 'emergencias',
  name: 'Emergências',
  emoji: '🚨',
  gradient: 'grad-red',
  description: 'Protocolos de emergência para situações que ameaçam a vida: intoxicação, engasgo, afogamento, convulsão, trauma e choque',
  conditions: [
    {
      id: 'intoxicacao',
      name: 'Intoxicação & Envenenamento',
      emoji: '☠️',
      gradient: 'grad-red',
      description: 'Ingestão de substâncias tóxicas incluindo chocolate, uva, xilitol, medicamentos humanos, raticidas e plantas ornamentais. Emergência comum com alta mortalidade se não tratada rapidamente.',
      prevalence: 'Uma das principais causas de emergência veterinária; chocolate e raticidas respondem por 40% dos casos.',
      protocols: [
        {
          id: 'proto-intoxicacao',
          title: 'Protocolo de Emergência em Intoxicações',
          subtitle: 'Identificar toxina, estabilizar e descontaminar',
          stages: [
            {
              id: 's0', label: 'Ingestão suspeita sem sintomas', description: 'Cão ingeriu substância tóxica mas ainda está assintomático.',
              signs: ['Tutor viu o cão ingerir a substância', 'Embalagem destruída/aberta encontrada perto do cão', 'Vômito com resíduos da substância'],
              urgency: 'high'
            },
            {
              id: 's1', label: 'Sintomas gastrointestinais', description: 'Primeiros sinais de toxicidade — maioria das intoxicações começa assim.',
              signs: ['Vômito repetido', 'Diarreia profusa (pode ter sangue)', 'Salivação excessiva', 'Dor abdominal à palpação', 'Inapetência'],
              urgency: 'high'
            },
            {
              id: 's2', label: 'Sinais sistêmicos', description: 'Toxina absorvida com comprometimento de órgãos.',
              signs: ['Tremores musculares ou convulsões', 'Ataxia (andar cambaleante)', 'Mucosas pálidas ou azuladas', 'Frequência cardíaca irregular', 'Pupilas dilatadas ou contraídas anormalmente', 'Respiração dificultosa'],
              urgency: 'emergency'
            },
            {
              id: 's3', label: 'Colapso / coma', description: 'Estado crítico com falência de múltiplos órgãos.',
              signs: ['Inconsciente ou não responsivo', 'Convulsões repetidas sem parar', 'Sangramento de múltiplos locais (raticida anticoagulante)', 'Temperatura corporal extremamente alta ou baixa', 'Parada respiratória'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Chocolate (teobromina): chocolate amargo/meio-amargo > ao leite > branco. Dose tóxica: 20mg teobromina/kg. 100g chocolate amargo pode ser letal para cão de 5kg',
            'Xilitol (adoçante): chiclete sem açúcar, pasta de dentes, algumas manteigas de amendoim. Hipoglicemia grave e falência hepática',
            'Uva e passa: insuficiência renal aguda — não existe dose segura',
            'Cebola, alho, cebolinha: anemia hemolítica por oxidação das hemácias',
            'Raticidas anticoagulantes (brodifacoum): sangramento interno após 2-5 dias',
            'Medicamentos humanos: ibuprofeno, paracetamol, AAS, antidepressivos',
            'Plantas: espirradeira, azaleia, lírio, copo-de-leite, sago palm',
            'Pesticidas organofosforados: carbaril, malatião',
            'Etanol: cão ingere bebida alcoólica, massa de pão crua (fermento produz álcool)',
            'Macadâmia: fraqueza, hipotermia, tremores'
          ],
          steps: [
            {
              title: 'PRIMEIRO: Identificar a toxina e quantidade',
              description: 'Antes de agir, identifique O QUE foi ingerido, QUANTO e HÁ QUANTO TEMPO. Essas informações são críticas para o veterinário calcular o risco e o tratamento.',
              duration: '2 minutos — urgente mas não atropele',
              icon: '🔍',
              checklist: [
                'Embalagem do produto: guarde para levar ao veterinário',
                'Quantidade estimada: quanto sobrou vs quanto havia?',
                'Horário da ingestão: há quanto tempo?',
                'Peso do cão: essencial para calcular dose tóxica',
                'Sintomas atuais: vômito, tremores, letargia?',
                'LIGUE para o veterinário antes de ir — eles se preparam'
              ],
              warning: 'Não induza vômito sem orientação veterinária. Para algumas toxinas (cáusticos, derivados de petróleo, espuma) o vômito causa mais dano. Água oxigenada em casa NÃO é recomendada — risco de esofagite.'
            },
            {
              title: 'Ligação para o veterinário/toxicologia',
              description: 'Ligue imediatamente. No Brasil, o CIATOX (Centro de Informações e Assistência em Toxicologia) pode orientar: 0800 722 6001. Muitos hospitais veterinários de emergência têm plantão 24h.',
              duration: 'Imediato — enquanto se prepara para ir',
              icon: '📞',
              checklist: [
                'CIATOX: 0800 722 6001 (gratuito, 24h)',
                'Ter em mãos: nome do produto, ingrediente ativo, quantidade, peso do cão, sintomas',
                'Veterinário de emergência mais próximo: pesquisar com antecedência',
                'Não espere sintomas para ligar se sabe que houve ingestão'
              ]
            },
            {
              title: 'Indução de vômito (SOMENTE com orientação veterinária)',
              description: 'Quando autorizado pelo veterinário, o protocolo padrão é solução salina hipertônica ou apomorfina (veterinário). NÃO use água oxigenada em casa — causa esofagite severa.',
              duration: 'Apenas se orientado e dentro de 1-2h da ingestão',
              icon: '🔄',
              checklist: [
                'Somente se veterinário autorizar por telefone',
                'Somente se ingestão < 2 horas',
                'Não induzir se: substância cáustica, derivado de petróleo, espuma, cão convulsionando, cão inconsciente',
                'Apomorfina: veterinário aplica no consultório',
                'Após vômito: não alimentar, ir ao veterinário mesmo assim'
              ]
            },
            {
              title: 'No veterinário: descontaminação e antídotos',
              description: 'O veterinário aplicará carvão ativado (adsorve toxinas), fluidoterapia IV para acelerar eliminação renal, e antídotos específicos quando disponíveis.',
              duration: 'Horas a dias dependendo da toxina',
              icon: '🏥',
              checklist: [
                'Carvão ativado: 1-4g/kg oral — adsorve toxinas ainda não absorvidas',
                'Fluidoterapia IV: diurese forçada para eliminar toxinas',
                'Vitamina K1: antídoto para raticida anticoagulante (4 semanas de tratamento)',
                'Dextrose IV: para intoxicação por xilitol (hipoglicemia)',
                'N-acetilcisteína: para paracetamol',
                'Atropina: para organofosforados',
                'Monitoramento ECG para cardiotóxicos (chocolaet, digital)'
              ]
            },
            {
              title: 'Chocolaet: cálculo de dose tóxica',
              description: 'Teobromina por 100g: chocolate amargo ~600mg, ao leite ~200mg, branco ~0-5mg. Dose tóxica leve: 20mg/kg. Dose letal: >100-200mg/kg.',
              duration: 'Cálculo imediato',
              icon: '🍫',
              checklist: [
                'Calcular: (mg teobromina no produto × gramas ingeridas) ÷ peso do cão em kg',
                'Cão de 5kg ingeriu 50g de chocolatee amargo: (600mg × 0,5) ÷ 5 = 60mg/kg → TÓXICO',
                'Acima de 20mg/kg: sinais gastrointestinais',
                'Acima de 40mg/kg: sinais cardíacos',
                'Acima de 60mg/kg: convulsões',
                'Chocolate branco: praticamente não tóxico'
              ]
            },
            {
              title: 'Raticida anticoagulante: janela de 48-72h',
              description: 'Os raticidas modernos (brodifacoum, bromadiolona) causam sangramentos que aparecem 2-5 DIAS após a ingestão. Não espere sangrar — trate imediatamente.',
              duration: 'Tratamento de 4-6 semanas com vitamina K1',
              icon: '🐀',
              checklist: [
                'Tosse com sangue, sangramento nasal, fezes negras = sinais tardios',
                'Iniciar vitamina K1 imediatamente após ingestão confirmada',
                'Não interromper antes de 4 semanas — efeito rebote',
                'Exame de coagulação (TP/TTPA) para monitorar resposta',
                'Isolamento de novas exposições ao raticida na casa'
              ],
              warning: 'Vitamina K3 (menadiona) NÃO substitui vitamina K1 para raticida. Use especificamente K1 (fitomenadiona).'
            }
          ],
          checklists: [
            {
              label: 'Lista de Toxinas em Casa — Verificação Mensal',
              freq: 'monthly',
              items: [
                'Chocolates guardados em local inacessível ao cão',
                'Xilitol: verificar gomas de mascar, pastas de dentes, adoçantes',
                'Raticidas: nunca usar em casa com cão — substituir por ratoeiras mecânicas',
                'Plantas ornamentais: verificar se há espirradeira, azaleia, sago palm',
                'Medicamentos humanos em gavetas fechadas',
                'Uvas e passas fora do alcance',
                'Limpadores ácidos/básicos em armários trancados'
              ]
            },
            {
              label: 'Kit de Emergência para Intoxicação',
              freq: 'monthly',
              items: [
                'Número do CIATOX salvo no celular: 0800 722 6001',
                'Endereço e telefone do veterinário de emergência 24h mais próximo',
                'Carvão ativado em pó (disponível em farmácias — manter em casa)',
                'Seringa de 20mL para administrar carvão se orientado',
                'Peso atual do cão anotado (atualizar mensalmente)'
              ]
            }
          ],
          vetAlert: [
            'Qualquer ingestão de xilitol, uva/passa, raticida — IMEDIATO',
            'Ingestão de quantidade tóxica de chocolate',
            'Convulsões',
            'Mucosas pálidas, azuladas ou ictéricas',
            'Sangramento de qualquer localização',
            'Cão inconsciente ou não responsivo',
            'Tremores musculares persistentes'
          ],
          prevention: [
            'Nunca dar alimentos humanos sem pesquisar toxicidade antes',
            'Guardar chocolates, gomas e adoçantes em locais inacessíveis',
            'Não usar raticidas — optar por ratoeiras mecânicas',
            'Verificar plantas da casa e jardim',
            'Manter medicamentos humanos em armários fechados',
            'Educar toda a família e visitantes sobre alimentos proibidos'
          ],
          myths: [
            { myth: 'Leite neutraliza veneno em cães', truth: 'Leite não tem efeito antídoto. Para algumas toxinas pode até piorar — acelera absorção de substâncias lipossolúveis.' },
            { myth: 'Água oxigenada em casa induz vômito com segurança', truth: 'Água oxigenada causa esofagite e gastrite severas. O protocolo correto é apomorfina aplicada pelo veterinário.' },
            { myth: 'Chocolaet ao leite é seguro — só o amargo mata', truth: 'Chocolate ao leite também é tóxico — apenas tem menor concentração de teobromina. Em grandes quantidades ou cães pequenos, pode ser fatal.' }
          ],
          faq: [
            { q: 'Meu cão comeu um pedaço pequeno de chocolaet — preciso ir ao veterinário?', a: 'Depende do tipo de chocolaet, da quantidade e do peso do cão. Calcule a dose de teobromina. Abaixo de 20mg/kg: monitore. Acima: vá ao veterinário.' },
            { q: 'Cão ingeriu folha de planta — como saber se é tóxica?', a: 'Fotografe a planta e pesquise no ASPCA Toxic Plant Database (em inglês) ou ligue para o CIATOX. Espirradeira, azaleia, sago palm, lírio e copo-de-leite são muito tóxicos.' },
            { q: 'Raticida foi colocado pelo vizinho — o que fazer?', a: 'Leve ao veterinário IMEDIATAMENTE mesmo sem sintomas. Iniciar vitamina K1 preventivamente é muito mais eficaz do que tratar sangramento estabelecido.' }
          ]
        }
      ]
    },
    {
      id: 'convulsao',
      name: 'Convulsão / Epilepsia',
      emoji: '⚡',
      gradient: 'grad-amber',
      description: 'Atividade elétrica cerebral anormal manifestada como movimentos involuntários, perda de consciência e alterações comportamentais. Pode ser epilepsia idiopática ou secundária a doenças.',
      prevalence: 'Epilepsia idiopática afeta 0,5-5% dos cães; mais comum em Beagle, Golden, Labrador, Dálmata e Border Collie.',
      protocols: [
        {
          id: 'proto-convulsao',
          title: 'Manejo da Convulsão Aguda',
          subtitle: 'O que fazer durante e após a crise convulsiva',
          stages: [
            {
              id: 's0', label: 'Prodromo (aura)', description: 'Comportamento incomum antes da crise — pode ser imperceptível.',
              signs: ['Inquietação súbita', 'Busca pelo tutor', 'Tremores leves ou tique muscular', 'Olhar fixo e distante (ausência)'],
              urgency: 'moderate'
            },
            {
              id: 's1', label: 'Crise ictus', description: 'A convulsão propriamente dita.',
              signs: ['Queda súbita', 'Movimentos involuntários de pernas (pedalar)', 'Mastigação involuntária (pode morder a língua)', 'Salivação excessiva / espuma na boca', 'Incontinência urinária ou fecal', 'Inconsciência'],
              urgency: 'high'
            },
            {
              id: 's2', label: 'Pós-ictal', description: 'Período após a convulsão — cão confuso e desorientado.',
              signs: ['Desorientação por minutos a horas', 'Cegueira temporária', 'Ataxia (andar tropeçando)', 'Sede e fome intensas', 'Dormir muito'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Status epilepticus', description: 'EMERGÊNCIA: Convulsão por mais de 5 minutos ou múltiplas sem recuperação.',
              signs: ['Convulsão que não para espontaneamente após 5 minutos', 'Segunda convulsão antes de recuperar consciência', 'Três ou mais convulsões em 24 horas', 'Temperatura corporal acima de 40°C por hipertermia'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Epilepsia idiopática: genética, sem causa identificável',
            'Hipoglicemia: filhotes pequenos, cães com insulinoma',
            'Hipocalcemia: fêmeas em lactação (tetania)',
            'Intoxicação: xilitol, organofosforados, metaldeído, isoniazida',
            'Lesão cerebral: trauma, tumor, encefalite',
            'Insuficiência hepática (encefalopatia hepática)',
            'Insuficiência renal avançada',
            'Febre alta (convulsão febril)'
          ],
          steps: [
            {
              title: 'Durante a convulsão: mantenha a calma e proteja',
              description: 'Você não pode parar a convulsão — só pode proteger o cão de se machucar. NÃO coloque a mão na boca dele.',
              duration: 'Duração da crise (geralmente 1-3 minutos)',
              icon: '🛡️',
              checklist: [
                'CRONOMETRE o início da convulsão (crítico para decisão de medicação)',
                'Afaste móveis e objetos duros ao redor',
                'Não segure o cão com força — risco de mordida involuntária',
                'Não coloque nada na boca — cão NÃO engole a língua',
                'Deite-o de lado para prevenir aspiração de secreções',
                'Apague luzes fortes, reduza barulho (reduz estimulação)',
                'Grave em vídeo se possível — auxilia o diagnóstico veterinário'
              ],
              warning: 'Nunca coloque a mão na boca de um cão convulsionando. A mordida é involuntária e pode ser grave. O cão não engole a língua — esse mito causa lesões nos tutores.'
            },
            {
              title: 'Se a convulsão passa de 5 minutos: ir ao veterinário AGORA',
              description: 'Status epilepticus é emergência neurológica. Cada minuto de convulsão causa dano neuronal progressivo e hipertermia perigosa.',
              duration: 'Ação imediata',
              icon: '🚨',
              checklist: [
                'Embrulhar o cão em toalha úmida fria (hipertermia)',
                'Alguém dirige, outro mantém o cão em posição lateral',
                'Ligar para o veterinário enquanto se desloca',
                'Diazepam retal (se prescrito previamente): 1mg/kg retal',
                'Informar: hora de início, duração, frequência das crises'
              ]
            },
            {
              title: 'Pós-convulsão: ambiente calmo e monitoramento',
              description: 'O período pós-ictal pode durar de minutos a horas. O cão pode estar temporariamente cego, desorientado ou agressivo — não o assuste.',
              duration: '1-24 horas',
              icon: '🌙',
              checklist: [
                'Ambiente escuro, silencioso e confortável',
                'Não oferecer água até o cão estar completamente consciente (risco de aspiração)',
                'Não deixe perto de escadas ou piscina (cegueira pós-ictal)',
                'Anotar: hora da crise, duração, comportamentos pós-ictais',
                'Consultar veterinário nas próximas 24h'
              ]
            },
            {
              title: 'Quando iniciar medicação anticonvulsivante',
              description: 'Nem toda crise requer medicação diária. Critérios para iniciar: 2+ crises/mês, status epilepticus, crise > 5 min, cluster (3+ em 24h) ou progressão de intensidade.',
              duration: 'Decisão veterinária',
              icon: '💊',
              checklist: [
                'Fenobarbital: primeira escolha, 2-5mg/kg 2x ao dia',
                'Brometo de potássio: adjuvante, 20-40mg/kg/dia',
                'Imepitoin: alternativa com menos efeitos colaterais',
                'Monitoramento sérico do fenobarbital a cada 3-6 meses',
                'Nunca interromper abruptamente — pode precipitar status epilepticus',
                'Hemograma e bioquímica a cada 6 meses (fenobarbital pode causar hepatotoxicidade)'
              ],
              warning: 'Fenobarbital causa aumento de fome, sede e sonolência nas primeiras semanas. Esses efeitos geralmente diminuem com o tempo.'
            }
          ],
          checklists: [
            {
              label: 'Diário de Convulsões',
              freq: 'each_event',
              items: [
                'Data e hora da crise',
                'Duração exata em minutos e segundos',
                'Tipo: parcial (apenas um lado), generalizada (todo o corpo)?',
                'Comportamento antes (prodromo): inquieto, buscou o tutor?',
                'Período pós-ictal: duração, cegueira, desorientação',
                'Possível gatilho: estresse, mudança de rotina, falta de sono?',
                'Vídeo gravado? Sim/Não'
              ]
            },
            {
              label: 'Monitoramento Mensal (Cão com Epilepsia Tratada)',
              freq: 'monthly',
              items: [
                'Frequência de crises no mês (comparar com meses anteriores)',
                'Efeitos colaterais da medicação: sedação excessiva, ataxia, polifagia',
                'Medicação sendo dada nos horários corretos?',
                'Exame de sangue em dia? (a cada 6 meses)',
                'Consulta veterinária agendada?'
              ]
            }
          ],
          vetAlert: [
            'Primeira convulsão — sempre investigar causa',
            'Convulsão com duração > 5 minutos (status epilepticus)',
            'Três ou mais convulsões em 24 horas',
            'Cão com epilepsia tratada: aumento de frequência ou intensidade',
            'Crise em filhote abaixo de 6 meses (pensar em hipoglicemia)',
            'Crise em fêmea em lactação (hipocalcemia — tetania)',
            'Febre acima de 40°C associada à crise'
          ],
          prevention: [
            'Manter medicação anticonvulsivante sem falhas — nunca pular dose',
            'Reduzir estressores conhecidos que precipitam crises',
            'Cão epiléptico não deve ficar próximo de piscinas sem supervisão',
            'Informar cuidadores e family sobre protocolo de emergência',
            'Nunca interromper medicação sem orientação veterinária'
          ],
          myths: [
            { myth: 'Cão engole a língua durante convulsão', truth: 'Impossível anatomicamente. Colocar a mão na boca do cão é perigoso e desnecessário.' },
            { myth: 'Jogar água fria para "acordar" o cão', truth: 'Não interrompe a convulsão e pode causar hipotermia. Água úmida é útil apenas para resfriar na hipertermia do status epilepticus.' },
            { myth: 'Epilepsia impede vida normal', truth: 'Com medicação adequada, a maioria dos cães epilépticos tem excelente qualidade de vida.' }
          ],
          faq: [
            { q: 'Epilepsia idiopática tem cura?', a: 'Não tem cura — é controle. Com medicação adequada, muitos cães chegam a ficar sem crises por meses ou anos.' },
            { q: 'Quanto tempo após a crise devo ir ao veterinário?', a: 'Se for a primeira crise, vá no mesmo dia. Se for cão epiléptico em tratamento com crise do padrão habitual, agende para os próximos 1-2 dias.' }
          ]
        }
      ]
    }
  ]
};
