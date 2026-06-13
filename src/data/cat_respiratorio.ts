import type { Category } from './types';

export const catRespiratorio: Category = {
  id: 'respiratorio',
  name: 'Respiratório',
  emoji: '🫁',
  gradient: 'grad-cyan',
  description: 'Tosse, traqueobronquite, asma, síndrome braquicefálica, pneumonia e colapso traqueal em cães',
  conditions: [
    {
      id: 'traqueobronquite',
      name: 'Traqueobronquite (Tosse dos Canis)',
      emoji: '🤧',
      gradient: 'grad-cyan',
      description: 'Infecção altamente contagiosa do trato respiratório superior causada por Bordetella bronchiseptica, parainfluenza canina e outros agentes. Equivalente da "tosse do kennel" ou gripe canina.',
      prevalence: 'Muito prevalente — virtualmente qualquer cão que frequente canil, pet shop ou parques tem risco.',
      protocols: [
        {
          id: 'proto-tosse-canil',
          title: 'Tratamento da Traqueobronquite Infecciosa',
          subtitle: 'Manejo da tosse, prevenção de complicações e controle de contágio',
          stages: [
            {
              id: 's0', label: 'Incubação (2-14 dias)', description: 'Cão exposto mas sem sintomas — já pode transmitir.',
              signs: ['Sem tosse', 'Sem secreção', 'Comportamento normal', 'Apetite mantido'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Tosse seca leve', description: 'Tosse característica, sem comprometimento geral.',
              signs: ['"Tosse de ganso" — som de honk honk', 'Tosse produtiva ao final — pode cuspir muco branco', 'Sem febre ou com febre baixa', 'Come e bebe normalmente', 'Ativo e alerta'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Tosse moderada com prostração', description: 'Infecção mais intensa afetando bem-estar.',
              signs: ['Tosse frequente e debilitante', 'Febre (>39,5°C)', 'Secreção nasal mucopurulenta', 'Redução de apetite', 'Letargia'],
              urgency: 'moderate'
            },
            {
              id: 's3', label: 'Pneumonia bacteriana', description: 'Complicação grave — infecção se estende para pulmões.',
              signs: ['Respiração rápida e com esforço', 'Febre alta (>40°C)', 'Prostração severa', 'Ruídos respiratórios anormais à ausculta', 'Cianose das mucosas (emergência)', 'Recusa alimentar total'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Contato com cão infectado (transmissão por aerossol e fômites)',
            'Frequentar canil, pet shop, adestramento coletivo, parques',
            'Vacinação em atraso (Bordetella + Parainfluenza)',
            'Imunossupressão (estresse, outra doença, uso de corticoide)',
            'Ventilação inadequada em ambientes coletivos'
          ],
          steps: [
            {
              title: 'Manejo domiciliar da tosse leve',
              description: 'Casos leves em cão vacinado e saudável resolvem em 1-2 semanas com manejo de suporte.',
              duration: '7-14 dias',
              icon: '🏠',
              checklist: [
                'Repouso relativo — sem contato com outros cães',
                'Ambiente úmido (vaporizador) para aliviar a irritação traqueal',
                'Umidificar o ambiente do cão',
                'Coleira peitoral em vez de colarinho (reduz pressão na traqueia)',
                'Mel puro: 1 colher de chá para cão médio 2-3x ao dia (efeito calmante para a mucosa)',
                'Monitorar temperatura retal 2x ao dia',
                'Isolamento de outros cães da casa por 2 semanas'
              ],
              warning: 'Mel NÃO deve ser dado a filhotes abaixo de 1 ano (risco de botulismo — mesmo princípio que em bebês humanos).'
            },
            {
              title: 'Tratamento veterinário indicado',
              description: 'Casos com febre, prostração ou sem melhora em 5 dias exigem avaliação veterinária.',
              duration: '7-14 dias de medicação',
              icon: '💊',
              checklist: [
                'Antibióticos: doxiciclina 5mg/kg 2x/dia por 14 dias (cobertura para Bordetella)',
                'Alternativa: amoxicilina-clavulanato 15-25mg/kg 2x/dia',
                'Antitussígeno: butorfanol 0,05-0,1mg/kg — somente para tosse improdutiva severa e incapacitante',
                'Broncodilatador (se broncospasmo): teofilina ou terbutalina',
                'Anti-inflamatório: dexametasona em dose baixa para edema traqueal (apenas sob prescrição)',
                'Nebulização com solução salina 0,9% (hospitalizado)'
              ],
              warning: 'Antitussígenos suprimem o reflexo de tosse — só usar com diagnóstico confirmado de traqueobronquite sem pneumonia. Em pneumonia, a tosse é mecanismo de defesa.'
            },
            {
              title: 'Monitoramento de complicações',
              description: 'Pneumonia bacteriana é a principal complicação, especialmente em filhotes, idosos e imunocomprometidos.',
              duration: 'Durante todo o tratamento',
              icon: '📊',
              checklist: [
                'Temperatura retal 2x ao dia: > 39,8°C = consulta',
                'Frequência respiratória em repouso: > 30 mrpm = urgência',
                'Qualidade da tosse: produtiva vs seca',
                'Apetite: recusa por > 24h = consulta',
                'Raio-X de tórax se não melhorar em 5-7 dias'
              ]
            },
            {
              title: 'Vacinação e prevenção',
              description: 'Vacina Bordetella intranasal ou injetável é a prevenção mais eficaz. Obrigatória antes de canil.',
              duration: 'Anual ou conforme risco',
              icon: '💉',
              checklist: [
                'Bordetella intranasal: efeito em 48-72h (útil antes de canil com pouco aviso)',
                'Bordetella injetável: efeito em 7-10 dias',
                'Reforço anual para cães com exposição frequente',
                'Parainfluenza: parte do protocolo de V8 ou V10',
                'Cão que frequenta canil: reforço a cada 6 meses'
              ]
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Diário Durante a Doença',
              freq: 'daily',
              items: [
                'Temperatura retal (normal: 38-39°C)',
                'Frequência respiratória em repouso (normal: 15-30 mrpm)',
                'Apetite: comeu quanto % da ração habitual?',
                'Frequência de tosse: menor, igual ou maior que ontem?',
                'Cão isolado de outros animais da casa?',
                'Medicação dada no horário?'
              ]
            }
          ],
          vetAlert: [
            'Temperatura > 39,8°C',
            'Frequência respiratória > 30 mrpm em repouso',
            'Respiração com esforço abdominal',
            'Mucosas pálidas, azuladas ou cinzas',
            'Sem melhora após 5 dias de tratamento',
            'Filhote com menos de 4 meses com tosse (maior risco de pneumonia)',
            'Cão idoso ou imunocomprometido'
          ],
          prevention: [
            'Vacina Bordetella atualizada (a cada 6-12 meses conforme exposição)',
            'Isolar cão doente por 2 semanas',
            'Exigir comprovante de vacinação antes de colocar em canil',
            'Boa ventilação em ambientes coletivos',
            'Desinfetar bebedouros e comedouros coletivos'
          ],
          myths: [
            { myth: 'Tosse de canil é só nos cachorros de canil', truth: 'Parques, pet shops, clínicas veterinárias, adestramento coletivo — qualquer contato com cão infectado transmite.' },
            { myth: 'Se vacinei contra Bordetella, meu cão não pega', truth: 'A vacina reduz muito a gravidade e transmissão, mas não confere 100% de proteção. O cão pode se infectar com estirpes não cobertas.' }
          ],
          faq: [
            { q: 'Meu cão tossiu depois do banho no pet shop — é tosse de canil?', a: 'Possível — o pet shop é um dos ambientes de maior risco. Período de incubação de 2-14 dias. Se tosse surgiu 3-7 dias após visita ao pet shop, a correlação é alta.' },
            { q: 'Posso tratar em casa sem veterinário?', a: 'Casos leves (sem febre, sem prostração, come normalmente, vacinado) podem ser manejados em casa por 5-7 dias. Se não melhorar ou tiver qualquer sinal grave, consulte o veterinário.' }
          ]
        }
      ]
    },
    {
      id: 'sindrome-braquicefalica',
      name: 'Síndrome Braquicefálica',
      emoji: '😤',
      gradient: 'grad-amber',
      description: 'Conjunto de anormalidades anatômicas em raças de focinho curto (Bulldog, Pug, Shih Tzu, Boston Terrier) causando obstrução das vias aéreas, dificuldade respiratória e redução da qualidade de vida.',
      prevalence: 'Afeta virtualmente todos os cães braquicefálicos em algum grau; a maioria dos tutores normaliza os sons respiratórios como "característicos da raça".',
      protocols: [
        {
          id: 'proto-brachicephalic',
          title: 'Manejo da Síndrome Obstrutiva Braquicefálica (BOAS)',
          subtitle: 'Do manejo conservador à correção cirúrgica das obstruções',
          stages: [
            {
              id: 's0', label: 'BOAS grau I — Leve', description: 'Ruídos respiratórios presentes mas sem limitação funcional.',
              signs: ['Ronco suave ao dormir', 'Respiração ruidosa leve ao exercício', 'Sem intolerância ao exercício', 'Sem episódios de crise respiratória'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'BOAS grau II — Moderado', description: 'Limitação do exercício e desconforto frequente.',
              signs: ['Intolerância moderada ao exercício (para após poucos minutos)', 'Ronco alto ao dormir', 'Esforço respiratório visível', 'Regurgitação frequente', 'Dorme sentado para respirar melhor'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'BOAS grau III — Grave', description: 'Crise respiratória com risco de vida.',
              signs: ['Respiração com grande esforço em repouso', 'Cianose (mucosas azuladas) após exercício leve', 'Síncope (desmaio) por hipóxia', 'Crises de pânico respiratório', 'Acorda asfixiado durante o sono'],
              urgency: 'emergency'
            },
            {
              id: 's3', label: 'Emergência hipertérmica', description: 'Braquicefálico não consegue dissipar calor adequadamente.',
              signs: ['Temperatura > 40,5°C', 'Respiração extremamente laboriosa no calor', 'Mucosas vermelho-intenso ou azuladas', 'Colapso por golpe de calor', 'Inconsciência'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Narina estenótica (nariz com narinas muito pequenas)',
            'Palato mole elongado (obstrui a faringe)',
            'Traqueia hipoplásica (muito estreita)',
            'Saculação dos ventrículos laríngeos evertidos (grau avançado)',
            'Temperatura > 25°C — braquicefálicos não conseguem ofegar eficientemente',
            'Excitação e exercício intenso',
            'Obesidade agrava todos os componentes'
          ],
          steps: [
            {
              title: 'Medidas de emergência na crise respiratória',
              description: 'Crise respiratória em braquicefálico é emergência — temperatura, oxigênio e calma são os três pilares.',
              duration: 'Ação imediata',
              icon: '🚨',
              checklist: [
                'Ambiente fresco imediatamente: AC ou área sombreada',
                'Não forçar o cão a andar — carregue se necessário',
                'Toalha úmida fria nas axilas, virilha e pescoço (não em gelo direto)',
                'Ir ao veterinário — oxigenoterapia pode ser necessária',
                'Não dar água forçada a cão dispneico — risco de aspiração',
                'Coleira: NUNCA usar coleira em braquicefálico — sempre peitoral'
              ]
            },
            {
              title: 'Avaliação das componentes anatômicas',
              description: 'O veterinário avalia cada componente da síndrome: narinas, palato, traqueia e sacos laríngeos.',
              duration: 'Diagnóstico completo',
              icon: '🔍',
              checklist: [
                'Rinoscopia e laringoscopia: avaliação sob sedação leve',
                'Raio-X de tórax: detectar hipoplasia traqueal, colapso',
                'Grau das narinas: 0 (normal), 1 (leve), 2 (moderado), 3 (severo)',
                'Avaliação cardíaca (hipertensão pulmonar associada)',
                'Score funcional BOAS: teste de 3 minutos de exercício padronizado'
              ]
            },
            {
              title: 'Cirurgia corretiva (altamente recomendada em graus II-III)',
              description: 'Rinoplastia (alargar as narinas) e palatoplastia (encurtar o palato mole) melhoram dramaticamente a qualidade de vida e devem ser feitas precocemente — idealmente aos 6-12 meses.',
              duration: 'Cirurgia de 30-60 min, recuperação de 2-3 semanas',
              icon: '🔪',
              checklist: [
                'Rinoplastia: ampliação das narinas — mudança imediata e dramática',
                'Palatoplastia: ressecção do excesso de palato mole',
                'Saculectomia laríngea: se sacos evertidos (grau avançado)',
                'Idealmente: realizar antes dos 2 anos para prevenir dano laríngeo',
                'Pós-operatório: 2-3 semanas de repouso, ração úmida, não forçar latido'
              ],
              warning: 'Adiar a cirurgia corretiva permite progressão das lesões (eversão de sacos laríngeos, colapso laríngeo) que são irreversíveis e têm prognóstico muito pior.'
            },
            {
              title: 'Manejo permanente do braquicefálico',
              description: 'Mesmo operado, o braquicefálico precisa de manejo especial durante toda a vida.',
              duration: 'Permanente',
              icon: '🛡️',
              checklist: [
                'Temperatura: ambiente sempre fresco; AC no verão',
                'Exercício: somente em horários frescos (antes das 8h ou após 18h)',
                'JAMAIS usar coleira — apenas peitoral',
                'Peso: controle rigoroso — cada kg extra piora a obstrução',
                'Evitar situações de excitação extrema',
                'Viagem aérea: Bulldogs, Pugs proibidos em algumas companhias — verificar'
              ]
            }
          ],
          checklists: [
            {
              label: 'Checklist Diário do Braquicefálico',
              freq: 'daily',
              items: [
                'Temperatura máxima do dia: acima de 28°C? Ficar em casa',
                'Exercício somente nas horas frescas',
                'Peitoral (nunca coleira) para passeio',
                'Ronco e respiração: igual ou piorou?',
                'Comer e beber normalmente?',
                'Episódio de tosse, engasgo ou regurgitação?'
              ]
            },
            {
              label: 'Monitoramento Mensal',
              freq: 'monthly',
              items: [
                'Peso: mantendo escore corporal 4-5/9?',
                'Tolerância ao exercício: melhorou, piorou ou igual?',
                'Ronco: aumentou?',
                'Reavaliação pós-cirurgia (se operado): 3-6 meses pós-op'
              ]
            }
          ],
          vetAlert: [
            'Qualquer episódio de cianose (mucosas azuladas)',
            'Síncope (desmaio) durante exercício ou excitação',
            'Temperatura > 40°C',
            'Piora progressiva da tolerância ao exercício',
            'Tosse sanguinolenta',
            'Acordar durante a noite com episódio respiratório'
          ],
          prevention: [
            'Não comprar/adotar raças braquicefálicas sem entender o compromisso',
            'Cirurgia corretiva precoce (< 2 anos) para prevenir complicações',
            'Ambiente fresco durante toda a vida',
            'Controle de peso rigoroso',
            'Nunca usar coleira — sempre peitoral',
            'Não fazer exercício no calor'
          ],
          myths: [
            { myth: 'O ronco do Bulldog/Pug é normal e fofo', truth: 'É sinal de obstrução respiratória crônica. O cão está com dificuldade de respirar — a cirurgia corretiva muda completamente a qualidade de vida.' },
            { myth: 'Cirurgia de palato é perigosa e não vale a pena', truth: 'Em mãos experientes, é de baixo risco e os benefícios são imediatos e duradouros. Vale muito a pena em graus II-III.' }
          ],
          faq: [
            { q: 'Meu Pug de 3 anos ronca muito. Ainda vale a pena operar?', a: 'Sim, desde que não haja colapso laríngeo avançado. Avaliar com veterinário especialista. Mesmo em adultos, a cirurgia traz melhora significativa.' },
            { q: 'Posso viajar de avião com meu Bulldog?', a: 'Companhias aéreas têm restrições para braquicefálicos por risco respiratório. Verificar com a companhia antes. Em porão: evitar totalmente. Em cabine: verificar política da companhia.' }
          ]
        }
      ]
    }
  ]
};
