import type { Category } from './types';
export const catAdestramento: Category = {
  id: 'adestramento', name: 'Adestramento Básico', emoji: '🎓', gradient: 'g-purple',
  description: 'Sentar, ficar, vir, não pular — comandos essenciais com reforço positivo',
  conditions: [
    {
      id: 'comandos-basicos', name: 'Comandos Básicos (Sentar, Ficar, Vir)', emoji: '🐕', gradient: 'g-purple',
      description: 'Os 5 comandos que todo cão deve saber para segurança e convivência',
      prevalence: 'Cão sem comandos básicos tem 3x mais chance de ser abandonado ou ter problemas comportamentais',
      protocols: [{
        id: 'p1', title: 'Protocolo Comandos Básicos', subtitle: 'Reforço positivo: sentar, ficar, vir, não pular, deixa',
        stages: [
          { id: 's1', label: 'Sem Treino Prévio', urgency: 'low', description: 'Cão sem nenhuma instrução — começar do zero.', signs: ['Não responde ao nome', 'Pula nas pessoas', 'Puxa a guia', 'Não fica quieto', 'Pega tudo da rua'] },
          { id: 's2', label: 'Com Bases Parciais', urgency: 'low', description: 'Conhece alguns comandos mas inconsistente.', signs: ['Obedece em casa mas não na rua', 'Obedece com petisco, ignora sem', 'Regressão em situações de distração alta'] },
        ],
        triggers: ['Falta de treinamento desde filhote', 'Comandos inconsistentes (família usa palavras diferentes)', 'Treinamento punitivo que gerou medo de aprender'],
        steps: [
          { title: 'Reforço positivo — princípios', icon: '🎯', duration: 'Diário',
            description: 'Reforço positivo é o método mais eficaz e seguro. Nunca punição física.',
            checklist: ['Sessões curtas: 5-10 min, 2-3x/dia (atenção de cão se esgota)', 'Petisco de alto valor: frango, fígado — só no treinamento', 'Marcar o comportamento EXATO no momento (clicker ou "bom!")', 'Nunca repetir comando: diga uma vez; se não fizer, guie', 'Toda família usa as MESMAS palavras de comando', 'Treino sempre antes das refeições (mais motivado)'] },
          { title: 'Sentar, Ficar, Vir', icon: '📚', duration: 'Semanas',
            description: 'Sequência lógica: sentar → ficar → vir.',
            checklist: ['SENTAR: petisco sobre o nariz → movimento para trás → cão senta → "bom!" + petisco', 'FICAR: sentar → "fica" com palma aberta → recua 1 passo → retorna e recompensa', 'VIR: nome + "vem" em voz alegre → correr para longe convida a perseguir', 'NÃO PULAR: girar costas quando pula → só cumprimentar com 4 patas no chão', 'DEIXA: petisco na mão fechada → quando parar de tentar → abrir mão e recompensar'] },
        ],
        checklists: [{ label: 'Sessão Diária de Treino', freq: 'daily', items: ['Sessão de 5-10 min feita?', 'Petisco de alto valor usado?', 'Toda a família usou o mesmo comando?', 'Cão acabou a sessão querendo mais?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — SENTAR', tasks: ['Treinar apenas "sentar" hoje', 'Petisco na altura do nariz, mover para trás', '10 repetições por sessão, 2-3 sessões', 'Recompensar TODA vez que sentar'], note: 'Não passe para o próximo comando antes de dominar este' },
          { day: 2, label: 'Dia 2 — SENTAR (reforço)', tasks: ['Sentar em ambientes diferentes (sala, queda)', 'Com distração leve', 'Reduzir frequência do petisco (50% das vezes)'], note: 'Variabilidade da recompensa aumenta a persistência' },
          { day: 3, label: 'Dia 3 — FICAR (base)', tasks: ['Sentar → "fica" → 2 segundos → recompensar', 'Aumentar para 5 segundos', 'Ainda SEM se afastar'], note: 'Duração antes de distância' },
          { day: 4, label: 'Dia 4 — FICAR (distância)', tasks: ['Sentar → "fica" → recuar 1 passo → retornar', 'Se levanta: voltar à etapa anterior', 'Nunca repetir "fica" se levantou'], note: '"Fica" significa: fique até eu voltar ou liberar' },
          { day: 5, label: 'Dia 5 — VIR', tasks: ['Dizer nome + "vem" animado', 'Agachar e abrir os braços (convida)', 'NUNCA chamar para punir — destruiria o comando'], note: '"Vem" é o comando mais importante para segurança' },
          { day: 6, label: 'Dia 6 — NÃO PULAR', tasks: ['Virar costas quando pular', 'Só cumprimentar com 4 patas no chão', 'Toda família deve fazer o mesmo'], note: 'Inconsistência da família arruína este treino' },
          { day: 7, label: 'Dia 7 — Consolidação', tasks: ['Encadeamento: sentar → ficar → vir', 'Com distração moderada', 'Quanto recompensou hoje?'] },
        ],
        vetAlert: ['Cão que agride durante o treino (avaliação comportamental)', 'Cão que para de comer petisco (dor, doença ou estresse alto)'],
        prevention: ['Começar o treino no primeiro dia em casa', 'Reforço positivo desde filhote', 'Nunca punição física — cria medo e agressividade'],
        myths: [{ myth: 'Cão precisa de dominância — o dono tem que ser "alfa"', truth: 'A teoria da dominância em cães foi refutada pela ciência animal moderna. Cães não vivem em hierarquias de manada com humanos. Treinamento baseado em parceria e reforço positivo é mais eficaz e humano.' }],
        faq: [
          { q: 'Com que idade começar a treinar?', a: 'Quanto antes melhor — filhote de 8 semanas já aprende "sentar". Quanto mais jovem, mais fácil é a aprendizagem. Cão adulto também aprende, mas com mais paciência.' },
          { q: 'Por que meu cão obedece em casa mas não na rua?', a: 'Generalization: o cão aprendeu o comando só no contexto da sala. É preciso treinar em múltiplos ambientes progressivamente: quintal → rua calma → parque. Cada novo local é como aprender do zero.' },
          { q: 'Clicker é necessário?', a: 'Não é obrigatório, mas o clicker marca o comportamento certo com precisão de milissegundos, acelerando o aprendizado. A palavra "bom!" funciona igualmente se sempre seguida de recompensa.' },
        ],
      }],
    },
    {
      id: 'puxar-guia', name: 'Puxar a Guia', emoji: '🦮', gradient: 'g-red',
      description: 'Cão que puxa no passeio — uma das queixas mais comuns dos tutores',
      prevalence: 'Mais de 70% dos tutores relatam que o cão puxa a guia; principal causa de desistência de passeios',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Puxão', subtitle: 'Técnica de parar e retomar, cambão frontal e premiação',
        stages: [
          { id: 's1', label: 'Puxão Moderado', urgency: 'low', description: 'Guia sempre tensa mas passeio ainda possível.', signs: ['Guia sempre esticada', 'Cão à frente o tempo todo', 'Passeio cansativo para o tutor', 'Cão ofega mas continua andando'] },
          { id: 's2', label: 'Puxão Forte', urgency: 'moderate', description: 'Tutor não consegue controlar — risco de queda.', signs: ['Cão arrasta o tutor', 'Tutor com dores no ombro/pulso', 'Cão reativo a outros cães adiciona risco', 'Passeio abandonado por incapacidade de controlar'] },
        ],
        triggers: ['Excitação excessiva no início do passeio', 'Cão nunca foi ensinado a andar junto', 'Reforço involuntário: o tutor continua andando quando o cão puxa'],
        steps: [
          { title: 'Técnica parar-retomar', icon: '⛔', duration: 'Semanas de prática',
            description: 'Cão aprende que puxar NÃO faz avançar — guia frouxa sim.',
            checklist: ['Quando guia tensionar: PARAR completamente', 'Aguardar cão voltar e olhar para você', 'Retomar o andamento ao primeiro sinal de guia frouxa', 'Recompensar verbalmente a cada 3-5 passos com guia frouxa', 'Peitoral de cambão frontal: redireciona, não sufoca', 'Sessões curtas de 10 min para não frustrar'] },
        ],
        checklists: [{ label: 'Passeio Diário', freq: 'daily', items: ['Começou o passeio calmo (não na empolgação)?', 'Parou quando puxou?', 'Recompensou guia frouxa?', 'Duração adequada para praticar (15-20 min)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Começar em Casa', tasks: ['Praticar andar junto no quintal primeiro', '10 passos com guia frouxa → petisco', 'Sem distrações externas ainda'] },
          { day: 2, label: 'Dia 2 — Entrada do Prédio', tasks: ['Área com poucas distrações', 'Parar TODA vez que tensionar a guia', 'Ser consistente sem exceções'] },
          { day: 3, label: 'Dia 3 — Rua Calma', tasks: ['Passeio em rua sem muito movimento', 'Parar → esperar → retomar', 'Recompensar guia frouxa verbalmente'] },
          { day: 4, label: 'Dia 4 — Aumentar Distância', tasks: ['Passeio um pouco mais longo', 'Mais oportunidades de praticar', 'Consistência é a chave'] },
          { day: 5, label: 'Dia 5 — Distrações', tasks: ['Parque ou rua mais movimentada', 'Antecipar: recompensar ANTES de puxar ao ver distração', 'Mudar direção inesperadamente (cão precisa te observar)'] },
          { day: 6, label: 'Dia 6 — Consolidação', tasks: ['Passeio longo com técnica consistente', 'Guia frouxa por > 50% do tempo?', 'Cão olha para você durante o passeio?'] },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Puxão diminuiu vs semana passada?', 'Cão mais atento a você?', 'Passeio mais prazeroso para ambos?'] },
        ],
        vetAlert: ['Cão reativo que pula em outros cães ou pessoas — risco de mordida'],
        prevention: ['Ensinar a andar junto desde filhote', 'Nunca avançar quando o cão puxa (mesmo uma vez é reforço)'],
        myths: [{ myth: 'Coleira de estrangulamento ensina a não puxar', truth: 'Coleiras punitivas (de estrangulamento, de metal) causam lesões na traqueia, pescoço e psicológicas. Peitoral de cambão frontal é mais seguro e eficaz.' }],
        faq: [
          { q: 'Flexi-lead (guia retrátil) ajuda a treinar?', a: 'Pelo contrário. A guia retrátil sempre está tensa e ensina o cão que puxar funciona. Use APENAS em áreas abertas para deixar o cão explorar livremente — nunca para treinar o andar junto.' },
          { q: 'Quanto tempo para o cão parar de puxar?', a: 'Com consistência diária: 2-4 semanas para melhora significativa. Sem consistência (às vezes deixa puxar), pode levar meses. A chave é: NUNCA avançar quando a guia está tensa.' },
        ],
      }],
    },
  ],
};
