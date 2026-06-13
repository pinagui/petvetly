import type { Category } from './types';
export const catHernia: Category = {
  id: 'hernia', name: 'Hérnias Caninas', emoji: '🫁', gradient: 'g-orange',
  description: 'Hérnia umbilical, inguinal, diafragmática e perineal — causas, diagnóstico e cirurgia',
  conditions: [
    {
      id: 'hernia-umbilical', name: 'Hérnia Umbilical', emoji: '🫁', gradient: 'g-orange',
      description: 'Protuberância no umbigo do filhote — quando operar e quando esperar',
      prevalence: 'Afeta 1-4% dos filhotes; maioria resolve espontaneamente ou com correção cirúrgica na castração',
      protocols: [{
        id: 'p1', title: 'Protocolo Hérnia Umbilical', subtitle: 'Redutível vs. encarcerada, timing cirúrgico e correção',
        stages: [
          { id: 's1', label: 'Redutível (Benigna)', urgency: 'low', description: 'Protuberância que reduz ao toque — geralmente aguardar.', signs: ['Protuberância mole no umbigo', 'Reduz ao pressionar', 'Filhote assintomático', 'Comum em filhotes de raças específicas'] },
          { id: 's2', label: 'Encarcerada ou Estrangulada', urgency: 'emergency', description: 'Conteúdo preso — cirurgia de emergência.', signs: ['Protuberância dura, não reduz', 'Dor à palpação', 'Cão prostrado ou vomita', 'Vermelha ou quente (necrose)'] },
        ],
        triggers: ['Predisposição racial (Basset, Poodle, Beagle, Bulldog)', 'Componente hereditário'],
        steps: [
          { title: 'Avaliação e timing cirúrgico', icon: '🫁', duration: 'Avaliação + cirurgia eletiva',
            description: 'Redutível pequena em filhote: aguardar até 6 meses. Grande ou encarcerada: operar.',
            checklist: ['Hérnia < 1cm redutível: aguardar fechamento espontâneo até 6 meses', 'Hérnia > 2cm ou não redutível: correção cirúrgica', 'Cirurgia eletiva: junto com castração = anestesia única', 'Hérnia encarcerada: emergência cirúrgica', 'Conteúdo da hérnia: omento, alça intestinal ou bexiga'] },
        ],
        checklists: [{ label: 'Monitoramento de Hérnia Umbilical', freq: 'daily', items: ['Protuberância mudou de tamanho?', 'Filhote come normalmente?', 'Área sensível ao toque?', 'Ficou dura ou irreversível?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Veterinário: redutível ou não?', 'Tamanho: < 1cm ou > 2cm?', 'Conteúdo palpável?'] },
          { day: 2, label: 'Dia 2 — Decisão', tasks: ['Redutível < 1cm: aguardar 6 meses', 'Não redutível ou > 2cm: cirurgia eletiva', 'Sinais de encarceramento: emergência?'] },
          { day: 3, label: 'Dia 3 — Cirurgia junto com Castração', tasks: ['Cirurgia única: correção da hérnia + castração', 'Economiza anestesia e recuperação', 'Agendamento com o veterinário?'] },
          { day: 4, label: 'Dia 4 — Pós-Cirúrgico', tasks: ['E-collar para não lamber a incisão', 'Analgesia prescrita?', 'Restrição de atividade 10-14 dias?'] },
          { day: 5, label: 'Dia 5 — Herança Genética', tasks: ['Raça predisposta: avisar criador', 'Não reproduzir: hérnia pode ter base hereditária', 'Castração elimina transmissão'] },
        ],
        vetAlert: ['Protuberância que não reduz e causou dor aguda', 'Cão com hérnia que vomita', 'Vermelhidão ou calor na protuberância'],
        prevention: ['Hérnia umbilical: nenhuma prevenção conhecida', 'Não reproduzir cães afetados (predisposição genética)'],
        myths: [{ myth: 'Hérnia umbilical em filhote é sempre grave e precisa operar imediatamente', truth: 'A maioria das hérnias umbilicais redutíveis e pequenas pode aguardar até a castração para correção simultânea. Emergência é apenas para hérnias encarceradas ou estranguladas.' }],
        faq: [
          { q: 'Hérnia umbilical pode sumir sozinha?', a: 'Hérnias muito pequenas (< 1cm) em filhotes podem fechar espontaneamente até os 3-6 meses. A maioria persiste e requer correção cirúrgica. Acompanhamento regular com veterinário é indicado.' },
        ],
      }],
    },
  ],
};
