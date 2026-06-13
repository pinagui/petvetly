import type { Category } from './types';
export const catPetHotel: Category = {
  id: 'pet-hotel', name: 'Pet Hotel, Viagem e Transporte', emoji: '✈️', gradient: 'g-indigo',
  description: 'Como preparar o cão para ficar no hotel, viajar de avião e longas viagens',
  conditions: [
    {
      id: 'pet-hotel-adaptacao', name: 'Pet Hotel e Creche — Como Adaptar', emoji: '🏨', gradient: 'g-indigo',
      description: 'Cão estressado no pet hotel — como escolher e adaptar gradualmente',
      prevalence: 'Estresse no hotel/creche é muito comum em cães sem socialização prévia; adaptação gradual reduz drasticamente',
      protocols: [{
        id: 'p1', title: 'Protocolo Pet Hotel', subtitle: 'Escolha criteriosa, adaptação gradual e manejo de ansiedade',
        stages: [
          { id: 's1', label: 'Primeiro Contato', urgency: 'low', description: 'Cão sem experiência de hotel — visita de adaptação necessária.', signs: ['Nunca ficou longe do tutor por mais de 12h', 'Sem socialização com outros cães', 'Apegado ao tutor'] },
          { id: 's2', label: 'Estresse no Hotel', urgency: 'moderate', description: 'Cão que retorna do hotel com sinais de estresse.', signs: ['Retornou magro (não comeu)', 'Gastroenterite pós-hotel (stress colitis)', 'Agressivo ou letárgico após retorno', 'Mordido por outro cão no hotel'] },
        ],
        triggers: ['Nunca foi ao hotel antes', 'Hotel sem separação por porte', 'Hotel superlotado', 'Falta de adaptação gradual'],
        steps: [
          { title: 'Escolha e adaptação', icon: '🏨', duration: '1-4 semanas de adaptação',
            description: 'Visita antes, dia de creche, depois pernoite.',
            checklist: ['VISITA: conhecer o hotel com o tutor antes', 'Dia de creche (sem dormir): ver como reage', 'Pernoite curto: 1 noite antes de viagem longa', 'Vacinação atualizada: tosse de kennel, giardia', 'Trazer objeto com cheiro do tutor (coberta)', 'Deixar contato emergencial no hotel', 'Hotel deve ter câmera para acompanhar remotamente'] },
        ],
        checklists: [{ label: 'Preparação para Hotel', freq: 'daily', items: ['Vacinação em dia?', 'Cão socializa bem com outros?', 'Visita de adaptação feita?', 'Ração suficiente deixada?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Escolha do Hotel', tasks: ['Visita com o cão: avaliação das instalações', 'Separação por porte?', 'Espaço suficiente por cão?', 'Câmera: tutor pode acompanhar remotamente?'] },
          { day: 2, label: 'Dia 2 — Vacinação', tasks: ['Tosse de kennel (Bordetella): obrigatória', 'Giardia: recomendada em hotéis com muitos cães', 'Vacinas principais em dia?'] },
          { day: 3, label: 'Dia 3 — Adaptação', tasks: ['Dia de creche: deixar por 4-6h e buscar', 'Observar retorno: estressado ou normal?', 'Segunda visita de creche se bem tolerado'] },
          { day: 4, label: 'Dia 4 — Pernoite Teste', tasks: ['1 noite antes da viagem longa', 'Coberta ou camiseta com cheiro do tutor', 'Medicação de ansiedade se vet indicou?'] },
          { day: 5, label: 'Dia 5 — Tosse de Kennel', tasks: ['Tosse seca 5-10 dias após hotel: muito comum', 'Doxiciclina se severa (veterinário)', 'Leve e sem febre: resolve espontaneamente'] },
          { day: 6, label: 'Dia 6 — Colite de Estresse', tasks: ['Diarreia com muco após hotel?', 'Stress colitis: muito comum pós-hotel', 'Dieta bland + metronidazol + probiótico'] },
          { day: 7, label: 'Dia 7 — Pós-Hotel', tasks: ['Retornou saudável e feliz?', 'Hotel aprovado?', 'Cão manteve o peso?'] },
        ],
        vetAlert: ['Cão que não comeu nada no hotel (> 3 dias)', 'Mordido por outro cão no hotel: avaliação veterinária', 'Tosse intensa com febre após hotel'],
        prevention: ['Adaptação gradual antes de toda viagem', 'Vacinação completa', 'Escolha criteriosa do hotel com visita prévia'],
        myths: [{ myth: 'Cão fica feliz no hotel com muitos outros cães', truth: 'Depende da sociabilidade individual. Cão não socializado ou ansioso sofre muito em ambientes coletivos. Para esses: hotel boutique com box individuais ou pet sitter em casa é muito melhor.' }],
        faq: [
          { q: 'Qual vacina é obrigatória para pet hotel?', a: 'A maioria dos hotéis exige: múltipla (V8 ou V10), anti-rábica e tosse de kennel (Bordetella). A Bordetella é a mais importante especificamente para hotel — evita a "tosse de canil", doença respiratória altamente contagiosa em ambientes coletivos.' },
        ],
      }],
    },
    {
      id: 'viagem-aviao', name: 'Viagem de Avião com Cão', emoji: '✈️', gradient: 'g-blue',
      description: 'Documentação, compartimento, sedação e regras das companhias aéreas',
      prevalence: 'Regras variam por companhia; sedação no compartimento de bagagem é controversa e frequentemente contraindicada',
      protocols: [{
        id: 'p1', title: 'Protocolo Viagem Aérea', subtitle: 'Documentação, caixa aprovada, adaptação e sedação',
        stages: [
          { id: 's1', label: 'Cabine (cão pequeno)', urgency: 'low', description: 'Cão < 8-10kg na cabine — regras específicas da companhia.', signs: ['Cão na bolsa sob o assento', 'Silencioso e calmo no voo', 'Regra: peso + bolsa < 8-10kg (varia por companhia)'] },
          { id: 's2', label: 'Compartimento de Bagagem', urgency: 'moderate', description: 'Cão grande no compartimento — riscos e preparação.', signs: ['Cão > 10kg: compartimento de carga', 'Temperatura e pressão controladas em voos domésticos modernos', 'Braquicefálicos: muitas companhias proíbem no compartimento de carga'] },
        ],
        triggers: ['Porte e peso do cão', 'Regras da companhia aérea', 'Documentação veterinária necessária'],
        steps: [
          { title: 'Preparação para viagem aérea', icon: '✈️', duration: 'Antecedência de 30-60 dias',
            description: 'Documentação, caixa homologada e adaptação à caixa com antecedência.',
            checklist: ['ANAC: caixas devem ter medidas específicas por companhia', 'Microchip: obrigatório para viagens internacionais', 'Atestado de saúde: emitido por veterinário (CRMV)', 'Vacinas em dia: especialmente rábica (internacional)', 'Adaptação à caixa: meses antes da viagem', 'Sedação: controversa — veterinário avalia individualmente', 'Internacional: certificado de saúde do MAPA'] },
        ],
        checklists: [{ label: 'Checklist de Viagem', freq: 'daily', items: ['Documentação completa?', 'Caixa homologada pela companhia?', 'Cão adaptado à caixa?', 'Água e ventilação na caixa?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Planejamento', tasks: ['Companhia aérea: verificar regras de pet', 'Peso + caixa: < limite da companhia?', 'Braquicefálico: companhia aceita?'] },
          { day: 2, label: 'Dia 2 — Documentação', tasks: ['Atestado de saúde (30 dias antes do voo)', 'Microchip verificado?', 'Internacional: certificado MAPA 10 dias antes'] },
          { day: 3, label: 'Dia 3 — Caixa', tasks: ['Comprar caixa aprovada pela companhia', 'Meses antes: começar adaptação', 'Refeições dentro da caixa?'] },
          { day: 4, label: 'Dia 4 — Adaptação à Caixa', tasks: ['Caixar com porta aberta primeiro', 'Fechar por 5-10 min com petisco', 'Expandir gradualmente'], note: 'Cão bem adaptado à caixa sofre muito menos no voo' },
          { day: 5, label: 'Dia 5 — Sedação', tasks: ['Veterinário: sedação indicada?', 'Sedação em compartimento de carga: riscos respiratórios', 'Alternativa: protocolo de ansiolítico mais suave (trazodona, gabapentina)?'] },
          { day: 6, label: 'Dia 6 — Véspera do Voo', tasks: ['Alimentar 4-6h antes (evitar enjoo)', 'Exercício intenso no dia para cansaço', 'Coberta com seu cheiro na caixa'] },
          { day: 7, label: 'Dia 7 — Pós-Voo', tasks: ['Cão estressado? Oferecer água e refeição leve', 'Veterinário se sinais respiratórios?', 'Braquicefálico: observar respiração 24h após voo'] },
        ],
        vetAlert: ['Braquicefálico em voo de longa duração: risco respiratório', 'Sedação sem avaliação veterinária prévia: risco de complicação'],
        prevention: ['Adaptação gradual à caixa meses antes', 'Documentação com antecedência (MAPA: 10 dias)', 'Evitar voo de carga em extremo calor ou frio'],
        myths: [{ myth: 'Sedar o cão facilita a viagem e é seguro', truth: 'Sedação em voo, especialmente no compartimento de carga, aumenta o risco de complicações respiratórias na altitude. Adaptação à caixa e manejo da ansiedade com ansiolíticos mais suaves são preferidos pela maioria dos veterinários especializados.' }],
        faq: [
          { q: 'Meu buldogue pode viajar de avião?', a: 'Muitas companhias proíbem raças braquicefálicas no compartimento de carga. Na cabine (se peso permitir): possível, mas também com riscos. Verificar a política específica da companhia e consultar veterinário especializado. Viagem terrestre ou marítima é frequentemente mais segura para braquicefálicos.' },
        ],
      }],
    },
  ],
};
