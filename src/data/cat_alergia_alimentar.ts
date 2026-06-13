import type { Category } from './types';
export const catAlergiaAlimentar: Category = {
  id: 'alergia-alimentar', name: 'Alergia e Intolerância Alimentar', emoji: '🍗', gradient: 'g-orange',
  description: 'Cão coçando sem pulgas, diarreia após comida, patas vermelhas — alergia alimentar canina',
  conditions: [
    {
      id: 'alergia-proteina', name: 'Alergia a Proteína Alimentar', emoji: '🥩', gradient: 'g-red',
      description: 'Hipersensibilidade imune a proteínas específicas da dieta — frango e boi são as mais comuns',
      prevalence: 'Responsável por 10-20% dos casos de alergia canina; frango, boi, soja e trigo são os alérgenos mais frequentes',
      protocols: [{
        id: 'p1', title: 'Protocolo Alergia Alimentar', subtitle: 'Dieta de exclusão 8-12 semanas com proteína novel hidrolisada',
        stages: [
          { id: 's1', label: 'Cutânea', urgency: 'moderate', description: 'Coceira, otite recorrente e patas vermelhas.', signs: ['Coceira intensa (patas, virilha, orelhas, axila)', 'Otite recorrente bilateral (sem pulgas)', 'Patas e virilha avermelhadas', 'Sem sazonalidade (ao contrário de atopia)'] },
          { id: 's2', label: 'Gastrointestinal', urgency: 'moderate', description: 'Diarreia recorrente após refeição.', signs: ['Diarreia mole recorrente', 'Gases e borborigmos', 'Vômito não frequente', 'Fezes com muco'] },
        ],
        triggers: ['Frango (causa #1)', 'Carne bovina (#2)', 'Soja, trigo, milho', 'Ovo, laticínios', 'Qualquer proteína de exposição crônica'],
        steps: [
          { title: 'Dieta de eliminação 8-12 semanas', icon: '🍽️', duration: '8-12 semanas rigorosas',
            description: 'Proteína hidrolisada ou novel — sem exceções.',
            checklist: ['OPÇÃO 1: Ração hipoalergênica com proteína hidrolisada (Royal Canin HP, Hills Z/D)', 'OPÇÃO 2: Proteína novel caseira (peixe + batata-doce, coelho + batata)', 'ZERO petisco, ZERO restos de comida, ZERO mudança durante o teste', '8 semanas mínimo para resultado confiável (alergia IgE: resposta mais lenta)', 'Melhora: reintrodução de proteínas 1 a 1 para identificar o alérgeno', 'Sem melhora: atopia ou DII — investigação adicional'] },
        ],
        checklists: [{ label: 'Dieta de Exclusão', freq: 'daily', items: ['Cão comeu APENAS a dieta de exclusão?', 'Nenhum petisco ou restos?', 'Patas menos vermelhas/coçando menos?', 'Fezes melhores?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início da Dieta de Exclusão', tasks: ['Trocar TUDO para proteína novel ou hidrolisada', 'Informar TODA a família: nenhum petisco', 'Fotografar a pele/patas como baseline'], note: 'Uma exceção pode invalidar semanas de teste' },
          { day: 2, label: 'Dia 2 — Observação Inicial', tasks: ['Cão comeu nova ração?', 'Alguma reação de piora inicial (raro)?', 'Registrar coceira: 1-10'] },
          { day: 3, label: 'Dia 3 — Adaptação', tasks: ['Aceitando a nova dieta?', 'Fezes normais?', 'Coceira igual ou diferente?'] },
          { day: 4, label: 'Dia 4 — Semana 1', tasks: ['Sem desvio alimentar?', 'Patas comparadas à foto do dia 1?', 'Coceira: escala de 1-10 igual?'] },
          { day: 5, label: 'Dia 5 — Persistência', tasks: ['Membro da família deu algo errado?', 'Cão achou restos em lixo?', 'Eliminar qualquer fonte de alérgeno potencial'], note: 'Patas e orelhas: primeiros a melhorar em caso de resposta' },
          { day: 6, label: 'Dia 6 — Medicação de Suporte', tasks: ['Apoquel ou Cytopoint: podem ser usados durante o teste para conforto', 'NÃO invalidam o resultado da dieta', 'Orelhas sendo limpas e tratadas?'] },
          { day: 7, label: 'Dia 7 — Semana 1 Completa', tasks: ['Progresso anotado?', 'Mais 7 semanas de teste (mínimo)', 'Veterinário informado da evolução?'] },
        ],
        vetAlert: ['Coceira que não melhora com dieta após 12 semanas (pode ser atopia)', 'Infecção bacteriana secundária da pele', 'Otite grave bilateral'],
        prevention: ['Rotação de proteínas desde filhote (reduz exposição crônica a um alérgeno)', 'Evitar trocas frequentes de ração (mas não ficar décadas no mesmo produto)'],
        myths: [{ myth: 'Cão com alergia alimentar sempre tem problema digestivo', truth: 'A maioria dos cães com alergia alimentar apresenta principalmente sinais cutâneos (coceira, otite, patas vermelhas), não gastrointestinais. Não ter diarreia não exclui alergia alimentar.' }],
        faq: [
          { q: 'Posso fazer dieta de exclusão caseira sem ração específica?', a: 'Sim. Dieta caseira com proteína novel (nunca comida antes): peixe branco + batata-doce, coelho + batata, canguru + inhame. Sem complementos nutricionais por até 12 semanas (depois suplementar se continuar caseira).' },
          { q: 'Qual a diferença entre alergia alimentar e atopia?', a: 'Alergia alimentar: causada por componente da dieta, ocorre o ano todo. Atopia: alergia a alérgenos ambientais (pólen, ácaro), tipicamente sazonal. Ambas têm apresentação cutânea similar. Diferenciadas por dieta de exclusão e teste intradérmico.' },
          { q: 'Cão com alergia a frango pode comer frango pro resto da vida?', a: 'Se confirmada alergia a frango por teste de reintrodução: nunca mais frango na dieta. Rações com frango: verificar o rótulo antes de qualquer compra. "Sabor frango" contém frango.' },
        ],
      }],
    },
  ],
};
