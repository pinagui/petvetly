import type { Category } from './types';
export const catCobraPicada: Category = {
  id: 'cobra-picada', name: 'Picada de Cobra e Animais Peçonhentos', emoji: '🐍', gradient: 'g-red',
  description: 'Picada de cobra, escorpião, abelha — emergências por animais peçonhentos',
  conditions: [
    {
      id: 'picada-cobra', name: 'Picada de Cobra', emoji: '🐍', gradient: 'g-red',
      description: 'Ophidismo canino — como reconhecer, estabilizar e transportar',
      prevalence: 'Frequente em cães que trabalham ou passeiam em áreas de mato; cães farejadores têm risco alto',
      protocols: [{
        id: 'p1', title: 'Protocolo Picada de Cobra', subtitle: 'Reconhecimento, estabilização e antiofídico urgente',
        stages: [
          { id: 's1', label: 'Leve — Bothrops (Jararaca)', urgency: 'high', description: 'Edema progressivo e hemorragia local.', signs: ['Inchaço rápido no focinho ou pata', 'Dois furos de presas visíveis', 'Dor intensa no local', 'Sangramento na ferida', 'Hematomas que se expandem'] },
          { id: 's2', label: 'Grave — Crotalus (Cascavel)', urgency: 'emergency', description: 'Síndrome neurotóxica e hemolítica.', signs: ['Ptose palpebral (olhos caindo)', 'Paralisia flácida progressiva', 'Pupila midriática', 'Urina escura (mioglobinúria)', 'Sangramento generalizado'] },
        ],
        triggers: ['Áreas de mato, fazenda, camping', 'Pata ou focinho: locais mais comuns de picada', 'Cão que fareja em buracos no chão'],
        steps: [
          { title: 'EMERGÊNCIA — Estabilização e Transporte', icon: '🚨', duration: 'Imediato',
            description: 'O tempo é vital — soro antiofídico é o único tratamento definitivo.',
            checklist: ['MANTER CALMOA cão: atividade acelera absorção do veneno', 'NÃO: torniquete, incisão, sucção, nenhuma medida caseira', 'VETERINÁRIO DE EMERGÊNCIA IMEDIATAMENTE', 'Se possível: fotografar ou descrever a cobra (cor, padrão)', 'Imobilizar a região picada (tipoia improvisada se pata)', 'Controlar hemorragia com compressão suave (não pressão forte)', 'Soro antiofídico: disponível em CVETS e alguns hospitais veterinários'] },
        ],
        checklists: [{ label: 'Prevenção em Áreas de Risco', freq: 'daily', items: ['Área de passeio mapeada para cobras?', 'Cão na guia em locais de mato?', 'Sem farejar buracos no chão?', 'Veterinário de emergência local identificado?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Veterinário de emergência IMEDIATAMENTE', 'Descrever a cobra se possível', 'Manter cão imóvel no transporte'], note: 'Sem soro antiofídico: taxa de mortalidade alta em picadas de Crotalus' },
          { day: 2, label: 'Dia 2 — Hospitalização', tasks: ['Soro antiofídico IV conforme tipo de cobra', 'Suporte: fluidos, antibiótico', 'Monitoramento de coagulação e função renal'] },
          { day: 3, label: 'Dia 3 — Monitoramento', tasks: ['Edema aumentou ou estabilizou?', 'Urina de cor normal?', 'Coagulação laboratorial?'] },
          { day: 4, label: 'Dia 4 — Recuperação', tasks: ['Edema revertendo?', 'Cão come?', 'Necrologia local?'], note: 'Bothrops pode causar necrose local — cirurgia de debridamento possível' },
          { day: 5, label: 'Dia 5 — Lesão Local', tasks: ['Ferida com necrose? Debridamento veterinário', 'Antibiótico sistêmico para prevenção', 'Curativo diário da ferida'] },
          { day: 6, label: 'Dia 6 — Recuperação Renal', tasks: ['Urina normal?', 'Função renal laboratorial (creatinina, ureia)', 'Hidratação IV continuada se necessário'] },
          { day: 7, label: 'Dia 7 — Alta e Prevenção', tasks: ['Exames renais de controle em 1 semana', 'Identificar e mapear área da picada', 'Cão com guia em trilhas'] },
        ],
        vetAlert: ['Ptose palpebral (cascavel)', 'Urina escura (mioglobinúria)', 'Sangramento das gengivas', 'Paralisia progressiva'],
        prevention: ['Guia em áreas de mato', 'Não farejar em buracos', 'Vacina anti-botrópica disponível (parcial proteção contra jararaca)', 'Conhecer o veterinário de emergência antes da necessidade'],
        myths: [{ myth: 'Torniquete e incisão salvam cão picado por cobra', truth: 'Torniquete causa necrose do membro. Incisão + sucção aumenta área de absorção do veneno. NENHUMA medida caseira é eficaz — apenas soro antiofídico trata picada de cobra.' }],
        faq: [
          { q: 'Existe vacina contra picada de cobra para cão?', a: 'A vacina Bothrovac (anti-botrópica) oferece proteção parcial contra o veneno da jararaca (Bothrops). Não protege contra cascavel, coral ou surucucu. Indicada para cães com alto risco de exposição (fazenda, sítio).' },
          { q: 'Como identificar se é cobra venenosa ou não?', a: 'No Brasil: toda cobra deve ser considerada venenosa até prova em contrário. Tratamento não deve esperar identificação da espécie. Fotografia para identificação pela vigilância sanitária, mas nunca retardar atendimento por isso.' },
          { q: 'Cão sobrevive à picada de cascavel?', a: 'Com soro antiofídico precoce (< 2-4h da picada): sim, em maioria dos casos. Sem soro ou com soro tardio: prognóstico reservado para grave. Taxa de mortalidade é maior em cães pequenos e quando o atendimento demora.' },
        ],
      }],
    },
    {
      id: 'picada-abelha', name: 'Picada de Abelha e Anafilaxia', emoji: '🐝', gradient: 'g-amber',
      description: 'Reação alérgica a picada de inseto — desde leve inchaço até anafilaxia',
      prevalence: 'Picada única: geralmente benigna. Picada múltipla (enxame) ou cão alérgico: emergência',
      protocols: [{
        id: 'p1', title: 'Protocolo Picada de Abelha', subtitle: 'Remover ferrão, sinais de anafilaxia e epinefrina',
        stages: [
          { id: 's1', label: 'Reação Local', urgency: 'moderate', description: 'Inchaço no local da picada — sem anafilaxia.', signs: ['Inchaço no focinho, pata ou ao redor do olho', 'Coceira intensa', 'Choro de dor', 'Sem sinais sistêmicos'] },
          { id: 's2', label: 'Anafilaxia', urgency: 'emergency', description: 'Reação sistêmica — emergência de vida.', signs: ['Inchaço da face + dificuldade respiratória', 'Vômito e diarreia agudos', 'Colapso', 'Palidez das mucosas', 'Taquicardia', 'Acontece em 15-30 min da picada'] },
        ],
        triggers: ['Picada única em cão sensível', 'Picada múltipla (enxame)', 'Área de bocal (mais grave)', 'Histórico de reação a picadas anteriores'],
        steps: [
          { title: 'Manejo imediato', icon: '🐝', duration: 'Imediato',
            description: 'Remover ferrão, dipirona ou anti-histamínico, observar 1h.',
            checklist: ['Remover ferrão: raspar lateralmente (NÃO apertar — injeta mais veneno)', 'Compresa de gelo no local (10-15 min)', 'Dipirona: 25mg/kg VO para dor (se disponível)', 'Anti-histamínico: difenidramina 1mg/kg VO (se disponível)', 'Observar por 1h para sinais de anafilaxia', 'Sinais de anafilaxia: VETERINÁRIO DE EMERGÊNCIA IMEDIATAMENTE', 'Adrenalina (epinefrina): prescrita pelo veterinário para cães com histórico'] },
        ],
        checklists: [{ label: 'Monitoramento Pós-Picada', freq: 'each_event', items: ['Ferrão removido?', 'Inchaço: estável ou aumentando?', 'Respiração: normal?', 'Mucosas: rosadas?', '30 min: algum sintoma novo?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Picada Ocorreu', tasks: ['Remover ferrão imediatamente (raspagem)', 'Gelo por 15 min', 'Observar por 1h'], note: 'Anafilaxia ocorre em 15-30 min — observação é obrigatória' },
          { day: 2, label: 'Dia 2 — Sem Reação Sistêmica', tasks: ['Inchaço local diminuindo?', 'Anti-histamínico por 2-3 dias conforme orientação', 'Coceira controlada?'] },
          { day: 3, label: 'Dia 3 — Recuperação', tasks: ['Inchaço resolveu em 48-72h (normal)?', 'Cão sem desconforto?', 'Área sensível ao toque?'] },
          { day: 4, label: 'Dia 4 — Se Houve Anafilaxia', tasks: ['Recuperado da internação?', 'Epinefrina prescrita pelo vet para próxima vez?', 'Família treinada para usar?'] },
          { day: 5, label: 'Dia 5 — Prevenção', tasks: ['Colmeias próximas ao quintal?', 'Horário de pico de abelhas (sol alto)', 'Cão com histórico de anafilaxia: epinefrina sempre disponível?'] },
          { day: 6, label: 'Dia 6 — Kit de Emergência', tasks: ['Epinefrina na bolsa do cão?', 'Anti-histamínico em casa?', 'Veterinário de emergência no contato?'] },
          { day: 7, label: 'Dia 7 — Plano', tasks: ['Cão voltou à normalidade?', 'Plano de emergência para próximas picadas?', 'Veterinário informado do histórico?'] },
        ],
        vetAlert: ['Inchaço de face + dispneia', 'Colapso após picada', 'Vômito e diarreia agudos pós-picada'],
        prevention: ['Identificar e remover colmeias próximas', 'Evitar horário de pico (meio do dia)', 'Cão com anafilaxia prévia: epinefrina auto-injetável veterinária'],
        myths: [{ myth: 'Vinagre ou bicarbonato na picada remove o veneno', truth: 'Nenhuma dessas medidas neutraliza o veneno de abelha. O mais importante é remover o ferrão por raspagem e observar para sinais sistêmicos.' }],
        faq: [
          { q: 'Meu cão foi picado por enxame — o que fazer?', a: 'Emergência veterinária IMEDIATA. Picadas múltiplas causam envenenamento sistêmico com coagulopatia e insuficiência renal. Não tentar remover todos os ferrões em casa — ir ao vet enquanto faz o possível.' },
          { q: 'Cão pode tomar difenidramina (Benadryl) humano para picada de abelha?', a: 'Sim, em dose calculada (1mg/kg VO) para reação local. Não é tratamento de anafilaxia — para essa, somente epinefrina e fluidos IV. Difenidramina comprimido sem efedrina ou álcool.' },
        ],
      }],
    },
  ],
};
