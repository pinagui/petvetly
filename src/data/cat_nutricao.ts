import type { Category } from './types';

export const catNutricao: Category = {
  id: 'nutricao',
  name: 'Nutrição',
  emoji: '🥩',
  gradient: 'grad-emerald',
  description: 'Alimentação saudável, dietas especiais, obesidade, deficiências nutricionais e alimentos proibidos para cães',
  conditions: [
    {
      id: 'obesidade',
      name: 'Obesidade Canina',
      emoji: '⚖️',
      gradient: 'grad-amber',
      description: 'A obesidade é a doença nutricional mais prevalente em cães, associada a artrite, diabetes, doença cardíaca, problemas respiratórios e redução da expectativa de vida em até 2 anos.',
      prevalence: 'Afeta 25-40% dos cães domésticos; subdiagnosticada porque tutores normalizam o excesso de peso.',
      protocols: [
        {
          id: 'proto-obesidade',
          title: 'Protocolo de Emagrecimento Canino',
          subtitle: 'Redução de peso segura: 1-2% do peso corporal por semana',
          stages: [
            {
              id: 's0', label: 'Peso ideal', description: 'Escore corporal 4-5/9. Costelas palpáveis sem visualizá-las, cintura visível.',
              signs: ['Costelas palpáveis com leve pressão', 'Cintura visível quando visto de cima', 'Abdômen levemente tucado de lado', 'Relação cintura-quadril adequada'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Sobrepeso', description: 'Escore 6-7/9. Excesso de 10-20% do peso ideal.',
              signs: ['Costelas palpáveis apenas com pressão firme', 'Sem cintura visível', 'Abdômen reto ou levemente saliente', 'Tosse ou ofegação leve ao exercício'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Obesidade', description: 'Escore 8-9/9. Excesso > 20% do peso ideal.',
              signs: ['Costelas não palpáveis — cobertas por gordura', 'Dobras de gordura visíveis sobre coluna e cauda', 'Dificuldade respiratória ao exercício leve', 'Relutância em se movimentar', 'Dificuldade de se levantar do chão'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Obesidade mórbida + comorbidades', description: 'Peso extremo com doença secundária estabelecida.',
              signs: ['Respiração laboriosa em repouso', 'Incapacidade de se gromar adequadamente', 'Diabetes mellitus diagnosticada', 'Artrose com dificuldade de locomoção', 'Lipidose hepática em processo'],
              urgency: 'high'
            }
          ],
          triggers: [
            'Superalimentação: porção maior que a recomendada + petiscos não calculados',
            'Sedentarismo: passeios insuficientes, confinamento',
            'Castração: reduz metabolismo basal em ~20-30%',
            'Raças predispostas: Labrador (mutação gene POMC), Cocker, Beagle, Bassett, Dachshund',
            'Idade: metabolismo diminui com envelhecimento',
            'Hipotireoidismo: causa obesidade resistente ao tratamento',
            'Hiperadrenocorticismo (Cushing): acúmulo abdominal de gordura',
            'Alimentação ad libitum (sempre disponível)'
          ],
          steps: [
            {
              title: 'Calcular o peso ideal e a taxa de perda segura',
              description: 'A perda de peso deve ser de 1-2% do peso atual por semana. Perda mais rápida causa catabolismo muscular e risco de lipidose hepática.',
              duration: 'Definição antes de iniciar o protocolo',
              icon: '📊',
              checklist: [
                'Pesagem mensal na balança veterinária',
                'Calcular escore corporal (BCS 1-9)',
                'Meta: reduzir 1-2% do peso atual por semana',
                'Cão de 20kg com meta de 16kg: perder ~200g por semana',
                'Prazo estimado: 20 semanas para perda de 4kg',
                'Pesagem a cada 2 semanas para ajuste de dieta'
              ]
            },
            {
              title: 'Cálculo da ração de emagrecimento',
              description: 'Calcular a RER (Resting Energy Requirement) do peso IDEAL, não do atual. Alimentar com 80% da RER para emagrecimento. RER (kcal/dia) = 70 × (peso ideal em kg)^0,75.',
              duration: 'Cálculo inicial + ajuste a cada 2 semanas',
              icon: '🧮',
              checklist: [
                'Calcular RER do peso ideal: 70 × (peso_meta)^0,75',
                'Alimentar com 80% da RER calculada',
                'Usar ração de controle de peso (menor densidade energética, mais fibras)',
                'Pesar a ração na balança de cozinha — colher é imprecisa',
                'Distribuir em 2-3 refeições (melhora saciedade)',
                'Petiscos = máximo 10% das calorias diárias totais — descontar da ração'
              ],
              warning: 'Nunca reduza a ração para menos de 60% da RER do peso ideal — causa catabolismo muscular. Se precisar de redução maior, use ração veterinária de emagrecimento com consulta profissional.'
            },
            {
              title: 'Ração adequada para emagrecimento',
              description: 'Rações "light" de prateleira têm densidade calórica apenas 10-20% menor. Rações veterinárias de controle de peso têm 30-40% menos calorias e mais fibras para saciedade.',
              duration: 'Mudança gradual em 7-10 dias',
              icon: '🥗',
              checklist: [
                'Preferir ração veterinária de emagrecimento (prescrição)',
                'Verificar kcal/kg da ração na embalagem',
                'Adição de vegetais cozidos para volume sem calorias: abobrinha, brócolis, cenoura cozida',
                'Legumes cozidos podem compor até 20% do volume da refeição',
                'Evitar petiscos calóricos: substituir por cenoura crua ou caldo de frango sem sal'
              ]
            },
            {
              title: 'Protocolo de exercício progressivo',
              description: 'Iniciar devagar — cão obeso tem sobrecarga articular. Aumentar gradualmente sem forçar.',
              duration: 'Progressão ao longo de semanas',
              icon: '🏃',
              checklist: [
                'Semanas 1-2: 2 caminhadas de 10 min em superfície plana',
                'Semanas 3-4: 2 caminhadas de 15-20 min',
                'Mês 2+: aumentar gradualmente para 30-45 min/dia',
                'Hidroterapia: excelente para obesos com artrose',
                'Natação (se disponível): sem impacto articular',
                'Evitar exercício intenso no calor — predispõe a heat stroke'
              ]
            },
            {
              title: 'Investigar causas hormonais se resposta inadequada',
              description: 'Se após 4 semanas de restrição calórica e exercício o cão não perde peso, investigar hipotireoidismo (TSH, T4 livre) e hiperadrenocorticismo (cortisol baixo-dose dexametasona).',
              duration: 'Se sem progresso em 4 semanas',
              icon: '🔬',
              checklist: [
                'T4 livre e TSH para hipotireoidismo',
                'Cortisol urinário ou teste de supressão para Cushing',
                'Hemograma completo e bioquímica',
                'Hipotireoidismo: levotiroxina 0,02mg/kg 2x ao dia',
                'Cushing: trilostano (veterinário especialista)'
              ]
            }
          ],
          checklists: [
            {
              label: 'Rotina Alimentar Diária',
              freq: 'daily',
              items: [
                'Pesar a ração na balança (não usar medidor de xícara)',
                'Dividir em 2-3 refeições',
                'Registrar qualquer petisco dado (descontar das calorias)',
                'Água fresca sempre disponível',
                'Não dar comida da mesa — um pedaço de pão pode ser 10% das calorias diárias de um cão pequeno'
              ]
            },
            {
              label: 'Acompanhamento Quinzenal',
              freq: 'weekly',
              items: [
                'Pesagem (a cada 2 semanas)',
                'Avaliar escore corporal visualmente',
                'Cão está perdendo 1-2% do peso por semana?',
                'Ajustar porção se necessário',
                'Anotar no app ou caderno o peso e data'
              ]
            }
          ],
          vetAlert: [
            'Perda de peso sem restrição calórica (pode indicar diabetes, câncer, doença renal)',
            'Dificuldade respiratória em repouso',
            'Recusa alimentar em cão obeso (risco de lipidose hepática)',
            'Sem perda de peso após 4 semanas de protocolo correto',
            'Poliúria/polidipsia associada a obesidade (diabetes mellitus)'
          ],
          prevention: [
            'Pesar a ração sempre — nunca alimentar por estimativa',
            'Ajustar a porção após castração (reduzir 20%)',
            'Petiscos só para treinamento, não como demonstração de afeto',
            'Passeio diário de pelo menos 30 minutos',
            'Escore corporal avaliado a cada consulta veterinária anual'
          ],
          myths: [
            { myth: 'Meu cão não está gordo, só é forte', truth: 'O teste são as costelas — se não der para sentir facilmente, está acima do peso. A gordura é interna antes de ser externa.' },
            { myth: 'Cão que come bastante é sinal de saúde', truth: 'O apetite é regulado por hormônios, não por necessidade calórica. Labrador tem mutação genética que bloqueia o sinal de saciedade — ele sempre quer comer.' },
            { myth: 'Ração light é suficiente para emagrecer', truth: 'Ração light tem menos calorias mas ainda precisa ser calculada em quantidade correta. Muitos tutores dão o mesmo volume de ração light e o cão não emagrece.' }
          ],
          faq: [
            { q: 'Quanto tempo demora para emagrecer de forma saudável?', a: 'Para perder 20% do peso corporal com segurança, calcule 4-6 meses. Perda mais rápida causa perda muscular e risco de lipidose hepática.' },
            { q: 'Posso dar fruta para meu cão?', a: 'Maçã (sem semente), banana, melancia (sem casca e semente), mirtilo são seguros em pequena quantidade. Uva, passa e abacate são PROIBIDOS.' },
            { q: 'Ração natural (BARF/NRC) é melhor para emagrecer?', a: 'Pode ser eficaz mas exige formulação veterinária nutricional para não criar deficiências. Não é inerentemente superior à ração industrializada de boa qualidade.' }
          ]
        }
      ]
    },
    {
      id: 'alimentos-proibidos',
      name: 'Alimentos Tóxicos e Proibidos',
      emoji: '🚫',
      gradient: 'grad-red',
      description: 'Lista completa de alimentos humanos tóxicos para cães com mecanismo de toxicidade, dose de risco e ação necessária.',
      prevalence: 'Intoxicação alimentar é causa comum de emergência — chocolate e xilitol lideram.',
      protocols: [
        {
          id: 'proto-alimentos-proibidos',
          title: 'Guia de Alimentos Proibidos e de Risco',
          subtitle: 'O que nunca dar ao seu cão e por quê',
          stages: [
            {
              id: 's0', label: 'Alimentos seguros em moderação', description: 'Podem ser oferecidos como petisco eventual.',
              signs: ['Frango cozido sem tempero', 'Cenoura crua', 'Maçã sem sementes', 'Abóbora cozida sem sal', 'Ovo cozido'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Alimentos de risco moderado', description: 'Evitar ou limitar muito.',
              signs: ['Queijo (alto sódio, gordura)', 'Leite (lactose — pode causar diarreia)', 'Pão e carboidratos simples', 'Carne muito gordurosa (pancreatite)'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Alimentos tóxicos — NUNCA', description: 'Qualquer quantidade pode ser prejudicial.',
              signs: ['Chocolate — teobromina cardiotóxica e neurotóxica', 'Xilitol — hipoglicemia grave e falência hepática', 'Uva e passa — insuficiência renal aguda', 'Cebola e alho — anemia hemolítica', 'Macadâmia — fraqueza e hipotermia', 'Abacate — persin causa cardiotoxicidade'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'Ingestão com sintomas — emergência', description: 'Cão ingeriu alimento tóxico e apresenta sintomas.',
              signs: ['Vômito repetido após ingestão de alimento proibido', 'Tremores ou convulsões', 'Mucosas pálidas', 'Ataxia ou colapso', 'Sangramento'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Chocolate amargo, meio-amargo, em pó — maior concentração de teobromina',
            'Xilitol: chiclete, bala diet, pasta de dentes, algumas manteigas de amendoim, geleia zero açúcar',
            'Uva, passa, currant (groselha seca)',
            'Cebola, alho, alho-poró, cebolinha em qualquer forma (cru, cozido, em pó)',
            'Macadâmia',
            'Abacate (especialmente folhas e caroço)',
            'Sal em excesso (hipernatremia)',
            'Álcool e bebidas alcoólicas',
            'Cafeína: café, chá, energético, guaraná',
            'Fermento de pão cru (expande no estômago, produz álcool)',
            'Pêssego, ameixa, cereja, damasco: caroços contêm cianeto',
            'Noz-moscada: miristicina — tremores e convulsões',
            'Batata crua e tomate verde: solanina'
          ],
          steps: [
            {
              title: 'Lista de verificação: o que posso dar?',
              description: 'Use esta lista para saber o que é seguro como petisco ocasional.',
              duration: 'Referência permanente',
              icon: '✅',
              checklist: [
                'PERMITIDOS (sem sal, sem condimentos): frango/carne cozida, cenoura, abobrinha, chuchu, batata-doce cozida, maçã (sem sementes), banana, melancia (sem sementes), mirtilo',
                'PERMITIDOS COM MODERAÇÃO: queijo (pequena quantidade), ovo cozido, sardinha em água (sem sal)',
                'PROIBIDOS ABSOLUTOS: chocolate, xilitol, uva/passa, cebola/alho, macadâmia, abacate (polpa)',
                'PROIBIDOS CAROÇOS: pêssego, cereja, ameixa, damasco — caroços contêm cianeto',
                'PROIBIDOS BEBIDAS: álcool, café, chá com cafeína, energético'
              ]
            },
            {
              title: 'Como ler rótulos de alimentos para detectar xilitol',
              description: 'Xilitol aparece nos rótulos com vários nomes. Verifique SEMPRE antes de dar qualquer alimento diet, zero açúcar ou para diabéticos.',
              duration: 'Hábito permanente',
              icon: '🔍',
              checklist: [
                'Nomes do xilitol nos rótulos: xilitol, xylitol, E967, birch sugar, sorbitol (diferente — menos tóxico)',
                'Produtos de risco: chiclete, bala diet, pasta de dentes, enxaguante bucal, vitaminas mastigáveis',
                'Manteiga de amendoim: verificar se não contém xilitol (maioria não tem, mas há marcas que usam)',
                'Qualquer produto "zero açúcar" ou "sem açúcar": ler rótulo antes de oferecer'
              ],
              warning: 'Xilitol em dose de 0,1g/kg causa hipoglicemia grave. Em 0,5g/kg causa falência hepática. Um chiclete pode conter 0,3-1g de xilitol — letal para cão de 3kg.'
            }
          ],
          checklists: [
            {
              label: 'Verificação da Cozinha e Despensa',
              freq: 'monthly',
              items: [
                'Chocolates e cocoa em local inacessível ao cão',
                'Gomas e balas diet em gaveta fechada',
                'Pasta de dentes humana fora do alcance',
                'Uvas, passas e frutas secas guardadas',
                'Cebola e alho em local alto ou armário fechado',
                'Lixo com tampa que o cão não abre'
              ]
            }
          ],
          vetAlert: [
            'Ingestão de qualquer quantidade de xilitol',
            'Ingestão de uva ou passa (qualquer quantidade)',
            'Ingestão de dose tóxica de chocolate',
            'Ingestão de cebola ou alho em quantidade significativa',
            'Qualquer sintoma após ingestão de alimento desconhecido'
          ],
          prevention: [
            'Educar toda a família e visitantes sobre alimentos proibidos',
            'Nunca dar "só um pouquinho" de alimento humano sem pesquisar',
            'Lixo sempre com tampa resistente',
            'Ensinar o comando "deixa" desde filhote',
            'Cão treinado a não pegar comida do chão reduz risco de intoxicação acidental'
          ],
          myths: [
            { myth: 'Um pedaço pequeno de chocolate não faz mal', truth: 'Depende do tipo, quantidade e peso do cão. Para um Chihuahua de 2kg, 10g de chocolate amargo pode ser tóxico.' },
            { myth: 'Cebola cozida é menos perigosa que crua', truth: 'Cozinhar não elimina a toxicidade. N-propil dissulfeto que causa hemólise é resistente ao calor.' }
          ],
          faq: [
            { q: 'Meu cão comeu um dente de alho. O que fazer?', a: 'Um dente de alho raramente causa toxicidade grave em cão de porte médio/grande, mas monitore por 24-48h: vômito, diarreia, mucosas pálidas. Em cão pequeno ou quantidades maiores, vá ao veterinário.' },
            { q: 'Posso dar comida humana salgada ocasionalmente?', a: 'Em cões saudáveis, quantidade muito pequena de alimento sem tempero é tolerada. Sal em excesso causa hipernatremia — sede intensa, tremores, convulsão.' }
          ]
        }
      ]
    }
  ]
};
