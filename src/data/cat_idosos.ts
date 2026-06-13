import type { Category } from './types';

export const catIdosos: Category = {
  id: 'idosos',
  name: 'Cão Idoso',
  emoji: '🐾',
  gradient: 'grad-gray',
  description: 'Cuidados especiais para cães sênior: reconhecer o envelhecimento, demência, artrose, insuficiência orgânica e manutenção da qualidade de vida',
  conditions: [
    {
      id: 'sindrome-cognitiva',
      name: 'Disfunção Cognitiva (Demência Canina)',
      emoji: '🧠',
      gradient: 'grad-purple',
      description: 'Equivalente canino do Alzheimer humano — degeneração progressiva do sistema nervoso central com deposição de beta-amiloide. Afeta memória, orientação, interação social e ciclo sono-vigília.',
      prevalence: 'Afeta 68% dos cães entre 15-16 anos; 28% dos cães entre 11-12 anos. Subdiagnosticado — tutores normalizam como "só é velho".',
      protocols: [
        {
          id: 'proto-cognitivo',
          title: 'Manejo da Disfunção Cognitiva Canina (CDS)',
          subtitle: 'Diagnóstico precoce, enriquecimento e suporte medicamentoso',
          stages: [
            {
              id: 's0', label: 'Envelhecimento normal', description: 'Redução gradual de atividade sem sinais de confusão.',
              signs: ['Dorme mais que antes', 'Menos interesse em brincar', 'Movimenta-se mais devagar', 'Reconhece família e ambiente normalmente'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'CDS leve — DISHAA inicial', description: 'Primeiros sinais: desorientação ocasional.',
              signs: ['Fica "travado" em cantos ou atrás de móveis', 'Tardinhes de desorientação (sundowning)', 'Acorda no meio da noite sem razão aparente', 'Menos responsivo ao nome em algumas ocasiões'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'CDS moderada', description: 'Alterações claras em múltiplos domínios.',
              signs: ['Urina/defeca dentro de casa sem sinais de ITU', 'Não reconhece membros familiares ocasionalmente', 'Ciclo invertido: dorme o dia, acorda a noite', 'Vocalização noturna sem causa aparente', 'Perda de interesse em interações', 'Come mas não localiza o comedouro sem ajuda'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'CDS grave', description: 'Comprometimento severo afetando qualidade de vida.',
              signs: ['Não reconhece tutores', 'Olhar fixo vazio por longos períodos', 'Andar compulsivo em círculos', 'Vocalização intensa e prolongada especialmente à noite', 'Incontinência completa', 'Sem resposta a estímulos'],
              urgency: 'high'
            }
          ],
          triggers: [
            'Envelhecimento: depósito de beta-amiloide aumenta com a idade',
            'Predisposição de raça: não está totalmente estabelecida mas cães de grande porte envelhecem mais rápido',
            'Sedentarismo: estimulação mental reduzida ao longo da vida',
            'Isolamento social progressivo',
            'Comorbidades que afetam o SNC: hipotireoidismo, hipertensão, Cushing',
            'Deficit auditivo e visual intensificam desorientação'
          ],
          steps: [
            {
              title: 'Avaliação DISHAA para diagnóstico',
              description: 'O veterinário usa o critério DISHAA: Desorientação, Interação social, Sono-vigília, Higiene (incontinência), Atividade, Aprendizado/Memória.',
              duration: 'Avaliação em consulta',
              icon: '📋',
              checklist: [
                'D — Desorientação: fica preso em cantos, não encontra saída de cômodos',
                'I — Interação: menos interesse em brincadeiras ou interações',
                'S — Sono: acorda à noite, dorme muito de dia',
                'H — Higiene: urina ou defeca em lugares inadequados sem doença física',
                'A — Atividade: anda em círculos, comportamentos repetitivos',
                'A — Aprendizado: "esquece" comandos que sabia há anos',
                'Excluir causas físicas: dor, hipotireoidismo, hipertensão, ITU, artrose'
              ]
            },
            {
              title: 'Suplementação neuroprotetora',
              description: 'Suplementos com evidência para CDS canina: ácidos graxos ômega-3, antioxidantes e dieta neuroprotetora específica.',
              duration: 'Suplementação contínua',
              icon: '🌿',
              checklist: [
                'Ômega-3 EPA+DHA: 50-100mg/kg/dia (anti-inflamatório cerebral)',
                'Vitamina E: 400-800UI/dia (antioxidante)',
                'Vitamina C: 100-200mg/dia',
                'SAMe (S-adenosilmetionina): 20mg/kg/dia — melhora função cognitiva',
                'Fosfatidilserina: 2mg/kg/dia',
                'Dieta neuroprotetora: Hills b/d ou Royal Canin Mature'
              ]
            },
            {
              title: 'Selegilina (medicação específica)',
              description: 'Selegilina (Anipryl) é o único medicamento aprovado para CDS canina em vários países. Aumenta dopamina no SNC. Efeito em 4-6 semanas.',
              duration: 'Tratamento contínuo',
              icon: '💊',
              checklist: [
                'Selegilina: 0,5-1mg/kg/dia, dose única pela manhã',
                'Iniciar baixo e aumentar em 4 semanas',
                'Efeito: melhora ciclo sono-vigília, vocalização noturna, desorientação',
                'Não combinar com opioides, tramadol ou ISRS sem orientação veterinária',
                'Reavaliação em 4-6 semanas'
              ]
            },
            {
              title: 'Enriquecimento ambiental — fundamental',
              description: 'Estimulação mental regular retarda a progressão da CDS. "Use it or lose it" — o cérebro de cão idoso precisa de desafios diários.',
              duration: 'Diariamente, adaptado às limitações do cão',
              icon: '🧩',
              checklist: [
                'Kong ou puzzle feeder para refeições (mesmo que leve mais tempo)',
                'Caminhada de faro: deixar cheirar livremente (estimulação olfativa intensa)',
                'Treinos curtos de obediência simples (mantém conexões neurais)',
                'Novos objetos para cheirar periodicamente',
                'Socialização: visitas de pessoas que o cão gosta',
                'Evitar mudanças bruscas no ambiente: o cão idoso se perde com tudo mudado'
              ]
            },
            {
              title: 'Manejo do ciclo sono-vigília e vocalização noturna',
              description: 'Inversão do ciclo e vocalização noturna são os problemas mais relatados pelos tutores. Estratégias específicas.',
              duration: 'Diariamente',
              icon: '🌙',
              checklist: [
                'Expor ao sol/luz natural durante o dia (regula melatonina)',
                'Exercício leve no final da tarde',
                'Melatonina: 1-3mg (cão pequeno), 3-6mg (cão grande), 30 min antes de dormir',
                'Música clássica ou "dog music" durante a noite',
                'Cama próxima ao tutor para segurança',
                'Não punir a vocalização noturna — ele está confuso, não sendo difícil'
              ]
            }
          ],
          checklists: [
            {
              label: 'Avaliação Mensal da Cognição',
              freq: 'monthly',
              items: [
                'Episódios de desorientação: mais ou menos que mês passado?',
                'Ciclo sono-vigília: melhorou com melatonina/selegilina?',
                'Incontinência: novos episódios?',
                'Reconhece família normalmente?',
                'Come sem dificuldade e com apetite?',
                'Enriquecimento: sendo feito diariamente?'
              ]
            },
            {
              label: 'Rotina Diária do Cão Idoso',
              freq: 'daily',
              items: [
                'Passeio de faro (mesmo que curto — 10-15 min)',
                'Sessão de estimulação mental (5 min)',
                'Suplementos dados junto com alimentação',
                'Verificar orientação: encontrou o comedouro e saída para o quintal?',
                'Avaliação de dor: relutância em se levantar, claudicação, gemidos'
              ]
            }
          ],
          vetAlert: [
            'Vocalização noturna severa que não responde a manejo conservador',
            'Incontinência de instalação rápida (descartar causa física: ITU, artrose, tumor)',
            'Recusa total de alimento',
            'Crise de pânico noturno grave',
            'Avaliação de qualidade de vida para decisão sobre eutanásia'
          ],
          prevention: [
            'Estimulação mental ao longo de toda a vida (não só na velhice)',
            'Ômega-3 preventivo desde a meia-idade',
            'Controle de hipertensão e hipotireoidismo (fatores de risco para CDS)',
            'Exercício regular ao longo de toda a vida',
            'Socialização mantida na velhice — não isolar o cão idoso'
          ],
          myths: [
            { myth: 'Cão velho "fica assim mesmo" — não tem tratamento', truth: 'CDS tem tratamento que retarda a progressão e melhora sintomas. Diagnóstico precoce é fundamental para melhores resultados.' },
            { myth: 'Vocalização noturna é birra ou busca de atenção', truth: 'É sintoma de desorientação e ansiedade — punição piora. Tratamento específico (melatonina, selegilina) é eficaz.' }
          ],
          faq: [
            { q: 'Como saber se é CDS ou só cansaço de ser velho?', a: 'CDS apresenta desorientação, inversão do ciclo sono-vigília, incontinência sem doença física e redução de interação. Simples lentidão motora e preferência por repouso podem ser envelhecimento normal.' },
            { q: 'Quando considerar eutanásia?', a: 'Quando o cão não tem mais dias bons — não come, não interage, está em dor que não responde ao tratamento, incontinente sem capacidade de se limpar. Consulte um veterinário de confiança para avaliar qualidade de vida objetivamente.' }
          ]
        }
      ]
    }
  ]
};
