import type { Category } from './types';
export const catOlhoAvancado: Category = {
  id: 'olho-avancado', name: 'Condições Avançadas dos Olhos', emoji: '👁️', gradient: 'g-blue',
  description: 'Glaucoma, catarata, úlcera de córnea e ceratoconjuntivite seca (KCS)',
  conditions: [
    {
      id: 'glaucoma-canino', name: 'Glaucoma Canino', emoji: '👁️', gradient: 'g-red',
      description: 'Pressão intraocular elevada — dor grave e cegueira irreversível se não tratado urgentemente',
      prevalence: 'Afeta 1-2% dos cães; Cocker Spaniel, Chow Chow, Basset Hound predispostos; cegueira ocorre em horas a dias',
      protocols: [{
        id: 'p1', title: 'Protocolo Glaucoma Canino', subtitle: 'Diagnóstico pela tonometria, emergência e tratamento crônico',
        stages: [
          { id: 's1', label: 'Glaucoma Agudo', urgency: 'emergency', description: 'Dor intensa e pressão intraocular > 30 mmHg.', signs: ['Olho vermelho intenso', 'Buftalmia (olho aumentado de tamanho)', 'Cão esfrega o olho com a pata', 'Fotofobia (foge da luz)', 'Pupila dilatada e não reage à luz'] },
          { id: 's2', label: 'Glaucoma Crônico', urgency: 'high', description: 'Pressão cronicamente elevada com dano progressivo.', signs: ['Olho gradualmente maior', 'Cegueira progressiva', 'Opacidade da córnea', 'Cão não enxerga no olho afetado'] },
        ],
        triggers: ['Predisposição racial', 'Uveíte anterior (secundária)', 'Luxação de cristalino', 'Tumores intraoculares', 'Idiopático (primário em raças predispostas)'],
        steps: [
          { title: 'Emergência ocular', icon: '🚨', duration: 'Emergência',
            description: 'Glaucoma agudo: pressão > 30mmHg é emergência ocular.',
            checklist: ['Oftalmologista veterinário IMEDIATAMENTE', 'Tonometria (medir pressão): > 30mmHg = tratar urgente', 'Manitol IV: redução emergencial da pressão', 'Dorzolamida/Brinzolamida colírio: inibidor da anidrase carbônica', 'Timolol colírio: reduz produção de humor aquoso', 'Cegueira irreversível em 24-72h se não tratado', 'Glaucoma crônico refratário: enucleação ou implante de silicone'] },
        ],
        checklists: [{ label: 'Monitoramento de Glaucoma', freq: 'daily', items: ['Colírio dado?', 'Olho vermelho hoje?', 'Cão esfregou o olho?', 'Tamanho do olho parece aumentado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Oftalmologista veterinário IMEDIATAMENTE', 'Tonometria urgente', 'Manitol e colírio prescrito'], note: 'Cada hora de pressão elevada destrói células da retina — irreversivelmente' },
          { day: 2, label: 'Dia 2 — Pressão Controlada?', tasks: ['Pressão intraocular < 20 mmHg?', 'Colírio a cada 8-12h conforme prescrito', 'Olho menos vermelho?'] },
          { day: 3, label: 'Dia 3 — Olho Contralateral', tasks: ['Glaucoma primário: 50% chance do outro olho ser afetado', 'Colírio preventivo no olho saudável?', 'Acompanhamento com oftalmologista veterinário'] },
          { day: 4, label: 'Dia 4 — Visão', tasks: ['Cão enxerga no olho afetado?', 'Reflexo pupilar presente?', 'Resposta a ameaça?'] },
          { day: 5, label: 'Dia 5 — Tratamento Crônico', tasks: ['Colírio: compliance rigorosa', 'Controle de pressão mensal', 'Efeito colateral do colírio?'] },
          { day: 6, label: 'Dia 6 — Cegueira Definitiva', tasks: ['Olho cego e com dor (buftálmico): enucleação indicada', 'Cão sem visão se adapta muito bem?', 'Implante de prótese de silicone: estético'] },
          { day: 7, label: 'Dia 7 — Qualidade de Vida', tasks: ['Cego mas sem dor: qualidade de vida mantida', 'Cão se orienta pelo olfato e audição?', 'Mapa cognitivo do ambiente mantido?'] },
        ],
        vetAlert: ['Olho vermelho + buftalmia = EMERGÊNCIA oftalmológica', 'Cegueira súbita monocular', 'Pupila dilatada sem resposta à luz'],
        prevention: ['Raças predispostas: tonometria anual a partir de 3 anos', 'Tratamento precoce de uveíte (glaucoma secundário)', 'Colírio preventivo no olho contralateral em primário'],
        myths: [{ myth: 'Glaucoma ocorre só em humanos idosos', truth: 'Glaucoma canino primário ocorre a partir de 4-6 anos em raças predispostas. É uma das emergências oftalmológicas mais frequentes em cães.' }],
        faq: [
          { q: 'Cão cego consegue ter qualidade de vida?', a: 'Absolutamente sim. Cão cego que perdeu a visão gradualmente se adapta muito bem usando olfato, audição e memória espacial. Cegueira súbita tem período de adaptação mais difícil, mas a maioria dos cães se ajusta em poucas semanas.' },
          { q: 'Glaucoma pode ser curado com cirurgia?', a: 'Cicloablação a laser (destruição dos corpos ciliares) reduz a produção de humor aquoso e controla a pressão em alguns casos. Implantes de drenagem: resultados variáveis. Não há cura definitiva — é manejo crônico da pressão.' },
        ],
      }],
    },
    {
      id: 'kcs-olho-seco', name: 'Olho Seco (KCS — Ceratoconjuntivite Seca)', emoji: '💧', gradient: 'g-amber',
      description: 'Deficiência de lágrima — opacidade progressiva e úlceras de córnea',
      prevalence: 'Shih Tzu, Bulldog, Lhasa: alta prevalência; teste de Schirmer < 10mm/min é diagnóstico',
      protocols: [{
        id: 'p1', title: 'Protocolo KCS', subtitle: 'Ciclosporina ou tacrolimus colírio, lágrima artificial e higiene ocular',
        stages: [
          { id: 's1', label: 'Leve', urgency: 'moderate', description: 'Secreção mucosa e córnea sem pigmentação.', signs: ['Secreção mucosa amarelo-esverdeada', 'Córnea normal', 'Schirmer: 10-14mm/min'] },
          { id: 's2', label: 'Grave', urgency: 'high', description: 'Opacidade e pigmentação da córnea com cegueira progressiva.', signs: ['Córnea pigmentada (marrom/preta)', 'Olho com aparência seco e opaco', 'Cegueira progressiva', 'Schirmer < 5mm/min'] },
        ],
        triggers: ['Imunomediado (mais comum)', 'Hipotireoidismo', 'Neuropatia (KCS neurogênica)', 'Sulfa (antibiótico que destrói glândulas lacrimais)'],
        steps: [
          { title: 'Estimular a lágrima natural', icon: '💊', duration: 'Tratamento crônico',
            description: 'Ciclosporina ou tacrolimus: estimula a produção lacrimal própria.',
            checklist: ['Ciclosporina 0,2% (Optimmune) colírio: 2x/dia', 'Tacrolimus 0,03%: segunda opção se sem resposta à ciclosporina', 'Resposta em 4-6 semanas (não esperar resultado imediato)', 'Lágrima artificial: complemento entre as doses', 'Limpeza ocular com soro fisiológico 2-3x/dia', 'Hipotireoidismo associado: tratar o hipotireoidismo', 'Pigmentação da córnea: pode regredir parcialmente com tratamento'] },
        ],
        checklists: [{ label: 'Manejo KCS', freq: 'daily', items: ['Colírio dado 2x/dia?', 'Secreção mucosa limpa?', 'Olho com aspecto úmido?', 'Cão esfregou o olho hoje?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Teste de Schirmer (veterinário)', 'Ciclosporina prescrita?', 'Limpeza ocular iniciada?'] },
          { day: 2, label: 'Dia 2 — Colírio', tasks: ['Ciclosporina 2x/dia (manhã e noite)', 'Esfriamento do olho com curativo úmido antes do colírio?', 'Limpeza antes de cada aplicação'], note: 'Ciclosporina leva 4-6 semanas para ter efeito — não desistir antes' },
          { day: 3, label: 'Dia 3 — Lágrima Artificial', tasks: ['Lágrima artificial sem conservante (melhor para uso frequente)', '4-6x/dia entre as doses do colírio', 'Gel lacrimal artificial: maior duração'] },
          { day: 4, label: 'Dia 4 — Semana 1', tasks: ['Secreção diminuiu?', 'Córnea com aparência menos seca?', 'Cão menos incomodado?'] },
          { day: 5, label: 'Dia 5 — 4 Semanas', tasks: ['Novo teste de Schirmer: melhorou?', '> 15mm/min: excelente resposta', 'Sem resposta: tacrolimus?', 'Pigmentação: regredindo?'] },
          { day: 6, label: 'Dia 6 — Crônico', tasks: ['Tratamento vitalício na maioria dos casos', 'Reduzir para 1x/dia se Schirmer > 20mm/min: discutir com vet', 'Recaída ao parar: retomar imediatamente'] },
          { day: 7, label: 'Dia 7 — Cirurgia', tasks: ['KCS refratária: transposição do ducto parótido', 'Saliva no lugar da lágrima: funciona mas causa calcificação de córnea', 'Casos extremos sem resposta a colírio'] },
        ],
        vetAlert: ['Úlcera de córnea secundária ao KCS', 'Opacidade progressiva da córnea', 'Cão esfregando com força o olho'],
        prevention: ['Evitar sulfa em raças predispostas', 'Hipotireoidismo tratado protege as glândulas lacrimais', 'Check-up ocular em raças de olho proeminente'],
        myths: [{ myth: 'Secreção no olho é sempre infecção que requer antibiótico', truth: 'KCS produz secreção mucosa densa sem necessidade de antibiótico (a não ser que haja infecção secundária confirmada). Antibiótico sem diagnóstico adequado causa resistência e não trata a causa do problema.' }],
        faq: [
          { q: 'KCS tem cura ou é para sempre?', a: 'Depende da causa. Imunomediado (mais comum): manejo crônico com colírio — a maioria precisa de tratamento vitalício. KCS por sulfa: pode reverter ao suspender o medicamento. KCS neurogênica: prognóstico mais reservado.' },
        ],
      }],
    },
  ],
};
