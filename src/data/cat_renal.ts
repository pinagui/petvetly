import type { Category } from './types';

export const catRenal: Category = {
  id: 'renal',
  name: 'Renal & Urinário',
  emoji: '🫘',
  gradient: 'grad-blue',
  description: 'Insuficiência renal crônica, cistite, urolitíase e infecção do trato urinário em cães',
  conditions: [
    {
      id: 'irc',
      name: 'Insuficiência Renal Crônica (IRC)',
      emoji: '🫘',
      gradient: 'grad-blue',
      description: 'Perda progressiva e irreversível da função renal. O rim perde capacidade de filtrar toxinas, regular eletrólitos e produzir eritropoietina. Doença silenciosa que só manifesta sinais quando >75% da função está comprometida.',
      prevalence: 'Afeta 1-3% de todos os cães; aumenta para 10% em cães acima de 10 anos.',
      protocols: [
        {
          id: 'proto-irc',
          title: 'Manejo da Insuficiência Renal Crônica',
          subtitle: 'Estadiamento IRIS, controle dietético e tratamento de suporte',
          stages: [
            {
              id: 's0', label: 'IRIS Estágio 1 — Não azotêmico', description: 'Lesão renal sem elevação de ureia/creatinina ainda.',
              signs: ['Creatinina < 1,4 mg/dL', 'SDMA levemente elevado (>18 µg/dL)', 'Proteinúria presente', 'Sem sinais clínicos'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'IRIS Estágio 2 — Azotemia leve', description: 'Início da azotemia — sinais clínicos leves.',
              signs: ['Creatinina 1,4-2,8 mg/dL', 'Sede aumentada', 'Urinar mais que o normal', 'Perda de peso gradual', 'Perda de massa muscular'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'IRIS Estágio 3 — Azotemia moderada', description: 'Sinais mais evidentes de uremia.',
              signs: ['Creatinina 2,9-5,0 mg/dL', 'Vômito e inapetência', 'Odor urêmico do hálito', 'Úlceras orais', 'Anemia', 'Fraqueza progressiva'],
              urgency: 'high'
            },
            {
              id: 's3', label: 'IRIS Estágio 4 — Uremia grave', description: 'Uremia grave com risco de vida.',
              signs: ['Creatinina > 5,0 mg/dL', 'Prostração severa', 'Vômito persistente', 'Recusa total de alimento', 'Convulsões urêmicas', 'Anemia grave (mucosas brancas)'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Envelhecimento: principal fator em cães acima de 7-10 anos',
            'Doença renal congênita: displasia renal (Cocker, Boxer, Golden)',
            'Infecções crônicas: leptospirose, doenças transmitidas por carrapatos (erliquiose)',
            'Anti-inflamatórios AINEs em uso crônico sem proteção renal',
            'Aminoglicosídeos (gentamicina): altamente nefrotóxico',
            'Hipertensão arterial sistêmica',
            'Urolitíase com obstrução recorrente',
            'Proteinúria glomerular crônica'
          ],
          steps: [
            {
              title: 'Diagnóstico e estadiamento IRIS',
              description: 'O estadiamento correto da IRC determina o tratamento. O sistema IRIS usa creatinina, SDMA, proteinúria e pressão arterial.',
              duration: 'Diagnóstico inicial + monitoramento regular',
              icon: '🔬',
              checklist: [
                'Bioquímica: creatinina, ureia, fósforo, sódio, potássio',
                'SDMA (marcador mais precoce de IRC — detecta antes da creatinina)',
                'Hemograma completo (anemia por IRC)',
                'Urinálise com sedimento e proporção proteína/creatinina urinária (UP/UC)',
                'Pressão arterial (hipertensão é comum e agrava a IRC)',
                'Ultrassonografia renal: tamanho, ecogenicidade, cálculos',
                'Reavaliação a cada 3-6 meses conforme estágio'
              ]
            },
            {
              title: 'Dieta renal — pilar fundamental do tratamento',
              description: 'Dieta renal reduz a carga de proteína, fósforo e sódio sobre os rins. Estudos mostram que alonga a sobrevida em até 2 vezes em cães com IRC.',
              duration: 'Mudança gradual e permanente',
              icon: '🥗',
              checklist: [
                'Dieta comercial renal veterinária: Hills k/d, Royal Canin Renal, Purina NF',
                'Proteína reduzida e de alta qualidade',
                'Fósforo reduzido: essencial — hiperfosfatemia acelera a progressão',
                'Sódio moderado: controle da hipertensão',
                'Aumentar palatabilidade se inapetente: aquecer levemente',
                'Transição gradual (7-10 dias): misturar ração nova progressivamente',
                'Cão que rejeita ração renal: consulte veterinário — privação proteica piora se não comer'
              ],
              warning: 'Restrição proteica excessiva em IRC precoce piora a perda de massa muscular. Proteína é MODULADA, não eliminada. Seguir as recomendações da dieta veterinária específica.'
            },
            {
              title: 'Hidratação — fundamental',
              description: 'Cão com IRC urina muito e se desidrata facilmente. Aumentar ingestão de água é essencial.',
              duration: 'Permanente',
              icon: '💧',
              checklist: [
                'Múltiplas fontes de água pela casa',
                'Fontes de água corrente (preferência natural dos cães)',
                'Adicionar água à ração (umidificar ração seca)',
                'Ração úmida: tem 70-80% de umidade vs. 10% da seca',
                'Em casos graves: fluidoterapia subcutânea domiciliar (veterinário ensina)',
                'Monitorar: se reduzir ingestão de água → sinais de uremia'
              ]
            },
            {
              title: 'Controle do fósforo com quelantes',
              description: 'Quando a dieta renal sozinha não controla o fósforo, quelantes de fósforo são adicionados à alimentação.',
              duration: 'Conforme resultado dos exames',
              icon: '💊',
              checklist: [
                'Carbonato de cálcio: 90mg/kg/dia dividido nas refeições',
                'Hidróxido de alumínio: alternativa quando há hipercalcemia',
                'Cloridrato de sevelamer: quelante mais moderno',
                'Meta: fósforo sérico < 4,5 mg/dL (estágio 1-2), < 5,0 (estágio 3)',
                'Quelante deve ser dado durante as refeições — não em jejum'
              ]
            },
            {
              title: 'Controle de comorbidades',
              description: 'Hipertensão, anemia e proteinúria têm tratamentos específicos que protegem os rins e melhoram a qualidade de vida.',
              duration: 'Tratamento crônico e individualizado',
              icon: '⚕️',
              checklist: [
                'Hipertensão (PA > 160 mmHg): amlodipina 0,1-0,25mg/kg/dia',
                'Proteinúria (UP/UC > 0,5): benazepril ou enalapril 0,5mg/kg/dia',
                'Anemia (ht < 25%): EPO recombinante humana (darbopoetina off-label) ou ferro IV',
                'Vômito: ondansetrona 0,1-0,15mg/kg 2-3x/dia',
                'Constipação (laxativos de fósforo): lactulose'
              ]
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Diário em Casa',
              freq: 'daily',
              items: [
                'Comeu? Quanto % da porção?',
                'Bebeu água? Quantidade normal ou maior/menor?',
                'Vômito? Quantas vezes?',
                'Peso: pesagem semanal (apontar perda precoce)',
                'Energia: mais ou menos ativo que ontem?',
                'Cor das mucosas: rosadas ou pálidas?'
              ]
            },
            {
              label: 'Exames de Acompanhamento',
              freq: 'monthly',
              items: [
                'IRIS Estágio 1-2: bioquímica a cada 3-6 meses',
                'IRIS Estágio 3: bioquímica a cada 1-3 meses',
                'Pressão arterial: em cada consulta',
                'Urinálise com UP/UC: a cada 3-6 meses',
                'Peso: em cada consulta'
              ]
            }
          ],
          vetAlert: [
            'Recusa total de alimento por mais de 24h',
            'Vômito persistente (mais de 3x em um dia)',
            'Prostração intensa — não se levanta',
            'Mucosas brancas (anemia grave)',
            'Convulsão (uremia severa)',
            'Ausência de urinar por mais de 24h (obstrução ou oligúria terminal)'
          ],
          prevention: [
            'Exames anuais de bioquímica em cães acima de 7 anos',
            'Evitar AINEs crônicos sem monitoramento renal',
            'Controle de pressão arterial',
            'Tratamento precoce de leptospirose e doenças infecciosas',
            'Hidratação adequada ao longo da vida',
            'Evitar aminoglicosídeos sem indicação precisa e monitoramento'
          ],
          myths: [
            { myth: 'Cão com IRC não pode comer proteína', truth: 'Proteína é REDUZIDA e de alta qualidade — não eliminada. Restrição excessiva causa sarcopenia (perda muscular) que piora o prognóstico.' },
            { myth: 'IRC tem cura com tratamento certo', truth: 'IRC é irreversível — os néfrons perdidos não se regeneram. O tratamento preserva a função restante e melhora a qualidade de vida.' }
          ],
          faq: [
            { q: 'Meu cão tem IRC — quanto tempo de vida?', a: 'Impossível dizer com precisão. Estágio 1-2: sobrevida de anos com tratamento correto. Estágio 3: meses a anos. Estágio 4: semanas a meses. Qualidade de vida é tão importante quanto quantidade.' },
            { q: 'Preciso fazer fluidoterapia em casa?', a: 'Em estágios avançados, fluidoterapia subcutânea domiciliar (100-250mL solução salina 2-3x semana) melhora significativamente o bem-estar. Veterinário ensina a técnica — é segura e bem tolerada.' }
          ]
        }
      ]
    },
    {
      id: 'cistite',
      name: 'Infecção Urinária (ITU / Cistite)',
      emoji: '💧',
      gradient: 'grad-blue',
      description: 'Inflamação da bexiga por bactérias — principalmente E. coli. Causa disúria, hematúria e urgência urinária. Fêmeas adultas são mais predispostas anatomicamente.',
      prevalence: 'Afeta 14% dos cães durante a vida; fêmeas têm 3x mais risco que machos.',
      protocols: [
        {
          id: 'proto-cistite',
          title: 'Diagnóstico e Tratamento de Infecção Urinária',
          subtitle: 'Urocultura guiando o antibiótico correto',
          stages: [
            {
              id: 's0', label: 'Sem infecção', description: 'Urina sem bactérias, parâmetros normais.',
              signs: ['Urina amarela clara a âmbar', 'Sem urgência ou straining', 'Volume e frequência normais'],
              urgency: 'low'
            },
            {
              id: 's1', label: 'Cistite simples', description: 'Infecção confinada à bexiga.',
              signs: ['Urina frequente em pequena quantidade', 'Lambedura excessiva da genitália', 'Urina turva ou com odor forte', 'Hematúria (sangue na urina)', 'Sem febre, come normalmente'],
              urgency: 'moderate'
            },
            {
              id: 's2', label: 'Pielonefrite (infecção renal)', description: 'Infecção ascendeu aos rins.',
              signs: ['Febre > 39,5°C', 'Dor à palpação dos rins (lombar)', 'Prostração severa', 'Vômito e inapetência', 'Leucocitose intensa'],
              urgency: 'emergency'
            }
          ],
          triggers: [
            'Fêmeas: uretra curta facilita ascensão bacteriana',
            'Cão que retém urina por horas',
            'Litíase urinária: cálculos facilitam colonização bacteriana',
            'Imunossupressão: diabetes, Cushing, uso de corticoide',
            'Higiene perineal inadequada em fêmeas com prega de vulva'
          ],
          steps: [
            {
              title: 'Urinálise e urocultura',
              description: 'Tratar ITU sem urocultura é má prática — resistência bacteriana está aumentando. A urocultura com antibiograma identifica o agente e o antibiótico mais eficaz.',
              duration: 'Antes de iniciar antibiótico',
              icon: '🔬',
              checklist: [
                'Coleta ideal: cistocentese (agulha direto na bexiga) pelo veterinário',
                'Coleta em casa: jato médio em frasco estéril (menos confiável)',
                'Urinálise: densidade, pH, proteína, glicose, sedimento',
                'Urocultura + antibiograma: resultado em 3-5 dias',
                'Iniciar antibiótico empírico enquanto aguarda resultado se sintomas severos'
              ]
            },
            {
              title: 'Antibioticoterapia baseada em urocultura',
              description: 'E. coli é o agente mais comum. O antibiótico correto é determinado pelo antibiograma.',
              duration: '7-14 dias conforme gravidade',
              icon: '💊',
              checklist: [
                'E. coli sensível: amoxicilina-clavulanato 15-25mg/kg 2x/dia por 7-10 dias',
                'E. coli resistente: trimetoprim-sulfa ou enrofloxacino',
                'Pielonefrite: fluoroquinolona por 4-6 semanas',
                'Urocultura controle em 5-7 dias após término do antibiótico',
                'ITU recorrente (3+ ao ano): investigar causa predisponente e considerar profilaxia'
              ],
              warning: 'Não interromper o antibiótico antes do prazo por sensação de melhora. Infecção subclínica persiste e seleciona bactérias resistentes.'
            }
          ],
          checklists: [
            {
              label: 'Monitoramento Durante Tratamento',
              freq: 'daily',
              items: [
                'Frequência urinária: normalizando?',
                'Cor da urina: menos turva?',
                'Hematúria: diminuindo?',
                'Lambedura de genitália: menos frequente?',
                'Antibiótico dado nos horários corretos?'
              ]
            }
          ],
          vetAlert: [
            'Febre associada a sinais urinários',
            'Hematúria profusa',
            'Incapacidade de urinar (obstrução — emergência em machos)',
            'Sem melhora após 48-72h de antibiótico',
            'Recorrência após antibiótico correto (investigar urólito, anatomia)'
          ],
          prevention: [
            'Acesso livre ao quintal para urinar frequentemente',
            'Hidratação adequada (favorece fluxo urinário)',
            'Higiene perineal em fêmeas com prega vulvar profunda',
            'Controle de diabetes e Cushing',
            'Urinálise anual em cães predispostos'
          ],
          myths: [
            { myth: 'Arando (chá de bardana, cranberry) cura ITU', truth: 'Cranberry pode reduzir aderência bacteriana preventivamente, mas não trata infecção estabelecida. Antibiótico é necessário para cura.' }
          ],
          faq: [
            { q: 'Posso dar antibiótico que sobrou da última ITU?', a: 'Não — antibiótico específico depende do agente causador (que pode ser diferente) e do antibiograma. Tratar com antibiótico errado cria resistência sem resolver a infecção.' }
          ]
        }
      ]
    }
  ]
};
