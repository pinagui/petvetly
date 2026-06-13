import type { Category } from './types';
export const catBaco: Category = {
  id: 'baco', name: 'Baço — Esplenomegalia e Tumores', emoji: '🩸', gradient: 'g-red',
  description: 'Baço aumentado, hemangiossarcoma e ruptura esplênica — emergência canina frequente',
  conditions: [
    {
      id: 'esplenomegalia', name: 'Esplenomegalia e Hemangiossarcoma', emoji: '🩸', gradient: 'g-red',
      description: 'Baço aumentado — causas benignas e malignas, ruptura e emergência hemorrágica',
      prevalence: 'Hemangiossarcoma esplênico: tumor mais comum do baço canino. Pastor Alemão e Labrador: altamente predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Baço Canino', subtitle: 'Diagnóstico, esplenectomia e emergência por ruptura',
        stages: [
          { id: 's1', label: 'Achado Incidental (Assintomático)', urgency: 'moderate', description: 'Nódulo esplênico descoberto no ultrassom de rotina.', signs: ['Ultrassom: nódulo ou baço aumentado', 'Sem sintomas', 'Raças predispostas > 8 anos', 'Diagnóstico diferencial: benigno vs maligno'] },
          { id: 's2', label: 'Ruptura Esplênica (Emergência)', urgency: 'emergency', description: 'Hemorragia intra-abdominal aguda — colapso súbito.', signs: ['Colapso ou fraqueza súbita', 'Abdome distendido', 'Mucosas pálidas', 'Pulso fraco e taquicardia', 'Cão sênior de grande porte: emergência máxima'] },
        ],
        triggers: ['Hemangiossarcoma (tumor vascular maligno)', 'Hematoma esplênico benigno', 'Esplenomegalia reativa (infecção, imune)', 'Trauma abdominal'],
        steps: [
          { title: 'Diagnóstico e tratamento', icon: '🔪', duration: 'Cirurgia de emergência se ruptura',
            description: 'Ultrassom: nódulo esplênico. Citologia. Esplenectomia: cirurgia de eleição.',
            checklist: ['Ultrassom abdominal: tamanho e ecogenicidade do baço?', 'Líquido livre abdominal = ruptura iminente ou ocorrida', 'Hemograma + coagulograma urgente', 'Esplenectomia: remoção cirúrgica do baço (curativa se benigno)', 'Hemangiossarcoma: esplenectomia + quimioterapia (doxorrubicina)', 'Cão colapsa em casa: emergência veterinária imediata', 'NÃO palpar abdome com força: pode romper o baço'] },
        ],
        checklists: [{ label: 'Monitoramento Cão com Nódulo Esplênico', freq: 'monthly', items: ['Ultrassom programado?', 'Cão ativo e bem?', 'Abdome sem distensão?', 'Mucosas róseas?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Achado Ultrassom', tasks: ['Nódulo esplênico: avaliação com oncologista veterinário', 'Tamanho > 3cm ou crescimento rápido: cirurgia indicada', 'Biópsia: citologia ou aguardar esplenectomia (histopatológico)'], note: 'Regra do 2/3: 2/3 dos nódulos esplênicos em cão são malignos. Esplenectomia preferencialmente indicada' },
          { day: 2, label: 'Dia 2 — Decisão Cirúrgica', tasks: ['Esplenectomia eletiva: antes da ruptura?', 'Risco cirúrgico (idade, coração)?', 'Oncologista: pré-operatório?'] },
          { day: 3, label: 'EMERGÊNCIA — Ruptura', tasks: ['Cão colapsou ou abdome distendido?', 'Veterinário de emergência IMEDIATAMENTE', 'Fluidos e transfusão: estabilização pre-cirúrgica'] },
          { day: 4, label: 'Pós-Esplenectomia', tasks: ['UTI pós-operatória', 'Histopatológico: benigno ou maligno?', 'Arritmia cardíaca: monitorar 48-72h pós-cirurgia'] },
          { day: 5, label: 'Histopatológico', tasks: ['Benigno: prognóstico excelente', 'Hemangiossarcoma: oncologista, quimioterapia?', 'Sobrevida mediana HAS: 1-2 meses sem qmio, 4-6 meses com'] },
          { day: 6, label: 'Raças Predispostas — Rastreamento', tasks: ['Pastor Alemão > 7 anos: ultrassom semestral?', 'Golden, Labrador: ultrassom anual?', 'Qualquer cão sênior de grande porte: check-up inclui baço'] },
          { day: 7, label: 'Rastreamento Oncológico', tasks: ['Hemangiosarcoma estadiamento: pulmão, coração?', 'Ecocardiograma: tumor cardíaco concomitante em 25%?', 'Qualidade de vida pós-esplenectomia: boa'] },
        ],
        vetAlert: ['Cão que colapsa e abdome distendido: ruptura esplênica', 'Mucosas pálidas e fraqueza súbita', 'Após esplenectomia: arritmia é esperada nas primeiras 48h'],
        prevention: ['Rastreamento ultrassonográfico em raças predispostas > 7 anos', 'Não ignorar perda de peso e fraqueza leve em sênior de grande porte'],
        myths: [{ myth: 'Cão sem baço não vive normalmente', truth: 'Cão vive muito bem sem o baço. O baço não é essencial para a vida. Após esplenectomia, outros órgãos (medula, fígado, linfonodos) assumem funções esplênicas. Qualidade de vida pós-esplenectomia é excelente na maioria dos casos.' }],
        faq: [
          { q: 'Como saber se o nódulo no baço é benigno ou maligno?', a: 'Ultrassom não diferencia com certeza (sensibilidade ~60%). Citologia por FNA: risco de sangramento se vascular. Histopatológico (pós-esplenectomia): único diagnóstico definitivo. Por isso muitos oncologistas indicam esplenectomia diretamente para nódulos esplênicos em cães sêniores.' },
          { q: 'Com que frequência fazer ultrassom em Pastor Alemão sênior?', a: 'A partir de 7-8 anos: ultrassom abdominal a cada 6 meses. Qualquer nódulo novo > 1cm: avaliação imediata. Pastor Alemão é a raça com maior incidência de hemangiossarcoma esplênico — rastreamento proativo salva vidas.' },
        ],
      }],
    },
  ],
};
