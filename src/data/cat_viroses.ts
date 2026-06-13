import type { Category } from './types';

export const catViroses: Category = {
  id: 'viroses', name: 'Viroses', emoji: '🦠', gradient: 'g-red',
  description: 'Cinomose, parvovirose tipo 2, coronavírus canino e hepatite infecciosa',
  conditions: [
    {
      id: 'cinomose', name: 'Cinomose', emoji: '🧠', gradient: 'g-red',
      description: 'Vírus do paramixovírus — uma das doenças virais mais letais e preveníveis em cães',
      prevalence: 'Muito comum em cães não vacinados; mortalidade até 50-70% sem tratamento',
      protocols: [{
        id: 'p1', title: 'Protocolo Cinomose', subtitle: 'Suporte intensivo, controle de sintomas e prevenção por vacina',
        stages: [
          { id: 's1', label: 'Fase Inicial', urgency: 'high', description: 'Sintomas respiratórios e oculares 3-6 dias após infecção.', signs: ['Secreção ocular mucopurulenta', 'Espirros e tosse', 'Febre 39,5-41°C', 'Anorexia e letargia', 'Diarreia inicialmente'] },
          { id: 's2', label: 'Fase Neurológica', urgency: 'emergency', description: 'Invasão do SNC — tremores, convulsões e ataxia.', signs: ['Tremores musculares (mioclonias)', 'Convulsões', 'Ataxia e andar em círculos', 'Paralisia progressiva', 'Hiperqueratose dos coxins ("nariz/pata dura")'] },
        ],
        triggers: ['Vírus canino morbillivírus — altamente contagioso', 'Contato com secreções de cão infectado', 'Cães não vacinados ou com vacinação incompleta/vencida', 'Filhotes 3-6 meses mais suscetíveis'],
        steps: [
          { title: 'Tratamento de suporte intensivo', icon: '🏥', duration: 'Hospitalização',
            description: 'Não há antiviral específico. O suporte é fundamental para a sobrevivência.',
            checklist: ['Fluidoterapia IV para correção de desidratação', 'Antibioticoterapia contra infecções bacterianas secundárias', 'Antieméticos (metoclopramida, ondansetrona)', 'Nutrição enteral se anorexia > 48h', 'Limpeza de secreções oculares e nasais com soro'] },
          { title: 'Controle neurológico', icon: '🧠', duration: 'Se neurológico',
            description: 'Fenobarbital ou diazepam para convulsões. Prognóstico ruim se sinais neurológicos presentes.',
            checklist: ['Fenobarbital 2-5mg/kg VO para controle de convulsões', 'Diazepam IV 0,5mg/kg na crise aguda', 'Isolamento rigoroso — vírus altamente contagioso', 'Desinfecção com hipoclorito 1:30', 'Quarentena 3 semanas mínimo'] },
        ],
        checklists: [
          { label: 'Cuidados Diários em Casa', freq: 'daily', items: ['Limpou olhos e nariz com soro?', 'Cão bebeu água?', 'Febre medida?', 'Convulsões ou tremores?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Hospitalização', tasks: ['Internação imediata', 'IV, antibiótico, antiemético', 'Isolamento do restante dos cães'], note: 'Vírus sobrevive semanas no ambiente' },
          { day: 2, label: 'Dia 2 — Monitoramento Intensivo', tasks: ['Temperatura 2x/dia', 'Hidratação — turgor de pele', 'Secreções oculares: limpar e quantificar', 'Diarreia persiste?'], note: 'Piora nas primeiras 48h é esperada' },
          { day: 3, label: 'Dia 3 — Avaliação Neurológica', tasks: ['Tremores ou mioclonias?', 'Andar em círculos ou ataxia?', 'Convulsões? Descrever duração'], note: 'Fase neurológica pode surgir dias após febre' },
          { day: 4, label: 'Dia 4 — Nutrição', tasks: ['Cão está comendo?', 'Se não, sonda nasogástrica?', 'Oferecer alimento palatável e morno'], note: 'Manutenção nutricional crítica para imunidade' },
          { day: 5, label: 'Dia 5 — Sinais de Melhora?', tasks: ['Febre diminuindo?', 'Secreções reduzindo?', 'Cão mais ativo?', 'Neurológico estável?'], note: 'Melhora gradual esperada se sem neurológico' },
          { day: 6, label: 'Dia 6 — Alta ou Continuação', tasks: ['Temperatura normal (38-39°C)?', 'Come e bebe sem auxílio?', 'Sem convulsões 48h?'], note: 'Alta com antibiótico oral e retorno em 5 dias' },
          { day: 7, label: 'Dia 7 — Vacinação dos Contatos', tasks: ['Outros cães vacinados?', 'Cães de vizinhos alertados?', 'Ambiente desinfectado?'], note: 'Filhotes contactantes devem ser vacinados urgente' },
        ],
        vetAlert: ['Convulsões repetitivas', 'Paralisia progressiva', 'Cão para de comer por > 48h'],
        prevention: ['Vacinação polivalente (V8/V10) em dia — ÚNICA proteção efetiva', 'Dose inicial 45-50 dias + reforços a cada 3-4 semanas até 16 semanas', 'Reforço anual ou triienal conforme protocolo do médico vet'],
        myths: [
          { myth: 'Cinomose com nariz seco é cinomose', truth: 'Nariz seco pode ter centenas de causas. A cinomose causa descarga nasal mucopurulenta e sintomas sistêmicos. Nariz seco isolado não é cinomose.' },
        ],
        faq: [
          { q: 'Cão com cinomose sobrevivente pode ficar com sequelas?', a: 'Sim. Mioclonias (tremores musculares) e hiperqueratose dos coxins são sequelas permanentes em muitos sobreviventes. Convulsões podem persistir. Mas com medicação, qualidade de vida pode ser boa.' },
        ],
      }],
    },
    {
      id: 'coronavirus-enterico', name: 'Coronavírus Entérico Canino', emoji: '🌀', gradient: 'g-amber',
      description: 'Coronavírus entérico canino — causa gastroenterite geralmente leve em adultos',
      prevalence: 'Comum — adultos toleram bem; perigoso em filhotes jovens',
      protocols: [{
        id: 'p1', title: 'Protocolo CCoV', subtitle: 'Suporte digestivo e prevenção em filhotes',
        stages: [
          { id: 's1', label: 'Leve (Adulto)', urgency: 'low', description: 'Diarreia autolimitada em adultos vacinados.', signs: ['Diarreia amarelada com muco', 'Vômito ocasional', 'Discreta letargia', 'Febre baixa ou ausente', 'Resolve em 3-7 dias'] },
          { id: 's2', label: 'Grave (Filhote)', urgency: 'high', description: 'Filhotes < 12 semanas podem desenvolver forma grave.', signs: ['Diarreia hemorrágica', 'Desidratação rápida', 'Prostração e hipoglicemia', 'Semelhante à parvovirose'] },
        ],
        triggers: ['Contato com fezes de cão infectado', 'Filhotes não vacinados mais vulneráveis', 'Stress e superpopulação ampliam disseminação'],
        steps: [
          { title: 'Suporte digestivo', icon: '🍚', duration: '3-5 dias',
            description: 'Dieta bland, hidratação, antidiarreico.',
            checklist: ['Dieta bland: frango cozido + arroz branco por 5-7 dias', 'Probiótico (Proviable, FortiFlora) 2x/dia', 'Hidratação oral se sem vômito', 'Fluidos subcutâneos ou IV se desidratado', 'Antieméticos se vômito persistente'] },
        ],
        checklists: [
          { label: 'Acompanhamento Diário', freq: 'daily', items: ['Fezes normalizando?', 'Cão bebe água?', 'Dieta bland sendo mantida?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Suporte', tasks: ['Dieta bland iniciada', 'Probiótico dado', 'Hidratação oral ou IV'] },
          { day: 2, label: 'Dia 2 — Evolução', tasks: ['Diarreia melhorou?', 'Vômito resolveu?', 'Cão ativo?'] },
          { day: 3, label: 'Dia 3 — Transição', tasks: ['Fezes tomando forma?', 'Começar transição gradual para ração normal'], note: 'Transition 25% por dia' },
          { day: 4, label: 'Dia 4 — Normalização', tasks: ['50% ração + 50% dieta bland', 'Probiótico continua'] },
          { day: 5, label: 'Dia 5 — Alta da Dieta', tasks: ['75% ração normal', 'Fezes normais?'] },
          { day: 6, label: 'Dia 6 — Ração Normal', tasks: ['100% ração habitual', 'Continua probiótico por mais 7 dias'] },
          { day: 7, label: 'Dia 7 — Resolução', tasks: ['Cão saudável?', 'Fezes completamente normais?', 'Vacinação em dia?'] },
        ],
        vetAlert: ['Filhote com diarreia hemorrágica', 'Desidratação grave', 'Filhote prostrado'],
        prevention: ['Vacina contra coronavírus entérico disponível (controversa, não considerada core)', 'Higiene rigorosa e limpeza de canis'],
        myths: [
          { myth: 'Coronavírus canino é igual ao COVID-19', truth: 'São vírus completamente diferentes. O coronavírus entérico canino (CCoV) é um alfacoronavírus que não infecta humanos e causa apenas gastroenterite.' },
        ],
        faq: [
          { q: 'Devo vacinar meu cão contra coronavírus?', a: 'A vacina anti-CCoV não é considerada vacina essencial (core) pela maioria das organizações veterinárias. Consulte seu médico vet sobre o perfil de risco do seu animal.' },
        ],
      }],
    },
    {
      id: 'herpesvirus-neonatal', name: 'Herpesvírus Neonatal Canino', emoji: '🍼', gradient: 'g-purple',
      description: 'CHV-1 — síndrome da morte neonatal em filhotes < 3 semanas de vida',
      prevalence: 'Até 80% dos cães são soropositivos; mortalidade neonatal pode chegar a 100% da ninhada',
      protocols: [{
        id: 'p1', title: 'Protocolo CHV-1 Neonatal', subtitle: 'Calor, aciclovir neonatal e suporte intensivo',
        stages: [
          { id: 's1', label: 'Adulto (Portador)', urgency: 'low', description: 'Infecção genital discreta em adultos.', signs: ['Vesículas genitais discretas', 'Descarga nasal leve', 'Geralmente assintomático em adultos'] },
          { id: 's2', label: 'Neonatal Sistêmico', urgency: 'emergency', description: 'Filhotes < 3 semanas: falência multissistêmica.', signs: ['Filhote que pare de mamar', 'Choro contínuo (filhote "pedindo socorro")', 'Hipotermia', 'Diarreia amarelada', 'Morte em 24-48h sem tratamento'] },
        ],
        triggers: ['Cadela soropositiva — vírus latente em gânglios nervosos', 'Estresse do parto reativa o vírus', 'Filhotes expostos nas primeiras 3 semanas de vida'],
        steps: [
          { title: 'Calor e suporte neonatal', icon: '🔥', duration: 'Crítico',
            description: 'O vírus se replica em temperaturas < 37°C. Manter filhote a 36-38°C inibe a replicação.',
            checklist: ['Manter filhote a 36-38°C (incubadora ou bolsa de água morna)', 'Aciclovir 2,5mg/kg VO a cada 6h nos sobreviventes', 'Soro para filhotes — manter glicemia', 'Soro hiperimune se disponível (anticorpos da mãe imune)', 'Separar filhotes doentes dos sadios'] },
        ],
        checklists: [
          { label: 'Cuidados Neonatais Urgentes', freq: 'daily', items: ['Temperatura da caixa neonatal: 36-38°C?', 'Filhote mamando?', 'Peso diário (deve ganhar ~5% ao dia)?', 'Diarreia ou choro constante?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Alerta Neonatal', tasks: ['Filhotes pesados e temperatura medida', 'Caixa aquecida a 36-38°C imediatamente', 'Aciclovir iniciado em afetados'], note: 'Cada hora importa — agir imediatamente' },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Peso de cada filhote', 'Filhote ganha > 5g/dia?', 'Temperatura corporal > 36°C?'] },
          { day: 3, label: 'Dia 3 — Evolução', tasks: ['Filhotes parecem mais fortes?', 'Mamam vigorosamente?', 'Cor das mucosas rosada?'], note: 'Sobreviventes < 3 semanas têm risco de sequelas neurológicas' },
          { day: 4, label: 'Dia 4 — Aciclovir', tasks: ['Aciclovir continuado?', 'Veterinário avalia dose e resposta', 'Outros filhotes da ninhada monitorados?'] },
          { day: 5, label: 'Dia 5 — Estabilização', tasks: ['Peso aumentando consistentemente?', 'Diarreia resolvida?', 'Temperatura ambiental mantida?'] },
          { day: 6, label: 'Dia 6 — 3 Semanas de Vida', tasks: ['Filhotes > 3 semanas têm temperatura corporal estável', 'Risco de mortalidade cai significativamente'], note: 'Após 3 semanas, termorregulação melhora' },
          { day: 7, label: 'Dia 7 — Avaliação Neurológica', tasks: ['Filhotes com coordenação normal?', 'Sequelas neurológicas serão aparentes', 'Vacinação da cadela para próxima ninhada?'], note: 'Vacina CHV-1 disponível (Eurican Herpes 205) para cadelas gestantes' },
        ],
        vetAlert: ['Filhote que para de mamar de repente', 'Choro contínuo > 1 hora', 'Filhote com hipotermia < 35°C'],
        prevention: ['Vacina CHV-1 (Eurican Herpes 205) — 2 doses na gestação', 'Quarentena de cadelas antes do acasalamento', 'Isolar fêmea gestante de cães desconhecidos'],
        myths: [
          { myth: '"Um filhote morreu de fraqueza" é normal em ninhadas grandes', truth: 'Síndrome da morte neonatal agrupada (2+ filhotes em 24-48h) deve suspeitar de herpesvírus — é uma emergência reprodutiva.' },
        ],
        faq: [
          { q: 'A cadela que perdeu a ninhada pode ter filhotes saudáveis depois?', a: 'Sim. Cadelas que sobreviveram ao CHV-1 desenvolvem imunidade e anticorpos que protegem ninhadas futuras. A vacina durante próximas gestações aumenta ainda mais a proteção dos filhotes.' },
        ],
      }],
    },
    {
      id: 'adenovirus', name: 'Hepatite Infecciosa Canina (Adenovírus)', emoji: '🏥', gradient: 'g-orange',
      description: 'CAV-1 — hepatite viral aguda — prevenível pela vacina polivalente',
      prevalence: 'Raro em vacinados; pode ser fulminante em filhotes não vacinados',
      protocols: [{
        id: 'p1', title: 'Protocolo CAV-1', subtitle: 'Suporte hepático, correção de coagulopatia e prevenção',
        stages: [
          { id: 's1', label: 'Aguda Leve', urgency: 'high', description: 'Hepatite aguda com icterícia e febre.', signs: ['Febre alta 40-41°C', 'Icterícia (mucosas amarelas)', 'Dor abdominal cranial', 'Vômito e diarreia hemorrágica', 'Olhos azulados — edema de córnea (patognomônico)'] },
          { id: 's2', label: 'Fulminante', urgency: 'emergency', description: 'CID e morte em horas em filhotes.', signs: ['Coagulopatia intravascular disseminada', 'Sangramento espontâneo', 'Encefalopatia hepática', 'Morte em 24-48h'] },
        ],
        triggers: ['CAV-1 — Adenovírus canino tipo 1', 'Cão não vacinado exposto a fezes, urina, saliva de infectado', 'Filhotes < 6 meses mais vulneráveis'],
        steps: [
          { title: 'Suporte hepático intensivo', icon: '🏥', duration: 'Hospitalização',
            description: 'Não há antiviral. Suporte hepático e controle de coagulopatia são chave.',
            checklist: ['Fluidos IV — evitar lactato de Ringer (metabolismo hepático comprometido)', 'SAMe 90mg/kg/dia (hepatoprotetor)', 'Vitamina K1 1,5mg/kg SC (coagulopatia)', 'Plasma fresco congelado se CID', 'Ranitidina ou omeprazol (proteção gástrica)', 'Dieta hepática: baixo teor proteico de alta qualidade'] },
        ],
        checklists: [
          { label: 'Monitoramento Hepático', freq: 'daily', items: ['Icterícia (olhos, mucosas, pele)?', 'Cão bebe e come?', 'Fezes/urina de cor normal?', 'Olhos azulados diminuindo?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Hospitalização Urgente', tasks: ['Internação e IV imediatos', 'Vitamina K1 subcutânea', 'SAMe hepático iniciado'], note: 'Olho azul = edema de córnea = CAV-1 até prova em contrário' },
          { day: 2, label: 'Dia 2 — Coagulograma', tasks: ['TP e TTPa para avaliar coagulação', 'Plasma fresco se coagulopatia grave', 'Hepatoprotetores em dose'], note: 'CID é a principal causa de morte' },
          { day: 3, label: 'Dia 3 — Função Hepática', tasks: ['ALT e bilirrubina de controle', 'Icterícia melhorando?', 'Encefalopatia hepática (ataxia, confusão)?'] },
          { day: 4, label: 'Dia 4 — Alimentação', tasks: ['Dieta hepática iniciada', 'Comer voluntariamente?', 'Lactulose se constipação ou encefalopatia'] },
          { day: 5, label: 'Dia 5 — Recuperação?', tasks: ['Cão mais ativo?', 'Icterícia diminuindo?', 'Olho azul resolvendo?'], note: 'Edema de córnea resolve espontaneamente' },
          { day: 6, label: 'Dia 6 — Alta?', tasks: ['Comer sem sonda', 'Bilirrubina < 2mg/dL', 'Sem coagulopatia ativa'] },
          { day: 7, label: 'Dia 7 — Alta + Controle', tasks: ['Enzimas hepáticas de controle em 2 semanas', 'SAMe oral por 60 dias', 'Vacinação de contatos não vacinados'], note: 'Vacina V8/V10 inclui CAV-2 que também protege contra CAV-1' },
        ],
        vetAlert: ['Sangramento espontâneo (nariz, gengiva)', 'Cão prostrado com icterícia', 'Sinais neurológicos (encefalopatia hepática)'],
        prevention: ['Vacina polivalente V8 ou V10 inclui proteção contra adenovírus — ESSENCIAL', 'Vacinação completa em filhotes e reforços anuais'],
        myths: [
          { myth: 'Olho azul em cão é problema ocular', truth: 'Olho azul (edema de córnea unilateral ou bilateral) em filhote febril é sinal quase patognomônico de hepatite por adenovírus. É emergência infecciosa.' },
        ],
        faq: [
          { q: 'A vacina contra hepatite está na V8?', a: 'Sim. A vacinação polivalente V8 (ou V10) inclui adenovírus tipo 2 (CAV-2) que confere proteção cruzada contra CAV-1, o agente da hepatite infecciosa. Manter vacinação em dia é a principal prevenção.' },
        ],
      }],
    },
  ],
};
