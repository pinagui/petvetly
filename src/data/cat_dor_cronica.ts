import type { Category } from './types';
export const catDorCronica: Category = {
  id: 'dor-cronica', name: 'Manejo da Dor Crônica', emoji: '😣', gradient: 'g-red',
  description: 'Reconhecer dor em cão, escala de dor, multimodal analgesia e cuidados paliativos',
  conditions: [
    {
      id: 'reconhecer-dor', name: 'Como Reconhecer Dor em Cão', emoji: '😣', gradient: 'g-red',
      description: 'Cão esconde dor — sinais sutis que os tutores devem conhecer',
      prevalence: 'Dor crônica afeta 20-30% dos cães, principalmente articulares — muito subdiagnosticada',
      protocols: [{
        id: 'p1', title: 'Protocolo de Reconhecimento e Manejo da Dor', subtitle: 'Escala de dor, multimodal analgesia e ajuste de vida',
        stages: [
          { id: 's1', label: 'Dor Aguda', urgency: 'high', description: 'Dor súbita e intensa — vocalização e proteção da área.', signs: ['Vocalização (latido, gemido) ao tocar a área', 'Mordeu quando tocado na área dolorosa', 'Posição antálgica (proteção)', 'Recusa de movimento'] },
          { id: 's2', label: 'Dor Crônica Oculta', urgency: 'moderate', description: 'Dor silenciosa que muda o comportamento gradualmente.', signs: ['Menos brincar que antes', 'Demora a se levantar de manhã', 'Não pula mais no sofá', 'Menos interativo', 'Boceja excessivamente', 'Evita escadas'] },
        ],
        triggers: ['Artrose', 'Doença discal', 'Neoplasia', 'Pós-cirúrgico', 'ITU', 'Otite'],
        steps: [
          { title: 'Escala de dor e multimodal analgesia', icon: '📊', duration: 'Avaliação regular',
            description: 'Escala de Glasgow ou CMPS (Composite Measure Pain Scale) para mensuração objetiva.',
            checklist: ['Escala de dor canina: 0-10 (0=sem dor, 10=dor máxima)', 'AINE: meloxicam, carprofeno (com proteção gástrica)', 'Gabapentina: dor neuropática e crônica', 'Tramadol: dor moderada a grave', 'Fisioterapia: exercícios terapêuticos', 'Acupuntura veterinária: evidência crescente', 'Condroitina + glucosamina + ômega-3: suporte articular', 'Ambiente: rampas, cama ortopédica, pisos antiderrapantes'] },
        ],
        checklists: [{ label: 'Avaliação de Dor Diária', freq: 'daily', items: ['Cão levantou normalmente?', 'Brincou ou se moveu voluntariamente?', 'Comeu sem dificuldade?', 'Medicação de dor dada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Escala de Dor', tasks: ['Aplicar escala de dor: 0-10', 'Observar: postura, gait, interação', 'Registro para comparar na semana'], note: 'Dor em cão: mudança comportamental sutil é o maior sinal' },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Consulta com a escala de dor em mãos', 'Analgesia prescrita?', 'Exames para identificar a causa?'] },
          { day: 3, label: 'Dia 3 — Multimodal', tasks: ['AINE + gabapentina: combinação clássica', 'Cada medicação atua em receptor diferente', 'Efeito colateral de cada um monitorado?'] },
          { day: 4, label: 'Dia 4 — Ambiente', tasks: ['Rampas no lugar de escadas', 'Cama ortopédica (espuma de alta densidade)', 'Pisos antiderrapantes (tapete no corredor)?'], note: 'Ambiente adaptado reduz dor e melhora mobilidade sem custo de medicação' },
          { day: 5, label: 'Dia 5 — Fisioterapia', tasks: ['Fisioterapeuta veterinária: avaliação?', 'Hidroterapia: excelente para dor articular', 'TENS, laser terapêutico: modalidades disponíveis?'] },
          { day: 6, label: 'Dia 6 — Suplementação', tasks: ['Ômega-3 em alta dose: anti-inflamatório natural', 'Condroitina + glucosamina: suporte de cartilagem', 'CBD veterinário: evidência em progressão (usar com veterinário)?'] },
          { day: 7, label: 'Dia 7 — Reavaliação', tasks: ['Escala de dor atual vs. semana passada', 'Melhora com o tratamento?', 'Ajuste de dose indicado?'] },
        ],
        vetAlert: ['Escala de dor > 7 não controlada', 'Cão que parou de comer por dor', 'Dor aguda sem causa identificada'],
        prevention: ['Check-up anual com avaliação ortopédica', 'Peso saudável reduz carga articular', 'Suplementação preventiva em raças predispostas a partir de 5 anos'],
        myths: [{ myth: 'Cão que está quieto não está com dor', truth: 'Cão que está quieto, retraído e menos ativo PODE estar com dor crônica. Cães escondem dor por instinto evolutivo. Quietude e resignação em cão que antes era ativo é sinal de alerta.' }],
        faq: [
          { q: 'Posso dar dipirona para dor em cão?', a: 'Dipirona tem uso off-label em cão com alguma evidência de eficácia analgésica e antipirética. Dose orientada pelo veterinário. Não substitui AINE para dor inflamatória. Nunca ibuprofeno, paracetamol (tóxicos para cão), diclofenaco.' },
          { q: 'Acupuntura funciona para dor em cão?', a: 'Evidência crescente e reconhecida pela AVMA. Funciona melhor como complemento da analgesia convencional. Bem indicada para: artrose, dor discal, dor crônica refratária. Realizada por médico veterinário especializado em acupuntura.' },
        ],
      }],
    },
  ],
};
