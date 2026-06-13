import type { Category } from './types';

export const catPele: Category = {
  id: 'pele', name: 'Pele, Pelo & Coceira', emoji: '🔬', gradient: 'g-amber',
  description: 'Alergias, dermatites, sarna, fungos, queda de pelo e irritações cutâneas',
  conditions: [
    {
      id: 'alergia', name: 'Dermatite Atópica & Alergia', emoji: '🌿', gradient: 'g-amber',
      description: 'A alergia de pele mais comum — e mais complexa de resolver sem diagnóstico correto',
      prevalence: '40% dos cães — segunda causa mais comum de consulta veterinária',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Alergia Completo', subtitle: 'Identificação do gatilho em 3 fases + controle da inflamação',
        stages: [
          { id: 's1', label: 'Leve', urgency: 'low', description: 'Coceira ocasional, pele rosa, pelo opaco.', signs: ['Coça 5-10x/dia','Pele com leve vermelhidão em área específica','Pelo sem brilho','Sem perda de pelo'] },
          { id: 's2', label: 'Moderado', urgency: 'moderate', description: 'Coceira frequente, pele avermelhada, escoriações.', signs: ['Coça continuamente por períodos longos','Eritema visível em axilas, virilha, patas, orelhas','Pelo partido nas extremidades','Pequenas crostas de escoriação'] },
          { id: 's3', label: 'Grave', urgency: 'high', description: 'Coceira intensa, lesões abertas, infecção secundária.', signs: ['Autolesão com escoriações profundas','Alopecia (perda de pelo em manchas)','Hiperpigmentação da pele (fica escura e espessa)','Infecção bacteriana secundária (piodermite)','Odor intenso'] },
        ],
        triggers: ['Dermatophagoides pteronyssinus (ácaro de poeira) — gatilho mais comum', 'Dermatophagoides farinae — segundo ácaro mais comum', 'Pólen de gramíneas (timothy grass, bermuda) — sazonal', 'Pólen de árvores (betula, cipreste)', 'Fungos ambientais (Alternaria, Cladosporium)', 'Proteína de frango (> 52% dos casos alimentares)', 'Proteína bovina (> 34% dos casos alimentares)', 'Glúten de trigo', 'Soja', 'Leite e derivados', 'Produto de limpeza em superfícies', 'Shampoo com sulfatos ou fragrâncias', 'Dermatite alérgica à picada de pulga (DAP)'],
        steps: [
          { title: 'Diário Clínico de 14 Dias', icon: '📓', duration: '14 dias',
            description: 'Diferencia alergia ambiental (sazonal, piora em casa fechada) de alimentar (constante) de contato (localizada).',
            checklist: ['Onde coça: patas? orelhas? virilha? axilas? barriga? geral?', 'Quando piora: manhã? noite? primavera? inverno?', 'Frequência: 5-10x/dia (leve), 30+x/dia (grave)', 'Alimentos ingeridos nos últimos 3 dias', 'Exposições novas: tapete novo, produto de limpeza, coleira, shampoo', 'Foto diária da área mais afetada'] },
          { title: 'Banho Terapêutico Anti-inflamatório', icon: '🛁', duration: '2x/semana na fase aguda',
            description: 'Shampoo de aveia coloidal reduz inflamação por inibição de prostaglandinas. Água FRIA (vasoconstrição, reduz coceira imediata). 10 min de contato antes de enxaguar.',
            checklist: ['Shampoo: aveia coloidal OU clorexidina 2-4% (infecção associada)', 'Temperatura: FRIA — nunca morna na fase aguda', 'Contato de 10 minutos antes de enxaguar', 'Enxaguar completamente (resíduo piora coceira)', 'Secar com toalha, não secador quente', 'Frequência: 2x/semana agudo → 1x/semana manutenção', 'Não usar shampoo humano — pH errado (9 vs 7,4 canino)'] },
          { title: 'Controle de Pulgas (Obrigatório)', icon: '🦟', duration: 'Mensal',
            description: 'Em cão com DAP (dermatite alérgica à picada de pulga), UMA ÚNICA PICADA causa reação que dura dias. Antiparasitário mensal não é opcional em cão atópico.',
            checklist: ['Antiparasitário sistêmico oral (isoxazolinas: afoxolaner, fluralaner, sarolaner) — mais eficaz', 'Aplicar rigorosamente a cada 30 dias, sem atrasar', 'Tratar TODOS os animais da casa simultaneamente', 'Tratar o ambiente: spray residual em tapetes e frestas', 'Verificar se há pulgas: pente fino na base da cauda, abdômen'] },
          { title: 'Suplementação Obrigatória', icon: '💊', duration: 'Diário',
            description: 'Barreira cutânea comprometida é central na atopia. Ômega-3 + ceramidas reforçam essa barreira.',
            checklist: ['Ômega-3 EPA+DHA: 1mL óleo de salmão por 5kg/dia', 'Vitamina E: 10 UI/kg (antioxidante sinérgico)', 'Probiótico: Lactobacillus acidophilus ou mistura — 30 dias mínimo', 'Dieta rica em gorduras boas (não rações secas ultrassecas)', 'Evitar rações com corantes artificiais (tartrazina agrava atopia)'] },
        ],
        checklists: [
          { label: 'Checklist Diário', freq: 'daily', items: ['Ômega-3 na ração', 'Checar área principal: melhorou ou piorou?', 'Evitar coçar com unhas (cortá-las se necessário)', 'Anotar frequência de coceira'] },
          { label: 'Checklist Semanal', freq: 'weekly', items: ['Banho terapêutico', 'Lavar cama 60°C', 'Aspirar sofá e tapetes', 'Checar pulgas', 'Revisar diário clínico: algum padrão emergiu?'] },
          { label: 'Checklist Mensal', freq: 'monthly', items: ['Antiparasitário', 'Foto comparativa', 'Reavaliar ração', 'Medir unhas'] },
        ],
        vetAlert: ['Lesões com pus ou crosta úmida (infecção secundária)', 'Perda de pelo em manchas > 5cm', 'Sem nenhuma melhora após 4 semanas de protocolo rigoroso', 'Inchaço na face ou pescoço (reação alérgica grave)', 'Cão se automutilando intensamente'],
        prevention: ['Antiparasitário mensal sem falta', 'Ração com ômega-3 incluído', 'Banho mensal com shampoo neutro pH 7,4', 'Ambiente ventilado e desumidificado', 'Lavar cama semanalmente'],
        myths: [
          { myth: '"Coceira é sempre pulga"', truth: 'Pulga é uma das causas. Ácaros, alimentos e pólen são igualmente ou mais comuns. Tratamento sem diagnóstico certo desperdiça dinheiro e tempo.' },
          { myth: '"Banho frequente piora a alergia"', truth: 'Banho com shampoo adequado (aveia coloidal) e temperatura correta melhora. O problema é shampoo errado ou água quente — não o banho em si.' },
        ],
        faq: [
          { q: 'Qual a diferença entre alergia ambiental e alimentar?', a: 'Ambiental: sazonal, piora em épocas específicas, afeta principalmente patas/orelhas/axilas/virilha, melhora com banho. Alimentar: constante o ano todo, não melhora com banho, qualquer área pode ser afetada. Teste de eliminação diferencia.' },
          { q: 'Posso dar anti-histamínico?', a: 'Loratadina: 0,5mg/kg 1x/dia — relativamente segura. Difenidramina: 1mg/kg 2-3x/dia — causa sonolência, útil na crise. Cetirizina: 0,5-1mg/kg 1-2x/dia. NUNCA dar sem confirmar dose com veterinário. Anti-histamínicos têm eficácia limitada em atopia canina — funcionam melhor como suporte do que como tratamento principal.' },
          { q: 'Apoquel funciona? Tem risco?', a: 'Oclacitinibe (Apoquel) inibe JAK1 — reduz coceira em 24h com alta eficácia. É seguro para uso a longo prazo em adultos saudáveis. Contraindicado em filhotes < 12 meses, gestantes e imunossuprimidos. Não pode ser usado junto com outro imunossupressor.' },
        ],
      }],
    },
    {
      id: 'sarna', name: 'Sarna', emoji: '🦠', gradient: 'g-orange',
      description: 'Sarna sarcóptica (contagiosa, zoonose) e demodécica — identificação e diferenciação',
      prevalence: '8% dos casos de coceira intensa — mas altamente subdiagnosticada',
      protocols: [{
        id: 'p1', title: 'Protocolo de Sarna', subtitle: 'Diagnóstico diferencial + manejo imediato',
        stages: [
          { id: 's1', label: 'Sarcóptica — Leve', urgency: 'high', description: 'Coceira INTENSA nas bordas das orelhas, cotovelos, hock, barriga. Contagiosa.', signs: ['Coceira extrema nas bordas das orelhas (sinal de pinnae)', 'Cotovelos e calcanhares com crostas', 'Descamação cinza-amarelada', 'Reflexo otopedal positivo (coça quando toca a orelha)'] },
          { id: 's2', label: 'Demodécica — Local', urgency: 'moderate', description: 'Manchas de perda de pelo sem coceira intensa. Filhotes e imunossuprimidos.', signs: ['Alopecia localizada (1-5 manchas)', 'Pele escamosa sem coceira intensa', 'Face e patas frontal afetadas', 'Sem contágio para humanos ou outros animais'] },
          { id: 's3', label: 'Demodécica — Generalizada', urgency: 'emergency', description: 'Perda de pelo extensa, infecções secundárias, odor intenso.', signs: ['> 5 manchas ou > 1 região corporal', 'Pele espessa e enrugada', 'Infecções bacterianas secundárias múltiplas', 'Odor muito intenso', 'Cão debilitado'] },
        ],
        triggers: ['Contato com cão infectado (sarcóptica)', 'Imunidade comprometida (demodécica)', 'Filhotes com sistema imune imaturo', 'Cão de rua ou abrigo (sarcóptica)', 'Desnutrição ou doença sistêmica'],
        steps: [
          { title: 'ISOLAMENTO IMEDIATO (Sarcóptica)', icon: '🚨', duration: 'Até diagnóstico confirmado',
            description: 'Sarna sarcóptica é ZOONOSE — passa para humanos causando erupção papular pruriginosa em braços, cintura e tronco. O ácaro Sarcoptes scabiei var. canis não se establece permanentemente em humanos, mas causa coceira por semanas.',
            checklist: ['Isolar o cão de outros animais imediatamente', 'Isolar de crianças < 12 anos', 'Usar luvas ao manusear', 'Lavar roupas com que teve contato a 60°C', 'Aspirar sofá, cama, tapetes e descartar o saco', 'Ácaro vive 3 dias fora do hospedeiro'], warning: 'Não aguarde diagnóstico para isolar. Se houver coceira em humanos da família: médico.' },
        ],
        checklists: [
          { label: 'Checklist de Suspeita de Sarna', freq: 'each_event', items: ['Coceira intensa nas bordas das orelhas?', 'Reflexo otopedal ao tocar a orelha?', 'Manchas de perda de pelo sem coceira (demodécica)?', 'Contato recente com cão desconhecido?', 'Coceira em humanos da família?', 'Raspado de pele veterinário (diagnóstico definitivo)'] },
        ],
        vetAlert: ['Qualquer suspeita de sarna — consulta em 24h', 'Coceira em humanos da família', 'Raspado de pele positivo para Demodex generalizado'],
        prevention: ['Evitar contato com cães desconhecidos ou de rua', 'Manter imunidade: alimentação + vacinação em dia', 'Antiparasitário mensal com isoxazolina previne sarcóptica'],
        myths: [{ myth: '"Sarna é coisa de cão sujo ou abandonado"', truth: 'Sarcóptica é altamente contagiosa — qualquer cão pode pegar num único encontro no parque. Não tem a ver com higiene.' }],
        faq: [
          { q: 'Sarna demodécica passa para humanos?', a: 'Não. Demodex canis é espécie-específica e não consegue parasitar humanos. Sarcóptica sim — causa coceira temporária em humanos.' },
          { q: 'Sarna tem cura definitiva?', a: 'Sarcóptica: sim, com tratamento adequado em 4-8 semanas. Demodécica localizada: em filhotes saudáveis resolve sozinha com imunidade. Generalizada: tratamento longo (meses), pode recorrer em adultos imunocomprometidos.' },
        ],
      }],
    },
    {
      id: 'queda-pelo', name: 'Queda de Pelo & Alopecia', emoji: '🪮', gradient: 'g-purple',
      description: 'Causas da perda de pelo excessiva — de hormonal a nutricional',
      prevalence: 'Terceira queixa dermatológica mais comum',
      protocols: [{
        id: 'p1', title: 'Protocolo de Queda de Pelo', subtitle: 'Triagem das causas e abordagem por tipo',
        stages: [
          { id: 's1', label: 'Sazonal (Normal)', urgency: 'low', description: 'Troca de pelo em épocas específicas. Normal em raças de dupla camada.', signs: ['Pelagem uniforme caindo em grande quantidade', 'Acontece 2x/ano (mudança de estação)', 'Sem irritação ou vermelhidão', 'Novo pelo crescendo normalmente'] },
          { id: 's2', label: 'Alopecia em Manchas', urgency: 'moderate', description: 'Queda focal sem pelo crescendo — indica problema local (fungo, trauma, hormonal).', signs: ['Manchas circulares de calvície', 'Pele na área exposta pode ser normal ou alterada', 'Pode ou não ter coceira'] },
          { id: 's3', label: 'Alopecia Simétrica', urgency: 'high', description: 'Perda simétrica bilateral — fortemente sugere causa hormonal (hipotireoidismo, Cushing).', signs: ['Perda bilateral e simétrica (flancos, dorso, cauda)', 'Pelo opaco, quebradiço antes de cair', 'Possível aumento de peso', 'Letargia associada'] },
        ],
        triggers: ['Muda sazonal (normal em Husky, Golden, Border)', 'Hipotireoidismo (T4 baixo)', 'Hiperadrenocorticismo (Cushing)', 'Alopecia X (hormônio sexual — Spitz, Pomerano)', 'Deficiência de zinco (Husky, Malamute)', 'Dermatofitose (ringworm — fungo)', 'Demodécica', 'Pós-parto / lactação', 'Estresse severo (deflúvio telógeno)'],
        steps: [
          { title: 'Triagem do Tipo de Queda', icon: '🔍', duration: 'Observação',
            description: 'O padrão de queda direciona o diagnóstico.',
            checklist: ['É uniforme por todo o corpo? → muda sazonal ou nutricional', 'Manchas circulares? → suspeita de ringworm (fungo) — lâmpada UV (Wood) mostra fluorescência', 'Simétrica nos flancos? → hormonal (hipotireoidismo, Cushing)', 'Na cabeça e focinho? → sarna demodécica', 'Pós-parto? → normal, resolve em 3-4 meses', 'Após doença grave ou cirurgia? → deflúvio telógeno, resolve espontaneamente'] },
          { title: 'Suporte Nutricional', icon: '🥩', duration: 'Diário',
            description: 'Deficiências nutricionais são causa subestimada de queda de pelo, especialmente em rações de baixa qualidade.',
            checklist: ['Ômega-3: 1mL/5kg/dia — essencial para estrutura do pelo', 'Biotina: 1-5mg/dia — vitamina B7 específica para queratina', 'Zinco quelado: 1-2mg/kg/dia (especialmente nórdicas)', 'Proteína: mínimo 22% na matéria seca da ração (adulto)', 'Vitamina E: 10-30 UI/kg/dia', 'Resultados visíveis no novo pelo em 8-12 semanas'] },
        ],
        checklists: [
          { label: 'Avaliação Mensal do Pelo', freq: 'monthly', items: ['Quantidade de queda aumentou vs mês anterior?', 'Novo pelo está crescendo nas áreas calvas?', 'Pelo brilhante ou opaco/quebradiço?', 'Pele sob o pelo: normal ou alterada?', 'Peso corporal: estável ou aumentando? (hipotireoidismo)'] },
        ],
        vetAlert: ['Alopecia simétrica progressiva (hormonal)', 'Manchas circulares em filhote (ringworm — zoonose)', 'Queda acompanhada de letargia e ganho de peso', 'Pele espessando e escurecendo junto com a queda'],
        prevention: ['Ração de qualidade com perfil nutricional completo', 'Suplementação de ômega-3', 'Escovação regular (reduz queda excessiva de pelo morto)', 'Hemograma e T4 anual em cães > 7 anos'],
        myths: [{ myth: '"Cachorro que perde muito pelo está com doença"', truth: 'Muda sazonal intensa é completamente normal em raças de dupla camada (Husky, Golden, Border). Problema é queda em manchas, assimétrica ou com alteração da pele — não volume.' }],
        faq: [{ q: 'Lâmpada UV (Wood) diagnostica fungo no pelo?', a: 'Sim, para Microsporum canis — mostra fluorescência verde-amarelada. Mas Trichophyton mentagrophytes NÃO fluoresce. Teste negativo não exclui ringworm — apenas diagnóstico definitivo é cultura fúngica.' }],
      }],
    },
  ],
};
