import type { Category } from './types';

export const catCastracao: Category = {
  id: 'castracao', name: 'Castração e Saúde Reprodutiva', emoji: '✂️', gradient: 'g-teal',
  description: 'Castração feminina e masculina, benefícios, cuidados e mitos',
  conditions: [
    {
      id: 'castracao-femea', name: 'Castração Feminina (OSH)', emoji: '♀️', gradient: 'g-pink',
      description: 'Ovariohisterectomia — cirurgia mais realizada na medicina veterinária e principal prevenção de doenças reprodutivas',
      prevalence: 'Universal — recomendada para todas as cadelas sem intenção reprodutiva',
      protocols: [{
        id: 'p1', title: 'Protocolo Castração Feminina', subtitle: 'Preparo, cirurgia e pós-operatório da OSH',
        stages: [
          { id: 's1', label: 'Pré-Operatório', urgency: 'low', description: 'Preparação e exames para cirurgia eletiva.', signs: ['Saúde geral normal', 'Jejum de 8-12h (sólido) e 4h (líquido)', 'Exame pré-anestésico normal', 'Vacinação em dia'] },
          { id: 's2', label: 'Pós-Operatório', urgency: 'low', description: 'Recuperação normal após OSH.', signs: ['Sedação residual nas primeiras horas', 'Anorexia no 1º dia (normal)', 'Incisão abdominal limpa', 'Dor moderada controlável com NSAID'] },
        ],
        triggers: ['Prevenção de piometra (risco de 25% em cadelas inteiras aos 10 anos)', 'Prevenção de tumor de mama (efetiva se antes do 1º cio)', 'Controle reprodutivo', 'Pseudociese recorrente', 'Sangramento uterino ou vaginal anormal'],
        steps: [
          { title: 'Preparo pré-operatório', icon: '📋', duration: '7 dias antes',
            description: 'Exames, banho e jejum garantem segurança anestésica.',
            checklist: ['Hemograma e bioquímica pré-anestésica', 'Banho na véspera (mas não no dia)', 'Jejum sólido 8-12h, líquido 4h', 'Retirar coleira — usar apenas para identificação', 'Levar coberta favorita do cão para conforto', 'Vacinação em dia confirmada'] },
          { title: 'Pós-operatório em casa', icon: '🏠', duration: '7-10 dias',
            description: 'Repouso, colar elizabetano e monitoramento da incisão são fundamentais.',
            checklist: ['Colar elizabetano OBRIGATÓRIO — 24h por dia por 10 dias', 'Repouso: sem correr, pular ou subir por 10 dias', 'Anti-inflamatório: meloxicam conforme prescrição (3-5 dias)', 'Verificar incisão 2x/dia: sem vermelhidão, secreção ou abertura', 'Oferecer água e comida leve no 1º dia', 'Passeios somente para fazer necessidades — curtos e com guia'] },
        ],
        checklists: [
          { label: 'Pós-Operatório Diário', freq: 'daily', items: ['Colar elizabetano NO cão?', 'Incisão sem vermelhidão ou secreção?', 'Anti-inflamatório dado?', 'Repouso respeitado?', 'Cão come e bebe?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Dia da Cirurgia', tasks: ['Jejum respeitado?', 'Cão entregue na clínica no horário?', 'Colar elizabetano colocado antes de sair?', 'Antiemético para viagem?'], note: 'A sedação residual dura 12-24h — normal cão atordoado' },
          { day: 2, label: 'Dia 2 — 1ª Noite em Casa', tasks: ['Incisão verificada: limpa, sem secreção?', 'Cão comeu alguma coisa?', 'Bebeu água?', 'Eliminações normais?'] },
          { day: 3, label: 'Dia 3 — Avaliação de Dor', tasks: ['Cão está descansando confortavelmente?', 'Latejamento ou lambe a incisão (colar efetivo)?', 'Anti-inflamatório dado no horário?'] },
          { day: 4, label: 'Dia 4 — Normalização', tasks: ['Apetite voltando?', 'Incisão seca e com crostinhas (cicatrização normal)?', 'Cão quer se movimentar mais — restrinja ainda'], note: 'Energia antes do fim do 10º dia = risco de abertura' },
          { day: 5, label: 'Dia 5 — Monitoramento', tasks: ['Incisão sem sinais infecciosos?', 'Colar elizabetano intacto?', 'Anti-inflamatório terminou?'] },
          { day: 6, label: 'Dia 6 — Cicatrização', tasks: ['Crostas secas na incisão?', 'Edema residual (normal, diminui gradualmente)?', 'Cão confortável?'] },
          { day: 7, label: 'Dia 7 — Quase Pronto', tasks: ['Retorno clínico marcado para D10?', 'Pontos a retirar (se não absorvível)?', 'Planejar gradual retorno à atividade após D10'], note: 'Atividade normal retorna após D10 com incisão cicatrizada' },
        ],
        vetAlert: ['Incisão vermelha, inchada ou com secreção purulenta', 'Vômitos por > 24h após cirurgia', 'Cão prostrado ou sem comer por > 48h'],
        prevention: ['Idealmente castrar antes do 1º cio: reduz risco de tumor de mama para < 1%', '1 cio: reduz risco para ~7%; 2 cios: reduz para ~25%; sem castração: risco de 25% de piometra'],
        myths: [
          { myth: 'Cadela deve ter um cio ou uma ninhada antes de castrar', truth: 'Mito sem base científica. A castração antes do 1º cio oferece a MÁXIMA proteção contra tumor de mama e piometra. Cada cio adicional aumenta o risco de tumor mamário.' },
        ],
        faq: [
          { q: 'Cadela castrada engorda necessariamente?', a: 'A castração reduz o metabolismo em ~25%. Com a mesma quantidade de comida de antes da cirurgia, sim, engordará. A solução é simples: reduzir 20-25% da ração após a castração e manter exercício regular.' },
        ],
      }],
    },
    {
      id: 'castracao-macho', name: 'Castração Masculina (Orquiectomia)', emoji: '♂️', gradient: 'g-blue',
      description: 'Orquiectomia — prevenção de tumor testicular, hiperplasia prostática e controle comportamental',
      prevalence: 'Recomendada para machos sem intenção reprodutiva; protege contra doenças prostáticas',
      protocols: [{
        id: 'p1', title: 'Protocolo Castração Masculina', subtitle: 'Cirurgia, pós-operatório e benefícios a longo prazo',
        stages: [
          { id: 's1', label: 'Eletivo', urgency: 'low', description: 'Castração em macho saudável como procedimento eletivo.', signs: ['Pré-operatório: cão saudável', 'Jejum de 8-12h', 'Testículos tópicos (2 testículos na bolsa escrotal)', 'Vacinação e antiparasitário em dia'] },
          { id: 's2', label: 'Criptorquidismo', urgency: 'high', description: 'Testículo retido no abdômen — risco 13x maior de tumor.', signs: ['Apenas 1 testículo palpável na bolsa', 'Testículo retido não palpável', 'Risco aumentado de torção e tumor', 'Cirurgia de laparotomia necessária'] },
        ],
        triggers: ['Prevenção de tumor testicular (seminoma, células de Leydig)', 'Prevenção de hiperplasia prostática benigna', 'Redução de comportamentos sexuais (marcação urinária, escapismo)', 'Criptorquidismo — castração obrigatória pelo risco de tumor'],
        steps: [
          { title: 'Preparo e cirurgia', icon: '🔪', duration: 'Ambulatorial',
            description: 'Orquiectomia é mais simples que OSH em fêmeas — geralmente ambulatorial.',
            checklist: ['Jejum 8-12h sólido, 4h líquido', 'Hemograma pré-anestésico em idosos > 7 anos', 'Cirurgia: ~30-40 min, anestesia geral', 'Colar elizabetano ao acordar', 'Anti-inflamatório e antibiótico pós-operatório'] },
          { title: 'Pós-operatório', icon: '🏠', duration: '5-7 dias',
            description: 'Recuperação mais rápida que fêmeas. Incisão escrotal ou pré-escrotal.',
            checklist: ['Colar elizabetano 7-10 dias', 'Sem banho por 7 dias', 'Verificar incisão 2x/dia', 'Evitar lambedura — causa infecção', 'Repouso por 5-7 dias', 'Anti-inflamatório conforme prescrição'] },
        ],
        checklists: [
          { label: 'Pós-Cirúrgico Diário', freq: 'daily', items: ['Colar elizabetano no cão?', 'Incisão sem vermelhidão ou secreção?', 'Anti-inflamatório dado?', 'Cão come e bebe?', 'Escroto seco (sem lambedura)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Cirurgia', tasks: ['Jejum respeitado?', 'Colar colocado antes de sair?', 'Cão sedado — não perturbar nas primeiras horas'] },
          { day: 2, label: 'Dia 2 — Pós-Operatório', tasks: ['Incisão sem sangramento?', 'Edema escrotal (normal, diminui em 3-5 dias)?', 'Cão come alguma coisa?'] },
          { day: 3, label: 'Dia 3 — Normalização', tasks: ['Cão mais ativo?', 'Incisão seca?', 'Anti-inflamatório dado?'] },
          { day: 4, label: 'Dia 4 — Avaliação', tasks: ['Edema escrotal diminuindo?', 'Nenhuma secreção?', 'Colar intacto?'] },
          { day: 5, label: 'Dia 5 — Quase Normal', tasks: ['Cão quer brincar e correr — restrinja ainda 2-3 dias', 'Incisão cicatrizando bem?'] },
          { day: 6, label: 'Dia 6 — Pré-Alta', tasks: ['Incisão quase cicatrizada?', 'Retorno para retirada de pontos agendado?'] },
          { day: 7, label: 'Dia 7 — Alta Gradual', tasks: ['Retirada de pontos no retorno', 'Atividade gradual retorna', 'Comportamento de marcação pode diminuir em 4-6 semanas'], note: 'Comportamentos aprendidos podem persistir mesmo após castração' },
        ],
        vetAlert: ['Incisão com secreção purulenta', 'Escroto muito inchado e doloroso após 5 dias', 'Cão prostrado sem comer'],
        prevention: ['Criptorquidismo: nunca usar para reprodução — condição hereditária', 'Castrar criptorquídeos o mais cedo possível — risco de tumor 13x maior'],
        myths: [
          { myth: 'Macho castrado perde a personalidade ou fica deprimido', truth: 'Castração remove testosterona mas não afeta personalidade, afeto ou inteligência. Comportamentos ligados à testosterona (marcação, escapismo, agressão intramachil) diminuem em 60-70% dos casos.' },
        ],
        faq: [
          { q: 'Quando é o melhor momento para castrar um macho?', a: 'Para raças pequenas: a partir de 6 meses. Raças grandes e gigantes se beneficiam esperando a maturidade esquelética (12-18 meses) por estudos que relacionam castração precoce a displasias articulares em certas raças.' },
        ],
      }],
    },
    {
      id: 'beneficios-castracao', name: 'Guia Completo: Benefícios da Castração', emoji: '📋', gradient: 'g-emerald',
      description: 'Perguntas frequentes sobre castração — benefícios, mitos e o momento certo',
      prevalence: 'Consulta educacional — aplicável a todos os tutores',
      protocols: [{
        id: 'p1', title: 'Benefícios e Indicações da Castração', subtitle: 'Evidências científicas dos benefícios da castração em machos e fêmeas',
        stages: [
          { id: 's1', label: 'Fêmeas', urgency: 'low', description: 'Benefícios da OSH preventiva.', signs: ['Elimina risco de piometra (25% das inteiras chegam aos 10 anos com piometra)', 'Reduz risco de tumor de mama (se antes do 1º cio: 99,5% de redução)', 'Elimina pseudociese', 'Sem mais cios (comportamento de cio e manchas)'] },
          { id: 's2', label: 'Machos', urgency: 'low', description: 'Benefícios da orquiectomia.', signs: ['Elimina tumor testicular', 'Previne hiperplasia prostática benigna', 'Reduz comportamentos indesejados', 'Elimina criptorquidismo como risco oncológico'] },
        ],
        triggers: ['Prevenção de neoplasias reprodutivas', 'Controle de superpopulação', 'Qualidade de vida do animal', 'Prevenção de doenças hormônio-dependentes'],
        steps: [
          { title: 'Educação do Tutor', icon: '📚', duration: 'Consulta',
            description: 'Evidências científicas sobre castração — para uma decisão informada.',
            checklist: ['Tumor de mama: 50% são malignos em cadelas; castração pré-1º cio = proteção quase total', 'Piometra: 1 em 4 cadelas inteiras desenvolve até os 10 anos', 'Pseudociese recorrente: castração durante lactação falsa resolve definitivamente', 'Hiperplasia prostática benigna: 95% dos machos inteiros têm aos 9 anos — castração previne', 'Comportamento: marcação urinária reduz em 50-80% após castração de machos adultos'] },
        ],
        checklists: [
          { label: 'Checklist para Decisão de Castração', freq: 'daily', items: ['Cadela: planeja ter filhotes?', 'Macho: criptorquidismo presente?', 'Macho: marca território excessivamente?', 'Cadela: tem ciclos de cio frequentes e intensos?', 'Veterinário consultado sobre momento ideal?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Consulta', tasks: ['Agendar consulta pré-cirúrgica', 'Exames pré-anestésicos', 'Discutir momento ideal da castração'] },
          { day: 2, label: 'Dia 2 — Planejamento', tasks: ['Confirmar data da cirurgia', 'Comprar colar elizabetano antes', 'Comprar ração pós-castração (menor caloria)?'] },
          { day: 3, label: 'Dia 3 — Nutrição Pós-Castração', tasks: ['Ração para cão castrado (menos calórica)?', 'Reduzir 20-25% da quantidade habitual', 'Manter exercício regular'], note: 'Obesidade pós-castração é 100% prevenível' },
          { day: 4, label: 'Dia 4 — Pré-Cirúrgico', tasks: ['Banho 1 dia antes (não no dia)', 'Jejum de 12h', 'Preparar canil tranquilo para recuperação'] },
          { day: 5, label: 'Dia 5 — Dia da Cirurgia', tasks: ['Jejum respeitado', 'Cão tranquilo?', 'Colar elizabetano disponível', 'Contato do veterinário salvo'] },
          { day: 6, label: 'Dia 6 — Pós-Operatório', tasks: ['Seguir protocolo pós-op do veterinário', 'Repouso respeitado', 'Incisão verificada 2x/dia'] },
          { day: 7, label: 'Dia 7 — Adaptação', tasks: ['Cão se adapta gradualmente', 'Reduzir ração conforme orientação', 'Próximo retorno agendado?'] },
        ],
        vetAlert: ['Pseudociese com automutilação ou anorexia grave', 'Piometra (descarga vaginal + febre + letargia)', 'Criptorquidismo sem castração em adulto'],
        prevention: ['Castração é em si medida preventiva', 'Discutir com veterinário o momento ideal para cada raça e sexo'],
        myths: [
          { myth: 'Cadela precisa de uma ninhada para ser saudável', truth: 'Mito cultural sem base científica. A gravidez não tem benefícios à saúde da cadela. Pelo contrário, aumenta o risco de tumor mamário, mastite e complicações obstétricas.' },
          { myth: 'Castração causa câncer ou doenças', truth: 'Alguns estudos em raças específicas (Golden, Labrador, Rottweiler) associam castração precoce a maior incidência de osteossarcoma e linfoma. A decisão deve ser individualizada com o veterinário, considerando raça, porte e plano reprodutivo.' },
        ],
        faq: [
          { q: 'Quanto tempo dura a cirurgia de castração?', a: 'OSH em fêmeas: 30-60 min. Orquiectomia em machos: 20-30 min. Ambas são realizadas sob anestesia geral. A recuperação domiciliar leva 7-10 dias.' },
          { q: 'Existe castração química (sem cirurgia)?', a: 'Implantes de deslorelina (Suprelorin) funcionam como castração química temporária em machos, com duração de 6 ou 12 meses. São uma alternativa para machos que não podem ser anestesiados. Para fêmeas, a opção cirúrgica é mais segura e permanente.' },
        ],
      }],
    },
  ],
};
