import type { Category } from './types';

export const catVacinas: Category = {
  id: 'vacinas', name: 'Vacinação e Prevenção', emoji: '💉', gradient: 'g-teal',
  description: 'Calendário vacinal, vacinas opcionais, prevenção de parasitas e medicina preventiva',
  conditions: [
    {
      id: 'calendario-filhote', name: 'Calendário Vacinal do Filhote', emoji: '🐶', gradient: 'g-emerald',
      description: 'Protocolo completo de vacinação do filhote do desmame até 1 ano',
      prevalence: 'Obrigatório para todos os filhotes — fundamento da medicina preventiva',
      protocols: [{
        id: 'p1', title: 'Protocolo Vacinal Filhote', subtitle: 'Polivalente + Raiva + opcionais — do desmame ao 1º reforço anual',
        stages: [
          { id: 's1', label: '6-8 Semanas', urgency: 'low', description: 'Primeira dose — anticorpos maternos ainda presentes.', signs: ['Filhote saudável, vacinação possível a partir de 6 semanas', 'Anticorpos maternos interferem (reduzem efetividade)', 'Início com V3 ou V8/V10', 'Exame físico antes de cada dose'] },
          { id: 's2', label: '8-16 Semanas', urgency: 'low', description: 'Série de reforços — janela de suscetibilidade imunológica.', signs: ['3-4 doses com intervalo de 3-4 semanas', 'Última dose após 16 semanas — máxima efetividade', 'Anticorpos maternos eliminados', 'Resposta imunológica plena'] },
        ],
        triggers: ['Filhote adquirido', 'Filhote sem vacinação prévia', 'Filhote resgatado'],
        steps: [
          { title: 'Série vacinal completa', icon: '💉', duration: '6-16 semanas',
            description: 'Série mínima: 3 doses com 3-4 semanas de intervalo; última após 16 semanas.',
            checklist: ['V8 ou V10 (polivalente): doses às 6-8, 9-12 e 13-16 semanas', 'Raiva: a partir de 12 semanas (obrigatória por lei)', 'Vermifugação antes de cada dose vacinal', 'Exame físico antes de vacinar', 'Aguardar 15-20 min na clínica após vacinação (reação anafilática rara)', 'Isolamento até completar a série: sem contato com cães desconhecidos'] },
          { title: 'Vacinas opcionais', icon: '🛡️', duration: 'Conforme risco',
            description: 'Vacinas não-core (opcionais) baseadas no estilo de vida e exposição ao risco.',
            checklist: ['Leishmania: indicada em regiões endêmicas (Leishmune ou CaniLeish)', 'Bordetella (kennel cough): filhotes frequentadores de canis, parques ou hotéis', 'Leptospirose: incluída nas polivalentes V10+', 'Coronavírus entérico: geralmente incluído em polivalentes', 'Giardia: controversa — consulte o veterinário'] },
        ],
        checklists: [
          { label: 'Controle de Vacinação', freq: 'daily', items: ['Caderneta atualizada?', 'Próxima dose agendada?', 'Filhote saudável na data da vacinação?', 'Vermifugado antes da dose?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Semana 1 — 1ª Dose (6-8 sem)', tasks: ['Exame físico completo', 'V8/V10 primeira dose', 'Aguardar 20 min na clínica', 'Próxima dose agendada em 3-4 semanas'], note: 'Não passear em locais públicos ainda' },
          { day: 2, label: 'Semana 4 — 2ª Dose', tasks: ['Exame físico', 'V8/V10 segunda dose', 'Raiva se >= 12 semanas', 'Vermifugação'], note: 'Série sem intervalos maiores que 4 semanas' },
          { day: 3, label: 'Semana 8 — 3ª Dose (13-16 sem)', tasks: ['Última dose da série primária', 'DEVE ser após 16 semanas idealmente', 'Raiva se não dada ainda', 'Giardia ou Bordetella se indicado'] },
          { day: 4, label: 'Pós-Série — Passeios Liberados!', tasks: ['14 dias após última dose = imunidade plena', 'Socialização em locais seguros liberada', 'Marcar 1º reforço anual'], note: 'Socialização precoce é tão importante quanto vacinação' },
          { day: 5, label: 'Reforço Anual (12 meses)', tasks: ['Polivalente reforço anual', 'Raiva reforço (trienal em muitos locais)', 'Vermifugação', 'Check-up geral'], note: 'Reforço de polivalente pode ser trienal após 2ª série em adultos saudáveis' },
          { day: 6, label: 'Monitoramento Pós-Vacina', tasks: ['Vermelhidão ou nódulo no local de aplicação (normal 1-2 semanas)?', 'Letargia leve por 24h (normal)?', 'Febre ou vômito (retornar ao vet)?'] },
          { day: 7, label: 'Caderneta Atualizada', tasks: ['Caderneta físca assinada pelo veterinário?', 'App de lembrete de vacinas configurado?', 'Próximos reforços anotados?'] },
        ],
        vetAlert: ['Reação anafilática (colapso, vômito profuso nos 20 min pós-vacina)', 'Febre > 40°C no dia seguinte à vacinação', 'Nódulo endurecido crescente no local de aplicação'],
        prevention: ['Vacinação é a principal prevenção de cinomose, parvovirose, leptospirose e hepatite infecciosa', 'Cão vacinado erradica doenças da comunidade (imunidade de rebanho)'],
        myths: [
          { myth: 'Filhote vacinado está protegido desde o início', truth: 'Imunidade plena só ocorre 14 dias após a ÚLTIMA dose da série, geralmente após 16 semanas. Antes disso, há "janela de suscetibilidade" — avoid locais de risco (parques, pet shops, clínicas).' },
        ],
        faq: [
          { q: 'Posso vacinar filhote com menos de 45 dias?', a: 'Tecnicamente sim a partir de 6 semanas, mas anticorpos maternos interferem fortemente. A maioria dos protocolos inicia entre 6-8 semanas e a efetividade vai aumentando com as doses subsequentes.' },
        ],
      }],
    },
    {
      id: 'vacinas-adulto', name: 'Revacinação do Adulto', emoji: '💊', gradient: 'g-blue',
      description: 'Protocolos de revacinação em adultos — frequência, tríade essential e vacinas de risco',
      prevalence: 'Válido para todos os cães adultos > 1 ano com série primária completa',
      protocols: [{
        id: 'p1', title: 'Protocolo Revacinação Adulto', subtitle: 'Core vaccines trienais, raiva conforme lei e opcionais por risco',
        stages: [
          { id: 's1', label: 'Adulto Saudável (1-7 anos)', urgency: 'low', description: 'Revacinação rotineira do adulto.', signs: ['Série primária completa', 'Saudável clinicamente', 'Estilo de vida de baixo risco (doméstico, passeios curtos)', 'Polivalente a cada 3 anos após 2ª série'] },
          { id: 's2', label: 'Alto Risco', urgency: 'low', description: 'Frequentadores de canis, parques e viajantes.', signs: ['Vai para canil ou hotel pet regularmente', 'Convive com muitos outros cães', 'Mora em área de alta incidência de doenças', 'Bordetella e leptospirose anuais indicados'] },
        ],
        triggers: ['Vencimento do reforço', 'Adoção de cão com histórico vacinal desconhecido', 'Viagem para área endêmica'],
        steps: [
          { title: 'Protocolo de revacinação adulto', icon: '💉', duration: 'Anual/Trienal',
            description: 'Vacinas core (essenciais) podem ser trienais em adultos saudáveis com titulação.',
            checklist: ['Polivalente: anual OU trienal com titulação confirmando imunidade', 'Raiva: anual ou trienal conforme regulamentação local', 'Leptospirose: anual (se na polivalente)', 'Bordetella: semestral para frequentadores de canis', 'Leishmania: trienal (verificar protocolo da marca)', 'Titulação de anticorpos: alternativa à vacinação indiscriminada em adultos'] },
        ],
        checklists: [
          { label: 'Calendário de Revacinação', freq: 'daily', items: ['Data do último reforço de polivalente?', 'Data do último reforço de raiva?', 'Cão vai para canil? Bordetella em dia?', 'Mora em área de leishmaniose?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Verificar Caderneta', tasks: ['Quando foi o último reforço?', 'Vacinas em dia ou atrasadas?', 'Agendamento se necessário'] },
          { day: 2, label: 'Dia 2 — Consulta', tasks: ['Exame físico antes da vacinação', 'Veterinário avalia necessidade de cada vacina pelo estilo de vida', 'Titulação de anticorpos como alternativa?'] },
          { day: 3, label: 'Dia 3 — Vacinação', tasks: ['Aplicação das vacinas devidas', 'Aguardar 20 min na clínica', 'Caderneta atualizada'] },
          { day: 4, label: 'Dia 4 — Reação?', tasks: ['Letargia leve (normal 24-48h)?', 'Nódulo no local (normal, resolução espontânea)?', 'Febre ou vômito = retornar ao veterinário'], note: 'Reações graves são raras mas acontecem' },
          { day: 5, label: 'Próximo Reforço Agendado?', tasks: ['Lembrete no celular para próximo reforço?', 'Caderneta guardada em local seguro?', 'Veterinário de confiança definido?'] },
          { day: 6, label: 'Vermifugação', tasks: ['Vermifugação trimestral realizada?', 'Antiparasitário externo (antipulgas/carrapato) em dia?', 'Heartworm prevention se indicado?'], note: 'Vermifugar junto com cada reforço vacinal' },
          { day: 7, label: 'Saúde Preventiva Completa', tasks: ['Vacinação em dia?', 'Antiparasitário em dia?', 'Check-up anual realizado?', 'Dentição verificada?'] },
        ],
        vetAlert: ['Cão nunca vacinado sendo exposto a ambientes de risco', 'Rotweiler, Dobermann e Labrador têm resposta imune reduzida — verificar titulação', 'Viagem para área endêmica de Leishmaniose sem vacina'],
        prevention: ['Vacinação regular é a mais custo-efetiva medida preventiva em saúde animal', 'Protocolo personalizado pelo veterinário supera calendário único para todos'],
        myths: [
          { myth: 'Cão precisa de vacina todo ano sem exceção', truth: 'As vacinas core (polivalente) em adultos saudáveis podem ser aplicadas a cada 3 anos após a 2ª série. A titulação de anticorpos pode confirmar imunidade sem revacinação. Só raiva pode ter obrigatoriedade legal anual em alguns estados.' },
        ],
        faq: [
          { q: 'O que é titulação de anticorpos e vale a pena?', a: 'Exame sorológico que mede o nível de anticorpos contra cinomose e parvovirose. Se o título for protetor, não há necessidade de revacinar. Custo maior que a vacina, mas evita vacinação desnecessária em cães sensíveis. Disponível em laboratórios especializados.' },
        ],
      }],
    },
    {
      id: 'prevencao-parasitas', name: 'Prevenção de Parasitas', emoji: '🦟', gradient: 'g-amber',
      description: 'Protocolo completo de controle de pulgas, carrapatos, vermes e mosquitos',
      prevalence: 'Universal — todo cão precisa de antiparasitário regular',
      protocols: [{
        id: 'p1', title: 'Protocolo Antiparasitário', subtitle: 'Ectoparasitas, endoparasitas e profilaxia de Leishmania e Dirofilária',
        stages: [
          { id: 's1', label: 'Filhote (2-8 semanas)', urgency: 'low', description: 'Vermifugação frequente — parasitas maternos.', signs: ['Vermes maternos transmitidos no útero e leite', 'Toxocara canis frequente em filhotes', 'Barriga distendida', 'Fezes com vermes visíveis'] },
          { id: 's2', label: 'Adulto', urgency: 'low', description: 'Rotina mensal de antiparasitário.', signs: ['Pulgas visíveis no pelo', 'Cão se coça excessivamente', 'Carrapatos palpáveis', 'Coceira excessiva sem causa aparente'] },
        ],
        triggers: ['Contato com ambiente externo', 'Contato com outros cães', 'Exposição a áreas verdes', 'Ingestão de presa infectada (Toxoplasma)'],
        steps: [
          { title: 'Ectoparasitas: pulgas e carrapatos', icon: '🦟', duration: 'Mensal',
            description: 'Produto preventivo mensal é a base do controle.',
            checklist: ['Isoxazolinas (Bravecto, NexGard, Simparica): 1x ao mês OU trimestralmente (Bravecto)', 'Eficácia contra pulgas e carrapatos (Amblyomma, Ixodes, Rhipicephalus)', 'Spot-on ou coleira como alternativas', 'Tratamento do ambiente: borrifação do canil e camas', 'Todos os pets da casa tratados simultaneamente', 'Coleira antiparasitária (Seresto): 8 meses de proteção'] },
          { title: 'Endoparasitas: vermes', icon: '🪱', duration: 'Trimestral',
            description: 'Vermifugação trimestral com febantel+praziquantel ou fenbendazol.',
            checklist: ['Filhotes: vermifugar às 2, 4, 6, 8 semanas e mensalmente até 6 meses', 'Adultos: vermifugação trimestral ou semestral', 'Febantel + praziquantel (Drontal, Vermivet): amplo espectro', 'Fenbendazol: eficaz para Giardia e Trichuris', 'Milbemicina/moxidectina: prevenção de Dirofilária (filária do coração)', 'Coproparasitológico anual'] },
        ],
        checklists: [
          { label: 'Controle Antiparasitário', freq: 'daily', items: ['Antiparasitário externo em dia?', 'Vermifugação em dia?', 'Pulgas ou carrapatos visíveis?', 'Cão se cocÇa excessivamente?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Avaliação', tasks: ['Pelar o cão e procurar pulgas (pente fino)', 'Palpar para carrapatos (cabeça, pescoço, virilha, entre os dedos)', 'Examinar fezes para vermes visíveis'] },
          { day: 2, label: 'Dia 2 — Antiparasitário Externo', tasks: ['Antiparasitário oral (isoxazolina) dado?', 'Ou spot-on aplicado na nuca?', 'Produto correto para o peso?'], note: 'Isoxazolinas são mais efetivas que coleiras ou spot-on contra carrapatos' },
          { day: 3, label: 'Dia 3 — Ambiente', tasks: ['Cama do cão lavada a 60°C?', 'Aspirador na carpete e sofá?', 'Ambientes externos tratados com inseticida?'], note: '95% das pulgas estão no ambiente, não no cão' },
          { day: 4, label: 'Dia 4 — Vermifugação', tasks: ['Vermífugo de amplo espectro dado?', 'Dose correta para o peso?', 'Sem jejum necessário para a maioria dos vermífugos'] },
          { day: 5, label: 'Dia 5 — Outros Pets', tasks: ['Todos os pets da casa tratados?', 'Pulgas no gato = reinfecção do cão!', 'Aves e outros animais verificados?'] },
          { day: 6, label: 'Dia 6 — Leishmania', tasks: ['Mora em área endêmica?', 'Vacina e coleira de deltametrina para leishmaniose?', 'Evitar passeios ao entardecer (horário do mosquito)?'], note: 'Leishmaniose: mosquito pica mais das 18h às 22h' },
          { day: 7, label: 'Dia 7 — Próxima Data', tasks: ['Lembrete do próximo antiparasitário externo configurado?', 'Data da próxima vermifugação anotada?', 'Coproparasitológico anual agendado?'] },
        ],
        vetAlert: ['Carrapato na face próximo ao olho', 'Paralisia progressiva (toxina do carrapato Dermacentor)', 'Diarreia com sangue após vermifugação (sobrecarga de morte de parasitas)'],
        prevention: ['Produto regular mensal é mais efetivo que tratar a infestação depois', 'Cortar grama e arbustos do quintal reduz exposição a carrapatos', 'Leishmania: coleira impregnada + vacina + evitar horário crepuscular'],
        myths: [
          { myth: 'Cão que não sai de casa não precisa de antiparasitário', truth: 'Pulgas chegam em roupas e sapatos de humanos. Mosquitos da Leishmania entram em casas. Moscas depositam larvas de Dermatobia (bernes) em feridas. Todo cão, mesmo doméstico, precisa de antiparasitário regular.' },
        ],
        faq: [
          { q: 'Isoxazolinas (NexGard, Bravecto) são seguras?', a: 'São consideradas seguras pela maioria das agências regulatórias. Em 2018, a FDA emitiu alerta sobre convulsões em cães com histórico de epilepsia. Para cães saudáveis sem histórico neurológico, a relação risco-benefício é favorável. Consulte o veterinário se o cão tem histórico convulsivo.' },
        ],
      }],
    },
    {
      id: 'titulacao-anticorpos', name: 'Titulação de Anticorpos e Imunodeficiência Vacinal', emoji: '🔬', gradient: 'g-purple',
      description: 'Quando titular em vez de revacinar — não-respondedores e dogs com doenças imunomediadas',
      prevalence: 'Indicado em cães geriátricos, imunossuprimidos e raças reconhecidas como não-respondedoras',
      protocols: [{
        id: 'p1', title: 'Protocolo Titulação de Anticorpos', subtitle: 'VacciCheck, Titer Test e manejo do cão não-respondedor',
        stages: [
          { id: 's1', label: 'Candidato à Titulação', urgency: 'low', description: 'Cão com indicação de titular antes de revacinar.', signs: ['Geriátrico com doenças imunomediadas', 'Em uso de imunossupressor (prednisona)', 'Raça Rottweiler ou Dobermann (não-respondedores conhecidos)', 'Proprietário prefere minimizar vacinações'] },
          { id: 's2', label: 'Não-Respondedor', urgency: 'moderate', description: 'Título abaixo do protetor após vacinação correta.', signs: ['Título anticinomose < 1:32', 'Título antiparvovirose < 1:80', 'Sem resposta após série completa', 'Cão em risco: evitar áreas de infestação'] },
        ],
        triggers: ['Cão geriátrico > 7 anos', 'Imunossupressão ativa', 'Dúvida sobre histórico vacinal (resgate)', 'Raça predisposta a não-resposta'],
        steps: [
          { title: 'Teste de titulação', icon: '🔬', duration: 'Diagnóstico',
            description: 'VacciCheck (in-clinic) ou Titer Test (laboratório) medem anticorpos contra cinomose e parvovirose.',
            checklist: ['VacciCheck: resultado em 30 min na clínica (triagem)', 'Titer Test: resultado em 3-5 dias (referência)', 'Cinomose: título >= 1:32 = protetor', 'Parvovirose: título >= 1:80 = protetor', 'Raiva: titulação disponível (exigida para viagem internacional)'] },
          { title: 'Conduta conforme resultado', icon: '📋', duration: 'Pós-resultado',
            description: 'Título protetor = não revacinar. Título baixo = revacinar e retitular em 2-4 semanas.',
            checklist: ['Título protetor: próxima titulação em 1-3 anos', 'Título não protetor: revacinar e retitular em 4 semanas', 'Não-respondedor confirmado: vacina intradérmica (alternativa)', 'Não-respondedor: evitar locais de alto risco (canis, parques)', 'Raiva: obrigatoriedade legal supera a titulação em alguns estados'] },
        ],
        checklists: [
          { label: 'Monitoramento do Não-Respondedor', freq: 'daily', items: ['Cão evita aglomerações (canis, parques)?', 'Vacinas em dia conforme nova série?', 'Sinais de cinomose (secreção ocular, nasal, convulsão)?', 'Sinais de parvovirose (diarreia hemorrágica, vômito)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Coleta', tasks: ['Coleta de sangue para titulação', 'Aguardar resultado (30 min ou 3-5 dias)', 'Manter rotina vacinal enquanto aguarda'] },
          { day: 2, label: 'Dia 2-5 — Aguardar', tasks: ['Resultado disponível?', 'Título protetor confirmado?'] },
          { day: 3, label: 'Dia 5 — Resultado', tasks: ['Título protetor: registrar e agendar próxima titulação', 'Título baixo: agendar revacinação', 'Discutir com veterinário o protocolo individual'] },
          { day: 4, label: 'Se Não-Respondedor', tasks: ['Evitar canis e parques de alto risco', 'Série de revacinação com 2 doses', 'Manter distância de cães doentes'], note: 'Alguns cães simplesmente não montam imunidade (genético)' },
          { day: 5, label: 'Revacinação (se baixo)', tasks: ['Dose adicional de polivalente', 'Titulação de controle em 4 semanas', 'Se ainda baixo: não-respondedor confirmado'] },
          { day: 6, label: 'Documentação', tasks: ['Resultado de titulação arquivado?', 'Próxima titulação agendada?', 'Veterinário informado do status?'] },
          { day: 7, label: 'Plano Individualizado', tasks: ['Protocolo vacinal personalizado para o cão?', 'Estilo de vida ajustado ao risco?', 'Dono informado e consciente?'], note: 'Medicina veterinária preventiva individualizada é o futuro' },
        ],
        vetAlert: ['Não-respondedor com exposição de alto risco (cinomose ativa no bairro)', 'Cão imunossuprimido exposto sem proteção'],
        prevention: ['Titulação evita vacinação desnecessária em imunossuprimidos', 'Identifica não-respondedores que precisam de medidas adicionais de proteção'],
        myths: [
          { myth: 'Se o cão foi vacinado, está protegido com certeza', truth: '5-10% dos cães são não-respondedores genéticos, especialmente Rottweiler e Dobermann — não montam imunidade suficiente mesmo com vacinação correta. A titulação confirma se a vacina funcionou.' },
        ],
        faq: [
          { q: 'Posso levar o cão ao exterior sem vacinar se o título for protetor?', a: 'Para a maioria dos países, sim — o certificado de titulação de raiva é aceito (especialmente União Europeia e Austrália). Para a raiva, o título deve ser >= 0,5 UI/mL. Confira os requisitos do país de destino com antecedência mínima de 3 meses.' },
        ],
      }],
    },
  ],
};
