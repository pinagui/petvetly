import type { Category } from './types';
export const catProstata: Category = {
  id: 'prostata', name: 'Próstata Canina', emoji: '🔵', gradient: 'g-blue',
  description: 'Hiperplasia, prostatite e neoplasia prostática no cão macho',
  conditions: [
    {
      id: 'hiperplasia-prostatica', name: 'Hiperplasia Prostática Benigna (HPB)', emoji: '🔵', gradient: 'g-blue',
      description: 'Próstata aumentada em machos inteiros — muito comum e completamente prevenível pela castração',
      prevalence: '80-95% dos cães machos inteiros > 5 anos têm algum grau de HPB',
      protocols: [{
        id: 'p1', title: 'Protocolo HPB Canina', subtitle: 'Castração como tratamento definitivo, dificuldade de defecar e diagnóstico',
        stages: [
          { id: 's1', label: 'HPB Assintomática', urgency: 'low', description: 'Próstata aumentada sem sintomas.', signs: ['Achado incidental em ultrassom', 'Sem sintomas urinários ou intestinais', 'Macho inteiro > 5 anos'] },
          { id: 's2', label: 'HPB Sintomática', urgency: 'moderate', description: 'Pressão retal causando constipação e dificuldade de defecar.', signs: ['Fezes em fita (achatadas) pela compressão retal', 'Dificuldade de defecar', 'Sangue no prepúcio (não confundir com ITU)', 'Dor ao defecar'] },
        ],
        triggers: ['Testosterona e DHT (diidrotestosterona)', 'Macho inteiro > 5 anos', 'Castração: remove o estímulo hormonal'],
        steps: [
          { title: 'Castração e manejo', icon: '✂️', duration: 'Castração resolve',
            description: 'Castração resulta em regressão da próstata em 4-8 semanas.',
            checklist: ['CASTRAÇÃO: tratamento definitivo — próstata regride em 4-8 semanas', 'Finasterida: redução hormonal temporária se castração contraindicada', 'Constipação: dieta com fibra + lactulose enquanto resolve', 'Ultrassom: confirmar HPB vs. prostatite vs. neoplasia', 'Prostatite: antibiótico de penetração prostática (enrofloxacino, clindamicina)'] },
        ],
        checklists: [{ label: 'Monitoramento Prostático', freq: 'monthly', items: ['Macho inteiro: castração discutida com vet?', 'Defecar normalmente?', 'Sangue no prepúcio?', 'Urinando normalmente?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Ultrassom prostático', 'Assimétrico ou muito aumentado: biópsia para excluir neoplasia', 'Castração agendada?'] },
          { day: 2, label: 'Dia 2 — Constipação', tasks: ['Dieta rica em fibra para fezes mais macias', 'Lactulose: amolecimento das fezes', 'Após castração: constipação resolve em semanas'] },
          { day: 3, label: 'Dia 3 — Castração', tasks: ['Exame pré-anestésico', 'Cirurgia agendada', 'Família informada que próstata regride em 4-8 semanas'], note: 'Castração é tanto tratamento quanto prevenção de neoplasia prostática' },
          { day: 4, label: 'Dia 4 — Pós-Castração', tasks: ['Dor pós-cirúrgica: analgesia prescrita', 'E-collar para evitar lamber a incisão', 'Restrição de atividade 10-14 dias'] },
          { day: 5, label: 'Dia 5 — Pós-Castração 1 Semana', tasks: ['Fezes normalizando?', 'Sangue no prepúcio parou?', 'Incisão cicatrizando?'] },
          { day: 6, label: 'Dia 6 — Neoplasia Prostática', tasks: ['Próstata assimétrica ou nodular: biópsia obrigatória', 'Neoplasia prostática em cão: mais em castrados que inteiros (diferente do humano)', 'Prognóstico reservado se neoplasia maligna'] },
          { day: 7, label: 'Dia 7 — Controle', tasks: ['Ultrassom 8 semanas pós-castração: próstata menor?', 'Sintomas resolvidos?', 'Follow-up anual'] },
        ],
        vetAlert: ['Sangue na urina em macho: investigar próstata', 'Fezes em fita em macho inteiro', 'Dor perineal intensa (prostatite)'],
        prevention: ['Castração antes dos 5 anos elimina praticamente 100% do risco de HPB e prostatite', 'Neoplasia prostática: risco baixo e sem prevenção clara'],
        myths: [{ myth: 'Castração aumenta risco de câncer de próstata em cão como em humano', truth: 'No CÃO, neoplasia prostática é mais frequente em CASTRADOS que inteiros — o oposto do humano. Mas essa neoplasia é rara em cães. Os benefícios da castração (HPB, prostatite, tumores testiculares) superam amplamente esse risco raro.' }],
        faq: [
          { q: 'Cão com HPB urina com sangue?', a: 'HPB pode causar sangue no prepúcio (gotículas de sangue prostático). Hematúria franca (muito sangue na urina): mais associada a ITU, cálculo ou neoplasia. Ultrassom diferencia as causas.' },
          { q: 'Além da castração, há tratamentos para HPB?', a: 'Finasterida (5mg/dia): inibidor da DHT, reduz a próstata em 50-70%. Menos eficaz que castração e exige uso crônico. Usada em cães que serão usados para reprodução. Deslorelina (implante): supressão hormonal temporária.' },
        ],
      }],
    },
  ],
};
