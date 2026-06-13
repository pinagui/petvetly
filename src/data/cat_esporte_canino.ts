import type { Category } from './types';
export const catEsporteCanino: Category = {
  id: 'esporte-canino', name: 'Esportes e Atividades Caninas', emoji: '🏅', gradient: 'g-emerald',
  description: 'Agility, canicross, flyball, natação — como praticar com segurança',
  conditions: [
    {
      id: 'agility-treino', name: 'Agility e Esportes de Obstáculos', emoji: '🏃', gradient: 'g-emerald',
      description: 'Como iniciar no agility com segurança, condicionamento físico e lesões comuns',
      prevalence: 'Agility é o esporte canino mais popular no Brasil; lesões ocorrem principalmente em cães sem condicionamento adequado',
      protocols: [{
        id: 'p1', title: 'Protocolo Agility Seguro', subtitle: 'Condicionamento, aquecimento, lesões comuns e prevenção',
        stages: [
          { id: 's1', label: 'Iniciante', urgency: 'low', description: 'Cão sem condicionamento específico para agility.', signs: ['Cão começando nos obstáculos', 'Sem base de resistência e força', 'Possível articulação não avaliada'] },
          { id: 's2', label: 'Lesão por Sobrecarga', urgency: 'moderate', description: 'Claudicação após treino ou competição.', signs: ['Claudicação após a sessão', 'Cão para abruptamente em competição', 'Dor ao palpar ombros ou carpo', 'Distensão de tendão do bíceps'] },
        ],
        triggers: ['Sem condicionamento prévio', 'Sem aquecimento antes dos obstáculos', 'Superfície inadequada (molhada, irregular)', 'Excesso de repetições em um dia'],
        steps: [
          { title: 'Condicionamento e prevenção de lesão', icon: '🏋️', duration: '3-6 meses de condicionamento',
            description: 'Base de força e resistência antes de competições.',
            checklist: ['Avaliação veterinária antes de iniciar: displasia, articulações', 'Condicionamento: 3 meses de treino de força/resistência antes de agility intenso', 'Aquecimento: 10-15 min de trote antes dos obstáculos', 'Resfriamento: 10 min após treino', 'Ômega-3 para articulações em esportistas', 'Fisioterapeuta veterinária: fundamental para atletas caninos', 'Nunca forçar obstáculos com cão fadigado ou claudicando'] },
        ],
        checklists: [{ label: 'Pré-Treino de Agility', freq: 'daily', items: ['Aquecimento 15 min feito?', 'Cão sem claudicação?', 'Superfície adequada?', 'Hidratação antes e durante?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Física', tasks: ['Veterinário: radiografia de quadril/cotovelo', 'Claudicação base avaliada?', 'Peso ideal?'], note: 'Cão com displasia pode praticar agility adaptado mas com cuidado' },
          { day: 2, label: 'Dia 2 — Condicionamento', tasks: ['Natação: excelente condicionamento de baixo impacto', 'Trote em diferentes superfícies', 'Cavaletti: propriocepção'] },
          { day: 3, label: 'Dia 3 — Primeiros Obstáculos', tasks: ['Salto baixo (altura igual à do garrote do cão)', 'Túnel: mais fácil para iniciantes', 'Positivo e lúdico — sem pressão'] },
          { day: 4, label: 'Dia 4 — Nutrição do Atleta', tasks: ['Proteína: 25-30% na dieta do cão atleta', 'Refeição leve 2h antes do treino', 'Hidratação: 30ml/kg nas horas de treino', 'Suplemento: ômega-3, condroitina?'] },
          { day: 5, label: 'Dia 5 — Lesão: Reconhecimento', tasks: ['Claudicação após treino: repouso 3-5 dias', 'Gelo 15 min após treino intenso', 'Fisioterapia veterinária se persistir?'] },
          { day: 6, label: 'Dia 6 — Esporte por Raça', tasks: ['Border Collie: agility excelente', 'Labrador: natação e retrieve', 'Beagle: scent work (farejar)', 'Galgo: corrida/lure coursing'] },
          { day: 7, label: 'Dia 7 — Diversão em Primeiro Lugar', tasks: ['Cão está se divertindo?', 'Sinais de estresse durante treino?', 'Esporte deve ser jogo para o cão?'] },
        ],
        vetAlert: ['Claudicação após treino que não melhora em 48h', 'Cão que recusa obstáculos de forma abrupta', 'Inchaço em articulação pós-treino'],
        prevention: ['Condicionamento físico antes de competições', 'Aquecimento e resfriamento obrigatórios', 'Avaliação ortopédica antes de iniciar esportes de impacto'],
        myths: [{ myth: 'Agility só é para Border Collie', truth: 'Qualquer raça saudável pode praticar agility. O esporte existe em categorias por tamanho. Border Collies são competitivos em alto nível, mas cães de qualquer raça se beneficiam do esporte como atividade mental e física.' }],
        faq: [
          { q: 'Com quantos meses posso começar agility?', a: 'Obstáculos de salto: aguardar 15-18 meses (fechamento das placas de crescimento). Treinamento em terra (sem saltos): pode começar desde filhote. Contato, túnel, percurso terrestre: a partir de 8-12 meses.' },
          { q: 'Cão com displasia pode fazer agility?', a: 'Depende do grau. Displasia leve com dor controlada: agility adaptado com obstáculos de altura reduzida e superfície macia pode ser benéfico. Displasia grave com dor: esportes de baixo impacto (natação, scent work) são melhores.' },
        ],
      }],
    },
    {
      id: 'natacao-hidroterapi', name: 'Natação e Hidroterapia', emoji: '🏊', gradient: 'g-blue',
      description: 'Natação terapêutica e recreativa — como iniciar e benefícios para cães',
      prevalence: 'Hidroterapia é indicada para reabilitação de displasia, pós-cirúrgico e fortalecimento muscular',
      protocols: [{
        id: 'p1', title: 'Protocolo Natação Canina', subtitle: 'Introdução gradual, segurança e hidroterapia',
        stages: [
          { id: 's1', label: 'Primeiro Contato com Água', urgency: 'low', description: 'Introdução gradual para cão sem experiência aquática.', signs: ['Cão nunca nadou', 'Ansioso perto de água', 'Não sabe manter posição de nado'] },
          { id: 's2', label: 'Hidroterapia Terapêutica', urgency: 'low', description: 'Natação prescrita para reabilitação.', signs: ['Pós-cirúrgico de quadril ou joelho', 'Displasia em reabilitação', 'Atrofia muscular por imobilização'] },
        ],
        triggers: ['Primeiro contato com água', 'Raça de água (Labrador, Retriever): natural', 'Raças braquicefálicas: cuidado extra (dificuldade respiratória)'],
        steps: [
          { title: 'Introdução segura e progressiva', icon: '🏊', duration: 'Gradual — semanas',
            description: 'Nunca jogar na água — introdução sempre positiva.',
            checklist: ['Primeiro contato: água rasa, cão entra com os pés', 'Colete salva-vidas: fundamental para iniciantes e braquicefálicos', 'Nunca jogar o cão na água', 'Guia d\'água: entrar junto ao início', 'Sessão de natação: 5-10 min para iniciantes', 'Secar completamente após (otite e hipotermia)', 'Piscina: lavar os olhos após natação em água clorada'] },
        ],
        checklists: [{ label: 'Segurança na Natação', freq: 'daily', items: ['Colete salva-vidas usado?', 'Supervisão constante?', 'Cão secado completamente?', 'Orelhas limpas e secas?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Primeiro Contato', tasks: ['Água rasa: pés e tornozelos', 'Recompensa alta pelo contato positivo', 'Sem forçar — deixar o cão explorar no próprio ritmo'] },
          { day: 2, label: 'Dia 2 — Colete', tasks: ['Colete salva-vidas: vestir em terra primeiro', 'Recompensar por usar o colete', 'Entrar com o cão na água'] },
          { day: 3, label: 'Dia 3 — Primeiras Braçadas', tasks: ['Apoiar a barriga se necessário', 'Caminho de saída sempre visível ao cão', 'Sessão: 3-5 min apenas'] },
          { day: 4, label: 'Dia 4 — Progressão', tasks: ['5-10 min de natação?', 'Cão busca brinquedo na água?', 'Braquicefálico: máximo 5 min, colete sempre'] },
          { day: 5, label: 'Dia 5 — Hidroterapia', tasks: ['Sessão com fisioterapeuta veterinária?', 'Esteira aquática: músculos sem impacto', 'Displasia: frequência prescrita?'] },
          { day: 6, label: 'Dia 6 — Higiene Pós-Natação', tasks: ['Secar: pele e orelhas completamente', 'Otite por umidade: muito comum', 'Limpar olhos com soro fisiológico (água com cloro)?'] },
          { day: 7, label: 'Dia 7 — Ritmo Semanal', tasks: ['Natação: 2-3x por semana para condicionamento', 'Hidroterapia: conforme protocolo veterinário', 'Cão está aproveitando a natação?'] },
        ],
        vetAlert: ['Braquicefálico sem colete na água', 'Cão engole muita água (diluição de eletrólitos)', 'Otite recorrente após natação'],
        prevention: ['Colete para iniciantes e braquicefálicos', 'Secar completamente após cada sessão', 'Supervisão constante em toda sessão aquática'],
        myths: [{ myth: 'Todo cão sabe nadar instintivamente', truth: 'O reflexo de pedalagem existe em todo cão, mas nado eficiente e seguro precisa de aprendizado. Raças braquicefálicas (Bulldog, Pug) têm dificuldade anatômica real — podem afundar rapidamente sem colete.' }],
        faq: [
          { q: 'Piscina com cloro é segura para cão?', a: 'Cloro em concentrações normais de piscina doméstica: seguro para natação. Evitar ingerir água em excesso. Lavar os olhos após e secar as orelhas. Piscina com hipercloração recente: aguardar 24h antes do cão nadar.' },
        ],
      }],
    },
  ],
};
