import type { Category } from './types';
export const catReabilitacao: Category = {
  id: 'reabilitacao', name: 'Fisioterapia e Reabilitação Canina', emoji: '🏋️', gradient: 'g-teal',
  description: 'Reabilitação pós-cirúrgica, fisioterapia para displasia e exercícios terapêuticos',
  conditions: [
    {
      id: 'fisioterapia-pos-cirurgia', name: 'Reabilitação Pós-Cirúrgica', emoji: '🏋️', gradient: 'g-teal',
      description: 'Como acelerar a recuperação após cirurgia ortopédica ou neurológica',
      prevalence: 'Fisioterapia veterinária reduz o tempo de recuperação pós-cirúrgica em 30-50%',
      protocols: [{
        id: 'p1', title: 'Protocolo Reabilitação Canina', subtitle: 'Fases de reabilitação, exercícios progressivos e modalidades terapêuticas',
        stages: [
          { id: 's1', label: 'Fase 1 — Controle da Inflamação', urgency: 'moderate', description: '0-5 dias pós-cirúrgico.', signs: ['Edema na região cirúrgica', 'Calor local', 'Cão não apoia o membro', 'Dor moderada a intensa'] },
          { id: 's2', label: 'Fase 3 — Retorno à Função', urgency: 'low', description: '3-12 semanas — progressão gradual.', signs: ['Cão começa a apoiar o membro', 'Marcha com claudicação residual', 'Atrofia muscular pela imobilização'] },
        ],
        triggers: ['Cirurgia de displasia de quadril', 'TPLO/TTA (ligamento cruzado)', 'Cirurgia de hérnia discal', 'Fratura ortopédica', 'Amputação'],
        steps: [
          { title: 'Protocolo progressivo de reabilitação', icon: '🏋️', duration: '6-16 semanas',
            description: 'Cada fase tem exercícios específicos — nunca pular etapas.',
            checklist: ['FASE 1 (0-5d): Gelo 15min 3x/dia, analgesia, repouso', 'FASE 2 (5-14d): Massagem suave, movimentação passiva, hidroterapia', 'FASE 3 (14-30d): Caminhada controlada, exercícios de propriocepção', 'FASE 4 (30-90d): Natação, agachamentos, exercícios funcionais', 'Laserterapia: cicatrização e controle de dor', 'TENS: controle de dor e estimulação muscular', 'Fisioterapeuta veterinária: essencial para protocolo individualizado'] },
        ],
        checklists: [{ label: 'Reabilitação Diária', freq: 'daily', items: ['Exercício do dia realizado?', 'Analgesia dada?', 'Incisão cicatrizando sem sinais de infecção?', 'Cão apoia mais o membro que ontem?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Fase 1: Controle da Inflamação', tasks: ['Gelo: 15 min 3-4x/dia', 'Analgesia prescrita em dia', 'Restrição total de atividade?'], note: 'Gelo reduz edema e dor nas primeiras 72h — usar regularmente' },
          { day: 2, label: 'Dia 2 — Massagem Passiva', tasks: ['Massagem suave nos músculos ao redor', 'Calor suave (após 72h): 15 min 2x/dia', 'Movimentação passiva da articulação (2x/dia, 10 repetições)'] },
          { day: 3, label: 'Dia 3 — Hidroterapia', tasks: ['Hidroterapia: quando a incisão cicatrizou (7-14 dias)?', 'Esteira aquática: excelente para carregar o peso com baixo impacto', 'Sessão: 10-15 min para iniciante'] },
          { day: 4, label: 'Dia 4 — Propriocepção', tasks: ['Almofada de propriocepção: cão fica em pé sobre ela', 'Prancha de equilíbrio', 'Cavaletti (barras no chão): estimula o passo correto?'] },
          { day: 5, label: 'Dia 5 — Caminhada Controlada', tasks: ['Caminhada na guia: tempo prescrito pelo fisioterapeuta', 'Superfície: grama ou carpete (não piso liso)', 'Cão ainda claudica? Normal na semana 2-3'] },
          { day: 6, label: 'Dia 6 — Exercícios Funcionais', tasks: ['Agachamento: cão senta e levanta 10x', 'Subir e descer rampa suave', 'Aumentar caminhada conforme tolerado'] },
          { day: 7, label: 'Dia 7 — Avaliação Semanal', tasks: ['Progresso em relação a semana anterior?', 'Exercícios do protocolo mantidos?', 'Fisioterapeuta veterinário: avaliação semanal?'] },
        ],
        vetAlert: ['Incisão vermelha, quente ou com pus: infecção', 'Claudicação que piora com exercício', 'Cão que para de apoiar membro que havia normalizado (re-lesão)'],
        prevention: ['Restrição de atividade rigorosa pós-cirúrgico', 'Superfícies antiderrapantes', 'Rampas substituindo escadas no período de recuperação'],
        myths: [{ myth: 'Repouso absoluto é a melhor recuperação pós-cirúrgica', truth: 'Repouso absoluto causa atrofia muscular, rigidez articular e piora do prognóstico. Fisioterapia progressiva DESDE os primeiros dias melhora os resultados e reduz o tempo de recuperação em 30-50%.' }],
        faq: [
          { q: 'Quanto tempo dura a reabilitação após TPLO (cirurgia de cruzado)?', a: 'Protocolo padrão: 16 semanas para retorno completo ao exercício. Semana 1-2: restrição e gelo. Semana 3-6: caminhada controlada. Semana 7-12: exercício progressivo. Semana 12-16: retorno gradual à atividade normal.' },
          { q: 'Fisioterapia veterinária está disponível no Brasil?', a: 'Crescendo rapidamente. Fisioterapeutas veterinários certificados em cidades médias e grandes. Também: clínicas veterinárias com serviço integrado de reabilitação. Buscar: CRMV registrado com especialidade em fisioterapia animal.' },
        ],
      }],
    },
  ],
};
