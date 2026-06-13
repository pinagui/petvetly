import type { Category } from './types';

export const catParasitas: Category = {
  id: 'parasitas',
  name: 'Parasitas',
  emoji: '🦟',
  gradient: 'grad-green',
  description: 'Pulgas, carrapatos, vermes intestinais, giárdia, leishmaniose e demais parasitoses — prevenção e tratamento',
  conditions: [
    {
      id: 'pulgas-carrapatos',
      name: 'Pulgas e Carrapatos',
      emoji: '🪲',
      gradient: 'grad-green',
      description: 'Ectoparasitas mais comuns em cães brasileiros. Pulgas causam dermatite alérgica, anemia e transmitem tênias. Carrapatos transmitem erliquiose, babesiose e febre maculosa.',
      prevalence: 'Infestação por pulgas afeta 40-80% dos cães sem proteção; carrapatos são endêmicos em todo o Brasil.',
      protocols: [
        {
          id: 'proto-pulgas-carrapatos',
          title: 'Controle de Pulgas e Carrapatos',
          subtitle: 'Tratamento do animal + desinfestação do ambiente',
          stages: [
            {
              id: 's0', label: 'Sem parasitas', description: 'Cão sem sinais de infestação, proteção preventiva ativa.',
              signs: ['Pelagem limpa sem ovos ou fezes de pulga', 'Sem coceira intensa', 'Sem carrapatos visíveis'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Infestação leve', description: 'Poucos parasitas presentes.',
              signs: ['Coça localizadamente', 'Pontos negros (fezes de pulga) no pelo', '1-5 carrapatos encontrados', 'Sem sinal de dermatite'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Infestação moderada com dermatite', description: 'Reação alérgica a saliva de pulga (DAPP).',
              signs: ['Coceira intensa, especialmente na base da cauda', 'Queda de pelo na região lombossacra', 'Lesões de pele por auto-traumatismo', 'Crostas e escoriações', 'Carrapatos em múltiplas localizações'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Infestação grave / doença transmitida', description: 'Anemia, erliquiose ou babesiose.',
              signs: ['Mucosas pálidas (anemia por pulgas em filhote)', 'Febre, prostração, sangramento (erliquiose)', 'Urina escura (babesiose)', 'Trombocitopenia (petéquias na pele)', 'Emagrecimento progressivo'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Ausência de antiparasitário preventivo',
            'Contato com ambiente infestado (parques, canis, mata)',
            'Outros animais infestados na mesma casa',
            'Clima quente e úmido (ciclo de pulga acelera)',
            'Quintal sem tratamento ambiental',
            'Viagem para área endêmica de doenças transmitidas por carrapatos'
          ],
          steps: [
            {
              title: 'Escolher o antiparasitário correto',
              description: 'O mercado tem opções variadas com diferentes princípios ativos, durações e espectros. A escolha depende do estilo de vida e risco do cão.',
              duration: 'Decisão inicial com veterinário',
              icon: '💊',
              checklist: [
                'Isoxazolinas (NexGard, Bravecto, Simparica, Credelio): oral, altamente eficaz, 1-3 meses',
                'Fluralaner (Bravecto): 3 meses para pulgas e carrapatos',
                'Afoxolaner (NexGard): mensal',
                'Lotilaner (Credelio): mensal',
                'Selamectina (Revolution): pipeta mensal + cobertura para ácaros e vermes',
                'Imidaclopride + permetrina (Advantix): pipeta mensal — NÃO usar em gatos',
                'Coleira Seresto (imidaclopride + flumetrina): 8 meses de proteção'
              ],
              warning: 'Produtos para cão NÃO devem ser usados em gatos — permetrina é altamente tóxica para felinos. Se tem gato e cão na mesma casa, escolha produtos seguros para ambas as espécies.'
            },
            {
              title: 'Tratamento da infestação aguda (dermatite)',
              description: 'Cão com DAPP (Dermatite Alérgica à Picada de Pulga) precisa de tratamento duplo: parasitário + dermatológico.',
              duration: '2-4 semanas',
              icon: '🛁',
              checklist: [
                'Antiparasitário de ação rápida (afoxolaner ou fluralaner)',
                'Banho com shampoo antiparasitário (permetrina 0,5%)',
                'Anti-inflamatório: prednisolona 1mg/kg por 5-7 dias para prurito',
                'Antibiótico se infecção secundária (cefalexina 25mg/kg 2x/dia)',
                'Colar elizabetano para prevenir automutilação',
                'Tratar TODOS os animais da casa simultaneamente'
              ]
            },
            {
              title: 'Desinfestação obrigatória do ambiente',
              description: '95% dos ovos, larvas e pupas de pulga estão no ambiente, não no cão. Sem tratamento ambiental, o cão se reinfesta em dias.',
              duration: 'Tratamento inicial + manutenção mensal',
              icon: '🏠',
              checklist: [
                'Lavagem de todas as roupas de cama do cão em > 60°C',
                'Aspiração INTENSA de tapetes, sofás, rodapés, frestas',
                'Jogar fora o saco do aspirador após usar',
                'Spray ambiental com IGR (Inibidor de Crescimento de Inseto): permetrina + metopreno/piriproxifeno',
                'Bomba de fumaça (bombinha inseticida) em casos graves — sair por 4h',
                'Tratar quintal: pó inseticida granulado em áreas de permanência do cão',
                'Repetir tratamento ambiental em 21 dias (ciclo do ovo à adulto)'
              ],
              warning: 'Remover cão, gatos, pássaros e peixes do ambiente durante aplicação de inseticida. Ventilação completa antes de retornar.'
            },
            {
              title: 'Remoção segura de carrapatos',
              description: 'A remoção incorreta de carrapato pode aumentar o risco de transmissão de doenças. Nunca esmagar, girar ou usar produtos sobre o carrapato enquanto está preso.',
              duration: 'Imediata ao encontrar',
              icon: '🔧',
              checklist: [
                'Pinça fina ou removedor específico de carrapato (tipo Tick Twister)',
                'Pegar o carrapato o mais próximo possível da pele',
                'Puxar com força constante, sem girar',
                'Não esmagar com os dedos — pode ter sangue contaminado',
                'Descartar em álcool ou envolto em fita adesiva (não no vaso)',
                'Limpar o local com álcool 70%',
                'Monitorar o cão por 2 semanas por sinais de erliquiose/babesiose'
              ],
              warning: 'Sinais de erliquiose (febre, prostração, sangramento) aparecem 1-3 semanas após a picada. Não espere — se o cão ficou exposto e apresentar esses sinais, vá ao veterinário imediatamente.'
            },
            {
              title: 'Monitorar doenças transmitidas por carrapatos',
              description: 'Erliquiose monocítica canina e babesiose são as mais comuns no Brasil. Febre maculosa (Rickettsia) é grave também para humanos.',
              duration: 'Monitoramento contínuo em áreas endêmicas',
              icon: '🔬',
              checklist: [
                'Sintomas de erliquiose: febre, apatia, perda de peso, sangramento nasal, petéquias',
                'Sintomas de babesiose: anemia grave, urina escura, icterícia, colapso',
                'Hemograma e plaquetas: ferramentas diagnósticas principais',
                'Erliquiose: doxiciclina 10mg/kg/dia por 28 dias',
                'Babesiose: dipropionato de imidocarb (aplicação veterinária)',
                'Prevenção de febre maculosa: usar repelente e verificar-se após trilhas'
              ]
            }
          ],
          checklists: [
            {
              label: 'Verificação Após Passeio em Área Verde',
              freq: 'each_event',
              items: [
                'Inspecionar todo o corpo: entre dedos, axilas, virilha, atrás das orelhas, pescoço, entre os dedos',
                'Remover carrapatos encontrados imediatamente',
                'Anotar se encontrou carrapatos (rastrear exposição)',
                'Verificar se antiparasitário está atualizado'
              ]
            },
            {
              label: 'Manutenção Mensal Anti-Pulgas',
              freq: 'monthly',
              items: [
                'Reaplicar antiparasitário no dia correto (marcar no calendário)',
                'Lavar roupas de cama do cão',
                'Aspirar tapetes e sofás',
                'Inspecionar cão para sinais de pulga (fezes pretas no pelo, coceira intensa)',
                'Tratar outros animais da casa no mesmo dia'
              ]
            }
          ],
          vetAlert: [
            'Mucosas pálidas em filhote com infestação intensa',
            'Febre + prostração + sangramento 1-3 semanas após exposição a carrapatos',
            'Urina escura (babesiose)',
            'Trombocitopenia (sangramentos espontâneos)',
            'Dermatite alérgica grave sem resposta a antiparasitário',
            'Carrapato não removível (morde e não sai)'
          ],
          prevention: [
            'Antiparasitário preventivo contínuo — nunca deixar passar da data',
            'Inspeção do cão após cada passeio em área verde',
            'Tratamento ambiental regular (quintal, cama, casa)',
            'Todos os animais da casa tratados simultaneamente',
            'Evitar áreas infestadas no verão sem proteção adequada'
          ],
          myths: [
            { myth: 'Produtos naturais (óleo de neem, eucalipto) são tão eficazes quanto antiparasitários', truth: 'Produtos naturais têm eficácia muito inferior e irregular. Podem reduzir infestação levemente mas não protegem contra doenças transmitidas por carrapatos.' },
            { myth: 'Girar o carrapato facilita a remoção', truth: 'Girar pode fazer a cabeça ficar presa e aumentar a injeção de patógenos. Puxar reto com pinça é o método correto.' },
            { myth: 'Carrapatos só existem no mato', truth: 'Infestações de carrapatos ocorrem em quintais urbanos, praças e parques. Qualquer área com grama e outros animais (pássaros, roedores) pode ter carrapatos.' }
          ],
          faq: [
            { q: 'Com que frequência devo dar antiparasitário?', a: 'Depende do produto: mensalmente (NexGard, Credelio, Revolution), a cada 3 meses (Bravecto oral), a cada 8 meses (coleira Seresto). Marcar no calendário e não atrasar.' },
            { q: 'Meu cão ficou com a cabeça do carrapato presa — o que fazer?', a: 'Geralmente o sistema imune resolve a peça restante. Limpe com álcool 70%, monitore para inflamação local. Se inflamar muito, consulte o veterinário para remoção com bisturi.' }
          ]
        }
      ]
    },
    {
      id: 'verminose',
      name: 'Verminose Intestinal',
      emoji: '🪱',
      gradient: 'grad-green',
      description: 'Parasitas intestinais incluindo áscaris (Toxocara), ancilostomídeos, giárdia e coccídia. Causa diarreia, perda de peso e risco zoonótico para humanos.',
      prevalence: 'Filhotes: infestação quase universal sem profilaxia. Adultos: 30-50% em cães sem vermifugação regular.',
      protocols: [
        {
          id: 'proto-verminose',
          title: 'Protocolo de Vermifugação e Tratamento',
          subtitle: 'Diagnóstico, tratamento e prevenção de parasitas intestinais',
          stages: [
            {
              id: 's0', label: 'Sem parasitas', description: 'Coproparasitológico negativo, vermifugação em dia.',
              signs: ['Fezes formadas e normais', 'Peso adequado para a idade', 'Apetite normal'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Infestação leve', description: 'Parasitas detectados mas sem impacto clínico grave.',
              signs: ['Diarreia leve e intermitente', 'Fezes com muco', 'Abdômen levemente distendido'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Infestação moderada', description: 'Impacto nutricional e gastrointestinal.',
              signs: ['Diarreia frequente, às vezes com sangue', 'Emagrecimento apesar de bom apetite', 'Pelo sem brilho', 'Abdômen em barril (filhote)', 'Tosse (larvas de Toxocara em migração — filhotes)'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Infestação grave em filhote', description: 'Risco de vida — anemia grave ou obstrução intestinal.',
              signs: ['Mucosas brancas/pálidas (anemia por ancilostomídeos)', 'Diarreia sanguinolenta profusa', 'Vômito com vermes visíveis', 'Prostração severa', 'Desidratação'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Sem vermifugação: risco constante',
            'Ingestão de fezes contaminadas (coprofagia)',
            'Transmissão transplacentária: filhote nasce com Toxocara da mãe',
            'Transmissão pelo leite materno: Toxocara, ancilostomídeo',
            'Ingestão de presa (roedores, insetos) contendo larvas',
            'Água e solo contaminados (Toxocara, Giárdia)',
            'Imunossupressão: coccídia prolifera em filhotes estressados'
          ],
          steps: [
            {
              title: 'Coproparasitológico para diagnóstico correto',
              description: 'Diferente vermífugo age em diferentes parasitas. Saber qual parasita está presente direciona o tratamento correto.',
              duration: 'Antes do tratamento em casos com sintomas',
              icon: '🔬',
              checklist: [
                'Coleta: fezes frescas (< 4h), 3 amostras em dias diferentes (aumenta sensibilidade)',
                'Flutuação em solução saturada (ovos de áscaris)',
                'Sedimentação (coccídeos)',
                'Elisa ou PCR fecal para Giárdia (mais sensível)',
                'Técnica de Baermann (Angiostrongylus em suspeita)',
                'Resultado: identificação de espécie é importante para escolha do tratamento'
              ]
            },
            {
              title: 'Protocolo de vermifugação por faixa etária',
              description: 'A frequência de vermifugação varia com a idade e o risco ambiental.',
              duration: 'Protocolo de longo prazo',
              icon: '💊',
              checklist: [
                'Filhotes: vermifugar a cada 15 dias do desmame até 3 meses, depois mensalmente até 6 meses',
                'Adultos: a cada 3-6 meses (risco baixo) ou a cada 2-3 meses (risco alto)',
                'Fêmea gestante: vermifugar na última semana de gestação (reduz transmissão ao filhote)',
                'Fenbendazol 50mg/kg/dia × 5 dias: Toxocara, ancilostomídeo, tricocéfalo',
                'Pirantel + praziquantel: áscaris + tênias',
                'Milbemicina + praziquantel (Milbemax): amplo espectro'
              ]
            },
            {
              title: 'Tratamento específico para Giárdia',
              description: 'Giárdia é protozoário — vermífugos comuns não a tratam. Exige metronidazol ou fenbendazol.',
              duration: '5-10 dias',
              icon: '🦠',
              checklist: [
                'Metronidazol 25mg/kg 2x/dia por 5-7 dias',
                'Fenbendazol 50mg/kg/dia × 5 dias (alternativa — menos efeitos colaterais)',
                'Associar probiótico (Lactobacillus, Enterococcus faecium)',
                'Higienização do ambiente: Giárdia é resistente a muitos desinfetantes comuns',
                'Tratar todos os animais da casa (zoonose — pode infectar humanos)',
                'Banho do cão para remover cistos do pelo'
              ],
              warning: 'Giárdia é zoonótica — lavar as mãos após contato com fezes do cão infectado. Crianças e imunossuprimidos têm maior risco de infecção.'
            },
            {
              title: 'Coccidiose em filhotes',
              description: 'Isospora e Cryptosporidium causam diarreia grave em filhotes estressados. Tratamento com sulfonamidas ou ponazuril.',
              duration: '5-14 dias',
              icon: '🩺',
              checklist: [
                'Sulfadimetoxina: 55mg/kg no 1º dia, depois 27,5mg/kg por 4-20 dias',
                'Ponazuril (Marquis): dose única 50mg/kg — off-label em cães mas eficaz',
                'Suporte: fluidoterapia se desidratado',
                'Reduzir estressores: calor, superlotação, desmame precoce',
                'Desinfetar o ambiente com amônia a 10% (eficaz contra Cryptosporidium)'
              ]
            }
          ],
          checklists: [
            {
              label: 'Vermifugação Rotineira',
              freq: 'monthly',
              items: [
                'Data da última vermifugação anotada',
                'Produto correto para a faixa etária e peso atual',
                'Coproparasitológico anual (confirmar eficácia)',
                'Fezes recolhidas da calçada (evitar contaminação ambiental)',
                'Mãos lavadas após mexer com fezes do cão'
              ]
            }
          ],
          vetAlert: [
            'Filhote com mucosas pálidas e diarreia sanguinolenta',
            'Vômito com vermes visíveis',
            'Diarreia com sangue sem melhora em 24h',
            'Emagrecimento progressivo apesar de boa alimentação',
            'Suspeita de obstrução intestinal por áscaris (abdômen rígido, vômito, sem fezes)'
          ],
          prevention: [
            'Vermifugação preventiva regular conforme protocolo',
            'Recolher fezes do cão imediatamente (evita contaminação ambiental)',
            'Não deixar cão coprofágico',
            'Água de boa procedência',
            'Controle de pulgas (intermediário de tênias)',
            'Higiene das mãos após contato com fezes'
          ],
          myths: [
            { myth: 'Vermífugo "de farmácia" serve para qualquer verme', truth: 'Diferentes princípios ativos têm espectros diferentes. Pirantel não trata Giárdia nem tênias. Fenbendazol é de espectro mais amplo.' },
            { myth: 'Cão que come bastante não tem verme', truth: 'Muitos parasitas causam polifagia (aumento do apetite) ao mesmo tempo que impedem a absorção nutricional.' }
          ],
          faq: [
            { q: 'Meu cão tem "pintinhos" nas fezes — são vermes?', a: '"Pintinhos" ou segmentos parecidos com arroz ou gergelim nas fezes são proglótides de tênias (Dipylidium — transmitido por pulga). Usar praziquantel + tratar pulgas simultaneamente.' },
            { q: 'Criança pode pegar verme do cão?', a: 'Sim — Toxocara canis (larva migrans visceral e ocular), Ancylostoma (larva migrans cutânea). Lavagem de mãos e recolher fezes são as principais prevenções.' }
          ]
        }
      ]
    }
  ]
};
