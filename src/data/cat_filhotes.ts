import type { Category } from './types';

export const catFilhotes: Category = {
  id: 'filhotes',
  name: 'Filhotes',
  emoji: '🐶',
  gradient: 'grad-pink',
  description: 'Cuidados essenciais com filhotes: vacinação, socialização, alimentação, vermifugação e desenvolvimento das primeiras semanas de vida',
  conditions: [
    {
      id: 'vacinacao-filhote',
      name: 'Calendário Vacinal do Filhote',
      emoji: '💉',
      gradient: 'grad-purple',
      description: 'Protocolo completo de vacinação do filhote do nascimento aos 16 meses, incluindo imunização ativa, imunidade materna e janelas de vulnerabilidade.',
      prevalence: 'Filhotes não vacinados têm mortalidade altíssima por cinomose e parvovirose — as principais causas de morte em filhotes no Brasil.',
      protocols: [
        {
          id: 'proto-vacinacao',
          title: 'Protocolo Vacinal Completo para Filhotes',
          subtitle: 'Do nascimento ao adulto jovem — com timing crítico',
          stages: [
            {
              id: 's0', label: 'Nascimento — 6 semanas', description: 'Imunidade passiva via colostro protege mas interfere com vacinas.',
              signs: ['Filhote saudável mama colostro nas primeiras 24h', 'Imunidade materna elevada (vacinas não são eficazes ainda)', 'Período de maior vulnerabilidade se a mãe não foi vacinada'],
              urgency: 'low'
            },
            {
              id: 's1', label: '6-8 semanas — Primeira vacinação', description: 'Início do protocolo vacinal.',
              signs: ['Anticorpos maternos começam a cair', 'Janela de vulnerabilidade se abre', 'Ideal iniciar V8/V10 com 6-8 semanas'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: '8-16 semanas — Série primária', description: 'Série de 3-4 doses para garantir imunização completa.',
              signs: ['Reforços a cada 2-4 semanas', 'Imunidade materna interfere com eficácia', 'Última dose deve ser após 16 semanas para máxima proteção'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Sem vacinação — Risco máximo', description: 'Filhote exposto sem imunização completa.',
              signs: ['Parvovirose: vômito hemorrágico, diarreia com sangue, prostração extrema', 'Cinomose: secreção ocular e nasal, tosse, convulsão', 'Mortalidade muito alta sem tratamento imediato'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Abandono do protocolo antes de completar a série primária',
            'Mãe sem vacinação atualizada = filhote sem imunidade passiva',
            'Frequentar parques, petshops ou contato com cães antes de completar a vacinação',
            'Comprar filhote de criadouros sem vacinação ou sem rastreabilidade',
            'Falha de conservação das vacinas (cadeia de frio quebrada)'
          ],
          steps: [
            {
              title: 'Protocolo vacinal padrão WSAVA para filhotes',
              description: 'Vacinas core (obrigatórias para todos): Cinomose + Adenovírus + Parvovirose (CDV+CAV+CPV) — presentes na V8/V10.',
              duration: 'Dos 6-8 semanas até 16 semanas + reforço em 1 ano',
              icon: '💉',
              checklist: [
                '6-8 semanas: V8 ou V10 dose 1 (CDV+CAV+CPV+Leptospira+outros)',
                '10-12 semanas: V8 dose 2 (reforço)',
                '14-16 semanas: V8 dose 3 (finaliza a série — DEVE ser após 14 semanas)',
                '6 meses: antirrábica (obrigatória por lei no Brasil)',
                '12-16 meses: reforço anual V8/V10 + raiva',
                'Adulto: reforço anual ou triênio conforme protocolo e produto'
              ],
              warning: 'A série primária NÃO está completa até a dose após 14-16 semanas. Filhotes que recebem apenas 1-2 doses podem NÃO estar imunizados, pois a imunidade materna interfere com as primeiras doses.'
            },
            {
              title: 'Vacinas não-core (conforme risco e estilo de vida)',
              description: 'Vacinas adicionais recomendadas conforme exposição do cão.',
              duration: 'Conforme necessidade',
              icon: '🛡️',
              checklist: [
                'Bordetella bronchiseptica: se frequentar canil, pet shop, adestramento',
                'Gripe canina (H3N2/H3N8): áreas de alta densidade de cães',
                'Leptospira: incluída na maioria das V8/V10 brasileiras',
                'Giárdia: disponível no Brasil, para cães com alto risco de contaminação',
                'Leishmaniose: vacina Leishvet ou LetiFend — área endêmica ou cão viajante'
              ]
            },
            {
              title: 'Restrições antes de completar a vacinação',
              description: 'O filhote não está totalmente protegido até ~1 semana após a última dose da série primária (após 14-16 semanas).',
              duration: 'Até completar a série primária',
              icon: '⚠️',
              checklist: [
                'Não deixar farejar fezes de outros cães na rua',
                'Não frequentar parques, petshops ou áreas coletivas',
                'Não ter contato com cão desconhecido não vacinado',
                'Pode visitar domicílios de cães vacinados com dono confirmado',
                'Socialização em casa é SEGURA e NECESSÁRIA mesmo antes de completar a vacinação',
                'Caregar no colo em passeios curtos para exposição visual ao mundo'
              ],
              warning: 'Janela de risco existe, mas isolamento total até 16 semanas causa danos permanentes à socialização. Equilibrar os riscos — socialização em ambientes seguros e controlados é prioritária.'
            },
            {
              title: 'Socialização no período crítico (3-14 semanas)',
              description: 'A janela de socialização (especialmente 3-12 semanas) é o período mais importante para o desenvolvimento comportamental do filhote. O que não é apresentado nessa fase pode gerar medos para toda a vida.',
              duration: 'Intensivo nas primeiras 16 semanas',
              icon: '🌍',
              checklist: [
                'Exposição a diferentes pessoas: homens, mulheres, crianças, idosos, uniformes',
                'Sons: aspirador, trovão, foguete, barulho de rua (usar CDs de dessensibilização)',
                'Superfícies: grama, areia, pedra, madeira, grade',
                'Manipulação: orelhas, patas, boca, barriga — preparar para o veterinário',
                'Outros animais (vacinados): gatos, cães adultos calmos',
                'Viagens de carro desde pequeno'
              ]
            }
          ],
          checklists: [
            {
              label: 'Checklist do Filhote Recém-Chegado',
              freq: 'each_event',
              items: [
                'Consulta veterinária nas primeiras 24-48h',
                'Verificar carteirinha de vacinação e vermifugação',
                'Peso: base para calcular doses de medicamento',
                'Ambiente preparado: cama, comedouro, bebedouro, brinquedos',
                'Primeiras horas: local calmo, deixar explorar no próprio ritmo',
                'Não banho nas primeiras 48h (estresse + hipotermia)',
                'Separar de outros animais nas primeiras 24-48h para avaliação de saúde'
              ]
            },
            {
              label: 'Acompanhamento Mensal do Filhote',
              freq: 'monthly',
              items: [
                'Peso e escore corporal',
                'Próxima vacina: verificar data',
                'Vermifugação: em dia conforme protocolo?',
                'Desenvolvimento comportamental: algum sinal de medo excessivo?',
                'Dentes de leite: algum permanente surgindo fora do lugar?'
              ]
            }
          ],
          vetAlert: [
            'Filhote não vacinado com vômito e diarreia — parvovirose possível',
            'Prostração extrema em filhote de qualquer idade',
            'Dificuldade respiratória (pneumonia por cinomose)',
            'Convulsão em filhote',
            'Hipoglicemia: filhote fraco, tremendo, não mama',
            'Temperatura < 36°C ou > 40°C'
          ],
          prevention: [
            'Completar a série vacinal corretamente — não abandonar no meio',
            'Mãe vacinada antes da gestação',
            'Comprar apenas de criadouros confiáveis com documentação',
            'Não frequentar ambientes coletivos antes de completar vacinação',
            'Socialização controlada e segura mesmo antes de completar a vacinação'
          ],
          myths: [
            { myth: 'Uma vacina é suficiente para imunizar o filhote', truth: 'A série primária requer 3 doses com timing correto. Uma ou duas doses pode não conferir imunidade adequada por interferência da imunidade materna.' },
            { myth: 'Filhote deve ser isolado completamente até completar a vacinação', truth: 'Isolamento total prejudica a socialização de forma permanente. Socialização controlada em ambientes seguros é segura e fundamental.' }
          ],
          faq: [
            { q: 'Posso vacinar o filhote em casa?', a: 'Tecnicamente possível mas não recomendado. A vacina precisa de conservação adequada (2-8°C), técnica correta e avaliação de saúde antes de aplicar. O risco de erro é alto.' },
            { q: 'Meu filhote está com a vacina atrasada — como proceder?', a: 'Reiniciar o protocolo se o atraso for > 4-6 semanas da segunda dose. Não é necessário recomeçar do zero para a segunda dose se o atraso for de dias a 2 semanas.' }
          ]
        }
      ]
    },
    {
      id: 'cuidados-neonatais',
      name: 'Cuidados Neonatais (0-4 semanas)',
      emoji: '🍼',
      gradient: 'grad-pink',
      description: 'Os primeiros dias de vida são críticos. Hipotermia, hipoglicemia e falta de colostro são as principais causas de morte neonatal em cães.',
      prevalence: 'Mortalidade neonatal de 10-30% em filhotes — mais de 50% ocorre nas primeiras 2 semanas.',
      protocols: [
        {
          id: 'proto-neonatal',
          title: 'Cuidados com Filhotes Neonatos',
          subtitle: 'Temperatura, alimentação e sinais de alerta nas primeiras semanas',
          stages: [
            {
              id: 's0', label: 'Neonato saudável', description: 'Filhote ativo, mamando e ganhando peso.',
              signs: ['Mama com vigor nas primeiras horas', 'Ganha 5-10% do peso ao nascimento por dia', 'Cor rosada das mucosas', 'Reflexo de orientação ativo (vai em direção ao calor)', 'Vocalização quando separado da mãe'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Sinal de alerta precoce', description: 'Filhote que não mama ou não ganha peso.',
              signs: ['Sem ganho de peso em 24h', 'Não encontra os mamilos', 'Chora excessivamente', 'Separado dos irmãos (não busca calor)'],
              urgency: 'high'
            },
            {
              id: 's2', label: 'Emergência neonatal', description: 'Hipoglicemia ou hipotermia.',
              signs: ['Temperatura < 34°C (hipotermia)', 'Tremores ou convulsões (hipoglicemia)', 'Mucosas pálidas ou azuladas', 'Sem reflexo de sucção', 'Fraqueza extrema — não levanta a cabeça'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Temperatura ambiente muito fria (< 29-32°C nas primeiras semanas)',
            'Mãe sem leite ou rejeitando os filhotes',
            'Filhote de baixo peso ao nascimento',
            'Ninhada grande (competição pelos mamilos)',
            'Mãe primípara sem instinto maternal',
            'Fading puppy syndrome: causa multifatorial, filhote que "murcha"'
          ],
          steps: [
            {
              title: 'Controle de temperatura — prioridade máxima',
              description: 'Filhotes não regulam temperatura corporal até ~4 semanas. Hipotermia é a principal causa de morte neonatal.',
              duration: '24h por dia nas primeiras 4 semanas',
              icon: '🌡️',
              checklist: [
                'Semana 1-2: 29-32°C no ninho',
                'Semana 3-4: 26-29°C',
                'Mês 1-2: 22-24°C já é suficiente',
                'Fonte de calor: bolsa de água quente embrulhada em toalha, tapete térmico veterinário',
                'Nunca colocar em contato direto com fonte de calor (queimaduras)',
                'Verificar temperatura retal do filhote: deve ser 35-37°C nas primeiras semanas'
              ]
            },
            {
              title: 'Suplementação quando a mãe não tem leite suficiente',
              description: 'Leite de vaca NÃO serve — proteína e lactose são diferentes. Usar substituto de leite canino comercial (Royal Canin Babydog Milk, Nutri-Vet) ou receita emergencial.',
              duration: 'A cada 2-4h conforme peso',
              icon: '🍼',
              checklist: [
                'Substituto comercial: melhor opção (Royal Canin, Esbilac)',
                'Receita emergencial: 90mL leite integral, 10mL creme de leite, 1 gema de ovo, 1mL mel',
                'Volume: 15-20% do peso corporal por dia dividido em 8-12 mamadas',
                'Mamadeira com bico fino ou sonda oro-gástrica (veterinário ensina a técnica)',
                'Temperatura do leite: 38°C',
                'Estimular evacuação após cada mamada: massagem suave na região anal com algodão úmido'
              ],
              warning: 'Leite de vaca comum causa diarreia osmótica grave por excesso de lactose. Leite canino tem composição completamente diferente do bovino.'
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Diário do Neonato',
              freq: 'daily',
              items: [
                'Pesagem: deve ganhar 5-10% do peso ao nascer por dia',
                'Temperatura do ambiente: 29-32°C (semana 1-2)',
                'Todos estão mamando? Algum fica de fora?',
                'Cor das mucosas: rosada (saudável) ou pálida/azulada (urgência)',
                'Fezes: mel escuro (mecônio) nos primeiros dias → amarelada-pastosa normal'
              ]
            }
          ],
          vetAlert: [
            'Filhote sem ganho de peso em 24h',
            'Temperatura abaixo de 34°C',
            'Sem reflexo de sucção',
            'Distensão abdominal intensa',
            'Fezes com sangue ou muito líquidas',
            'Mãe com febre alta ou mastite'
          ],
          prevention: [
            'Ninho aquecido preparado antes do parto',
            'Vacinação e vermifugação da mãe antes da gestação',
            'Ninhada equilibrada — equalizar acesso aos mamilos',
            'Acompanhamento veterinário na última semana de gestação'
          ],
          myths: [
            { myth: 'Pode dar leite de vaca para filhote órfão', truth: 'Leite de vaca causa diarreia severa e desidratação. Usar somente substituto canino comercial ou receita veterinária.' }
          ],
          faq: [
            { q: 'O filhote chora muito durante a noite — é normal?', a: 'Filhote saudável chora quando com fome, frio ou separado dos irmãos. Se está mamando, ganhando peso e a temperatura do ninho está correta, é fase que passa com 2-3 semanas.' }
          ]
        }
      ]
    }
  ]
};
