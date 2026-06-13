import type { Category } from './types';

export const catEndocrino: Category = {
  id: 'endocrino',
  name: 'Endócrino & Hormonal',
  emoji: '🔬',
  gradient: 'grad-purple',
  description: 'Diabetes mellitus, hipotireoidismo, hiperadrenocorticismo (Cushing) e hipoadrenocorticismo (Addison) em cães',
  conditions: [
    {
      id: 'diabetes',
      name: 'Diabetes Mellitus Canina',
      emoji: '💉',
      gradient: 'grad-amber',
      description: 'Deficiência absoluta (tipo 1, mais comum em cães) ou relativa de insulina causando hiperglicemia crônica. Gerenciável com insulinoterapia diária mas requer comprometimento do tutor.',
      prevalence: 'Afeta 1 em cada 300 cães; fêmeas inteiras têm 2-4x mais risco (progesterona antagoniza insulina).',
      protocols: [
        {
          id: 'proto-diabetes',
          title: 'Manejo da Diabetes Mellitus Canina',
          subtitle: 'Insulinoterapia, dieta, monitoramento e prevenção de hipoglicemia',
          stages: [
            {
              id: 's0', label: 'Pré-diabético (resistência à insulina)', description: 'Hiperglicemia sem sinais clínicos graves.',
              signs: ['Glicemia > 200 mg/dL em jejum', 'Sem poliúria/polidipsia ainda', 'Comum em fêmeas em diestro (progesterona)'],
              urgency: 'moderate'
            },
            {
              id: 's1', label: 'Diabetes não complicada', description: 'Sinais clínicos clássicos sem cetoacidose.',
              signs: ['Poliúria: urina muito e muito frequentemente', 'Polidipsia: bebe água em quantidade excessiva', 'Polifagia: come muito mas perde peso', 'Catarata bilateral progressiva', 'Infecções recorrentes (ITU, pele)'],
              urgency: 'high'
            },
            {
              id: 's2', label: 'Cetoacidose diabética (CAD)', description: 'Complicação grave com risco de vida.',
              signs: ['Vômito e anorexia súbitos', 'Hálito com cheiro de acetona (frutas)', 'Letargia intensa', 'Desidratação', 'Respiração acelerada (Kussmaul)', 'pH urinário ácido + cetonúria'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Fêmea inteira em diestro: progesterona antagoniza insulina',
            'Pancreatite crônica: destrói células beta',
            'Obesidade: resistência à insulina',
            'Uso crônico de corticosteroides',
            'Acromegalia (tumor de hipófise — raro)',
            'Hiperadrenocorticismo (Cushing): resistência à insulina',
            'Predisposição de raça: Samoieda, Husky, Keeshond, Poodle'
          ],
          steps: [
            {
              title: 'Diagnóstico e estabilização inicial',
              description: 'Glicemia, frutosamine e glicosúria confirmam o diagnóstico. Caso novo deve ser estabilizado pelo veterinário antes de ir para casa.',
              duration: 'Diagnóstico inicial',
              icon: '🔬',
              checklist: [
                'Glicemia em jejum: > 200 mg/dL em duas medições',
                'Glicosúria: tira reativa de urina',
                'Frutosamine: média das glicemias das últimas 2-3 semanas',
                'Bioquímica completa (lipase, fígado, rins)',
                'Urinálise com urocultura (ITU é comum)',
                'Se cetoacidose: hospitalização com fluidoterapia e insulina regular IV'
              ]
            },
            {
              title: 'Insulinoterapia domiciliar',
              description: 'Insulina NPH ou Caninsulin (insulina lenta veterinária) administrada subcutaneamente 2x ao dia, sempre junto com alimentação.',
              duration: 'Diariamente — pela vida toda',
              icon: '💉',
              checklist: [
                'Insulina veterinária (Caninsulin): 0,25-0,5 UI/kg 2x/dia início',
                'Insulina humana NPH: alternativa mais acessível',
                'Sempre dar junto com a refeição (nunca em jejum)',
                'Seringa específica para insulina (U-40 para Caninsulin, U-100 para NPH)',
                'Técnica: dobra de pele na nuca, inserção 45°, aspirar antes de injetar',
                'Girar pontos de aplicação para evitar lipodistrofia',
                'Guardar na geladeira (2-8°C) — não congelar'
              ],
              warning: 'Nunca dar insulina sem cão comer antes. Se comer pouco ou não comer, dar metade da dose e contatar veterinário. Hipoglicemia é emergência mais grave que hiperglicemia temporária.'
            },
            {
              title: 'Monitoramento domiciliar da glicemia',
              description: 'Curva de glicemia em casa é mais representativa que no consultório (estresse hospitalar eleva glicemia). Usar glicosímetro veterinário ou humano com ajuste.',
              duration: 'Regular conforme necessidade de ajuste',
              icon: '📊',
              checklist: [
                'Glicosímetro: AlphaTRAK 2 (veterinário) ou humano com fator de correção',
                'Coleta: veia da orelha ou veia cefálica (pata dianteira)',
                'Curva domiciliar: medir a cada 2h por 12h no dia da consulta',
                'Meta: glicemia 100-200 mg/dL na maior parte da curva',
                'Nadir (ponto mais baixo) não deve ser < 80 mg/dL',
                'Levar o glicosímetro ao veterinário para correlacionar com o aparelho clínico'
              ]
            },
            {
              title: 'Sinais e manejo da hipoglicemia',
              description: 'Hipoglicemia é a emergência mais comum em cão diabético. Glicemia < 60 mg/dL causa sintomas neurológicos.',
              duration: 'Protocolo de emergência domiciliar',
              icon: '🚨',
              checklist: [
                'Sinais: tremores, fraqueza súbita, ataxia, convulsão, inconsciência',
                'Ação imediata: esfregar mel, Karo ou açúcar nas gengivas',
                'Se consciente: oferecer alimento imediatamente',
                'Se inconsciente: mel nas gengivas + ir AO VETERINÁRIO IMEDIATAMENTE',
                'Manter gel de glicose ou mel sempre acessível em casa',
                'Depois de episódio: contatar veterinário para ajuste da dose'
              ],
              warning: 'Hipoglicemia grave não tratada pode causar dano cerebral permanente em minutos. Mel nas gengivas é medida de primeiros socorros — não substitui atendimento veterinário urgente.'
            },
            {
              title: 'Dieta diabética',
              description: 'Consistência nas refeições (mesmos horários, mesma quantidade) é mais importante que o tipo específico de dieta.',
              duration: 'Permanente',
              icon: '🥗',
              checklist: [
                'Dieta comercial diabética: Hills w/d ou m/d, Royal Canin Diabetic',
                'Alta em fibra: retarda absorção de glicose',
                'Refeições exatamente 12h antes de cada aplicação de insulina',
                'Mesma quantidade todos os dias',
                'Sem petiscos açucarados ou tratamentos calóricos variáveis',
                'Petisco permitido: cenoura, pepino, frango cozido sem tempero'
              ]
            },
            {
              title: 'Castração da fêmea diabética',
              description: 'Fêmea inteira diabética DEVE ser castrada — progesterona em diestro causa resistência à insulina severa tornando o controle impossível.',
              duration: 'Assim que estabilizada',
              icon: '⚕️',
              checklist: [
                'Estabilizar a glicemia antes da cirurgia (risco anestésico menor)',
                'Informar o anestesista sobre diabetes',
                'Monitrização glicêmica intraoperatória',
                'Após castração: muitas fêmeas reduzem a dose de insulina significativamente',
                'Reavaliação da insulina 2-4 semanas após castração'
              ]
            }
          ],
          checklists: [
            {
              label: 'Rotina Diária do Cão Diabético',
              freq: 'daily',
              items: [
                'Refeição dada?',
                'Insulina aplicada (após comer) — no horário correto?',
                'Local de aplicação anotado (rotacionar)',
                'Quantidade bebida de água: normal ou mais que o habitual?',
                'Urina: frequência normal?',
                'Cão ativo e alerta? (hipoglicemia causa letargia)'
              ]
            },
            {
              label: 'Monitoramento Mensal',
              freq: 'monthly',
              items: [
                'Consulta veterinária para ajuste de dose',
                'Glicemia/frutosamine',
                'Peso: mantendo ou perdendo?',
                'Avaliação de catarata: progressão?',
                'Urinálise (ITU é comum e piora o controle glicêmico)'
              ]
            }
          ],
          vetAlert: [
            'Hálito com cheiro de acetona',
            'Vômito + anorexia em cão diabético (cetoacidose)',
            'Hipoglicemia: tremores, inconsciência',
            'Glicemia persistentemente > 400 mg/dL',
            'Perda de peso apesar de comer bem',
            'ITU recorrente'
          ],
          prevention: [
            'Castração de fêmeas (elimina resistência à insulina por progesterona)',
            'Controle de peso (reduz resistência à insulina)',
            'Prevenção de pancreatite (dieta adequada, sem gordura excessiva)',
            'Triagem de glicemia em raças predispostas acima de 7 anos'
          ],
          myths: [
            { myth: 'Cão diabético não pode ter qualidade de vida', truth: 'Com insulina adequada e comprometimento do tutor, cão diabético vive muitos anos com excelente qualidade de vida.' },
            { myth: 'Insulina pode ser dada uma vez ao dia para facilitar', truth: 'Caninsulin e NPH têm duração de 12h — dose única leva a hiperglicemia por 12h e hipoglicemia nas horas seguintes. Sempre duas doses.' }
          ],
          faq: [
            { q: 'E se eu esquecer de aplicar a insulina?', a: 'Não aplique dose dupla depois. Se lembrar em até 2h: aplicar meia dose. Se for mais tarde: pular e recomeçar normalmente no próximo horário. Sempre contatar o veterinário para orientação.' },
            { q: 'Quanto custa manter um cão diabético?', a: 'Insulina Caninsulin: R$150-200/mês. Seringas, glicosímetro, tiras. Consultas mensais. É comprometimento financeiro e de tempo — mas o cão tem qualidade de vida excelente.' }
          ]
        }
      ]
    },
    {
      id: 'hipotireoidismo',
      name: 'Hipotireoidismo',
      emoji: '🦋',
      gradient: 'grad-blue',
      description: 'Deficiência de hormônios tireoidianos (T4/T3) causando hipometabolismo generalizado. A endocrinopatia mais frequente em cães de meia-idade a idosos.',
      prevalence: 'Afeta 1 em cada 200 cães; Golden, Labrador, Doberman, Schnauzer miniatura têm maior predisposição.',
      protocols: [
        {
          id: 'proto-hipotireoidismo',
          title: 'Diagnóstico e Tratamento do Hipotireoidismo',
          subtitle: 'T4 livre e TSH como ferramentas diagnósticas, levotiroxina para suplementação',
          stages: [
            {
              id: 's0', label: 'Eutireoidismo (normal)', description: 'Função tireoidiana adequada.',
              signs: ['Peso estável', 'Pelagem normal', 'Energia adequada para a idade'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Hipotireoidismo leve', description: 'Sinais inespecíficos de hipometabolismo.',
              signs: ['Ganho de peso sem mudança de alimentação', 'Letargia leve', 'Intolerância ao frio', 'Queda de pelo bilateral e simétrica'],
              urgency: 'low'
            },
            {
              id: 's2', label: 'Hipotireoidismo moderado/grave', description: 'Sinais clássicos estabelecidos.',
              signs: ['Obesidade resistente ao tratamento', 'Pele seca e espessa ("pele de elefante")', 'Alopecia bilateral simétrica sem prurido', 'Face "trágica" — infiltração mixedematosa', 'Bradicardia', 'Fraqueza muscular', 'Constipação'],
              urgency: 'moderate'
            }
          ],
          triggers: [
            'Tireoidite linfocítica autoimune (destruição imune da tireoide)',
            'Atrofia folicular idiopática',
            'Menos comum: carcinoma tireoidiano',
            'Doença não-tireoidiana (síndrome do eutireoidismo doente): T4 baixo por doença grave não relacionada'
          ],
          steps: [
            {
              title: 'Diagnóstico correto — evitar falso-positivo',
              description: 'T4 total pode estar baixo por doença não-tireoidiana. A combinação T4 livre + TSH aumenta a especificidade diagnóstica.',
              duration: 'Diagnóstico',
              icon: '🔬',
              checklist: [
                'T4 total: triagem inicial (baixo sensibilidade)',
                'T4 livre por diálise de equilíbrio: mais específico',
                'TSH endógeno canino: elevado em hipotireoidismo primário',
                'Diagnóstico confirmado: T4 livre baixo + TSH elevado',
                'Hemograma: anemia normocítica normocrômica (clássica)',
                'Bioquímica: hipercolesterolemia (85% dos casos), ALT elevada'
              ]
            },
            {
              title: 'Tratamento com levotiroxina',
              description: 'Suplementação com L-T4 sintética (levotiroxina). Inicia-se baixo e ajusta conforme resposta clínica e T4.',
              duration: 'Tratamento vitalício',
              icon: '💊',
              checklist: [
                'Levotiroxina: 20 µg/kg 2x/dia (início)',
                'Administrar em jejum (30-60 min antes da refeição): aumenta absorção em 25%',
                'Resposta clínica esperada: 4-8 semanas',
                'Meta T4 pós-dose (4-6h após): 25-50 nmol/L',
                'Ajuste de dose: baseado no T4 pós-dose e resposta clínica',
                'Síndrome do eutireoidismo doente: NÃO tratar — trata a doença de base'
              ],
              warning: 'Superdosagem de levotiroxina causa tireotoxicose: taquicardia, polifagia, agitação, perda de peso. Se ocorrer, reduzir a dose.'
            }
          ],
          checklists: [
            {
              label: 'Monitoramento do Tratamento',
              freq: 'monthly',
              items: [
                'Peso: perdendo gradualmente com levotiroxina?',
                'Pelagem: crescimento novo visível em 4-8 semanas?',
                'Energia: melhorou?',
                'T4 pós-dose: dentro do alvo?',
                'Levotiroxina sendo dada em jejum?'
              ]
            }
          ],
          vetAlert: [
            'Coma mixedematoso (raro): hipotermia + inconsciência + bradicardia',
            'Neuropatia periférica (fraqueza dos membros)',
            'Megaesôfago associado'
          ],
          prevention: [
            'Não há prevenção conhecida para tireoidite autoimune',
            'Triagem de T4 em raças predispostas acima de 5 anos',
            'Evitar fatores que diminuem T4 artificialmente (sulfonamidas, glicocorticoides)'
          ],
          myths: [
            { myth: 'Todo cão que engorda tem hipotireoidismo', truth: 'Hipotireoidismo é uma causa, mas obesidade é multifatorial. Confirmar com T4 livre + TSH antes de iniciar levotiroxina.' }
          ],
          faq: [
            { q: 'Quanto tempo demora para ver melhora com levotiroxina?', a: '2-4 semanas para melhora energética e de comportamento. 4-8 semanas para crescimento de pelo. 3-6 meses para normalização completa de colesterol e peso.' }
          ]
        }
      ]
    }
  ]
};
