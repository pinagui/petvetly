import type { Category } from './types';
export const catEstresseAmbiental: Category = {
  id: 'estresse-ambiental', name: 'Medo, Fobia e Estresse Situacional', emoji: '😰', gradient: 'g-purple',
  description: 'Medo de fogos de artifício, trovão, veterinário e situações estressantes',
  conditions: [
    {
      id: 'fobia-ruidos', name: 'Fobia de Ruídos (Fogos, Trovão)', emoji: '💥', gradient: 'g-red',
      description: 'Medo intenso de fogos e trovão — uma das principais causas de fuga e estresse canino',
      prevalence: 'Estima-se que 40-50% dos cães têm algum grau de medo de ruídos; Réveillon e São João são os picos de fugas',
      protocols: [{
        id: 'p1', title: 'Protocolo Fobia de Ruídos', subtitle: 'Protocolo de segurança, dessensibilização e medicação preventiva',
        stages: [
          { id: 's1', label: 'Medo Moderado', urgency: 'moderate', description: 'Esconde, treme, mas não se fere.', signs: ['Esconde embaixo da cama', 'Tremores', 'Salivação', 'Busca o tutor', 'Para de comer'] },
          { id: 's2', label: 'Fobia Grave', urgency: 'high', description: 'Pânico com risco de fuga e autolesão.', signs: ['Tenta arranhar janelas e portas', 'Pânico total', 'Escapa do quintal', 'Se machuca ao tentar sair', 'Defeca e urina de medo'] },
        ],
        triggers: ['Fogos de artifício', 'Trovão', 'Fogos de São João, Réveillon, carnaval', 'Obras próximas', 'Tiros'],
        steps: [
          { title: 'Protocolo de segurança e manejo agudo', icon: '🛡️', duration: 'Preventivo + agudo',
            description: 'Medicação preventiva + ambiente seguro + dessensibilização de longo prazo.',
            checklist: ['SEGURANÇA: cão seguro, sem acesso ao exterior durante os fogos', 'Quarto com menos janelas, ambiente escuro e abafado', 'Som branco ou música relaxante (Through a Dog\'s Ear)', 'Veterinário: trazodona, gabapentina ou clonazepam profilático antes dos fogos', 'Thundershirt/roupa de pressão: reduz ansiedade em alguns cães', 'DAP (Adaptil): feromona sintética antiansiosa', 'NÃO punir ou prender o cão em fobia — piora'] },
        ],
        checklists: [{ label: 'Plano para Noite de Fogos', freq: 'daily', items: ['Cão seguro dentro de casa?', 'Medicação dada com antecedência?', 'Janelas e portas travadas?', 'Microchip e plaquinha atualizados?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação do Medo', tasks: ['Grau de medo: 1-10', 'Comportamento específico durante fobia', 'Histórico: sempre foi assim?'], note: 'Fobia de ruídos geralmente piora com a idade sem tratamento' },
          { day: 2, label: 'Dia 2 — Veterinário', tasks: ['Médico veterinário comportamentalista?', 'Trazodona, gabapentina: escolha individualizada', 'Usar ANTES do evento (60-90 min de antecedência)'] },
          { day: 3, label: 'Dia 3 — Ambiente Seguro', tasks: ['Quarto mais isolado da casa', 'Coberta pesada (pressão)', 'Companhia do tutor: reduz ansiedade?'], note: 'Consolar o cão com medo NÃO reforça o medo — é falso mito' },
          { day: 4, label: 'Dia 4 — Dessensibilização', tasks: ['Sons de trovão/fogos no YouTube em volume baixo?', 'Petisco/brincadeira simultânea', 'Progressão gradual ao longo de semanas'] },
          { day: 5, label: 'Dia 5 — Thundershirt', tasks: ['Thundershirt ou body wrap DIY', 'Aplicar com pressão moderada no tórax', 'Testar ANTES do evento estressante?'] },
          { day: 6, label: 'Dia 6 — DAP', tasks: ['Difusor Adaptil: ligar dias antes do evento', 'Spray na coberta do cão', 'Coleira Adaptil: uso contínuo em cães ansiosos crônicos'] },
          { day: 7, label: 'Dia 7 — Plano de Réveillon/São João', tasks: ['Medicação profilática com receita disponível?', 'Ambiente seguro preparado?', 'Microchip atualizado?', 'Família instruída no protocolo?'] },
        ],
        vetAlert: ['Cão que se fere ao tentar escapar durante fobia', 'Crise de pânico que não cede após 2h', 'Comportamento de fobia se generalizando para outros estímulos'],
        prevention: ['Dessensibilização gradual ao longo de meses (off-season)', 'Medicação profilática para eventos previstos', 'Microchip e plaquinha: segurança em fuga durante fobia'],
        myths: [{ myth: 'Não devo consolar o cão com medo — isso reforça o comportamento', truth: 'FALSO. Consolar um cão com medo não reforça o medo — ele já está com medo, o consolo não cria novos medos. Ficar presente e tranquilizador é benéfico. O que piora a fobia é punir o cão ou forçar a exposição.' }],
        faq: [
          { q: 'Qual medicamento dar para cão com medo de fogos?', a: 'Veterinário prescreve individualmente: trazodona (3-7mg/kg 1-2h antes), gabapentina (10-20mg/kg 2h antes), alprazolam (casos graves com vet comportamentalista). Nunca ACP (acepromazina) sozinha — bloqueia motor sem reduzir ansiedade, causando sofrimento maior.' },
          { q: 'Acepromazina é boa para cão com medo de fogos?', a: 'NÃO. Acepromazina sedar o cão mas não trata a ansiedade — cão permanece aterrorizado mas incapaz de se mover. Experiência traumática intensa. Nunca usar ACP como único tratamento para fobia. Somente como pré-medicação cirúrgica combinada a outros sedativos.' },
        ],
      }],
    },
    {
      id: 'medo-veterinario', name: 'Medo do Veterinário', emoji: '🏥', gradient: 'g-blue',
      description: 'Cão que fica agressivo ou em pânico na clínica — técnicas fear-free',
      prevalence: '60% dos tutores relatam que seus cães têm medo do veterinário; 40% evitam consultas por isso',
      protocols: [{
        id: 'p1', title: 'Protocolo Fear-Free Veterinário', subtitle: 'Visitas de dessensibilização, medicação pré-consulta e clínicas Fear-Free',
        stages: [
          { id: 's1', label: 'Medo Leve', urgency: 'low', description: 'Cão tenso mas controlável.', signs: ['Tremores na sala de espera', 'Ofega mais que o normal', 'Para de comer na clínica', 'Resistência ao exame'] },
          { id: 's2', label: 'Medo Grave e Agressividade', urgency: 'moderate', description: 'Cão que morde durante exame.', signs: ['Morde ao ser tocado no veterinário', 'Precisa de focinheira', 'Agressão preventiva', 'Pânico completo'] },
        ],
        triggers: ['Cheiro da clínica', 'Mesa de exame de aço fria', 'Barulhos de outros animais', 'Contenção física', 'Experiências anteriores dolorosas'],
        steps: [
          { title: 'Estratégia Fear-Free', icon: '💙', duration: 'Construção gradual',
            description: 'Visitas positivas sem exame + medicação pré-consulta + clínica Fear-Free.',
            checklist: ['Visitas positivas sem exame: entrar, petisco, sair (repeat weekly)', 'Pesagem voluntária: cão sobe na balança, ganha petisco', 'Veterinário: juntar petiscos sem fazer procedimento na 1ª visita', 'Trazodona/gabapentina: pré-medicação 90 min antes da consulta real', 'Frango desfiado ou patê: petisco de altíssimo valor no consultório', 'Maca coberta com antiderrapante e cobertura macia', 'Certificação Fear-Free: clínica treinada para baixo estresse'] },
        ],
        checklists: [{ label: 'Preparação para Consulta', freq: 'daily', items: ['Visita de dessensibilização realizada essa semana?', 'Medicação pré-consulta prescrita?', 'Petisco de alto valor preparado para a consulta?', 'Jejum leve (fome aumenta motivação por comida)?'] }],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Visita Positiva', tasks: ['Entrar na clínica, ganhar petisco na recepção, sair', 'Sem exame, sem contenção, sem agulha', 'Repetir 1x por semana por 1 mês'] },
          { day: 2, label: 'Dia 2 — Pesagem Voluntária', tasks: ['Cão sobe na balança voluntariamente?', 'Petisco no meio da balança', 'Nenhuma pressão física — aguardar'] },
          { day: 3, label: 'Dia 3 — Toques de Manuseio', tasks: ['Em casa: simular exame (orelhas, patas, abdômen) com petisco', 'Praticar "open mouth" com recompensa', 'Fazer em casa o que será feito no veterinário?'] },
          { day: 4, label: 'Dia 4 — Medicação', tasks: ['Veterinário: trazodona ou gabapentina antes da consulta?', 'Dar 90 min antes (não 10 min antes!)', 'Jejum de 4h antes para maior interesse em petisco'] },
          { day: 5, label: 'Dia 5 — Dia da Consulta', tasks: ['Chegada tranquila (sem urgência)', 'Cão senta no colo do tutor se possível (não no chão frio)', 'Petisco liberado durante todo o exame'], note: 'Cão comendo durante exame: sinal de que o medo está controlado' },
          { day: 6, label: 'Dia 6 — Debriefing', tasks: ['Consulta foi melhor que a última?', 'O que funcionou bem?', 'Ajustar protocolo para próxima vez'] },
          { day: 7, label: 'Dia 7 — Longo Prazo', tasks: ['Visita positiva semanal como hábito', 'Clínica Fear-Free certificada na sua cidade?', 'Veterinário a domicílio para casos de medo grave?'] },
        ],
        vetAlert: ['Cão que morde sem aviso durante exame (baixo limiar)', 'Pânico que impede qualquer procedimento'],
        prevention: ['Visitas positivas mensais desde filhote', 'Nunca a primeira experiência ser negativa', 'Veterinário a domicílio como opção'],
        myths: [{ myth: 'Cão com medo do veterinário precisa ser "dominado" e forçado', truth: 'Força e contenção aumentam o medo e a agressividade nas próximas consultas. A abordagem Fear-Free (petiscos, dessensibilização gradual, medicação pré-consulta) é mais eficaz e produz melhores resultados a longo prazo.' }],
        faq: [
          { q: 'Posso pedir ao veterinário que faça a consulta no chão?', a: 'Absolutamente. Muitos cães ficam mais calmos no chão do que na mesa. Qualquer veterinário Fear-Free fará isso sem hesitar. Se o seu veterinário se nega: considera mudar para um profissional com abordagem Fear-Free.' },
        ],
      }],
    },
  ],
};
