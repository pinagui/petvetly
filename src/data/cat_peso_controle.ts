import type { Category } from './types';
export const catPesoControle: Category = {
  id: 'peso-controle', name: 'Controle de Peso', emoji: '⚖️', gradient: 'g-amber',
  description: 'Obesidade canina, cálculo de peso ideal, dieta e perda de peso saudável',
  conditions: [
    {
      id: 'obesidade-canina', name: 'Obesidade Canina', emoji: '🍔', gradient: 'g-amber',
      description: 'Obesidade é a doença nutricional mais comum em cães — afeta 50% dos adultos',
      prevalence: '50-60% dos cães em países desenvolvidos têm sobrepeso; principal causa de redução da expectativa de vida',
      protocols: [{
        id: 'p1', title: 'Protocolo Anti-Obesidade', subtitle: 'Diagnóstico de obesidade, meta de peso e plano de perda',
        stages: [
          { id: 's1', label: 'Sobrepeso (BCS 6-7/9)', urgency: 'moderate', description: 'Costelas palpáveis com esforço — 10-20% acima do ideal.', signs: ['Costelas: palpáveis só com pressão firme', 'Cintura não visível de cima', 'Barriga levemente pendente', 'Redução da disposição para exercício'] },
          { id: 's2', label: 'Obesidade (BCS 8-9/9)', urgency: 'high', description: 'Costelas não palpáveis — >20% acima do ideal.', signs: ['Costelas impalpáveis sob gordura', 'Abdômen distendido', 'Deposição de gordura lombar visível', 'Dispneia ao mínimo esforço', 'Incapacidade de se lamber'] },
        ],
        triggers: ['Superalimentação — causa principal', 'Sedentarismo', 'Castração (reduz metabolismo 25%)', 'Hipotireoidismo (investigar)', 'Hiperadrenocorticismo (Cushing)', 'Snacks e petiscos excessivos dos tutores'],
        steps: [
          { title: 'Calcular o déficit calórico correto', icon: '📊', duration: 'Plano',
            description: 'Meta: perda de 1-2% do peso por semana. Mais rápido causa perda muscular.',
            checklist: ['Pesar o cão com balança de veterinário ou balança humana (tutor + cão - tutor)', 'BCS (Body Condition Score): palpe as costelas', 'Meta de peso: 80% do peso atual se obeso', 'Reduzir 20-25% das calorias', 'Ração light ou portion control', 'Retirar todos os petiscos calóricos durante a dieta'] },
          { title: 'Exercício progressivo', icon: '🏃', duration: 'Diário',
            description: 'Aumento gradual de exercício em paralelo com restrição calórica.',
            checklist: ['Início: 2 caminhadas de 15 min/dia', 'Aumento de 5 min a cada semana', 'Natação: excelente para obesos com dificuldade de andar', 'Sem exercício de impacto até perder peso suficiente', 'Pesagem semanal para acompanhar progresso'] },
        ],
        checklists: [{ label: 'Controle Diário de Dieta', freq: 'daily', items: ['Quantidade de ração medida (copo medidor, não olhômetro)?', 'Nenhum petisco calórico hoje?', 'Caminhada realizada?', 'Água disponível sempre?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico e Metas', tasks: ['Pesar o cão', 'Palpar costelas (BCS)', 'Definir meta de peso com veterinário', 'Calcular quantidade de ração correta'], note: 'Sem meta definida, não há progresso' },
          { day: 2, label: 'Dia 2 — Nova Rotina Alimentar', tasks: ['Ração medida com copo medidor', 'Refeições 2x/dia (não ad libitum)', 'Retirar todos os petiscos calóricos', 'Família inteira informada: sem "só um pedacinho"'], note: 'Um biscoito de 50g = 200 kcal para cão pequeno = uma refeição inteira' },
          { day: 3, label: 'Dia 3 — Exercício Inicial', tasks: ['Caminhada 15 min manhã', 'Caminhada 15 min tarde', 'Ritmo tranquilo (cão obeso se cansa rápido)', 'Observar dificuldade respiratória'], note: 'Parar se ofega excessivamente' },
          { day: 4, label: 'Dia 4 — Alternativas Saudáveis', tasks: ['Cenoura crua como petisco (baixa caloria)', 'Brócolis cozido', 'Pedaços de maçã sem sementes', 'Gelo para lambedura em dias quentes'] },
          { day: 5, label: 'Dia 5 — Avaliação da Semana', tasks: ['Cão tolerou a redução?', 'Pede mais comida?', 'Exercício tolerado bem?', 'Peso estável (não pesar todo dia)'] },
          { day: 6, label: 'Dia 6 — Enriquecimento Alimentar', tasks: ['Kong com ração: comer devagar', 'Dispenser de ração (puzzles)', 'Esconder ração na casa para farejar'], note: 'Come menos e gasta energia mental' },
          { day: 7, label: 'Dia 7 — Pesagem Semanal', tasks: ['Pesar o cão (mesma balança, mesmo horário)', 'Perdeu 1-2% do peso?', 'Ajustar ração se necessário'], note: 'Meta: 1-2% do peso por semana = saudável e sustentável' },
        ],
        vetAlert: ['Perda de peso sem redução calórica (suspeitar de doença)', 'Cão nega comida mesmo com fome (doença subjacente)', 'Dispneia em repouso (obesidade grave)'],
        prevention: ['Medir ração desde filhote — nunca ao olhômetro', 'Pesar cão a cada 3 meses', 'Reduzir 20-25% das calorias após castração', 'Petiscos = máximo 10% das calorias diárias'],
        myths: [{ myth: 'Cão gordo é cão feliz e bem cuidado', truth: 'Obesidade reduz 2,5 anos da expectativa de vida do cão, causa artrite, diabetes, problemas cardíacos e respiratórios. Amor se mostra com saúde, não com comida.' }],
        faq: [
          { q: 'Quanto tempo para o cão obeso perder peso?', a: 'Com 20-25% de restrição calórica e exercício regular, a perda saudável é de 1-2% do peso por semana. Um Labrador de 40kg chegando a 32kg leva cerca de 4-5 meses. Pressa causa perda muscular.' },
          { q: 'Qual a melhor ração para cão obeso?', a: 'Rações "light" têm menos calorias mas o cão pode compensar pedindo mais. O mais efetivo é portion control com ração premium normal, medida com precisão. Alternativamente, dieta úmida (mais água = mais saciedade).' },
          { q: 'Meu cão está sempre com fome na dieta — o que fazer?', a: 'Dividir a mesma quantidade em 3-4 refeições menores. Usar lick mat ou Kong: o cão demora mais e fica mais satisfeito. Adicionar legumes de baixa caloria (cenoura, abobrinha) para volume.' },
        ],
      }],
    },
    {
      id: 'caquexia', name: 'Magreza e Caquexia', emoji: '🦴', gradient: 'g-red',
      description: 'Cão abaixo do peso — pode ser simples subnutrição ou sinal de doença grave',
      prevalence: 'Causa mais comum em resgate: subnutrição. Em cão doméstico: sempre investigar doença',
      protocols: [{
        id: 'p1', title: 'Protocolo para Cão Abaixo do Peso', subtitle: 'Investigação da causa e reabilitação nutricional gradual',
        stages: [
          { id: 's1', label: 'Magro (BCS 2-3/9)', urgency: 'moderate', description: 'Costelas e coluna visíveis — subnutrição moderada.', signs: ['Costelas, coluna e pelve visíveis', 'Pouca massa muscular', 'Pelo sem brilho', 'Letargia'] },
          { id: 's2', label: 'Caquexia (BCS 1/9)', urgency: 'high', description: 'Perda extrema de massa muscular e gordura.', signs: ['Ossos proeminentes com pele sobre eles', 'Atrofia muscular severa', 'Fraqueza extrema', 'Pode ter doenças graves subjacentes (tumor, IBD, renal)'] },
        ],
        triggers: ['Subnutrição — quantidade inadequada de ração', 'Parasitas em carga alta', 'Doença intestinal (má absorção)', 'Doença renal, hepática ou tumoral', 'Diabetes', 'Treinamento excessivo sem calorias adequadas'],
        steps: [
          { title: 'Investigação e reabilitação', icon: '🔬', duration: 'Diagnóstico + semanas',
            description: 'Sempre investigar a causa antes de apenas aumentar a comida.',
            checklist: ['Hemograma e bioquímica completa', 'Coproparasitológico (parasitas são causa comum)', 'Ultrassom abdominal se suspeita de doença', 'Alimentação de recuperação: aumento GRADUAL de 25% a cada 3-4 dias', 'Ração de alta densidade calórica (premium ou reabilitação)', 'Nunca oferecer grandes quantidades de repente: síndrome de realimentação'] },
        ],
        checklists: [{ label: 'Monitoramento Diário', freq: 'daily', items: ['Peso medido?', 'Quantidade de alimento consumida?', 'Fezes: consistência normal?', 'Cão mais ativo?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação Urgente', tasks: ['Pesagem imediata', 'Exames laboratoriais urgentes', 'Veterinário para avaliação clínica completa'], note: 'Caquexia = doença grave até prova em contrário' },
          { day: 2, label: 'Dia 2 — Alimentação Inicial', tasks: ['Quantidade calculada para ganho gradual', 'Ração altamente digestível', 'Refeições pequenas e frequentes (3-4x/dia)'], note: 'Síndrome de realimentação: nunca oferecer tudo de uma vez' },
          { day: 3, label: 'Dia 3 — Vermifugação', tasks: ['Vermífugo de amplo espectro', 'Parasitas eliminados?', 'Fezes melhorando?'] },
          { day: 4, label: 'Dia 4 — Suplementação', tasks: ['Vitaminas B complexo', 'Probiótico para microbiota', 'Omega-3 para pelo e recuperação'] },
          { day: 5, label: 'Dia 5 — Pesagem', tasks: ['Ganhou peso?', 'Meta: 1-2% do peso por semana (inverso da dieta)', 'Exames de retorno se necessário'] },
          { day: 6, label: 'Dia 6 — Enriquecimento', tasks: ['Cão come com apetite?', 'Preferências alimentares respeitadas', 'Alimentação em ambiente tranquilo?'], note: 'Competição com outros cães = menos comida ingerida' },
          { day: 7, label: 'Dia 7 — Revisão Médica', tasks: ['Resultado dos exames?', 'Doença identificada e tratada?', 'Plano nutricional de longo prazo'], note: 'Sem tratar a causa, o cão volta a perder peso' },
        ],
        vetAlert: ['Caquexia extrema com fraqueza', 'Edema (barriga inchada com magreza = hipoalbuminemia)', 'Perda de peso apesar de comer bem'],
        prevention: ['Pesagem mensal', 'Ração de qualidade adequada ao porte e fase', 'Vermifugação regular', 'Checkup anual detecta doenças que causam perda de peso'],
        myths: [{ myth: 'Cão que come muito e não engorda tem "metabolismo rápido"', truth: 'Cão que come bem e não ganha peso tem doença subjacente até prova em contrário — parasitas, má absorção intestinal, diabetes ou tumor. Investigação veterinária é obrigatória.' }],
        faq: [
          { q: 'Posso dar ração úmida para cão de resgate magrinho?', a: 'Sim, ração úmida é excelente para reabilitação — mais palatável e digestível. Misture com ração seca de alta qualidade. A transição deve ser gradual para evitar diarreia e síndrome de realimentação.' },
          { q: 'Quanto tempo para cão de resgate recuperar o peso?', a: 'Com alimentação adequada: 1-2% de ganho de peso por semana. Um cão de 10kg que deve pesar 15kg levará cerca de 5-6 meses para recuperar com segurança.' },
        ],
      }],
    },
  ],
};
