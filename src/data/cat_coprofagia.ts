import type { Category } from './types';
export const catCoprofagia: Category = {
  id: 'coprofagia', name: 'Coprofagia e Hábitos Orais Estranhos', emoji: '💩', gradient: 'g-amber',
  description: 'Cão que come fezes, terra, plástico — causas, riscos e como corrigir',
  conditions: [
    {
      id: 'coprofagia-fezes', name: 'Coprofagia (Comer Fezes)', emoji: '💩', gradient: 'g-amber',
      description: 'Comportamento comum, raramente patológico — mas controlável',
      prevalence: '16-24% dos cães praticam coprofagia; fezes de gato (litter box) são as preferidas',
      protocols: [{
        id: 'p1', title: 'Protocolo Coprofagia', subtitle: 'Exclusão de causas médicas, manejo ambiental e suplementação',
        stages: [
          { id: 's1', label: 'Comportamental', urgency: 'low', description: 'Sem causa médica — comportamento aprendido.', signs: ['Come fezes próprias ou de outros cães', 'Mais frequente em filhotes', 'Sem sintomas digestivos associados', 'Cão bem nutrido e sem parasitas'] },
          { id: 's2', label: 'Médico-Nutricional', urgency: 'moderate', description: 'Deficiência nutricional ou síndrome de má absorção.', signs: ['Coprofagia + emagrecimento', 'Coprofagia + fezes gordurosas (esteatorreia)', 'Insuficiência pancreática exócrina (EPI)', 'Deficiência de vitamina B'] },
        ],
        triggers: ['Comportamento social aprendido com a mãe (no whelping box)', 'Ansiedade, tédio ou estresse', 'Subnutrição ou alimentação insuficiente', 'Insuficiência pancreática exócrina (EPI)', 'Parasitas intestinais', 'Punição excessiva (cão esconde fezes por medo)'],
        steps: [
          { title: 'Exclusão médica e manejo ambiental', icon: '🔧', duration: '2-8 semanas',
            description: 'Excluir EPI, parasitas, deficiências. Depois: manejo ambiental.',
            checklist: ['Coproparasitológico: excluir parasitas', 'Avaliação de TLI se suspeita de EPI (emagrecimento + coprofagia)', 'Dieta de qualidade com ingestão suficiente?', 'MANEJO AMBIENTAL: retirar fezes IMEDIATAMENTE do jardim', 'Trela: impede acesso às fezes durante o passeio', 'Lixeira de gato longe do cão', 'Suplemento: For-bid, AusPet — efeito variável', 'Recompensa por não se aproximar das fezes'] },
        ],
        checklists: [{ label: 'Controle de Coprofagia', freq: 'daily', items: ['Fezes do quintal retiradas imediatamente?', 'Cão sem acesso livre ao jardim sem supervisão?', 'Alimentação adequada em quantidade?', 'Lixeira do gato fora do alcance?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Causa Médica Excluída', tasks: ['Coproparasitológico realizado?', 'EPI avaliado se emagrecimento?', 'Dieta suficiente e de qualidade?'], note: 'Coprofagia com emagrecimento: investigar EPI (Insuficiência Pancreática Exócrina)' },
          { day: 2, label: 'Dia 2 — Manejo Ambiental', tasks: ['Fezes retiradas do jardim imediatamente?', 'Trela nos passeios?', 'Lixeira do gato inacessível ao cão?'] },
          { day: 3, label: 'Dia 3 — Suplemento', tasks: ['For-bid (ácido glutâmico/iodeto): tornar fezes desagradáveis', 'Adicionado NA RAÇÃO do cão que defeca (se for as próprias)', 'Abacaxi fresco na ração (enzimas que alteram o odor)'] },
          { day: 4, label: 'Dia 4 — Treinamento', tasks: ['Cão abordou fezes? Interrupção + redirecionamento', '"Deixa" ou "vem" para desviar atenção', 'Recompensa alta valor ao desviar'], note: 'Punição só aumenta o comportamento em cães ansiosos' },
          { day: 5, label: 'Dia 5 — Enriquecimento Ambiental', tasks: ['Brinquedos que estimulam o instinto de farejar?', 'KONGs e caça ao tesouro ocupam o cão?', 'Exercício físico suficiente?'] },
          { day: 6, label: 'Dia 6 — Avaliação', tasks: ['Frequência diminuiu?', 'Ocasional vs. compulsivo?', 'Médico veterinário comportamentalista se obsessivo?'] },
          { day: 7, label: 'Dia 7 — Realidade', tasks: ['Coprofagia pode ser controlada mas raramente curada 100%', 'Manejo ambiental contínuo?', 'Aceitação se ocasional e saúde mantida?'] },
        ],
        vetAlert: ['Coprofagia + emagrecimento (EPI)', 'Coprofagia + diarreia gordurosa', 'Coprofagia compulsiva sem controle comportamental'],
        prevention: ['Retirar fezes imediatamente do ambiente', 'Enriquecimento ambiental rico', 'Punição zero (aumenta o problema)'],
        myths: [{ myth: 'Cão que come fezes está doente', truth: 'Coprofagia é comportamento normal em muitos cães (especialmente filhotes). Causa médica (EPI, parasitas) é relativamente rara. Maioria é comportamental — manejo ambiental é eficaz.' }],
        faq: [
          { q: 'Meu cão come fezes de gato — é mais perigoso?', a: 'Fezes de gato têm proteínas palatáveis para cão e são a forma mais comum de coprofagia inter-espécies. Risco parasitológico: Toxoplasma (raro), vermes. Lixeira de gato inacessível ao cão resolve 90% dos casos.' },
          { q: 'Bater no cão resolve coprofagia?', a: 'Não — piora. Cão aprende que fezes na frente do dono causam punição, e passa a comer com mais discrição ou ANTES do dono chegar. Manejo ambiental (retirar as fezes) é a estratégia mais eficaz.' },
        ],
      }],
    },
    {
      id: 'pica', name: 'Pica (Comer Objetos Não Alimentares)', emoji: '🪨', gradient: 'g-purple',
      description: 'Cão que come terra, pedras, plástico, meias — causas e riscos de obstrução',
      prevalence: 'Mais comum em filhotes; em adultos: causa médica ou comportamental deve ser investigada',
      protocols: [{
        id: 'p1', title: 'Protocolo Pica Canina', subtitle: 'Excluir causas médicas, enriquecimento e obstrução',
        stages: [
          { id: 's1', label: 'Pica Ocasional', urgency: 'low', description: 'Cão jovem que come objetos por exploração oral.', signs: ['Filhote come objetos durante exploração', 'Sem vômito ou dor associada', 'Melhora com o crescimento e treino'] },
          { id: 's2', label: 'Pica Compulsiva ou Obstrução', urgency: 'emergency', description: 'Cão adulto que come objetos repetidamente — risco de obstrução.', signs: ['Adulto come meias, pedras, terra repetidamente', 'Vômito após ingestão', 'Abdômen distendido', 'Parou de comer', 'Obstrução intestinal: emergência cirúrgica'] },
        ],
        triggers: ['Deficiência nutricional (terra = geofagia por anemia/minerais)', 'Tédio e sub-estimulação', 'TOC comportamental', 'Obstrução intestinal anterior', 'Síndrome de mal-absorção'],
        steps: [
          { title: 'Exclusão médica e manejo', icon: '🔧', duration: 'Diagnóstico + manejo crônico',
            description: 'Hemograma, mineral sérico, manejo ambiental rigoroso.',
            checklist: ['Hemograma: anemia? (geofagia pode indicar anemia)', 'Zinco, ferro, minerais séricos', 'Dieta completa e balanceada?', 'Remover objetos do ambiente', 'Supervisão: nunca em espaço com objetos ingerireis sem supervisão', 'Enriquecimento: brinquedos de mastigação, KONGs', 'Obstrução: VETERINÁRIO DE EMERGÊNCIA', 'TOC: médico veterinário comportamentalista'] },
        ],
        checklists: [{ label: 'Prevenção de Pica', freq: 'daily', items: ['Objetos de risco fora do alcance?', 'Cão supervisionado em espaços com objetos?', 'Enriquecimento ambiental suficiente?', 'Comeu algo hoje que não devia?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Médica', tasks: ['Hemograma para excluir anemia', 'Dieta completa e suficiente?', 'Registrar o que o cão come e com que frequência'] },
          { day: 2, label: 'Dia 2 — Segurança Ambiental', tasks: ['Meias, roupa, brinquedos de criança: fora do alcance', 'Quintal: pedras ingerireis removidas?', 'Supervisão total'] },
          { day: 3, label: 'Dia 3 — Enriquecimento', tasks: ['KONGs preenchidos com comida', 'Brinquedos de mastigação seguros (Nylabone, antler)', 'Busca de alimento no jardim (espalhando a ração)?'] },
          { day: 4, label: 'Dia 4 — Treinamento "Deixa"', tasks: ['"Deixa" e "troca" são comandos-chave', 'Recompensar fortemente quando larga o objeto', 'Nunca correr atrás — vira brincadeira'] },
          { day: 5, label: 'Dia 5 — Monitoramento', tasks: ['Episódios reduziram?', 'Cão com mais atividade mental?', 'Exercício físico suficiente?'] },
          { day: 6, label: 'Dia 6 — Obstrução: Saber o Sinal', tasks: ['Vômito pós-ingestão de objeto = veterinário', 'Parou de defecar = veterinário', 'Letargia após ingerir objeto = raio-x urgente'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Pica melhorou com enriquecimento?', 'Comportamentalista veterinário se persistir?', 'Manejo ambiental como estilo de vida?'] },
        ],
        vetAlert: ['Objeto ingerido + vômito + parou de comer = obstrução', 'Pedra ou brinquedo no raio-x', 'Obstrução total: emergência cirúrgica'],
        prevention: ['Ambiente à prova de pica (objetos fora do alcance)', 'Enriquecimento ambiental rico', 'Supervisão em espaços com objetos ingerireis'],
        myths: [{ myth: 'Cão come terra por frescura', truth: 'Geofagia (comer terra) pode indicar deficiência mineral, anemia ou náusea. Não é frescura — investigar causa antes de punir. Punição não resolve e pode piorar comportamento por ansiedade.' }],
        faq: [
          { q: 'Meu cão engoliu uma meia — devo ir ao vet?', a: 'Cão pequeno ou médio: IR AO VETERINÁRIO IMEDIATAMENTE. Meia pode causar obstrução intestinal grave. Cão grande: monitorar por 12-24h para vômito e parada de defecação. Se qualquer sintoma: emergência. Indução de vômito só pelo veterinário.' },
          { q: 'Brinquedos de mastigação resolvem pica?', a: 'Parcialmente. Brinquedos adequados reduzem a necessidade de mastigar objetos inadequados. Mas pica compulsiva em adulto tem componente comportamental — enriquecimento + comportamentalista + manejo ambiental são necessários.' },
        ],
      }],
    },
  ],
};
