import type { Category } from './types';
export const catRacasCondrodistroficas: Category = {
  id: 'racas-condrodistroficas', name: 'Raças Condrodistróficas — Saúde da Coluna', emoji: '🌭', gradient: 'g-amber',
  description: 'Dachshund, Basset Hound, Pekingês — hérnia discal e problemas vertebrais específicos',
  conditions: [
    {
      id: 'hansen-tipo1', name: 'Doença Discal de Hansen Tipo I (Condrodistrófico)', emoji: '🌭', gradient: 'g-red',
      description: 'Extrusão aguda de disco — emergência neurológica em Dachshund e raças afins',
      prevalence: 'Dachshund: 25% desenvolverão doença discal sintomática na vida. Tipo I: pico aos 3-6 anos',
      protocols: [{
        id: 'p1', title: 'Protocolo Hansen Tipo I', subtitle: 'Reconhecimento, escala neurológica, cirurgia e reabilitação',
        stages: [
          { id: 's1', label: 'Grau I-II — Dor e Fraqueza', urgency: 'high', description: 'Dor cervical/lombar e fraqueza posterior.', signs: ['Resistência a movimento (colocação na mesa, coçar no pescoço)', 'Fraqueza nos membros posteriores', 'Marcha com passos pequenos', 'Claudicação em Dachshund: hérnia até prova em contrário'] },
          { id: 's2', label: 'Grau III-V — Paralisia', urgency: 'emergency', description: 'Paralisia e perda de dor profunda.', signs: ['Membros posteriores paralisados', 'Cão se arrasta pelo chão', 'Bexiga não esvaziada voluntariamente', 'Perda de dor profunda: prognóstico reservado'] },
        ],
        triggers: ['Predisposição genética condrodistrófica', 'Saltar de alturas (sofá, cama)', 'Subir e descer escadas frequentemente', 'Obesidade (aumenta carga na coluna)'],
        steps: [
          { title: 'Emergência neurológica e cirurgia', icon: '🧠', duration: 'Emergência + 4-12 semanas reabilitação',
            description: 'Hemilaminectomia < 24h do início da paralisia tem melhor prognóstico.',
            checklist: ['PARALISIA AGUDA: cirurgia nas PRIMEIRAS 24H', 'Janela terapêutica: < 24h = 90% recuperação, > 48h = 50%', 'Transporte: sem flexão da coluna — prancha de madeira ou caixa rígida', 'Prednisona: controversa — alguns protocolos indicam', 'Reabilitação pós-cirúrgica: 4-12 semanas', 'Grau I-II: pode tentar clínico (repouso rigoroso 4-6 semanas)', 'Recidiva: 20-30% dos casos cirúrgicos'] },
        ],
        checklists: [{ label: 'Prevenção em Dachshund', freq: 'daily', items: ['Rampas no lugar de escadas?', 'Sem pulo do sofá (rampa)?', 'Peso saudável mantido?', 'Coleira peitoral (não pressão no pescoço)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Paralisia: EMERGÊNCIA', tasks: ['Neurologista veterinário IMEDIATAMENTE', 'Transporte sem flexão da coluna', 'Cirurgia nas primeiras 24h: prognóstico muito melhor'], note: 'Cada hora conta — dano nervoso progressivo sem descompressão' },
          { day: 2, label: 'Dia 2 — Pós-Cirúrgico', tasks: ['UTI veterinária: bexiga esvaziada?', 'Sensibilidade retornando?', 'Analgesia multimodal?'] },
          { day: 3, label: 'Dia 3-7 — Primeiros Sinais de Recuperação', tasks: ['Dor profunda: presente?', 'Movimento reflexo nas patas?', 'Fisioterapia iniciada (hidroterapia)?'] },
          { day: 4, label: 'Semana 2 — Reabilitação', tasks: ['Carrinho de reabilitação se paralisia persistente?', 'Cuidados com bexiga e intestino', 'Exercícios passivos diários?'] },
          { day: 5, label: 'Semana 3-4 — Progressão', tasks: ['Tenta apoiar o peso?', 'Esteira aquática?', 'Cicatriz cirúrgica cicatrizando?'] },
          { day: 6, label: 'Semana 6-8 — Recuperação', tasks: ['Caminha com assistência?', 'Bexiga controlada?', 'Prognóstico de recuperação completa?'] },
          { day: 7, label: 'Prevenção Definitiva', tasks: ['Rampas em TODOS os móveis', 'Nunca pulo do sofá ou cama', 'Peso saudável: fundamental para coluna'] },
        ],
        vetAlert: ['Dachshund que de repente não anda: emergência neurológica', 'Incontinência urinária associada à fraqueza posterior', 'Perda de dor profunda: janela cirúrgica urgente'],
        prevention: ['Rampas em lugar de escadas e pulos', 'Peso saudável sempre', 'Carrinho: permite mobilidade durante reabilitação'],
        myths: [{ myth: 'Repouso absoluto cura hérnia discal em Dachshund', truth: 'Repouso rigoroso pode ser suficiente para graus I-II sem déficit neurológico grave. Para paralisia (graus III-V): cirurgia é essencial. Repouso não é sinônimo de clínico — repouso clínico é tratamento ativo.' }],
        faq: [
          { q: 'Dachshund deve ter rampas para todos os sofás?', a: 'Sim, idealmente. Cada pulo de 50-70cm repetido mil vezes durante a vida soma pressão enorme nos discos intervertebrais. Rampa não garante prevenção total (doença é genética) mas reduz o risco de extrusão traumática.' },
          { q: 'Quantos Dachshunds se recuperam completamente após cirurgia?', a: 'Com dor profunda presente: 90-95% de recuperação. Sem dor profunda mas cirurgia < 24h: 50-70%. Sem dor profunda e > 48h de evolução: 20-40%. Prognóstico melhora MUITO com cirurgia precoce.' },
        ],
      }],
    },
  ],
};
