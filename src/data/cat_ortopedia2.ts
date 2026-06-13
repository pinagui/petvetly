import type { Category } from './types';

export const catOrtopedia2: Category = {
  id: 'ortopedia2', name: 'Ortopedia Avançada', emoji: '🦴', gradient: 'g-indigo',
  description: 'Ligamento cruzado, displasia de cotovelo, espondilose e fraturas',
  conditions: [
    {
      id: 'ligamento-cruzado', name: 'Ruptura do Ligamento Cruzado Cranial', emoji: '🦵', gradient: 'g-red',
      description: 'Lesão ortopédica mais comum em cães — ruptura do LCC causa claudicação aguda no membro posterior',
      prevalence: 'Muito comum; Labrador, Rottweiler, Bulldog, Mastiff mais afetados',
      protocols: [{
        id: 'p1', title: 'Protocolo Ruptura LCC', subtitle: 'Confirmação por radiografia, cirurgia TPLO ou TTA e fisioterapia',
        stages: [
          { id: 's1', label: 'Ruptura Parcial', urgency: 'moderate', description: 'Claudicação moderada após exercício intenso.', signs: ['Claudicação intermitente pós-exercício', 'Rigidez ao levantar', 'Derrame articular sutil', 'Gaveta cranial parcial ao exame'] },
          { id: 's2', label: 'Ruptura Completa', urgency: 'high', description: 'Claudicação grave com descarga de peso mínima.', signs: ['Sem apoio no membro ou apoio em ponta dos dedos', 'Gaveta cranial positiva ao exame', 'Edema articular do joelho', 'Dor à extensão do joelho', 'Em cães obesos: acometimento bilateral possível'] },
        ],
        triggers: ['Degeneração progressiva do ligamento (causa mais comum — não trauma único)', 'Raças grandes e gigantes predispostas', 'Obesidade aumenta risco 3-5x', 'Ângulo do platô tibial aumentado', 'Ruptura traumática em cães atléticos (menos comum)'],
        steps: [
          { title: 'Diagnóstico e decisão cirúrgica', icon: '🔬', duration: 'Diagnóstico',
            description: 'Radiografia para avaliar osteoartrite. Gaveta cranial e compressão tibial confirma ruptura.',
            checklist: ['Gaveta cranial e teste de compressão tibial', 'Radiografia da articulação do joelho (2 planos)', 'Angulação do platô tibial (TPA)', 'Hemograma e bioquímica pré-anestésica', 'Discussão sobre TPLO x TTA x sutura extracapsular com cirurgião'] },
          { title: 'Cirurgia e reabilitação', icon: '🔪', duration: '8-12 semanas',
            description: 'TPLO (Tibial Plateau Leveling Osteotomy) é o padrão-ouro para cães grandes.',
            checklist: ['TPLO ou TTA — cirurgião veterinário especializado', 'Repouso absoluto nas 2 primeiras semanas pós-cirurgia', 'Anti-inflamatório (meloxicam 0,1mg/kg/dia)', 'Fisioterapia aquática a partir da 3ª semana', 'Exercícios passivos de amplitude de movimento', 'Retorno a exercícios normais: 12-16 semanas pós-cirurgia'] },
        ],
        checklists: [
          { label: 'Pós-Cirúrgico Diário', freq: 'daily', items: ['Incisão limpa e sem secreção?', 'Cão apoia o membro?', 'Anti-inflamatório dado?', 'Repouso respeitado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Pós-Cirurgia', tasks: ['Repouso absoluto em canil pequeno', 'Anti-inflamatório conforme prescrição', 'Verificar incisão 2x/dia', 'Passeios apenas para fazer necessidades (curtos, com guia)'], note: 'As 2 primeiras semanas são críticas' },
          { day: 2, label: 'Dia 2 — Dor e Inchaço', tasks: ['Analgésico dado conforme horário?', 'Gelo no joelho 10 min 2x/dia?', 'Cão apoiando levemente?', 'Incisão sem sangramento?'] },
          { day: 3, label: 'Dia 3 — Exercícios Passivos', tasks: ['Mover a articulação passivamente 10x, 3x/dia', 'Fletir e estender suavemente', 'Registrar amplitude que tolera sem dor'] },
          { day: 4, label: 'Dia 4 — Nutrição e Peso', tasks: ['Reduzir ração se obeso', 'Peso atual?', 'Cada kg a menos = menos carga na articulação'], note: 'Perda de peso melhora resultado cirúrgico' },
          { day: 5, label: 'Dia 5 — Avaliação de Dor', tasks: ['Cão usa o membro voluntariamente?', 'Treme ou recusa tocar o chão?', 'Solicitar ajuste de analgesia se necessário'] },
          { day: 6, label: 'Dia 6 — Fisioterapia Aquática', tasks: ['(Se 3ª semana): hidroterpia disponível?', 'Caminhar em água = menos impacto', 'Laser terapêutico acelera cicatrização'], note: 'Fisio aquática reduz tempo de recuperação' },
          { day: 7, label: 'Dia 7 — Retorno Cirúrgico', tasks: ['Retorno com cirurgião na 2ª semana', 'Radiografia de controle?', 'Cicatrização da incisão normal?'], note: 'Retorno total ao exercício em 12-16 semanas' },
        ],
        vetAlert: ['Incisão com secreção purulenta', 'Membro inchado e quente > 5 dias pós-cirurgia', 'Cão não apoia o membro após 2 semanas'],
        prevention: ['Controle de peso rigoroso — obeso tem 3-5x mais risco', 'Exercício regular e moderado (evitar explosões de corrida)', 'Monitorar o joelho contralateral — ruptura bilateral em 50% dos casos em 2 anos'],
        myths: [
          { myth: 'Ligamento cruzado rompido em cão pode cicatrizar com repouso', truth: 'Diferente de humanos, o LCC canino raramente cicatriza bem sem cirurgia. Repouso alivia a claudicação, mas a instabilidade e osteoartrite progressiva persistem. Cirurgia é necessária em cães acima de 15kg.' },
        ],
        faq: [
          { q: 'Qual a diferença entre TPLO e sutura extracapsular?', a: 'Sutura extracapsular é mais simples e barata, indicada para cães < 15kg. TPLO e TTA são cirurgias ósseas indicadas para cães maiores com resultados superiores a longo prazo, mas requerem cirurgião especializado.' },
        ],
      }],
    },
    {
      id: 'displasia-cotovelo', name: 'Displasia de Cotovelo', emoji: '🦾', gradient: 'g-blue',
      description: 'Conjunto de 4 patologias do cotovelo — principal causa de claudicação anterior em cães jovens de raças grandes',
      prevalence: 'Labrador (35%), Rottweiler, Pastor Alemão, Bernese predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Displasia Cotovelo', subtitle: 'Diagnóstico por TC, cirurgia artroscópica e manejo da osteoartrite',
        stages: [
          { id: 's1', label: 'Precoce (4-12 meses)', urgency: 'moderate', description: 'Claudicação anterior em filhote jovem de raça grande.', signs: ['Claudicação anterior — tipicamente pior após repouso', 'Rigidez matinal', 'Cotovelo com leve derrame', 'Pior após exercício intenso'] },
          { id: 's2', label: 'Crônico', urgency: 'moderate', description: 'Osteoartrite estabelecida em adulto.', signs: ['Claudicação crônica', 'Cotovelo espessado', 'Amplitude de movimento reduzida', 'Dor à flexão forçada do cotovelo', 'Osteófitos visíveis na radiografia'] },
        ],
        triggers: ['Genética (herança poligênica)', 'Crescimento rápido em raças grandes', 'Sobrenutrição na fase de crescimento', 'Exercício excessivo em filhotes < 1 ano'],
        steps: [
          { title: 'Diagnóstico por TC', icon: '🔬', duration: 'Diagnóstico',
            description: 'TC é superior à radiografia para displasia de cotovelo — identifica UAP, FPC, OCD e incongruência.',
            checklist: ['TC do cotovelo (padrão-ouro)', 'Identificar: UAP, FPC, OCD, incongruência articular', 'Grau de osteoartrite', 'Avaliação do cotovelo contralateral'] },
          { title: 'Artroscopia e manejo', icon: '🔪', duration: 'Cirúrgico',
            description: 'Artroscopia para remover fragmento e tratar OCD. Manejo conservativo para casos avançados.',
            checklist: ['Artroscopia: remoção de fragmento processo coronóide ou unido', 'NSAID: meloxicam crônico em dose mínima efetiva', 'Condroitina + glucosamina + omega-3 oral', 'Fisioterapia e hidroterapia', 'Controle de peso rigoroso', 'Injeção articular de PRP ou ácido hialurônico em casos avançados'] },
        ],
        checklists: [
          { label: 'Manejo Diário', freq: 'daily', items: ['Anti-inflamatório dado?', 'Cão apoia normalmente?', 'Exercício moderado (sem corrida intensa)?', 'Suplemento articular dado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['TC do cotovelo agendada?', 'Anti-inflamatório iniciado para conforto', 'Restrição de exercício até resultado da TC'] },
          { day: 2, label: 'Dia 2 — Resultados', tasks: ['Fragmento identificado na TC?', 'Discutir artroscopia com cirurgião', 'Grau de osteoartrite avaliado'] },
          { day: 3, label: 'Dia 3 — Cirurgia (Se indicada)', tasks: ['Artroscopia realizada', 'Repouso 1ª semana pós-operatório', 'Anti-inflamatório e analgésico pós-cirúrgico'] },
          { day: 4, label: 'Dia 4 — Peso', tasks: ['Peso atual e ideal?', 'Reduzir calorias se acima do peso', 'Suplemento omega-3 1g/10kg/dia'] },
          { day: 5, label: 'Dia 5 — Fisioterapia', tasks: ['Exercícios passivos de amplitude', 'Caminhadas curtas na água', 'Laser terapêutico se disponível'] },
          { day: 6, label: 'Dia 6 — Reavaliação', tasks: ['Claudicação melhorou?', 'Continuar anti-inflamatório?', 'Suplementação articular em dia?'] },
          { day: 7, label: 'Dia 7 — Controle', tasks: ['Radiografia de controle em 6 meses', 'Manejo crônico definitivo planejado', 'Progressão de osteoartrite monitorada'], note: 'Displasia de cotovelo é doença progressiva — não tem cura, tem manejo' },
        ],
        vetAlert: ['Filhote que para de apoiar o membro de repente', 'Cotovelo inchado e quente', 'Dor intensa que não responde a anti-inflamatório'],
        prevention: ['Não sobrealimentar filhotes de raças grandes', 'Exercício moderado (sem corrida ou saltos) em filhotes < 1 ano', 'Seleção de reprodutores com cotovelo certificado livre (OFA/PennHIP)'],
        myths: [
          { myth: 'Filhote claudicando é normal, está crescendo', truth: 'Claudicação em filhote jovem de raça grande NÃO é normal. É sinal de displasia ou lesão e requer avaliação veterinária urgente.' },
        ],
        faq: [
          { q: 'Cão operado de displasia de cotovelo vai ficar bom?', a: 'A cirurgia remove o fragmento e alivia a dor, mas a osteoartrite já instalada é progressiva. Com manejo de peso, fisioterapia e anti-inflamatório, a maioria tem qualidade de vida boa por anos.' },
        ],
      }],
    },
    {
      id: 'espondilose', name: 'Espondilose Vertebral', emoji: '🦷', gradient: 'g-amber',
      description: 'Proliferação de osteófitos na coluna — comum em cães idosos de raças grandes',
      prevalence: 'Muito comum em cães > 7 anos de raças grandes; Box, Cocker Spaniel afetados precocemente',
      protocols: [{
        id: 'p1', title: 'Protocolo Espondilose', subtitle: 'Manejo da dor, fisioterapia e acupuntura',
        stages: [
          { id: 's1', label: 'Assintomática', urgency: 'low', description: 'Achado incidental de radiografia — sem dor evidente.', signs: ['Cão sem sintomas', 'Osteófitos na radiografia do tórax/abdômen', 'Rigidez discreta ao acordar', 'Relutância em saltar'] },
          { id: 's2', label: 'Sintomática', urgency: 'moderate', description: 'Dor lombar, rigidez, claudicação ou paraparesia.', signs: ['Dor ao tocar a coluna', 'Rigidez ao levantar da cama', 'Relutância a subir escadas ou saltar', 'Paraparesia (fraqueza nos membros posteriores)'] },
        ],
        triggers: ['Envelhecimento — degeneração do disco intervertebral', 'Raças predispostas geneticamente', 'Obesidade aumenta carga na coluna'],
        steps: [
          { title: 'Manejo da dor e fisioterapia', icon: '💊', duration: 'Crônico',
            description: 'NSAID, fisioterapia, acupuntura e adaptações ambientais são os pilares.',
            checklist: ['Meloxicam 0,05-0,1mg/kg/dia em dose mínima efetiva', 'Gabapentina 5-10mg/kg 2-3x/dia se dor neuropática', 'Acupuntura veterinária — evidência crescente para dor vertebral', 'Hidroterapia: nado ou esteira aquática', 'Rampa em vez de escadas no ambiente doméstico', 'Cama ortopédica de memória espuma', 'Suplemento omega-3 (anti-inflamatório natural)'] },
        ],
        checklists: [
          { label: 'Qualidade de Vida Diária', freq: 'daily', items: ['Cão levanta sem dificuldade?', 'Anda normalmente?', 'Anti-inflamatório dado?', 'Usou a rampa (não pulou)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Radiografia da coluna', 'Escala de dor (1-10)', 'Inicia meloxicam ou gabapentina conforme prescrição'] },
          { day: 2, label: 'Dia 2 — Ambiente', tasks: ['Rampas instaladas onde o cão sobe?', 'Cama no chão ou com acesso fácil?', 'Evitar piso escorregadio (tapete antiderrapante)'], note: 'Adaptações ambientais reduzem dor imediatamente' },
          { day: 3, label: 'Dia 3 — Fisioterapia', tasks: ['Caminhada 15 min em terreno plano', 'Massa suave na coluna 5 min', 'Alongamento passivo dos membros'], note: 'Exercício leve melhora musculatura paravertebral' },
          { day: 4, label: 'Dia 4 — Peso', tasks: ['Peso e escore corporal?', 'Cada kg a menos = menos dor', 'Reduzir 10-15% das calorias se obeso'] },
          { day: 5, label: 'Dia 5 — Acupuntura', tasks: ['Sessão de acupuntura veterinária?', 'Laser terapêutico de baixa intensidade?', 'TENS veterinário?'], note: 'Acupuntura tem boa evidência para dor vertebral canina' },
          { day: 6, label: 'Dia 6 — Monitoramento', tasks: ['Cão mais ativo vs. semana passada?', 'Escala de dor atual?', 'Medicação efetiva?'] },
          { day: 7, label: 'Dia 7 — Plano de Longo Prazo', tasks: ['Radiografia de controle a cada 6 meses', 'Ajuste de dose se dor não controlada', 'Qualidade de vida como meta principal'], note: 'Espondilose não regride — objetivo é manter qualidade de vida' },
        ],
        vetAlert: ['Paraparesia súbita (fraqueza posterior grave)', 'Perda de continência urinária ou fecal', 'Dor que não responde a NSAID'],
        prevention: ['Controle de peso ao longo da vida', 'Evitar saltos de altura em raças predispostas', 'Exercício moderado e regular ao invés de explosivo'],
        myths: [
          { myth: 'Cão velho que anda devagar é "só a idade"', truth: 'Rigidez e lentidão em cão idoso frequentemente têm causa tratável — espondilose, artrose, displasia. Tratamento adequado pode devolver qualidade de vida significativa.' },
        ],
        faq: [
          { q: 'Acupuntura funciona mesmo em cão?', a: 'Há evidência crescente (estudos controlados) para acupuntura veterinária em dor musculoesquelética e vertebral em cães. A maioria dos pacientes tolera bem o procedimento e muitos proprietários relatam melhora objetiva na mobilidade.' },
        ],
      }],
    },
    {
      id: 'fratura-ossea', name: 'Fraturas Ósseas', emoji: '🦴', gradient: 'g-red',
      description: 'Protocolo de emergência, estabilização e pós-operatório de fraturas',
      prevalence: 'Causa mais comum: atropelamento, queda, trauma. Qualquer raça e idade',
      protocols: [{
        id: 'p1', title: 'Protocolo Fratura', subtitle: 'Estabilização emergencial, cirurgia e reabilitação',
        stages: [
          { id: 's1', label: 'Fechada', urgency: 'high', description: 'Osso fraturado sem comunicação com o exterior.', signs: ['Claudicação grave', 'Deformidade do membro', 'Crepitação ao mover', 'Edema e hematoma', 'Dor intensa'] },
          { id: 's2', label: 'Aberta/Exposta', urgency: 'emergency', description: 'Osso visível — risco de contaminação e osteomielite.', signs: ['Osso visível pela ferida', 'Sangramento ativo', 'Ferida contaminada', 'Risco de sepse'] },
        ],
        triggers: ['Atropelamento — causa mais comum', 'Queda de altura', 'Mordida de cão maior', 'Trauma direto', 'Fratura patológica (tumor ósseo, osteomielite)'],
        steps: [
          { title: 'Primeiros socorros', icon: '🚨', duration: 'Emergência',
            description: 'Imobilização provisória, controle de sangramento e transporte urgente.',
            checklist: ['NÃO tentar reposicionar o osso', 'Imobilizar com tala improvisada (revista enrolada) sem apertar', 'Compressa limpa em fratura aberta — NÃO remover osso exposto', 'Transportar em superfície rígida (caixa, tábua)', 'Veterinário de emergência IMEDIATO'] },
          { title: 'Tratamento cirúrgico', icon: '🔪', duration: 'Cirúrgico',
            description: 'Fixação interna (placa, pino) ou externa (fixador externo) conforme local e tipo de fratura.',
            checklist: ['Radiografia para planejamento cirúrgico', 'Antibiótico pré-cirúrgico IV', 'Fixação interna ou externa — cirurgião veterinário especializado', 'Cuidado rigoroso da ferida pós-operatória', 'Anti-inflamatório e analgésico (tramadol, meloxicam)', 'Restrição de atividade 6-12 semanas'] },
        ],
        checklists: [
          { label: 'Pós-Cirúrgico Diário', freq: 'daily', items: ['Incisão/fixador limpos e secos?', 'Cão apoia o membro?', 'Membros quentes e com pulso normal?', 'Anti-inflamatório dado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Emergência veterinária', 'Rx e planejamento cirúrgico', 'Cirurgia se estável'], note: 'Fratura aberta = cirurgia em < 6 horas se possível' },
          { day: 2, label: 'Dia 2 — Pós-Cirúrgico', tasks: ['Verificar pulso e temperatura do membro (isquemia?)', 'Incisão sem sangramento?', 'Analgesia efetiva?'], note: 'Síndrome compartimental pode ocorrer nas primeiras 24h' },
          { day: 3, label: 'Dia 3 — Cuidado da Ferida', tasks: ['Curativos trocados conforme prescrição', 'Fixador externo: limpar pinos com soro', 'Prevenção de lambedura (colar elizabetano)'] },
          { day: 4, label: 'Dia 4 — Nutrição', tasks: ['Proteína aumentada para cicatrização óssea', 'Cálcio e vitamina D adequados', 'Cão comendo?'] },
          { day: 5, label: 'Dia 5 — Fisioterapia Passiva', tasks: ['Mover articulações adjacentes à fratura passivamente', '10 repetições 3x/dia', 'Prevenir atrofia muscular'] },
          { day: 6, label: 'Dia 6 — Avaliação de Dor', tasks: ['Cão suporta peso no membro operado?', 'Dor controlada?', 'Edema diminuindo?'] },
          { day: 7, label: 'Dia 7 — Controle Radiográfico', tasks: ['Rx de controle em 3-4 semanas', 'Cicatrização óssea (calo) visível?', 'Fixador externo necessita ajuste?'], note: 'Osso canino leva 4-8 semanas para consolidar (raças jovens mais rápido)' },
        ],
        vetAlert: ['Membro frio e sem pulso (isquemia)', 'Incisão vermelha, quente e com secreção (infecção)', 'Cão não apoia absolutamente nada após 1 semana'],
        prevention: ['Coleira e guia — sem soltura em ruas', 'Gradis e proteções contra quedas em apartamentos', 'Cuidado com raças pequenas em colo — quedas causam fratura'],
        myths: [
          { myth: 'Fratura pode ser tratada com talas e repouso sem cirurgia', truth: 'Fraturas instáveis em cão raramente cicatrizam bem sem fixação cirúrgica. Tala é para transporte de emergência, não tratamento definitivo. Sem cirurgia, o membro pode ser perdido.' },
        ],
        faq: [
          { q: 'Quanto tempo até o cão andar normalmente após cirurgia de fratura?', a: 'Depende do tipo e local. Em geral, apoio parcial em 1-2 semanas, retorno funcional em 6-8 semanas e radiografia de consolidação em 8-12 semanas. Raças jovens consolidam mais rápido.' },
        ],
      }],
    },
  ],
};
