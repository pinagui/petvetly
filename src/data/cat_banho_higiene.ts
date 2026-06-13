import type { Category } from './types';
export const catBanhoHigiene: Category = {
  id: 'banho-higiene', name: 'Banho e Higiene', emoji: '🛁', gradient: 'g-cyan',
  description: 'Frequência de banho, produtos corretos, higiene do pelo e controle de odor',
  conditions: [
    {
      id: 'banho-frequencia', name: 'Frequência e Técnica de Banho', emoji: '🚿', gradient: 'g-cyan',
      description: 'Banho correto evita dermatite, ressecamento e infecções fúngicas',
      prevalence: 'Erro muito comum: banho excessivo resseca o manto e favorece coceira',
      protocols: [{
        id: 'p1', title: 'Protocolo de Banho Ideal', subtitle: 'Frequência, temperatura e shampoo correto por tipo de pelo',
        stages: [
          { id: 's1', label: 'Pelo Curto e Liso', urgency: 'low', description: 'Banho a cada 30-45 dias.', signs: ['Pelo liso: Labrador, Beagle, Boxer', 'Frequência: 30-45 dias', 'Escovação semanal suficiente', 'Secagem rápida'] },
          { id: 's2', label: 'Pelo Longo e Duplo', urgency: 'low', description: 'Banho a cada 15-21 dias.', signs: ['Golden, Border Collie, Husky', 'Frequência: 15-21 dias', 'Secagem com soprador obrigatória', 'Escovação diária evita nós'] },
        ],
        triggers: ['Cão sujo de lama ou fezes', 'Odor intenso', 'Pele irritada (banho só com orientação vet)', 'Parasitas (shampoo específico)'],
        steps: [
          { title: 'Técnica de banho correto', icon: '🚿', duration: '20-40 min',
            description: 'Água morna (não quente), shampoo neutro pH 7, enxague completo.',
            checklist: ['Água: 36-38°C — nunca fria nem quente', 'Shampoo específico para cão (pH 7 — humano pH 4-5 irrita)', 'Molhar completamente antes de aplicar shampoo', 'Massagem por 3-5 min', 'Enxague COMPLETO — resíduo de shampoo causa coceira', 'Condicionador (pelo longo): hidratar sem rinse em zonas de atrito'] },
        ],
        checklists: [{ label: 'Checklist de Banho', freq: 'each_event', items: ['Água na temperatura certa?', 'Shampoo específico para cão?', 'Enxague completo (sem resíduo)?', 'Secado completamente?', 'Ouvidos secos após o banho?'] }],
        weeklyPlan: [
          { day: 1, label: 'Pré-Banho', tasks: ['Escovação para remover nós (nó + água = feltro permanente)', 'Algodão nos ouvidos para evitar entrada de água', 'Unhas verificadas'], note: 'Nunca banha com nós no pelo' },
          { day: 2, label: 'Banho', tasks: ['Água 36-38°C', 'Shampoo neutro massageado 3 min', 'Enxague até água escorrer limpa'] },
          { day: 3, label: 'Secagem', tasks: ['Toalha: pressionar, não friccionar', 'Soprador de cabelo: morno, não quente', 'Cão completamente seco antes de ir para o ambiente'], note: 'Pelo úmido = dermatite por Malassezia' },
          { day: 4, label: 'Escovação Pós-Banho', tasks: ['Pelo 100% seco?', 'Escovação com escova adequada ao tipo de pelo', 'Verificar pele durante escovação'] },
          { day: 5, label: 'Monitoramento', tasks: ['Coceira excessiva?', 'Vermelhidão ou caspa?', 'Pelo brilhante e sem odor?'] },
          { day: 6, label: 'Manutenção Semanal', tasks: ['Escovação (pelo longo: diária)', 'Limpar comissuras dos olhos com gaze úmida', 'Verificar área anal e virilha'] },
          { day: 7, label: 'Higiene Geral', tasks: ['Patas limpas após passeio', 'Dobras de pele (Bulldog, Shar-Pei) limpas e secas', 'Próximo banho agendado?'] },
        ],
        vetAlert: ['Coceira intensa após banho (alergia ao produto)', 'Vermelhidão generalizada', 'Odor de ouvido após molhar'],
        prevention: ['Shampoo correto por tipo de pele e pelo', 'Nunca banhar cão doente ou com febre', 'Otite: sempre colocar algodão no ouvido antes do banho'],
        myths: [{ myth: 'Banho semanal deixa o cão mais limpo e saudável', truth: 'Banho excessivo remove o manto lipídico protetor da pele, causando ressecamento, coceira e favorecendo dermatite. Menos é mais.' }],
        faq: [{ q: 'Posso usar shampoo humano no meu cachorro?', a: 'Não. O pH da pele canina (6,5-7,5) é diferente do humano (4,5-5,5). Shampoo humano acidifica a pele do cão, comprometendo a barreira cutânea e favorecendo infecções.' }],
      }],
    },
    {
      id: 'odor-corporal', name: 'Odor Corporal e Seborreia', emoji: '👃', gradient: 'g-amber',
      description: 'Causas do mau cheiro em cães — do normal ao patológico',
      prevalence: 'Odor constante entre banhos pode indicar problema de pele, ouvido ou glândulas anais',
      protocols: [{
        id: 'p1', title: 'Investigação do Odor Canino', subtitle: 'Diferenciar odor normal de patológico e tratar a causa',
        stages: [
          { id: 's1', label: 'Odor Normal', urgency: 'low', description: 'Cheiro de "cachorro" normal — sebáceo e levemente suado.', signs: ['Odor sutil entre banhos', 'Sem coceira ou vermelhidão', 'Sem secreção nos ouvidos', 'Glândulas anais expressas normalmente'] },
          { id: 's2', label: 'Odor Patológico', urgency: 'moderate', description: 'Odor intenso, rançoso ou de peixe — indica problema.', signs: ['Odor de peixe: glândulas anais cheias', 'Odor azedo/fermentado: Malassezia (fungos)', 'Odor de ouvido: otite', 'Odor de urina no pelo: incontinência'] },
        ],
        triggers: ['Glândulas anais congestionadas', 'Malassezia (levedura cutânea)', 'Otite crônica', 'Seborreia idiopática', 'Alimentação inadequada'],
        steps: [
          { title: 'Investigação sistemática', icon: '🔍', duration: 'Diagnóstico',
            description: 'Localizar a fonte do odor: pele, ouvidos, boca, glândulas anais, urina.',
            checklist: ['Ouvidos: secretam, coçam? → Otite', 'Pelos: gordurosos e com caspa? → Seborreia/Malassezia', 'Região anal: arrasta traseiro? → Glândulas anais', 'Boca: hálito fétido? → Doença periodontal', 'Urina: odor amoniacal? → Infecção urinária'] },
        ],
        checklists: [{ label: 'Check Semanal de Higiene', freq: 'weekly', items: ['Ouvidos: sem secreção ou odor?', 'Região anal: cão arrasta traseiro?', 'Pele: coça excessivamente?', 'Boca: hálito normal?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Localizar a Fonte', tasks: ['Cheirar ouvidos (normal ou fétido?)', 'Inspecionar pelos (gordurosos, com caspa?)', 'Verificar região anal'], note: 'Odor de peixe = glândulas anais — solução simples' },
          { day: 2, label: 'Dia 2 — Glândulas Anais', tasks: ['Cão arrasta traseiro?', 'Lambe excessivamente a região anal?', 'Agendar esvaziamento se necessário (veterinário ou tosador)'] },
          { day: 3, label: 'Dia 3 — Pele e Pelos', tasks: ['Shampoo antifúngico se odor azedo/levedura?', 'Secagem completa pós-banho', 'Verificar dobras de pele (Bulldog)'] },
          { day: 4, label: 'Dia 4 — Dieta', tasks: ['Ração de qualidade reduz odor corporal', 'Probiótico pode reduzir odor intestinal', 'Omega-3 melhora qualidade da pele'] },
          { day: 5, label: 'Dia 5 — Ouvidos', tasks: ['Limpeza com solução própria?', 'Veterinário se otite'] },
          { day: 6, label: 'Dia 6 — Boca', tasks: ['Escovação dental?', 'Hálito melhorou?'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Odor controlado?', 'Causa identificada e tratada?', 'Veterinário se persistir'] },
        ],
        vetAlert: ['Odor intenso com coceira e vermelhidão (dermatite)', 'Glândulas anais inflamadas ou com abscesso', 'Odor de necrose (ferida infectada)'],
        prevention: ['Dieta de qualidade', 'Banho na frequência certa', 'Limpeza de ouvidos mensal', 'Esvaziamento de glândulas anais quando necessário'],
        myths: [{ myth: 'Cão cheiroso é cão saudável', truth: 'Cão excessivamente perfumado pode ter dermatite mascarada. Odor canino natural e discreto é sinal de saúde — não tente eliminar todo odor.' }],
        faq: [{ q: 'Com que frequência devo esvaziar as glândulas anais?', a: 'Apenas quando há sinais: arrastar o traseiro, lambedura excessiva ou odor de peixe intenso. Esvaziamento preventivo frequente pode causar inflamação. Cães com problemas crônicos: a cada 4-8 semanas com veterinário.' }],
      }],
    },
  ],
};
