export interface Stage {
  id: string;
  label: string;
  description: string;
  color: string;
  urgency: 'low' | 'moderate' | 'high' | 'emergency';
}

export interface Step {
  title: string;
  description: string;
  duration?: string;
  icon?: string;
}

export interface Protocol {
  id: string;
  title: string;
  subtitle: string;
  stages: Stage[];
  triggers: string[];
  homeSteps: Step[];
  vetAlert: string[];
  prevention: string[];
  myths: { myth: string; truth: string }[];
  faq: { q: string; a: string }[];
}

export interface Condition {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  description: string;
  prevalence: string;
  protocols: Protocol[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  description: string;
  conditions: Condition[];
}

export const categories: Category[] = [
  // ─── PATAS E LAMBEDURA ─────────────────────────────────────────────────────
  {
    id: 'patas',
    name: 'Patas & Lambedura',
    emoji: '🐾',
    gradient: 'grad-teal',
    description: 'Lambedura, coceira, lesões e problemas nas patas',
    conditions: [
      {
        id: 'lambedura-patas',
        name: 'Lambedura de Patas',
        emoji: '🐾',
        gradient: 'grad-teal',
        description: 'O comportamento mais comum e frequentemente mal interpretado',
        prevalence: '68% dos cães apresentam em algum grau',
        protocols: [
          {
            id: 'lambedura-protocolo',
            title: 'Protocolo Patas Saudáveis',
            subtitle: 'Identificação e resolução completa da lambedura',
            stages: [
              { id: 's0', label: 'Estágio 0', description: 'Lambedura ocasional, pata com aparência normal. Pode ser higiene natural.', color: '#10b981', urgency: 'low' },
              { id: 's1', label: 'Estágio 1', description: 'Lambedura diária por períodos curtos. Pelo levemente escurecido (tom ferrugem).', color: '#f59e0b', urgency: 'low' },
              { id: 's2', label: 'Estágio 2', description: 'Lambedura frequente e intensa. Pelo marrom-escuro. Possível vermelhidão.', color: '#f97316', urgency: 'moderate' },
              { id: 's3', label: 'Estágio 3', description: 'Lambedura compulsiva. Pata vermelha, úmida, possível odor. Morde junto.', color: '#ef4444', urgency: 'high' },
              { id: 's4', label: 'Estágio 4', description: 'Ferida aberta, crosta, ou infecção secundária. Sangramento possível.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Alergia ambiental (pólen, ácaros, mofo)',
              'Alergia alimentar (proteína específica)',
              'Contato com produtos de limpeza no piso',
              'Umidade excessiva entre os dedos (fungo)',
              'Ansiedade de separação',
              'Tédio / falta de estímulo mental',
              'Dor articular (artrite inicial)',
              'Trauma ou corpo estranho entre os dedos',
              'Hipotireoidismo (causa hormonal)',
              'Dermatite atópica genética',
            ],
            homeSteps: [
              { title: 'Mapeie o padrão', description: 'Por 3 dias, anote: horário, duração, pata afetada e o que aconteceu antes. Esse mapa revela se é comportamental (após saída de casa) ou físico (após passeio/alimentação).', duration: '3 dias', icon: '📋' },
              { title: 'Inspecione os dedos', description: 'Com boa luz, separe os dedos suavemente. Procure: vermelhidão entre os dedos, cheiro de milho (sinal de levedura), espinho, grama farpada ou inchação localizada.', duration: '5 min diários', icon: '🔍' },
              { title: 'Limpeza pós-passeio', description: 'Bacia com água morna + 1 colher de sopa de vinagre de maçã. Mergulhe a pata por 2 minutos, seque completamente (especialmente entre os dedos). Levedura cresce em umidade.', duration: 'A cada passeio', icon: '🚿' },
              { title: 'Teste de eliminação alimentar', description: 'Troque para ração com proteína nova (peixe ou cordeiro) por 8 semanas sem nenhum outro alimento. Se melhorar, você encontrou o gatilho alimentar.', duration: '8 semanas', icon: '🍖' },
              { title: 'Avalie o ambiente', description: 'Troque produto de limpeza do piso por sabão neutro. Lave cama/brinquedos com sabão neutro. Verifique se tem tapete novo ou material sintético onde ele deita.', duration: 'Semana 1', icon: '🏠' },
              { title: 'Enriquecimento ambiental', description: 'Se o padrão for após saída de casa: Kong com pasta de amendoim, 3 caminhadas por dia, treino de obediência 10 min/dia. Mente ocupada = menos lambedura compulsiva.', duration: 'Diário', icon: '🧠' },
              { title: 'Barreira física', description: 'Se a pata já está vermelha: meias de algodão nas patas traseiras à noite, colar elizabetano durante picos de lambedura. Isso quebra o ciclo de auto-traumatização.', duration: 'Até cicatrizar', icon: '🧦' },
            ],
            vetAlert: [
              'Ferida aberta ou crosta que não cicatriza em 5 dias',
              'Pata muito inchada ou quente ao toque',
              'Cão acordando de madrugada para lamber',
              'Lambedura em mais de 2 patas simultaneamente',
              'Lambedura que não melhora nada em 3 semanas de protocolo',
              'Perda de pelo na área',
            ],
            prevention: [
              'Lavar patas após passeios (30 seg com água)',
              'Manter unhas aparadas (unhas longas alteram postura)',
              'Checar entre os dedos semanalmente',
              'Usar apenas produtos de limpeza neutros no piso',
              'Manter rotina estável (horários de passeio e alimentação)',
              'Escovação semanal + higiene auditiva',
              'Ração premium com ômega-3 para pele saudável',
            ],
            myths: [
              { myth: '"Lambedura é só ansiedade"', truth: 'Apenas 30% dos casos são primariamente comportamentais. Maioria tem gatilho físico (alergia, fungo, dor) que cria o ciclo lambedura → irritação → mais lambedura.' },
              { myth: '"Spray amargo resolve"', truth: 'Spray ataca o sintoma, não o gatilho. Cão simplesmente para naquela hora e volta depois. Às vezes troca de pata ou área.' },
              { myth: '"Pata cor de ferrugem é sujeira"', truth: 'A coloração é causada pela porfirina — substância na saliva que oxida e escurece o pelo. É indicador confiável de lambedura crônica.' },
              { myth: '"Se não está com ferida, não é grave"', truth: 'Estágio 1 e 2 já indicam processo inflamatório ativo. Ignorar avança para infecção bacteriana/fúngica em semanas.' },
            ],
            faq: [
              { q: 'Por que a pata fica cor de ferrugem?', a: 'A saliva contém porfirina, um pigmento que ao entrar em contato com o pelo claro e oxigenar, vira marrom/ferrugem. Quanto mais escura, mais tempo de lambedura crônica.' },
              { q: 'Posso usar água oxigenada na pata?', a: 'Não. Água oxigenada danifica o tecido de granulação que está cicatrizando. Use apenas solução salina 0,9% ou banho de vinagre diluído.' },
              { q: 'Lambedura à noite é mais grave?', a: 'Sim. Lambedura noturna que acorda o cão é sinal de coceira/dor física intensa, não comportamental. Merece investigação veterinária.' },
              { q: 'Em quanto tempo o protocolo funciona?', a: 'Melhora parcial em 7-14 dias, melhora significativa em 3-4 semanas. Casos com alergia alimentar levam 8 semanas para confirmar o gatilho.' },
              { q: 'Posso usar o cone o tempo todo?', a: 'Não. O cone é paliativo. Use em períodos controlados para quebrar o ciclo. Uso contínuo causa estresse e não resolve o gatilho.' },
            ],
          },
        ],
      },
      {
        id: 'inter-digital',
        name: 'Dermatite Interdigital',
        emoji: '🔴',
        gradient: 'grad-rose',
        description: 'Inflamação e infecção entre os dedos das patas',
        prevalence: '23% dos cães que lambem as patas',
        protocols: [
          {
            id: 'interdigital-protocolo',
            title: 'Protocolo Interdigital',
            subtitle: 'Tratamento da inflamação entre os dedos',
            stages: [
              { id: 's1', label: 'Leve', description: 'Vermelhidão entre os dedos. Sem cisto. Cão lambe mas sem urgência.', color: '#f59e0b', urgency: 'low' },
              { id: 's2', label: 'Moderado', description: 'Inchaço visível, possível bolha (cisto interdigital). Cão manca levemente.', color: '#f97316', urgency: 'moderate' },
              { id: 's3', label: 'Grave', description: 'Cisto aberto ou fechado com pus. Cão evita apoiar a pata. Odor.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Pelos encravados entre os dedos',
              'Infecção bacteriana (Staph, Pseudomonas)',
              'Infecção fúngica (Malassezia)',
              'Trauma mecânico (superfície abrasiva)',
              'Piso quente no verão',
              'Alergia que causa coceira constante',
              'Predisposição em raças de pelos curtos (Bulldog, Labrador)',
            ],
            homeSteps: [
              { title: 'Banho de imersão diário', description: 'Bacia com povidine iodado diluído (solução cor de chá preto). Imergir a pata afetada por 5-10 minutos. Secar completamente.', duration: 'Diário por 7 dias', icon: '🛁' },
              { title: 'Compressas quentes', description: 'Pano úmido morno na área 3x/dia por 5 minutos. Ajuda a amadurecer e drenar cistos. Não espremer com pressão.', duration: '3x/dia', icon: '♨️' },
              { title: 'Higiene dos pelos', description: 'Aparar pelos longos entre os dedos com tesoura de ponta arredondada. Pelos longos retêm umidade e criam ambiente para bactérias.', duration: 'Mensal', icon: '✂️' },
              { title: 'Proteção da superfície', description: 'Evitar superfícies abrasivas. Usar protetor de pata (cera) antes de passeios em asfalto quente ou cascalho.', duration: 'Preventivo', icon: '🛡️' },
            ],
            vetAlert: [
              'Cisto com pus que não drena em 5 dias de compressas',
              'Febre associada',
              'Mais de 2 cistos simultâneos',
              'Recorrência mais de 3x no mesmo ano',
            ],
            prevention: [
              'Aparar pelos interdigitais mensalmente',
              'Secar patas após banho e chuva',
              'Evitar pisos quentes no verão',
              'Checar entre dedos semanalmente',
            ],
            myths: [
              { myth: '"Cisto vai resolver sozinho"', truth: 'Sem tratamento, 80% dos cistos infeccionam e precisam de antibiótico ou cirurgia.' },
            ],
            faq: [
              { q: 'Posso espremer o cisto?', a: 'Não. Espremer força a infecção para tecidos mais profundos. Use compressas quentes para amolecer naturalmente.' },
              { q: 'Bulldogs têm mais?', a: 'Sim. Raças braquicefálicas com pernas curtas e peso distribuído de forma diferente têm predisposição genética.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── PELE E COCEIRA ────────────────────────────────────────────────────────
  {
    id: 'pele',
    name: 'Pele & Coceira',
    emoji: '🔬',
    gradient: 'grad-amber',
    description: 'Alergias, dermatites, coceira, pelo e manchas',
    conditions: [
      {
        id: 'alergia-cutanea',
        name: 'Alergia de Pele',
        emoji: '🌿',
        gradient: 'grad-amber',
        description: 'Dermatite atópica, alergia alimentar e de contato',
        prevalence: '40% dos cães apresentam em algum grau',
        protocols: [
          {
            id: 'alergia-protocolo',
            title: 'Protocolo Anti-Alergia',
            subtitle: 'Identificação do gatilho e controle da inflamação',
            stages: [
              { id: 's1', label: 'Leve', description: 'Coceira ocasional, pele rosa, pelo opaco. Sem perda de pelo.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Moderado', description: 'Coceira frequente, pele avermelhada em áreas específicas. Possível perda de pelo em pontos.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Grave', description: 'Coceira intensa e constante. Escoriações. Lesões secundárias. Infecção bacteriana.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Ácaros de poeira doméstica (mais comum)',
              'Pólen de gramíneas e árvores (sazonal)',
              'Proteína alimentar (frango é a mais comum)',
              'Produto de limpeza, perfume ou detergente',
              'Material do estofado ou tapete',
              'Shampoo inadequado',
              'Picada de pulga (dermatite alérgica à picada)',
            ],
            homeSteps: [
              { title: 'Diário de sintomas', description: 'Registre: quando coça, onde coça, o que comeu, onde esteve. Em 2 semanas você identifica o padrão sazonal vs. alimentar vs. ambiental.', duration: '2 semanas', icon: '📓' },
              { title: 'Banho terapêutico', description: 'Shampoo hipoalergênico com aveia coloidal + água fria (vasodilata e alivia). 10 minutos de contato antes de enxaguar. 2x/semana na fase aguda.', duration: '2x/semana', icon: '🛁' },
              { title: 'Controle de ácaros', description: 'Lavar roupa de cama do cão com água quente 60°C semanalmente. Aspirar sofá/tapetes 2x/semana. Retirar tapetes felpudos se possível.', duration: 'Semanal', icon: '🏠' },
              { title: 'Suplementação ômega-3', description: 'Óleo de salmão: 1 mL por 5kg de peso/dia na comida. Reduz inflamação cutânea em 4-6 semanas. Efeito comprovado em ensaios clínicos.', duration: 'Diário', icon: '🐟' },
              { title: 'Dieta de eliminação', description: 'Proteína nova + carboidrato novo por 8 semanas. Sem petiscos, ossos artificiais ou qualquer outra fonte. Depois reintroduzir 1 ingrediente por vez.', duration: '8 semanas', icon: '🥩' },
              { title: 'Controle de pulgas', description: 'Mesmo 1 picada de pulga causa reação intensa em cão alérgico. Antiparasitário mensal é obrigatório. Tratar ambiente também (tapetes, sofá).', duration: 'Mensal', icon: '🦟' },
            ],
            vetAlert: [
              'Lesões que sangram ou têm pus',
              'Perda de pelo em placas maiores que 5 cm',
              'Cão se automutilando (morde a si mesmo com força)',
              'Inchaço na face ou pescoço (alergia grave)',
              'Sem melhora após 4 semanas de protocolo',
            ],
            prevention: [
              'Antiparasitário mensal (pulgas + carrapatos)',
              'Banho mensal com shampoo neutro/aveia',
              'Ração premium com ômega-3',
              'Lavar cama semanalmente',
              'Ventilação adequada do ambiente',
            ],
            myths: [
              { myth: '"Coceira é sempre pulga"', truth: 'Pulga é uma das causas. Ácaros, alimentos e ambientais são igualmente comuns. Diagnóstico diferencial é essencial.' },
              { myth: '"Banho frequente piora a pele"', truth: 'Banho com shampoo adequado e temperatura correta MELHORA a barreira cutânea. O problema é shampoo errado ou água quente.' },
              { myth: '"Alergia alimentar aparece na barriga"', truth: 'Pode aparecer em qualquer lugar: patas, orelhas, virilha, axilas. Não há localização exclusiva.' },
            ],
            faq: [
              { q: 'Qual a diferença entre alergia ambiental e alimentar?', a: 'Ambiental tende a ser sazonal (piora em certas épocas) e afeta principalmente patas, orelhas e virilha. Alimentar é constante durante o ano todo.' },
              { q: 'Posso dar antialérgico humano?', a: 'Apenas loratadina é relativamente segura em cães (0,5 mg/kg). Difenidramina e cetirizina podem ser usadas com orientação veterinária. NUNCA dar sem consultar.' },
              { q: 'Quanto tempo até ver resultado com ômega-3?', a: 'Mínimo 4 semanas. Resultado completo em 8-12 semanas. É um suporte, não cura. Precisa de identificação do gatilho.' },
            ],
          },
        ],
      },
      {
        id: 'sarna',
        name: 'Sarna',
        emoji: '🦠',
        gradient: 'grad-orange',
        description: 'Sarna sarcóptica e demodécica — identificação e tratamento',
        prevalence: '8% dos casos de coceira intensa',
        protocols: [
          {
            id: 'sarna-protocolo',
            title: 'Protocolo Sarna',
            subtitle: 'Diferenciação e manejo das duas sarnas',
            stages: [
              { id: 's1', label: 'Sarna Sarcóptica', description: 'Coceira extremamente intensa. Começa em orelhas, cotovelos, barriga. Altamente contagiosa (passa para humanos).', color: '#ef4444', urgency: 'high' },
              { id: 's2', label: 'Sarna Demodécica Local', description: 'Perda de pelo em manchas. Pele escamosa. Não coça muito. Comum em filhotes.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Sarna Demodécica Generalizada', description: 'Perda de pelo extensa. Infecções secundárias. Pele espessa e enrugada. Grave.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Contato com cão infectado (sarcóptica)',
              'Imunidade baixa (demodécica)',
              'Filhotes com sistema imune imaturo',
              'Desnutrição ou doença sistêmica',
              'Estresse crônico',
            ],
            homeSteps: [
              { title: 'ATENÇÃO — Sarna requer veterinário', description: 'Sarna não pode ser tratada em casa. Requer diagnóstico por raspado de pele e medicação específica (ivermectina, afoxolaner ou fluralaner). Leve ao vet imediatamente.', duration: 'Imediato', icon: '⚠️' },
              { title: 'Isolamento imediato', description: 'Se suspeitar de sarna sarcóptica: isolate o cão de outros animais E de crianças/pessoas. É zoonose — passa para humanos causando coceira.', duration: 'Até diagnóstico', icon: '🚨' },
              { title: 'Higienize o ambiente', description: 'Lave toda a cama, brinquedos e roupas com água quente. Aspire sofá e carpetes. Descarte coleira antiga. Ácaro sobrevive 3 dias fora do hospedeiro.', duration: 'Imediato', icon: '🧹' },
            ],
            vetAlert: [
              'Qualquer suspeita de sarna — consulta imediata',
              'Perda de pelo em manchas em filhote',
              'Coceira extrema que não responde a antialérgicos',
              'Lesões em humanos da família após o cão coçar',
            ],
            prevention: [
              'Evitar contato com cães de rua ou desconhecidos',
              'Manter imunidade alta: boa alimentação + vacinação em dia',
              'Antiparasitário mensal pode prevenir sarcóptica',
              'Checar pele do cão mensalmente',
            ],
            myths: [
              { myth: '"Sarna é coisa de cão abandonado"', truth: 'Qualquer cão pode pegar sarna sarcóptica por contato. Um único encontro no parque é suficiente.' },
            ],
            faq: [
              { q: 'Sarna passa para humanos?', a: 'A sarcóptica sim — causa coceira em humanos, especialmente em braços e cintura. Mas não se estabelece permanentemente em humanos (diferente de em cães).' },
              { q: 'Sarna tem cura?', a: 'Sarcóptica: sim, tem cura com tratamento adequado (2-4 semanas). Demodécica localizada: geralmente resolve sozinha com imunidade. Generalizada: tratamento longo, pode recorrer.' },
            ],
          },
        ],
      },
      {
        id: 'fungo-pele',
        name: 'Fungos & Levedura',
        emoji: '🍄',
        gradient: 'grad-purple',
        description: 'Malassezia, ringworm e infecções fúngicas',
        prevalence: '15% dos casos dermatológicos',
        protocols: [
          {
            id: 'fungo-protocolo',
            title: 'Protocolo Anti-fúngico',
            subtitle: 'Identificação e controle de fungos na pele',
            stages: [
              { id: 's1', label: 'Levedura (Malassezia)', description: 'Cheiro característico de "bolo", pele gordurosa, pelos oleosos, manchas escurecidas. Comum em orelhas, patas, virilha.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's2', label: 'Ringworm (Dermatofitose)', description: 'Manchas circulares com perda de pelo e centro mais claro. Borda avermelhada. Zoonose.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Umidade excessiva na pele',
              'Imunidade comprometida',
              'Uso prolongado de antibióticos',
              'Dobras de pele (raças como Bulldog, Shar-Pei)',
              'Ambiente quente e úmido',
              'Contato com solo contaminado (ringworm)',
            ],
            homeSteps: [
              { title: 'Banho anti-fúngico', description: 'Shampoo com cetoconazol 2% ou clorexidina 4%. Deixe agir 10 minutos antes de enxaguar. Use 2x/semana por 4 semanas.', duration: '4 semanas', icon: '🧴' },
              { title: 'Limpeza de pregas', description: 'Em raças com dobras (Bulldog, Shar-Pei): limpe pregas diariamente com gazes umedecidas em solução de clorexidina 0,5%. Seque bem.', duration: 'Diário', icon: '🧽' },
              { title: 'Controle de umidade', description: 'Secar completamente após banho, principalmente pregas, orelhas, patas. Evitar coleiras molhadas. Usar secador em temperatura morna.', duration: 'Sempre', icon: '💨' },
              { title: 'Vinagre de maçã diluído', description: 'Para levedura superficial nas patas: diluir 50% com água, aplicar com gaze, deixar secar. Altera pH e inibe levedura. Não usar em pele lesionada.', duration: 'Diário', icon: '🍎' },
            ],
            vetAlert: [
              'Manchas circulares com perda de pelo (ringworm suspeito)',
              'Lesões em humanos da família',
              'Infecção não melhora em 3 semanas de shampoo',
              'Odor muito intenso com coceira',
            ],
            prevention: [
              'Secar completamente após banho e passeios na chuva',
              'Shampoo adequado ao pH da pele canina',
              'Limpeza regular de pregas em raças predispostas',
              'Boa ventilação do ambiente',
            ],
            myths: [
              { myth: '"Fungo só em cão sujo"', truth: 'Malassezia é habitante normal da pele. Cresce em excesso com umidade e imunidade baixa, independente de higiene.' },
            ],
            faq: [
              { q: 'Como diferenciar fungo de alergia?', a: 'Fungo: cheiro específico, pele oleosa/gordurosa, manchas com bordas definidas. Alergia: pele seca/vermelha, sem cheiro específico, coceira mais generalizada.' },
              { q: 'Ringworm passa para humanos?', a: 'Sim. É a principal zoonose fúngica. Lavar mãos após manusear o cão e não deixar crianças pequenas em contato com lesões suspeitas.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── DIGESTIVO & VÔMITO ─────────────────────────────────────────────────────
  {
    id: 'digestivo',
    name: 'Digestivo & Vômito',
    emoji: '🤢',
    gradient: 'grad-emerald',
    description: 'Vômito, diarreia, constipação e problemas digestivos',
    conditions: [
      {
        id: 'vomito',
        name: 'Vômito',
        emoji: '🤢',
        gradient: 'grad-emerald',
        description: 'Causas, estágios e quando é emergência',
        prevalence: 'Causa mais frequente de visita ao vet',
        protocols: [
          {
            id: 'vomito-protocolo',
            title: 'Protocolo do Vômito',
            subtitle: 'Triagem rápida: regurgitação vs. vômito vs. emergência',
            stages: [
              { id: 's1', label: 'Ocasional (normal)', description: 'Vomitou 1x, bile amarela pela manhã. Cão ativo, sem outros sintomas. Provavelmente estômago vazio.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Moderado', description: 'Vômito 2-3x no dia. Cão come mas está quieto. Sem sangue. Pode ser intolerância alimentar ou gastrite.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Grave', description: 'Mais de 4x em 24h. Cão recusa água. Letargia. Diarreia junto. Risco de desidratação.', color: '#ef4444', urgency: 'high' },
              { id: 's4', label: 'Emergência', description: 'Sangue no vômito. Abdômen distendido. Tentativas de vomitar sem conseguir. Dor intensa. IR AO VET AGORA.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Estômago vazio (bile amarela — mais comum)',
              'Comer muito rápido',
              'Mudança brusca de ração',
              'Ingestão de grama ou plantas',
              'Corpo estranho (brinquedo, osso)',
              'Gastroenterite viral ou bacteriana',
              'Intoxicação alimentar',
              'Pancreatite (após comida gordurosa)',
              'Obstrução intestinal',
              'Torção gástrica (raças grandes — emergência)',
            ],
            homeSteps: [
              { title: 'Triagem rápida', description: 'Veja: tem sangue? Cão está tentando vomitar sem conseguir? Barriga está inchada e dura? Se SIM a qualquer um: veterinário de emergência agora, não espere.', duration: 'Imediato', icon: '🚨' },
              { title: 'Jejum de 4-6 horas', description: 'Para vômito moderado sem sinais de emergência: retire o alimento por 4-6 horas (nunca mais que 12h). Oferecer pequenas quantidades de água frequentemente.', duration: '4-6 horas', icon: '⏱️' },
              { title: 'Reidratação gradual', description: 'Após jejum: ofereça 1-2 colheres de sopa de água a cada 20 minutos. Se não vomitar em 2h, ofereça mais. Nunca deixe beber tudo de uma vez.', duration: '2-4 horas', icon: '💧' },
              { title: 'Dieta branca', description: 'Frango cozido sem sal + arroz cozido (proporção 1:3). Pequenas porções a cada 4h por 2-3 dias. Gradualmente voltar à ração normal misturando.', duration: '2-3 dias', icon: '🍚' },
              { title: 'Probiótico de suporte', description: 'Probiótico canino após jejum ajuda a restaurar flora intestinal. Kefir puro (sem açúcar) também funciona: 1 col. sopa para cães pequenos, 2-3 para grandes.', duration: '5-7 dias', icon: '🦠' },
            ],
            vetAlert: [
              'EMERGÊNCIA: Sangue no vômito (vermelho vivo ou cor de borra de café)',
              'EMERGÊNCIA: Barriga distendida e cão tentando vomitar sem conseguir (torção gástrica)',
              'EMERGÊNCIA: Possível ingestão de tóxico (xilitol, uva, cebola, paracetamol)',
              'Vômito por mais de 24 horas',
              'Filhote ou idoso vomitando mais de 2x',
              'Cão recusa água por mais de 8 horas',
            ],
            prevention: [
              'Alimentação dividida em 2-3 refeições (não 1 grande)',
              'Comedouro anti-engasgo para cães que comem rápido',
              'Não trocar ração de forma brusca (7 dias de transição)',
              'Evitar ossos cooked (podem partir e perfurar)',
              'Não alimentar próximo de exercício intenso',
            ],
            myths: [
              { myth: '"Bile amarela é grave"', truth: 'Bile pela manhã em estômago vazio é normal. Comer um petisco antes de dormir resolve na maioria dos casos.' },
              { myth: '"Grama faz vomitar para se curar"', truth: 'Parcialmente verdade. Cão come grama quando sente enjoo, mas não é comportamento medicinal consciente. Pode ser sinal de náusea subjacente.' },
              { myth: '"Dar Plasil resolve"', truth: 'Metoclopramida humana pode ser tóxica em cães em doses erradas. Nunca medicá-lo sem orientação veterinária.' },
            ],
            faq: [
              { q: 'Qual a diferença entre vômito e regurgitação?', a: 'Regurgitação: alimento não digerido sobe passivamente sem esforço, logo após comer. Vômito: esforço ativo, conteúdo parcialmente digerido ou bile. A diferença importa para o diagnóstico.' },
              { q: 'Meu cão comeu grama e vomitou. Normal?', a: 'Sim, em episódio único. Grama age como emético natural. Se for frequente, pode indicar refluxo gastroesofágico ou problema digestivo crônico.' },
              { q: 'Quando oferecer água após o vômito?', a: 'Espere 1 hora após o último episódio. Depois ofereça 1-2 colheres a cada 20 min. Oferecer água de uma vez pode desencadear novo vômito.' },
            ],
          },
        ],
      },
      {
        id: 'diarreia',
        name: 'Diarreia',
        emoji: '💦',
        gradient: 'grad-blue',
        description: 'Tipos, causas e protocolo de recuperação',
        prevalence: 'Segunda causa mais comum de vet',
        protocols: [
          {
            id: 'diarreia-protocolo',
            title: 'Protocolo da Diarreia',
            subtitle: 'Triagem e manejo por tipo e gravidade',
            stages: [
              { id: 's1', label: 'Leve (aguda)', description: 'Fezes amolecidas ou líquidas. Menos de 24h. Cão ativo. Sem sangue.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Moderada', description: 'Diarreia por 24-48h. Mais de 3 episódios por dia. Cão quieto mas alerta.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Grave / Sanguinolenta', description: 'Sangue vermelho ou preto nas fezes. Diarreia profusa. Desidratação visível.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Mudança brusca de ração',
              'Ingestão de alimento estragado ou inadequado',
              'Estresse (viagem, mudança, visita)',
              'Parasitas intestinais (giárdia, verme)',
              'Infecção viral (parvovírus — grave)',
              'Antibioticoterapia recente',
              'Pancreatite',
              'Doença inflamatória intestinal',
            ],
            homeSteps: [
              { title: 'Avalie urgência', description: 'Sangue preto nas fezes = sangramento alto, emergência. Sangue vermelho vivo = emergência. Diarreia com vômito + letargia em filhote = suspeita de parvo, emergência.', duration: 'Imediato', icon: '🚨' },
              { title: 'Jejum e hidratação', description: 'Jejum de 12-24h (nunca em filhotes <3 meses). Água sempre disponível. Se recusar: tente soro de frango caseiro (água de cozimento do frango sem sal, frio).', duration: '12-24h', icon: '💧' },
              { title: 'Teste de desidratação', description: 'Belisque suavemente a pele do pescoço. Se demorar >2 segundos para voltar, está desidratado — veterinário urgente. Normal: retorna imediato.', duration: '2x/dia', icon: '🔍' },
              { title: 'Dieta branda', description: 'Frango cozido desfiado + arroz 1:3 em porções pequenas. 4-5 refeições pequenas/dia. Adicionar abóbora cozida amassada: fibra solúvel que regula o intestino.', duration: '3-5 dias', icon: '🍚' },
              { title: 'Vermifugação', description: 'Diarreia recorrente em filhotes: alta chance de parasitas. Vermifugar com albendazol ou fenbendazol de acordo com peso. Repetir em 14 dias.', duration: 'Conforme orientação', icon: '💊' },
            ],
            vetAlert: [
              'Qualquer sangue nas fezes',
              'Filhote com diarreia profusa (risco de parvo)',
              'Desidratação (pele não volta rápido ao beliscar)',
              'Diarreia há mais de 48h sem melhora',
              'Diarreia + vômito simultaneamente',
            ],
            prevention: [
              'Transição de ração em 7-10 dias',
              'Vermifugação a cada 3-6 meses',
              'Não oferecer alimentos humanos gordurosos',
              'Água sempre fresca e limpa',
              'Vacinação em dia (previne parvo)',
            ],
            myths: [
              { myth: '"Diarreia com sangue é hemorroida"', truth: 'Cão não tem hemorroida. Sangue nas fezes indica desde parasitas até parvo, intussuscepção ou intoxicação. Veterinário imediato.' },
            ],
            faq: [
              { q: 'Posso dar iogurte para diarreia?', a: 'Iogurte natural sem açúcar em pequena quantidade pode ajudar pela lactobacillus. Melhor opção é probiótico específico canino.' },
              { q: 'Diarreia de estresse passa sozinha?', a: 'Sim, geralmente em 24-48h com jejum e dieta branda. Se persistir, investigar se o estressor virou gatilho de DII.' },
            ],
          },
        ],
      },
      {
        id: 'constipacao',
        name: 'Constipação',
        emoji: '😣',
        gradient: 'grad-orange',
        description: 'Dificuldade de evacuar e obstrução',
        prevalence: '5% dos atendimentos digestivos',
        protocols: [
          {
            id: 'constipacao-protocolo',
            title: 'Protocolo da Constipação',
            subtitle: 'Diferenciação e manejo da prisão de ventre',
            stages: [
              { id: 's1', label: 'Leve', description: 'Fezes duras, cão faz força mas evacua. Menos de 48h sem evacuar.', color: '#f59e0b', urgency: 'low' },
              { id: 's2', label: 'Moderada', description: 'Mais de 48h sem evacuar. Cão faz muita força, gemendo. Fezes saem em bolinhas.', color: '#f97316', urgency: 'moderate' },
              { id: 's3', label: 'Obstrução', description: 'Mais de 72h. Abdômen tenso. Vômito junto. Cão em dor visível.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Pouca hidratação',
              'Ingestão de ossos',
              'Pelos ingeridos durante higiene',
              'Sedentarismo',
              'Dieta pobre em fibras',
              'Tumor ou massa abdominal',
              'Próstata aumentada em machos',
              'Megacólon (em gatos principalmente)',
            ],
            homeSteps: [
              { title: 'Hidratação imediata', description: 'Oferecer água constantemente. Se recusar: caldo de frango sem sal, morno. Adicionar 1 colher de sopa de óleo de coco ao alimento — lubrifica o intestino.', duration: 'Imediato', icon: '💧' },
              { title: 'Abóbora em pasta', description: '1-4 colheres de sopa de abóbora cozida amassada por dia (conforme porte). Rica em fibra e água. Regula tanto diarreia quanto constipação.', duration: '2-3 dias', icon: '🎃' },
              { title: 'Exercício', description: 'Caminhadas estimulam peristaltismo. Pelo menos 20-30 min de caminhada activa. O movimento físico literalmente massageia o intestino.', duration: 'Diário', icon: '🚶' },
              { title: 'Massagem abdominal', description: 'Com o cão deitado, faça movimentos circulares suaves no abdômen no sentido horário por 5 minutos. Estimula o movimento intestinal.', duration: '2x/dia', icon: '🤲' },
            ],
            vetAlert: [
              'Mais de 72h sem evacuar',
              'Abdômen duro e distendido',
              'Cão em dor ou gemendo ao tentar evacuar',
              'Vômito associado',
              'Sangue nas fezes ao evacuar com esforço',
            ],
            prevention: [
              'Hidratação adequada (40 mL/kg/dia)',
              'Exercício diário',
              'Não oferecer ossos cozidos',
              'Ração com boa quantidade de fibra',
              'Escovação regular (reduz ingestão de pelos)',
            ],
            myths: [
              { myth: '"Óleo mineral resolve constipação em cão"', truth: 'Óleo mineral pode causar pneumonia aspirativa se for ao pulmão. Nunca administrar sem orientação veterinária.' },
            ],
            faq: [
              { q: 'Posso dar laxante humano?', a: 'Nunca. Laxantes humanos (lactulose, bisacodil) podem ser tóxicos em cães. O veterinário indicará a dose e produto certo.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── COMPORTAMENTO ──────────────────────────────────────────────────────────
  {
    id: 'comportamento',
    name: 'Comportamento',
    emoji: '🧠',
    gradient: 'grad-purple',
    description: 'Ansiedade, agressividade, medos e problemas comportamentais',
    conditions: [
      {
        id: 'ansiedade-separacao',
        name: 'Ansiedade de Separação',
        emoji: '😰',
        gradient: 'grad-purple',
        description: 'O problema comportamental mais comum nos cães',
        prevalence: '17% dos cães têm forma moderada/grave',
        protocols: [
          {
            id: 'ansiedade-protocolo',
            title: 'Protocolo Anti-Ansiedade',
            subtitle: 'Dessensibilização sistemática e manejo ambiental',
            stages: [
              { id: 's1', label: 'Leve', description: 'Cão fica em alerta quando você pega chaves/bolsa. Segue pelos cômodos. Vocaliza por 5-10 min após saída.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Moderado', description: 'Destruição de objetos. Latido por horas. Urinar/defecar em casa mesmo adestrado. Hiperventilação na saída.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Grave', description: 'Autolesão (arranha portas até sangrar, morde a si mesmo). Recusa comida enquanto sozinho. Pânico total.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Hiper-apego ao tutor',
              'Rotina imprevisível',
              'Mudança brusca (mudança de casa, bebê, nova pet)',
              'Resgate de abrigo (trauma)',
              'Isolamento excessivo na pandemia + retorno ao trabalho',
              'Punição associada à solidão',
              'Raças selecionadas para trabalho em grupo',
            ],
            homeSteps: [
              { title: 'Dessensibilize as pistas de saída', description: 'Por 2 semanas: pegue as chaves, coloque a bolsa, vista o casaco... e NÃO saia. Repita 20x/dia. O cérebro do cão para de associar essas ações à solidão.', duration: '2 semanas', icon: '🔑' },
              { title: 'Saídas curtas graduais', description: 'Semana 3: saia por 10 segundos, volte calmamente. Aumente gradualmente: 30s, 1min, 5min, 15min, 1h. Nunca avance se ele tiver sintomas no tempo anterior.', duration: '4-6 semanas', icon: '⏱️' },
              { title: 'Independência positiva', description: 'Ensine o cão a ficar em outro cômodo enquanto você está em casa. Recompense distância espontânea. Cama própria com item com seu cheiro.', duration: 'Diário', icon: '🛏️' },
              { title: 'Enriquecimento ambiental', description: 'Antes de sair: Kong com pasta de amendoim congelado (ocupa 30-45 min). Rádio/TV com voz humana. Snuffle mat com ração escondida. Janela baixa para observar.', duration: 'Cada saída', icon: '🧸' },
              { title: 'Protocolo de chegada', description: 'Ao chegar: ignore o cão por 2-5 minutos. Não cumprimente efusivamente. Espere ele se acalmar completamente antes de qualquer atenção. Ensina que sua chegada é evento neutro.', duration: 'Sempre', icon: '🚪' },
              { title: 'Exercício antes de sair', description: 'Passeio de 30-45 min + treino de 5 min (senta, deita, fica) antes de sair. Cão cansado fisicamente e mentalmente dorme quando fica sozinho.', duration: 'Antes de cada saída', icon: '🏃' },
            ],
            vetAlert: [
              'Autolesão (sangramento, feridas)',
              'Sem nenhuma melhora após 8 semanas de protocolo',
              'Cão não come por mais de 24h quando sozinho',
              'Pânico extremo com risco de fugir e se perder',
            ],
            prevention: [
              'Desde filhote: períodos de independência regulares',
              'Não criar dependência excessiva durante home office',
              'Socialização adequada (0-16 semanas)',
              'Ensinar "fica" desde cedo',
              'Rotina estável mas com variações planejadas',
            ],
            myths: [
              { myth: '"Pegar outro cão resolve"', truth: 'Ansiedade de separação é apego ao tutor, não solidão. Outro cão geralmente não resolve e pode criar dois cães ansiosos.' },
              { myth: '"Punir o que destruiu resolve"', truth: 'Punição após o fato é ineficaz — cão não associa a ação passada à punição presente. Piora a ansiedade porque cria medo de sua chegada.' },
              { myth: '"Raça calma não tem ansiedade"', truth: 'Qualquer raça pode desenvolver ansiedade. Raças consideradas "calmas" muitas vezes apenas expressam diferente.' },
            ],
            faq: [
              { q: 'Remédio ajuda?', a: 'Sim, mas como suporte ao treinamento, não substituto. Fluoxetina, trazodona e clomipramina são usados com protocolo de dessensibilização. Apenas com receita veterinária.' },
              { q: 'Câmera em casa ajuda?', a: 'Ajuda a monitorar o comportamento real e identificar o timing dos episódios. Não interfere na ansiedade, mas permite calibrar o protocolo de saídas graduais.' },
              { q: 'Quanto tempo leva para melhorar?', a: 'Casos leves: 4-6 semanas. Moderados: 3-6 meses. Graves: pode levar 1 ano com suporte medicamentoso. Consistência é mais importante que velocidade.' },
            ],
          },
        ],
      },
      {
        id: 'medo-barulho',
        name: 'Medo de Barulho',
        emoji: '💥',
        gradient: 'grad-indigo',
        description: 'Fogos, trovões, obras — fobia de barulhos intensos',
        prevalence: '40% dos cães apresentam algum grau',
        protocols: [
          {
            id: 'medo-protocolo',
            title: 'Protocolo Anti-Fobia Sonora',
            subtitle: 'Manejo imediato e dessensibilização a longo prazo',
            stages: [
              { id: 's1', label: 'Leve', description: 'Alerta, vai para canto específico. Trêmulo levemente. Busca o tutor.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Moderado', description: 'Esconde, treme muito, ofega. Recusa comida. Pode urinar de medo.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Grave (Pânico)', description: 'Foge, pula muro, destrói tudo, pode se machucar. Risco real de fuga.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Fogos de artifício',
              'Trovões',
              'Obras próximas',
              'Tiro',
              'Barulho de motor alto',
              'Ausência de experiências positivas com barulhos na socialização',
            ],
            homeSteps: [
              { title: 'ANTES da época (off-season)', description: 'Dessensibilização sonora: toque gravações de trovão/fogos em volume baixíssimo enquanto o cão come. Aumente gradualmente ao longo de semanas. Isso recondiona a resposta emocional.', duration: 'Semanas', icon: '🔊' },
              { title: 'Crie um "safe space"', description: 'Caixinha/toca com cobertor com seu cheiro. Deixe disponível SEMPRE (não só na crise). Cão que tem refúgio familiar enfrenta melhor. Nunca force a sair.', duration: 'Permanente', icon: '🏠' },
              { title: 'DURANTE o evento agudo', description: 'Fique calmo. Você pode confortar SEM reforçar o medo (isso é mito — cão entende conforto). Não force interação, deixe-o se esconder se quiser. Fechar janelas e cortinas reduz estímulo.', duration: 'Durante', icon: '🤗' },
              { title: 'Suplementação natural', description: 'Melatonina canina (0,1 mg/kg) 1h antes do evento: reduz ansiedade. Adaptil diffuser (feromônio sintético) no ambiente. Zylkene (caseína do leite) 1-2h antes.', duration: 'Preventivo', icon: '🌿' },
              { title: 'Proteção da fuga', description: 'Época de festas: chip de identificação em dia, coleira com contato, verificar cercas e portões. 30% dos fugas de cães ocorrem em eventos com fogos.', duration: 'Preventivo', icon: '🏷️' },
            ],
            vetAlert: [
              'Pânico que causa autolesão',
              'Cão foge repetidamente',
              'Sem resposta a qualquer intervenção',
              'Fobia generalizada (qualquer barulho desencadeia)',
            ],
            prevention: [
              'Socialização sonora entre 3-16 semanas de idade (mais crítico)',
              'Gravações de sons do dia a dia desde filhote',
              'Nunca punir ou gritar durante episódio de medo',
              'Chip e identificação sempre em dia',
            ],
            myths: [
              { myth: '"Consolar cão com medo reforça o comportamento"', truth: 'Falso. Conforto não reforça medo. O medo é uma emoção, não um comportamento operante. Consolar é apropriado e não piora o prognóstico.' },
            ],
            faq: [
              { q: 'Camiseta de pressão (Thundershirt) funciona?', a: 'Para 80% dos cães com medo leve-moderado: sim. A pressão constante tem efeito ansiolítico real. Para casos graves, é insuficiente como única intervenção.' },
              { q: 'Qual medicamento para fogos?', a: 'Alprazolam (situacional), trazodona ou combinações. Devem ser testados ANTES do evento para calibrar dose. Apenas com receita veterinária.' },
            ],
          },
        ],
      },
      {
        id: 'agressividade',
        name: 'Agressividade',
        emoji: '⚠️',
        gradient: 'grad-rose',
        description: 'Tipos de agressividade e abordagem segura',
        prevalence: 'Principal causa de abandono em cães adultos',
        protocols: [
          {
            id: 'agressividade-protocolo',
            title: 'Protocolo de Agressividade',
            subtitle: 'Identificação do tipo e manejo seguro',
            stages: [
              { id: 's1', label: 'Agressividade por Medo', description: 'Growl, postura baixa, orelha para trás, cauda entre as pernas. Evita o confronto. Mais comum.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's2', label: 'Agressividade Territorial', description: 'Latidos intensos, postura ereta, ao se aproximar da casa/carro. Cão se interpõe entre tutor e "ameaça".', color: '#f97316', urgency: 'moderate' },
              { id: 's3', label: 'Agressividade por Dor', description: 'Cão normalmente dócil que rosna/morde ao tocar área específica. Indicador de problema físico.', color: '#ef4444', urgency: 'high' },
              { id: 's4', label: 'Agressividade Predatória', description: 'Silenciosa, perseguição, olhar fixo sem aviso. Pode ser direcionada a crianças pequenas ou outros animais.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Dor física não diagnosticada',
              'Medo de estranhos (socialização inadequada)',
              'Recursos (comida, brinquedo, cama)',
              'Território (casa, carro, tutor)',
              'Estimulação excessiva sem saída',
              'Histórico de abuso ou trauma',
              'Instinto predatório não gerenciado',
            ],
            homeSteps: [
              { title: 'Excluir causa física primeiro', description: 'Agressividade repentina em cão dócil = dor. Cheque: articulações, coluna, ouvidos, dentes. Exame veterinário completo antes de qualquer protocolo comportamental.', duration: 'Imediato', icon: '🏥' },
              { title: 'Nunca punir agressividade', description: 'Punição suprime o aviso (growl) sem resolver o problema. Cão que não avisa mais é mais perigoso que cão que rosna. Rosnar é comunicação válida.', duration: 'Sempre', icon: '🚫' },
              { title: 'Identifique o gatilho exato', description: 'Descreva: quem, onde, quando, o que acontecia antes. Agressividade tem sempre um contexto. Sem identificar o gatilho, não há protocolo eficaz.', duration: '1 semana', icon: '📋' },
              { title: 'Gestão ambiental imediata', description: 'Guia sempre em ambientes com gatilho. Gerência de recursos: comida em local separado, sem disputa. Crianças não interagem com cão sem supervisão absoluta.', duration: 'Permanente', icon: '🛡️' },
            ],
            vetAlert: [
              'Qualquer mordida que abra pele (humano ou animal)',
              'Agressividade repentina em cão antes dócil',
              'Comportamento predatório em direção a crianças',
              'Agressividade que aumentou nas últimas semanas',
            ],
            prevention: [
              'Socialização entre 3-16 semanas com estranhos e crianças',
              'Nunca usar punição física',
              'Treino básico de obediência desde filhote',
              'Não permitir que crianças perturbem cão comendo ou dormindo',
            ],
            myths: [
              { myth: '"Cão que mordeu uma vez sempre vai morder"', truth: 'Falso. Com avaliação etológica e protocolo correto, muitos casos são reabilitados completamente.' },
              { myth: '"Dominância causa agressividade"', truth: 'Teoria da dominância em cães foi refutada. Agressividade vem de medo, dor, instinto ou histórico, não de tentativa de "dominar o tutor".' },
            ],
            faq: [
              { q: 'Preciso de médico veterinário comportamentalista?', a: 'Para casos moderados/graves: sim. CRMV com especialização em etologia ou certificação em comportamento. Adestrador sem formação pode piorar casos complexos.' },
              { q: 'Cão agressivo pode ter qualidade de vida?', a: 'Sim, com gestão adequada do ambiente e gatilhos. Muitos cães agressivos vivem felizes e seguros com tutores que entendem suas necessidades.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── OLHOS E OUVIDOS ────────────────────────────────────────────────────────
  {
    id: 'olhos-ouvidos',
    name: 'Olhos & Ouvidos',
    emoji: '👁️',
    gradient: 'grad-blue',
    description: 'Conjuntivite, cataratas, otite e problemas sensoriais',
    conditions: [
      {
        id: 'otite',
        name: 'Otite',
        emoji: '👂',
        gradient: 'grad-blue',
        description: 'Inflamação do canal auditivo — a mais comum em cães',
        prevalence: 'Afeta 1 em 5 cães ao longo da vida',
        protocols: [
          {
            id: 'otite-protocolo',
            title: 'Protocolo de Ouvido Saudável',
            subtitle: 'Identificação, limpeza e tratamento da otite',
            stages: [
              { id: 's1', label: 'Otite Externa Leve', description: 'Coça o ouvido ocasionalmente, sacude a cabeça. Leve vermelhidão na entrada do canal. Sem odor.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Otite Externa Moderada', description: 'Coça constantemente, inclina a cabeça, secreção escura. Odor característico. Vermelhidão intensa.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Otite Média/Interna', description: 'Perda de equilíbrio, andar em círculos, olhos oscilando (nistagmo). Dor intensa ao abrir a boca.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Umidade excessiva (natação, banho mal seco)',
              'Orelhas pendentes (Cocker, Basset)',
              'Pelos no canal auditivo',
              'Ácaros de ouvido (Otodectes)',
              'Alergia alimentar ou ambiental',
              'Corpo estranho (grama, inseto)',
              'Hipotireoidismo',
            ],
            homeSteps: [
              { title: 'Avalie visualmente', description: 'Com boa luz, observe a entrada do canal: vermelhidão, secreção (amarela = bacteriana, marrom = ácaros, preta = levedura), odor. Nunca introduza cotonete no canal.', duration: 'Semanal', icon: '🔦' },
              { title: 'Limpeza preventiva', description: 'Solução de limpeza veterinária (ou mistura 50% vinagre branco + 50% água) na entrada do canal. Massageie a base do ouvido por 30 segundos. Deixe o cão sacudir.', duration: 'Quinzenal', icon: '🧴' },
              { title: 'Secagem pós-banho', description: 'Algodão na entrada do ouvido antes do banho. Secar com pano após. Em cães que nadam: limpar ouvidos SEMPRE após mergulho.', duration: 'Cada banho/natação', icon: '🏊' },
              { title: 'Controle de pelos', description: 'Raças com pelos no canal: remoção mensal com pinça de epilação específica (não dolorosa com técnica correta). Melhora aeração do canal.', duration: 'Mensal', icon: '✂️' },
            ],
            vetAlert: [
              'Perda de equilíbrio ou nistagmo',
              'Cabeça persistentemente inclinada',
              'Sangue ou pus abundante no ouvido',
              'Dor ao abrir a boca ou tocar o ouvido',
              'Sem melhora em 5 dias de limpeza',
            ],
            prevention: [
              'Secar ouvidos após banho e natação',
              'Limpeza quinzenal com solução adequada',
              'Nunca usar cotonete no canal',
              'Controlar pelos em raças predispostas',
              'Tratar alergia de base (principal fator de recorrência)',
            ],
            myths: [
              { myth: '"Cotonete limpa o ouvido"', truth: 'Cotonete empurra o acúmulo para dentro e pode lesar o tímpano. Use apenas na parte externa/visível.' },
            ],
            faq: [
              { q: 'Óleo de coco funciona para otite?', a: 'Tem propriedade antifúngica e antibacteriana leve. Pode ajudar em otite leve por levedura como adjuvante. Não substitui tratamento médico.' },
              { q: 'Otite tem cura?', a: 'Episódio agudo sim. Mas recorrência é comum sem tratamento da causa raiz (alergia, anatomia, pelos). Controle da causa = menos episódios.' },
            ],
          },
        ],
      },
      {
        id: 'olho',
        name: 'Olhos & Visão',
        emoji: '👁️',
        gradient: 'grad-indigo',
        description: 'Conjuntivite, catarata, glaucoma e olho seco',
        prevalence: 'Problemas oculares afetam 10% dos cães anualmente',
        protocols: [
          {
            id: 'olho-protocolo',
            title: 'Protocolo Ocular',
            subtitle: 'Triagem e cuidados para os olhos',
            stages: [
              { id: 's1', label: 'Conjuntivite Leve', description: 'Olho vermelho, secreção clara ou leve, sem dor aparente. Cão coça o olho.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's2', label: 'Conjuntivite Grave', description: 'Secreção espessa amarela/verde, olho fechado, dor ao abrir, fotossensibilidade.', color: '#ef4444', urgency: 'high' },
              { id: 's3', label: 'Emergência Ocular', description: 'Olho saindo da órbita (proptose), perfuração, glaucoma agudo (olho muito duro e doloroso).', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Infecção bacteriana (Staphylococcus)',
              'Alergia',
              'Corpo estranho (pelo, poeira)',
              'Trauma',
              'Enfraquecimento da córnea (úlcera)',
              'Glaucoma',
              'Doença sistêmica (Distemper)',
            ],
            homeSteps: [
              { title: 'Limpeza suave', description: 'Gaze estéril umedecida em soro fisiológico 0,9%. Limpar da canto interno para externo em único movimento. Nunca usar água corrente ou algodão.', duration: '2-3x/dia', icon: '🧴' },
              { title: 'Prevenir coçar', description: 'Se cão está coçando o olho: colar elizabetano para proteger contra trauma. O ato de coçar pode transformar irritação simples em lesão grave.', duration: 'Até melhorar', icon: '🛡️' },
              { title: 'Observe e registre', description: 'Monitore: secreção aumentou? Mudou de cor? Olho está mais fechado? Qualquer piora em 48h: veterinário. Olhos deterioram rápido.', duration: '24-48h', icon: '👁️' },
            ],
            vetAlert: [
              'EMERGÊNCIA: Olho saindo da órbita (proptose)',
              'Olho muito duro ao toque (glaucoma)',
              'Secreção verde espessa com dor',
              'Úlcera de córnea visível (mancha branca/cinza)',
              'Qualquer problema ocular em filhote',
              'Cegueira súbita',
            ],
            prevention: [
              'Aparar pelos próximos dos olhos regularmente',
              'Não deixar cão colocar cabeça para fora do carro (trauma)',
              'Limpeza semanal dos olhos com soro fisiológico',
              'Exame oftalmológico em raças predispostas (Pug, Bulldog, Shih Tzu)',
            ],
            myths: [
              { myth: '"Chá preto cura conjuntivite"', truth: 'Não há evidência. Pode atrasar tratamento adequado. Use soro fisiológico para limpeza e consulte veterinário se persistir.' },
            ],
            faq: [
              { q: 'Colírio humano pode usar em cão?', a: 'Apenas soro fisiológico (NaCl 0,9%) é seguro como limpeza. Colírio com corticoide sem diagnóstico pode piorar infecção bacteriana ou fungal.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── NUTRIÇÃO & PESO ────────────────────────────────────────────────────────
  {
    id: 'nutricao',
    name: 'Nutrição & Peso',
    emoji: '🥩',
    gradient: 'grad-orange',
    description: 'Alimentação, peso ideal, suplementação e dietas',
    conditions: [
      {
        id: 'obesidade',
        name: 'Obesidade & Sobrepeso',
        emoji: '⚖️',
        gradient: 'grad-orange',
        description: 'A epidemia silenciosa que encurta a vida dos cães',
        prevalence: '56% dos cães nos EUA estão acima do peso',
        protocols: [
          {
            id: 'obesidade-protocolo',
            title: 'Protocolo de Peso Saudável',
            subtitle: 'Avaliação BCS, plano alimentar e exercício',
            stages: [
              { id: 's1', label: 'Ideal (BCS 4-5/9)', description: 'Costelas palpáveis sem esforço, cintura visível, abdômen tucked. Peso ideal.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Sobrepeso (BCS 6-7/9)', description: 'Costelas com camada de gordura. Cintura pouco definida. 15-30% acima do ideal.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Obeso (BCS 8-9/9)', description: 'Costelas não palpáveis. Sem cintura. Grandes depósitos de gordura. >30% acima do ideal.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Petiscos excessivos',
              'Sedentarismo',
              'Ração ad libitum (sempre disponível)',
              'Castração (metabolismo mais lento)',
              'Raças predispostas (Labrador, Pug, Beagle)',
              'Hipotireoidismo',
              'Cushing',
            ],
            homeSteps: [
              { title: 'Avalie o BCS (Body Condition Score)', description: 'Passe as mãos pelas costelas: deve sentir facilmente sem pressionar (como seus nós dos dedos). Veja de cima: cintura deve ser visível. Veja de lado: abdômen deve subir após as costelas.', duration: 'Mensal', icon: '📏' },
              { title: 'Calcule a quantidade correta', description: 'Quantidade na embalagem é para cão em atividade moderada. Cão sedentário: reduza 20-25%. Pese a ração em balança (não use o copo do fabricante — margem de erro de 20%).', duration: 'Imediato', icon: '⚖️' },
              { title: 'Elimine petiscos caloricamente densos', description: 'Substitua biscoitos industriais por: pedaços de cenoura, pepino, maçã sem semente, frango cozido picado. Redução imediata de 30-40% de calorias extras na maioria dos casos.', duration: 'Imediato', icon: '🥕' },
              { title: 'Exercício progressivo', description: 'Cão obeso: comece com 15 min de caminhada 2x/dia. Aumente 5 min/semana. Natação é excelente para cães com problema articular. Objetivo: 45-60 min/dia de atividade moderada.', duration: 'Progressivo', icon: '🚶' },
              { title: 'Alimentação lenta', description: 'Comedouro anti-engasgo ou Kong com ração. Distribua ração em 2-3 refeições. Isso aumenta saciedade e reduz pedido por mais comida.', duration: 'Sempre', icon: '🍽️' },
            ],
            vetAlert: [
              'Ganho de peso sem mudança de dieta (pode ser hormonal)',
              'Intolerância ao exercício (para de andar, ofega muito)',
              'Abdômen distendido (não é gordura)',
              'Perda de pelo junto com ganho de peso (hipotireoidismo/Cushing)',
            ],
            prevention: [
              'Pesar a ração na balança desde filhote',
              'Limitar petiscos a máx 10% das calorias diárias',
              'Exercício diário consistente',
              'Pesagem mensal',
              'Ração específica para castrado se castrou',
            ],
            myths: [
              { myth: '"Cachorro gordo é cachorro feliz"', truth: 'Obesidade encurta a vida em 2-2,5 anos e causa artrite, diabetes, doenças cardíacas e respiratórias. Não é carinho, é negligência.' },
              { myth: '"Ração para controle de peso é a solução"', truth: 'Ração "light" não funciona se der mais quantidade. O total calórico é o que importa, não o tipo de ração.' },
            ],
            faq: [
              { q: 'Quanto tempo para perder o peso excessivo?', a: 'Meta saudável: 1-2% do peso corporal por semana. Cão de 20kg com 4kg a perder: 10-20 semanas. Mais rápido que isso pode causar perda muscular.' },
              { q: 'Dieta caseira para emagrecer é segura?', a: 'Apenas com formulação veterinária. Dieta caseira sem formulação adequada pode causar deficiências nutricionais graves.' },
            ],
          },
        ],
      },
      {
        id: 'alimentacao-proibida',
        name: 'Alimentos Proibidos',
        emoji: '☠️',
        gradient: 'grad-rose',
        description: 'O que nunca dar e como agir em caso de ingestão',
        prevalence: 'Intoxicação alimentar — emergência comum',
        protocols: [
          {
            id: 'toxicos-protocolo',
            title: 'Protocolo de Emergência Alimentar',
            subtitle: 'Alimentos tóxicos e ação imediata na intoxicação',
            stages: [
              { id: 's1', label: 'Tóxicos Extremos (emergência)', description: 'Xilitol, uva/passa, cebola, alho, chocolate amargo, macadâmia, abacate.', color: '#7f1d1d', urgency: 'emergency' },
              { id: 's2', label: 'Tóxicos Moderados', description: 'Álcool, cafeína, sal em excesso, pimenta, nozes comuns, maçã com sementes.', color: '#ef4444', urgency: 'high' },
              { id: 's3', label: 'Causar Problema', description: 'Leite em quantidade, comida gordurosa, osso cozido, alimentos processados humanos.', color: '#f59e0b', urgency: 'moderate' },
            ],
            triggers: [],
            homeSteps: [
              { title: '🚨 XILITOL (adoçante)', description: 'Presente em chicletes, doces diet, pasta de dente, manteiga de amendoim "zero". Causa hipoglicemia fulminante. EMERGÊNCIA — induza vômito APENAS se ingestão <30 min e leve AO VET IMEDIATAMENTE.', duration: 'Emergência', icon: '🚨' },
              { title: '🚨 UVA / PASSA', description: 'Mecanismo desconhecido. Causa insuficiência renal aguda. Qualquer quantidade pode ser fatal. Emergência veterinária mesmo que o cão pareça bem.', duration: 'Emergência', icon: '🍇' },
              { title: '🚨 CEBOLA E ALHO', description: 'Destroem glóbulos vermelhos (anemia hemolítica). Efeito cumulativo — pequenas quantidades repetidas são tão perigosas quanto uma grande. Inclui pó de alho/cebola.', duration: 'Emergência', icon: '🧅' },
              { title: '🚨 CHOCOLATE', description: 'Teobromina tóxica. Gravidade depende do tipo: chocolate amargo > ao leite > branco. Sintomas: vômito, diarreia, tremor, convulsão. Calcule: >20mg/kg de teobromina = emergência.', duration: 'Emergência', icon: '🍫' },
              { title: 'O que fazer na ingestão', description: 'Ligue para o veterinário imediatamente com: o que comeu, quanto comeu, peso do cão, há quanto tempo. Indução de vômito: APENAS com orientação — em alguns casos piora (corrosivos, oleosos).', duration: 'Imediato', icon: '📞' },
            ],
            vetAlert: [
              'Qualquer ingestão de xilitol, uva, cebola, alho, chocolate amargo',
              'Convulsão após ingestão suspeita',
              'Vômito com sangue',
              'Colapso ou fraqueza extrema',
            ],
            prevention: [
              'Manteiga de amendoim: compre apenas XILITOL-FREE',
              'Nunca deixar comida humana ao alcance',
              'Informar visitas sobre o que não podem oferecer',
              'Guardar chicletes e adoçantes em gavetas trancadas',
              'Saber o número do veterinário de emergência de cor',
            ],
            myths: [
              { myth: '"Uma uva não faz mal"', truth: 'Uma única uva pode causar insuficiência renal em cão de porte pequeno. Não existe dose segura documentada.' },
              { myth: '"Se não vomitou, não vai ter problema"', truth: 'Muitos tóxicos (xilitol, cebola) causam dano interno sem vômito imediato. Os sintomas surgem horas depois quando o dano já está feito.' },
            ],
            faq: [
              { q: 'Posso induzir vômito em casa?', a: 'Com água oxigenada 3% (1 ml/kg, máx 45 ml) apenas se ingestão há menos de 30 min, cão consciente, e com orientação veterinária por telefone. Nunca com sal — pode ser mais tóxico que o alimento.' },
              { q: 'Água oxigenada funciona para todos os casos?', a: 'Não. Para substâncias corrosivas, oleosas ou em convulsão, é contraindicado. Sempre consulte veterinário antes de induzir vômito.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── EMERGÊNCIAS ────────────────────────────────────────────────────────────
  {
    id: 'emergencias',
    name: 'Emergências',
    emoji: '🚨',
    gradient: 'grad-rose',
    description: 'Situações que exigem ação imediata — salve a vida do seu cão',
    conditions: [
      {
        id: 'primeiros-socorros',
        name: 'Primeiros Socorros',
        emoji: '🩺',
        gradient: 'grad-rose',
        description: 'Protocolo de emergência completo',
        prevalence: 'Conhecimento que pode salvar uma vida',
        protocols: [
          {
            id: 'primeiros-socorros-protocolo',
            title: 'Primeiros Socorros Caninos',
            subtitle: 'Ação imediata nas principais emergências',
            stages: [
              { id: 's1', label: 'Engasgo', description: 'Cão fazendo movimentos de vomitar sem vomitar. Boca aberta com frequência. Pânico.', color: '#ef4444', urgency: 'emergency' },
              { id: 's2', label: 'Convulsão', description: 'Movimentos musculares involuntários, rigidez, perda de consciência, salivar.', color: '#ef4444', urgency: 'emergency' },
              { id: 's3', label: 'Sangramento intenso', description: 'Ferida que não para de sangrar com pressão simples.', color: '#ef4444', urgency: 'emergency' },
              { id: 's4', label: 'Torção gástrica (GDV)', description: 'Estômago distendido, tentativas de vomitar sem conseguir, salivação, colapso.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [],
            homeSteps: [
              { title: '🚨 ENGASGO: Manobra de Heimlich', description: 'Pequeno porte: segure de cabeça para baixo, dê tapas firmes nas costas entre as omoplatas. Porte médio/grande: atrás do cão, braços ao redor do abdômen, pressão firme e rápida para cima-frente. Máx 5 tentativas, então VET.', duration: 'Imediato', icon: '🫁' },
              { title: '🚨 CONVULSÃO: Nunca coloque a mão na boca', description: 'Cão não engole a língua. Afaste objetos que possam machucar. Cronometre a convulsão. Escureça o ambiente. Após parar: cão desorientado é normal. VET urgente se >3 min ou recorrência.', duration: 'Imediato', icon: '⚡' },
              { title: '🚨 SANGRAMENTO: Pressão direta', description: 'Pano limpo ou gazes sobre a ferida. Pressão constante por 5-10 minutos SEM tirar para ver. Se sangue encharcar: adicionar mais pano por cima, não trocar. Garrote apenas em membros e apenas 20 min máx.', duration: '5-10 min', icon: '🩸' },
              { title: '🚨 TORÇÃO GÁSTRICA: Emergência cirúrgica', description: 'Não há primeiros socorros eficazes. Não tente administrar nada. Transporte IMEDIATO ao veterinário. Torção gástrica tem mortalidade de 30% mesmo com cirurgia — cada minuto conta.', duration: 'Imediato', icon: '🏥' },
              { title: '🚨 INTOXICAÇÃO: Coleta de evidências', description: 'Fotografe o produto/alimento. Leve o rótulo ao veterinário. Anote: o que, quanto, quando. Não induza vômito sem orientação. Ligue ao veterinário de emergência imediatamente.', duration: 'Imediato', icon: '☠️' },
              { title: '🚨 ATROPELAMENTO', description: 'Use improviso como maca (placa, prancha, cobertor rígido). Mova o cão em bloco (mantenha coluna reta). Cubra para aquecer. Controle sangramento com pressão. VET imediato.', duration: 'Imediato', icon: '🚗' },
              { title: '🚨 GOLPE DE CALOR', description: 'Sombra imediata. Água fria (não gelada) no corpo. Ventilador. Não deixe no carro com janelas fechadas. Temperatura retal >41°C = emergência. Resfriamento excessivo também é perigoso — pare quando cão parecer melhor.', duration: 'Imediato', icon: '🌡️' },
            ],
            vetAlert: [
              'Qualquer emergência listada acima — VET IMEDIATO',
              'Número de emergência salvo: procure o CRMV local para indicação',
            ],
            prevention: [
              'Saber o endereço do veterinário de emergência mais próximo',
              'Ter kit básico: gazes, esparadrapo, soro fisiológico, termômetro retal',
              'Nunca deixar cão em carro fechado mesmo por "poucos minutos"',
              'Comedouro elevado para raças grandes (previne torção)',
              'Chip de identificação sempre atualizado',
            ],
            myths: [
              { myth: '"Cão com convulsão engole a língua"', truth: 'Não. É mito. Nunca coloque a mão na boca — você pode se machucar gravemente.' },
            ],
            faq: [
              { q: 'Qual temperatura é golpe de calor?', a: 'Temperatura retal >39,5°C: atenção. >40,5°C: emergência. >41,5°C: risco de falência de órgãos. Cão saudável fica entre 38,3-39,2°C.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── PREVENÇÃO & ROTINA ─────────────────────────────────────────────────────
  {
    id: 'prevencao',
    name: 'Prevenção & Rotina',
    emoji: '🛡️',
    gradient: 'grad-emerald',
    description: 'Vacinas, vermífugos, higiene e check-up preventivo',
    conditions: [
      {
        id: 'calendario-vacinas',
        name: 'Calendário de Vacinas',
        emoji: '💉',
        gradient: 'grad-emerald',
        description: 'Protocolo completo de vacinação por fase de vida',
        prevalence: 'Prevenção primária mais importante',
        protocols: [
          {
            id: 'vacinas-protocolo',
            title: 'Calendário Vacinal Canino',
            subtitle: 'Vacinas obrigatórias, opcionais e reforços anuais',
            stages: [
              { id: 's1', label: 'Filhote 45 dias', description: 'V8 ou V10 dose 1. Cobertura: cinomose, parvovirose, hepatite, parainfluenza, leptospirose e mais.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Filhote 60-75 dias', description: 'V8/V10 dose 2. Primeira antirrábica. Intervalo mínimo de 21 dias após dose 1.', color: '#10b981', urgency: 'low' },
              { id: 's3', label: 'Filhote 90-105 dias', description: 'V8/V10 dose 3 (completa a série primária). Reforço da antirrábica se necessário.', color: '#10b981', urgency: 'low' },
              { id: 's4', label: 'Adulto (anual)', description: 'Reforço V8/V10 + antirrábica + tosse dos canis (Bordetella) se frequenta pet shop, hotel, parque.', color: '#3b82f6', urgency: 'low' },
            ],
            triggers: [],
            homeSteps: [
              { title: 'Guarde a carteirinha', description: 'Carteirinha de vacinação é documento obrigatório para hotéis, pet shops e viagens internacionais. Guarde digital e físico.', duration: 'Sempre', icon: '📋' },
              { title: 'Reações pós-vacina', description: 'Normal: letargia leve, inchaço no local por 24-48h. Anormal (VET imediato): vômito, inchaço facial, urticária, dificuldade respiratória — reação alérgica.', duration: 'Pós-vacina', icon: '⚠️' },
              { title: 'Vacinas opcionais por risco', description: 'Leishmaniose: se região endêmica ou viagem. Giardia: se frequenta contato com outros cães. Leptospirose 10 sorotipos: se acesso a áreas alagadas.', duration: 'Conforme risco', icon: '💡' },
            ],
            vetAlert: [
              'Reação alérgica pós-vacina (minutos a horas após)',
              'Cão com suspeita de doença infecciosa não vacinado',
            ],
            prevention: [
              'Carnet vacinal atualizado e em dia',
              'Reforço antirrábica: anual (obrigatório por lei)',
              'Vermifugação a cada 3-6 meses em adultos',
              'Antipulgas/carrapatos mensalmente',
            ],
            myths: [
              { myth: '"Cão adulto saudável não precisa de reforço"', truth: 'A imunidade vacinal diminui. Reforço anual mantém proteção. Sem reforço, cão pode adoecer mesmo vacinado na infância.' },
            ],
            faq: [
              { q: 'Filhote pode sair na rua antes das vacinas?', a: 'Evitar solo público até completar a série (3 doses + 10 dias após última). Pode socializar com cães saudáveis vacinados em ambientes controlados.' },
              { q: 'Vacinas causam autismo em cães?', a: 'Não. Assim como em humanos, essa afirmação foi completamente descreditada cientificamente. Vacinas são a intervenção de saúde mais eficaz que existe.' },
            ],
          },
        ],
      },
      {
        id: 'higiene-dental',
        name: 'Saúde Dental',
        emoji: '🦷',
        gradient: 'grad-blue',
        description: 'Doença periodontal, tártaro e prevenção',
        prevalence: '80% dos cães >3 anos têm doença periodontal',
        protocols: [
          {
            id: 'dental-protocolo',
            title: 'Protocolo de Saúde Dental',
            subtitle: 'Escovação, prevenção e sinais de doença',
            stages: [
              { id: 's1', label: 'Placa (inicial)', description: 'Película bacteriana nos dentes. Reversível com escovação. Sem sintomas visíveis.', color: '#10b981', urgency: 'low' },
              { id: 's2', label: 'Tártaro', description: 'Placa mineralizada. Amarelo/marrom nos dentes. Possível mau hálito. Requer limpeza profissional.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's3', label: 'Doença Periodontal', description: 'Gengiva inflamada, sangrando, retração. Dor ao comer. Possível queda de dente.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Falta de escovação',
              'Dieta apenas úmida sem abrasão',
              'Predisposição racial (raças pequenas)',
              'Alimentação de restos humanos açucarados',
            ],
            homeSteps: [
              { title: 'Escovação diária', description: 'Dedo de borracha ou escova pequena + pasta enzimática canina (sabor carne/frango). Nunca pasta humana (flúor em excesso é tóxico). Foco na linha da gengiva, ângulo 45°.', duration: 'Diário', icon: '🪥' },
              { title: 'Introdução gradual', description: 'Dia 1-7: só dedo + pasta. Semana 2: dedo de borracha. Semana 3: escova. Nunca force — associação positiva é tudo.', duration: '3 semanas', icon: '📈' },
              { title: 'Ossos mastigatórios', description: 'Hilo dental canino, ossos de couro natural, dental chews aprovados por VOHC. A mastigação tem efeito abrasivo real. Nenhum substitui escovação mas complementam bem.', duration: 'Diário', icon: '🦴' },
              { title: 'Água dental', description: 'Aditivos para água que reduzem bactérias bucais. Não escovação, mas reduz placa em 20-30%. Adicionar ao bebedouro diariamente.', duration: 'Diário', icon: '💧' },
            ],
            vetAlert: [
              'Mau hálito muito intenso (indica doença periodontal avançada)',
              'Dificuldade para comer, preferência por comida mole',
              'Sangramento da gengiva ao tocar',
              'Dente movendo ou com abscesso',
            ],
            prevention: [
              'Escovação diária desde filhote',
              'Profilaxia veterinária anual (anestesia)',
              'Evitar açúcar e alimentos processados humanos',
              'Mastigatórios diários',
            ],
            myths: [
              { myth: '"Osso de frango cru limpa os dentes"', truth: 'Tem efeito abrasivo, mas raw feeding sem higiene bucal também causa tártaro. Além disso, osso cru pode rachar e criar risco de perfuração.' },
            ],
            faq: [
              { q: 'Limpeza veterinária é necessária?', a: 'Sim, anualmente para cães adultos. Requer anestesia geral — não há forma eficaz de fazer sem. O procedimento é seguro e essencial para saúde sistêmica (bactérias dentais entram na corrente sanguínea).' },
            ],
          },
        ],
      },
    ],
  },

  // ─── SAZONAIS ────────────────────────────────────────────────────────────────
  {
    id: 'sazonais',
    name: 'Sazonais',
    emoji: '🌦️',
    gradient: 'grad-indigo',
    description: 'Calor, frio, chuva e mudanças de estação',
    conditions: [
      {
        id: 'calor-verao',
        name: 'Calor & Verão',
        emoji: '☀️',
        gradient: 'grad-amber',
        description: 'Golpe de calor, patas quentes e cuidados no verão',
        prevalence: 'Emergência mais comum no verão',
        protocols: [
          {
            id: 'calor-protocolo',
            title: 'Protocolo do Verão',
            subtitle: 'Proteção contra calor e hidratação adequada',
            stages: [
              { id: 's1', label: 'Calor Excessivo (atenção)', description: 'Cão ofega muito. Frequência respiratória alta. Saliva excessiva. Letargia.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's2', label: 'Golpe de Calor (emergência)', description: 'Temperatura >40,5°C. Gengiva vermelha depois pálida. Vômito. Desorientação.', color: '#7f1d1d', urgency: 'emergency' },
            ],
            triggers: [
              'Carro fechado (temperatura sobe 10°C em 10 min)',
              'Exercício em horário de pico de calor',
              'Superfície de asfalto quente',
              'Raças braquicefálicas (Pug, Bulldog)',
              'Cão idoso, obeso ou com doença cardíaca',
            ],
            homeSteps: [
              { title: 'Horário seguro de passeio', description: 'Passeios apenas antes das 9h ou após as 18h no verão. Asfalto pode atingir 60°C às 12h — coloque a palma da mão por 5 segundos: se não aguentar, o cão também não.', duration: 'Sempre no verão', icon: '⏰' },
              { title: 'Hidratação constante', description: 'Cão de 20kg precisa de 1 litro de água/dia (mais no calor). Leve água em passeios. Adicione gelo aos bebedouros. Melancia gelada e sem casca é ótima fonte de hidratação.', duration: 'Diário', icon: '💧' },
              { title: 'Protetor solar canino', description: 'Cães de pelo branco ou pele rosada: protetor solar para pets nas orelhas, focinho e barriga. FPS 30+. Nunca protetor humano (zinco é tóxico para cães).', duration: 'Dias ensolarados', icon: '☀️' },
              { title: 'Emergência: resfriamento imediato', description: 'Mova para sombra/ar condicionado. Agua morna (não gelada) — gelada causa vasoconstrição e piora o quadro. Ventilador. Panos molhados no pescoço, axilas, virilha. VET imediato.', duration: 'Emergência', icon: '🌡️' },
            ],
            vetAlert: [
              'Temperatura retal >40,5°C',
              'Gengiva muito vermelha ou pálida',
              'Vômito + letargia + respiração difícil',
              'Colapso ou inconsciência',
            ],
            prevention: [
              'Nunca deixar em carro fechado',
              'Passeios nos horários frescos',
              'Acesso à água constante',
              'Tosa sanitária (não deixar muito curto — pelo protege)',
            ],
            myths: [
              { myth: '"Tosar rente no verão refresca o cão"', truth: 'Pelo serve como isolamento térmico em ambos os sentidos. Tosar demais remove proteção contra UV e pode aumentar risco de golpe de calor em alguns cães.' },
            ],
            faq: [
              { q: 'Patas no asfalto quente causam queimadura?', a: 'Sim. Bolhas, vermelhidão e dor intensa. Teste: 5 segundos com a palma da mão no asfalto. Se você não aguentar, o cão também não. Use calçada na sombra ou protetores de pata.' },
            ],
          },
        ],
      },
      {
        id: 'frio-inverno',
        name: 'Frio & Inverno',
        emoji: '❄️',
        gradient: 'grad-blue',
        description: 'Hipotermia, artrite e cuidados no frio',
        prevalence: 'Subestimado pelos tutores brasileiros',
        protocols: [
          {
            id: 'frio-protocolo',
            title: 'Protocolo do Inverno',
            subtitle: 'Proteção contra frio e artrite sazonal',
            stages: [
              { id: 's1', label: 'Desconforto no Frio', description: 'Tremores, reluctância para sair, busca por agasalho. Normal em raças de pelo curto abaixo de 10°C.', color: '#f59e0b', urgency: 'low' },
              { id: 's2', label: 'Hipotermia Leve', description: 'Tremores intensos, letargia, temperatura <37°C. Emergência se não aquecer.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Raças de pelo curto (Dachshund, Beagle, Chihuahua)',
              'Filhotes e idosos (regulação térmica comprometida)',
              'Cão molhado com vento',
              'Dormir no piso frio sem isolamento',
            ],
            homeSteps: [
              { title: 'Agasalho adequado', description: 'Raças sem subcamada densa (Pinscher, Dachshund, Yorkshire, Whippet): roupa é necessidade médica, não frescura. Cão que treme no frio precisa de agasalho.', duration: 'Quando necessário', icon: '🧥' },
              { title: 'Cama elevada e aquecida', description: 'Piso frio em contato direto piora artrite e causa hipotermia. Cama elevada com material isolante (lã, espuma). Cobertores extras no inverno.', duration: 'Noites frias', icon: '🛏️' },
              { title: 'Artrite sazonal', description: 'Cão idoso que anda mais devagar no inverno: artrite agrava no frio. Suplementação com glucosamina + condroitina, ômega-3 e calor local ajudam muito. Consulte veterinário.', duration: 'Inverno', icon: '🦴' },
              { title: 'Aquecimento de hipotermia', description: 'Cobertores mornos. Bolsa de água quente (não quente demais) no abdômen. Bebida morna. Nunca secador muito quente. VET se não melhorar em 30 min.', duration: 'Emergência', icon: '♨️' },
            ],
            vetAlert: [
              'Tremores que não cessam com aquecimento',
              'Temperatura retal <37°C',
              'Cão que não consegue se levantar no frio',
              'Articulações muito inchadas',
            ],
            prevention: [
              'Agasalho para raças de pelo curto',
              'Cama longe do chão e de correntes de ar',
              'Passeios mais curtos em dias muito frios',
              'Suplementação de articulações em idosos',
            ],
            myths: [
              { myth: '"Cão tem pelo, então não precisa de agasalho"', truth: 'Depende da raça, idade e temperatura. Um Chihuahua com 5°C está tão desconfortável quanto um humano em mangas de camisa no mesmo ambiente.' },
            ],
            faq: [
              { q: 'Rações devem ser ajustadas no inverno?', a: 'Cães que vivem ao ar livre podem precisar de 10-15% mais calorias no frio para manter temperatura. Cães de apartamento: geralmente não muda.' },
            ],
          },
        ],
      },
    ],
  },

  // ─── ARTICULAÇÕES & MOVIMENTO ───────────────────────────────────────────────
  {
    id: 'articulacoes',
    name: 'Articulações & Movimento',
    emoji: '🦴',
    gradient: 'grad-indigo',
    description: 'Artrite, displasia, luxação e problemas ortopédicos',
    conditions: [
      {
        id: 'artrite',
        name: 'Artrite & Displasia',
        emoji: '🦴',
        gradient: 'grad-indigo',
        description: 'A dor silenciosa mais subestimada em cães',
        prevalence: '20% dos cães adultos, 80% dos idosos',
        protocols: [
          {
            id: 'artrite-protocolo',
            title: 'Protocolo de Articulações',
            subtitle: 'Reconhecimento, manejo da dor e qualidade de vida',
            stages: [
              { id: 's1', label: 'Leve', description: 'Rigidez ao levantar após descanso. Diminuição do entusiasmo para passeios. Sobe/desce escadas com mais cuidado.', color: '#f59e0b', urgency: 'moderate' },
              { id: 's2', label: 'Moderado', description: 'Claudicação visível. Relutância para certos movimentos. Lambe articulação específica. Geme ao deitar.', color: '#f97316', urgency: 'high' },
              { id: 's3', label: 'Grave', description: 'Recusa-se a subir móveis ou escadas. Postura antálgica. Perda de músculo por desuso. Dor constante.', color: '#ef4444', urgency: 'high' },
            ],
            triggers: [
              'Envelhecimento (artrite degenerativa)',
              'Displasia coxofemoral/cotovelo (genética)',
              'Obesidade (pressão extra nas articulações)',
              'Trauma ou lesão anterior',
              'Raças grandes (Golden, Rottweiler, Labrador)',
              'Infecção articular (artrite séptica)',
            ],
            homeSteps: [
              { title: 'Reconheça os sinais sutis', description: 'Cão artrítico raramente vocaliza a dor. Procure: hesitação antes de pular, levantar mais devagar de manhã, preferência por superfície macia, evitar brincadeiras que antes amava.', duration: 'Observação diária', icon: '🔍' },
              { title: 'Controle de peso rigoroso', description: 'Cada 1kg a menos = redução de 4kg de pressão nas articulações traseiras. No artrítico, peso é o fator modificável mais impactante na dor.', duration: 'Contínuo', icon: '⚖️' },
              { title: 'Suplementação de base', description: 'Glucosamina 20mg/kg + condroitina 16mg/kg/dia. Ômega-3 (EPA/DHA): redução documentada de inflamação articular. Resultados em 6-8 semanas de uso contínuo.', duration: 'Diário', icon: '💊' },
              { title: 'Adaptações ambientais', description: 'Rampas em vez de degraus. Cama ortopédica com espuma viscoelástica. Tapetes anti-derrapante no piso liso. Comedouro elevado (reduz carga no pescoço).', duration: 'Permanente', icon: '🏠' },
              { title: 'Exercício adequado', description: 'Parar exercício é pior que continuar (músculo sustenta a articulação). Natação é ideal: exercita sem impacto. Caminhadas curtas e frequentes > caminhada longa esporádica.', duration: 'Diário', icon: '🏊' },
              { title: 'Calor local', description: 'Compressa morna nas articulações afetadas por 10-15 min antes de atividade. Melhora circulação e reduz rigidez matinal. Nunca gelo em artrite crônica.', duration: 'Manhãs', icon: '♨️' },
            ],
            vetAlert: [
              'Claudicação de início súbito (pode ser fratura ou ligamento)',
              'Articulação muito inchada e quente (infecção/trauma)',
              'Cão que cai ou não consegue se levantar',
              'Dor que não responde à suplementação após 8 semanas',
            ],
            prevention: [
              'Peso ideal durante toda a vida',
              'Exercício moderado e regular desde filhote',
              'Não forçar filhotes de raças grandes a saltos altos',
              'Triagem genética para displasia em criadores',
            ],
            myths: [
              { myth: '"Artrite é parte normal de ficar velho — não tem o que fazer"', truth: 'Artrite é tratável. Manejo adequado de peso, suplementação e analgesia mantém qualidade de vida excelente por muitos anos.' },
            ],
            faq: [
              { q: 'Posso dar ibuprofeno ou paracetamol?', a: 'NUNCA. Ibuprofeno é extremamente tóxico para cães (causa insuficiência renal). Paracetamol causa dano hepático fatal. Use apenas AINEs veterinários com prescrição (meloxicam, carprofeno).' },
              { q: 'Fisioterapia funciona para cães?', a: 'Sim. Fisioterapia veterinária, hidroterapia e acupuntura têm evidência científica para artrite canina. Pergunte ao veterinário sobre indicação.' },
            ],
          },
        ],
      },
    ],
  },
];

export const getAllConditions = (): Condition[] =>
  categories.flatMap(c => c.conditions);

export const getConditionById = (id: string): Condition | undefined =>
  getAllConditions().find(c => c.id === id);

export const getCategoryById = (id: string): Category | undefined =>
  categories.find(c => c.id === id);

export const getProtocolById = (conditionId: string, protocolId: string) =>
  getConditionById(conditionId)?.protocols.find(p => p.id === protocolId);
