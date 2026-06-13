import type { Category } from './types';
export const catLutoPet: Category = {
  id: 'luto-pet', name: 'Luto, Eutanásia e Qualidade de Vida', emoji: '🕊️', gradient: 'g-purple',
  description: 'Como avaliar qualidade de vida, decisão de eutanásia e elaborar o luto pela perda do pet',
  conditions: [
    {
      id: 'qualidade-vida', name: 'Avaliação de Qualidade de Vida', emoji: '⚖️', gradient: 'g-purple',
      description: 'Escalas objetivas para avaliar quando a qualidade de vida está comprometida',
      prevalence: 'Decisão de eutanásia é a mais difícil que tutores enfrentam; escalas ajudam tornar a decisão mais objetiva',
      protocols: [{
        id: 'p1', title: 'Protocolo Qualidade de Vida', subtitle: 'Escala HHHHHMM, conversa com o veterinário e preparação',
        stages: [
          { id: 's1', label: 'Qualidade Comprometida', urgency: 'high', description: 'Cão apresenta mais dias ruins que bons.', signs: ['Dor não controlada mesmo com medicação', 'Não come ou bebe há dias', 'Incapaz de se mover sem dor', 'Sem momentos de alegria ou prazer', 'Respiração laboriosa constante'] },
          { id: 's2', label: 'Qualidade Mínima Preservada', urgency: 'moderate', description: 'Cão ainda tem momentos bons.', signs: ['Abana o rabo para o tutor', 'Come quando oferecido', 'Alguns momentos de conforto', 'Dor controlada com medicação'] },
        ],
        triggers: ['Doença terminal avançada', 'Dor crônica intratável', 'Falência orgânica múltipla', 'Tumor com metástase'],
        steps: [
          { title: 'Escala HHHHHMM', icon: '⚖️', duration: 'Avaliação diária',
            description: 'H: Hurt (dor), H: Hunger (fome), H: Hydration (hidratação), H: Hygiene, H: Happiness, M: Mobility, M: More good days than bad.',
            checklist: ['Dor controlada? (0-10)', 'Come voluntariamente?', 'Hidratado?', 'Higiene: úlceras, escaras?', 'Momentos de felicidade?', 'Move sem auxílio?', 'Mais dias bons que ruins na última semana?', 'Soma < 35 pontos (7 critérios × 5): qualidade comprometida'] },
        ],
        checklists: [{ label: 'Avaliação Diária de QV', freq: 'daily', items: ['Cão comeu hoje?', 'Dor aparente?', 'Algum momento de alegria?', 'Consegue se mover?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Aplicar a Escala', tasks: ['Aplicar HHHHHMM hoje', 'Registrar pontuação', 'Conversar com veterinário sobre prognóstico'] },
          { day: 2, label: 'Dia 2 — Conversa Honesta', tasks: ['O que o veterinário diz sobre expectativa?', 'Qual é o plano de controle da dor?', 'Quais são os próximos passos previstos?'] },
          { day: 3, label: 'Dia 3 — Mais Bons ou Ruins?', tasks: ['Diário dos dias: bom ou ruim?', 'O que define um dia bom para este cão?', 'Família alinhada na avaliação?'] },
          { day: 4, label: 'Dia 4 — Plano de Eutanásia', tasks: ['Eutanásia domiciliar: veterinários que oferecem o serviço?', 'Cremação ou sepultamento planejados?', 'Família preparada para a conversa?'] },
          { day: 5, label: 'Dia 5 — Cuidados Paliativos', tasks: ['Dor controlada ao máximo?', 'Refeições palatáveis (qualidade vs. quantidade)?', 'Ambiente confortável?'] },
          { day: 6, label: 'Dia 6 — Qualidade vs. Quantidade', tasks: ['Prolongar a vida x qualidade de vida?', 'Mais dias de sofrimento vs. morte digna?', 'Decisão feita com o veterinário, não sozinho?'] },
          { day: 7, label: 'Dia 7 — Momento Certo', tasks: ['Escala: maioria dos dias < 35?', 'Cão ainda tem momentos de alegria?', 'Equipe veterinária e família alinhados?'] },
        ],
        vetAlert: ['Dor aguda intratável', 'Cão que não come há > 3 dias', 'Dispneia em repouso constante'],
        prevention: ['Cuidados paliativos precoces em doenças crônicas', 'Conversa sobre eutanásia antes da crise aguda', 'Médico veterinário como parceiro nessa decisão'],
        myths: [{ myth: 'Eutanásia é desistir do animal', truth: 'Eutanásia é um ato de amor quando a qualidade de vida está irrecuperavelmente comprometida. Prolongar sofrimento não é amor — é apego humano às custas do bem-estar animal. É o último presente que podemos dar.' }],
        faq: [
          { q: 'Como saber o momento certo para a eutanásia?', a: 'Não há um momento perfeito. Guias: HHHHHMM (escala de qualidade de vida), conversa franca com o veterinário, observar se o cão ainda tem momentos de alegria e conexão. A maioria dos tutores que eutanasiaram diz que esperou um dia a mais — não um dia a menos.' },
          { q: 'Eutanásia em casa é possível?', a: 'Sim. Muitos veterinários oferecem eutanásia domiciliar. O cão pode partir em seu lugar seguro, no chão, com a família por perto. É considerada a forma mais digna e tranquila por muitos especialistas em bem-estar animal.' },
          { q: 'O que acontece depois — cremação ou sepultamento?', a: 'Cremação individual: cinzas entregues ao tutor. Cremação coletiva: mais barata, sem devolução das cinzas. Sepultamento: cemitérios de animais existem em várias cidades. Jardim particular: verificar legalidade municipal.' },
        ],
      }],
    },
    {
      id: 'luto-tutor', name: 'Luto do Tutor pela Perda do Pet', emoji: '💔', gradient: 'g-pink',
      description: 'O luto pela perda de um animal de companhia é real e legítimo',
      prevalence: 'Luto por pet pode ser tão intenso quanto luto por humano próximo — e frequentemente não reconhecido socialmente',
      protocols: [{
        id: 'p1', title: 'Protocolo Luto Pet', subtitle: 'Validação, rituais de despedida e quando buscar apoio',
        stages: [
          { id: 's1', label: 'Luto Normal', urgency: 'low', description: 'Tristeza, choro, saudade — faz parte.', signs: ['Tristeza profunda', 'Choro frequente', 'Falta no espaço físico', 'Olhar para os pertences do pet', 'Pode durar semanas a meses'] },
          { id: 's2', label: 'Luto Complicado', urgency: 'moderate', description: 'Luto que interfere na vida cotidiana por meses.', signs: ['Não consegue trabalhar após meses', 'Culpa intensa não resolvida', 'Dificuldade de mencionar o pet sem colapso emocional', 'Isolamento social'] },
        ],
        triggers: ['Morte inesperada', 'Eutanásia (culpa associada)', 'Animal era o principal suporte emocional', 'Sem rede de apoio que valide o luto'],
        steps: [
          { title: 'Rituais e suporte', icon: '💔', duration: 'Semanas a meses',
            description: 'Luto é processo, não fraqueza.',
            checklist: ['Permitir-se sentir a dor (não reprimir)', 'Rituais de despedida: carta de despedida, foto especial, plantio de árvore', 'Falar sobre o pet: não esconder a saudade', 'Grupos de apoio online para tutores que perderam pets', 'Psicólogo se luto impacta a funcionalidade', 'Tempo para um novo pet: quando estiver pronto, não por pressão'] },
        ],
        checklists: [{ label: 'Autocuidado no Luto', freq: 'daily', items: ['Comi hoje?', 'Dormi?', 'Falei com alguém sobre o que estou sentindo?', 'Um momento de gentileza comigo mesmo hoje?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Logo Após a Perda', tasks: ['Não tomar decisões grandes (emprego, mudança)', 'Ligar para alguém que entenda o vínculo com o pet', 'Chorar é permitido e necessário'], note: 'Culpa é quase universal após perda de pet — é normal, não é verdade' },
          { day: 2, label: 'Dia 2 — Rituais', tasks: ['Criar um ritual de despedida (carta, foto)', 'Manter objetos do pet temporariamente (reconforta)', 'Ou guardar se causa dor intensa aguda'] },
          { day: 3, label: 'Dia 3 — Rede de Apoio', tasks: ['Quem na sua rede entende o vínculo com pets?', 'Grupos de luto pet online?', 'Evitar pessoas que minimizam ("é só um bicho")'] },
          { day: 4, label: 'Dia 4 — Rotina', tasks: ['Manter rotina básica (comer, dormir)', 'Exercício físico leve: auxilia na regulação emocional', 'Gentileza consigo mesmo?'] },
          { day: 5, label: 'Dia 5 — Culpa e Perdão', tasks: ['Decisão de eutanásia: foi um ato de amor', 'Falar com o veterinário sobre a decisão: confirmar que foi correta?', 'Culpa de sobrevivência é normal mas não é verdade'] },
          { day: 6, label: 'Dia 6 — Memória', tasks: ['Álbum de fotos impresso?', 'Plaquinha ou memorial em casa?', 'Compartilhar memórias nas redes (se confortável)?'] },
          { day: 7, label: 'Dia 7 — Quando o Novo Pet?', tasks: ['Não há prazo certo', 'Quando VOCÊ estiver pronto — não por pressão', 'Antes de adotar: vazio preenchível ou substituição que não funciona?'] },
        ],
        vetAlert: ['Pensamentos de autolesão ou suicídio associados ao luto: buscar ajuda imediata (CVV: 188)', 'Luto que impede qualquer funcionalidade após 3 meses: psicólogo'],
        prevention: ['Preparação gradual em casos de doenças terminais', 'Conversa antecipada sobre eutanásia antes da crise', 'Rede de apoio identificada antecipadamente'],
        myths: [{ myth: '"É só um animal" — o luto por pet é exagerado', truth: 'O vínculo humano-animal libera os mesmos neurotransmissores que o vínculo humano-humano. O luto pela perda de um pet é neurobiologicamente idêntico ao luto por uma pessoa querida. Minimizar não ajuda — validar o luto é essencial.' }],
        faq: [
          { q: 'Quando é hora de considerar um novo pet?', a: 'Não há tempo mínimo. Algumas pessoas se sentem prontas em semanas, outras em anos. O indicativo: quando a ideia de um novo pet traz alegria, não culpa. Não adotar para preencher o vazio imediatamente — o novo animal merece receber amor pleno.' },
          { q: 'Como explicar a morte do pet para crianças?', a: 'Honestidade com linguagem adaptada à idade. Sem eufemismos ("foi embora", "adormeceu") — causam confusão e medo de dormir. Permita que a criança chore e faça perguntas. Rituais de despedida (enterro, carta) ajudam crianças a processar.' },
        ],
      }],
    },
  ],
};
