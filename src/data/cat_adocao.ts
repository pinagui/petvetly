import type { Category } from './types';
export const catAdocao: Category = {
  id: 'adocao', name: 'Adoção e Primeiros Dias do Filhote', emoji: '🐕', gradient: 'g-emerald',
  description: 'O que fazer nos primeiros dias com filhote recém-adotado — checklist completo',
  conditions: [
    {
      id: 'primeiro-dia-filhote', name: 'Primeiros 7 Dias com Filhote', emoji: '🐶', gradient: 'g-emerald',
      description: 'Chegada do filhote em casa — o que providenciar, veterinário, vacinas e adaptação',
      prevalence: 'Erros nos primeiros dias do filhote causam 70% dos problemas comportamentais e de saúde da vida adulta',
      protocols: [{
        id: 'p1', title: 'Protocolo Filhote Novo', subtitle: 'Veterinário nos primeiros 3 dias, vacinas, vermifugação e adaptação',
        stages: [
          { id: 's1', label: 'Chegada em Casa', urgency: 'low', description: 'Filhote saudável que precisa de adaptação.', signs: ['Chegou assustado e quieto (normal)', 'Pode não comer nas primeiras 24h (stress)', 'Diarreia leve de adaptação (comum)', 'Pode chorar à noite (normal — solidão)'] },
          { id: 's2', label: 'Sinais de Alerta no Filhote Novo', urgency: 'emergency', description: 'Alguns filhotes chegam com problemas de saúde.', signs: ['Diarreia com sangue ou muito aquosa', 'Vômito repetido', 'Prostração intensa', 'Parvovirose possível em filhote não vacinado'] },
        ],
        triggers: ['Mudança de ambiente (estresse)', 'Separação da mãe e ninhada', 'Novo microbioma alimentar', 'Filhote de origem desconhecida (menos vacinado)'],
        steps: [
          { title: 'Checklist dos primeiros 7 dias', icon: '📋', duration: '7 dias',
            description: 'O que fazer nos primeiros dias para garantir saúde e adaptação.',
            checklist: ['DIA 1-2: Veterinário para avaliação completa de saúde', 'Coproparasitológico + vermifugação', 'Confirmar protocolo vacinal (ou iniciar)', 'Alimentação: mesma ração da origem por 1 semana (evitar diarreia)', 'Período de adaptação: quarto, quintal limitado, sem visitas excessivas', 'Socialização gradual: expor a pessoas, sons e situações a partir da 2ª semana', 'NOME: começar a ensinar imediatamente com recompensa'] },
        ],
        checklists: [{ label: 'Checklist do Filhote Novo', freq: 'daily', items: ['Comeu normalmente?', 'Diarreia ou vômito?', 'Dormiu bem?', 'Teve contato seguro com pessoas novas?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Chegada', tasks: ['Ambiente seguro e calmo', 'Água e ração disponíveis (mesma ração da origem)', 'Não forçar interação — deixar explorar'], note: 'As primeiras 48h definem a impressão que o filhote terá do novo lar' },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Consulta de avaliação completa', 'Hemograma, coproparasitológico', 'Vacinas: em dia ou início do protocolo'], note: 'NÃO passear em locais públicos antes de completar a vacina' },
          { day: 3, label: 'Dia 3 — Estabelecer Rotina', tasks: ['Horário de refeições (3-4x/dia para filhote)', 'Horário de sono: cama própria', 'Horário de brincadeira e treinamento'] },
          { day: 4, label: 'Dia 4 — Banheiro', tasks: ['Local de banheiro definido?', 'Levar ao local a cada 30-60 min nas primeiras semanas', 'Recompensar quando usar o local certo'], note: 'Raiva do filhote por acidente: NUNCA. Ele não tem controle ainda' },
          { day: 5, label: 'Dia 5 — Nome e Comandos Básicos', tasks: ['"Nome": falar + petisco quando responde', '"Senta": primeiro comando', '"Vem aqui": recall desde o início?'] },
          { day: 6, label: 'Dia 6 — Socialização', tasks: ['Visita de 1-2 pessoas calmas', 'Som de TV, aspirador, campainha', 'Superfícies diferentes: tapete, grama, piso?'], note: 'Janela de socialização: 3-14 semanas. O que for exposto nesse período = normal para toda a vida' },
          { day: 7, label: 'Dia 7 — Avaliação da Semana', tasks: ['Filhote come, elimina e brinca normalmente?', 'Acostumou com a cama dele?', 'Próximo reforço vacinal agendado?', 'Início do castracao discutido?'] },
        ],
        vetAlert: ['Diarreia com sangue no filhote novo (parvovirose possível)', 'Vômito + letargia no filhote = emergência', 'Filhote que não come por > 24h'],
        prevention: ['Vacina completa antes de exposição em locais públicos', 'Vermifugação imediata', 'Socialização ampla na janela crítica (3-14 semanas)'],
        myths: [{ myth: 'Filhote com menos de 4 meses não pode sair de casa', truth: 'A janela de socialização (3-14 semanas) é quando o filhote aprende o que é normal. Aguardar a vacina completa para sair atrasa a socialização e aumenta o risco de medo e agressividade. Solução: locais controlados (amigos vacinados, colo) antes da vacina completa.' }],
        faq: [
          { q: 'Qual a melhor ração para filhote?', a: 'Ração específica para filhote de qualidade (Purina Pro Plan, Royal Canin, Hill\'s Science, Eukanuba). A fase de vida (filhote) e o porte (mini, médio, maxi) devem ser respeitados. Não dar ração de adulto para filhote — perfil nutricional diferente.' },
          { q: 'Com quantas semanas o filhote pode ser adotado?', a: 'Mínimo legal e médico: 8 semanas. O ideal é 8-12 semanas. Antes das 8 semanas: separação precoce da mãe aumenta risco de problemas comportamentais (ansiedade, agressividade, medo). Filhotes de 12 semanas: já têm mais segurança mas janela de socialização está menor.' },
          { q: 'Meu filhote chora a noite toda. O que fazer?', a: 'Normal nas primeiras noites. Estratégias: cama próxima ao seu quarto (distância gradual), relógio embrulhado em toalha (simula coração da mãe), coberta da ninhada, roupa sua na cama. Não ignorar indefinidamente — filhote em pânico precisa de conforto gradual, não extinção brutal.' },
        ],
      }],
    },
    {
      id: 'adocao-adulto', name: 'Adoção de Cão Adulto', emoji: '🐕', gradient: 'g-teal',
      description: 'Cão adulto de abrigo — descompressão, regra dos 3, adaptação e comportamentos esperados',
      prevalence: 'Cão adulto de abrigo precisa em média de 3 semanas a 3 meses para mostrar sua personalidade real',
      protocols: [{
        id: 'p1', title: 'Regra dos 3 para Cão Adulto Adotado', subtitle: '3 dias, 3 semanas, 3 meses — o que esperar em cada fase',
        stages: [
          { id: 's1', label: 'Primeiros 3 dias (Shut Down)', urgency: 'low', description: 'Cão em modo de sobrevivência — assustado ou congelado.', signs: ['Pode não comer', 'Esconde e observa', 'Não demonstra personalidade real', 'Pode urinar de medo', 'Aparentemente "perfeito" por estar congelado de estresse'] },
          { id: 's2', label: '3 Semanas (Adaptação Ativa)', urgency: 'low', description: 'Cão começa a mostrar quem é — bom e ruim.', signs: ['Começa a explorar', 'Teste de limites', 'Possível regressão de housetraining', 'Comportamentos "surpresa" (que o abrigo não viu)'] },
        ],
        triggers: ['Mudança de ambiente total', 'Histórico desconhecido', 'Possível trauma prévio', 'Múltiplas mudanças de lar anteriores'],
        steps: [
          { title: 'Protocolo de descompressão', icon: '🐕', duration: '3 meses de adaptação',
            description: 'Regra dos 3: descompressão nos primeiros 3 dias, rotina nas 3 semanas, confiança em 3 meses.',
            checklist: ['3 DIAS: espaço seguro, pouca estimulação, sem visitas', 'Não forçar interação — deixar o cão iniciar', '3 SEMANAS: rotina consistente, regras claras e afeto', '3 MESES: personalidade real emerge — adaptar training', 'Decompression walk: caminhada silenciosa, cão lidera o cheiro', 'Veterinário: avaliação completa nos primeiros 3 dias'] },
        ],
        checklists: [{ label: 'Adaptação do Cão Adulto', freq: 'daily', items: ['Cão em modo shut down ou explorando?', 'Comeu normalmente?', 'Usou o local de banheiro correto?', 'Algum comportamento preocupante?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1-3 — Shut Down', tasks: ['Quarto silencioso e seguro', 'Deixar o cão iniciar o contato', 'Sem visitas ou festas de chegada'], note: 'Cão "perfeito" nos primeiros 3 dias: provavelmente congelado de estresse, não personalidade real' },
          { day: 2, label: 'Dia 4-7 — Primeiras Explorações', tasks: ['Cão começa a farejar a casa?', 'Brincadeira iniciada?', 'Mostra personalidade?'] },
          { day: 3, label: 'Semana 2-3 — Rotina', tasks: ['Horários fixos de refeição, passeio, brincadeira', 'Regras claras e consistentes', 'Comportamentos surpresa: comportamentalista?'] },
          { day: 4, label: 'Mês 1 — Adaptação Consolidada', tasks: ['Cão em casa como se sempre fosse dono?', 'Housetraining completo?', 'Personalidade real conhecida?'] },
          { day: 5, label: 'Mês 2-3 — Confiança', tasks: ['Cão busca o tutor espontaneamente?', 'Brinca e relaxa com confiança?', 'Problemas comportamentais identificados e trabalhados?'] },
          { day: 6, label: 'Veterinário', tasks: ['Avaliação completa nos primeiros 3 dias', 'Histório de saúde do abrigo?', 'Vacinas e vermifugação atualizados?'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Fase de adaptação: dias 1-3, semanas 1-3, meses 1-3', 'Cão progredindo?', 'Comportamentalista veterinário se necessário?'] },
        ],
        vetAlert: ['Cão adulto que come muito pouco por > 3 dias', 'Comportamento agressivo intenso desde o 1° dia', 'Sinais de doença: vômito, diarreia, letargia'],
        prevention: ['Transição suave com descompressão adequada', 'Não tentar "compensar" o passado com excesso de afeto nas primeiras semanas'],
        myths: [{ myth: 'Cão adulto adotado não "aprende" como filhote', truth: 'Falso. Cão adulto aprende durante toda a vida. Às vezes é até mais fácil treinar um adulto que um filhote (atenção melhor, menor impulsividade). O histórico desconhecido pode levantar desafios, mas nunca é uma sentença.' }],
        faq: [
          { q: 'Cão adulto de abrigo pode conviver com cães que já tenho?', a: 'Na maioria dos casos sim, com introdução cuidadosa (regra dos 3 também se aplica para animais residentes). Primeiros dias: espaços separados e encontros supervisionados. Consultar o abrigo sobre comportamento com outros cães.' },
        ],
      }],
    },
  ],
};
