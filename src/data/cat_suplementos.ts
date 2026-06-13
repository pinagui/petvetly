import type { Category } from './types';
export const catSuplementos: Category = {
  id: 'suplementos', name: 'Suplementos e Vitaminas', emoji: '💊', gradient: 'g-emerald',
  description: 'Omega-3, probióticos, suplementos articulares e vitaminas — quando usar e como',
  conditions: [
    {
      id: 'omega3-suplemento', name: 'Ômega-3 para Cães', emoji: '🐟', gradient: 'g-blue',
      description: 'O suplemento com mais evidência científica em cães — pele, articulações e coração',
      prevalence: 'Indicado para a maioria dos cães; deficiência é comum em dietas de ração econômica',
      protocols: [{
        id: 'p1', title: 'Protocolo Ômega-3', subtitle: 'Dose correta, fontes e indicações principais',
        stages: [
          { id: 's1', label: 'Indicação Geral', urgency: 'low', description: 'Cão saudável — manutenção.', signs: ['Pelo pouco brilhante', 'Coceira discreta', 'Articulações com início de artrose', 'Dieta de ração econômica'] },
          { id: 's2', label: 'Indicação Terapêutica', urgency: 'low', description: 'Condição específica com indicação de ômega-3.', signs: ['Dermatite atópica', 'Artrose grau 2-3', 'Doença cardíaca (cardiomiopatia)', 'Após quimioterapia'] },
        ],
        triggers: ['Dieta pobre em ácidos graxos essenciais', 'Condição inflamatória crônica', 'Envelhecimento — demanda aumentada'],
        steps: [
          { title: 'Dose e fonte correta', icon: '💊', duration: 'Diário',
            description: 'EPA+DHA são as formas biologicamente ativas — não confundir com ômega-3 de linhaça (ALA).',
            checklist: ['Dose manutenção: 50-100mg EPA+DHA por kg/dia', 'Dose terapêutica: 100-200mg EPA+DHA por kg/dia', 'Fontes: óleo de salmão, sardinha, krill ou cápsulas DHA/EPA', 'Linhaça: ALA não é convertida eficientemente em cães — pouco eficaz', 'Sardinha em água: fonte prática 2-3x/semana (sem sal, sem óleo)', 'Resultado visível no pelo: 4-6 semanas'] },
        ],
        checklists: [{ label: 'Ômega-3 Diário', freq: 'daily', items: ['Ômega-3 dado com a refeição?', 'Fonte de qualidade (contém EPA+DHA)?', 'Armazenado corretamente (refrigerado)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Escolha do Produto', tasks: ['Verificar se contém EPA+DHA (não só ALA)', 'Cápsulas: perfurar sobre a ração', 'Óleo de salmão: medir com seringa'], note: 'Dose baseada no peso: 50-100mg EPA+DHA por kg' },
          { day: 2, label: 'Dia 2 — Início', tasks: ['Dose inicial com a refeição', 'Cão aceita o sabor?', 'Sardinha como alternativa natural?'] },
          { day: 3, label: 'Dia 3 — Consistência', tasks: ['Mesmo horário de suplementação', 'Anotar data de início para avaliar resultado em 4 semanas'] },
          { day: 4, label: 'Dia 4 — Verificar Qualidade', tasks: ['Produto tem certificação IFOS (qualidade de óleo de peixe)?', 'Cheiro rançoso = estragado?', 'Armazenamento refrigerado?'], note: 'Ômega-3 rançoso causa mais dano que benefício' },
          { day: 5, label: 'Dia 5 — Indicações Adicionais', tasks: ['Cão tem artrose? → dose terapêutica maior', 'Dermatite? → alta dose + banho frequência reduzida', 'Doença cardíaca? → consultar veterinário para dose'] },
          { day: 6, label: 'Dia 6 — Combinação', tasks: ['Ômega-3 + vitamina E: sinergismo', 'Probiótico + ômega-3: saúde intestinal e cutânea', 'Não exagerar: excesso causa diarreia'] },
          { day: 7, label: 'Dia 7 — Avaliação em 4 Semanas', tasks: ['Pelo mais brilhante?', 'Coceira reduzida?', 'Mobilidade melhorou?'], note: 'Efeito completo em 4-8 semanas de uso contínuo' },
        ],
        vetAlert: ['Diarreia com dose alta', 'Cão em uso de anticoagulante (ômega-3 pode interferir)', 'Problema de coagulação'],
        prevention: ['Ômega-3 preventivo em cães de raças predispostas a artrose', 'Incluir sardinha 2-3x/semana como fonte natural'],
        myths: [{ myth: 'Ômega-3 de linhaça é igual ao de peixe', truth: 'ALA (linhaça) precisa ser convertido em EPA/DHA no organismo. Cães têm capacidade muito limitada de fazer essa conversão. Prefira fontes marinhas com EPA e DHA diretamente.' }],
        faq: [
          { q: 'Posso dar sardinha em lata para cachorro?', a: 'Sardinha em água ou óleo de girassol, SEM sal: sim, 2-3x/semana. Em óleo de oliva em pequena quantidade: OK. Em tomate, temperos ou molho: não. Sardinha em água é uma das melhores fontes naturais de EPA+DHA.' },
          { q: 'Ômega-3 tem interação com medicamentos?', a: 'Em doses altas (> 300mg/kg/dia), pode ter efeito anticoagulante fraco. Cão em uso de aspirina, clopidogrel ou heparina: consultar veterinário antes de suplementar em doses terapêuticas.' },
          { q: 'Por que o óleo de salmão precisa ser refrigerado?', a: 'Os ácidos graxos insaturados oxidam rapidamente em contato com calor, luz e ar (ranço). Ômega-3 rançoso libera radicais livres e causa mais dano que benefício. Refrigere sempre após aberto e descarte se cheiro estranho.' },
        ],
      }],
    },
    {
      id: 'probiotico-canino', name: 'Probióticos para Cães', emoji: '🦠', gradient: 'g-teal',
      description: 'Quando e como usar probióticos — diarreia, antibiótico, estresse e imunidade',
      prevalence: 'Indicado após qualquer uso de antibiótico; benéfico em diarreia, estresse e alergias cutâneas',
      protocols: [{
        id: 'p1', title: 'Protocolo Probiótico Canino', subtitle: 'Quando usar, qual produto e por quanto tempo',
        stages: [
          { id: 's1', label: 'Uso Preventivo', urgency: 'low', description: 'Manutenção da microbiota saudável.', signs: ['Após antibioticoterapia', 'Mudança de ração', 'Viagem ou estresse', 'Diarreia crônica leve'] },
          { id: 's2', label: 'Uso Terapêutico', urgency: 'moderate', description: 'Disbiose estabelecida.', signs: ['Diarreia persistente após antibiótico', 'Flatulência excessiva', 'Fezes inconsistentes sem causa identificada', 'Coceira associada a intestino (eixo gut-skin)'] },
        ],
        triggers: ['Antibioticoterapia', 'Estresse (mudança de lar, viagem)', 'Troca de ração', 'Dieta de baixa qualidade'],
        steps: [
          { title: 'Escolha e uso correto', icon: '🦠', duration: 'Conforme indicação',
            description: 'Produtos específicos para cães têm cepas adequadas ao microbioma canino.',
            checklist: ['FortiFlora (Purina): mais estudado para cães', 'Proviable DC (Nutramax): multi-cepas', 'Saccharomyces boulardii: excelente para diarreia por antibiótico', 'Dose conforme produto (geralmente 1 sachê/cápsula ao dia)', 'Mínimo 2-4 semanas de uso para efeito terapêutico', 'Não misturar com antibiótico: dar 2h após o ATB'] },
        ],
        checklists: [{ label: 'Probiótico Diário', freq: 'daily', items: ['Dado com a ração?', 'Após antibiótico? Dar 2h depois do ATB', 'Fezes melhorando?', 'Flatulência reduzindo?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início', tasks: ['1 sachê/cápsula com a ração da manhã', 'Nunca no mesmo horário do antibiótico (se em uso)', 'Armazenar em local fresco e seco'] },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Fezes: mais firmes?', 'Flatulência melhorou?', 'Cão come normalmente?'] },
          { day: 3, label: 'Dia 3 — Prebiótico Aliado', tasks: ['Prebióticos (fibra solúvel): alimentam os probióticos', 'Batata doce cozida, cenoura', 'Ração com FOS ou inulina'] },
          { day: 4, label: 'Dia 4 — Avaliação Parcial', tasks: ['Fezes ganhando consistência?', 'Coloração normal?', 'Continue até terminar o ciclo'] },
          { day: 5, label: 'Dia 5 — Estresse', tasks: ['Cão estressado? Probiótico ajuda', 'Mudar de casa? Continuar por 4 semanas', 'Viagem? Levar o probiótico'] },
          { day: 6, label: 'Dia 6 — Sinergia', tasks: ['Probiótico + ômega-3 = melhor saúde cutânea e intestinal', 'Dieta de qualidade potencializa o efeito', 'Fibra na dieta sustenta a microbiota'] },
          { day: 7, label: 'Dia 7 — Ciclo Mínimo (2-4 semanas)', tasks: ['Uso mínimo de 2-4 semanas para colonização', 'Após antibiótico: usar por toda a duração + 1 semana extra', 'Uso crônico: consultar veterinário'] },
        ],
        vetAlert: ['Diarreia com sangue não responde a probiótico', 'Vômito recorrente associado', 'Diarreia > 5 dias sem melhora'],
        prevention: ['Uso preventivo durante e após antibiótico', 'Dieta rica em fibra prebiótica sustenta microbiota', 'Probiótico durante viagens e mudanças de rotina'],
        myths: [{ myth: 'Yogurt natural é suficiente como probiótico para cão', truth: 'Yogurt contém Lactobacillus humano, não cepas caninas. Quantidade de bactérias é variável e geralmente baixa. Produtos específicos para cães têm cepas e quantidades terapêuticas adequadas.' }],
        faq: [
          { q: 'Posso dar kefir para cachorro?', a: 'Sim, kefir de leite em pequenas quantidades (1-2 colheres/dia para porte médio) é geralmente bem tolerado. Kefir de água (sem lactose): melhor para intolerantes a lactose. Mas produtos veterinários têm maior evidência científica.' },
          { q: 'O probiótico pode ser dado por tempo indefinido?', a: 'Sim para a maioria dos probióticos veterinários. Para uso crônico em cão com disbiose recorrente, consultar veterinário para avaliação da causa subjacente.' },
        ],
      }],
    },
  ],
};
