import type { Category } from './types';
export const catOuvidoCuidados: Category = {
  id: 'ouvido-cuidados', name: 'Ouvido e Audição', emoji: '👂', gradient: 'g-orange',
  description: 'Limpeza de ouvido, otite, surdez e cuidados completos com a saúde auricular',
  conditions: [
    {
      id: 'limpeza-ouvido', name: 'Limpeza e Manutenção dos Ouvidos', emoji: '👂', gradient: 'g-amber',
      description: 'Como limpar o ouvido do cão corretamente e prevenir otite',
      prevalence: 'Otite é uma das 3 principais consultas veterinárias; limpeza correta previne 60% dos casos',
      protocols: [{
        id: 'p1', title: 'Protocolo de Limpeza Auricular', subtitle: 'Frequência, produto correto e técnica segura',
        stages: [
          { id: 's1', label: 'Ouvido Saudável', urgency: 'low', description: 'Limpeza preventiva regular.', signs: ['Odor neutro ou levemente adocicado', 'Coloração rosada interna', 'Sem secreção excessiva', 'Cão não coça o ouvido'] },
          { id: 's2', label: 'Início de Otite', urgency: 'moderate', description: 'Limpeza ainda efetiva + veterinário.', signs: ['Coceira no ouvido', 'Odor forte', 'Secreção escura ou amarelada', 'Sacudir a cabeça frequentemente'] },
        ],
        triggers: ['Piscina ou banho sem secar o ouvido', 'Ouvido peludo (Cocker, Poodle)', 'Alergias (causa primária de otite)', 'Acaros (Otodectes)'],
        steps: [
          { title: 'Limpeza correta passo a passo', icon: '👂', duration: '5-10 min',
            description: 'Solução limpadora veterinária — NUNCA cotonete dentro do canal.',
            checklist: ['Solução limpadora veterinária específica (pH correto)', 'Preencher o canal auditivo com a solução', 'Massagear a base da orelha por 30 segundos', 'Cão vai sacudir — deixar!', 'Limpar apenas a parte visível com algodão ou gaze', 'NUNCA cotonete fundo: compacta a cerume e lesiona', 'Frequência: a cada 2-4 semanas ou após banho/natação'] },
        ],
        checklists: [{ label: 'Manutenção Auricular Mensal', freq: 'monthly', items: ['Ouvidos limpos após o banho?', 'Algodão nos ouvidos durante o banho?', 'Pelos dentro da orelha cortados?', 'Odor normal após limpeza?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Inspeção', tasks: ['Olhar dentro do ouvido com luz', 'Odor: neutro ou forte?', 'Cor da pele interna: rosada ou vermelha?', 'Secreção visível?'] },
          { day: 2, label: 'Dia 2 — Limpeza Preventiva', tasks: ['Solução limpadora dentro do canal', 'Massagear 30 segundos', 'Cão sacudiu? (normal e desejável)', 'Limpar a parte externa com gaze'] },
          { day: 3, label: 'Dia 3 — Pós-Banho', tasks: ['Algodão para secar o excesso de água', 'Secador na mínima distância se ouvido peludo', 'Ouvido úmido = otite de Malassezia'] },
          { day: 4, label: 'Dia 4 — Pelos', tasks: ['Pelos dentro do canal (Cocker, Poodle, Maltese)?', 'Tricotomia auricular pelo tosador', 'Previne acúmulo de umidade e detritos'] },
          { day: 5, label: 'Dia 5 — Verificação', tasks: ['Cão coça o ouvido?', 'Inclina a cabeça para um lado?', 'Odor após limpeza?'] },
          { day: 6, label: 'Dia 6 — Sinal de Alerta', tasks: ['Secreção escura (ácaros de ouvido?)', 'Odor fétido (bactéria?)', 'Vermelhidão interna (inflamação?)'], note: 'Veterinário se qualquer um desses sinais' },
          { day: 7, label: 'Dia 7 — Rotina de Manutenção', tasks: ['Limpeza a cada 2-4 semanas', 'Após todo banho ou natação', 'Próxima limpeza agendada?'] },
        ],
        vetAlert: ['Secreção amarela ou com sangue', 'Odor muito intenso após limpeza', 'Inclinação de cabeça persistente (otite média)'],
        prevention: ['Algodão nos ouvidos durante banho', 'Secar bem após banho e natação', 'Limpar regularmente em raças predispostas'],
        myths: [{ myth: 'Limpar o ouvido com cotonete remove toda a sujeira', truth: 'Cotonete compacta a cerume no fundo do canal e pode lesionar o tímpano. A solução limpadora + massagem + sacudida natural é incomparavelmente mais eficaz e segura.' }],
        faq: [
          { q: 'Com que frequência limpar os ouvidos?', a: 'Cão sem predisposição: a cada 2-4 semanas ou após banho/natação. Raças pelosas (Cocker, Poodle): a cada 1-2 semanas. Após otite: conforme orientação veterinária.' },
          { q: 'Posso usar água oxigenada ou álcool no ouvido do cão?', a: 'Não. Álcool irrita o epitélio e dói em ouvido inflamado. Água oxigenada pode ser irritante e não tem benefício comprovado. Use solução limpadora veterinária formulada para o pH do ouvido canino.' },
          { q: 'Ácaros de ouvido passam para humanos?', a: 'Otodectes cynotis (ácaro de ouvido) infesta principalmente cães e gatos, raramente causa lesões temporárias em humanos. Não é considerado zoonose relevante, mas higiene básica após manipulação do pet infectado é recomendada.' },
        ],
      }],
    },
    {
      id: 'surdez-canina', name: 'Surdez em Cães', emoji: '🔇', gradient: 'g-indigo',
      description: 'Surdez congênita, adquirida e como adaptar a vida do cão surdo',
      prevalence: 'Dálmata (30%), Cattle Dog, Bull Terrier branco, Husky — predisposição genética',
      protocols: [{
        id: 'p1', title: 'Protocolo do Cão Surdo', subtitle: 'Diagnóstico, adaptações e treinamento por sinais',
        stages: [
          { id: 's1', label: 'Suspeita de Surdez', urgency: 'low', description: 'Teste em casa antes do diagnóstico.', signs: ['Não acorda com sons altos', 'Não responde ao nome de longe', 'Se assusta ao ser tocado de surpresa', 'Dálmata, Bull Terrier ou Cattle Dog branco'] },
          { id: 's2', label: 'Surdez Confirmada', urgency: 'low', description: 'BAER test confirma — adaptações necessárias.', signs: ['BAER (Brainstem Auditory Evoked Response) alterado', 'Sem resposta a qualquer som', 'Unilateral ou bilateral'] },
        ],
        triggers: ['Congênita: relacionada ao gene de pelagem branca (merle, piebald)', 'Adquirida: otite crônica, ototoxicidade (aminoglicosídeos), envelhecimento'],
        steps: [
          { title: 'Adaptações para cão surdo', icon: '🐾', duration: 'Permanente',
            description: 'Cão surdo vive muito bem com adaptações simples.',
            checklist: ['Treinamento por sinais de mão (ASL/libras canina)', 'Vibração no chão para comunicar (bater o pé perto)', 'Nunca soltar sem guia em áreas abertas', 'Identificação: tag "Eu sou surdo" na coleira', 'Acordar tocando suavemente antes de qualquer aproximação', 'Luz piscante em vez de voz para chamar à distância'] },
        ],
        checklists: [{ label: 'Vida do Cão Surdo', freq: 'daily', items: ['Sempre avisar antes de tocar?', 'Manteve a guia em locais abertos?', 'Treino de sinais realizado hoje?', 'Cão seguro e sem susto hoje?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Confirmação', tasks: ['BAER test veterinário', 'Unilateral ou bilateral?', 'Bilaterial: maior adaptação necessária'] },
          { day: 2, label: 'Dia 2 — Segurança', tasks: ['Tag "Surdo" na coleira', 'Microchip e identificação atualizados', 'Sem soltar em áreas sem cerca'], note: 'Cão surdo não ouve carro — controle obrigatório' },
          { day: 3, label: 'Dia 3 — Aprender Sinais', tasks: ['Sinal para "Sentar": palma aberta para baixo', 'Sinal para "Vir": acenar com os dois braços', 'Sinal de recompensa: polegar levantado ou sorriso'], note: 'Cão aprende sinais TÃO bem quanto comandos verbais' },
          { day: 4, label: 'Dia 4 — Treino por Sinais', tasks: ['Sessão de 5 min com sinais', 'Petisco de alto valor como recompensa', 'Lanterna piscante como "elogio à distância"'] },
          { day: 5, label: 'Dia 5 — Adaptações em Casa', tasks: ['Bater suavemente no chão para chamar atenção', 'Tocar suavemente antes de acordar', 'Remover surpresas e sustos (crianças instruídas)'] },
          { day: 6, label: 'Dia 6 — Outros Pets', tasks: ['Outros cães funcionam como "ouvidos"', 'Cão surdo segue o rebanho naturalmente', 'Campaninha no coleira do cão surdo: localização por vibração'] },
          { day: 7, label: 'Dia 7 — Qualidade de Vida', tasks: ['Cão surdo é feliz?', 'Brinca, come, socializa normalmente?', 'Surdez não é impedimento para vida plena'] },
        ],
        vetAlert: ['Surdez súbita em cão adulto (possível neurite vestibular ou tumor)', 'Surdez + otite crônica grave'],
        prevention: ['Seleção de reprodutores com BAER test em raças predispostas', 'Evitar ototóxicos (gentamicina, tobramicina) sem indicação precisa', 'Tratar otite crônica agressivamente'],
        myths: [{ myth: 'Cão surdo tem qualidade de vida ruim', truth: 'Cão surdo adapta-se completamente bem. Aprende sinais com facilidade, é tão feliz quanto outros cães e não tem consciência de "perda". A surdez é uma diferença, não uma tragédia.' }],
        faq: [
          { q: 'Como acordar um cão surdo sem assustá-lo?', a: 'Toque suave no ombro ou na base da cauda. Nunca na cabeça de surpresa. Vibração leve na cama (batida no colchão) antes do toque direto. Após habituar ao ritual, o cão acorda calmo.' },
          { q: 'Cão surdo pode ir ao parque sem guia?', a: 'Não recomendado em parques abertos sem cerca. Em parque cercado, sim. Cão surdo não ouve "vem!" verbal e não ouve perigos (carros, outros cães agressivos). Guia longa é uma alternativa segura para mais liberdade.' },
        ],
      }],
    },
  ],
};
