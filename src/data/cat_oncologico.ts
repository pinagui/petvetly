import type { Category } from './types';

export const catOncologico: Category = {
  id: 'oncologico', name: 'Oncológico', emoji: '🎗️', gradient: 'g-purple',
  description: 'Linfoma, mastocitoma, osteossarcoma, TVT e tumores comuns em cães',
  conditions: [
    {
      id: 'linfoma', name: 'Linfoma Canino', emoji: '🔴', gradient: 'g-purple',
      description: 'O câncer hematológico mais comum em cães — tratável com quimioterapia',
      prevalence: '~24% de todas as neoplasias malignas em cães; mais comum em Golden, Boxer, Labrador',
      protocols: [{
        id: 'p1', title: 'Protocolo Linfoma Canino', subtitle: 'Diagnóstico por citologia, estadiamento e protocolo CHOP',
        stages: [
          { id: 's1', label: 'Estágio I-II (linfonodo único/regional)', urgency: 'moderate', description: 'Envolvimento linfonodal localizado.', signs: ['Linfonodo(s) aumentado(s) não doloroso(s)', 'Estado geral preservado', 'Sem envolvimento hepático/esplênico', 'Hemograma normal ou discretamente alterado'] },
          { id: 's2', label: 'Estágio III (generalizado)', urgency: 'high', description: 'Todos os linfonodos periféricos aumentados.', signs: ['Linfadenomegalia generalizada', 'Pode ter anemia discreta', 'Letargia progressiva', 'Perda de peso inicial'] },
          { id: 's3', label: 'Estágio IV-V (visceral)', urgency: 'high', description: 'Envolvimento de fígado, baço, medula e sangue.', signs: ['Hepatoesplenomegalia', 'Hipercalcemia (linfoma T)', 'Leucemia (blastos no sangue)', 'Comprometimento medular', 'Poliúria/polidipsia se hipercalcêmico'] },
        ],
        triggers: ['Etiologia desconhecida em cães', 'Predisposição genética racial (Golden, Boxer, Labrador, Basset)', 'Linfoma T e B — comportamentos diferentes', 'Sem associação definitiva com exposições ambientais específicas'],
        steps: [
          { title: 'Diagnóstico por PAAF e citologia', icon: '🔬', duration: 'Diagnóstico',
            description: 'Punção aspirativa de linfonodo (PAAF) é rápida e define o diagnóstico na maioria dos linfomas.',
            checklist: ['PAAF de linfonodo aumentado — resultado em 24-48h', 'Imuno-histoquímica para classificação B vs T', 'Estadiamento: hemograma, bioquímica, ureia, creatinina, Ca++', 'Ultrassom abdominal — envolvimento visceral?', 'Radiografia de tórax — envolvimento pulmonar?'] },
          { title: 'Quimioterapia protocolo CHOP', icon: '💊', duration: '19-25 semanas',
            description: 'Protocolo CHOP (ciclofosfamida, doxorrubicina, vincristina, prednisona) = padrão ouro. Taxa de remissão > 80%.',
            checklist: ['Encaminhar a oncologista veterinário com urgência', 'Protocolo CHOP: 6 meses, administrações semanais a quinzenais', 'Prednisona oral: inicia remissão rapidamente', 'Monitoramento de hemograma antes de cada ciclo', 'Cardiotoxicidade da doxorrubicina: ecocardiograma'] },
          { title: 'Qualidade de vida durante QT', icon: '❤️', duration: 'Durante tratamento',
            description: 'Cães toleram quimioterapia melhor que humanos. Maioria mantém qualidade de vida excelente.',
            checklist: ['Alimentação palatável (anorexia em 20-30% dos ciclos)', 'Antiemético profilático nos dias de QT', 'Passeios moderados se tolerado', 'Evitar locais públicos com muitos cães (imunossupressão)', 'Medir temperatura: febre > 39,5°C = neutropenia febril = emergência'] },
        ],
        checklists: [
          { label: 'Monitoramento Diário (em QT)', freq: 'daily', items: ['Cão come?', 'Vômito ou diarreia?', 'Temperatura?', 'Letargia mais que usual?', 'Prednisona oral dada?'] },
          { label: 'Pré-QT (cada ciclo)', freq: 'each_event', items: ['Hemograma feito?', 'Neutrófilos > 2.000?', 'Plaquetas > 50.000?', 'Vet oncologista avisado dos resultados?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['PAAF e citologia urgente', 'Estadiamento completo', 'Encaminhe ao oncologista'], note: 'Diagnóstico rápido muda prognóstico' },
          { day: 2, label: 'Dia 2 — Início da Prednisona', tasks: ['Prednisona oral 40mg/m² inicia remissão', 'Observe resposta em 24-48h', 'Linfonodos diminuindo é bom sinal'], note: 'Prednisona como ponte até QT completo' },
          { day: 3, label: 'Dia 3 — Consulta com Oncologista', tasks: ['Reunião com oncologista para definir protocolo', 'Custo e cronograma do CHOP', 'Alternativas se custo inviável (protocolo COP)'], note: 'Decisão de tratamento com o tutor' },
          { day: 4, label: 'Dia 4 — Primeiro Ciclo de QT', tasks: ['Hemograma pré-QT', 'Antieméticos prescritos', 'Primeiro ciclo administrado'], note: 'Sedação leve pode acompanhar o ciclo' },
          { day: 5, label: 'Dia 5 — Acompanhamento Pós-QT', tasks: ['Vômito ou diarreia?', 'Temperatura: febre = emergência', 'Hidratação e alimentação'], note: 'Pior nos dias 5-7 após QT (nadir leucocitário)' },
          { day: 6, label: 'Dia 6 — Resposta ao Tratamento', tasks: ['Linfonodos menores?', 'Cão mais ativo?', 'Continue prednisona oral'], note: 'Avaliação de resposta' },
          { day: 7, label: 'Dia 7 — Hemograma de Controle', tasks: ['Hemograma 7 dias após QT', 'Neutrófilos para o próximo ciclo', 'Programe próxima sessão'], note: 'Timing dos ciclos depende do hemograma' },
        ],
        vetAlert: ['Febre > 39,5°C em cão em quimioterapia (neutropenia febril — emergência)', 'Sangramento', 'Colapso', 'Dispneia'],
        prevention: ['Não há prevenção definitiva', 'Exame físico semestral detecta linfadenopatia precoce', 'Castração pode reduzir risco de alguns tumores'],
        myths: [
          { myth: 'Quimio em cão causa sofrimento como em humano', truth: 'Cães toleram protocolos veterinários com muito menos efeitos colaterais que humanos. A quimio veterinária prioriza qualidade de vida.' },
          { myth: 'Cão com linfoma vai viver poucos meses de qualquer jeito', truth: 'Com CHOP, 80% entram em remissão completa. Sobrevida mediana é 12-18 meses. Até 25% sobrevivem > 2 anos.' },
        ],
        faq: [
          { q: 'Linfoma tem cura em cães?', a: '"Cura" é rara mas controle prolongado é possível. O objetivo é remissão — cão assintomático com qualidade de vida. Remissão pode durar 1-2+ anos. Recidiva é comum mas pode ser retratada.' },
          { q: 'Se não puder pagar CHOP, existe outra opção?', a: 'Sim. Protocolo COP (ciclofosfamida, vincristina, prednisona) é mais acessível. Prednisona sozinha melhora qualidade de vida por 1-3 meses mas não é curativa. Converse com o oncologista.' },
        ],
      }],
    },
    {
      id: 'mastocitoma', name: 'Mastocitoma', emoji: '🔵', gradient: 'g-orange',
      description: 'Tumor de mastócitos — o tumor de pele mais comum em cães, com comportamento imprevisível',
      prevalence: '~21% dos tumores de pele em cães; Boxer, Labrador, Golden, Pit Bull predispostos',
      protocols: [{
        id: 'p1', title: 'Protocolo Mastocitoma', subtitle: 'Estadiamento histológico Patnaik/Kiupel, cirurgia com margens + quimioterapia se alto grau',
        stages: [
          { id: 's1', label: 'Grau I (baixo grau Kiupel)', urgency: 'moderate', description: 'Tumor bem diferenciado — comportamento benigno na maioria dos casos.', signs: ['Nódulo dérmico ou subcutâneo', 'Crescimento lento', 'Macio ao toque', 'Sem metástase regional', 'Sinal de Darier (eritema ao toque — por histamina)'] },
          { id: 's2', label: 'Grau II/III (alto grau)', urgency: 'high', description: 'Potencial maligno alto — metástase linfonodal e visceral.', signs: ['Crescimento rápido', 'Ulceração', 'Eritema e edema perilesional', 'Linfonodos regionais aumentados', 'Sinais sistêmicos de histaminemia'] },
          { id: 's3', label: 'Metastático / Sistêmico', urgency: 'emergency', description: 'Mastocitose sistêmica com envolvimento visceral.', signs: ['Linfonodos e baço aumentados', 'Úlcera gástrica (histamina)', 'Vômito com sangue', 'Coagulopatia', 'Anorexia e perda de peso graves'] },
        ],
        triggers: ['Etiologia desconhecida', 'Predisposição racial (Boxer: até 20% dos tumores)', 'Mutação c-KIT (proto-oncogene): presente em ~30% dos mastocitomas caninos', 'Não há fatores ambientais comprovados'],
        steps: [
          { title: 'Biópsia e estadiamento', icon: '🔬', duration: 'Diagnóstico',
            description: 'NUNCA remover mastocitoma sem biópsia prévia — manipulação causa degranulação de histamina (anafilaxia). PAAF para diagnóstico inicial.',
            warning: 'Não comprimir ou massagear o nódulo — causa degranulação e reação sistêmica.',
            checklist: ['PAAF: confirma mastocitoma (achado de grânulos)', 'Biópsia excisional com MARGENS AMPLAS (3 cm laterais + 1 fascia)', 'Histopatologia: grau Patnaik (I/II/III) ou Kiupel (baixo/alto)', 'Imuno-histoquímica: índice Ki67 e c-KIT', 'Estadiamento: PAAF de linfonodo regional, ultrassom abdominal'] },
          { title: 'Cirurgia com margens adequadas', icon: '✂️', duration: 'Tratamento',
            description: 'Cirurgia com margens é o tratamento definitivo para grau baixo. Margens limpas = cura em > 90% dos grau I.',
            checklist: ['Bloqueio H1 e H2 pré-cirúrgico (difenidramina + famotidina)', 'Margens mínimas: 3 cm laterais + fascia profunda', 'Revisão histopatológica das margens', 'Margens comprometidas: reexcisão ou radioterapia', 'Toceranib (Palladia) ou vimblastina + prednisona se alto grau'] },
        ],
        checklists: [
          { label: 'Pós-Cirúrgico', freq: 'daily', items: ['Sutura limpa?', 'Eritema ou edema crescente?', 'Anti-histamínico dado?', 'Inibidor de H2 dado?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico por PAAF', tasks: ['Não comprimir o nódulo', 'PAAF para diagnóstico', 'Anti-histamínico antes da PAAF'], note: 'Degranulação pode causar reação' },
          { day: 2, label: 'Dia 2 — Estadiamento', tasks: ['Ultrassom abdominal', 'PAAF de linfonodo regional', 'Hemograma e bioquímica'], note: 'Estadiamento define o tratamento' },
          { day: 3, label: 'Dia 3 — Pré-Cirúrgico', tasks: ['Anti-histamínico H1 e H2 iniciado', 'Planejamento cirúrgico', 'Famotidina para proteção gástrica'], note: 'Pré-medicação reduz reação histaminérgica' },
          { day: 4, label: 'Dia 4 — Cirurgia', tasks: ['Excisão com margens amplas', 'Envio do material para histopatologia', 'Sutura e curativo'], note: 'Margens de 3 cm são fundamentais' },
          { day: 5, label: 'Dia 5 — Pós-Operatório', tasks: ['Sutura avaliada', 'Anti-histamínico contínuo', 'Colar elizabetano'], note: 'Degranulação pós-cirúrgica é possível' },
          { day: 6, label: 'Dia 6 — Histopatologia', tasks: ['Resultado histopatológico chegou?', 'Margens limpas?', 'Grau do tumor?'], note: 'Margens comprometidas mudam o plano' },
          { day: 7, label: 'Dia 7 — Plano Pós-Cirúrgico', tasks: ['Com margens limpas grau baixo: monitoramento', 'Grau alto: encaminhe ao oncologista', 'Calendário de revisões a cada 3 meses'], note: 'Monitoramento vitalício recomendado' },
        ],
        vetAlert: ['Nódulo crescendo rapidamente', 'Eritema e edema intensos ao redor do nódulo', 'Vômito com sangue (úlcera por histamina)', 'Reação anafilática após manipulação'],
        prevention: ['Não há prevenção específica', 'Exame físico periódico para detectar novos nódulos precocemente', 'Todo nódulo novo deve ser avaliado por PAAF'],
        myths: [
          { myth: 'Mastocitoma pequenininho não precisa operar', truth: 'O tamanho não define o grau nem o comportamento. Um mastocitoma minúsculo pode ser alto grau. Todo mastocitoma precisa de remoção com margens adequadas e histopatologia.' },
        ],
        faq: [
          { q: 'Meu cão pode ter mais de um mastocitoma?', a: 'Sim — cães com mastocitoma têm risco aumentado de novos tumores. Monitoramento cutâneo regular e PAAF de qualquer nódulo novo são essenciais.' },
        ],
      }],
    },
    {
      id: 'tvt', name: 'Tumor Venéreo Transmissível (TVT)', emoji: '🔶', gradient: 'g-rose',
      description: 'Tumor sexualmente transmissível — tratável com vincristina com excelente prognóstico',
      prevalence: 'Comum em cães de rua; prevalência maior em áreas urbanas sem controle reprodutivo',
      protocols: [{
        id: 'p1', title: 'Protocolo TVT', subtitle: 'Vincristina semanal por 4-6 aplicações — cura em > 95% dos casos',
        stages: [
          { id: 's1', label: 'Genital', urgency: 'moderate', description: 'Tumor restrito à genitália — forma clássica.', signs: ['Massa friável e hemorrágica na vagina/pênis/prepúcio', 'Sangramento genital', 'Lambedura excessiva da região', 'Sem sinais sistêmicos'] },
          { id: 's2', label: 'Extragenital', urgency: 'moderate', description: 'Disseminação para face, focinho, olhos.', signs: ['Nódulo no focinho, pálpebra ou boca', 'Pode ter metástase linfonodal regional', 'Sangramento da lesão ao toque'] },
          { id: 's3', label: 'Disseminado', urgency: 'high', description: 'Metástase a distância — raro mas possível em imunossuprimidos.', signs: ['Linfonodos generalizados', 'Envolvimento visceral', 'Imunossupressão subjacente'] },
        ],
        triggers: ['Transmissão por contato sexual direto', 'Lambedura, mordedura ou fareijamento de lesão', 'Fragmentos de células tumorais com viabilidade própria', 'Cão de rua em contato com outros cães infectados'],
        steps: [
          { title: 'Diagnóstico por PAAF ou biópsia', icon: '🔬', duration: 'Diagnóstico',
            description: 'PAAF da lesão: células grandes, vacuoladas em rosetas, com mitoses — diagnóstico fácil.',
            checklist: ['PAAF: células TVT clássicas em poucos minutos', 'Biópsia se PAAF inconclusiva', 'Estadiamento: palpação linfonodal, ultrassom', 'Hemograma e bioquímica'] },
          { title: 'Vincristina semanal', icon: '💊', duration: '4-6 semanas',
            description: 'Vincristina 0,5-0,7 mg/m² IV uma vez por semana. Prognóstico excelente.',
            checklist: ['Vincristina IV semanal por 4-6 aplicações', 'Avaliar resposta após 2 ciclos', 'Remissão completa esperada em 85-95% dos casos', 'Doxorrubicina como alternativa se resistência', 'Monitoramento de neurotoxicidade (rara na dose veterinária)'] },
        ],
        checklists: [
          { label: 'Acompanhamento Semanal', freq: 'weekly', items: ['Lesão diminuindo?', 'Sangramento cessou?', 'Cão comendo e ativo?', 'Data da próxima vincristina anotada?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['PAAF da lesão genital', 'Estadiamento', 'Início da vincristina se diagnóstico confirmado'], note: 'TVT tem prognóstico excelente' },
          { day: 2, label: 'Dia 2 — Pós-1ª Vincristina', tasks: ['Cão ativo e sem efeitos colaterais?', 'Lesão avaliada (ainda igual — melhora leva semanas)', 'Hidratação adequada'], note: 'Primeira melhora visível após 2-3 ciclos' },
          { day: 3, label: 'Dia 3 — Acompanhamento', tasks: ['Sangramento genital diminuiu?', 'Lambedura da região diminuiu?', 'Alimentação normal?'], note: 'Conforto do cão é prioridade' },
          { day: 4, label: 'Dia 4 — Isolamento Reprodutivo', tasks: ['Castração programada?', 'Evitar cruzamentos até cura completa', 'TVT é sexualmente transmissível'], note: 'Prevenir novos casos' },
          { day: 5, label: 'Dia 5 — 2ª Semana Preparação', tasks: ['Hemograma antes do próximo ciclo', 'Neutrófilos e plaquetas adequados?', 'Próxima vincristina amanhã?'], note: 'Hemograma pré-ciclo obrigatório' },
          { day: 6, label: 'Dia 6 — Antes da 2ª Vincristina', tasks: ['Hemograma realizado', 'Confirme data com veterinário oncologista', 'Jejum se necessário'], note: 'Protocolo semanal rigoroso' },
          { day: 7, label: 'Dia 7 — 2ª Vincristina', tasks: ['2ª aplicação de vincristina', 'Avaliação da lesão', 'Deve haver redução de tamanho após 2 ciclos'], note: 'Avaliar resposta após 2 ciclos' },
        ],
        vetAlert: ['Lesão aumentando em vez de diminuir', 'Sinais de neutropenia febril', 'Disseminação para novos locais'],
        prevention: ['Castração — elimina o principal mecanismo de transmissão', 'Evitar contato de cão com cães de rua desconhecidos', 'Inspeção genital regular em cães que têm acesso a outros cães'],
        myths: [
          { myth: 'TVT não tem tratamento — o cão vai morrer', truth: 'TVT responde excelentemente à vincristina. Taxa de cura com tratamento adequado > 95%. É um dos tumores com melhor prognóstico.' },
        ],
        faq: [
          { q: 'Meu cão curado de TVT pode cruzar novamente?', a: 'Sim, após cura completa confirmada (ausência de tumor por 3 meses após último ciclo). Castração é sempre recomendada para evitar reinfecção e reduzir outros riscos oncológicos.' },
        ],
      }],
    },
    {
      id: 'osteossarcoma', name: 'Osteossarcoma', emoji: '🦴', gradient: 'g-indigo',
      description: 'Tumor ósseo primário maligno — prevalente em raças grandes e gigantes',
      prevalence: '~80% dos tumores ósseos primários em cães; Labrador, Rottweiler, São Bernardo, Setter',
      protocols: [{
        id: 'p1', title: 'Protocolo Osteossarcoma', subtitle: 'Controle da dor, amputação + quimioterapia adjuvante, cuidados paliativos',
        stages: [
          { id: 's1', label: 'Inicial', urgency: 'high', description: 'Dor localizada em membro — diagnóstico precoce possível.', signs: ['Claudicação progressiva', 'Dor ao palpar o osso', 'Inchaço ósseo firme', 'Sem fratura ainda'] },
          { id: 's2', label: 'Avançado', urgency: 'high', description: 'Destruição óssea extensa com risco de fratura patológica.', signs: ['Fratura patológica', 'Massa visível no membro', 'Dor intensa e constante', 'Atrofia muscular regional'] },
          { id: 's3', label: 'Metastático', urgency: 'high', description: 'Metástase pulmonar — presente em ~90% ao diagnóstico de forma micro.', signs: ['Tosse', 'Dispneia', 'Nódulos pulmonares na radiografia', 'Caquexia'] },
        ],
        triggers: ['Raças gigantes e grandes (peso > 30 kg)', 'Cães > 7 anos', 'Localização típica: metáfises de rádio distal e úmero proximal', 'Microtraumas repetidos em ossos de raças grandes', 'Fratura cicatrizada prévia no local', 'Implante metálico prévio (raro)'],
        steps: [
          { title: 'Diagnóstico por radiografia e biópsia', icon: '🔬', duration: 'Diagnóstico',
            description: 'Radiografia óssea com padrão agressivo (sunburst, erosão cortical) é altamente sugestiva. Biópsia confirma.',
            checklist: ['Radiografia do membro: padrão agressivo', 'Radiografia de tórax: metástase pulmonar?', 'Biópsia óssea com trocador', 'Fosfatase alcalina sérica (elevada = prognóstico pior)', 'TC do membro para planejar cirurgia'] },
          { title: 'Controle de dor urgente', icon: '🚨', duration: 'IMEDIATO',
            description: 'Osteossarcoma causa dor severa. Controle de dor é obrigatório independente da decisão de tratamento.',
            checklist: ['Meloxicam 0,1mg/kg/dia (anti-inflamatório)', 'Tramadol 3-5mg/kg 3x/dia', 'Gabapentina 5-10mg/kg 2x/dia (dor neuropática)', 'Bisfosfonato (pamidronato) IV: reduz reabsorção óssea e alivia dor', 'Restrição de exercício para evitar fratura patológica'] },
          { title: 'Amputação + carboplatina', icon: '✂️', duration: 'Tratamento',
            description: 'Amputação do membro elimina a dor e o tumor primário. Carboplatina retarda metástase.',
            checklist: ['Amputação: cães adaptam-se excelentemente com 3 membros', 'Carboplatina IV: 4-6 ciclos a cada 3 semanas', 'Alternativa: salvamento de membro (custo muito maior)', 'Fisioreabilitação pós-amputação', 'Sobrevida mediana: 10-12 meses com amputação + QT'] },
        ],
        checklists: [
          { label: 'Dor: Avaliação Diária', freq: 'daily', items: ['Cão coloca peso no membro?', 'Acorda à noite por dor?', 'Analgésico dado?', 'Dor escala 0-10 (1=discreto, 10=incapacitante)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico e Dor', tasks: ['Radiografia e diagnóstico', 'Inicie analgesia multimoda IMEDIATAMENTE', 'Restrição de exercício'], note: 'Dor é a queixa principal' },
          { day: 2, label: 'Dia 2 — Estadiamento', tasks: ['TC do membro', 'Radiografia de tórax', 'Biópsia agendada'], note: 'Estadiamento antes de cirurgia' },
          { day: 3, label: 'Dia 3 — Conversa com Oncologista', tasks: ['Discutir opções: amputação vs paliativo', 'Prognóstico com e sem cirurgia', 'Custo e qualidade de vida'], note: 'Decisão informada do tutor' },
          { day: 4, label: 'Dia 4 — Pamidronato', tasks: ['Pamidronato IV: reduz dor em 2-3 dias', 'Anti-inflamatório oral mantido', 'Fisioterapia pré-amputação'], note: 'Pamidronato tem resposta analgésica em 48-72h' },
          { day: 5, label: 'Dia 5 — Decisão de Tratamento', tasks: ['Amputação agendada?', 'Se paliativo: plano de analgesia otimizado', 'Verificar qualidade de vida atual'], note: 'Cada semana sem cirurgia = dor progressiva' },
          { day: 6, label: 'Dia 6 — Preparação', tasks: ['Exames pré-anestésicos', 'Hemograma e bioquímica', 'Jejum se cirurgia amanhã'], note: 'Pré-cirúrgico em dia' },
          { day: 7, label: 'Dia 7 — Amputação ou Revisão', tasks: ['Cirurgia realizada?', 'Se não: avalie dor e ajuste analgesia', 'Planejamento de QT pós-amputação'], note: 'Amputação = alívio imediato da dor' },
        ],
        vetAlert: ['Fratura do membro afetado (urgência cirúrgica)', 'Dor incontrolável apesar da analgesia', 'Deterioração rápida da qualidade de vida'],
        prevention: ['Controle de peso em raças de risco para reduzir estresse articular', 'Sem prevenção específica'],
        myths: [
          { myth: 'Amputar a pata do cão é cruel', truth: 'Cães adaptam-se extraordinariamente bem com 3 membros (tripotas). A qualidade de vida com amputação frequentemente supera a com o membro doloroso.' },
        ],
        faq: [
          { q: 'Qual a sobrevida esperada?', a: 'Sem cirurgia: 2-4 meses com controle de dor. Com amputação apenas: 4-6 meses. Amputação + carboplatina: 10-12 meses. O tratamento prolonga e melhora a qualidade de vida.' },
        ],
      }],
    },
  ],
};
