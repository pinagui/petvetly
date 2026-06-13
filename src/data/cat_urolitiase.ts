import type { Category } from './types';
export const catUrolitiase: Category = {
  id: 'urolitiase', name: 'Cálculos Urinários (Urolitíase)', emoji: '🪨', gradient: 'g-amber',
  description: 'Pedras na bexiga e uretra — tipos, dissolução e cirurgia',
  conditions: [
    {
      id: 'calculos-vesicais', name: 'Cálculos na Bexiga', emoji: '🪨', gradient: 'g-amber',
      description: 'Struvita, oxalato e urato — diagnóstico por ultrassom e tratamento por tipo',
      prevalence: 'Afeta 1-3% dos cães; Dalmatian: predisposição a urato; Schnauzer: oxalato de cálcio',
      protocols: [{
        id: 'p1', title: 'Protocolo Urolitíase', subtitle: 'Identificação do tipo de cálculo e tratamento específico',
        stages: [
          { id: 's1', label: 'Cálculo Assintomático', urgency: 'moderate', description: 'Achado incidental no ultrassom.', signs: ['Sem sintomas evidentes', 'ITU recorrente', 'Descoberto em check-up de imagem'] },
          { id: 's2', label: 'Obstrução Uretral', urgency: 'emergency', description: 'Cão incapaz de urinar — emergência cirúrgica.', signs: ['Cão tenta urinar sem conseguir', 'Geme ao tentar urinar', 'Abdômen tenso e doloroso', 'Letargia progressiva', 'Emergência: uremia em 24-48h'] },
        ],
        triggers: ['Dieta inadequada (alta em magnésio/fósforo: struvita)', 'pH urinário errado', 'Desidratação crônica (urina concentrada)', 'Predisposição racial (Dalmatian: urato; Schnauzer, Bichon: oxalato)', 'ITU crônica (predispõe a struvita)'],
        steps: [
          { title: 'Diagnóstico e tratamento por tipo', icon: '🔬', duration: 'Diagnóstico e 4-12 semanas de dissolução',
            description: 'Tipo de cálculo determina tratamento.',
            checklist: ['Ultrassom vesical: confirmar presença e número', 'Radiografia: cálculos radiopacos (oxalato, struvita) vs. radiolúcidos (urato)', 'Análise do cálculo: fundamental para tratamento correto', 'STRUVITA: dissolução por dieta acidificante + antibiótico (se ITU)', 'OXALATO: sem dissolução — cirurgia + prevenção por dieta', 'URATO (Dalmatian): alopurinol + dieta hipopurínica', 'Obstrução: cateterização de emergência'] },
        ],
        checklists: [{ label: 'Controle de Urolitíase', freq: 'daily', items: ['Dieta específica para o tipo de cálculo?', 'Bebendo água adequada?', 'Urinando normalmente?', 'Sangue na urina?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Ultrassom para confirmar cálculo', 'Urinálise (pH, cristais)', 'Tipo de cálculo determinado?'], note: 'Tratar sem saber o tipo é erro — dissolução de struvita piora oxalato' },
          { day: 2, label: 'Dia 2 — Dieta Específica', tasks: ['Struvita: ração acidificante veterinária (Hills S/D, Royal Canin Urinary)', 'Oxalato: ração alcalinizante', 'Hidratação: dobrar ingestão de água'] },
          { day: 3, label: 'Dia 3 — Hidratação', tasks: ['Adicionar água ou caldo na ração', 'Múltiplas fontes de água', 'Dieta úmida para diluir urina'], note: 'Urina diluída = menor concentração de minerais cristalinos' },
          { day: 4, label: 'Dia 4 — ITU Associada (Struvita)', tasks: ['Antibiótico para ITU (struvita por urease bacteriana)?', 'Urocultura realizada?', 'Struvita sem ITU: dissolução por dieta apenas'] },
          { day: 5, label: 'Dia 5 — Monitoramento', tasks: ['Urina sem sangue?', 'Urina normalmente?', 'Dor? (incapacidade de urinar = emergência)'] },
          { day: 6, label: 'Dia 6 — Controle de Imagem', tasks: ['Ultrassom de controle em 4 semanas?', 'Cálculos struvita: dissolução esperada em 4-8 semanas', 'Oxalato: cirurgia agendada?'] },
          { day: 7, label: 'Dia 7 — Prevenção', tasks: ['Dieta de manutenção pós-dissolução', 'Hidratação como estilo de vida', 'Controle de imagem a cada 3-6 meses'] },
        ],
        vetAlert: ['Cão que não consegue urinar (obstrução) = EMERGÊNCIA', 'Vômito por uremia', 'Cálculos na uretra de macho (obstrução mais frequente)'],
        prevention: ['Hidratação excelente', 'Dieta de manutenção específica pós-cálculo', 'Controle de ITU recorrente', 'Ultrassom preventivo em raças predispostas'],
        myths: [{ myth: 'Toda pedra no rim pode ser dissolvida com dieta', truth: 'Struvita: pode ser dissolvida com dieta. Oxalato de cálcio: NÃO dissolve — precisa de cirurgia ou litotripsia. Identificar o tipo antes de iniciar qualquer tratamento dietético é essencial.' }],
        faq: [
          { q: 'Cão que teve cálculo vai ter de novo?', a: 'Alto risco de recidiva sem prevenção. Com dieta específica + hidratação + ultrassom de controle semestral: recidiva em 25-30%. Sem prevenção: recidiva em 50-80%.' },
          { q: 'Dieta veterinária de cálculo é necessária para sempre?', a: 'Struvita idiopática (sem ITU): 6-12 meses de dieta de dissolução, depois manutenção moderada. Oxalato, urato: dieta de prevenção permanente é fortemente recomendada.' },
        ],
      }],
    },
  ],
};
