import type { Category } from './types';

export const catDermatologia: Category = {
  id: 'dermatologia', name: 'Dermatologia Avançada', emoji: '🔬', gradient: 'g-amber',
  description: 'Seborreia, foliculite, piodermite profunda, acne e distúrbios complexos de pele',
  conditions: [
    {
      id: 'seborreia', name: 'Seborreia Canina', emoji: '✨', gradient: 'g-amber',
      description: 'Distúrbio de queratinização — pele oleosa e escamosa com odor intenso',
      prevalence: '~3% dos cães; Cocker Spaniel, Basset, Labrador mais afetados',
      protocols: [{
        id: 'p1', title: 'Protocolo Seborreia', subtitle: 'Shampoo terapêutico semanal e tratamento da causa base',
        stages: [
          { id: 's1', label: 'Seca (Sicca)', urgency: 'moderate', description: 'Descamação seca em flocos brancos sem oleosidade.', signs: ['Escamas brancas ou acinzentadas no pelo', 'Pelo opaco e quebradiço', 'Coceira moderada', 'Sem oleosidade excessiva'] },
          { id: 's2', label: 'Oleosa (Oleosa)', urgency: 'moderate', description: 'Excesso de sebo com odor rançoso característico.', signs: ['Pelo grudento e oleoso', 'Odor forte e rançoso', 'Descamação amarelada/amarronzada', 'Coceira intensa', 'Infecção secundária frequente'] },
        ],
        triggers: ['Primária: genética (Cocker, Basset)', 'Secundária (mais comum): hipotireoidismo, hiperadrenocorticismo, diabetes', 'Deficiência de zinco (raças Nórdicas)', 'Alergia alimentar ou ambiental', 'Malassezia (levedura) frequentemente associada'],
        steps: [
          { title: 'Investigação da causa base', icon: '🔬', duration: 'Diagnóstico',
            description: 'Seborreia primária é diagnóstico de exclusão. Sempre buscar causa tratável.',
            checklist: ['T4 e TSH (hipotireoidismo)', 'Cortisol basal ou teste de supressão de dexametasona (Cushing)', 'Glicemia (diabetes)', 'Biópsia de pele se primária suspeita', 'Citologia para Malassezia'] },
          { title: 'Banho terapêutico específico', icon: '🛁', duration: '2x/semana → manutenção',
            description: 'Shampoo com enxofre + ácido salicílico (seborreia seca) ou gluconato de zinco + ácido salicílico (oleosa). Contato de 10 min.',
            checklist: ['Seborreia seca: shampoo com enxofre 1% + ácido salicílico 2%', 'Seborreia oleosa: shampoo com gluconato de zinco + benzoil peróxido 2,5%', 'Frequência: 2x/semana fase aguda → 1x/semana manutenção', '10 min de contato antes de enxaguar', 'Umectante/condicionador após (especialmente seborreia seca)', 'Antisseborreico tópico pode ser necessário entre banhos'] },
          { title: 'Suplementação de ácidos graxos', icon: '💊', duration: 'Diário',
            description: 'Ômega-3 (EPA+DHA) e ômega-6 melhoram a barreira cutânea e reduzem descamação.',
            checklist: ['Ômega-3: 1mL óleo salmão/5kg/dia', 'Vitamina E: 10UI/kg/dia (sinérgico)', 'Biotina 5mg/dia se queda de pelo associada', 'Zinco quelado se deficiência diagnosticada'] },
        ],
        checklists: [
          { label: 'Banho Terapêutico', freq: 'weekly', items: ['Banho com shampoo específico?', '10 min de contato?', 'Odor do pelo está controlado?', 'Escamas diminuindo?'] },
          { label: 'Suplementação Diária', freq: 'daily', items: ['Ômega-3 na ração?', 'Vitamina E dada?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Exames para causa base (tireoide, Cushing)', 'Citologia para Malassezia', 'Shampoo terapêutico comprado'], note: 'Causa base deve ser tratada' },
          { day: 2, label: 'Dia 2 — Primeiro Banho Terapêutico', tasks: ['Banho com shampoo antisseborreico', '10 min de contato antes de enxaguar', 'Condicionador após (se seca)'], note: 'Melhora visível após 2-3 banhos' },
          { day: 3, label: 'Dia 3 — Suplementação', tasks: ['Inicie ômega-3', 'Vitamina E com a ração', 'Dieta de qualidade com gorduras boas'], note: 'Ômega-3 age em 4-8 semanas' },
          { day: 4, label: 'Dia 4 — Avaliação do Odor', tasks: ['Pelo ainda com odor forte?', 'Malassezia associada: antifúngico prescrito?', 'Ambiente limpo (cama lavada)?'], note: 'Odor é marcador de Malassezia' },
          { day: 5, label: 'Dia 5 — Segundo Banho', tasks: ['2º banho terapêutico da semana', 'Avalie redução de escamas', 'Pelo menos oleoso após banho?'], note: 'Protocolo: 2 banhos/semana no início' },
          { day: 6, label: 'Dia 6 — Resultado dos Exames', tasks: ['Hipotireoidismo: iniciar levotiroxina', 'Cushing: protocolo específico', 'Seborreia melhora com controle da doença base'], note: 'Causa base é a chave' },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Escamas e odor melhores?', 'Coceira diminuiu?', 'Continue por 4-8 semanas para resposta completa'], note: 'Resposta completa em 4-8 semanas' },
        ],
        vetAlert: ['Seborreia fulminante com infecção secundária', 'Cão não melhora após 8 semanas de tratamento', 'Perda de pelo associada'],
        prevention: ['Banho mensal preventivo com shampoo neutro pH 7,4', 'Dieta com ômega-3 incluído', 'Controle de hipotireoidismo se diagnosticado'],
        myths: [
          { myth: 'Seborreia é só sujeira — banho frequente piora', truth: 'Banho com shampoo errado pode piorar. Mas o shampoo TERAPÊUTICO adequado 2x/semana é fundamental para o controle.' },
        ],
        faq: [
          { q: 'Cão com seborreia pode conviver com crianças sem problema?', a: 'Sim. Seborreia não é contagiosa. Mas Malassezia em excesso (levedura associada) raramente pode transmitir para imunossuprimidos. Higiene básica é suficiente.' },
        ],
      }],
    },
    {
      id: 'foliculite-bacteriana', name: 'Piodermite & Foliculite Bacteriana', emoji: '🔴', gradient: 'g-red',
      description: 'Infecção bacteriana da pele — de superficial (impetigo) a profunda (celulite)',
      prevalence: '~30% das doenças cutâneas em cães; Staphylococcus é o principal agente',
      protocols: [{
        id: 'p1', title: 'Protocolo Piodermite Canina', subtitle: 'Antibiótico sistêmico, shampoo clorexidina e identificação de doença de base',
        stages: [
          { id: 's1', label: 'Superficial (Piodermite de Superfície)', urgency: 'low', description: 'Hot spot, infecção interdigital ou dobra — superficial, localizada.', signs: ['Hot spot: área circular vermelha, úmida, quente', 'Lambedura intensa em ponto específico', 'Pelos colados', 'Odor local'] },
          { id: 's2', label: 'Rasa (Foliculite)', urgency: 'moderate', description: 'Infecção do folículo piloso — pústulas e crostas.', signs: ['Pústulas (bolhas com pus)', 'Crostas amareladas', 'Alopecia focal em "traça"', 'Coceira e lambedura'] },
          { id: 's3', label: 'Profunda (Furunculose/Celulite)', urgency: 'high', description: 'Infecção atinge derme profunda — fístulas e sepse possível.', signs: ['Nódulos flutuantes (furunculose)', 'Fístulas drenantes', 'Dor intensa ao toque', 'Febre', 'Possível sepse'] },
        ],
        triggers: ['Staphylococcus pseudintermedius — principal agente', 'Atopia (predispõe a piodermite recorrente)', 'Hipotireoidismo', 'Hiperadrenocorticismo (Cushing)', 'Diabetes mellitus', 'Trauma (arranhões, mordidas)', 'Corpo estranho subcutâneo'],
        steps: [
          { title: 'Shampoo de clorexidina (tratamento de base)', icon: '🛁', duration: '2-3x/semana',
            description: 'Clorexidina 2-4% tem excelente atividade anti-Staphylococcus. Deve ser parte obrigatória do tratamento.',
            checklist: ['Shampoo clorexidina 2-4%: 2-3 banhos/semana', 'Contato mínimo de 10 minutos', 'Mousse ou spray de clorexidina para locais sem poder banhar', 'Limpe hot spot com clorexidina diluída 0,05%', 'Nunca usar álcool ou água oxigenada em hot spots'] },
          { title: 'Antibiótico sistêmico', icon: '💊', duration: '3-6 semanas mínimo',
            description: 'Piodermite profunda requer 6-8 semanas. NUNCA interromper antes do tempo.',
            checklist: ['Piodermite superficial: cefalexina 20-30mg/kg 2x/dia por 3 semanas', 'Piodermite profunda: cefalexina por 6-8 semanas', 'Amoxicilina-clavulanato: alternativa de 1ª linha', 'Cultura e antibiograma se recorrente (resistência a MRSA)', 'Clindamicina ou doxiciclina se suspeita de MRSA'] },
          { title: 'Hot spot: cuidados imediatos', icon: '✂️', duration: 'Imediato',
            description: 'Hot spot exige tricotomia (raspar ao redor), limpeza e anti-inflamatório.',
            checklist: ['Raspar os pelos ao redor (1-2 cm margem)', 'Limpar com clorexidina 0,05%', 'Spray de cortisona tópico (hidrocortisona 0,5-1%)', 'Colar elizabetano para parar a lambedura', 'Secagem completa — úmido perpetua o hot spot'] },
        ],
        checklists: [
          { label: 'Antibiótico Diário', freq: 'daily', items: ['Antibiótico dado nos horários?', 'Sem interrupção antecipada?', 'Dia ___ de __ total', 'Crostas caindo?'] },
          { label: 'Banho com Clorexidina', freq: 'weekly', items: ['3 banhos esta semana?', 'Pústulas diminuindo?', 'Odor melhorou?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico e Início', tasks: ['Raspado de pele e citologia', 'Inicie antibiótico e clorexidina', 'Tricotomia em hot spots'], note: 'Citologia confirma bactérias e orienta antibiótico' },
          { day: 2, label: 'Dia 2 — Primeiro Banho', tasks: ['Banho com clorexidina 10 min', 'Antibiótico em dia', 'Colar elizabetano se lambe'], note: 'Clorexidina é tão importante quanto o antibiótico' },
          { day: 3, label: 'Dia 3 — Monitoramento', tasks: ['Pústulas menos inflamadas?', 'Lambedura diminuiu?', 'Hot spot secando?'], note: 'Melhora esperada em 3-5 dias' },
          { day: 4, label: 'Dia 4 — Investigação Causa Base', tasks: ['T4 para hipotireoidismo?', 'Atopia associada?', 'Piodermite recorrente: investigar doença de base'], note: 'Piodermite sem causa base tratada recidiva' },
          { day: 5, label: 'Dia 5 — Segundo Banho', tasks: ['2º ou 3º banho da semana', 'Crostas caindo após banho?', 'Contato de 10 min garantido?'], note: 'Frequência de banho é fundamental' },
          { day: 6, label: 'Dia 6 — Avaliação Intermediária', tasks: ['Lesões diminuíram claramente?', 'Antibiótico tolerado?', 'Continue por tempo total prescrito'], note: 'Não interrompa com melhora clínica parcial' },
          { day: 7, label: 'Dia 7 — Revisão', tasks: ['Melhora visível em relação ao dia 1?', 'Antibiótico continuado?', 'Próxima revisão veterinária agendada?'], note: 'Piodermite superficial: reavaliação em 3 semanas' },
        ],
        vetAlert: ['Fístulas drenando pus (piodermite profunda)', 'Febre e letargia (sepse)', 'Não melhora após 2 semanas de antibiótico', 'Hot spot se expandindo rapidamente'],
        prevention: ['Controle de atopia (principal predisponente)', 'Banho regular com shampoo neutro', 'Secar completamente após banho ou natação', 'Controle de pulgas (mordidas causam trauma que predispõe)'],
        myths: [
          { myth: 'Hot spot é só lavar com água oxigenada', truth: 'Água oxigenada retarda cicatrização. Hot spot requer tricotomia, clorexidina, corticoide tópico e colar elizabetano.' },
        ],
        faq: [
          { q: 'Por que meu cão tem piodermite recorrente?', a: 'Piodermite recorrente quase sempre tem doença de base (atopia, hipotireoidismo, Cushing, diabetes). Tratar só o antibiótico sem resolver a causa base = recidiva garantida.' },
        ],
      }],
    },
    {
      id: 'acne-canina', name: 'Acne Canina', emoji: '🔵', gradient: 'g-blue',
      description: 'Foliculite e furunculose do focinho — frequente em cães jovens de raças grandes',
      prevalence: 'Comum em filhotes e adultos jovens de raças de focinho curto — Boxer, Dobermann, Great Dane',
      protocols: [{
        id: 'p1', title: 'Protocolo Acne Canina', subtitle: 'Higiene do focinho com clorexidina, não espremer e resolução espontânea',
        stages: [
          { id: 's1', label: 'Comedões (Cravos)', urgency: 'low', description: 'Folículos bloqueados sem infecção — acne pré-inflamatória.', signs: ['Pontinhos pretos no focinho', 'Sem vermelhidão', 'Sem dor ao toque', 'Focinho levemente rugoso'] },
          { id: 's2', label: 'Pápulas e Pústulas', urgency: 'low', description: 'Inflamação folicular com infecção secundária.', signs: ['Nódulos avermelhados no focinho', 'Pústulas (cabeça branca)', 'Leve coceira ou esfregação do focinho'] },
          { id: 's3', label: 'Furunculose', urgency: 'moderate', description: 'Inflamação profunda com risco de cicatriz.', signs: ['Nódulos grandes e dolorosos', 'Drenagem de pus', 'Possível sangramento', 'Cicatriz permanente se não tratado'] },
        ],
        triggers: ['Trauma folicular repetido (esfregando focinho no chão, tigela)', 'Pelos de focinho curtos que encravam (raças de pelo curto)', 'Contato com materiais irritantes (tigelas plásticas)', 'Hormônios na adolescência (4-12 meses)'],
        steps: [
          { title: 'Higiene do focinho', icon: '🧴', duration: 'Diário',
            description: 'Limpeza suave com clorexidina diluída. Nunca espremer — causa furunculose.',
            checklist: ['Lavar focinho com clorexidina 0,05% diluída 2x/dia', 'Compressa morna suave 2 min antes (abre os poros)', 'NUNCA espremer — força conteúdo para derme profunda', 'Trocar tigela plástica por inox ou cerâmica', 'Peróxido de benzoíla 2,5% gel: aplicar e deixar 5 min'] },
          { title: 'Antibiótico tópico ou sistêmico', icon: '💊', duration: '3-6 semanas',
            description: 'Casos leves: tópico. Furunculose: antibiótico sistêmico.',
            checklist: ['Leve a moderado: mupirocina tópica 2x/dia', 'Grave (furunculose): cefalexina sistêmica 20-30mg/kg 2x/dia', 'Corticoide tópico de baixa potência se inflamação intensa', 'Retinoide tópico em casos crônicos refratários'] },
        ],
        checklists: [
          { label: 'Higiene Diária do Focinho', freq: 'daily', items: ['Limpeza com clorexidina?', 'Tigela de inox ou cerâmica (não plástico)?', 'Cão esfrega focinho no tapete ou chão?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Início do Cuidado', tasks: ['Troque a tigela plástica por inox', 'Inicie limpeza do focinho 2x/dia', 'Antibiótico tópico se prescrito'], note: 'Tigela plástica acumula bactérias' },
          { day: 2, label: 'Dia 2 — Rotina de Higiene', tasks: ['Compressa morna e limpeza', 'Nunca espremer', 'Colar elizabetano se esfrega muito o focinho'], note: 'Fricção mecânica perpetua a acne' },
          { day: 3, label: 'Dia 3 — Avaliação', tasks: ['Lesões menos inflamadas?', 'Continue o protocolo de higiene', 'Novas lesões aparecem?'], note: 'Acne pode piorar antes de melhorar' },
          { day: 4, label: 'Dia 4 — Alimentação', tasks: ['Ração elevada (reduz contato do focinho com chão)', 'Evitar ossos que traumatizam o focinho', 'Higiene após refeição'], note: 'Trauma do focinho é gatilho' },
          { day: 5, label: 'Dia 5 — 2ª Avaliação', tasks: ['Pústulas maturando e drenando naturalmente?', 'Sem espressar', 'Limpeza continua'], note: 'Drenagem natural é ok, espressão não é' },
          { day: 6, label: 'Dia 6', tasks: ['Continue higiene', 'Avalie se sistêmico é necessário'], note: 'Furunculose sem melhora: antibiótico sistêmico' },
          { day: 7, label: 'Dia 7 — Avaliação Semanal', tasks: ['Acne melhorou?', 'Cicatrizes?', 'Protocolo adequado?'], note: 'Maioria resolve em 3-6 semanas' },
        ],
        vetAlert: ['Furunculose extensa com drenagem de pus', 'Focinho muito doloroso', 'Febre associada'],
        prevention: ['Tigela de inox ou cerâmica — nunca plástica', 'Evitar contato do focinho com superfícies irregulares', 'Higiene regular do focinho'],
        myths: [
          { myth: 'Espremer os caroços do focinho ajuda a curar mais rápido', truth: 'Esprimir força as bactérias para camadas profundas, convertendo foliculite em furunculose grave com risco de cicatriz.' },
        ],
        faq: [
          { q: 'Acne de cachorro passa sozinha?', a: 'Casos leves frequentemente resolvem com higiene e troca da tigela. Furunculose requer tratamento ativo. Com boa higiene, a maioria resolve em 3-6 semanas.' },
        ],
      }],
    },
    {
      id: 'calcinose-cutis', name: 'Calcinose Cutis', emoji: '⚪', gradient: 'g-indigo',
      description: 'Depósito de cálcio na pele — marcador de hiperadrenocorticismo (Cushing)',
      prevalence: '~5% dos cães com Cushing; significativa como marcador diagnóstico',
      protocols: [{
        id: 'p1', title: 'Protocolo Calcinose Cutis', subtitle: 'Tratamento do Cushing como causa base e cuidados locais das lesões',
        stages: [
          { id: 's1', label: 'Inicial', urgency: 'moderate', description: 'Placas brancas calcificadas no pescoço ou dorso.', signs: ['Placas brancas ou amareladas endurecidas', 'Localização típica: pescoço, axila, virilha, dorso', 'Pelos caídos na área', 'Coceira moderada'] },
          { id: 's2', label: 'Avançado', urgency: 'high', description: 'Lesões extensas com infecção secundária.', signs: ['Múltiplas placas calcificadas', 'Infecção bacteriana e fúngica secundária', 'Ulceração', 'Dor ao toque'] },
        ],
        triggers: ['Hiperadrenocorticismo (Cushing) — principal causa', 'Uso prolongado de corticosteróides (iatrogênica)', 'Trauma local (calcinose circunscrita)', 'Calcinose metastática por hipercalcemia'],
        steps: [
          { title: 'Diagnóstico de Cushing obrigatório', icon: '🔬', duration: 'Diagnóstico',
            description: 'Calcinose cutis é quase sempre marcador de Cushing. Tratar a calcinose sem tratar o Cushing = fracasso.',
            checklist: ['Cortisol urinário:creatinina (triagem)', 'Teste de supressão de baixa dose de dexametasona', 'Ultrassom adrenal', 'Diagnóstico de Cushing e início de tratamento (trilostano ou mitotano)', 'Calcinose resolve em meses após controle do Cushing'] },
          { title: 'Cuidados locais', icon: '🧴', duration: 'Enquanto lesões persistem',
            description: 'Controle de infecção secundária e conforto enquanto o Cushing é tratado.',
            checklist: ['Clorexidina nas lesões infectadas', 'Antifúngico tópico (Malassezia frequente)', 'Não tentar remover as placas mecanicamente (causa trauma)', 'Proteção de lesões abertas com curativo', 'Antibiótico sistêmico se celulite'] },
        ],
        checklists: [
          { label: 'Monitoramento de Lesões', freq: 'weekly', items: ['Lesões diminuindo após início do trilostano?', 'Infecção controlada?', 'Cortisol sob controle (dosagem)?'] },
        ],
        weeklyPlan: [
          { day: 1, label: 'Dia 1 — Diagnóstico', tasks: ['Cortisol urinário e ACTH test', 'Ultrassom adrenal', 'Início do trilostano se Cushing confirmado'], note: 'Calcinose = Cushing até prova em contrário' },
          { day: 2, label: 'Dia 2 — Cuidado das Lesões', tasks: ['Limpeza com clorexidina', 'Antifúngico se Malassezia', 'Antibiótico se infecção bacteriana'], note: 'Infecção secundária é regra' },
          { day: 3, label: 'Dia 3 — Monitoramento do Cushing', tasks: ['Trilostano iniciado?', 'Cortisol de controle agendado?', 'Sinais de hipoadrenocorticismo?'], note: 'Trilostano requer monitoramento rigoroso' },
          { day: 4, label: 'Dia 4', tasks: ['Lesões estáveis?', 'Infecção controlada?', 'Continue protocolo'], note: 'Calcinose resolve lentamente (meses)' },
          { day: 5, label: 'Dia 5', tasks: ['Novas lesões aparecendo?', 'Tretamento do Cushing em dia?'], note: 'Novas lesões = Cushing mal controlado' },
          { day: 6, label: 'Dia 6 — Cortisol de Controle', tasks: ['Cortisol pós-trilostano realizado?', 'Nível ideal?', 'Ajuste de dose se necessário'], note: 'Controle do Cushing é o tratamento da calcinose' },
          { day: 7, label: 'Dia 7 — Avaliação', tasks: ['Lesões regredindo?', 'Cortisol controlado?', 'Continue protocolo por meses'], note: 'Calcinose demora 3-6 meses para resolver com Cushing controlado' },
        ],
        vetAlert: ['Lesões ulceradas extensas', 'Celulite ou sepse secundária', 'Suspeita de Cushing não tratado'],
        prevention: ['Controle de Cushing se diagnosticado', 'Uso mínimo de corticosteróides — somente com prescrição', 'Monitoramento dermatológico em cães com Cushing'],
        myths: [
          { myth: 'Posso remover as placas da calcinose cirurgicamente', truth: 'A remoção cirúrgica sem tratar o Cushing é inútil — novas lesões aparecem. Tratar a causa base resolve as lesões ao longo do tempo.' },
        ],
        faq: [
          { q: 'Quanto tempo leva para a calcinose desaparecer?', a: 'Com Cushing bem controlado, as lesões regridem gradualmente em 3-6 meses. Lesões muito extensas podem levar mais tempo.' },
        ],
      }],
    },
  ],
};
