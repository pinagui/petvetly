import type { Category } from './types';

export const catToxicologia: Category = {
  id: 'toxicologia', name: 'Toxicologia', emoji: '☠️', gradient: 'g-red',
  description: 'Xilitol, chocolate, medicamentos humanos, plantas tóxicas e intoxicações comuns',
  conditions: [
    {
      id: 'xilitol', name: 'Intoxicação por Xilitol', emoji: '🍬', gradient: 'g-red',
      description: 'Adoçante fatal para cães — presente em chicletes, doces diet e manteigas de amendoim',
      prevalence: 'Emergência frequente — toxicidade a partir de 0,1 g/kg (1 chiclete pode matar um cão pequeno)',
      protocols: [{
        id: 'p1', title: 'Protocolo Intoxicação por Xilitol', subtitle: 'Indução de vômito, glicose IV e monitoramento hepático',
        stages: [
          { id: 's1', label: 'Hipoglicemia (30-60 min após ingestão)', urgency: 'emergency', description: 'Xilitol causa liberação maciça de insulina — hipoglicemia fulminante.', signs: ['Vômito', 'Ataxia e desequilíbrio', 'Tremores', 'Convulsões', 'Colapso', 'Início em 30-60 minutos após ingestão'] },
          { id: 's2', label: 'Necrose Hepática (12-72h)', urgency: 'emergency', description: 'Doses maiores causam necrose hepática aguda — mecanismo independente da insulina.', signs: ['Icterícia (mucosas amareladas)', 'Vômito persistente', 'Letargia profunda', 'Coagulopatia', 'Hepatomegalia', 'Falência hepática'] },
        ],
        triggers: ['Chicletes e balas sem açúcar (xilitol)', 'Manteiga de amendoim diet (verificar rótulo!)', 'Pasta de dente humana', 'Suplementos vitamínicos mastigáveis', 'Sorvetes e gelatinas diet', 'Xaropes para tosse'],
        steps: [
          { title: 'EMERGÊNCIA: veterinário imediato', icon: '🚨', duration: 'AGORA',
            description: 'Não espere sintomas. Xilitol age em 30-60 min. Induza vômito APENAS se indicado pelo vet — nunca com sal.',
            warning: 'Não induza vômito em casa com sal de cozinha — causa hipernatremia fatal. Use apenas peróxido de hidrogênio 3% se orientado pelo veterinário.',
            checklist: ['LIGUE IMEDIATAMENTE para o veterinário ou pronto-socorro', 'Informe: produto ingerido, quantidade, peso do cão, horário', 'Indução de vômito: apenas H2O2 3% oral — se veterinário orientar', 'Não dar leite, óleo ou outros — não ajudam', 'Glicose IV no hospital: urgente e contínua', 'Monitoramento glicêmico a cada hora nas primeiras 12h'] },
          { title: 'Suporte hospitalar', icon: '🏥', duration: '48-72h hospitalar',
            description: 'Hospitalização para fluidos com glicose, monitoramento hepático e tratamento de suporte.',
            checklist: ['Fluidos IV com dextrose contínua', 'Glicemia monitorada a cada 1-4h', 'ALT, bilirrubinas, tempo de coagulação (24h e 48h)', 'SAMe, silimarina (suporte hepático)', 'Vitamina K se coagulopatia', 'Transfusão de plasma fresco se CID'] },
        ],
        checklists: [
          { label: 'Recuperação Diária', freq: 'daily', items: ['Cão come e bebe?', 'Ativo e alerta?', 'Sinais de icterícia?', 'Exames de fígado no prazo?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Veterinário AGORA', 'Informe produto e quantidade', 'Não induza vômito em casa sem orientação'], note: 'Cada minuto conta' },
          { day: 2, label: 'Dia 2 — Hospitalar', tasks: ['Glicemia estabilizada?', 'Cão consciente e alerta?', 'ALT e bilirrubinas normais?'], note: 'Hepatoxicidade manifesta em 12-72h' },
          { day: 3, label: 'Dia 3 — Vigilância Hepática', tasks: ['Exames hepáticos de controle', 'Icterícia visível?', 'Suporte hepático iniciado'], note: 'Necrose hepática pode aparecer neste dia' },
          { day: 4, label: 'Dia 4 — Possível Alta', tasks: ['Função hepática normal?', 'Glicemia estável?', 'Dieta hepatoprotetora em casa'], note: 'Alta hospitalar se parâmetros normais' },
          { day: 5, label: 'Dia 5 — Vigilância em Casa', tasks: ['SAMe e silimarina oral', 'Observar icterícia', 'Apetite e atividade normais?'], note: 'Suporte hepático por 2-4 semanas' },
          { day: 6, label: 'Dia 6 — Eliminação da Fonte', tasks: ['Remova TODO xilitol de casa', 'Verifique rótulos de todos os produtos', 'Eduque família sobre o perigo'], note: 'Prevenir reexposição é vital' },
          { day: 7, label: 'Dia 7 — Exames de Controle', tasks: ['ALT e bilirrubinas de controle', 'Cão recuperado completamente?', 'Continue suporte hepático se indicado'], note: 'Controle 7 dias após intoxicação' },
        ],
        vetAlert: ['QUALQUER ingestão de xilitol é emergência — não espere sintomas', 'Cão inconsciente ou convulsionando', 'Icterícia apareceu'],
        prevention: ['Guardar TODOS os produtos com xilitol fora do alcance', 'Verificar rótulo de manteigas de amendoim — muitas marcas têm xilitol', 'Usar pasta de dente específica para cães', 'Educar crianças sobre o perigo'],
        myths: [
          { myth: 'Xilitol só mata em quantidade grande', truth: '0,1 g/kg causa hipoglicemia grave. 0,5 g/kg causa necrose hepática. Um único chiclete pode matar um cão de 5 kg.' },
          { myth: 'Dar leite ajuda a absorver o veneno', truth: 'Leite, óleo ou qualquer alimento NÃO neutraliza xilitol. Vá imediatamente ao veterinário.' },
        ],
        faq: [
          { q: 'Minha manteiga de amendoim tem xilitol?', a: 'Verifique o rótulo. Marcas como Jif, Skippy Natural e algumas orgânicas podem conter xilitol. Marcas sem xilitol são seguras em pequenas quantidades.' },
        ],
      }],
    },
    {
      id: 'chocolate', name: 'Intoxicação por Chocolate', emoji: '🍫', gradient: 'g-amber',
      description: 'Teobromina e cafeína do chocolate — cardiotóxico e neurotóxico para cães',
      prevalence: 'Uma das intoxicações mais comuns — especialmente em feriados (Páscoa, Natal)',
      protocols: [{
        id: 'p1', title: 'Protocolo Chocolate', subtitle: 'Cálculo da dose tóxica, indução de vômito e suporte cardíaco',
        stages: [
          { id: 's1', label: 'Dose Baixa (< 20mg/kg teobromina)', urgency: 'moderate', description: 'Sintomas gastrointestinais leves.', signs: ['Vômito e diarreia', 'Agitação', 'Polidipsia', 'Poliúria'] },
          { id: 's2', label: 'Dose Moderada (20-40mg/kg)', urgency: 'high', description: 'Sintomas neurológicos e cardiovasculares.', signs: ['Tremores musculares', 'Taquicardia', 'Hipertensão', 'Agitação intensa', 'Hiperto e hiperatividade'] },
          { id: 's3', label: 'Dose Alta (> 40mg/kg)', urgency: 'emergency', description: 'Convulsões, arritmias e morte possível.', signs: ['Convulsões', 'Arritmias cardíacas graves', 'Colapso', 'Morte'] },
        ],
        triggers: ['Chocolate amargo: 14-16 mg teobromina/g — o mais tóxico', 'Chocolate meio amargo: 5-8 mg/g', 'Chocolate ao leite: 1-2 mg/g', 'Chocolate branco: traços — raramente tóxico', 'Cacau em pó: 14-22 mg/g — muito tóxico', 'Dose letal estimada: 100-200 mg teobromina/kg'],
        steps: [
          { title: 'Calcule a dose e ligue para o vet', icon: '📱', duration: 'AGORA',
            description: 'Calcule: peso do cão × mg de teobromina/g do chocolate × gramas ingeridas. Se > 20mg/kg: veterinário URGENTE.',
            checklist: ['Calcule: chocolate amargo (14mg/g) × gramas × cão kg', '< 20mg/kg: monitore em casa, induza vômito se < 1h', '> 20mg/kg: veterinário imediatamente', 'Indução de vômito: H2O2 3% oral (1ml/kg, máx 45ml) — somente se alerta', 'Carvão ativado reduz absorção (dose com veterinário)', 'ECG se dose moderada/alta'] },
        ],
        checklists: [
          { label: 'Monitoramento Domiciliar (dose baixa)', freq: 'daily', items: ['Vômito?', 'Diarreia?', 'Agitação incomum?', 'Tremores?', 'Frequência cardíaca normal?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Ingestão', tasks: ['Calcule a dose de teobromina', 'Se > 20mg/kg: vet urgente', 'Indução de vômito se < 1h e alertas'], note: 'Quantidade e tipo de chocolate são decisivos' },
          { day: 2, label: 'Dia 2 — Recuperação', tasks: ['Sintomas gastrointestinais residuais?', 'Hidratação adequada', 'Alimentação leve'], note: 'Maioria se recupera em 24-72h' },
          { day: 3, label: 'Dia 3 — Normalização', tasks: ['Cão voltou ao normal?', 'Remoção de todo chocolate do alcance', 'Educar crianças'], note: 'Prevenção é chave' },
          { day: 4, label: 'Dia 4 — Segurança do Ambiente', tasks: ['Guarde chocolates em locais inacessíveis', 'Lixo com embalagens de chocolate bloqueado', 'Família ciente dos perigos'], note: 'Páscoa e Natal: risco alto' },
          { day: 5, label: 'Dia 5 — Educação', tasks: ['Explique para crianças sobre chocolates e cães', 'Liste outros alimentos proibidos', 'Coloque número do vet de emergência na geladeira'], note: 'Prevenção começa pela educação' },
          { day: 6, label: 'Dia 6', tasks: ['Cão 100% recuperado?', 'Ambiente seguro?'], note: 'Monitoramento concluído' },
          { day: 7, label: 'Dia 7', tasks: ['Revisão final de alimentos proibidos em casa', 'Cão saudável e ativo'], note: 'Fim do protocolo de acompanhamento' },
        ],
        vetAlert: ['Convulsões após ingestão de chocolate', 'Arritmia cardíaca', 'Colapso', 'Tremores intensos'],
        prevention: ['Guardar todo chocolate fora do alcance dos cães', 'Nunca dar chocolate como petisco', 'Páscoa e Natal: redobrar cuidados com chocolates espalhados'],
        myths: [
          { myth: 'Chocolate só é perigoso em grande quantidade', truth: 'Depende do tipo e do tamanho do cão. 50g de chocolate amargo podem ser letais para um cão de 3 kg.' },
        ],
        faq: [
          { q: 'Chocolate branco é perigoso para cães?', a: 'Chocolate branco tem teobromina em quantidade mínima e raramente causa toxicidade pela teobromina. Mas ainda tem açúcar e gordura em excesso, podendo causar pancreatite.' },
        ],
      }],
    },
    {
      id: 'medicamentos-humanos', name: 'Medicamentos Humanos', emoji: '💊', gradient: 'g-purple',
      description: 'Ibuprofeno, paracetamol, dipirona, aspirina — altamente tóxicos para cães',
      prevalence: 'Uma das principais causas de intoxicação domiciliar',
      protocols: [{
        id: 'p1', title: 'Protocolo Medicamentos Humanos Tóxicos', subtitle: 'Identificação do medicamento, dose ingesta e tratamento específico',
        stages: [
          { id: 's1', label: 'Ingestão Recente (< 2h)', urgency: 'high', description: 'Medicamento ainda não absorvido — janela para indução de vômito.', signs: ['Sem sintomas ainda', 'Ingestão confirmada', 'Cão alerta e em bom estado'] },
          { id: 's2', label: 'Sintomático', urgency: 'emergency', description: 'Medicamento absorvido causando toxicidade.', signs: ['Vômito (ibuprofeno: AINE)', 'Mucosas pálidas/azuladas (paracetamol)', 'Convulsões (tramadol, anticonvulsivantes)', 'Falência renal (AINEs)', 'Hepatotoxicidade (paracetamol)'] },
        ],
        triggers: ['Ibuprofeno e AINEs (advil, motrin): úlcera + insuficiência renal', 'Paracetamol (tylenol): metemoglobinemia e necrose hepática GRAVE', 'Dipirona: agranulocitose', 'Aspirina: úlcera gástrica e hepatotoxicidade', 'Antidepressivos: serotonina, convulsões', 'Benzodiazepínicos: sedação paradoxal em cães'],
        steps: [
          { title: 'Identificação e veterinário URGENTE', icon: '🚨', duration: 'IMEDIATO',
            description: 'NUNCA dar qualquer medicamento humano para cão sem prescrição veterinária. Nem dipirona, nem ibuprofeno.',
            checklist: ['Identifique o medicamento e dose ingerida', 'Ligue para o veterinário ou toxicologia animal', 'Indução de vômito APENAS se medicamento e orientação do vet', 'Carvão ativado se recomendado', 'Antídoto para paracetamol: N-acetilcisteína IV — hospitalar urgente'] },
        ],
        checklists: [
          { label: 'Monitoramento Pós-Ingestão', freq: 'daily', items: ['Mucosas rosadas (paracetamol pode deixar azul)', 'Urina normal (AINE: monitorar rins)', 'Cão alerta e comendo?', 'Exames de fígado e rins realizados?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Emergência', tasks: ['Veterinário imediatamente', 'Identifique o medicamento', 'Carvão ativado se prescrito'], note: 'Paracetamol: antídoto NAC urgente' },
          { day: 2, label: 'Dia 2 — Suporte Hospitalar', tasks: ['Fluidos IV', 'Exames renais e hepáticos', 'Antídoto específico se necessário'], note: 'AINE: proteger o rim é prioridade' },
          { day: 3, label: 'Dia 3 — Vigilância Orgânica', tasks: ['Ureia e creatinina?', 'ALT (fígado)?', 'Urina de cor normal?'], note: 'Danos renais e hepáticos podem aparecer tardiamente' },
          { day: 4, label: 'Dia 4 — Dieta Protetora', tasks: ['Dieta renal se função renal comprometida', 'Protetor gástrico oral', 'Hidratação incentivada'], note: 'Suporte nutricional importante' },
          { day: 5, label: 'Dia 5 — Acompanhamento', tasks: ['Cão melhora progressiva?', 'Continue exames se indicado', 'Medicação de suporte'], note: 'Recuperação em dias a semanas' },
          { day: 6, label: 'Dia 6 — Segurança do Ambiente', tasks: ['Remova TODOS os medicamentos humanos do alcance', 'Gavetas trancadas', 'Família ciente'], note: 'Prevenção definitiva' },
          { day: 7, label: 'Dia 7 — Revisão', tasks: ['Exames de controle', 'Cão saudável?', 'Ambiente seguro de medicamentos'], note: 'Fim do acompanhamento agudo' },
        ],
        vetAlert: ['Mucosas azuladas (metahemoglobinemia por paracetamol — morte em horas)', 'Oligúria (falência renal por AINE)', 'Convulsões', 'Colapso'],
        prevention: ['NUNCA dar medicamento humano sem prescrição veterinária', 'Guardar TODOS os medicamentos em locais inacessíveis', 'Ibuprofeno e paracetamol são venenosos para cães — sem exceção'],
        myths: [
          { myth: 'Dipirona é segura para cães em dose pequena', truth: 'Dipirona causa agranulocitose em cães. Nunca deve ser usada. Existe dipirona veterinária específica para cães, que tem dose e formulação diferentes.' },
          { myth: 'Paracetamol é o mais seguro dos analgésicos', truth: 'Em cães, paracetamol é extremamente tóxico — causa metemoglobinemia e necrose hepática fatal.' },
        ],
        faq: [
          { q: 'Qual analgésico posso dar ao meu cão em emergência?', a: 'Nenhum sem prescrição veterinária. Se o cão está com dor, ligue para o veterinário antes de dar qualquer medicamento. Meloxicam e carprofen são AINEs veterinários seguros com prescrição.' },
        ],
      }],
    },
    {
      id: 'plantas-toxicas', name: 'Plantas Tóxicas', emoji: '🌿', gradient: 'g-emerald',
      description: 'Comigo-ninguém-pode, lótus, espirradeira, azaléia, lírio — plantas perigosas em casa e jardim',
      prevalence: 'Frequente — muitos tutores não sabem que plantas comuns são fatais',
      protocols: [{
        id: 'p1', title: 'Protocolo Plantas Tóxicas', subtitle: 'Identificação da planta, remoção, sintomatologia e tratamento de suporte',
        stages: [
          { id: 's1', label: 'Irritação Local', urgency: 'moderate', description: 'Plantas com oxalato de cálcio — irritação oral e GI.', signs: ['Salivação excessiva', 'Vômito imediato', 'Dificuldade de engolir', 'Mucosa oral avermelhada'] },
          { id: 's2', label: 'Sistêmica', urgency: 'high', description: 'Plantas com glicosídeos cardíacos, alcaloides, etc.', signs: ['Vômito e diarreia persistentes', 'Fraqueza e letargia', 'Arritmias cardíacas', 'Convulsões', 'Icterícia'] },
          { id: 's3', label: 'Grave / Fatal', urgency: 'emergency', description: 'Oleandro, espirradeira, lírio do vale — altamente cardiotóxicas.', signs: ['Arritmia cardíaca grave', 'Colapso', 'Coma', 'Morte possível em horas'] },
        ],
        triggers: ['Comigo-ninguém-pode (Dieffenbachia): oxalato de cálcio — irritação oral/vias aéreas', 'Espirradeira/Oleandro: glicosídeos cardíacos — arritmias fatais', 'Lótus/Íris: irritação GI', 'Azaléia (Rhododendron): graianotoxinas — cardiotóxico', 'Antúrio: oxalato de cálcio', 'Lírio do Vale: glicosídeos cardíacos', 'Zamioculcas: oxalato', 'Cebola, alho: hemólise em cães'],
        steps: [
          { title: 'Identifique a planta e ligue ao vet', icon: '📱', duration: 'IMEDIATO',
            description: 'Fotografia da planta e envio ao veterinário. Consulte apps de identificação de plantas.',
            checklist: ['Fotografe a planta para identificação', 'Ligue ao veterinário com foto e quantidade estimada', 'Se irritação oral (comigo-ninguém-pode): enxague a boca com água', 'Não induza vômito em plantas com espinhos ou cristais (piorar irritação)', 'Espirradeira ou oleandro: EMERGÊNCIA máxima — ECG urgente'] },
        ],
        checklists: [
          { label: 'Vigilância Pós-Ingestão', freq: 'daily', items: ['Salivação ou vômito?', 'Letargia?', 'Frequência cardíaca normal?', 'Mucosas rosadas?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Identificação e Ação', tasks: ['Identifique a planta', 'Veterinário imediatamente se sintomas', 'Enxague oral se comigo-ninguém-pode'], note: 'Tipo de planta define urgência' },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Sintomas gastrointestinais?', 'Cão alerta e ativo?', 'Frequência cardíaca normal?'], note: 'Cardiotóxicas: risco nas primeiras 24h' },
          { day: 3, label: 'Dia 3 — Recuperação', tasks: ['Sintomas desapareceram?', 'Cão come e bebe?', 'Letargia resolvida?'], note: 'Maioria das irritações resolve em 24-48h' },
          { day: 4, label: 'Dia 4 — Mapeamento do Jardim', tasks: ['Identifique todas as plantas do jardim/casa', 'Remova as tóxicas ou coloque fora do alcance', 'Consulte lista de plantas tóxicas para cães'], note: 'Prevenção definitiva' },
          { day: 5, label: 'Dia 5 — Substituição das Plantas', tasks: ['Liste plantas seguras para cães', 'Substitua plantas tóxicas por não tóxicas', 'Cerque plantas perigosas que não podem ser removidas'], note: 'Casa segura para o cão' },
          { day: 6, label: 'Dia 6 — Educação', tasks: ['Informe toda família sobre as plantas tóxicas', 'Mantenha lista de emergências acessível', 'App de identificação de plantas no celular'], note: 'Conhecimento salva vidas' },
          { day: 7, label: 'Dia 7 — Revisão Final', tasks: ['Ambiente seguro confirmado?', 'Cão completamente recuperado?', 'Plano de prevenção estabelecido?'], note: 'Ambiente sem plantas tóxicas acessíveis ao cão' },
        ],
        vetAlert: ['Arritmia cardíaca após ingestão de planta', 'Colapso ou inconsciência', 'Convulsões', 'Salivação intensa com dificuldade respiratória (edema de vias aéreas — comigo-ninguém-pode)'],
        prevention: ['Mapeie e identifique todas as plantas da casa', 'Remova ou isole plantas tóxicas', 'Aplicativos de identificação de plantas são úteis (PlantNet, iNaturalist)'],
        myths: [
          { myth: 'Plantas de casa são todas seguras', truth: 'Comigo-ninguém-pode, antúrio e zamioculcas são comuns em decoração e altamente irritantes para cães. Espirradeira no jardim pode ser fatal.' },
        ],
        faq: [
          { q: 'Quais plantas são seguras para ter com cães?', a: 'Plantas seguras: girassol, rosa (sem espinhos acessíveis), orquídea, bambu da sorte (a maioria), violeta africana, estrelícia. Consulte sempre a ASPCA Animal Poison Control Database.' },
        ],
      }],
    },
    {
      id: 'rodenticidas', name: 'Raticidas e Rodenticidas', emoji: '🐀', gradient: 'g-red',
      description: 'Raticidas anticoagulantes — causam hemorragia interna grave com início tardio',
      prevalence: 'Intoxicação grave e subestimada — sintomas aparecem 3-7 dias após ingestão',
      protocols: [{
        id: 'p1', title: 'Protocolo Raticidas Anticoagulantes', subtitle: 'Vitamina K1 por 4 semanas mínimo e monitoramento de coagulação',
        stages: [
          { id: 's1', label: 'Latência (1-7 dias)', urgency: 'high', description: 'Ingestão conhecida mas ainda sem sintomas — vitamina K IMEDIATO.', signs: ['Ingestão conhecida do produto', 'Sem sintomas externos', 'Tempo de protrombina começa a subir', 'Janela para tratamento preventivo'] },
          { id: 's2', label: 'Hemorragia Ativa', urgency: 'emergency', description: 'Hemorragia interna ou externa — emergência absoluta.', signs: ['Epistaxe (sangramento nasal)', 'Sangue na urina ou fezes', 'Hematoma subcutâneo sem trauma', 'Dispneia (hemotórax)', 'Letargia e mucosas pálidas'] },
        ],
        triggers: ['Brodifacum, bromadiolona, clorofacinona — anticoagulantes de segunda geração', 'Ingestão direta do isco', 'Intoxicação de retransmissão (comer rato envenenado)', 'Veneno espalhado pelo vizinho — cão acessa quintal'],
        steps: [
          { title: 'Vitamina K1 IMEDIATAMENTE', icon: '💊', duration: '4 semanas mínimo',
            description: 'Vitamina K1 (fitomenadiona) é o antídoto específico. NUNCA use vitamina K3 (menadiona) — é tóxica em cães.',
            warning: 'Vitamina K1 por 4 SEMANAS MÍNIMAS. Brodifacum tem meia-vida longa. Parar antes = recidiva fatal.',
            checklist: ['Vitamina K1: 2,5mg/kg 2x/dia POR 4-6 SEMANAS', 'Dar com alimento gorduroso (aumenta absorção)', 'TAP/TP (tempo de protrombina) 48-72h após início para confirmar resposta', 'Repetir TP 48h após parar o tratamento (não parar se ainda alterado)', 'Transfusão de plasma ou sangue total se hemorragia ativa'] },
        ],
        checklists: [
          { label: 'Vitamina K1 Diária (4-6 semanas)', freq: 'daily', items: ['Vitamina K1 com comida gordurosa?', 'Dia ___ de 28 mínimos', 'Algum sangramento visível?', 'Fezes normais (sangue nas fezes)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico e K1', tasks: ['TP/TAP urgente', 'Vitamina K1 iniciada (2,5mg/kg 2x/dia)', 'Com comida gordurosa para absorção'], note: 'Iniciar K1 mesmo antes do TP alterar' },
          { day: 2, label: 'Dia 2 — Monitoramento', tasks: ['Sangramentos visíveis?', 'Mucosas rosadas?', 'Vitamina K1 em dia'], note: 'Hemorragia pode aparecer a qualquer momento sem K1' },
          { day: 3, label: 'Dia 3 — TP de Controle', tasks: ['TP 48-72h após início do K1', 'Melhorando? (TP caindo)', 'Ajuste de dose se necessário'], note: 'Confirmação de resposta ao tratamento' },
          { day: 4, label: 'Dia 4 — Vigilância Contínua', tasks: ['Epistaxe?', 'Urina com sangue?', 'Tosse ou dispneia (hemotórax)?'], note: 'Qualquer sangramento = emergência' },
          { day: 5, label: 'Dia 5 — Semana 1 Concluída', tasks: ['Continue K1 religiosamente', '28 dias mínimos — sem exceção', 'Não pule doses'], note: '4 semanas de K1 são obrigatórias' },
          { day: 6, label: 'Dia 6 — Investigação da Fonte', tasks: ['Onde o cão acessou o veneno?', 'Isole a área ou remova o isco', 'Vizinhos colocam raticidas?'], note: 'Eliminar reexposição é fundamental' },
          { day: 7, label: 'Dia 7 — Revisão Semanal', tasks: ['K1 dado todos os dias?', 'TP de controle semanal', 'Cão sem sangramentos?'], note: 'Monitoramento semanal por 4-6 semanas' },
        ],
        vetAlert: ['Qualquer sangramento após suspeita de raticida', 'Hemorragia interna (dispneia, mucosas pálidas)', 'Epistaxe', 'TP muito prolongado'],
        prevention: ['Não usar raticidas no ambiente onde o cão tem acesso', 'Comunicar uso de raticidas em áreas adjacentes', 'Raticidas "seguros" para pets existem — consulte veterinário'],
        myths: [
          { myth: 'Se o cão não mostrou sintomas, está seguro', truth: 'Raticidas anticoagulantes causam sintomas 3-7 dias após ingestão, quando a vitamina K se esgota. Sem tratamento preventivo, o cão pode morrer sem aviso.' },
        ],
        faq: [
          { q: 'Posso parar a vitamina K após 2 semanas se o cão parece bem?', a: 'Não. Brodifacum e outros de segunda geração ficam no corpo por semanas. Parar antes de 4-6 semanas causa recidiva da coagulopatia, frequentemente fatal. TP pós-tratamento deve estar normal antes de parar.' },
        ],
      }],
    },
  ],
};
