import type { Category } from './types';
export const catApartamento: Category = {
  id: 'apartamento', name: 'Cão em Apartamento', emoji: '🏢', gradient: 'g-teal',
  description: 'Raças adequadas para apto, exercício necessário, latido e adaptação ao espaço pequeno',
  conditions: [
    {
      id: 'vida-apto', name: 'Vida em Apartamento', emoji: '🏢', gradient: 'g-teal',
      description: 'Qualquer cão pode viver em apartamento — com exercício e estimulação adequados',
      prevalence: 'Mais de 60% dos cães no Brasil vivem em apartamentos ou casas sem quintal',
      protocols: [{
        id: 'p1', title: 'Protocolo Vida em Apartamento', subtitle: 'Exercício compensatório, enriquecimento e manejo de latido',
        stages: [
          { id: 's1', label: 'Adaptado', urgency: 'low', description: 'Cão tranquilo e adaptado ao apartamento.', signs: ['Dorme bem durante ausência', 'Sem destruição', 'Sem latido excessivo', 'Exercício regular compensado'] },
          { id: 's2', label: 'Subexercitado e Ansioso', urgency: 'moderate', description: 'Sem saída para energia — comportamentos destrutivos.', signs: ['Latido constante na ausência do tutor', 'Destruição de objetos', 'Hiperatividade ao chegar em casa', 'Andar em círculos ou roer grades'] },
        ],
        triggers: ['Exercício insuficiente', 'Enriquecimento ambiental ausente', 'Raça de alta energia em espaço limitado', 'Isolamento > 8-10h/dia'],
        steps: [
          { title: 'Compensar o espaço com exercício e enriquecimento', icon: '🌳', duration: 'Diário',
            description: 'Tamanho do apartamento importa menos que qualidade e quantidade de exercício.',
            checklist: ['Passeio mínimo 2x/dia, 30+ min cada', 'Raças médias: 1h/dia dividida em 2 saídas', 'Raças de alto drive: 2h/dia + enriquecimento mental', 'Kong recheado ao sair: ocupa e cansa a mente', 'Janela com visão para rua: estímulo visual', 'Rádio ou TV ligada durante ausência', 'Dogwalker se ausência > 8h'] },
        ],
        checklists: [{ label: 'Rotina Diária do Aptodog', freq: 'daily', items: ['2 passeios realizados?', 'Enriquecimento antes de sair (Kong, puzzle)?', 'Exercício total: 30 min+ para raças médias?', 'Retorno em casa: < 8h de solidão?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Raça: adequada para apto?', 'Exercício atual: suficiente?', 'Comportamentos problemáticos existem?'], note: 'Qualquer raça pode viver em apto COM exercício certo' },
          { day: 2, label: 'Dia 2 — Estrutura de Exercício', tasks: ['Passeio manhã: 6-8h (antes do trabalho)', 'Passeio noite: ao chegar em casa', 'Fins de semana: passeio mais longo ou parque'] },
          { day: 3, label: 'Dia 3 — Enriquecimento', tasks: ['Kong recheado com ração e patê congelado', 'Esconder petiscos pela casa', 'Brinquedo de farejar'], note: '20 min de farejar = 1h de caminhada em cansaço mental' },
          { day: 4, label: 'Dia 4 — Treino em Apartamento', tasks: ['5-10 min de treino de comandos', 'Escada: ótimo exercício se permitido', 'Brincadeira de busca no corredor'] },
          { day: 5, label: 'Dia 5 — Latido', tasks: ['Cão late na ausência?', 'Câmera para monitorar?', 'Exercício antes de sair reduz ansiedade de separação'], note: 'Câmera = diagnóstico real de ansiedade de separação' },
          { day: 6, label: 'Dia 6 — Socialização Urbana', tasks: ['Parque de cães (se dog-friendly)', 'Encontro com cão amigo', 'Nova rota de passeio (estimulação olfativa)'] },
          { day: 7, label: 'Dia 7 — Revisão', tasks: ['Cão mais calmo esta semana?', 'Exercício consistente?', 'Destruição ou latido?'] },
        ],
        vetAlert: ['Ansiedade de separação grave com automutilação', 'Cão sem sair por > 24h (urgência sanitária)'],
        prevention: ['Raça escolhida com base no estilo de vida, não só aparência', 'Exercício diário sem exceções', 'Rotina previsível reduz ansiedade'],
        myths: [{ myth: 'Cão grande não pode viver em apartamento', truth: 'Um São Bernardo relaxado precisa de menos exercício que um Jack Russell energético. O que determina a vida em apto é a necessidade de exercício e a personalidade, não o tamanho.' }],
        faq: [
          { q: 'Meu cão pode ficar 8-10h sozinho em apartamento?', a: 'Com exercício adequado antes e depois e enriquecimento disponível durante, a maioria dos adultos tolera bem. Filhotes: máximo 2-3h (precisam de saída para necessidades). Se > 8h regularmente, dogwalker é necessário.' },
          { q: 'Raças ideais para apartamento?', a: 'Poodle, Bichon Frise, Maltese, Shih Tzu, Bulldog Inglês, Basset (baixa energia). Não existe raça "proibida" em apto — depende do exercício oferecido. Golden, Labrador e Border Collie em apto EXIGEM exercício diário rigoroso.' },
          { q: 'Vizinhos reclamam de latido — o que fazer?', a: 'Primeiro verificar: cão late por ansiedade de separação (câmera) ou por estímulos externos (pombos, latido de outros)? Causa diferente, solução diferente. Bark collar (anti-latido) sem diagnóstico é crueldade.' },
        ],
      }],
    },
    {
      id: 'latido-excessivo', name: 'Latido Excessivo', emoji: '🔊', gradient: 'g-red',
      description: 'Cão que late demais — diagnóstico, causa e soluções que realmente funcionam',
      prevalence: 'Queixa mais comum de condomínios; 50% dos casos são ansiedade de separação',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Latido Excessivo', subtitle: 'Diagnóstico da causa e tratamento específico',
        stages: [
          { id: 's1', label: 'Latido por Estímulo', urgency: 'low', description: 'Late para pessoas, sons, pássaros — alertando.', signs: ['Late quando pessoa passa', 'Para quando estímulo some', 'Não late na ausência do tutor', 'Postura alerta, não ansiosa'] },
          { id: 's2', label: 'Latido por Ansiedade de Separação', urgency: 'moderate', description: 'Late continuamente quando sozinho.', signs: ['Late ou late logo após o tutor sair', 'Câmera mostra latido constante', 'Associado a destruição e eliminações incorretas', 'Para quando tutor retorna'] },
        ],
        triggers: ['Ansiedade de separação', 'Tédio e subexercício', 'Alerta territorial (janela)', 'Medo de sons (trovão, fogos)', 'Outros cães latindo (latido social)'],
        steps: [
          { title: 'Diagnóstico antes de tratar', icon: '📷', duration: 'Diagnóstico',
            description: 'Câmera enquanto fora de casa revela a causa real.',
            checklist: ['Instalar câmera: ver o que causa o latido', 'Latido imediato após saída = ansiedade de separação', 'Latido a estímulos = territorial/alerta', 'Exercício aumentado: reduz ambos os tipos', 'Treinamento de dessensibilização à partida', 'Medicação (fluoxetina, trazodona): indicada se ansiedade confirmada'] },
        ],
        checklists: [{ label: 'Monitoramento Diário do Latido', freq: 'daily', items: ['Câmera monitorou o latido?', 'Qual duração e intensidade?', 'Exercício foi feito antes da saída?', 'Enriquecimento foi oferecido?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Câmera', tasks: ['Instalar câmera antes de sair', 'Gravar 1h de ausência', 'Analisar: quando começa? Por que?'], note: 'Sem diagnóstico real, o tratamento é tiro no escuro' },
          { day: 2, label: 'Dia 2 — Exercício Pré-Saída', tasks: ['Passeio de 30-45 min ANTES de sair', 'Deixar cansado fisicamente', 'Kong congelado ao sair'], note: 'Cão cansado late muito menos' },
          { day: 3, label: 'Dia 3 — Dessensibilização', tasks: ['Pegar as chaves sem sair', 'Colocar o sapato e não sair', 'Sair por 1 min e retornar sem drama'], note: 'Rotina de saída = trigger de ansiedade — dessensibilizar' },
          { day: 4, label: 'Dia 4 — Gerenciamento de Janela', tasks: ['Latido por janela: bloquear visão para rua?', 'Persianas em área de estimulação', 'Enriquecimento alternativo longe da janela'] },
          { day: 5, label: 'Dia 5 — Terapia Situacional', tasks: ['Adaptil difusor (feromônio calmante) ligado?', 'Música calma ou TV ligada?', 'Manta com cheiro do tutor no local de descanso?'] },
          { day: 6, label: 'Dia 6 — Medicação?', tasks: ['Ansiedade de separação grave: comportamentalista + medicação', 'Fluoxetina: 4-6 semanas para fazer efeito', 'Trazodona: situacional para gatilhos específicos'] },
          { day: 7, label: 'Dia 7 — Resultado', tasks: ['Câmera: menos latido vs. semana passada?', 'Vizinhos: algum comentário?', 'Ajustar estratégia conforme resultado'] },
        ],
        vetAlert: ['Latido com automutilação', 'Latido associado a convulsão (epilepsia focal)', 'Início súbito de latido em cão adulto tranquilo (dor? doença?)'],
        prevention: ['Socialização desde filhote', 'Treinamento de ficar sozinho gradualmente desde filhote', 'Exercício adequado à raça diariamente'],
        myths: [{ myth: 'Collar anti-latido (choque/spray) resolve o problema', truth: 'Collares punitivos suprimem o latido sem tratar a causa. Causam medo e ansiedade, que pioram o estado emocional do cão. Cão que para de latir por medo não é cão tratado.' }],
        faq: [
          { q: 'Vizinho vai me processar por causa do latido do cão?', a: 'Em condomínios: perturbação do sossego pode gerar advertência e multa. Em processo: raro mas possível. Resolva na origem: diagnostique e trate o latido, negocie horários com o vizinho enquanto trata.' },
          { q: 'Adaptil (DAP) funciona para latido?', a: 'Para ansiedade leve a moderada, sim. Feromônio análogo ao da amamentação reduz ansiedade em 40-60% dos casos. Melhor resultado como complemento ao treino, não como solução única.' },
          { q: 'Meu cão late apenas quando estou em casa — é diferente?', a: 'Sim. Latido na presença do tutor raramente é ansiedade de separação. Pode ser: pedido de atenção (recompensado involuntariamente), alerta territorial, ou necessidade de exercício. Ignorar completamente o latido de demanda (extingue o comportamento).' },
        ],
      }],
    },
  ],
};
