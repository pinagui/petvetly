import type { Category } from './types';
export const catViagem: Category = {
  id: 'viagem', name: 'Viagem com Pet', emoji: '✈️', gradient: 'g-blue',
  description: 'Carro, avião, enjoo, documentação e adaptação em novos ambientes',
  conditions: [
    {
      id: 'enjoo-carro', name: 'Enjoo no Carro (Cinetose)', emoji: '🚗', gradient: 'g-amber',
      description: 'Enjoo no carro é comum e tratável — não condene o cão a sofrer em viagens',
      prevalence: 'Até 25% dos cães têm cinetose; mais comum em filhotes (labirinto ainda em desenvolvimento)',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Enjoo', subtitle: 'Treino de dessensibilização, remédio e dicas para viagem sem estresse',
        stages: [
          { id: 's1', label: 'Enjoo Leve', urgency: 'low', description: 'Salivação e letargia no carro.', signs: ['Salivação excessiva', 'Lambedura de lábios', 'Agitação ou imobilidade', 'Bocejo frequente', 'Reluta entrar no carro'] },
          { id: 's2', label: 'Enjoo Grave', urgency: 'moderate', description: 'Vômito e estresse intenso em qualquer viagem.', signs: ['Vômito durante ou após viagens curtas', 'Diarreia no carro', 'Gemidos ou latidos', 'Tremores', 'Ansiedade generalizada'] },
        ],
        triggers: ['Movimentação do carro (conflito visual-vestibular)', 'Odores do carro (couro, gasolina, ar condicionado)', 'Associação negativa (só vai ao vet de carro)', 'Estômago cheio'],
        steps: [
          { title: 'Dessensibilização progressiva', icon: '🚗', duration: '2-4 semanas',
            description: 'Mudar a associação do carro de negativa para positiva.',
            checklist: ['Etapa 1: Cão entra e sai do carro parado com petisco (3 dias)', 'Etapa 2: Motor ligado, carro parado, petisco (3 dias)', 'Etapa 3: Volta no quarteirão com petisco', 'Etapa 4: Viagens curtas para locais AGRADÁVEIS (parque, não vet)', 'Jejum de 4h antes de viagens longas', 'Ventilação adequada: janela entreaberta'] },
          { title: 'Medicação se necessário', icon: '💊', duration: 'Para viagens longas',
            description: 'Antiemético prescrito pelo veterinário para viagens incontroláveis.',
            checklist: ['Maropitant (Cerenia): antiemético veterinário — prescrito', 'Dipirona ou difenidramina: opções off-label', 'Gaba ou trazodona: ansiedade grave associada', 'Nunca medicar sem prescrição veterinária', 'Testar medicação em viagem curta antes da longa'] },
        ],
        checklists: [{ label: 'Preparo para Viagem', freq: 'each_event', items: ['Jejum de 4h (nunca em jejum < 2h para medicação)?', 'Medicação dada com antecedência?', 'Caixinha ou cinto de segurança?', 'Água disponível na caixinha?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Carro Parado', tasks: ['Cão só entra no carro com petisco', 'Fica 5 min dentro com motor desligado', 'Sai feliz com recompensa'], note: 'Objetivo: carro = lugar bom' },
          { day: 2, label: 'Dia 2 — Motor Ligado', tasks: ['Motor ligado, carro parado, 5 min com petisco', 'Cão relaxado dentro?', 'Se estressar: voltar etapa anterior'] },
          { day: 3, label: 'Dia 3 — Primeiro Movimento', tasks: ['Volta no quarteirão', 'Petisco durante o trajeto', 'Terminar no parque ou lugar gostoso'], note: 'Nunca terminar no veterinário nas fases iniciais' },
          { day: 4, label: 'Dia 4 — Viagem de 10 min', tasks: ['Destino agradável (parque, praça)', 'Janela entreaberta', 'Cão viaja em caixinha ou com cinto?'] },
          { day: 5, label: 'Dia 5 — Avaliação', tasks: ['Salivação diminuiu?', 'Cão entra voluntariamente no carro?', 'Vômito ocorreu?'] },
          { day: 6, label: 'Dia 6 — Viagem de 30 min', tasks: ['Jejum de 4h antes', 'Ventilação', 'Água disponível na caixinha'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Viagens semanais para locais bons', 'Carro = experiência positiva = associação muda em semanas', 'Veterinário se sem melhora em 4 semanas (medicação)'] },
        ],
        vetAlert: ['Vômito com sangue no carro', 'Cão desmaia durante viagem', 'Ansiedade extrema com tremores e defecação'],
        prevention: ['Viagens frequentes para locais AGRADÁVEIS desde filhote', 'Caixinha confortável = espaço seguro no carro', 'Nunca primeira viagem longa sem preparo'],
        myths: [{ myth: 'Cão vai se acostumar no carro com o tempo', truth: 'Sem dessensibilização ativa, a fobia ao carro tende a piorar. Cada viagem traumática reforça o medo. Treinamento progressivo é necessário.' }],
        faq: [
          { q: 'Cão deve viajar em caixinha ou solto no banco?', a: 'Caixinha é mais seguro e reduz o enjoo (campo visual fixo). Solto no banco traseiro com cinto de cão é alternativa. NUNCA no banco da frente sem proteção — em freada brusca, o cão vai ao para-brisas.' },
          { q: 'Posso dar dramamine (dimenidrinato) no cão?', a: 'Off-label, em doses baixas e com orientação veterinária. Preferível Cerenia (maropitant) que foi desenvolvido especificamente para cinetose canina. Consulte o veterinário antes de qualquer medicação.' },
          { q: 'Como viagem de avião funciona para cão?', a: 'Cão pequeno (até 8-10kg): cabine em bolsa aprovada. Cão grande: porão (pressurizado e climatizado). Exige microchip, vacinação em dia, atestado de saúde e reserva com antecedência.' },
        ],
      }],
    },
    {
      id: 'viagem-longa', name: 'Viagem Longa e Hotéis Pet-Friendly', emoji: '🏨', gradient: 'g-blue',
      description: 'Preparar o cão para viagens de múltiplos dias, mudanças de ambiente e rotina',
      prevalence: 'Demanda crescente — turismo pet-friendly duplicou nos últimos 5 anos no Brasil',
      protocols: [{
        id: 'p1', title: 'Protocolo Viagem Longa', subtitle: 'Preparação, rotina em viagem e adaptação ao hotel',
        stages: [
          { id: 's1', label: 'Viagem de até 8h', urgency: 'low', description: 'Cão bem adaptado, viagem diurna.', signs: ['Cão já habituado ao carro', 'Paradas a cada 2-3h', 'Carro ventilado'] },
          { id: 's2', label: 'Viagem Internacional', urgency: 'moderate', description: 'Documentação, vacinas e adaptação fuso.', signs: ['Microchip obrigatório', 'Vacinação específica por país', 'Quarentena em alguns destinos', 'Atestado de saúde veterinário'] },
        ],
        triggers: ['Mudança de rotina e ambiente', 'Múltiplos destinos', 'Carro ou avião por longas horas'],
        steps: [
          { title: 'Preparação para viagem longa', icon: '🧳', duration: '1-2 semanas antes',
            description: 'Documentação, mochila pet e acostumar o cão.',
            checklist: ['Vacinas em dia — confira carteira', 'Microchip ativo e cadastrado', 'Mochila do cão: ração, bowl, medicamentos, brinquedo preferido', 'Atestado de saúde (validade 10 dias para viagem aérea)', 'Confirmar política pet do hotel antes de reservar', 'Lençol ou manta com cheiro de casa para hotelaria'] },
        ],
        checklists: [{ label: 'Checklist de Viagem', freq: 'each_event', items: ['Documentação na bolsa?', 'Medicamentos suficientes para viagem + extra?', 'Bowl dobrável e ração suficiente?', 'Coleira com plaquinha de identificação atualizada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — 1 Semana Antes', tasks: ['Conferir vacinas e validade', 'Agendar atestado de saúde', 'Confirmar pet-friendly no hotel'], note: 'Atestado de saúde: solicitar na véspera da viagem (validade 10 dias)' },
          { day: 2, label: 'Dia 2 — 5 Dias Antes', tasks: ['Embalar ração suficiente + 20% extra', 'Levar brinqueto e manta favorita', 'Testar medicação anti-enjoo se necessário'] },
          { day: 3, label: 'Dia 3 — Véspera', tasks: ['Atestado de saúde emitido', 'Bag do cão organizada', 'Jejum de 4-6h antes se viagem de carro longa'] },
          { day: 4, label: 'Dia 4 — Dia da Viagem', tasks: ['Primeira parada em 2h', 'Água, passeio rápido, necessidades', 'Cão confortável na caixinha?'] },
          { day: 5, label: 'Dia 5 — Chegada ao Destino', tasks: ['Passeio de adaptação no novo ambiente', 'Manter horários de alimentação', 'Espalhar item com cheiro de casa no hotel'] },
          { day: 6, label: 'Dia 6 — Exploração', tasks: ['Explorar o novo ambiente com cão', 'Respeitar ritmo e reações do cão', 'Regras do hotel pet-friendly?'] },
          { day: 7, label: 'Dia 7 — Retorno', tasks: ['Verificar se não esqueceu nada do cão', 'Retorno: mesma rotina de viagem', 'Vermifugar após viagem para locais de alto risco'] },
        ],
        vetAlert: ['Cão que recusa comer por > 48h em viagem', 'Diarreia hemorrágica em viagem', 'Prostração intensa longe de casa'],
        prevention: ['Microchip e identificação sempre atualizados', 'Viagens curtas de treino antes da longa', 'Manter rotina de alimentação em viagem'],
        myths: [{ myth: 'Hotel 5 estrelas que aceita pet é de confiança total', truth: 'Confirmar sempre: área de passeio, política de raças, limite de peso, taxa extra. Alguns hotéis "pet-friendly" restringem raças e tamanhos. Ligue antes de reservar.' }],
        faq: [
          { q: 'Preciso de vacina contra raiva para viajar pelo Brasil?', a: 'Não há quarentena entre estados brasileiros, mas algumas cidades exigem apresentação da carteirinha vacinal em praias e parques públicos. Para cruzar fronteiras internacionais, os requisitos variam muito por país.' },
          { q: 'Como manter a rotina do cão em viagem?', a: 'Mesmos horários de alimentação, passeios pela manhã e à tarde, brinquedo favorito disponível. Cão com rotina mantida adapta-se muito mais rápido a novos ambientes.' },
        ],
      }],
    },
  ],
};
