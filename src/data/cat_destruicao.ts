import type { Category } from './types';
export const catDestruicao: Category = {
  id: 'destruicao', name: 'Destruição de Objetos e Mastigação Compulsiva', emoji: '💥', gradient: 'g-orange',
  description: 'Cão que destrói casa, mastiga móveis, objetos — ansiedade ou tédio',
  conditions: [
    {
      id: 'destruicao-ansiedade', name: 'Destruição por Ansiedade de Separação', emoji: '😱', gradient: 'g-red',
      description: 'Destruição que ocorre apenas na ausência do tutor — sinal de ansiedade',
      prevalence: '20-40% dos cães têm algum grau de ansiedade de separação; destruição é o sinal mais visível',
      protocols: [{
        id: 'p1', title: 'Protocolo Destruição por Separação', subtitle: 'Dessensibilização à saída, Kong, ambiente enriquecido',
        stages: [
          { id: 's1', label: 'Ansiedade Leve', urgency: 'moderate', description: 'Destrói 1-2 objetos, melhora em 30-60 min após saída.', signs: ['Destrói próximo à porta', 'Faz xixi ou cocô ao sair', 'Para quando o tutor volta', 'Latido nas primeiras horas'] },
          { id: 's2', label: 'Ansiedade Grave', urgency: 'high', description: 'Destrói móveis, se machuca, elimina o dia todo.', signs: ['Destrói toda vez que o tutor sai', 'Lesões nas patas ou boca de tentar sair', 'Elimina por todo o apartamento', 'Não come quando tutor está fora'] },
        ],
        triggers: ['Hiperligação emocional com o tutor', 'Nunca foi ensinado a ficar sozinho', 'Mudança de rotina (home office → trabalho presencial)', 'Raças mais suscetíveis: Labrador, Border, Spaniels'],
        steps: [
          { title: 'Dessensibilização e enriquecimento', icon: '🧠', duration: 'Semanas a meses',
            description: 'Ensinar que a saída do tutor é normal e previsível.',
            checklist: ['Não dramatizar saída nem chegada (neutralizar o evento)', 'Treino de "ficar": começar por segundos e expandir gradualmente', 'KONG congelado: liberado APENAS quando tutor sai (associação positiva)', 'Câmera: monitorar o que realmente acontece', 'Exercício intenso ANTES de sair: cão cansado fica mais tranquilo', 'Fluoxetina: casos graves, com médico veterinário comportamentalista', 'Cão de companhia: solução para alguns mas pode piorar em outros'] },
        ],
        checklists: [{ label: 'Protocolo de Saída', freq: 'daily', items: ['Kong congelado preparado?', 'Saída feita de forma neutra (sem abraço longo)?', 'Exercício antes de sair?', 'Câmera: como foi o dia?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Câmera: instalar para ver o que acontece', 'Registrar horário e duração da destruição', 'Destruição quando sai ou sempre?'], note: 'Destruição APENAS na ausência = separação; destruição sempre = tédio/excesso de energia' },
          { day: 2, label: 'Dia 2 — Eliminar Dramatização', tasks: ['Saída: 5-10 minutos antes, sem atenção ao cão', 'Chegada: ignorar por 5 min antes de cumprimentar', 'Família alinhada na estratégia?'] },
          { day: 3, label: 'Dia 3 — Kong Congelado', tasks: ['Kong preenchido e congelado no dia anterior', 'Liberar APENAS ao sair', 'Cão come o Kong enquanto está sozinho?'] },
          { day: 4, label: 'Dia 4 — Exercício Prévio', tasks: ['Caminhada de 30-45 min ANTES de sair', 'Sniffari (farejar livremente) esgota mentalmente', 'Cão estava dormindo quando voltou?'] },
          { day: 5, label: 'Dia 5 — Dessensibilização à Saída', tasks: ['Treino: pegar chaves, vestir casaco, mas NÃO sair', 'Normalizar ritual de saída sem o evento real', 'Cão parou de antecipar com o ritual?'], note: 'Cão que pira só de ver as chaves: dessensibilização ao ritual' },
          { day: 6, label: 'Dia 6 — Caso Grave: Veterinário', tasks: ['Ansiedade grave sem melhora?', 'Comportamentalista: fluoxetina + protocolo', 'Fluoxetina não é eutanásia química — melhora qualidade de vida'] },
          { day: 7, label: 'Dia 7 — Progresso', tasks: ['Destruição diminuiu?', 'Kong sendo usado?', 'Plano de longo prazo definido?'] },
        ],
        vetAlert: ['Cão se machuca tentando sair (lesões em patas, boca)', 'Não come por dias quando tutor sai', 'Destruição de itens que causam risco de obstrução'],
        prevention: ['Ensinar a ficar sozinho desde filhote (gradualmente)', 'Não hipervincular com o tutor (dormir junto 100% do tempo sem treino de independência)'],
        myths: [{ myth: 'Cão destrói a casa para se vingar do tutor', truth: 'Cão não tem capacidade de premeditação vingativa. A destruição é expressão de ansiedade ou frustração — comportamento reativo, não planejado. Punir ao chegar só piora a ansiedade associada ao retorno do tutor.' }],
        faq: [
          { q: 'Deixar a TV ligada para o cão ajuda?', a: 'Algum efeito em alguns cães: mascarar ruídos externos, som familiar. Mas não trata ansiedade de separação. DogTV (canal próprio para cães) tem alguma evidência. KONG congelado e exercício físico têm mais evidência que a TV.' },
          { q: 'Punir o cão ao chegar em casa e ver a destruição funciona?', a: 'Não. Cão não associa a punição à ação passada. Punir ao chegar: cão aprende que a chegada do tutor é perigosa — aumenta a ansiedade e pode piorar o comportamento.' },
        ],
      }],
    },
    {
      id: 'mastigacao-tedio', name: 'Mastigação por Tédio e Excesso de Energia', emoji: '🦷', gradient: 'g-amber',
      description: 'Cão que destrói brinquedos e objetos por falta de estimulação mental e física',
      prevalence: 'Raças de trabalho (Border Collie, Husky, Malinois) são as mais afetadas por sub-estimulação',
      protocols: [{
        id: 'p1', title: 'Protocolo Mastigação por Tédio', subtitle: 'Enriquecimento ambiental, exercício e itens de mastigação',
        stages: [
          { id: 's1', label: 'Tédio', urgency: 'low', description: 'Destrói brinquedos e objetos quando está em casa.', signs: ['Mastiga chinelos, almofadas, controle remoto', 'Acontece quando está entediado', 'Para com exercício suficiente', 'Não ansiosa — curiosa e energética'] },
        ],
        triggers: ['Pouco exercício físico e mental', 'Raça com alta necessidade de trabalho', 'Filhote com necessidade oral não canalizada', 'Sem brinquedos adequados para a raça'],
        steps: [
          { title: 'Canalizar a necessidade de mastigar', icon: '🦷', duration: 'Imediato',
            description: 'Fornecer itens adequados para mastigar e esgotar o cão.',
            checklist: ['Brinquedos resistentes de mastigação: Nylabone, Benebone, antler', 'KONG, LickiMat: estimulação mental', 'Exercício: adequado à raça (Border Collie: 90+ min/dia)', 'Enriquecimento: espalhamento de alimento no jardim', 'Comando "deixa" para objetos proibidos', 'Gestão ambiental: esconder objetos proibidos durante treinamento'] },
        ],
        checklists: [{ label: 'Estimulação Diária', freq: 'daily', items: ['Exercício suficiente para a raça?', 'Brinquedo de mastigação disponível?', 'Estimulação mental (KONG, sniffari)?', 'Objetos proibidos fora do alcance?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Quanto exercício o cão recebe por dia?', 'Que raça? Necessidade de exercício?', 'Brinquedos de mastigação disponíveis?'] },
          { day: 2, label: 'Dia 2 — Enriquecimento', tasks: ['Kong preenchido com patê, manteiga de amendoim sem xilitol', 'LickiMat com iogurte congelado', 'Sniffari: passeio de 20 min só farejando'] },
          { day: 3, label: 'Dia 3 — Brinquedos Adequados', tasks: ['Antler, Nylabone: duram semanas', 'Mastigação com pele bovina natural', 'Trocar brinquedos cada 2-3 dias (novidade mantém interesse)'] },
          { day: 4, label: 'Dia 4 — Exercício', tasks: ['Aumentar duração da caminhada?', 'Bola, frisbee, agility: exercício com estimulação mental?', 'Cão dormiu após o exercício?'] },
          { day: 5, label: 'Dia 5 — Gestão Ambiental', tasks: ['Chinelos guardados?', 'Livros e objetos do alcance retirados?', 'Área segura para o cão quando sozinho?'] },
          { day: 6, label: 'Dia 6 — Resultado', tasks: ['Destruição de objetos proibidos diminuiu?', 'Brinquedos de mastigação sendo utilizados?', 'Mais cansado e satisfeito?'] },
          { day: 7, label: 'Dia 7 — Manutenção', tasks: ['Rotina de exercício definida?', 'Enriquecimento diário como hábito?', 'Gestão ambiental permanente?'] },
        ],
        vetAlert: ['Ingestão de pedaços de brinquedo (obstrução)', 'Ferida na boca por mastigação compulsiva'],
        prevention: ['Exercício adequado à raça', 'Brinquedos de mastigação sempre disponíveis', 'Estimulação mental diária'],
        myths: [{ myth: 'Mastigar objetos em filhote é fase que passa sozinha', truth: 'Mastigação de filhote pode diminuir com a troca de dentes. Mas hábito formado em filhote (mastigar objetos proibidos) persiste no adulto. Direcionar para objetos corretos DESDE o início é essencial.' }],
        faq: [
          { q: 'Manteiga de amendoim é segura para cão?', a: 'Manteiga de amendoim SEM XILITOL: segura em moderação. Verificar SEMPRE o rótulo — xilitol é artificial doce usado em algumas marcas e é ALTAMENTE TÓXICO para cães. Pequenas quantidades de manteiga de amendoim natural são ótimas para Kong.' },
        ],
      }],
    },
  ],
};
